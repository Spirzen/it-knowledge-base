/**
 * Компактный индекс для клиентского поиска (title, description, теги, раздел).
 * Запуск: npm run docs:search-index
 */
import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import matter from 'gray-matter';
import {resolveDocHref} from './lib/docUrl.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');
const docsDir = path.join(root, 'docs');
const outFile = path.join(root, 'static', 'doc-search-index.json');

const SKIP_NAMES = new Set(['_category_.json']);
const MAX_DESCRIPTION = 220;

function stripQuotes(value) {
  if (typeof value !== 'string') {
    return value;
  }
  const trimmed = value.trim();
  if (
    (trimmed.startsWith('"') && trimmed.endsWith('"')) ||
    (trimmed.startsWith("'") && trimmed.endsWith("'"))
  ) {
    return trimmed.slice(1, -1);
  }
  return trimmed;
}

function truncate(text, max) {
  if (!text || text.length <= max) {
    return text || '';
  }
  return `${text.slice(0, max - 1).trim()}…`;
}

function buildCategoryLabels() {
  /** @type {Map<string, string>} */
  const map = new Map();

  function walk(dir) {
    const catPath = path.join(dir, '_category_.json');
    if (fs.existsSync(catPath)) {
      try {
        const cat = JSON.parse(fs.readFileSync(catPath, 'utf8'));
        const label = cat.label || cat.link?.title;
        if (typeof label === 'string' && label.trim()) {
          map.set(dir, label.trim());
        }
      } catch {
        /* ignore broken category files */
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

function sectionForFile(filePath, categoryLabels) {
  let dir = path.dirname(filePath);
  while (dir.length >= docsDir.length) {
    const label = categoryLabels.get(dir);
    if (label) {
      return label;
    }
    const parent = path.dirname(dir);
    if (parent === dir) {
      break;
    }
    dir = parent;
  }
  return '';
}

function tagsToString(tags) {
  if (!Array.isArray(tags)) {
    return '';
  }
  return tags
    .map((tag) => (typeof tag === 'string' ? tag.trim() : ''))
    .filter(Boolean)
    .join(' ');
}

function collectDocs(categoryLabels) {
/** @type {{ u: string, t: string, d: string, s: string, a: string, h: string }[]} */
  const docs = [];

  function walk(dir) {
    for (const entry of fs.readdirSync(dir, {withFileTypes: true})) {
      const fullPath = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        walk(fullPath);
        continue;
      }
      if (SKIP_NAMES.has(entry.name)) {
        continue;
      }
      if (!/\.mdx?$/i.test(entry.name)) {
        continue;
      }

      const raw = fs.readFileSync(fullPath, 'utf8');
      let data;
      let content;
      try {
        ({data, content} = matter(raw));
      } catch (error) {
        const rel = path.relative(docsDir, fullPath).replace(/\\/g, '/');
        console.warn(`doc-search-index: skip ${rel} (frontmatter): ${error.message}`);
        continue;
      }

      if (data.draft === true || data.unlisted === true) {
        continue;
      }

      const sidebarLabel = stripQuotes(data.sidebar_label);
      const title = stripQuotes(data.title);
      const h1 = content.match(/^#\s+(.+?)\s*$/m)?.[1]?.trim();
      const displayTitle =
        sidebarLabel ||
        title ||
        h1 ||
        path.basename(entry.name, path.extname(entry.name));

      let description = stripQuotes(data.description);
      if (typeof description !== 'string') {
        description = '';
      }
      description = description.replace(/\s+/g, ' ').trim();
      description = truncate(description, MAX_DESCRIPTION);

      // Заголовки (##/###) из тела статьи: используется в интерактивных “профилях”.
      // Ограничиваем размер, чтобы индекс оставался компактным.
      const headings = [...content.matchAll(/^#{2,3}\s+(.+?)\s*$/gm)]
        .map((m) => (m?.[1] ?? '').trim())
        .filter(Boolean);
      const headingsText = truncate(headings.join(' '), 260);

      const rel = path.relative(docsDir, fullPath).replace(/\\/g, '/');
      const section = sectionForFile(fullPath, categoryLabels);
      const tagStr = tagsToString(data.tags);

      docs.push({
        u: resolveDocHref(rel, data),
        t: displayTitle,
        d: description,
        s: section,
        a: tagStr,
        h: headingsText,
      });
    }
  }

  walk(docsDir);
  docs.sort((a, b) => a.t.localeCompare(b.t, 'ru'));
  return docs;
}

function main() {
  const categoryLabels = buildCategoryLabels();
  const docs = collectDocs(categoryLabels);

  const payload = {
    v: 1,
    generatedAt: new Date().toISOString(),
    count: docs.length,
    docs,
  };

  fs.mkdirSync(path.dirname(outFile), {recursive: true});
  fs.writeFileSync(outFile, `${JSON.stringify(payload)}\n`, 'utf8');

  const bytes = fs.statSync(outFile).size;
  console.log(
    `doc-search-index: ${docs.length} docs → ${path.relative(root, outFile)} (${(bytes / 1024).toFixed(1)} KiB)`,
  );
}

main();
