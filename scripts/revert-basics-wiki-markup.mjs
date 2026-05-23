/**
 * Убирает сырую разметку [[термин|подпись]] из 1-basics и чинит типичные поломки автолинка.
 * Запуск: node scripts/revert-basics-wiki-markup.mjs
 */
import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import matter from 'gray-matter';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const basicsDir = path.join(__dirname, '..', 'docs', 'encyclopedia', '1-basics');

const WIKI_RE = /\[\[([^\]|#]+)(?:#([^\]|]+))?(?:\|([^\]]+))?\]\]/g;
/** Остаток после неполного снятия [[...]]: «термин|подпись]]» */
const BROKEN_WIKI_RE = /([а-яёА-ЯЁa-zA-Z][а-яёА-ЯЁa-zA-Z0-9\s-]*)\|([^\]]+)\]\]/g;

/** Порядок важен: сначала длинные фразы */
const CORRUPTION_FIXES = [
  ['Данные Scientist', 'Data Scientist'],
  ['Данные Analyst', 'Data Analyst'],
  ['Данные Engineer', 'Data Engineer'],
  ['Данные Наука', 'Data Science'],
  ['Data-инженеры', 'Данные-инженеры'],
  ['Data-инженер', 'Данные-инженер'],
  ['Big Данные', 'Big Data'],
  ['Данных (Данные Analyst)', 'Данных (Data Analyst)'],
];

function walk(dir, files = []) {
  for (const entry of fs.readdirSync(dir, {withFileTypes: true})) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(full, files);
    } else if (entry.name.endsWith('.md')) {
      files.push(full);
    }
  }
  return files;
}

function unwrapWikiMarkup(text) {
  return text
    .replace(WIKI_RE, (_, target, _hash, label) => (label ?? target).trim())
    .replace(BROKEN_WIKI_RE, (_, _target, label) => label.trim());
}

function applyCorruptionFixes(text) {
  let out = text;
  for (const [from, to] of CORRUPTION_FIXES) {
    out = out.split(from).join(to);
  }
  return out;
}

let filesChanged = 0;
let wikiRemoved = 0;

for (const filePath of walk(basicsDir)) {
  const raw = fs.readFileSync(filePath, 'utf8');
  const parsed = matter(raw);
  const before = parsed.content;
  if (!before.includes('[[') && !BROKEN_WIKI_RE.test(before)) {
    continue;
  }
  BROKEN_WIKI_RE.lastIndex = 0;

  const wikiCount = (before.match(WIKI_RE) ?? []).length;
  let body = unwrapWikiMarkup(before);
  body = applyCorruptionFixes(body);

  if (body === before) {
    continue;
  }

  const outBody = body.startsWith('\n') ? body : `\n${body}`;
  fs.writeFileSync(filePath, matter.stringify(outBody, parsed.data), 'utf8');
  filesChanged += 1;
  wikiRemoved += wikiCount;
}

console.log(`revert-basics-wiki: files=${filesChanged}, removed [[...]]=${wikiRemoved}`);
