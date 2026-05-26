/**
 * Перекрёстные ссылки в "Основах": только блок related в intro.md (без [[...]] в тексте).
 * Запуск: node scripts/enrich-basics-crosslinks.mjs
 */
import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import matter from 'gray-matter';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const basicsDir = path.join(__dirname, '..', 'docs', 'encyclopedia', '1-basics');

/** intro.md → блок related (показывается компонентом ArticleRelated) */
const INTRO_RELATED = {
  '1-01-davayte-poznakomimsya': [
    {title: 'Обзор структуры Вселенной IT', doc: 'encyclopedia/1-basics/1-02-vvedenie/intro'},
    {title: 'Дорожная карта изучения', doc: 'encyclopedia/1-basics/1-03-dorozhnaya-karta-izucheniya/intro'},
  ],
  '1-02-vvedenie': [
    {title: 'Давайте познакомимся', doc: 'encyclopedia/1-basics/1-01-davayte-poznakomimsya/intro'},
    {title: 'Как работает компьютер', doc: 'encyclopedia/1-basics/1-08-kak-rabotaet-kompyuter/intro'},
    {title: 'Данные и информация', doc: 'encyclopedia/1-basics/1-09-dannye-i-informatsiya/intro'},
  ],
  '1-03-dorozhnaya-karta-izucheniya': [
    {title: 'Обзор структуры', doc: 'encyclopedia/1-basics/1-02-vvedenie/intro'},
    {title: 'Советы для новичка', doc: 'encyclopedia/1-basics/1-12-sovety-dlya-novichka/intro'},
  ],
  '1-04-kak-vidyat-it-obychnye-lyudi': [
    {title: 'Предупреждение', doc: 'encyclopedia/1-basics/1-05-preduprezhdenie/intro'},
    {title: 'Сленг', doc: 'encyclopedia/1-basics/1-06-sleng/intro'},
  ],
  '1-05-preduprezhdenie': [
    {title: 'Как видят IT обычные люди', doc: 'encyclopedia/1-basics/1-04-kak-vidyat-it-obychnye-lyudi/intro'},
    {title: 'Карьера в IT и мифы', doc: 'encyclopedia/1-basics/1-26-karera-v-it-i-mify/intro'},
  ],
  '1-06-sleng': [
    {title: 'Глоссарий', href: '/glossary/intro'},
    {title: 'Немного о прошлом', doc: 'encyclopedia/1-basics/1-07-nemnogo-o-proshlom/intro'},
  ],
  '1-07-nemnogo-o-proshlom': [
    {title: 'Как работает компьютер', doc: 'encyclopedia/1-basics/1-08-kak-rabotaet-kompyuter/intro'},
    {title: 'Программа', doc: 'encyclopedia/1-basics/1-19-programma/intro'},
  ],
  '1-08-kak-rabotaet-kompyuter': [
    {title: 'Процессор', doc: 'encyclopedia/1-basics/1-08-kak-rabotaet-kompyuter/2'},
    {title: 'Данные и информация', doc: 'encyclopedia/1-basics/1-09-dannye-i-informatsiya/intro'},
    {title: 'Операционная система', doc: 'encyclopedia/2-system-network/2-01-operatsionnaya-sistema/intro'},
    {title: 'Процессор (глоссарий)', href: '/glossary/П#процессор'},
  ],
  '1-09-dannye-i-informatsiya': [
    {title: 'Данные', href: '/glossary/Д#данные'},
    {title: 'Базовые операции с данными', doc: 'encyclopedia/1-basics/1-10-bazovye-operatsii-s-dannymi/intro'},
    {title: 'Основы баз данных', doc: 'encyclopedia/3-data-markup/3-05-osnovy-baz-dannyh/intro'},
  ],
  '1-10-bazovye-operatsii-s-dannymi': [
    {title: 'Данные и информация', doc: 'encyclopedia/1-basics/1-09-dannye-i-informatsiya/intro'},
    {title: 'Структуры данных', doc: 'encyclopedia/3-data-markup/3-02-struktury-dannyh/intro'},
  ],
  '1-11-soft-ryadovogo-polzovatelya': [
    {title: 'Софт продвинутого пользователя', doc: 'encyclopedia/1-basics/1-13-soft-prodvinutogo-polzovatelya/intro'},
    {title: 'Интерфейс', doc: 'encyclopedia/1-basics/1-25-interfeys/intro'},
  ],
  '1-12-sovety-dlya-novichka': [
    {title: 'Дорожная карта', doc: 'encyclopedia/1-basics/1-03-dorozhnaya-karta-izucheniya/intro'},
    {title: 'Советы для продвинутого', doc: 'encyclopedia/1-basics/1-14-sovety-dlya-prodvinutogo/intro'},
  ],
  '1-13-soft-prodvinutogo-polzovatelya': [
    {title: 'Софт рядового пользователя', doc: 'encyclopedia/1-basics/1-11-soft-ryadovogo-polzovatelya/intro'},
    {title: 'Терминал', doc: 'encyclopedia/2-system-network/2-05-terminal/intro'},
  ],
  '1-14-sovety-dlya-prodvinutogo': [
    {title: 'Советы для новичка', doc: 'encyclopedia/1-basics/1-12-sovety-dlya-novichka/intro'},
    {title: 'Код и разработка', doc: 'encyclopedia/4-code-dev/intro'},
  ],
  '1-15-tekst': [
    {title: 'Графика', doc: 'encyclopedia/1-basics/1-16-grafika/intro'},
    {title: 'HTML', doc: 'encyclopedia/3-data-markup/3-09-html/intro'},
  ],
  '1-16-grafika': [
    {title: 'Текст', doc: 'encyclopedia/1-basics/1-15-tekst/intro'},
    {title: 'Аудио и видео', doc: 'encyclopedia/1-basics/1-17-audio-i-video/intro'},
  ],
  '1-17-audio-i-video': [
    {title: 'Графика', doc: 'encyclopedia/1-basics/1-16-grafika/intro'},
    {title: 'Компьютерные игры', doc: 'encyclopedia/1-basics/1-18-kompyuternye-igry/intro'},
  ],
  '1-18-kompyuternye-igry': [
    {title: 'Игровая индустрия', doc: 'encyclopedia/9-spinoff/9-03-igrovaya-industriya/intro'},
    {title: 'Графика', doc: 'encyclopedia/1-basics/1-16-grafika/intro'},
  ],
  '1-19-programma': [
    {title: 'Компиляторы и интерпретаторы', doc: 'encyclopedia/1-basics/1-19-programma/2'},
    {title: 'Код и разработка', doc: 'encyclopedia/4-code-dev/intro'},
    {title: 'Алгоритм', href: '/glossary/А#алгоритм'},
  ],
  '1-20-ispolnyaemye-fayly-i-arhivy': [
    {title: 'Программа', doc: 'encyclopedia/1-basics/1-19-programma/intro'},
    {title: 'Исполняемый файл', href: '/glossary/И#исполняемый-файл'},
  ],
  '1-21-poisk-informatsii': [
    {title: 'Данные и информация', doc: 'encyclopedia/1-basics/1-09-dannye-i-informatsiya/intro'},
    {title: 'Коммуникация', doc: 'encyclopedia/1-basics/1-22-kommunikatsiya-i-obschenie/intro'},
  ],
  '1-22-kommunikatsiya-i-obschenie': [
    {title: 'Поиск информации', doc: 'encyclopedia/1-basics/1-21-poisk-informatsii/intro'},
    {title: 'Сеть и интернет', doc: 'encyclopedia/2-system-network/2-03-set-i-internet/intro'},
  ],
  '1-23-frontend-i-bekend': [
    {title: 'Основные языки', doc: 'encyclopedia/1-basics/1-24-osnovnye-yazyki/intro'},
    {title: 'JavaScript', doc: 'encyclopedia/5-languages/5-01-javascript/intro'},
    {title: 'Как работают сайты', doc: 'encyclopedia/2-system-network/2-04-kak-rabotayut-sayty-i-veb-sayty/intro'},
  ],
  '1-24-osnovnye-yazyki': [
    {title: 'Фронтенд и бэкенд', doc: 'encyclopedia/1-basics/1-23-frontend-i-bekend/intro'},
    {title: 'Раздел "Языки"', doc: 'encyclopedia/5-languages/intro'},
  ],
  '1-25-interfeys': [
    {title: 'Софт рядового пользователя', doc: 'encyclopedia/1-basics/1-11-soft-ryadovogo-polzovatelya/intro'},
    {title: 'UX', href: '/glossary/U#ux'},
  ],
  '1-26-karera-v-it-i-mify': [
    {title: 'Дорожная карта', doc: 'encyclopedia/1-basics/1-03-dorozhnaya-karta-izucheniya/intro'},
    {title: 'Удалённая работа', doc: 'encyclopedia/1-basics/1-27-udalennaya-rabota/intro'},
  ],
  '1-27-udalennaya-rabota': [
    {title: 'Карьера в IT', doc: 'encyclopedia/1-basics/1-26-karera-v-it-i-mify/intro'},
    {title: 'Коммуникация', doc: 'encyclopedia/1-basics/1-22-kommunikatsiya-i-obschenie/intro'},
  ],
  '1-28-marketing-i-rasprostranenie': [
    {title: 'Государство и бизнес', doc: 'encyclopedia/1-basics/1-29-gosudarstvo-i-biznes/intro'},
  ],
  '1-29-gosudarstvo-i-biznes': [
    {title: 'Маркетинг', doc: 'encyclopedia/1-basics/1-28-marketing-i-rasprostranenie/intro'},
  ],
  '1-30-angliyskiy-yazyk': [
    {title: 'Глоссарий', href: '/glossary/intro'},
    {title: 'Основные языки', doc: 'encyclopedia/1-basics/1-24-osnovnye-yazyki/intro'},
  ],
};

function patchIntroRelated() {
  let count = 0;
  for (const [folder, related] of Object.entries(INTRO_RELATED)) {
    const introPath = path.join(basicsDir, folder, 'intro.md');
    if (!fs.existsSync(introPath)) {
      continue;
    }
    const raw = fs.readFileSync(introPath, 'utf8');
    const parsed = matter(raw);
    if (Array.isArray(parsed.data.related) && parsed.data.related.length > 0) {
      continue;
    }
    parsed.data.related = related;
    const body = parsed.content.startsWith('\n') ? parsed.content : `\n${parsed.content}`;
    fs.writeFileSync(introPath, matter.stringify(body, parsed.data), 'utf8');
    count += 1;
  }
  return count;
}

const intros = patchIntroRelated();
console.log(`basics crosslinks: intros=${intros} (только related в intro, без [[ в тексте)`);
