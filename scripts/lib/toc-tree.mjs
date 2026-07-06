import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';

export const DOC_EXT = /\.(md|mdx)$/i;
export const SKIP_DOCS = new Set(['intro.md']);
export const TOC_LIST_CLASS = 'it-toc-articles';

export function readCategory(dir) {
  const file = path.join(dir, '_category_.json');
  if (!fs.existsSync(file)) {
    return {label: path.basename(dir), position: undefined};
  }
  const data = JSON.parse(fs.readFileSync(file, 'utf8'));
  return {
    label: data.label ?? path.basename(dir),
    position: data.position,
  };
}

export function stripSectionNumber(label) {
  return label.replace(/^\d+(?:\.\d+)*\.\s*/, '').trim();
}

export function chapterPrefixFromDir(dir, encyclopediaDir) {
  let current = dir;
  while (current.startsWith(encyclopediaDir)) {
    const base = path.basename(current);
    const match = /^(\d+)-(\d+)(?:-|$)/.exec(base);
    if (match) {
      return `${match[1]}.${match[2]}`;
    }
    const parent = path.dirname(current);
    if (parent === current) {
      break;
    }
    current = parent;
  }
  return null;
}

export function titleFromFile(filePath) {
  const raw = fs.readFileSync(filePath, 'utf8');
  const {data, content} = matter(raw);
  if (typeof data.sidebar_label === 'string' && data.sidebar_label.trim()) {
    return data.sidebar_label.trim();
  }
  if (typeof data.title === 'string' && data.title.trim()) {
    return data.title.trim();
  }
  const h1 = content.match(/^#\s+(.+?)\s*$/m);
  if (h1?.[1]) {
    return h1[1].trim();
  }
  return path.basename(filePath).replace(DOC_EXT, '');
}

export function docHref(docId) {
  return `/${docId.replace(/\\/g, '/')}`;
}

export function escapeHtml(value) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

export function compareEntries(a, b) {
  const posA = a.position;
  const posB = b.position;
  if (posA != null && posB != null && posA !== posB) {
    return posA - posB;
  }
  if (posA != null && posB == null) {
    return -1;
  }
  if (posA == null && posB != null) {
    return 1;
  }
  return a.name.localeCompare(b.name, 'ru', {numeric: true, sensitivity: 'base'});
}

export function listArticleFiles(dir) {
  return fs
    .readdirSync(dir)
    .filter((name) => DOC_EXT.test(name) && !SKIP_DOCS.has(name))
    .sort((a, b) => a.localeCompare(b, 'ru', {numeric: true, sensitivity: 'base'}));
}

export function listChildDirs(dir) {
  return fs
    .readdirSync(dir, {withFileTypes: true})
    .filter(
      (entry) =>
        entry.isDirectory() &&
        !entry.name.startsWith('.') &&
        entry.name !== 'node_modules',
    )
    .map((entry) => {
      const full = path.join(dir, entry.name);
      const cat = readCategory(full);
      return {name: entry.name, path: full, label: cat.label, position: cat.position};
    })
    .sort(compareEntries);
}

export function hasDocContent(dir) {
  const articles = listArticleFiles(dir);
  if (articles.length > 0) {
    return true;
  }
  return listChildDirs(dir).some((child) => hasDocContent(child.path));
}

export function normalizeHeading(value) {
  return value
    .toLowerCase()
    .replace(/\s*\([^)]*\)\s*/g, ' ')
    .replace(/[^\p{L}\p{N}\s]/gu, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

export function articleSlugNumber(slug) {
  if (!/^\d+$/.test(slug)) {
    return null;
  }
  return Number.parseInt(slug, 10);
}

export function parseRangeFilter(heading) {
  const match = heading.match(/\((\d{2,3})\+\)/);
  if (!match) {
    return null;
  }
  const min = Number.parseInt(match[1], 10);
  const bucket = Math.floor(min / 100);
  return {min, max: bucket * 100 + 99};
}

export function articleMatchesFilter(fileName, filter) {
  const slug = fileName.replace(DOC_EXT, '');
  if (slug === 'intro') {
    return filter == null;
  }
  const num = articleSlugNumber(slug);
  if (num == null) {
    return filter == null;
  }
  if (!filter) {
    return num < 200 || slug === '98' || slug === '99';
  }
  return num >= filter.min && num <= filter.max;
}

export function renderArticleListHtml(dir, docIdPrefix, encyclopediaDir, {filter = null} = {}) {
  const prefix = chapterPrefixFromDir(dir, encyclopediaDir);
  const items = [];

  for (const file of listArticleFiles(dir)) {
    if (filter && !articleMatchesFilter(file, filter)) {
      continue;
    }
    const docId = `${docIdPrefix}/${file.replace(DOC_EXT, '')}`;
    const title = titleFromFile(path.join(dir, file));
    const label = prefix ? `${prefix}. ${title}` : title;
    items.push(`  <li><a href="${docHref(docId)}">${escapeHtml(label)}</a></li>`);
  }

  if (items.length === 0) {
    return null;
  }

  return `<ul class="${TOC_LIST_CLASS}">\n${items.join('\n')}\n</ul>`;
}

export function resolveDocPath(href) {
  try {
    const decoded = decodeURIComponent(href.replace(/^\//, ''));
    return decoded.replace(/\\/g, '/');
  } catch {
    return href.replace(/^\//, '').replace(/\\/g, '/');
  }
}

export function docPathToFsPath(docPath, docsDir) {
  return path.join(docsDir, `${docPath}.md`);
}

export function inferDirFromHrefs(hrefs, docsDir) {
  const counts = new Map();

  for (const href of hrefs) {
    const docPath = resolveDocPath(href);
    const parts = docPath.split('/');
    if (parts.length < 3 || parts[0] !== 'encyclopedia') {
      continue;
    }
    const dirParts = parts.slice(0, -1);
    const dirPath = path.join(docsDir, ...dirParts);
    if (fs.existsSync(dirPath) && fs.statSync(dirPath).isDirectory()) {
      const key = dirParts.join('/');
      counts.set(key, (counts.get(key) ?? 0) + 1);
    }
  }

  let best = null;
  let bestCount = 0;
  for (const [key, count] of counts) {
    if (count > bestCount) {
      best = key;
      bestCount = count;
    }
  }
  return best;
}

export function findChapterDirByHeading(heading, blockDir, docsDir) {
  const target = normalizeHeading(heading);
  let best = null;

  function walk(dir, docParts) {
    const articles = listArticleFiles(dir);
    const label = stripSectionNumber(readCategory(dir).label);
    const normalized = normalizeHeading(label);
    if (
      articles.length > 0 &&
      (normalized === target ||
        normalized.includes(target) ||
        target.includes(normalized))
    ) {
      best = {dir, docIdPrefix: docParts.join('/')};
    }
    for (const child of listChildDirs(dir)) {
      walk(child.path, [...docParts, child.name]);
    }
  }

  const rel = path.relative(docsDir, blockDir).replace(/\\/g, '/');
  const prefixParts = rel.startsWith('encyclopedia')
    ? rel.split('/')
    : ['encyclopedia', path.basename(blockDir)];

  for (const child of listChildDirs(blockDir)) {
    walk(child.path, [...prefixParts, child.name]);
  }

  if (!best) {
    return null;
  }

  return {
    dir: best.dir,
    docIdPrefix: best.docIdPrefix,
    fsPrefix: path.join(docsDir, ...best.docIdPrefix.split('/')),
  };
}

export function collectDocIds(docsDir) {
  const ids = new Set();

  function walkDocs(dir, prefix) {
    for (const name of fs.readdirSync(dir)) {
      const full = path.join(dir, name);
      if (name === 'node_modules' || name.startsWith('.')) {
        continue;
      }
      const rel = prefix ? `${prefix}/${name}` : name;
      if (fs.statSync(full).isDirectory()) {
        walkDocs(full, rel);
        continue;
      }
      if (DOC_EXT.test(name)) {
        ids.add(rel.replace(DOC_EXT, ''));
      }
    }
  }

  walkDocs(docsDir, '');
  return ids;
}

export function validateTocLinks(content, docIds) {
  const hrefRe = /href="(\/[^"]+)"/g;
  const missing = [];
  let match;
  while ((match = hrefRe.exec(content)) !== null) {
    let href = match[1].replace(/^\//, '').replace(/\/+$/, '');
    if (href.startsWith('http')) {
      continue;
    }
    if (!docIds.has(href)) {
      missing.push(href);
    }
  }
  return missing;
}

export function linkExists(href, docsDir) {
  const docPath = resolveDocPath(href).replace(/\/+$/, '');
  const mdPath = docPathToFsPath(docPath, docsDir);
  const mdxPath = mdPath.replace(/\.md$/, '.mdx');
  return fs.existsSync(mdPath) || fs.existsSync(mdxPath);
}
