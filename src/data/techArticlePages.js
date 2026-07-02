/**
 * Какие страницы документации показывают логотип технологии у заголовка.
 * Все замапленные разделы энциклопедии: intro + все главы, кроме итогов/чек-листа (998, 999).
 * Точечные override — смешанные темы и практикумы с отдельным брендом.
 */

/** @type {readonly string[]} */
export const THEORY_ARTICLE_IDS = ['1', '10', '11', '14'];

/** @type {readonly string[]} */
const META_PAGE_IDS = ['998', '999'];

/**
 * Префикс пути документа (без имени файла) → tech id.
 * Длинные префиксы должны идти раньше коротких (сортировка по длине).
 * @type {readonly [string, string][]}
 */
const SECTION_TECH_PREFIXES = [
  // —— 5. Языки (вложенные — раньше корня) ——
  ['encyclopedia/5-languages/5-16-starye-yazyki/visual-basic', 'vb'],
  ['encyclopedia/5-languages/5-16-starye-yazyki/assembler', 'assembler'],
  ['encyclopedia/5-languages/5-16-starye-yazyki/c-language', 'c'],
  ['encyclopedia/5-languages/5-16-starye-yazyki/Fortran', 'fortran'],
  ['encyclopedia/5-languages/5-16-starye-yazyki/Cobol', 'cobol'],
  ['encyclopedia/5-languages/5-16-starye-yazyki/Lisp', 'lisp'],
  ['encyclopedia/5-languages/5-16-starye-yazyki/Pascal', 'pascal'],
  ['encyclopedia/5-languages/5-16-starye-yazyki', 'legacy-hub'],
  ['encyclopedia/5-languages/5-01-javascript', 'javascript'],
  ['encyclopedia/5-languages/5-02-python', 'python'],
  ['encyclopedia/5-languages/5-03-java', 'java'],
  ['encyclopedia/5-languages/5-04-platforma-dotnet', 'dotnet'],
  ['encyclopedia/5-languages/5-05-csharp', 'csharp'],
  ['encyclopedia/5-languages/5-06-cpp', 'cpp'],
  ['encyclopedia/5-languages/5-07-php', 'php'],
  ['encyclopedia/5-languages/5-08-smalltalk', 'smalltalk'],
  ['encyclopedia/5-languages/5-09-kotlin', 'kotlin'],
  ['encyclopedia/5-languages/5-10-typescript', 'typescript'],
  ['encyclopedia/5-languages/5-10-go', 'go'],
  ['encyclopedia/5-languages/5-11-ruby', 'ruby'],
  ['encyclopedia/5-languages/5-12-groovy', 'groovy'],
  ['encyclopedia/5-languages/5-13-rust', 'rust'],
  ['encyclopedia/5-languages/5-14-swift', 'swift'],
  ['encyclopedia/5-languages/5-15-lua-i-luau', 'lua'],
  ['encyclopedia/5-languages/5-17-haskell', 'haskell'],
  ['encyclopedia/5-languages/5-18-scala', 'scala'],
  ['encyclopedia/5-languages/5-19-elixir', 'elixir'],
  ['encyclopedia/5-languages/5-20-zig', 'zig'],
  ['encyclopedia/5-languages/5-21-nim', 'nim'],
  ['encyclopedia/5-languages/5-22-dart', 'dart'],
  ['encyclopedia/5-languages/5-23-r', 'r'],
  ['encyclopedia/5-languages/5-24-julia', 'julia'],
  ['encyclopedia/5-languages/5-25-bash', 'bash'],
  ['encyclopedia/5-languages/5-26-powershell', 'microsoft'],
  ['encyclopedia/5-languages/5-27-1s', '1c'],

  // —— 2. Система и сеть (практикумы — раньше родителя) ——
  [
    'encyclopedia/2-system-network/2-06-sistemnoe-administrirovanie/prometheus-grafana-praktikum',
    'prometheus',
  ],
  [
    'encyclopedia/2-system-network/2-06-sistemnoe-administrirovanie/zabbix-praktikum',
    'monitoring',
  ],
  [
    'encyclopedia/2-system-network/2-06-sistemnoe-administrirovanie/data-restoring',
    'backup',
  ],
  ['encyclopedia/2-system-network/2-01-operatsionnaya-sistema', 'os'],
  ['encyclopedia/2-system-network/2-02-platformy', 'platforms'],
  ['encyclopedia/2-system-network/2-03-set-i-internet', 'network'],
  ['encyclopedia/2-system-network/2-04-kak-rabotayut-sayty-i-veb-sayty', 'web'],
  ['encyclopedia/2-system-network/2-05-terminal', 'bash'],
  ['encyclopedia/2-system-network/2-06-sistemnoe-administrirovanie', 'sysadmin'],
  ['encyclopedia/2-system-network/2-07-tehnicheskaya-podderzhka', 'support'],
  ['encyclopedia/2-system-network/2-08-osnovy-informatsionnoy-bezopasnosti', 'security'],
  ['encyclopedia/2-system-network/2-09-osnovy-integratsionnogo-vzaimodeystviya', 'integration'],
  ['encyclopedia/2-system-network/2-10-zhelezo', 'hardware'],

  // —— 3. Данные и разметка ——
  ['encyclopedia/3-data-markup/3-01-prodvinutye-operatsii-s-dannymi', 'data'],
  ['encyclopedia/3-data-markup/3-02-struktury-dannyh', 'data-structures'],
  ['encyclopedia/3-data-markup/3-03-myslitelnaya-baza', 'database'],
  ['encyclopedia/3-data-markup/3-04-konfiguratsii-i-dannye', 'yaml'],
  ['encyclopedia/3-data-markup/3-05-osnovy-baz-dannyh', 'database'],
  ['encyclopedia/3-data-markup/3-06-nosql', 'nosql'],
  ['encyclopedia/3-data-markup/3-07-sql', 'sql'],
  ['encyclopedia/3-data-markup/3-08-upravlenie-rsubd', 'database'],
  ['encyclopedia/3-data-markup/3-09-html', 'html'],
  ['encyclopedia/3-data-markup/3-10-css', 'css'],
  ['encyclopedia/3-data-markup/3-11-analiz-dannyh', 'analytics'],
  ['encyclopedia/3-data-markup/3-12-matematicheskoe-programmirovanie', 'math-programming'],

  // —— 4. Код и разработка ——
  ['encyclopedia/4-code-dev/4-11-desktopnye-prilozheniya/wpf-praktikum', 'dotnet'],
  ['encyclopedia/4-code-dev/4-01-algoritmy', 'algorithms'],
  ['encyclopedia/4-code-dev/4-02-chto-takoe-kod-i-kak-on-rabotaet', 'code'],
  ['encyclopedia/4-code-dev/4-03-vypolnenie-koda', 'code'],
  ['encyclopedia/4-code-dev/4-04-proekt-i-freymvorki', 'project'],
  ['encyclopedia/4-code-dev/4-05-asinhronnost', 'async'],
  ['encyclopedia/4-code-dev/4-06-arhitektura-vypolneniya', 'architecture'],
  ['encyclopedia/4-code-dev/4-07-paradigmy-i-urovni-abstraktsii', 'paradigms'],
  ['encyclopedia/4-code-dev/4-08-oop', 'oop'],
  ['encyclopedia/4-code-dev/4-09-zavisimosti', 'dependencies'],
  ['encyclopedia/4-code-dev/4-10-orm-i-rabota-s-dannymi', 'orm'],
  ['encyclopedia/4-code-dev/4-11-desktopnye-prilozheniya', 'desktop'],
  ['encyclopedia/4-code-dev/4-12-mobilnye-prilozheniya', 'mobile'],
  ['encyclopedia/4-code-dev/4-13-osnovy-raboty-s-git', 'git'],
  ['encyclopedia/4-code-dev/4-14-razrabotka-i-otladka', 'debugging'],
  ['encyclopedia/4-code-dev/4-15-sborka-musora', 'gc'],
  ['encyclopedia/4-code-dev/4-16-parallelnye-vychisleniya', 'parallel'],

  // —— 6. ИИ ——
  ['encyclopedia/6-ai/6-01-vvedenie-v-ii', 'ai'],
  ['encyclopedia/6-ai/6-02-mashinnoe-obuchenie', 'ml'],
  ['encyclopedia/6-ai/6-03-neyroseti', 'neural-nets'],
  ['encyclopedia/6-ai/6-04-modeli-i-instrumenty', 'ai-tools'],
  ['encyclopedia/6-ai/6-05-razrabotka-ii', 'ml'],
  ['encyclopedia/6-ai/6-06-primenenie-ii', 'ai'],
  ['encyclopedia/6-ai/6-07-vayb-koding-i-neurokontent', 'ai-tools'],
  ['encyclopedia/6-ai/6-08-agentops', 'agentops'],
  ['encyclopedia/6-ai/6-09-transformery-i-nlp', 'nlp'],

  // —— 7. Проект ——
  ['encyclopedia/7-project/7-06-proektirovanie-i-arhitektura/design-patterns', 'design'],
  ['encyclopedia/7-project/7-06-proektirovanie-i-arhitektura/design', 'design'],
  ['encyclopedia/7-project/7-01-obschee-o-biznese', 'business'],
  ['encyclopedia/7-project/7-02-komanda-i-upravlenie', 'team'],
  ['encyclopedia/7-project/7-03-metodologiya-i-zhiznennyy-tsikl-po', 'methodology'],
  ['encyclopedia/7-project/7-04-analitika', 'sys-analytics'],
  ['encyclopedia/7-project/7-05-testirovanie', 'testing'],
  ['encyclopedia/7-project/7-06-proektirovanie-i-arhitektura', 'design'],
  ['encyclopedia/7-project/7-07-intellektualnye-prava', 'ip'],
  ['encyclopedia/7-project/7-08-tehnicheskoe-pismo', 'tech-writing'],
  ['encyclopedia/7-project/7-09-bazy-znaniy-i-zadachniki', 'wikipedia'],
  ['encyclopedia/7-project/7-10-kultura-koda', 'code-culture'],
  ['encyclopedia/7-project/7-11-legasi-kod', 'legacy'],
  ['encyclopedia/7-project/7-12-konstruirovanie-po', 'architecture'],
  ['encyclopedia/7-project/7-13-ekonomika-proizvodstva-po', 'business'],
  ['encyclopedia/7-project/7-14-scrum', 'scrum'],
  ['encyclopedia/7-project/7-15-vnedrenie-erp-sistem', 'erp'],
  ['encyclopedia/7-project/7-16-itsm-i-it-uslugi', 'itsm'],

  // —— 8. Инфраструктура и безопасность ——
  ['encyclopedia/8-infra-security/8-11-praktikum-postgresql', 'postgresql'],
  ['encyclopedia/8-infra-security/8-01-oblachnye-tehnologii', 'cloud'],
  ['encyclopedia/8-infra-security/8-02-low-code-no-code', 'low-code'],
  ['encyclopedia/8-infra-security/8-03-zabota-o-kode-i-dannyh', 'code-culture'],
  ['encyclopedia/8-infra-security/8-04-devops-ci-cd', 'devops'],
  ['encyclopedia/8-infra-security/8-05-mikroservisy-i-integratsiya', 'microservices'],
  ['encyclopedia/8-infra-security/8-06-konteynerizatsiya-i-orkestratsiya', 'containers'],
  ['encyclopedia/8-infra-security/8-07-informatsionnaya-bezopasnost', 'security'],
  ['encyclopedia/8-infra-security/8-08-praktikum-rest-i-websocket', 'rest'],
  ['encyclopedia/8-infra-security/8-09-belyy-haking-i-bug-bounty', 'bug-bounty'],
  ['encyclopedia/8-infra-security/8-10-testirovanie-na-proniknovenie', 'pentest'],

  // —— 9. Спин-офф (вложенные — раньше) ——
  ['encyclopedia/9-spinoff/9-04-razrabotka-igr/praktikum-razrabotki-igr', 'game-dev'],
  ['encyclopedia/9-spinoff/9-03-igrovaya-industriya/game-studies', 'game-industry'],
  ['encyclopedia/9-spinoff/9-11-dlya-detey/1-computer', 'computer'],
  ['encyclopedia/9-spinoff/9-11-dlya-detey/2-video-games', 'games'],
  ['encyclopedia/9-spinoff/9-11-dlya-detey/3-development', 'code'],
  ['encyclopedia/9-spinoff/9-11-dlya-detey/4-programmy', 'software'],
  ['encyclopedia/9-spinoff/9-11-dlya-detey/5-kod', 'code'],
  ['encyclopedia/9-spinoff/9-11-dlya-detey', 'kids'],
  ['encyclopedia/9-spinoff/9-01-velikie-lyudi', 'pioneers'],
  ['encyclopedia/9-spinoff/9-02-kak-ponyat-chto-pora-menyat-rabotu', 'career-change'],
  ['encyclopedia/9-spinoff/9-03-igrovaya-industriya', 'game-industry'],
  ['encyclopedia/9-spinoff/9-04-razrabotka-igr', 'game-dev'],
  ['encyclopedia/9-spinoff/9-05-blokcheyn-kripta-i-nft', 'blockchain'],
  ['encyclopedia/9-spinoff/9-06-otraslevoe-po', 'industry-soft'],
  ['encyclopedia/9-spinoff/9-08-kompyuternaya-grafika', 'comp-graphics'],
  ['encyclopedia/9-spinoff/9-09-media-kontent', 'media'],
  ['encyclopedia/9-spinoff/9-10-internet-kultura', 'net-culture'],

  // —— 1. Основы ——
  ['encyclopedia/1-basics/1-01-davayte-poznakomimsya', 'welcome'],
  ['encyclopedia/1-basics/1-02-vvedenie', 'intro'],
  ['encyclopedia/1-basics/1-03-dorozhnaya-karta-izucheniya', 'roadmap'],
  ['encyclopedia/1-basics/1-04-kak-vidyat-it-obychnye-lyudi', 'people'],
  ['encyclopedia/1-basics/1-05-preduprezhdenie', 'warning'],
  ['encyclopedia/1-basics/1-06-sleng', 'slang'],
  ['encyclopedia/1-basics/1-07-nemnogo-o-proshlom', 'history'],
  ['encyclopedia/1-basics/1-08-kak-rabotaet-kompyuter', 'computer'],
  ['encyclopedia/1-basics/1-09-dannye-i-informatsiya', 'data'],
  ['encyclopedia/1-basics/1-10-bazovye-operatsii-s-dannymi', 'data'],
  ['encyclopedia/1-basics/1-15-tekst', 'markdown'],
  ['encyclopedia/1-basics/1-16-grafika', 'graphics'],
  ['encyclopedia/1-basics/1-17-audio-i-video', 'audiovideo'],
  ['encyclopedia/1-basics/1-18-kompyuternye-igry', 'games'],
  ['encyclopedia/1-basics/1-19-programma', 'program'],
  ['encyclopedia/1-basics/1-20-ispolnyaemye-fayly-i-arhivy', 'files'],
  ['encyclopedia/1-basics/1-21-poisk-informatsii', 'search'],
  ['encyclopedia/1-basics/1-22-kommunikatsiya-i-obschenie', 'communication'],
  ['encyclopedia/1-basics/1-23-frontend-i-bekend', 'web-stack'],
  ['encyclopedia/1-basics/1-24-osnovnye-yazyki', 'languages-overview'],
  ['encyclopedia/1-basics/1-25-interfeys', 'interface'],
  ['encyclopedia/1-basics/1-26-karera-v-it-i-mify', 'career'],
  ['encyclopedia/1-basics/1-27-udalennaya-rabota', 'remote'],
  ['encyclopedia/1-basics/1-28-marketing-i-rasprostranenie', 'marketing'],
  ['encyclopedia/1-basics/1-29-gosudarstvo-i-biznes', 'gov-business'],
  ['encyclopedia/1-basics/1-30-angliyskiy-yazyk', 'english'],
  ['encyclopedia/1-basics/1-035-bazovaya-informatika', 'informatics'],
].sort((a, b) => b[0].length - a[0].length);

const OS_SECTION_PREFIX = 'encyclopedia/2-system-network/2-01-operatsionnaya-sistema';

const MOBILE_SECTION_PREFIX = 'encyclopedia/4-code-dev/4-12-mobilnye-prilozheniya';

const SQL_SECTION_PREFIX = 'encyclopedia/3-data-markup/3-07-sql';

const NOSQL_SECTION_PREFIX = 'encyclopedia/3-data-markup/3-06-nosql';

const RDBMS_ADMIN_PREFIX = 'encyclopedia/3-data-markup/3-08-upravlenie-rsubd';

const NETWORK_SECTION_PREFIX = 'encyclopedia/2-system-network/2-03-set-i-internet';

const AUDIOVIDEO_SECTION_PREFIX = 'encyclopedia/1-basics/1-17-audio-i-video';

/**
 * Нумерация глав в разделе ОС: 4x — Windows, 5x — Linux, 6 — macOS, 7x — iOS, 8x — Android.
 * @param {string} fileId
 * @returns {string}
 */
function getOsSectionTechId(fileId) {
  if (fileId === '411') {
    return 'filesystem';
  }
  if (fileId === '4' || fileId.startsWith('41')) {
    return 'microsoft';
  }
  if (fileId === '5' || fileId.startsWith('51') || fileId === '211') {
    return 'linux';
  }
  if (fileId === '6') {
    return 'macos';
  }
  if (fileId === '7' || fileId.startsWith('71')) {
    return 'apple';
  }
  if (fileId === '8' || fileId.startsWith('81')) {
    return 'android';
  }
  return 'os';
}

/**
 * @param {string} fileId
 * @returns {string}
 */
function getMobileSectionTechId(fileId) {
  if (fileId === '111' || fileId === '1121' || fileId === '1141') {
    return 'android';
  }
  if (fileId === '1137') {
    return 'apple';
  }
  return 'mobile';
}

/** @param {string} fileId */
function getSqlSectionTechId(fileId) {
  if (fileId === '887') {
    return 'sqlite';
  }
  if (
    fileId === '888' ||
    fileId === '891' ||
    fileId === '66' ||
    fileId === '106' ||
    fileId === '110'
  ) {
    return 'postgresql';
  }
  if (fileId === '889') {
    return 'mysql';
  }
  if (fileId === '890') {
    return 'sqlserver';
  }
  return 'sql';
}

/** @param {string} fileId */
function getNosqlSectionTechId(fileId) {
  if (fileId === '4' || fileId.startsWith('41')) {
    return 'mongodb';
  }
  if (fileId === '5' || fileId.startsWith('51')) {
    return 'redis';
  }
  if (fileId === '6' || fileId.startsWith('61')) {
    return 'cassandra';
  }
  return 'nosql';
}

/** @param {string} fileId */
function getRdbmsAdminTechId(fileId) {
  if (fileId === '2') {
    return 'postgresql';
  }
  if (fileId === '211') {
    return 'mysql';
  }
  if (fileId === '212') {
    return 'sqlserver';
  }
  if (fileId === '213') {
    return 'oracle';
  }
  return 'database';
}

/** @param {string} fileId */
function getNetworkSectionTechId(fileId) {
  if (fileId === '71') {
    return 'wireless';
  }
  return 'network';
}

/** @param {string} fileId */
function getAudiovideoSectionTechId(fileId) {
  if (fileId === '2' || fileId === '4') {
    return 'audio';
  }
  if (fileId === '3' || fileId === '5' || fileId === '6' || fileId === '61') {
    return 'video';
  }
  return 'audiovideo';
}

/** Точечные переопределения. @type {Record<string, string>} */
const DOC_TECH_OVERRIDES = {
  'encyclopedia/8-infra-security/8-06-konteynerizatsiya-i-orkestratsiya/111': 'docker',
  'encyclopedia/8-infra-security/8-06-konteynerizatsiya-i-orkestratsiya/112': 'docker',
  'encyclopedia/8-infra-security/8-06-konteynerizatsiya-i-orkestratsiya/113': 'docker',
  'encyclopedia/8-infra-security/8-06-konteynerizatsiya-i-orkestratsiya/114': 'docker',
  'encyclopedia/8-infra-security/8-06-konteynerizatsiya-i-orkestratsiya/115': 'docker',
  'encyclopedia/8-infra-security/8-06-konteynerizatsiya-i-orkestratsiya/116': 'docker',
  'encyclopedia/8-infra-security/8-06-konteynerizatsiya-i-orkestratsiya/117': 'docker',
  'encyclopedia/8-infra-security/8-06-konteynerizatsiya-i-orkestratsiya/118': 'docker',
  'encyclopedia/8-infra-security/8-06-konteynerizatsiya-i-orkestratsiya/1': 'docker',
  'encyclopedia/8-infra-security/8-06-konteynerizatsiya-i-orkestratsiya/2': 'docker',
  'encyclopedia/8-infra-security/8-06-konteynerizatsiya-i-orkestratsiya/211': 'kubernetes',
  'encyclopedia/8-infra-security/8-06-konteynerizatsiya-i-orkestratsiya/intro': 'docker',
  'encyclopedia/4-code-dev/4-13-osnovy-raboty-s-git/intro': 'git',
  'encyclopedia/4-code-dev/4-13-osnovy-raboty-s-git/2': 'git',
  'encyclopedia/4-code-dev/4-13-osnovy-raboty-s-git/3': 'git',
  'encyclopedia/3-data-markup/3-04-konfiguratsii-i-dannye/2': 'xml',
  'encyclopedia/3-data-markup/3-04-konfiguratsii-i-dannye/3': 'json',
  'encyclopedia/3-data-markup/3-04-konfiguratsii-i-dannye/4': 'yaml',
  'encyclopedia/8-infra-security/8-01-oblachnye-tehnologii/1': 'cloud',
  'encyclopedia/8-infra-security/8-01-oblachnye-tehnologii/11': 'cloud',
  'encyclopedia/8-infra-security/8-01-oblachnye-tehnologii/12': 'cloud',
  'encyclopedia/2-system-network/2-09-osnovy-integratsionnogo-vzaimodeystviya/129': 'redis',
  'encyclopedia/2-system-network/2-06-sistemnoe-administrirovanie/64': 'microsoft',
  'encyclopedia/2-system-network/2-06-sistemnoe-administrirovanie/95': 'microsoft',
  'encyclopedia/2-system-network/2-06-sistemnoe-administrirovanie/97': 'microsoft',
  'encyclopedia/2-system-network/2-06-sistemnoe-administrirovanie/62': 'microsoft',
  'encyclopedia/2-system-network/2-05-terminal/102': 'microsoft',
  'encyclopedia/2-system-network/2-05-terminal/112': 'microsoft',
  'encyclopedia/2-system-network/2-06-sistemnoe-administrirovanie/63': 'microsoft',
  'encyclopedia/2-system-network/2-06-sistemnoe-administrirovanie/411': 'microsoft',
  '/encyclopedia/1-basics/1-035-bazovaya-informatika/310': 'microsoft',
  '/encyclopedia/1-basics/1-035-bazovaya-informatika/203': 'microsoft',
  '/encyclopedia/1-basics/1-035-bazovaya-informatika/207': 'microsoft',
  '/encyclopedia/1-basics/1-11-fayly-katalogi-i-puti/221': 'microsoft',
  '/encyclopedia/2-system-network/2-06-sistemnoe-administrirovanie/11': 'microsoft',
  '/encyclopedia/1-basics/1-035-bazovaya-informatika/406': 'microsoft',
  'encyclopedia/1-basics/1-15-tekst/211': 'microsoft',
  'encyclopedia/1-basics/1-15-tekst/212': 'microsoft',
  'encyclopedia/1-basics/1-15-tekst/41': 'microsoft',
  'encyclopedia/4-code-dev/4-11-desktopnye-prilozheniya/115': 'microsoft',
  'encyclopedia/4-code-dev/4-11-desktopnye-prilozheniya/116': 'microsoft',
  'encyclopedia/4-code-dev/4-11-desktopnye-prilozheniya/117': 'microsoft',
  'encyclopedia/7-project/7-02-komanda-i-upravlenie/16': 'microsoft',
  'encyclopedia/7-project/7-08-tehnicheskoe-pismo/1007': 'microsoft',
  'encyclopedia/8-infra-security/8-04-devops-ci-cd/3124': 'azure',
  'encyclopedia/2-system-network/2-03-set-i-internet/71': 'wireless',
  'encyclopedia/2-system-network/2-08-osnovy-informatsionnoy-bezopasnosti/113': 'wireless',
  'encyclopedia/2-system-network/2-10-zhelezo/119': 'wireless',
  'encyclopedia/8-infra-security/8-10-testirovanie-na-proniknovenie/3': 'wireless',
  'encyclopedia/2-system-network/2-08-osnovy-informatsionnoy-bezopasnosti/116': 'encryption',
  'encyclopedia/2-system-network/2-08-osnovy-informatsionnoy-bezopasnosti/111': 'biometrics',
  'encyclopedia/8-infra-security/8-07-informatsionnaya-bezopasnost/115': 'encryption',
  'encyclopedia/8-infra-security/8-07-informatsionnaya-bezopasnost/116': 'biometrics',
  'encyclopedia/8-infra-security/8-07-informatsionnaya-bezopasnost/126': 'encryption',
  'encyclopedia/8-infra-security/8-07-informatsionnaya-bezopasnost/127': 'encryption',
  'encyclopedia/8-infra-security/8-07-informatsionnaya-bezopasnost/1151': 'encryption',
  'encyclopedia/8-infra-security/8-07-informatsionnaya-bezopasnost/118': 'encryption',
  'encyclopedia/2-system-network/2-04-kak-rabotayut-sayty-i-veb-sayty/128': 'encryption',
  'encyclopedia/1-basics/1-22-kommunikatsiya-i-obschenie/3': 'email',
  'encyclopedia/7-project/7-02-komanda-i-upravlenie/16': 'planning',
  'encyclopedia/7-project/7-12-konstruirovanie-po/4': 'planning',
  'encyclopedia/2-system-network/2-06-sistemnoe-administrirovanie/8': 'planning',
  'encyclopedia/1-basics/1-08-kak-rabotaet-kompyuter/9111': 'battery',
  '/encyclopedia/2-system-network/2-01-operatsionnaya-sistema/intro': 'filesystem',
  'encyclopedia/9-spinoff/9-11-dlya-detey/1-computer/14': 'filesystem',
  '/encyclopedia/1-basics/1-11-fayly-katalogi-i-puti/502': 'filesystem',
  'encyclopedia/9-spinoff/9-09-media-kontent/1': 'video',
  'encyclopedia/9-spinoff/9-09-media-kontent/11': 'audio',
};

/** @param {string} fileId */
function isMetaPage(fileId) {
  return META_PAGE_IDS.includes(fileId);
}

/** Логотип на всех главах раздела (кроме 998/999), если префикс в реестре. */
function usesFullChapterCoverage(matchedPrefix) {
  return matchedPrefix.startsWith('encyclopedia/');
}

/**
 * @param {string} docId Docusaurus metadata.id
 * @returns {string | null}
 */
export function getTechIdForDoc(docId) {
  if (!docId) return null;

  const normalized = docId.replace(/\\/g, '/').replace(/^\/+/, '');

  if (DOC_TECH_OVERRIDES[normalized]) {
    return DOC_TECH_OVERRIDES[normalized];
  }

  const slash = normalized.lastIndexOf('/');
  if (slash < 0) return null;

  const sectionPath = normalized.slice(0, slash);
  const fileId = normalized.slice(slash + 1);
  const isIntro = fileId === 'intro';

  for (const [prefix, techId] of SECTION_TECH_PREFIXES) {
    if (sectionPath === prefix || sectionPath.startsWith(`${prefix}/`)) {
      if (isIntro && techId === 'legacy-hub' && sectionPath !== prefix) {
        continue;
      }

      if (prefix === OS_SECTION_PREFIX) {
        if (isIntro) {
          return 'os';
        }
        if (isMetaPage(fileId)) {
          return null;
        }
        return getOsSectionTechId(fileId);
      }

      if (prefix === MOBILE_SECTION_PREFIX) {
        if (isIntro || isMetaPage(fileId)) {
          return isIntro ? techId : null;
        }
        return getMobileSectionTechId(fileId);
      }

      if (prefix === SQL_SECTION_PREFIX) {
        if (isIntro) {
          return 'sql';
        }
        if (isMetaPage(fileId)) {
          return null;
        }
        return getSqlSectionTechId(fileId);
      }

      if (prefix === NOSQL_SECTION_PREFIX) {
        if (isIntro) {
          return 'nosql';
        }
        if (isMetaPage(fileId)) {
          return null;
        }
        return getNosqlSectionTechId(fileId);
      }

      if (prefix === RDBMS_ADMIN_PREFIX) {
        if (isIntro) {
          return 'database';
        }
        if (isMetaPage(fileId)) {
          return null;
        }
        return getRdbmsAdminTechId(fileId);
      }

      if (prefix === NETWORK_SECTION_PREFIX) {
        if (isIntro) {
          return 'network';
        }
        if (isMetaPage(fileId)) {
          return null;
        }
        return getNetworkSectionTechId(fileId);
      }

      if (prefix === AUDIOVIDEO_SECTION_PREFIX) {
        if (isIntro || isMetaPage(fileId)) {
          return isIntro ? 'audiovideo' : null;
        }
        return getAudiovideoSectionTechId(fileId);
      }

      if (isIntro) {
        return techId;
      }

      if (usesFullChapterCoverage(prefix)) {
        return isMetaPage(fileId) ? null : techId;
      }

      if (THEORY_ARTICLE_IDS.includes(fileId)) {
        return techId;
      }

      return null;
    }
  }

  return null;
}

/**
 * @param {string} hrefOrDocId
 */
function normalizeDocPath(hrefOrDocId) {
  if (!hrefOrDocId) return '';
  const raw = String(hrefOrDocId).trim();
  if (!raw) return '';

  try {
    const url = new URL(raw, 'https://it-universe.local');
    return url.pathname.replace(/^\/+/, '').replace(/\/$/, '');
  } catch {
    return raw.replace(/\\/g, '/').replace(/^\/+/, '').replace(/\/$/, '');
  }
}

/**
 * @param {string} hrefOrDocId
 * @returns {string | null}
 */
export function getTechIdForPath(hrefOrDocId) {
  const normalized = normalizeDocPath(hrefOrDocId);
  if (!normalized) return null;

  const fromDoc = getTechIdForDoc(normalized);
  if (fromDoc) return fromDoc;

  for (const [prefix, techId] of SECTION_TECH_PREFIXES) {
    if (normalized === prefix) {
      return techId;
    }
  }

  return null;
}

/**
 * Mono-иконка у корневой категории подраздела в сайдбаре (encyclopedia/X/…).
 * @param {string} hrefOrDocId
 * @returns {string | null}
 */
export function getTechIdForSidebarCategory(hrefOrDocId) {
  const normalized = normalizeDocPath(hrefOrDocId);
  if (!normalized) return null;

  const techId = getTechIdForPath(normalized);
  if (!techId) return null;

  const parts = normalized.split('/');
  if (parts.length === 3 && parts[0] === 'encyclopedia') {
    return techId;
  }

  return null;
}
