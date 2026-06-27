/**
 * Redirect spirzen.ru/lab/* → lab.spirzen.ru (client redirects plugin).
 * Запуск: npm run docs:lab-redirects
 */
import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import matter from 'gray-matter';
import {resolveDocHref} from './lib/docUrl.mjs';
import {labHref} from './lib/labUrl.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');
const labDir = path.join(root, 'docs', 'lab');
const outFile = path.join(root, 'src', 'data', 'labExternalRedirects.json');
const docMapFile = path.join(root, 'src', 'data', 'labDocPermalinks.json');

const SKIP = new Set(['_category_.json']);

function walkMarkdownFiles(dir, baseDir = dir, files = []) {
  for (const entry of fs.readdirSync(dir, {withFileTypes: true})) {
    if (SKIP.has(entry.name)) {
      continue;
    }
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walkMarkdownFiles(full, baseDir, files);
      continue;
    }
    if (/\.mdx?$/i.test(entry.name)) {
      files.push(path.relative(baseDir, full).replace(/\\/g, '/'));
    }
  }
  return files;
}

function legacyLabPath(relPath) {
  const withoutExt = relPath.replace(/\.mdx?$/i, '');
  return `/${withoutExt.replace(/\\/g, '/')}`;
}

function main() {
  /** @type {{ from: string, to: string }[]} */
  const redirects = [];
  /** @type {Set<string>} */
  const seen = new Set();

  function add(from, to) {
    for (const legacy of [from, `/docs${from}`]) {
      if (seen.has(legacy)) {
        continue;
      }
      seen.add(legacy);
      redirects.push({from: legacy, to});
    }
  }

  /** @type {Record<string, string>} */
  const docPermalinks = {};

  add('/lab', labHref('/lab/intro'));

  for (const rel of walkMarkdownFiles(labDir)) {
    const raw = fs.readFileSync(path.join(labDir, rel), 'utf8');
    const {data} = matter(raw);
    const canonical = resolveDocHref(`lab/${rel}`, data).replace(/\/+$/, '');
    const external = labHref(canonical);
    const docId = `lab/${rel.replace(/\.mdx?$/i, '')}`.replace(/\\/g, '/');
    docPermalinks[docId] = external;
    add(canonical, external);
    const legacy = legacyLabPath(`lab/${rel}`).replace(/\/+$/, '');
    if (legacy !== canonical) {
      add(legacy, external);
    }
  }

  redirects.sort((a, b) => a.from.localeCompare(b.from, 'ru'));
  fs.mkdirSync(path.dirname(outFile), {recursive: true});
  fs.writeFileSync(outFile, `${JSON.stringify(redirects, null, 2)}\n`, 'utf8');
  fs.writeFileSync(docMapFile, `${JSON.stringify(docPermalinks, null, 2)}\n`, 'utf8');
  console.log(`lab-external-redirects: ${redirects.length} routes → ${path.relative(root, outFile)}`);
  console.log(`lab-doc-permalinks: ${Object.keys(docPermalinks).length} docs → ${path.relative(root, docMapFile)}`);
}

main();
