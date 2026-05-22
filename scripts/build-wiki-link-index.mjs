/**
 * Индекс перекрёстных ссылок: глоссарий (## заголовки) + уникальные title статей + ручной словарь.
 * Запуск: npm run docs:wiki-links
 */
import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import matter from 'gray-matter';
import {createSlugger} from '@docusaurus/utils';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');
const glossaryDir = path.join(root, 'docs', 'glossary');
const encyclopediaDir = path.join(root, 'docs', 'encyclopedia');
const curatedPath = path.join(root, 'src', 'data', 'encyclopediaTermLinks.json');
const outFile = path.join(root, 'src', 'data', 'wikiLinkIndex.json');

const SKIP_GLOSSARY = new Set(['intro.md', '_category_.json']);
const SKIP_ENC_DOC = /\/(intro|_category_)\.md$/;

function normalizeKey(value) {
  return value.trim().toLocaleLowerCase('ru');
}

function headingToAnchor(heading) {
  const slugger = createSlugger();
  return slugger.slug(heading.trim());
}

function glossaryPagePath(fileName) {
  const letter = fileName.replace(/\.md$/i, '');
  return `/glossary/${letter}`;
}

function parseGlossary() {
  const entries = {};
  const files = fs
    .readdirSync(glossaryDir)
    .filter((name) => name.endsWith('.md') && !SKIP_GLOSSARY.has(name));

  for (const fileName of files) {
    const raw = fs.readFileSync(path.join(glossaryDir, fileName), 'utf8');
    const {data, content} = matter(raw);
    const page =
      typeof data.slug === 'string' && data.slug.startsWith('/glossary/')
        ? data.slug
        : glossaryPagePath(fileName);

    for (const line of content.split(/\r?\n/)) {
      const match = /^##\s+(.+?)\s*$/.exec(line);
      if (!match) {
        continue;
      }
      const title = match[1].trim();
      if (!title) {
        continue;
      }
      const key = normalizeKey(title);
      if (entries[key]) {
        continue;
      }
      entries[key] = {
        kind: 'glossary',
        label: title,
        href: `${page}#${headingToAnchor(title)}`,
      };
    }
  }

  return entries;
}

function parseEncyclopediaTitles() {
  const titleCounts = new Map();

  function walk(dir) {
    for (const entry of fs.readdirSync(dir, {withFileTypes: true})) {
      const fullPath = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        walk(fullPath);
        continue;
      }
      if (!entry.name.endsWith('.md') && !entry.name.endsWith('.mdx')) {
        continue;
      }
      if (SKIP_ENC_DOC.test(fullPath.replace(/\\/g, '/'))) {
        continue;
      }
      const {data} = matter(fs.readFileSync(fullPath, 'utf8'));
      const title = (data.title || data.sidebar_label || '').trim();
      if (!title || title.length < 5) {
        continue;
      }
      const key = normalizeKey(title);
      const rel = path
        .relative(path.join(root, 'docs'), fullPath)
        .replace(/\\/g, '/')
        .replace(/\.mdx?$/, '');
      const list = titleCounts.get(key) ?? [];
      list.push({title, href: `/${rel}`});
      titleCounts.set(key, list);
    }
  }

  walk(encyclopediaDir);

  const entries = {};
  for (const [key, list] of titleCounts) {
    if (list.length !== 1) {
      continue;
    }
    const [{title, href}] = list;
    entries[key] = {
      kind: 'encyclopedia',
      label: title,
      href,
    };
  }
  return entries;
}

function loadCurated() {
  if (!fs.existsSync(curatedPath)) {
    return {};
  }
  const raw = JSON.parse(fs.readFileSync(curatedPath, 'utf8'));
  const entries = {};
  for (const [term, href] of Object.entries(raw)) {
    const key = normalizeKey(term);
    const pathValue = href.startsWith('/') ? href : `/${href}`;
    entries[key] = {
      kind: 'encyclopedia',
      label: term.trim(),
      href: pathValue,
      curated: true,
    };
  }
  return entries;
}

function main() {
  const glossary = parseGlossary();
  const encyclopediaAuto = parseEncyclopediaTitles();
  const curated = loadCurated();

  const terms = {
    ...encyclopediaAuto,
    ...glossary,
    ...curated,
  };

  const payload = {
    generatedAt: new Date().toISOString(),
    stats: {
      glossary: Object.keys(glossary).length,
      encyclopediaAuto: Object.keys(encyclopediaAuto).length,
      curated: Object.keys(curated).length,
      total: Object.keys(terms).length,
    },
    terms,
  };

  fs.writeFileSync(outFile, `${JSON.stringify(payload, null, 2)}\n`, 'utf8');
  console.log(
    `wikiLinkIndex: glossary=${payload.stats.glossary}, enc.auto=${payload.stats.encyclopediaAuto}, curated=${payload.stats.curated}, total=${payload.stats.total}`,
  );
}

main();
