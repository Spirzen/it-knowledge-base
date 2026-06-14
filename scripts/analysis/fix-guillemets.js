/**
 * Замена «» на " во всём файле (включая frontmatter), кроме блоков кода.
 */
const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '../../docs/encyclopedia');
let files = 0;
let count = 0;

function walk(dir, acc = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, acc);
    else if (/\.(md|mdx)$/i.test(entry.name)) acc.push(full);
  }
  return acc;
}

for (const file of walk(root)) {
  const lines = fs.readFileSync(file, 'utf8').split('\n');
  let inCode = false;
  let changed = false;

  for (let i = 0; i < lines.length; i++) {
    if (/^\s*```/.test(lines[i])) {
      inCode = !inCode;
      continue;
    }
    if (inCode) continue;
    const before = lines[i];
    const after = before.replace(/«/g, '"').replace(/»/g, '"');
    if (after !== before) {
      const n = (before.match(/[«»]/g) || []).length;
      count += n;
      lines[i] = after;
      changed = true;
    }
  }

  if (changed) {
    files += 1;
    fs.writeFileSync(file, lines.join('\n'), 'utf8');
  }
}

console.log(`guillemets: files ${files}, chars ${count}`);
