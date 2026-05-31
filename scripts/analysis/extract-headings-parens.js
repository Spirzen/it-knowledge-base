const fs = require('fs');
const path = require('path');

const headingRe = /^(#{1,6})\s+(.+)$/;
const hasParensRe = /\(.+\)/;
const skip = new Set(['node_modules', 'build', '.git']);

/** Извлечь все фрагменты в скобках из заголовка */
function extractParens(text) {
  const out = [];
  const re = /\(([^)]+)\)/g;
  let m;
  while ((m = re.exec(text)) !== null) out.push(m[1].trim());
  return out;
}

/** Паттерны «малоценных» скобок */
const LOW_VALUE_PATTERNS = [
  // Русские служебные
  /^кратко$/i,
  /^коротко$/i,
  /^обзор$/i,
  /^полный$/i,
  /^полная$/i,
  /^полное$/i,
  /^полный\s/i,
  /^полная\s/i,
  /^полное\s/i,
  /^пошагово$/i,
  /^пример$/i,
  /^примеры$/i,
  /^важно$/i,
  /^важно\s/i,
  /^опционально$/i,
  /^по желанию$/i,
  /^рекомендуется/i,
  /^рекомендуем/i,
  /^проверьте себя$/i,
  /^сводная таблица$/i,
  /^сводка$/i,
  /^шпаргалка$/i,
  /^чек-?лист$/i,
  /^осторожно/i,
  /^медленно/i,
  /^шумно$/i,
  /^если предложено$/i,
  /^если нужно$/i,
  /^если необходимо$/i,
  /^для старта$/i,
  /^для новичка$/i,
  /^для начала$/i,
  /^учебный/i,
  /^упрощённая модель$/i,
  /^упрощённая$/i,
  /^расширение$/i,
  /^ядро\s/i,
  /^слои\s/i,
  /^на примере$/i,
  /^на примере\s/i,
  /^типа$/i,
  /^тип\s/i,
  /^режим\s/i,
  /^режим$/i,
  /^чтение$/i,
  /^unit$/i,
  /^граничные значения$/i,
  /^лестница$/i,
  /^сводная$/i,
  /^тот же язык$/i,
  /^по версиям$/i,
  /^по желанию$/i,
  /^в двух словах$/i,
  /^короткая$/i,
  /^минимальный$/i,
  /^минимальная$/i,
  /^минимальное$/i,
  /^базовый$/i,
  /^базовая$/i,
  /^базовое$/i,
  /^основы$/i,
  /^введение$/i,
  /^итог$/i,
  /^итоги$/i,
  /^заключение$/i,
  /^резюме$/i,
  /^шаг \d/i,
  /^этап \d/i,
  /^уроки?\s+\d/i,
  /^урок\s+\d/i,
  /^FAQ\s/i,
  /^урок\s/i,
  /^ноябрь/i,
  /^май\s/i,
  /^релиз/i,
  /^см\.\s/i,
  /^см$/i,
  /^смотри/i,
  /^см\. таблицу/i,
  /^дополнительно$/i,
  /^продолжение$/i,
  /^часть \d/i,
  /^ч\.?\s*\d/i,
  /^раздел \d/i,
  /^пункт \d/i,
  /^п\.?\s*\d/i,
  /^см\. ниже$/i,
  /^ниже$/i,
  /^выше$/i,
  /^далее$/i,
  /^подробнее$/i,
  /^детальнее$/i,
  /^подробно$/i,
  /^краткая версия$/i,
  /^полная версия$/i,
  /^старый$/i,
  /^новый$/i,
  /^legacy$/i,
  /^deprecated$/i,
  /^beta$/i,
  /^alpha$/i,
  /^draft$/i,
  /^черновик$/i,
  /^TODO$/i,
  /^WIP$/i,
  /^TBD$/i,
  /^fixme$/i,
  /^note$/i,
  /^notes$/i,
  /^tip$/i,
  /^hint$/i,
  /^warning$/i,
  /^caution$/i,
  /^optional$/i,
  /^recommended$/i,
  /^briefly$/i,
  /^overview$/i,
  /^summary$/i,
  /^intro$/i,
  /^basics$/i,
  /^advanced$/i,
  /^beginner$/i,
  /^intermediate$/i,
  /^step-by-step$/i,
  /^example$/i,
  /^examples$/i,
  /^checklist$/i,
  /^cheatsheet$/i,
  /^quick start$/i,
  /^getting started$/i,
  /^hands-on$/i,
  /^lab$/i,
  /^exercise$/i,
  /^homework$/i,
  /^practice$/i,
  /^demo$/i,
  /^walkthrough$/i,
  /^tutorial$/i,
  /^how-to$/i,
  /^guide$/i,
  /^reference$/i,
  /^appendix$/i,
  /^supplement$/i,
  /^addendum$/i,
  /^update$/i,
  /^changelog$/i,
  /^release notes$/i,
  /^version \d/i,
  /^v\d/i,
  /^202\d$/i,
  /^201\d$/i,
  /^200\d$/i,
  /^19\d\d$/i,
  /^20\d\d$/i,
  /^Q[1-4]\s/i,
  /^январ/i,
  /^феврал/i,
  /^март/i,
  /^апрел/i,
  /^июн/i,
  /^июл/i,
  /^август/i,
  /^сентябр/i,
  /^октябр/i,
  /^декабр/i,
];

/** Паттерны «ценных» скобок */
const HIGH_VALUE_PATTERNS = [
  // Аббревиатуры (2+ заглавных букв или буква+цифры)
  /^[A-Z]{2,}[\d\w\-]*$/,
  /^[A-Z][a-z]+(?:\s+[A-Z][a-z]+)*$/, // Title Case English
  /^[A-Z]{2,}\s/i,
  // Русские аббревиатуры
  /^[А-ЯЁ]{2,}$/,
  /^ИИ$/,
  /^СУБД$/,
  /^ОС$/,
  /^БД$/,
  /^API$/,
  /^HTTP$/,
  /^HTTPS$/,
  /^TCP$/,
  /^UDP$/,
  /^DNS$/,
  /^SQL$/,
  /^DDL$/,
  /^DML$/,
  /^DCL$/,
  /^ACID$/,
  /^ORM$/,
  /^OOP$/,
  /^MVP$/,
  /^MVVM$/,
  /^MVC$/,
  /^JWT$/,
  /^OAuth$/,
  /^SAML$/,
  /^SASL$/,
  /^ACL$/,
  /^RLS$/,
  /^CTE$/,
  /^QBE$/,
  /^IaC$/,
  /^CI\/CD$/,
  /^XSS$/,
  /^CSRF$/,
  /^CORS$/,
  /^REST$/,
  /^SOAP$/,
  /^gRPC$/,
  /^ETL$/,
  /^ESB$/,
  /^DES$/,
  /^ABM$/,
  /^OCR$/,
  /^NER$/,
  /^SVM$/,
  /^ML$/,
  /^AI$/,
  /^LLM$/,
  /^GPU$/,
  /^CPU$/,
  /^RAM$/,
  /^SSD$/,
  /^HDD$/,
  /^USB$/,
  /^VM$/,
  /^K8s$/,
  /^Docker$/,
  /^Kubernetes$/,
  /^PostgreSQL$/,
  /^MySQL$/,
  /^Redis$/,
  /^MongoDB$/,
  /^Node\.js$/,
  /^TypeScript$/,
  /^JavaScript$/,
  /^Python$/,
  /^PHP$/,
  /^Go$/,
  /^Rust$/,
  /^C\+\+$/,
  /^C#$/,
  /^\.NET$/,
  /^Linux$/,
  /^Windows$/,
  /^macOS$/,
  /^WSL2$/,
  /^WSL$/,
  /^GitHub$/,
  /^GitLab$/,
  /^Azure$/,
  /^AWS$/,
  /^GCP$/,
  /^Google Cloud/,
  /^Microsoft/,
  /^Amazon/,
  // Технические термины с дефисом
  /^[A-Za-z]+-[A-Za-z]+(?:-[A-Za-z]+)*$/,
  // Английский перевод / синоним (содержит латиницу и пробелы)
  /^[A-Za-z][A-Za-z\s\-\/\.&,']+$/,
  // Расшифровка аббревиатуры: "Something Something"
  /^[A-Z][a-z]+(?:\s+[A-Za-z]+)+$/,
  // Файловые расширения
  /^\.[a-z]+$/i,
  /^\.\w+\s/,
  // Версии продукта с именем
  /^phpMyAdmin/i,
  /^phpPgAdmin/i,
  /^Windows Subsystem/i,
  /^Support Vector/i,
  /^Architecture Decision/i,
  /^Minimum Viable/i,
  /^Model-View/i,
  /^Common Table/i,
  /^Row-Level/i,
  /^Point-to-Point/i,
  /^Publish-Subscribe/i,
  /^Fire-and-Forget/i,
  /^Request-Response/i,
  /^Infrastructure as Code/i,
  /^Process ID/i,
  /^Enumeration/i,
  /^Memory Stick/i,
  /^append-only/i,
  /^Streaming replication/i,
  /^Configuration storage/i,
  /^Query-by-example/i,
  /^Personal$/,
  /^802\.1X$/,
  /^hashcat$/,
  /^confluent-kafka$/,
  /^Cinemachine$/,
  /^Particle System$/,
  /^User Interface$/,
  /^White-boxing$/i,
  /^REPL$/,
  /^Tk$/,
  /^Widgets$/,
  /^Stacks?$/,
  /^Heap$/,
  /^HCL$/,
  /^YAML$/,
  /^Debian\/Ubuntu$/,
  /^GitHub$/,
  /^PDO$/,
  /^pmadb$/,
  /^Android$/,
  /^iOS$/,
  /^XCUITest$/,
  /^Espresso$/,
  /^flakiness$/,
  /^Postman$/,
  /^JUnit$/,
  /^TypeScript$/,
  /^MoSCoW$/,
  /^BABOK$/,
  /^RMP$/,
  /^SRS$/,
  /^MBRE$/,
  /^SBE$/,
  /^MLOps$/,
  /^AgentOps$/,
  /^observability$/,
  /^LLMNR$/,
  /^NBT-NS$/,
  /^Kerberos$/,
  /^NTLM$/,
  /^Responder$/,
  /^WPA2/,
  /^PMKID$/,
  /^IDS\/IPS$/,
  /^evasion$/,
  /^KRaft$/,
  /^kafkajs$/,
  /^Node\.js$/,
  /^offsets$/,
  /^log compaction$/,
  /^Latency$/,
  /^Saga$/,
  /^Reliable Async$/,
  /^ETL/,
  /^ESB/,
  /^cookie$/,
  /^server-side$/,
  /^grant flows$/,
  /^login$/,
  /^logout$/,
  /^refresh$/,
  /^failover$/,
  /^logging$/,
  /^peer-/,
  /^named pipes$/,
  /^redis-cli$/,
  /^Node\.js/,
  /^XtraBackup$/,
  /^Strings$/,
  /^Lists$/,
  /^Sets$/,
  /^Sorted Sets$/,
  /^Hashes$/,
  /^Stack$/,
  /^Heap$/,
  /^\.cpp$/,
  /^\.h\s/,
  /^\.hpp$/,
  /^\.lib$/,
  /^\.a$/,
  /^\.so$/,
  /^Linux x86-64$/,
  /^Visual Basic$/,
  /^Fortran$/,
  /^Cobol$/,
  /^Pascal$/,
  /^assembler$/,
  /^PowerShell$/,
  /^Bash$/,
  /^Groovy$/,
  /^Kotlin$/,
  /^Ruby$/,
  /^Nim$/,
  /^Lua$/,
  /^Luau$/,
  /^Groovy$/,
];

function classifyParen(paren) {
  for (const re of LOW_VALUE_PATTERNS) {
    if (re.test(paren)) return 'low';
  }
  for (const re of HIGH_VALUE_PATTERNS) {
    if (re.test(paren)) return 'high';
  }
  // Эвристики
  if (/^[A-ZА-ЯЁ]{2,}$/.test(paren)) return 'high'; // аббревиатура
  if (/^[A-Z][a-z]+(?:\s+[A-Za-z\-\/]+)+$/.test(paren)) return 'high'; // English phrase
  if (/^[a-z]+(?:-[a-z]+)+$/i.test(paren)) return 'high'; // kebab-case term
  if (/^\d[\d\.\-–—,\s]*$/.test(paren)) return 'low'; // только номера уроков/версий
  if (/^\d+\.\d+/.test(paren)) return 'low'; // версии типа 5.2
  if (/^(урок|уроки|шаг|этап|часть|раздел|п\.|пункт)\s/i.test(paren)) return 'low';
  if (/(кратко|обзор|пример|важно|рекоменд|опцион|пошаг|сводн|лестниц|проверь|для старта|для новичк|по желанию|если |осторож|медлен|шумн|учебн|упрощ)/i.test(paren)) return 'low';
  if (/^[а-яё\s\-—–,\d]+$/i.test(paren) && paren.length < 30 && !/[A-Z]{2,}/.test(paren)) {
    // короткая русская фраза без аббревиатур — часто служебная
    if (/(кратко|обзор|пример|важно|рекоменд|опцион|пошаг|сводн|лестниц|проверь|для |если |осторож|медлен|шумн|учебн|упрощ|чтение|режим|тип|на одной|на примере|по версиям|по желанию|граничн|соседн|имя, параметр|даты, ID|физическ|резервн|метаданн|расширен|анализ|детекц|текст на|именованн|пассивн|активн|полный TCP|перебор|скрипт|перезагрузк|иллюстрац|нужен pip|тот же|граничн|параметриз|unit|cookie|режим|веб и БД|пакет|исходник|локально|рекомендуется новичку|режим cookie|FAQ)/i.test(paren)) return 'low';
  }
  // Смешанный контент с полезными терминами
  if (/[A-Z]{2,}/.test(paren) || /[A-Za-z]{4,}/.test(paren)) return 'high';
  return 'uncertain';
}

function classifyHeading(level, text, parens) {
  const classes = parens.map(classifyParen);
  if (classes.every((c) => c === 'high')) return 'good';
  if (classes.some((c) => c === 'low') && !classes.some((c) => c === 'high')) return 'bad';
  if (classes.some((c) => c === 'low') && classes.some((c) => c === 'high')) return 'mixed';
  if (classes.every((c) => c === 'uncertain')) return 'uncertain';
  if (classes.some((c) => c === 'uncertain')) return 'uncertain';
  return 'uncertain';
}

const all = [];
const stats = { good: 0, bad: 0, mixed: 0, uncertain: 0 };

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
    if (e.isDirectory()) {
      walk(p);
      continue;
    }
    if (!/\.mdx?$/.test(e.name)) continue;

    let inCode = false;
    let lineNo = 0;
    for (const rawLine of fs.readFileSync(p, 'utf8').split('\n')) {
      lineNo++;
      const line = rawLine.replace(/\r$/, '');
      if (/^```/.test(line.trim())) {
        inCode = !inCode;
        continue;
      }
      if (inCode) continue;
      const m = line.match(/^(#{1,6})\s+(.+)$/);
      if (!m || !hasParensRe.test(m[2])) continue;

      const level = m[1].length;
      const text = m[2].trim();
      const parens = extractParens(text);
      const category = classifyHeading(level, text, parens);
      stats[category]++;

      all.push({
        file: p.replace(/\\/g, '/'),
        line: lineNo,
        level,
        heading: text,
        parens,
        category,
        parenClasses: parens.map((p, i) => ({ text: p, class: classifyParen(p) })),
      });
    }
  }
}

walk('docs');

all.sort((a, b) => {
  const order = { bad: 0, mixed: 1, uncertain: 2, good: 3 };
  if (order[a.category] !== order[b.category]) return order[a.category] - order[b.category];
  return a.file.localeCompare(b.file) || a.line - b.line;
});

const outDir = 'scripts/analysis';
fs.mkdirSync(outDir, { recursive: true });

fs.writeFileSync(
  path.join(outDir, 'headings-with-parens-full.json'),
  JSON.stringify({ generatedAt: new Date().toISOString(), stats, total: all.length, items: all }, null, 2),
  'utf8'
);

function toMd(items, title) {
  let md = `# ${title}\n\nВсего: ${items.length}\n\n`;
  let curFile = '';
  for (const it of items) {
    if (it.file !== curFile) {
      curFile = it.file;
      md += `\n## ${curFile}\n\n`;
    }
    const marks = it.parens.map((p, i) => {
      const cls = it.parenClasses[i].class;
      const tag = cls === 'low' ? '❌' : cls === 'high' ? '✅' : '❓';
      return `${tag} \`${p}\``;
    }).join(', ');
    md += `- L${it.line} ${'#'.repeat(it.level)} ${it.heading} — ${marks}\n`;
  }
  return md;
}

fs.writeFileSync(path.join(outDir, 'headings-with-parens-full.md'), toMd(all, 'Все заголовки со скобками'), 'utf8');
fs.writeFileSync(path.join(outDir, 'headings-with-parens-bad.md'), toMd(all.filter((x) => x.category === 'bad'), 'Подозрительные заголовки (низкая ценность скобок)'), 'utf8');
fs.writeFileSync(path.join(outDir, 'headings-with-parens-uncertain.md'), toMd(all.filter((x) => x.category === 'uncertain'), 'Неоднозначные заголовки'), 'utf8');
fs.writeFileSync(path.join(outDir, 'headings-with-parens-mixed.md'), toMd(all.filter((x) => x.category === 'mixed'), 'Смешанные заголовки'), 'utf8');

console.log(JSON.stringify({ total: all.length, stats }, null, 2));
console.log('Written to scripts/analysis/');
