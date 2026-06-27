/**
 * Redirect spirzen.ru/glossary/* → terms.spirzen.ru (client redirects plugin).
 * Запуск: npm run docs:glossary-redirects
 */
import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import matter from 'gray-matter';
import {termsGlossaryHref} from './lib/termsUrl.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');
const glossaryDir = path.join(root, 'docs', 'glossary');
const outFile = path.join(root, 'src', 'data', 'glossaryExternalRedirects.json');

const SKIP = new Set(['_category_.json']);

function glossaryPagePath(fileName) {
  const letter = fileName.replace(/\.md$/i, '');
  return `/glossary/${letter}`;
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

  add('/glossary', termsGlossaryHref('/glossary/intro'));

  for (const fileName of fs.readdirSync(glossaryDir)) {
    if (!fileName.endsWith('.md') || SKIP.has(fileName)) {
      continue;
    }
    const raw = fs.readFileSync(path.join(glossaryDir, fileName), 'utf8');
    const {data} = matter(raw);
    const page =
      typeof data.slug === 'string' && data.slug.startsWith('/glossary/')
        ? data.slug.replace(/\/+$/, '')
        : glossaryPagePath(fileName);
    add(page, termsGlossaryHref(page));
  }

  redirects.sort((a, b) => a.from.localeCompare(b.from, 'ru'));
  fs.mkdirSync(path.dirname(outFile), {recursive: true});
  fs.writeFileSync(outFile, `${JSON.stringify(redirects, null, 2)}\n`, 'utf8');
  console.log(
    `glossary-external-redirects: ${redirects.length} routes → ${path.relative(root, outFile)}`,
  );
}

main();
