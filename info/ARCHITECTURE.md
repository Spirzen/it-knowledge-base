# Архитектура «Вселенная IT» (it-knowledge-base)

> Служебный документ репозитория (`info/`, **не** попадает в `npm run build`).  
> Язык подписей: русский; имена технологий, путей и API — как в коде.  
> Детальные таблицы и перечни файлов: [`PROJECT-TECHNICAL.md`](./PROJECT-TECHNICAL.md).  
> Дата описания: **2026-05-29**.

---

## Как читать этот документ

| № | Схема | Вопрос, на который отвечает |
|---|--------|------------------------------|
| 1 | [Контекст системы](#1-контекст-системы-c4-уровень-1) | Кто с кем взаимодействует снаружи репозитория? |
| 2 | [Карта репозитория](#2-карта-репозитория) | Из чего состоит проект на диске? |
| 3 | [Пайплайн сборки](#3-пайплайн-сборки) | Что запускается до и во время `docusaurus build`? |
| 4 | [Модель контента](#4-модель-контента) | Как устроены `docs/`, URL и sidebar? |
| 5 | [Конфигурация Docusaurus](#5-конфигурация-docusaurus) | Плагины, темы, webpack, redirects |
| 6 | [Runtime в браузере](#6-runtime-в-браузере) | Что грузится у читателя на клиенте? |
| 7 | [Рендер статьи](#7-рендер-одной-статьи-sequence) | Путь одной страницы от MDX до UI |
| 8 | [Слой демо](#8-слой-интерактивных-демо) | React-виджеты, chunks, движки |
| 9 | [Поиск и wiki-ссылки](#9-поиск-и-wiki-ссылки) | Индексы и remark-плагин |
| 10 | [Деплой](#10-деплой-и-хостинг) | CI → GitHub Pages → spirzen.ru |

**Draw.io (одна большая схема):** [`it-universe-architecture.drawio`](./it-universe-architecture.drawio) — открыть в [diagrams.net](https://app.diagrams.net/) или VS Code (расширение Draw.io). Пересборка: `node scripts/generate-architecture-drawio.mjs`.

**Mermaid:** проверка в [Mermaid Live](https://mermaid.live) или preview Markdown. Фрагменты можно вставлять в статьи (`markdown.mermaid: true` в `docusaurus.config.js`).

---

## 1. Контекст системы (C4, уровень 1)

Статический read-only сайт: **нет backend**, **нет БД**, **нет сессий пользователей**. Вся «логика» — на этапе сборки (Node.js) и в браузере (React).

```mermaid
%%{init: {'theme':'base','themeVariables':{'primaryColor':'#e3f2fd','primaryTextColor':'#0d47a1','primaryBorderColor':'#1565c0','lineColor':'#546e7a','secondaryColor':'#f5f5f5','tertiaryColor':'#eceff1'}}}%%

flowchart TD
  classDef human fill:#e8f5e9,stroke:#2e7d32,stroke-width:2px,color:#1b5e20
  classDef repo fill:#fff3e0,stroke:#ef6c00,stroke-width:2px,color:#e65100
  classDef ci fill:#e3f2fd,stroke:#1565c0,stroke-width:2px,color:#0d47a1
  classDef prod fill:#f3e5f5,stroke:#7b1fa2,stroke-width:2px,color:#4a148c
  classDef external fill:#ffebee,stroke:#c62828,stroke-width:2px,color:#b71c1c,stroke-dasharray:5 5

  subgraph people ["Люди"]
    direction TB
    Author["Автор / редактор - Markdown в git"]:::human
    Reader["Читатель - браузер"]:::human
  end

  subgraph dev ["Разработка"]
    direction TB
    Repo["([GitHub - spirzen/it-knowledge-base])"]:::repo
    Local["Локально - npm start / build"]:::repo
  end

  subgraph ci ["CI/CD"]
    direction TB
    GHA["GitHub Actions - deploy.yml"]:::ci
    GHPages["Ветка gh-pages - статический HTML"]:::ci
  end

  subgraph prod ["Продакшен"]
    direction TB
    CDN["GitHub Pages + CNAME - spirzen.ru"]:::prod
    Site["https://spirzen.ru"]:::prod
  end

  subgraph external ["Внешние сервисы"]
    direction TB
    GH["GitHub API / Releases"]:::external
    Yandex["Верификация - yandex_*.html"]:::external
  end

  Author -->|"push main"| Repo
  Local -->|"PR / push"| Repo
  Repo ==>|"trigger"| GHA
  GHA -->|"npm ci + build"| GHPages
  GHPages ==>|"deploy"| CDN
  CDN -->|"publish"| Site
  Reader -->|"HTTPS GET"| Site
  Site -.->|"ссылки"| GH
  Site -.->|"robots, метрики"| Yandex

  linkStyle 4,5 stroke:#7b1fa2,stroke-width:3px
  linkStyle 2 stroke:#1565c0,stroke-width:3px
```

**Ограничения продакшена:**

- Поиск **Algolia** в конфиге закомментирован → свой клиентский поиск по `doc-search-index.json`.
- `onBrokenLinks: 'warn'` — битые ссылки не останавливают сборку.
- Контент: CC BY-NC-SA 4.0; код сайта: MIT.

---

## 2. Карта репозитория

```mermaid
flowchart TB
  subgraph root [Корень репозитория]
    CFG[docusaurus.config.js]
    SB[sidebars.js]
    PKG[package.json]
  end

  subgraph content [Контент и публикация]
    Docs[docs/ - ~2360 статей MD/MDX]
    Static[static/ - favicon, img, downloads, CNAME]
  end

  subgraph app [Приложение Docusaurus]
    Src[src/ - theme, components, css, remark]
    Pages[src/pages/index.js - главная /]
  end

  subgraph generated [Генерируемые при сборке / скриптах]
    WikiIdx[src/data/wikiLinkIndex.json]
    SearchIdx[static/doc-search-index.json]
    LegacyRedir[src/data/docLegacyRedirects.json]
    BuildOut[build/ - артефакт SSG]
  end

  subgraph automation [Автоматизация]
    Scripts[scripts/*.mjs - индексы, редиректы, TOC]
    GHAwf[.github/workflows/deploy.yml]
  end

  subgraph meta [Служебно, вне сайта]
    Info[info/ - ARCHITECTURE, PROJECT-TECHNICAL]
    Cursor[.cursor/rules/ - правила для редакторов]
  end

  CFG --> Docs
  CFG --> Src
  CFG --> Static
  SB --> Docs
  Scripts --> WikiIdx
  Scripts --> SearchIdx
  Scripts --> LegacyRedir
  CFG --> BuildOut
  Docs --> BuildOut
  Src --> BuildOut
  Static --> BuildOut
  GHAwf --> BuildOut
```

---

## 3. Пайплайн сборки

Команды из `package.json`. **Перед** `docusaurus start` / `build` всегда идут препроцессоры контента.

```mermaid
%%{init: {'theme': 'base', 'themeVariables': { 'primaryColor': '#e3f2fd', 'primaryTextColor': '#0d47a1', 'primaryBorderColor': '#1565c0', 'lineColor': '#546e7a', 'secondaryColor': '#f5f5f5', 'tertiaryColor': '#eceff1'}}}%%

flowchart TB
  %% === СТИЛИ ===
  classDef io fill:#e8eaf6,stroke:#3f51b5,stroke-width:2px,color:#283593
  classDef script fill:#fff3e0,stroke:#f57c00,stroke-width:2px,color:#e65100
  classDef core fill:#f3e5f5,stroke:#7b1fa2,stroke-width:2px,color:#4a148c
  classDef file fill:#e8f5e9,stroke:#388e3c,stroke-width:2px,color:#1b5e20,stroke-dasharray: 5 5

  %% === УЗЛЫ ===
  Start(["🚀 npm start / npm run build"]):::io

  subgraph preStart ["⚙️ Pre-Scripts (Start + Build)"]
    direction TB
    W["📜 docs:wiki-links - (build-wiki-link-index.mjs)"]:::script
    S["🔍 docs:search-index - (build-doc-search-index.mjs)"]:::script
    R["🔀 docs:redirects - (build-doc-redirects.mjs)"]:::script
  end

  subgraph preBuildOnly ["🏗️ Pre-Scripts (Только Build)"]
    direction TB
    CT["🏷️ docs:collection-titles - (generate-collection-doc-titles.mjs)"]:::script
  end

  subgraph docusaurus ["💎 Docusaurus 3.10"]
    direction TB
    DC["@docusaurus/core"]:::core
    Faster["@docusaurus/faster - (v4 future, откл. на Win dev)"]:::core
    Preset["preset-classic - (docs routeBasePath /)"]:::core
    MDX["MDX + remark wikiLink"]:::core
    Webpack["Webpack / Rspack - (demo-chunk-splitting)"]:::core
  end

  Out(["📦 build/ или dev server"]):::io

  WikiOut[("📄 wikiLinkIndex.json")]:::file
  SearchOut[("📄 doc-search-index.json")]:::file
  RedirOut[("📄 docLegacyRedirects.json")]:::file

  %% === СВЯЗИ ===
  Start --> W
  W --> WikiOut
  W --> S
  S --> SearchOut
  S --> R
  R --> RedirOut
  
  R --> CT
  CT --> DC
  R --> DC
  
  DC --> Faster --> Preset --> MDX --> Webpack --> Out
```

### Скрипты `scripts/` (основные для архитектуры)

| npm script | Выход | Назначение |
|------------|--------|------------|
| `docs:wiki-links` | `src/data/wikiLinkIndex.json` | Индекс `[[термин]]` → URL |
| `docs:search-index` | `static/doc-search-index.json` | Клиентский полнотекстовый поиск |
| `docs:redirects` | `src/data/docLegacyRedirects.json` | Старые URL → новые |
| `docs:collection-titles` | `src/data/collectionDocTitles.json` | Подписи в подборках sidebar |
| `docs:demo-registry` | `info/demo-registry.md` | Реестр демо ↔ статьи |
| `docs:toc` | обновление `docs/toc.md` | Общее содержание |

Остальные `docs:fix-*`, `docs:enrich-*` — **офлайн-обслуживание** контента, не входят в обязательный путь `start`/`build`.

---

## 4. Модель контента

```mermaid
flowchart TB
  subgraph docsTree [docs/ — единый routeBasePath /]
    About[about/ - 5 статей]
    Enc[encyclopedia/ - 9 блоков, ~1923 статьи]
    Tools[tools/]
    Gloss[glossary/ - алфавитные файлы]
    Lab[lab/]
    Ctx[context/]
    Phil[philosophy/]
    Sect[section/ - лендинги /section/*]
    Toc[toc.md - Общее содержание]
  end

  subgraph nav [Навигация]
    Sidebars[sidebars.js - docsSidebar]
    CatJSON["_category_.json - ~195 файлов"]
    Coll[src/data/sidebarCollections.js - маршруты подборок]
  end

  subgraph url [URL]
    Route["/encyclopedia/.../N.md - → /encyclopedia/.../N"]
    SectionSlug["generated-index slug - → /section/basics и т.д."]
  end

  Enc --> CatJSON
  docsTree --> Sidebars
  Coll --> Home[Главная и /about/collections]
  Sidebars --> Route
  CatJSON --> SectionSlug
```

### Энциклопедия — девять блоков

| Каталог | Лендинг (пример) | Роль |
|---------|------------------|------|
| `1-basics/` | `/section/basics` | Цифровая грамотность, основы |
| `2-system-network/` | `/section/system-network` | ОС, сеть, железо |
| `3-data-markup/` | `/section/data-markup` | Данные, SQL, HTML, CSS |
| `4-code-dev/` | `/section/code-dev` | Разработка, OOP, паттерны |
| `5-languages/` | `/section/languages` | Языки программирования |
| `6-ai/` | `/section/ai` | ИИ и ML |
| `7-project/` | `/section/project` | Проектирование, менеджмент |
| `8-infra-security/` | `/section/infra-security` | DevOps, облака, ИБ |
| `9-spinoff/` | `/section/spinoff` | Смежные темы, карьера |

**Именование статей:** `intro.md`, числовые `1.md`, `41.md`, хабы `99.md` / `999.md` с виджетами. `numberPrefixParser: false` — префиксы в имени файла **не** скрываются в URL.

**Изображения:** рядом со статьёй в `docs/**`, не в `static/` (кроме глобальных ресурсов сайта).

---

## 5. Конфигурация Docusaurus

```mermaid
%%{init: {'theme': 'base', 'themeVariables': { 'primaryColor': '#e3f2fd', 'primaryTextColor': '#0d47a1', 'primaryBorderColor': '#1565c0', 'lineColor': '#546e7a', 'secondaryColor': '#f5f5f5', 'tertiaryColor': '#eceff1'}}}%%

flowchart TD
  %% === СТИЛИ ===
  classDef main fill:#e8eaf6,stroke:#3f51b5,stroke-width:2px,color:#283593
  classDef preset fill:#f3e5f5,stroke:#7b1fa2,stroke-width:2px,color:#4a148c
  classDef plugins fill:#fff3e0,stroke:#f57c00,stroke-width:2px,color:#e65100
  classDef themes fill:#e0f2f1,stroke:#00796b,stroke-width:2px,color:#004d40
  classDef cfg fill:#fce4ec,stroke:#c2185b,stroke-width:2px,color:#880e4f
  classDef client fill:#f5f5f5,stroke:#616161,stroke-width:2px,color:#212121

  subgraph config ["📁 docusaurus.config.js"]
    Preset["preset-classic"]:::main
    Plugins["plugins"]:::main
    Themes["themes"]:::main
    ThemeCfg["themeConfig"]:::main
    ClientMod["clientModules"]:::main
    MarkdownCfg["markdown.mermaid"]:::main
  end

  subgraph presetDetail ["⚙️ preset-classic → docs"]
    DocsPlugin["plugin-content-docs"]:::preset
    Remark["remarkPlugins: - wikiLink.js"]:::preset
    RouteBase["routeBasePath: /"]:::preset
    CustomCSS["src/css/custom.css"]:::preset
  end

  subgraph pluginsList ["🧩 plugins"]
    RedirPlugin["@docusaurus/plugin-client-redirects<br/>+ docLegacyRedirects.json<br/>+ ENCYCLOPEDIA_FOLDER_RENAMES"]:::plugins
    KonvaFallback["it-konva-canvas-fallback<br/>canvas: false"]:::plugins
    DesignInject["it-design-theme-inject<br/>data-design в head"]:::plugins
    DemoChunk["demo-chunk-splitting<br/>chunk demo-widgets"]:::plugins
  end

  subgraph themesList ["🎨 themes"]
    MermaidTheme["@docusaurus/theme-mermaid"]:::themes
    LiveCode["@docusaurus/theme-live-codeblock"]:::themes
  end

  subgraph themeCfgDetail ["⚙️ themeConfig"]
    Navbar["navbar + custom-docSearch"]:::cfg
    Footer["footer 4 колонки"]:::cfg
    Prism["Prism languages"]:::cfg
  end

  DesignInit["src/clientModules/<br/>itDesignThemeInit.js"]:::client

  %% === СВЯЗИ ===
  Preset --> presetDetail
  Plugins --> pluginsList
  Themes --> themesList
  ThemeCfg --> themeCfgDetail
  ClientMod --> DesignInit
```

### Swizzle темы (`src/theme/`)

| Компонент | Назначение |
|-----------|------------|
| `Root` | `DocSidebarFallbackProvider` |
| `DocItem/Layout` | PDF, SeeAlso, Related, прогресс главы, кликабельные HTML-теги |
| `DocSidebar/Desktop/Content` | Фильтр пунктов sidebar, ресайз ширины |
| `DocSidebarItem/Category` | Категории sidebar (стандартное поведение) |
| `Navbar/Layout`, `MobileSidebar` | Оболочка шапки |
| `NavbarItem/DocSearch` | Кнопка поиска + `DocSearchModal` |
| `DocRoot/Layout` | Обёртка страницы документации |

---

## 6. Runtime в браузере

После загрузки статического HTML/React-бандла.

```mermaid
%%{init: {'theme': 'base', 'themeVariables': { 'primaryColor': '#e3f2fd', 'primaryTextColor': '#0d47a1', 'primaryBorderColor': '#1565c0', 'lineColor': '#546e7a', 'secondaryColor': '#f5f5f5', 'tertiaryColor': '#eceff1'}}}%%

flowchart TD
  %% === СТИЛИ ===
  classDef browser fill:#e8eaf6,stroke:#3f51b5,stroke-width:2px,color:#283593
  classDef shell fill:#f3e5f5,stroke:#7b1fa2,stroke-width:2px,color:#4a148c
  classDef pageTypes fill:#e8f5e9,stroke:#2e7d32,stroke-width:2px,color:#1b5e20
  classDef docChrome fill:#fff3e0,stroke:#f57c00,stroke-width:2px,color:#e65100
  classDef clientData fill:#e0f7fa,stroke:#00838f,stroke-width:2px,color:#004d40,stroke-dasharray: 5 5

  %% === УЗЛЫ ===
  Browser["🌐 Браузер читателя"]:::browser

  subgraph shell ["🖼️ Оболочка сайта"]
    direction TD
    RootTheme["theme/Root"]:::shell
    Navbar["Navbar + DocSearch Ctrl+K"]:::shell
    Sidebar["DocSidebar + фильтр"]:::shell
    Footer["Footer"]:::shell
    Design["data-design тема&#10;localStorage: it-universe-design"]:::shell
  end

  subgraph pageTypes ["📄 Типы страниц"]
    direction TD
    Home["src/pages/index.js&#10;hero, разделы, APK"]:::pageTypes
    DocPage["Любая статья docs/"]:::pageTypes
  end

  subgraph docChrome ["⚙️ Обвязка статьи swizzle"]
    direction TD
    Breadcrumbs["DocBreadcrumbs"]:::docChrome
    PDF["ArticlePdfExport&#10;html2canvas + jspdf lazy"]:::docChrome
    TOC["TOC desktop/mobile"]:::docChrome
    Progress["ChapterProgress"]:::docChrome
    SeeAlso["ArticleSeeAlso"]:::docChrome
    Related["ArticleRelated"]:::docChrome
    Paginator["DocItemPaginator"]:::docChrome
  end

  subgraph clientData ["📦 Данные с сервера статики"]
    direction TB
    SearchJSON["doc-search-index.json"]:::clientData
    StaticFiles["static/img, downloads, …"]:::clientData
  end

  %% === СВЯЗИ ===
  Browser --> shell
  shell --> pageTypes
  DocPage --> docChrome
  Navbar --> SearchJSON
  Home --> StaticFiles
```

---

## 7. Рендер одной статьи (sequence)

```mermaid
sequenceDiagram
  participant File as docs/*.md(x)
  participant Pre as Препроцессоры npm
  participant DC as Docusaurus MDX
  participant Wiki as remark wikiLink
  participant Layout as DocItem/Layout
  participant Content as DocItem/Content
  participant Demo as Демо-компоненты
  participant UI as ArticlePdfExport и др.

  Pre->>File: wikiLinkIndex, redirects готовы
  File->>DC: frontmatter + тело
  DC->>Wiki: [[термин]] → ссылки
  DC->>Layout: metadata, toc
  Layout->>UI: обвязка до/после контента
  Layout->>Content: MDX body
  opt import в статье
    File->>Demo: import @site/src/components/...
    Demo->>Content: интерактивный блок
  end
  Content->>Layout: HTML в article
  Layout->>Layout: SeeAlso, Related, Paginator
```

---

## 8. Слой интерактивных демо

**~350+** файлов `.jsx` / `.js` / `.tsx` в `src/components/` (включая `shared/*Engine.js`). В статьях подключаются выборочно через MDX `import`.

```mermaid
flowchart TB
  subgraph mdx [Статья MDX]
    Import["import X from '@site/src/components/...'"]
    Use["<X /> или lazyDemo"]
  end

  subgraph components [src/components/]
    Plays["*Play.jsx — UI тренажёры"]
    Demos["*Demo.jsx — визуализации"]
    Hubs["*Hub.jsx — оглавления разделов"]
    Shared[shared/ - движки, DemoShell, lazyDemo]
  end

  subgraph articleUI [UI статьи не-демо]
    Pdf[ArticlePdfExport]
    See[ArticleSeeAlso]
    Rel[ArticleRelated]
    Rand[RandomArticle, RandomQuestion…]
    Spirzen[SpirzenOnlineToolsPanel]
  end

  subgraph bundle [Webpack client]
    Main[main bundle]
    DemoChunk["chunk demo-widgets - minSize 20kb, priority 25"]
  end

  Import --> Plays
  Import --> Demos
  Import --> Hubs
  Plays --> Shared
  Demos --> Shared
  Use --> DemoChunk
  Layout[DocItem/Layout] --> articleUI
  DemoChunk -.->|не на странице без import| Main
```

### Рекомендуемый стек одного демо

```mermaid
flowchart TD
  MDX[MDX import] --> Lazy{lazyDemo?}
  Lazy -->|да| Chunk[отдельный async chunk]
  Lazy -->|нет| Direct[прямой import]
  Chunk --> BrowserOnly[withBrowserOnly]
  Direct --> BrowserOnly
  BrowserOnly --> Shell[DemoShell / DemoCard]
  Shell --> Engine[shared/*Engine.js - логика и данные]
```

Реестр привязок: `npm run docs:demo-registry` → [`info/demo-registry.md`](./demo-registry.md).

---

## 9. Поиск и wiki-ссылки

```mermaid
flowchart TD
  subgraph sources [Источники]
    AllDocs[Все docs/*.md]
    Gloss[docs/glossary]
    EncTitles[title статей encyclopedia]
    Curated[src/data/encyclopediaTermLinks.json]
  end

  subgraph buildWiki [npm run docs:wiki-links]
    WikiIdx[wikiLinkIndex.json]
  end

  subgraph buildSearch [npm run docs:search-index]
    SearchIdx[doc-search-index.json]
  end

  subgraph runtime [Runtime]
    Remark["src/remark/wikiLink.js - только opt-in [[...]]"]
    Engine[DocSearch/docSearchEngine.js]
    Modal[DocSearchModal]
    NavbarItem[theme NavbarItem/DocSearch]
  end

  Gloss --> buildWiki
  EncTitles --> buildWiki
  Curated --> buildWiki
  buildWiki --> WikiIdx
  WikiIdx --> Remark
  AllDocs --> buildSearch
  buildSearch --> SearchIdx
  SearchIdx --> Engine --> Modal --> NavbarItem
```

**Важно:** обычный текст статей **не** автолинкуется; только явный синтаксис `[[термин]]`, `[[термин|подпись]]`, `[[/path]]`. Подробности для авторов: [`info/wiki-links.md`](./wiki-links.md).

**Связанные темы:** frontmatter `related:` → `ArticleRelated` (отдельно от wiki и от «См. также»).

---

## 10. Деплой и хостинг

```mermaid
sequenceDiagram
  participant Dev as Разработчик
  participant GH as GitHub main
  participant Action as Actions deploy.yml
  participant Node as Node 20 npm ci
  participant Build as npm run build
  participant Pages as gh-pages branch
  participant DNS as spirzen.ru CNAME
  participant User as Читатель

  Dev->>GH: git push main
  GH->>Action: on push branches main
  Action->>Node: checkout fetch-depth 0
  Node->>Build: очистка .docusaurus build
  Build->>Pages: peaceiris/actions-gh-pages
  Pages->>DNS: GitHub Pages
  User->>DNS: HTTPS
```

| Артефакт | Путь / роль |
|----------|-------------|
| `static/CNAME` | Домен `spirzen.ru` |
| `static/.nojekyll` | Статика без Jekyll |
| `static/robots.txt` | SEO |
| `static/downloads/it-universe.apk` | Android-приложение |
| `build/` | Результат SSG (не в git) |

---

## 11. Потоки данных (сводка)

```mermaid
flowchart LR
  subgraph authorTime [Время автора]
    MD[Markdown в git]
    Comp[React демо в src/]
  end

  subgraph buildTime [Время сборки]
    Scripts[scripts/*.mjs]
    DS[Docusaurus SSG]
  end

  subgraph publishTime [Публикация]
    HTML[HTML + JS chunks]
    JSON[doc-search-index.json]
  end

  subgraph readTime [Время чтения]
    React[React hydration]
    LS[localStorage темы]
    Fetch[fetch search index]
  end

  MD --> Scripts
  Comp --> DS
  Scripts --> DS
  MD --> DS
  DS --> HTML
  Scripts --> JSON
  HTML --> React
  JSON --> Fetch
  LS --> React
```

---

## 12. Ключевые файлы (шпаргалка)

| Файл | Роль в архитектуре |
|------|---------------------|
| `docusaurus.config.js` | Центр: preset, plugins, themes, redirects, chunks |
| `sidebars.js` | Дерево навигации + подборки |
| `src/remark/wikiLink.js` | `[[wiki]]` в MDX |
| `src/data/wikiLinkIndex.json` | Генерируемый индекс wiki |
| `static/doc-search-index.json` | Генерируемый индекс поиска |
| `src/data/docLegacyRedirects.json` | Генерируемые URL-редиректы |
| `src/theme/DocItem/Layout/index.tsx` | Обвязка каждой статьи |
| `src/components/DocSearch/*` | Клиентский поиск |
| `src/css/custom.css` | Глобальные стили, теги статей |
| `.github/workflows/deploy.yml` | CI → GitHub Pages |

---

## Связанные документы

- [`PROJECT-TECHNICAL.md`](./PROJECT-TECHNICAL.md) — полный технический справочник, таблицы, frontmatter
- [`PROJECT-FILE-TREE.txt`](./PROJECT-FILE-TREE.txt) — дерево путей
- [`demo-registry.md`](./demo-registry.md) — демо ↔ статьи
- [`wiki-links.md`](./wiki-links.md) — авторская инструкция по `[[ссылкам]]`

---

*При изменении архитектуры (новый плагин, скрипт сборки, swizzle) обновляйте соответствующую секцию и дату в шапке файла.*
