const fs = require('fs');
const path = require('path');

const d = JSON.parse(
  fs.readFileSync(path.join(__dirname, 'headings-with-parens-full.json'), 'utf8')
);

const FILLER =
  /(^|\b)(кратко|коротко|обзор|пошагово|опционально|по желанию|проверьте себя|осторожно|лестница|сводная таблица|сводка|шпаргалка|чек-?лист|рекомендуется|рекомендуем|дополнительно|legacy|Update|unit$|идея$|выборка$|вкладка$|по задаче$|углубление$|наследие$|устаревшие$|локально$|чтение$|пример$|примеры$|учебная традиция|учебная классификация|для школьного уровня|для разработчиков|для новичка|для старта|если доступно|если предложено|если нужно|упрощённо|упрощённая модель|расширенный набор|расширение$|ядро AgentOps|FAQ \d|уроки? \d|урок \d|граничные значения|тот же язык|по версиям|медленно|шумно|rate limit|нужен pip|иллюстрац|полный маршрут курса|типичные ошибки новичка|полный TCP|перебор директорий|перезагрузка после|важно для|кратко, но|но обязательно|полный маршрут|сводная$|обзор$|краткая версия|полная версия|getting started|quick start|walkthrough|hands-on|how-to|tutorial|guide$|reference$|appendix|supplement|demo$|practice$|exercise$|homework$|lab$|intro$|summary$|overview$|briefly$|optional$|recommended$|recommended route|cheatsheet|checklist)(\b|$)/i;

const clearlyBad = d.items.filter((it) => it.parens.some((p) => FILLER.test(p)));

function toMd(items, title) {
  let md = `# ${title}\n\nВсего: ${items.length}\n\n`;
  let curFile = '';
  for (const it of items) {
    if (it.file !== curFile) {
      curFile = it.file;
      md += `\n## ${curFile}\n\n`;
    }
    const filler = it.parens.filter((p) => FILLER.test(p)).map((p) => `\`${p}\``).join(', ');
    md += `- L${it.line} ${'#'.repeat(it.level)} ${it.heading} — убрать: ${filler}\n`;
  }
  return md;
}

fs.writeFileSync(
  path.join(__dirname, 'headings-with-parens-filler.md'),
  toMd(clearlyBad, 'Заголовки с «пустыми» скобками (рекомендуется убрать)'),
  'utf8'
);

console.log('Filler headings:', clearlyBad.length);
