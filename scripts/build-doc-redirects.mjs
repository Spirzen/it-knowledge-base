/**
 * Все устаревшие URL docs/ → канонический slug (папка, label категории, /docs/…).
 * Запуск: npm run docs:redirects
 */
import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import matter from 'gray-matter';
import {createSlugger} from '@docusaurus/utils';
import {resolveDocHref} from './lib/docUrl.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');
const docsDir = path.join(root, 'docs');
const outFile = path.join(root, 'src', 'data', 'docLegacyRedirects.json');

const SKIP_NAMES = new Set(['_category_.json']);

/** Корневые разделы docs: в URL остаётся имя папки, не slug(label). */
const LATIN_SECTION_ROOTS = new Set([
  'tools',
  'context',
  'philosophy',
  'lab',
  'encyclopedia',
  'glossary',
  'about',
  'section',
]);

/** @typedef {{ label?: string, link?: { type?: string, slug?: string } }} CategoryJson */

/**
 * @param {string} href
 */
function normalizeHref(href) {
  const trimmed = href.trim();
  if (!trimmed) {
    return '';
  }
  const withSlash = trimmed.startsWith('/') ? trimmed : `/${trimmed}`;
  // Keep legacy unicode paths, but escape reserved URL markers that break pathname validation.
  const escaped = withSlash.replace(/#/g, '%23').replace(/\?/g, '%3F');
  return escaped.replace(/\/+$/, '') || '/';
}

/**
 * Сегменты URL из подписи категории: slugger (финтех) и label как в старых slug (Финтех).
 * @param {string} label
 * @param {import('@docusaurus/utils').Slugger} slugger
 */
function labelSegmentsForLegacy(label, slugger) {
  const trimmed = label.trim();
  if (!trimmed) {
    return [];
  }
  /** @type {Set<string>} */
  const segments = new Set();
  const slugged = slugger.slug(trimmed);
  const lowerLabel = trimmed.toLocaleLowerCase('ru');
  // Slugger даёт нижний регистр (торговля); label — «Торговля». На Windows оба URL → один файл.
  if (slugged && slugged !== lowerLabel) {
    segments.add(slugged);
  }
  // Старые frontmatter slug: /context/Финтех/1, /context/Видеоигры/10 (label целиком)
  segments.add(trimmed);
  // Если в метаданных label был только в нижнем регистре — добавляем «заглавную» форму
  if (slugged && trimmed === slugged) {
    const titled = trimmed.replace(/^(\p{Ll})/u, (ch) => ch.toUpperCase());
    if (titled !== trimmed) {
      segments.add(titled);
    }
  }
  return [...segments];
}

/**
 * Для docs/context/*: /context/{label}/… при каноническом /context/{folder}/….
 * @param {string} relNoExt
 * @param {string} canonical
 * @param {Map<string, CategoryJson>} categoryByDir
 * @param {import('@docusaurus/utils').Slugger} slugger
 */
function contextLabelSlugAliases(relNoExt, canonical, categoryByDir, slugger) {
  const parts = relNoExt.split('/').filter(Boolean);
  if (parts[0] !== 'context' || parts.length < 2) {
    return [];
  }
  const catDir = path.join(docsDir, ...parts.slice(0, 2));
  const cat = categoryByDir.get(catDir);
  const label = cat?.label?.trim();
  if (!label) {
    return [];
  }
  const folder = parts[1];
  const tail = parts.slice(2).join('/');
  const canonicalNorm = normalizeHref(canonical);
  /** @type {Set<string>} */
  const legacies = new Set();
  for (const seg of labelSegmentsForLegacy(label, slugger)) {
    if (seg === folder) {
      continue;
    }
    legacies.add(normalizeHref(tail ? `/context/${seg}/${tail}` : `/context/${seg}`));
  }
  legacies.delete(canonicalNorm);
  return [...legacies];
}

/**
 * Сегмент категории из slug дочерней статьи (например `Культура` в `/philosophy/Культура/1`).
 * @param {string} catDirRel
 */
function categorySegmentFromDocSlugs(catDirRel) {
  const fullDir = path.join(docsDir, catDirRel);
  if (!fs.existsSync(fullDir)) {
    return null;
  }
  const depth = catDirRel.split('/').filter(Boolean).length;
  for (const entry of fs.readdirSync(fullDir, {withFileTypes: true})) {
    if (!entry.isFile() || !/\.mdx?$/i.test(entry.name)) {
      continue;
    }
    let data;
    try {
      data = matter(fs.readFileSync(path.join(fullDir, entry.name), 'utf8')).data;
    } catch {
      continue;
    }
    if (typeof data.slug !== 'string' || !data.slug.trim()) {
      continue;
    }
    const slugParts = normalizeHref(data.slug).split('/').filter(Boolean);
    if (slugParts.length > depth) {
      return slugParts[depth - 1];
    }
  }
  return null;
}

function inferCategoryIndexFromDocSlugs(relDir) {
  const fullDir = path.join(docsDir, relDir);
  if (!fs.existsSync(fullDir)) {
    return null;
  }
  for (const entry of fs.readdirSync(fullDir, {withFileTypes: true})) {
    if (!entry.isFile() || !/\.mdx?$/i.test(entry.name)) {
      continue;
    }
    let data;
    try {
      data = matter(fs.readFileSync(path.join(fullDir, entry.name), 'utf8')).data;
    } catch {
      continue;
    }
    const slug = data.slug;
    if (typeof slug !== 'string' || !slug.trim()) {
      continue;
    }
    const slugParts = normalizeHref(slug).split('/').filter(Boolean);
    const fileStem = entry.name.replace(/\.mdx?$/i, '');
    if (slugParts.length >= 2 && slugParts[slugParts.length - 1] === fileStem) {
      return normalizeHref(`/${slugParts.slice(0, -1).join('/')}`);
    }
  }
  return null;
}

/**
 * Канонический URL как на собранном сайте: для encyclopedia/N-slug в пути — label «N. …» из _category_.json.
 * @param {string} relNoExt
 * @param {Map<string, CategoryJson>} categoryByDir
 * @param {import('@docusaurus/utils').Slugger} slugger
 * @param {string} folderCanonical — путь по имени папок (resolveDocHref)
 */
function resolveDocusaurusCanonicalHref(relNoExt, categoryByDir, slugger, folderCanonical) {
  const parts = relNoExt.split('/').filter(Boolean);
  if (parts.length === 0) {
    return folderCanonical;
  }

  /** @type {string[]} */
  const urlParts = [...parts];
  let current = docsDir;

  for (let i = 0; i < parts.length; i += 1) {
    current = path.join(current, parts[i]);
    const cat = categoryByDir.get(current);
    if (!cat) {
      continue;
    }

    const catDirRel = parts.slice(0, i + 1).join('/');
    const parentSeg = i > 0 ? parts[i - 1] : '';
    const isEncyclopediaNumberedSection =
      parentSeg === 'encyclopedia' && /^\d+-/.test(parts[i]);

    if (isEncyclopediaNumberedSection) {
      const label = cat.label?.trim();
      if (label && label !== parts[i]) {
        urlParts[i] = label;
        continue;
      }
    }

    const docSeg = categorySegmentFromDocSlugs(catDirRel);
    if (docSeg) {
      urlParts[i] = docSeg;
    }
  }

  return normalizeHref(`/${urlParts.join('/')}`);
}

function categoryGeneratedIndexHref(relDir, categoryByDir, slugger) {
  const cat = categoryByDir.get(path.join(docsDir, relDir));
  if (!cat || cat.link?.type !== 'generated-index') {
    return null;
  }
  if (typeof cat.link.slug === 'string' && cat.link.slug.trim()) {
    return normalizeHref(cat.link.slug);
  }
  const fromDoc = inferCategoryIndexFromDocSlugs(relDir);
  if (fromDoc) {
    return fromDoc;
  }
  const label = cat.label?.trim();
  if (!label) {
    return null;
  }
  const parent = relDir.includes('/') ? path.dirname(relDir).replace(/\\/g, '/') : '';
  const segment = slugger.slug(label);
  return parent ? `/${parent}/${segment}` : `/${segment}`;
}

/**
 * Устаревшие пути: имя папки ↔ label категории (по сегментам, как в Docusaurus).
 * @param {string} relNoExt
 * @param {Map<string, CategoryJson>} categoryByDir
 * @param {import('@docusaurus/utils').Slugger} slugger
 * @param {string} canonical
 * @returns {string[]}
 */
function legacyPathVariants(relNoExt, categoryByDir, slugger, canonical) {
  const parts = relNoExt.split('/').filter(Boolean);
  if (parts.length === 0) {
    return [];
  }

  const canonicalParts = canonical.replace(/^\//, '').split('/');
  /** @type {Set<string>} */
  const legacies = new Set();
  legacies.add(normalizeHref(`/${parts.join('/')}`));

  let current = docsDir;
  for (let i = 0; i < parts.length - 1; i += 1) {
    const segment = parts[i];
    current = path.join(current, segment);
    const cat = categoryByDir.get(current);
    const label = cat?.label?.trim();
    if (!label) {
      continue;
    }
    const docSeg = categorySegmentFromDocSlugs(
      parts.slice(0, i + 1).join('/'),
    );
    const labelSegs = new Set(labelSegmentsForLegacy(label, slugger));
    if (docSeg) {
      labelSegs.add(docSeg);
    }

    for (const labelSeg of labelSegs) {
      if (labelSeg === segment) {
        continue;
      }
      if (canonicalParts[i] === segment) {
        if (i === 0 && LATIN_SECTION_ROOTS.has(segment)) {
          continue;
        }
        const alt = [...parts];
        alt[i] = labelSeg;
        legacies.add(normalizeHref(`/${alt.join('/')}`));
      } else if (canonicalParts[i] === labelSeg) {
        const alt = [...parts];
        alt[i] = segment;
        legacies.add(normalizeHref(`/${alt.join('/')}`));
      }
    }
  }

  // Оглавление категории: последний сегмент пути = имя папки (philosophy/culture → …/Культура)
  if (parts.length >= 1) {
    const catDir = path.join(docsDir, ...parts);
    const cat = categoryByDir.get(catDir);
    if (cat?.link?.type === 'generated-index') {
      const label = cat.label?.trim();
      if (label) {
        const last = parts.length - 1;
        const docSeg = categorySegmentFromDocSlugs(parts.join('/'));
        const labelSegs = new Set(labelSegmentsForLegacy(label, slugger));
        if (docSeg) {
          labelSegs.add(docSeg);
        }
        for (const labelSeg of labelSegs) {
          if (labelSeg === parts[last]) {
            continue;
          }
          if (canonicalParts[last] === parts[last]) {
            const alt = [...parts];
            alt[last] = labelSeg;
            legacies.add(normalizeHref(`/${alt.join('/')}`));
          } else if (canonicalParts[last] === labelSeg) {
            legacies.add(normalizeHref(`/${parts.join('/')}`));
          }
        }
      }
    }
  }

  legacies.delete(canonical);
  return [...legacies];
}

/**
 * @param {string} relNoExt
 */
function hrefFromDocId(relNoExt, frontmatter) {
  const customId = frontmatter.id;
  if (typeof customId !== 'string' || !customId.trim()) {
    return null;
  }
  const id = customId.trim();
  const dir = path.dirname(relNoExt);
  const base = path.basename(relNoExt);
  if (id === base) {
    return null;
  }
  const combined = dir === '.' ? id : `${dir}/${id}`;
  return normalizeHref(`/${combined.replace(/\\/g, '/')}`);
}

/**
 * @param {Map<string, string[]>} redirectMap
 * @param {string} canonical
 * @param {string} legacy
 */
function addLegacy(redirectMap, canonical, legacy) {
  const to = normalizeHref(canonical);
  const from = normalizeHref(legacy);
  if (!to || !from || from === to) {
    return;
  }
  const variants = [from, `/docs${from}`];
  const list = redirectMap.get(to) ?? [];
  for (const variant of variants) {
    if (!list.includes(variant)) {
      list.push(variant);
    }
  }
  redirectMap.set(to, list);
}

function buildCategoryMap() {
  /** @type {Map<string, CategoryJson>} */
  const map = new Map();

  function walk(dir) {
    const catPath = path.join(dir, '_category_.json');
    if (fs.existsSync(catPath)) {
      try {
        map.set(dir, JSON.parse(fs.readFileSync(catPath, 'utf8')));
      } catch {
        /* ignore */
      }
    }
    for (const entry of fs.readdirSync(dir, {withFileTypes: true})) {
      if (entry.isDirectory()) {
        walk(path.join(dir, entry.name));
      }
    }
  }

  walk(docsDir);
  return map;
}

function collectDocRedirects(categoryByDir, slugger) {
  /** @type {Map<string, string[]>} */
  const redirectMap = new Map();

  function walk(dir) {
    for (const entry of fs.readdirSync(dir, {withFileTypes: true})) {
      const fullPath = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        walk(fullPath);
        continue;
      }
      if (SKIP_NAMES.has(entry.name) || !/\.mdx?$/i.test(entry.name)) {
        continue;
      }

      let data;
      try {
        data = matter(fs.readFileSync(fullPath, 'utf8')).data;
      } catch {
        continue;
      }
      if (data.draft === true || data.unlisted === true) {
        continue;
      }

      const rel = path.relative(docsDir, fullPath).replace(/\\/g, '/');
      const relNoExt = rel.replace(/\.mdx?$/i, '');
      if (relNoExt === 'glossary' || relNoExt.startsWith('glossary/')) {
        continue;
      }
      if (relNoExt === 'lab' || relNoExt.startsWith('lab/')) {
        continue;
      }
      if (relNoExt === 'tools' || relNoExt.startsWith('tools/')) {
        continue;
      }
      const folderCanonical = normalizeHref(resolveDocHref(rel, data));
      const canonical = resolveDocusaurusCanonicalHref(
        relNoExt,
        categoryByDir,
        slugger,
        folderCanonical,
      );
      const idHref = hrefFromDocId(relNoExt, data);
      for (const legacy of legacyPathVariants(relNoExt, categoryByDir, slugger, canonical)) {
        addLegacy(redirectMap, canonical, legacy);
      }
      for (const legacy of contextLabelSlugAliases(
        relNoExt,
        canonical,
        categoryByDir,
        slugger,
      )) {
        addLegacy(redirectMap, canonical, legacy);
      }
      if (idHref) {
        addLegacy(redirectMap, canonical, idHref);
      }
    }
  }

  walk(docsDir);
  return redirectMap;
}

function collectCategoryIndexRedirects(categoryByDir, slugger) {
  /** @type {Map<string, string[]>} */
  const redirectMap = new Map();

  for (const [dir, cat] of categoryByDir) {
    if (cat.link?.type !== 'generated-index') {
      continue;
    }
    const relDir = path.relative(docsDir, dir).replace(/\\/g, '/');
    if (!relDir || relDir === '.' || relDir === 'glossary' || relDir.startsWith('glossary/')) {
      continue;
    }
    if (relDir === 'lab' || relDir.startsWith('lab/')) {
      continue;
    }
    if (relDir === 'tools' || relDir.startsWith('tools/')) {
      continue;
    }
    const canonical = categoryGeneratedIndexHref(relDir, categoryByDir, slugger);
    const folderHref = normalizeHref(`/${relDir}`);
    if (!canonical) {
      continue;
    }
    for (const legacy of legacyPathVariants(relDir, categoryByDir, slugger, canonical)) {
      addLegacy(redirectMap, canonical, legacy);
    }
  }

  return redirectMap;
}

/**
 * Один legacy-URL на регистронезависимый ключ (Windows: Торговля ≡ торговля).
 * @param {string[]} urls
 */
function dedupeLegacyUrlsCaseInsensitive(urls) {
  /** @type {Map<string, string>} */
  const byLower = new Map();
  for (const url of urls) {
    const key = url.toLocaleLowerCase('ru');
    const existing = byLower.get(key);
    if (!existing) {
      byLower.set(key, url);
      continue;
    }
    // Предпочитаем сегмент с заглавными буквами (как в label категории), не slugger lowercase.
    const existingHasUpper = existing !== existing.toLocaleLowerCase('ru');
    const urlHasUpper = url !== url.toLocaleLowerCase('ru');
    if (!existingHasUpper && urlHasUpper) {
      byLower.set(key, url);
    }
  }
  return [...byLower.values()];
}

function mergeMaps(...maps) {
  /** @type {Map<string, string[]>} */
  const merged = new Map();
  for (const map of maps) {
    for (const [to, fromList] of map) {
      const existing = merged.get(to) ?? [];
      for (const from of fromList) {
        if (!existing.includes(from)) {
          existing.push(from);
        }
      }
      merged.set(to, dedupeLegacyUrlsCaseInsensitive(existing));
    }
  }
  return merged;
}

/** Редиректы с удалённых 1.11–1.14 (советы/софт) → 1.035 после миграции. */
function mergeBasics035MigrationRedirects(redirectMap) {
  const auditPath = path.join(root, 'info', 'migration-035-link-audit.json');
  if (!fs.existsSync(auditPath)) {
    return;
  }
  let audit;
  try {
    audit = JSON.parse(fs.readFileSync(auditPath, 'utf8'));
  } catch {
    return;
  }
  const pairs = {
    ...(audit.replacePairs ?? {}),
    ...(audit.deleted035Replacements ?? {}),
  };
  for (const [oldRel, newRel] of Object.entries(pairs)) {
    if (typeof oldRel !== 'string' || typeof newRel !== 'string') {
      continue;
    }
    addLegacy(redirectMap, normalizeHref(`/${newRel}`), normalizeHref(`/${oldRel}`));
  }
}

function main() {
  const categoryByDir = buildCategoryMap();
  const slugger = createSlugger();

  const docMap = collectDocRedirects(categoryByDir, slugger);
  const catMap = collectCategoryIndexRedirects(categoryByDir, slugger);
  mergeBasics035MigrationRedirects(docMap);
  const merged = mergeMaps(docMap, catMap);
  const canonicalSet = new Set(merged.keys());

  /** @type {Record<string, string[]>} */
  const payload = {};
  let legacyCount = 0;
  /** @type {Map<string, string>} */
  const legacyOwner = new Map();

  for (const [to, fromList] of [...merged.entries()].sort(([a], [b]) =>
    a.localeCompare(b, 'ru'),
  )) {
    const safeFrom = dedupeLegacyUrlsCaseInsensitive(
      fromList.filter((from) => !canonicalSet.has(from)),
    );
    if (safeFrom.length === 0) {
      continue;
    }
    for (const from of safeFrom) {
      const key = from.toLocaleLowerCase('ru');
      const prev = legacyOwner.get(key);
      if (prev && prev !== to) {
        console.warn(
          `doc-legacy-redirects: legacy collision ${from}\n  → ${prev}\n  → ${to}`,
        );
      } else {
        legacyOwner.set(key, to);
      }
    }
    payload[to] = safeFrom;
    legacyCount += safeFrom.length;
  }

  fs.mkdirSync(path.dirname(outFile), {recursive: true});
  fs.writeFileSync(outFile, `${JSON.stringify(payload)}\n`, 'utf8');

  /** @type {[string, string][]} */
  const contextSlugChecks = [
    ['/context/fintech/1', '/context/Финтех/1'],
    ['/context/commerce/1', '/context/Торговля/1'],
    ['/context/video-games/1', '/context/Видеоигры/1'],
    ['/context/government/1', '/context/Государство/1'],
    ['/context/iot/1', '/context/IoT/1'],
    ['/context/fintech/intro', '/context/Финтех/intro'],
  ];
  for (const [canon, legacy] of contextSlugChecks) {
    if (!payload[canon]?.includes(legacy)) {
      console.warn(
        `doc-legacy-redirects: expected ${legacy} → ${canon}, got: ${payload[canon]?.join(', ') ?? 'none'}`,
      );
    }
  }

  console.log(
    `doc-legacy-redirects: ${Object.keys(payload).length} canonical routes, ${legacyCount} legacy URLs → ${path.relative(root, outFile)}`,
  );
}

main();
