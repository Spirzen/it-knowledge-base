/**
 * Чинит артефакты $1 / $3 после ошибочного replace-callback.
 * Запуск: node scripts/analysis/repair-style-artifacts.js
 */
const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '../../docs/encyclopedia');

function walk(dir, acc = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, acc);
    else if (/\.(md|mdx)$/i.test(entry.name)) acc.push(full);
  }
  return acc;
}

let files = 0;
let fixes = 0;

for (const file of walk(root)) {
  let text = fs.readFileSync(file, 'utf8');
  const before = text;

  text = text.replace(/\s\$1\s/g, () => {
    fixes += 1;
    return ' — ';
  });
  text = text.replace(/—\$1это/g, () => {
    fixes += 1;
    return '— это';
  });
  text = text.replace(/:\$1это/g, () => {
    fixes += 1;
    return ': это';
  });
  text = text.replace(/\s\$1это/g, () => {
    fixes += 1;
    return ' это';
  });
  // потерянный хвост после «субъект не "X", а Y» — оставляем тире, убираем мусор
  text = text.replace(/\s\$1\s*—\s*\$3/g, () => {
    fixes += 1;
    return ' — ';
  });
  text = text.replace(/\s\$1\s*—\s*\$3\./g, () => {
    fixes += 1;
    return '.';
  });

  if (text !== before) {
    files += 1;
    fs.writeFileSync(file, text, 'utf8');
  }
}

console.log(`repaired files: ${files}, fixes: ${fixes}`);
