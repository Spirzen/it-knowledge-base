/**
 * Redirect spirzen.ru/encyclopedia/9-spinoff/{9-03,9-04}/* → games.spirzen.ru
 * + legacy spirzen.ru/tools/games/* → games/9-031-gametools/*
 * Запуск: npm run docs:games-redirects
 */
import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import matter from 'gray-matter';
import {resolveDocHref} from './lib/docUrl.mjs';
import {gamesHref, gamesHrefFromGametools, gamesHrefFromSpinoff} from './lib/gamesUrl.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');
const spinoffDir = path.join(root, 'docs', 'encyclopedia', '9-spinoff');
const gametoolsDir = path.join(root, '..', 'it-games', 'content', 'games', '9-031-gametools');
const outFile = path.join(root, 'src', 'data', 'gamesExternalRedirects.json');

const GAME_ROOTS = ['9-03-igrovaya-industriya', '9-04-razrabotka-igr'];
const LEGACY_TOOLS_GAMES_IDS = ['intro', '1', '2', '3', '4', '1111'];
const SKIP = new Set(['_category_.json']);

function walkMarkdownFiles(dir, baseDir = dir, files = []) {
  if (!fs.existsSync(dir)) {
    return files;
  }
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

function main() {
  /** @type {{ from: string, to: string }[]} */
  const redirects = [];
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

  add('/encyclopedia/9-spinoff/9-03-igrovaya-industriya', gamesHrefFromSpinoff('encyclopedia/9-spinoff/9-03-igrovaya-industriya/intro'));
  add('/encyclopedia/9-spinoff/9-04-razrabotka-igr', gamesHrefFromSpinoff('encyclopedia/9-spinoff/9-04-razrabotka-igr/intro'));

  for (const rootFolder of GAME_ROOTS) {
    const dir = path.join(spinoffDir, rootFolder);
    if (!fs.existsSync(dir)) {
      continue;
    }
    for (const rel of walkMarkdownFiles(dir)) {
      const raw = fs.readFileSync(path.join(dir, rel), 'utf8');
      const {data} = matter(raw);
      const docId = `encyclopedia/9-spinoff/${rootFolder}/${rel.replace(/\.mdx?$/i, '')}`;
      const canonical = resolveDocHref(docId, data).replace(/\/+$/, '');
      const external = gamesHrefFromSpinoff(docId);
      add(canonical, external);
      const legacy = `/${docId}`.replace(/\/+$/, '');
      if (legacy !== canonical) {
        add(legacy, external);
      }
    }
  }

  add('/tools/games', gamesHrefFromGametools('intro'));
  add('/tools/games/intro', gamesHrefFromGametools('intro'));
  for (const id of LEGACY_TOOLS_GAMES_IDS) {
    if (id === 'intro') {
      continue;
    }
    add(`/tools/games/${id}`, gamesHrefFromGametools(id));
  }

  for (const rel of walkMarkdownFiles(gametoolsDir)) {
    const raw = fs.readFileSync(path.join(gametoolsDir, rel), 'utf8');
    const {data} = matter(raw);
    const pageId = `9-031-gametools/${rel.replace(/\.mdx?$/i, '')}`;
    const slug = data.slug ? String(data.slug).replace(/\/+$/, '') : `/games/${pageId}`;
    const external = slug.startsWith('http') ? slug : gamesHref(slug.startsWith('/') ? slug : `/games/${pageId}`);
    add(slug, external);
  }

  redirects.sort((a, b) => a.from.localeCompare(b.from, 'ru'));
  fs.mkdirSync(path.dirname(outFile), {recursive: true});
  fs.writeFileSync(outFile, `${JSON.stringify(redirects, null, 2)}\n`, 'utf8');
  console.log(`games-external-redirects: ${redirects.length} routes → ${path.relative(root, outFile)}`);
}

main();
