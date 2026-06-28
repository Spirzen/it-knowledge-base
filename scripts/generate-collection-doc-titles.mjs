/**
 * Заголовки статей для подборок на главной (из front matter).
 * Запуск: npm run docs:collection-titles
 */
import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import matter from 'gray-matter';
import {SIDEBAR_COLLECTIONS} from '../src/data/sidebarCollections.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');
const docsDir = path.join(root, 'docs');
const gamesContentDir = path.join(root, '..', 'it-games', 'content');
const outFile = path.join(root, 'src', 'data', 'collectionDocTitles.json');

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

function titleFromMarkdown(filePath) {
  const raw = fs.readFileSync(filePath, 'utf8');
  const {data, content} = matter(raw);

  const sidebarLabel = stripQuotes(data.sidebar_label);
  const title = stripQuotes(data.title);

  if (sidebarLabel) {
    return sidebarLabel;
  }
  if (title) {
    return title;
  }

  const h1 = content.match(/^#\s+(.+?)\s*$/m);
  if (h1?.[1]) {
    return h1[1].trim();
  }

  return path.basename(filePath, '.md');
}

function resolveDocFile(docId) {
  const searchRoots = [docsDir];
  if (docId.startsWith('games/')) {
    searchRoots.push(gamesContentDir);
  }

  for (const baseDir of searchRoots) {
    for (const ext of ['.md', '.mdx']) {
      const candidate = path.join(baseDir, `${docId}${ext}`);
      if (fs.existsSync(candidate)) {
        return candidate;
      }
    }
  }
  return null;
}

function loadExistingTitles() {
  if (!fs.existsSync(outFile)) {
    return {};
  }
  try {
    return JSON.parse(fs.readFileSync(outFile, 'utf8'));
  } catch {
    return {};
  }
}

function collectDocIds() {
  const ids = new Set();
  for (const collection of SIDEBAR_COLLECTIONS) {
    for (const docId of collection.items) {
      ids.add(docId);
    }
  }
  return [...ids].sort();
}

function main() {
  const docIds = collectDocIds();
  const existingTitles = loadExistingTitles();
  /** @type {Record<string, { title: string }>} */
  const titles = {};
  const missing = [];

  for (const docId of docIds) {
    const filePath = resolveDocFile(docId);
    if (!filePath) {
      const preserved = existingTitles[docId]?.title;
      if (preserved) {
        titles[docId] = {title: preserved};
        continue;
      }
      missing.push(docId);
      continue;
    }
    titles[docId] = {title: titleFromMarkdown(filePath)};
  }

  fs.writeFileSync(outFile, `${JSON.stringify(titles, null, 2)}\n`, 'utf8');

  console.log(`Wrote ${Object.keys(titles).length} titles → ${path.relative(root, outFile)}`);
  if (missing.length > 0) {
    console.warn(`Missing files (${missing.length}):`);
    for (const id of missing.slice(0, 10)) {
      console.warn(`  - ${id}`);
    }
    if (missing.length > 10) {
      console.warn(`  … and ${missing.length - 10} more`);
    }
    process.exitCode = 1;
  }
}

main();
