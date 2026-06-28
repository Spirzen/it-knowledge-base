/**
 * Redirect spirzen.ru/tools/* → tools.spirzen.ru (client redirects plugin).
 * Запуск: npm run docs:tools-redirects
 */
import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import matter from 'gray-matter';
import {resolveDocHref} from './lib/docUrl.mjs';
import {toolsHref} from './lib/toolsUrl.mjs';
import {gamesHrefFromGametools} from './lib/gamesUrl.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');
const toolsDir = path.join(root, 'docs', 'tools');
const outFile = path.join(root, 'src', 'data', 'toolsExternalRedirects.json');
const docMapFile = path.join(root, 'src', 'data', 'toolsDocPermalinks.json');

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

function legacyToolsPath(relPath) {
  const withoutExt = relPath.replace(/\.mdx?$/i, '');
  return `/${withoutExt.replace(/\\/g, '/')}`;
}

function main() {
  /** @type {{ from: string, to: string }[]} */
  const redirects = [];
  /** @type {Set<string>} */
  const seen = new Set();
  /** @type {Record<string, string>} */
  const docPermalinks = {};

  function add(from, to) {
    for (const legacy of [from, `/docs${from}`]) {
      if (seen.has(legacy)) {
        continue;
      }
      seen.add(legacy);
      redirects.push({from: legacy, to});
    }
  }

  add('/tools', toolsHref('/tools/intro'));

  for (const rel of walkMarkdownFiles(toolsDir)) {
    const raw = fs.readFileSync(path.join(toolsDir, rel), 'utf8');
    const {data} = matter(raw);
    const canonical = resolveDocHref(`tools/${rel}`, data).replace(/\/+$/, '');
    const external = toolsHref(canonical);
    const docId = `tools/${rel.replace(/\.mdx?$/i, '')}`.replace(/\\/g, '/');
    docPermalinks[docId] = external;
    add(canonical, external);
    const legacy = legacyToolsPath(`tools/${rel}`).replace(/\/+$/, '');
    if (legacy !== canonical) {
      add(legacy, external);
    }
  }

  const legacyToolsGames = ['', 'intro', '1', '2', '3', '4', '1111'];
  for (const id of legacyToolsGames) {
    const from = id ? `/tools/games/${id}` : '/tools/games';
    const to = gamesHrefFromGametools(id || 'intro');
    add(from, to);
  }

  redirects.sort((a, b) => a.from.localeCompare(b.from, 'ru'));
  fs.mkdirSync(path.dirname(outFile), {recursive: true});
  fs.writeFileSync(outFile, `${JSON.stringify(redirects, null, 2)}\n`, 'utf8');
  fs.writeFileSync(docMapFile, `${JSON.stringify(docPermalinks, null, 2)}\n`, 'utf8');
  console.log(`tools-external-redirects: ${redirects.length} routes → ${path.relative(root, outFile)}`);
  console.log(`tools-doc-permalinks: ${Object.keys(docPermalinks).length} docs → ${path.relative(root, docMapFile)}`);
}

main();
