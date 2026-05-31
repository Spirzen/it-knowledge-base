/**
 * Удаляет «пустые» скобки из markdown-заголовков в docs/.
 * Запуск: node scripts/analysis/clean-heading-parens.js
 * Сухой прогон: node scripts/analysis/clean-heading-parens.js --dry-run
 */
const fs = require('fs');
const path = require('path');

const dryRun = process.argv.includes('--dry-run');
const skip = new Set(['node_modules', 'build', '.git']);

function shouldRemoveParen(content) {
  const text = content.trim();
  if (!text) return true;

  const exact =
    /^(?:кратко|коротко|обзор|пошагово|опционально|по желанию|проверьте себя|осторожно|лестница|сводная таблица|сводка|шпаргалка|чек-?лист|рекомендуется|рекомендуем(?:ый маршрут)?|дополнительно|идея|выборка|вкладка|по задаче|углубление|наследие|устаревшие|локально|чтение|пример|примеры|учебная традиция|учебная классификация|для школьного уровня|для разработчиков|для новичк(?:а|у)|для старта|если доступно(?: в вашей версии)?|если предложено|если нужно|если необходимо|упрощённо|упрощённая модель|расширенный набор|граничные значения|тот же язык|по версиям|медленно|шумно|rate limit|нужен pip install deepface|иллюстрац(?:ия)?|полный маршрут курса|типичные ошибки новичка|полный TCP|перебор директорий|перезагрузка после обновления ядра \(если предложено\)|важно для совместимости игр|кратко, но обязательно|краткая версия|полная версия|getting started|quick start|walkthrough|hands-on|how-to|tutorial|demo|practice|exercise|homework|briefly|optional|recommended(?: route)?|cheatsheet|расширение|сводная|FAQ [\d.]+|уроки? [\d.–\-—,\s]+|Урок \d+)$/i;

  return exact.test(text);
}

function cleanHeadingText(text) {
  let result = text;
  result = result.replace(/\s*\(([^)]+)\)/g, (match, inner) =>
    shouldRemoveParen(inner) ? '' : match
  );
  result = result.replace(/\s{2,}/g, ' ').trim();
  result = result.replace(/\s+([—–-])/g, ' $1');
  return result;
}

const changes = [];

function processFile(filePath) {
  const raw = fs.readFileSync(filePath, 'utf8');
  const lines = raw.split('\n');
  let inCode = false;
  let modified = false;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].replace(/\r$/, '');
    if (/^```/.test(line.trim())) {
      inCode = !inCode;
      continue;
    }
    if (inCode) continue;

    const m = line.match(/^(#{1,6})(\s+)(.+)$/);
    if (!m || !/\(.+\)/.test(m[3])) continue;

    const cleaned = cleanHeadingText(m[3]);
    if (cleaned === m[3].trim()) continue;

    const newLine = `${m[1]}${m[2]}${cleaned}`;
    changes.push({
      file: filePath.replace(/\\/g, '/'),
      line: i + 1,
      before: m[3].trim(),
      after: cleaned,
    });
    lines[i] = newLine;
    modified = true;
  }

  if (modified && !dryRun) {
    fs.writeFileSync(filePath, lines.join('\n'), 'utf8');
  }
}

function walk(dir) {
  let entries;
  try {
    entries = fs.readdirSync(dir, { withFileTypes: true });
  } catch {
    return;
  }
  for (const e of entries) {
    if (skip.has(e.name)) continue;
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p);
    else if (/\.mdx?$/.test(e.name)) processFile(p);
  }
}

walk('docs');

const report = {
  dryRun,
  changedHeadings: changes.length,
  changedFiles: new Set(changes.map((c) => c.file)).size,
  changes,
};

fs.writeFileSync(
  path.join(__dirname, 'clean-heading-parens-report.json'),
  JSON.stringify(report, null, 2),
  'utf8'
);

console.log(
  JSON.stringify(
    {
      dryRun,
      changedHeadings: changes.length,
      changedFiles: report.changedFiles,
    },
    null,
    2
  )
);

if (changes.length > 0) {
  console.log('\nFirst 15 changes:');
  for (const c of changes.slice(0, 15)) {
    console.log(`${c.file}:${c.line}`);
    console.log(`  - ${c.before}`);
    console.log(`  + ${c.after}`);
  }
}
