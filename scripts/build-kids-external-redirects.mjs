/**
 * Redirect spirzen.ru/encyclopedia/9-spinoff/9-11-dlya-detey/* → kids.spirzen.ru
 * Запуск: npm run docs:kids-redirects
 */
import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import matter from 'gray-matter';
import {resolveDocHref} from './lib/docUrl.mjs';
import {kidsHrefFromSpinoff} from './lib/kidsUrl.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');
const kidsDir = path.join(root, 'docs', 'encyclopedia', '9-spinoff', '9-11-dlya-detey');
const outFile = path.join(root, 'src', 'data', 'kidsExternalRedirects.json');

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

  add('/encyclopedia/9-spinoff/9-11-dlya-detey', kidsHrefFromSpinoff('encyclopedia/9-spinoff/9-11-dlya-detey/forkids'));
  add('/section/forkids', kidsHrefFromSpinoff('encyclopedia/9-spinoff/9-11-dlya-detey/forkids'));
  add('/encyclopedia/9-spinoff/9-11-dlya-detey/forkids', kidsHrefFromSpinoff('encyclopedia/9-spinoff/9-11-dlya-detey/forkids'));

  for (const rel of walkMarkdownFiles(kidsDir)) {
    const raw = fs.readFileSync(path.join(kidsDir, rel), 'utf8');
    const {data} = matter(raw);
    const docId = `encyclopedia/9-spinoff/9-11-dlya-detey/${rel.replace(/\.mdx?$/i, '')}`;
    const canonical = resolveDocHref(docId, data).replace(/\/+$/, '');
    const external = kidsHrefFromSpinoff(docId);
    add(canonical, external);
    const legacy = `/${docId}`.replace(/\/+$/, '');
    if (legacy !== canonical) {
      add(legacy, external);
    }
  }

  redirects.sort((a, b) => a.from.localeCompare(b.from, 'ru'));
  fs.mkdirSync(path.dirname(outFile), {recursive: true});
  fs.writeFileSync(outFile, `${JSON.stringify(redirects, null, 2)}\n`, 'utf8');
  console.log(`kids-external-redirects: ${redirects.length} routes → ${path.relative(root, outFile)}`);
}

main();
