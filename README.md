# Вселенная IT

**Открытая образовательная энциклопедия по информационным технологиям**

### Варианты использования

1. Готовый сайт проекта — [spirzen.ru](https://spirzen.ru/)
2. Примеры кода — [code.spirzen.ru](https://code.spirzen.ru/) (~2312 листингов)
3. Интерактивные демо — [play.spirzen.ru](https://play.spirzen.ru/) (~500 симуляторов)
4. Мобильное приложение для Android — APK на [главной](https://spirzen.ru/) или [GitHub Releases](https://github.com/Spirzen/it-knowledge-base/releases/download/Mobile/it-universe.apk)
5. Локальная (оффлайн) версия — `git clone`, `npm install`, `npm start`; удобнее через [it-management](../it-management/) (панель на `:8787`)

Для офлайн-сборки желательно:

- **ОЗУ** — от 4 ГБ (комфортно 8 ГБ и больше);
- **CPU** — 2+ ядра;
- **Диск** — от 20 ГБ под репозиторий, `node_modules` и артефакты сборки;
- **ОС** — Windows 10/11, Linux или macOS;
- **Node.js** ≥ 20 и npm ≥ 9.

### О проекте

> Статический сайт-база знаний на [Docusaurus 3.10](https://docusaurus.io/).  
> Цель — систематизировать знания по IT в единую, непротиворечивую и проверяемую модель для обучения и профессионального справочного использования.

Материалы ориентированы на профессионалов, преподавателей, студентов и новичков. Архитектура энциклопедии — дорожная карта и разделы с плавным погружением в темы.

---

## Экосистема (распределённая архитектура)

Платформа — **не один репозиторий**, а три публичных домена + локальная панель и мобильный клиент. Связь между сервисами — **iframe + postMessage** (без общего backend).

| Сервис | Репозиторий | Домен | Роль |
|--------|-------------|-------|------|
| Энциклопедия | `it-knowledge-base` (этот) | [spirzen.ru](https://spirzen.ru/) | ~2900 статей, 7 разделов меню, DocSearch |
| Примеры кода | [it-code-examples](https://github.com/spirzen/it-code-examples) | [code.spirzen.ru](https://code.spirzen.ru/) | ~2312 листингов (Astro + Shiki) |
| Интерактив | [it-play](https://github.com/spirzen/it-play) | [play.spirzen.ru](https://play.spirzen.ru/) | ~500 демо (Astro + React) |
| Панель разработчика | [it-management](../it-management/) | `127.0.0.1:8787` | Start/Build/Deploy всех трёх |
| Android | [itu-mobile-app](../itu-mobile-app/) | APK | WebView → spirzen.ru |

**Правило для новых материалов:** текст здесь; длинный код → `it-code-examples`; тяжёлый интерактив → `it-play`. В статьях — `ExternalCodeEmbed` и `ExternalPlayEmbed` (iframe, lazy load, click-to-load).

Полная документация по интеграции: [`info/ECOSYSTEM.md`](info/ECOSYSTEM.md).

---

## Технологическая основа

| Область | Стек |
|--------|------|
| **Сборка** | Docusaurus 3.10, React 19, SSG |
| **Контент** | Markdown / MDX в `docs/` (~3400 материалов, ~2900 в энциклопедии) |
| **Ускорение сборки** | `@docusaurus/faster`, `future.v4` |
| **Диаграммы** | `@docusaurus/theme-mermaid` |
| **Живой код** | `@docusaurus/theme-live-codeblock` (lab) |
| **Подсветка** | Prism (`prism-react-renderer`) |
| **Поиск** | DocSearch (Ctrl+K) → `doc-search-index.json` |
| **PDF статей** | `html2canvas` + `jspdf` (ленивая загрузка) |
| **Embed code/play** | iframe + postMessage (тема, высота, fullscreen) |
| **Деплой** | GitHub Actions → GitHub Pages (`spirzen.ru`) |

### Интеграция в статьях

| Компонент | Назначение |
|-----------|------------|
| `ExternalCodeEmbed.jsx` | iframe → code.spirzen.ru `/e/embed/` |
| `ExternalPlayEmbed.jsx` | iframe → play.spirzen.ru `/p/embed/` |
| `src/constants/codeExamples.js` | URL и trusted origins для code |
| `src/constants/playExamples.js` | URL и trusted origins для play |
| `src/constants/embedServiceUrl.js` | localhost:3000 → :4321/:4322 |
| `EmbedClickGate` + `useEmbedViewport` | click-to-load, очередь iframe |

### Кастомизация UI и навигация

| Компонент / модуль | Назначение |
|--------------------|------------|
| `src/theme/DocItem/Layout` | Прогресс главы, кликабельные теги, PDF, блок "См. также" |
| `src/components/DocSearch/*` | Клиентский полнотекстовый поиск |
| `src/components/ArticleSeeAlso.jsx` | Карточки соседних статей раздела |
| `src/components/ArticlePdfExport.jsx` | Экспорт статьи в PDF |
| `src/components/shared/DemoShell.jsx` | Оболочка лёгких inline-демо |
| `src/components/shared/lazyDemo.js` | Ленивая загрузка тяжёлых виджетов |
| `src/css/custom.css`, `demo-widgets.css` | Тема, теги, демо |

Служебный реестр демо: `info/demo-registry.md` (`npm run docs:demo-registry`).

---

## Структура проекта

```
it-knowledge-base/
├── docusaurus.config.js
├── sidebars.js
├── info/
│   ├── ECOSYSTEM.md             # экосистема, интеграция, postMessage
│   ├── ARCHITECTURE.md          # архитектура Docusaurus
│   ├── PROJECT-TECHNICAL.md     # технический справочник
│   └── demo-registry.md
├── scripts/
│   ├── build-doc-search-index.mjs
│   ├── build-wiki-link-index.mjs
│   └── generate-demo-registry.mjs
├── src/
│   ├── components/          # External*Embed, DocSearch, демо
│   ├── constants/           # codeExamples, playExamples, embedServiceUrl
│   ├── theme/DocItem/
│   └── pages/index.js
├── docs/                    # статьи (~2360+)
└── static/
    └── doc-search-index.json  # генерируется при сборке
```

---

## Архитектура знаний

1. **basics** — фундамент IT  
2. **system и сеть** — ОС, сеть, администрирование  
3. **data и разметка** — БД, SQL/NoSQL, HTML/CSS, форматы  
4. **Код и разработка** — алгоритмы, архитектура, Git, отладка  
5. **Языки** — 15+ языков программирования  
6. **Искусственный интеллект**  
7. **Проект** — ЖЦПО, аналитика, тестирование, документация  
8. **Инфраструктура и безопасность** — DevOps, облака, контейнеры, ИБ  
9. **Спин-офф** — смежные темы  

---

## Установка и разработка

### Локально (один репозиторий)

**Windows:** `start.bat` — проверит Node.js, `npm install`, dev на `:3000`.

```bash
npm install
npm start              # dev → localhost:3000
npm run build          # production (~8 ГБ heap)
npm run serve          # просмотр build/
```

Для embed code/play локально запустите также `it-code-examples` (`:4321`) и `it-play` (`:4322`), либо используйте [it-management](../it-management/).

### Команды контента

```bash
npm run docs:search-index    # doc-search-index.json
npm run docs:wiki-links      # wikiLinkIndex.json
npm run docs:redirects       # legacy URL
npm run docs:demo-registry   # info/demo-registry.md
npm run docs:collection-titles
```

---

## Деплой

- **GitHub Actions** — `.github/workflows/deploy.yml`, push `main` → `actions/deploy-pages@v4`
- Checkout `fetch-depth: 0` — даты коммитов в footer статей
- Альтернатива: панель [it-management](../it-management/) → Deploy

---

## Работа с контентом

### Embed в статье

```jsx
import ExternalCodeEmbed from '@site/src/components/ExternalCodeEmbed';
import ExternalPlayEmbed from '@site/src/components/ExternalPlayEmbed';

<ExternalCodeEmbed example="python/hello-world" title="Python — Hello World" />
<ExternalPlayEmbed example="code-basics/block-builder" title="Конструктор блоков" />
```

### Лёгкий inline-виджет (остаётся в бандле)

```md
import TestingBasicsDemo from '@site/src/components/TestingBasicsDemo.jsx';
<TestingBasicsDemo />
```

---

## Ограничения

- **Язык** — только русский (`locales: ['ru']`)
- **Локализация** — архитектура готова к i18n (`i18n-ready`), но новые языки сейчас не внедряются и не планируются, так как это нерационально при текущем объёме контента
- **Read-only** — без авторизации и пользовательских данных
- **Поиск** — клиентский DocSearch (Algolia не используется)
- **Проверка ссылок** — `onBrokenLinks: 'warn'`

---

## Документация для разработчиков

| Файл | Содержание |
|------|------------|
| [`info/ECOSYSTEM.md`](info/ECOSYSTEM.md) | Вся экосистема, postMessage, стек |
| [`info/ARCHITECTURE.md`](info/ARCHITECTURE.md) | Архитектура Docusaurus |
| [`info/PROJECT-TECHNICAL.md`](info/PROJECT-TECHNICAL.md) | Технический справочник |

---

## Лицензия

Контент: [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/).  
Код: **MIT**.

---

## Контакт

**Тагиров Тимур Владиславович** — [Об авторе](https://spirzen.ru/about/author).
