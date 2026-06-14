/**
 * Стилистические правки в docs/encyclopedia:
 * 1. «ёлочки» → "
 * 2. «не X, а Y» / «не просто X» → позитивная формулировка
 * 3. «слово: a, b, c» (2+ запятые после двоеточия) → тире
 *
 * Запуск: node scripts/analysis/fix-encyclopedia-style.js
 * Сухой прогон: node scripts/analysis/fix-encyclopedia-style.js --dry-run
 */
const fs = require('fs');
const path = require('path');

const dryRun = process.argv.includes('--dry-run');
const root = path.join(__dirname, '../../docs/encyclopedia');
const skipDirs = new Set(['node_modules', 'build', '.git']);

const stats = { files: 0, guillemets: 0, negatives: 0, colons: 0 };

function walk(dir, acc = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (skipDirs.has(entry.name)) continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, acc);
    else if (/\.(md|mdx)$/i.test(entry.name)) acc.push(full);
  }
  return acc;
}

function isSkippableLine(line, state) {
  if (state.inFrontmatter || state.inCode) return true;
  if (/^\s*```/.test(line)) return true;
  if (/^\s*import\s/.test(line)) return true;
  if (/^\s*<[A-Za-z]/.test(line)) return true;
  if (/^\s*\|/.test(line)) return true;
  if (/^#{1,6}\s/.test(line)) return true;
  if (/:\/\//.test(line)) return true;
  return false;
}

function replaceGuillemets(text) {
  const count = (text.match(/[«»]/g) || []).length;
  if (!count) return { text, count: 0 };
  return { text: text.replace(/«/g, '"').replace(/»/g, '"'), count };
}

function fixNegativePatterns(text) {
  let count = 0;

  const sub = (re, fn) => {
    text = text.replace(re, (...args) => {
      count += 1;
      return fn(...args);
    });
  };

  const EM = '\u2014';

  // «— не X, а Y» → «— Y»
  sub(/([—–\u2014-])\s*не\s+([^,]{2,140}?), а\s+/g, (m, dash) => `${dash} `);

  // «это не [просто] X, а Y»
  sub(
    /(^|[\s(—–\u2014-])это\s+не\s+(?:просто\s+)?([^,]{2,140}?), а\s+/gi,
    (m, lead) => `${lead}это `
  );

  // «не просто X, а Y»
  sub(/\bне\s+просто\s+([^,]{2,140}?), а\s+/gi, () => '');

  // «субъект не "X", а Y» → «субъект — Y»
  sub(
    /([а-яёА-ЯЁ][а-яёА-ЯЁ\s]{0,30})\s+не\s+"([^"]{2,100})",\s*а\s+([^.,;]+)/g,
    (m, subj, _x, y) => `${subj} ${EM} ${y.trim()}`
  );

  return { text, count };
}

function fixRhetoricalColons(text) {
  let count = 0;
  const next = text.replace(
    /:\s+(?=[^.\n;]{0,160}(?:,[^.\n;]{1,80}){2,})/g,
    () => {
      count += 1;
      return ' — ';
    }
  );
  return { text: next, count };
}

function processLine(line, state) {
  if (isSkippableLine(line, state)) return line;

  let result = line;
  const g = replaceGuillemets(result);
  result = g.text;
  stats.guillemets += g.count;

  const n = fixNegativePatterns(result);
  result = n.text;
  stats.negatives += n.count;

  const c = fixRhetoricalColons(result);
  result = c.text;
  stats.colons += c.count;

  return result;
}

function processFile(filePath) {
  const raw = fs.readFileSync(filePath, 'utf8');
  const lines = raw.split('\n');
  const state = { inFrontmatter: false, inCode: false, frontmatterDone: false };
  let modified = false;
  const out = [];

  for (const line of lines) {
    if (!state.frontmatterDone) {
      if (line.trim() === '---') {
        if (!state.inFrontmatter) {
          state.inFrontmatter = true;
          out.push(line);
          continue;
        }
        state.inFrontmatter = false;
        state.frontmatterDone = true;
        out.push(line);
        continue;
      }
      out.push(line);
      continue;
    }

    if (/^\s*```/.test(line)) {
      state.inCode = !state.inCode;
      out.push(line);
      continue;
    }

    const processed = processLine(line, state);
    if (processed !== line) modified = true;
    out.push(processed);
  }

  if (modified) {
    stats.files += 1;
    if (!dryRun) fs.writeFileSync(filePath, out.join('\n'), 'utf8');
  }
}

for (const file of walk(root)) processFile(file);

console.log(
  `${dryRun ? '[dry-run] ' : ''}files: ${stats.files}, guillemets: ${stats.guillemets}, negatives: ${stats.negatives}, colons: ${stats.colons}`
);
