---
title: О проекте
description: Вселенная IT — это масштабный проект по систематизации, унификации и долгосрочному хранению знаний в области информационных технологий.
---

import DocCardList from '@theme/DocCardList';

# О проекте

<DocCardList />

---

<div class="callout callout--tip">
  <div class="callout-title">Для новичков</div>

  <div class="callout-body">
  В проекте есть интерактивный [Навигатор новичка и профилей](https://lab.spirzen.ru/lab/Планы%20развития/7): он помогает пройти путь от базовых тем к осознанному выбору направления.
</div>
  </div>


---

## Вселенная IT

"Вселенная IT" — это масштабный проект по систематизации, унификации и долгосрочному хранению знаний в области информационных технологий. 

Материалы для сайта я пишу ещё с 2018 года. Сам сайт запущен в 2025 году. Именно благодаря многолетнему труду здесь **более 3700** материалов в `docs/` (из них **~3000 статей** энциклопедии на spirzen.ru; глоссарий, лаборатория, инструменты, игры и kids — на отдельных порталах), плюс **~2500 примеров кода** на [code.spirzen.ru](https://code.spirzen.ru/), **~500 интерактивных демо** на [play.spirzen.ru](https://play.spirzen.ru/), **~700 иллюстраций** на [assets.spirzen.ru](https://assets.spirzen.ru/) и **онлайн-редактор** [html.spirzen.ru](https://html.spirzen.ru/) (WebEditor).

Здесь:
- нет слежки;
- нет сбора данных;
- нет рекламы и платных услуг;
- нет пропаганды и скрытых целей.

Цель проекта — создание единой, непротиворечивой, проверяемой и доступной базы знаний, охватывающей всю широту IT-дисциплин, от фундаментальных основ до современных инженерных практик.

Если проще - дать вам, читателям, удобную возможность развиваться, читать и знать больше.

Материалы ориентированы на профессионалов, преподавателей, студентов и тех, кто начинает свой путь в IT. Каждый раздел проектируется с учётом научной строгости, практической применимости и доступности изложения.

Вселенная IT охватывает всю сферу IT в **единой модели знаний**: энциклопедический хаб [spirzen.ru](https://spirzen.ru/), контентные порталы (terms, lab, tools, kids, games), утилиты (search, writer, schema, sql, color, random), embed-сервисы code/play, медиа assets и WebEditor html. Код и интерактив в статьях — iframe/postMessage; иллюстрации — URL с assets; карта доменов — [status.spirzen.ru](https://status.spirzen.ru). Подробнее о витрине демо — в разделе [Интерактив](/about/interactive).

У Вселенной IT есть осознанные минусы:
- уникальность и актуальность контента — я работаю сам и как хочу, поэтому если что-то обновится, то всё в моих руках;
- комьюнити и модель развития — многие базы знаний погибают из-за отсутствия авторов, а я одиночка.

Поиск по статьям **восстановлен**: собственный клиентский DocSearch (Ctrl+K) без Algolia и внешних SaaS — индекс `doc-search-index.json` собирается при `npm run build`.

Любите игры? Хотите улучшить компьютерную грамотность? Желаете выучить язык программирования? Ищете гайд для решения какой-то задачи? Не можете разобраться в какой-то теме?


<div class="callout callout--tip">
  <div class="callout-title">💡 Совет</div>

  <div class="callout-body">
В каждой статье есть теги, рекомендую обращать внимание. 
Они определяют обязательность и целевую аудиторию статьи, к примеру, тег "В РАЗРАБОТКЕ" говорит о том, что работа ещё не окончена, и кидаться тухлыми помидорами не нужно.
</div>
  </div>



На реальной статье в каждой паре указывается **один** тег (обязательность, уровень, статус). Ниже — как они выглядят по отдельности:

<div class="article-tags">
  <span class="tag tag-required">ОБЯЗАТЕЛЬНО</span>
</div>

<div class="article-tags">
  <span class="tag tag-notrequired">НЕ ОБЯЗАТЕЛЬНО</span>
</div>

<div class="article-tags">
  <span class="tag tag-beginner">ДЛЯ НОВИЧКОВ</span>
</div>

<div class="article-tags">
  <span class="tag tag-advanced">НЕ ДЛЯ НОВИЧКОВ</span>
</div>

<div class="article-tags">
  <span class="tag tag-inprogress">В РАЗРАБОТКЕ</span>
</div>

Роль читателя (обычно одна–две на статью): <span class="complexity-badge">Разработчику</span>, <span class="complexity-badge">Аналитику</span>, <span class="complexity-badge">Всем</span> и другие — см. [систему тегов](/about/tags).

```
Я стараюсь всегда приводить примеры кода. Можете копировать через кнопку справа в таких блоках. -->
```

Пользуйтесь **навигацией** — в боковом меню spirzen.ru:
- **Общее содержание** (`toc`) — полное дерево и порталы
- **О проекте**
- **Энциклопедия** (девять блоков на spirzen.ru — см. ниже)
- **Видеоигры**, **Инструменты**, **Глоссарий**, **Лаборатория** — внешние порталы (`games`, `tools`, `terms`, `lab`)
- **Для детей** — [kids.spirzen.ru](https://kids.spirzen.ru/kids/intro)
- **Контекст** и **Философия** — на spirzen.ru

Сквозной поиск по экосистеме — [search.spirzen.ru](https://search.spirzen.ru); по статьям энциклопедии — **Ctrl+K** на spirzen.ru.

Здесь есть всякое разное - списки игр, глоссарий терминов, подборка литературы и официальной документации, много интересных статей и теоретических основ.

> **📌 Внимание**  
> Правила и позиция проекта изложены в Манифесте.

---

## Цели проекта

### Основная цель

Формирование независимого, достоверного и устойчивого источника знаний, не подверженного коммерческому влиянию, временным трендам или региональным ограничениям. Проект стремится стать стандартом первичного обращения за информацией в русскоязычном IT-пространстве.

---

### Задачи
- **Систематизация знаний**: Устранение фрагментарности знаний через логическую декомпозицию и иерархическую структуризацию. Устранение дублирования, противоречий и терминологической неоднозначности.
- **Доступность**: Обеспечение свободного доступа к материалам без финансовых, географических или технических барьеров. Поддержка офлайн-использования и локального развёртывания.
- **Актуальность**: Регулярное обновление содержания на основе анализа изменений в стандартах, платформах и индустриальных практиках.
- **Практичность**: Интеграция теории с примерами использования, диаграммами архитектур, ссылками на спецификации и официальную документацию.
- **Нейтральность и объективность**: Исключение маркетингового влияния, сравнительный анализ технологий на основе измеримых характеристик.

---

## Принципы

Проект следует принципам **мультиисточности** (используется много источников информации для формирования полной картины), **нейтральности** (сравнение проводится объективно, без предвзятости), **долгосрочности** (чтобы материал можно было применять в течение многих лет), **профессионализма** - если что-то пишем, значит уже проверили сами. Поэтому верификация у нас происходит систематически по первичным и независимым источникам.

---

## Источники

Я провожу кросс-валидацию источников (я уже работал с факт-чекингом, так что разбираюсь в этой теме), и проверяю достоверность информации путём сопоставления данных из всех доступных источников - официальные, коммерческие, независимые и надёжные. К примеру, это может быть документация Microsoft, учебники и научная литература, статьи экспертов, мой личный опыт и практика, рекомендации коллег и знакомых профессионалов, проверка от ИИ-агентов (GPT, DeepSeek, Qwen, Яндекс).

Данные триангулируются (используются несколько методов или источников для подтверждения одного и того же факта).

Если данные спорные, устаревшие или ненадёжные - я прямо об этом скажу. Приоритет, конечно, отдаём оригинальным материалам - спецификациям, исходному коду, документации. Вторичные источники вроде блогов, статей или видео используются лишь как дополнение.

К сожалению, отметить какую-то конкретную литературу сложно - в основном курсы, учебники и прочие материалы преследуют коммерческую направленность, поэтому рассчитаны на узкое изучение с дальнейшим обращением к экспертам.

Но ведь мы с вами и так эксперты, не так ли? Чем вы отличаетесь от любого учёного? Тем, что он изучал чуть больше. Так станьте учёным и изучите!!!

---

<span id="arhitektura-proekta"></span>

## Как устроен проект технически

«Вселенная IT» — это не только тысячи статей, но и **распределённая программная платформа** с **многослойной** архитектурой: восемь зон на полной схеме (экосистема → интеграция → исходники → сборка каждого репозитория → деплой → runtime), плюс восемь логических слоёв внутри spirzen.ru. На продакшене — **более пятнадцати поддоменов** `*.spirzen.ru` (энциклопедия, порталы контента, утилиты, поиск, медиа), каждый — отдельный git-репозиторий и GitHub Pages; тяжёлый код и интерактив в статьях — через iframe/postMessage на code и play. Плюс локальная панель `it-management` и Android APK. **Нет общего backend и базы данных** — всё статика и клиентский JS; индексы и редиректы собираются при `npm run build` и в CI.

### Экосистема: все домены

Карта сервисов и мониторинг доступности — на [status.spirzen.ru](https://status.spirzen.ru). Единый реестр URL — `ecosystem-urls.json` в репозиториях порталов.

**Ядро**

| Сервис | URL | Репозиторий | Содержание |
|--------|-----|-------------|------------|
| Энциклопедия | [spirzen.ru](https://spirzen.ru/) | `it-knowledge-base` | **~3000 статей** на spirzen; DocSearch (Ctrl+K) — ~3400 записей в индексе |
| Поиск по экосистеме | [search.spirzen.ru](https://search.spirzen.ru) | `it-search` | Единый индекс: spirzen + code + play + terms + lab + tools + games + kids |
| Медиа (CDN) | [assets.spirzen.ru](https://assets.spirzen.ru/) | `it-encyclopedia-media` | **~700 иллюстраций**, PNG/WebP по URL в markdown |
| Хаб экосистемы | [status.spirzen.ru](https://status.spirzen.ru) | `it-portals` | Карточки всех сервисов, snapshot доступности |

**Обучение** (контент вынесен с spirzen.ru на отдельные домены; старые URL редиректят)

| Сервис | URL | Репозиторий | Содержание |
|--------|-----|-------------|------------|
| Глоссарий | [terms.spirzen.ru](https://terms.spirzen.ru) | `it-terms` | ~4250 IT-терминов, алфавит `/glossary/{буква}` |
| Лаборатория | [lab.spirzen.ru](https://lab.spirzen.ru) | `it-lab` | Практика, тренажёры, экзамены, примеры (**~180** материалов) |
| Для детей | [kids.spirzen.ru](https://kids.spirzen.ru) | `it-kids` | Упрощённые материалы (**~80** статей) |
| Игры | [games.spirzen.ru](https://games.spirzen.ru) | `it-games` | Игровая индустрия, разработка игр, gametools (**~130** материалов) |

**Создание и практика**

| Сервис | URL | Репозиторий | Содержание |
|--------|-----|-------------|------------|
| Примеры кода | [code.spirzen.ru](https://code.spirzen.ru/) | `it-code-examples` | **~2500** листингов; embed в статьях `/e/embed/<slug>/` |
| Интерактив | [play.spirzen.ru](https://play.spirzen.ru/) | `it-play` | **~500** демо; embed `/p/embed/<slug>/` |
| WebEditor | [html.spirzen.ru](https://html.spirzen.ru/) | `WebEditor` | HTML/CSS/JS с живым предпросмотром |
| Writer | [writer.spirzen.ru](https://writer.spirzen.ru) | `it-writer` | Редактор статей: frontmatter, callout, embed, линтер, экспорт `.md` |
| Schema | [schema.spirzen.ru](https://schema.spirzen.ru) | *(отдельный repo)* | Диаграммы и блок-схемы (Schema Maker) |
| SQL | [sql.spirzen.ru](https://sql.spirzen.ru) | *(отдельный repo)* | SQL-песочница и запросы в браузере |

**Инструменты**

| Сервис | URL | Репозиторий | Содержание |
|--------|-----|-------------|------------|
| Tools | [tools.spirzen.ru](https://tools.spirzen.ru) | `it-tools` | Справочник утилит (**~60** статей) |
| Color | [color.spirzen.ru](https://color.spirzen.ru) | `it-color` | Студия цвета: HEX/RGB/HSL, контраст WCAG, палитры W3C |
| Random | [random.spirzen.ru](https://random.spirzen.ru) | *(отдельный repo)* | Генераторы случайных данных (UUID, пароли, тестовые строки) |

**Локально и клиенты**

| Сервис | URL | Репозиторий | Содержание |
|--------|-----|-------------|------------|
| Панель | `127.0.0.1:8787` | `it-management` | Start/Build/Deploy всех веб-проектов |
| Android | APK на главной | `itu-mobile-app` | WebView → spirzen.ru |

> **Два поиска:** **Ctrl+K на spirzen.ru** — только материалы энциклопедии (`doc-search-index.json` в `it-knowledge-base`). **[search.spirzen.ru](https://search.spirzen.ru)** — сквозной поиск по KB, code, play, terms, lab, tools (`universe-search-index.json` в `it-search`).

### Распределённая архитектура

Платформа — **не «три сайта и готово»**. На полной схеме — **восемь горизонтальных зон (swimlanes)** и десятки блоков внутри каждой: от git-репозиториев и npm-скриптов до Docusaurus-плагинов, remark-преобразований, embed-конвейера, трёх независимых Astro-сборок, CI/CD и runtime в браузере. Упрощённый обзор «хаб + code + play» остаётся полезным для первого знакомства (см. ниже), но **источник правды** — полная диаграмма и [`info/ARCHITECTURE.md`](https://github.com/Spirzen/it-knowledge-base/blob/main/info/ARCHITECTURE.md).

Пять публичных доменов на GitHub Pages разгружают репозиторий энциклопедии: код и интерактив «стягиваются» в статьи через iframe и postMessage, иллюстрации — по абсолютным URL с **assets** (без участия билда Docusaurus), практика веб-стека — на **html** как отдельное приложение со ссылками из статей.

<div class="callout callout--info">
  <div class="callout-title">Живой пример</div>

  <div class="callout-body">
  Схема ниже описывает тот же проект, из которого собран сайт <a href="https://spirzen.ru">spirzen.ru</a>. Её можно использовать в учебных главах про архитектуру, аналитику и DevOps как эталон as-is.
</div>
  </div>

![Архитектура «Вселенная IT» — экосистема: spirzen.ru, code, play, assets, html, интеграция, сборка, деплой и runtime](https://assets.spirzen.ru/encyclopedia/_shared/img/it-universe-architecture.png)

> Если картинка кажется слишком мелкой — нажмите ПКМ и выберите «Открыть в новой вкладке».

Исходник полной схемы — `info/it-universe-architecture.drawio` (пересборка: `node scripts/generate-architecture-drawio.mjs`). Иллюстрации статей — в [`it-encyclopedia-media`](https://github.com/Spirzen/it-encyclopedia-media); общие PNG — `_shared/img/`.

Длинные листинги и тяжёлые симуляторы **не раздувают** билд энциклопедии: статьи встраивают их через `ExternalCodeEmbed` и `ExternalPlayEmbed` (iframe, синхрон темы, авто-высота). Подробно — в [`info/ECOSYSTEM.md`](https://github.com/Spirzen/it-knowledge-base/blob/main/info/ECOSYSTEM.md) и разделе [Как устроена Вселенная IT → Архитектура](/about/kak-ustroena-vselennaya-it/arkhitektura).

### Что показано на полной схеме (Draw.io)

| Зона | Содержание |
| :--- | :--- |
| **0. Экосистема (продакшен)** | Автор и читатель; **15+ поддоменов** (spirzen, search, terms, lab, kids, games, code, play, html, writer, schema, sql, tools, color, random, assets); it-management; APK |
| **0b. Интеграция** | ExternalCodeEmbed / ExternalPlayEmbed, EmbedClickGate, useEmbedViewport, postMessage (высота, тема, fullscreen), CSP `frame-ancestors`, whitelist origin |
| **1. it-knowledge-base — источники** | `docs/` (**~3700** в git; на spirzen — энциклопедия без портального контента), `src/`, embed, DocSearch, `*ExternalRedirects.json` |
| **2. Сборка spirzen.ru** | `docs:wiki-links` → `docs:search-index` → `docs:redirects` → `docs:collection-titles` → Docusaurus 3.10 (preset, plugins, remark, webpack chunks) → `build/` |
| **3. it-code-examples** | Astro 5 + Shiki, каталог листингов, маршруты `/e/embed/<slug>/` → `dist/` |
| **4. it-play** | Astro + React 19, ~500 демо, маршруты `/p/embed/<slug>/` → `dist/` |
| **4b. assets / html** (satellite) | `it-encyclopedia-media` → assets.spirzen.ru (PNG/WebP по URL в markdown); WebEditor → html.spirzen.ru (ссылки из статей, без iframe) |
| **5. Деплой** | GitHub Actions `deploy-pages` на **каждый** repo/домен (KB, code, play, terms, lab, search, …) |
| **6. Runtime в браузере** | Оболочка spirzen (Navbar, DocSearch, sidebar, темы) → статья MDX (DocItem/Layout, PDF, SeeAlso) → click-to-load iframe code/play **или** inline lazyDemo; 9 блоков encyclopedia; fetch `doc-search-index.json` |

### Упрощённый обзор (для первого знакомства)

Если полная схема кажется перегруженной — начните с трёх доменов «хаб + код + интерактив» и слоя интеграции между ними:

![Упрощённая схема «Вселенная IT» — spirzen.ru (хаб), code.spirzen.ru (код), play.spirzen.ru (интерактив) и слой интеграции](https://assets.spirzen.ru/encyclopedia/_shared/img/it-universe-three-tier.png)

> Это **не** полная картина — assets, html, сборка, деплой и runtime на ней не показаны. Исходник — `info/it-universe-three-tier.drawio`.

<span id="it-universe-c4-mermaid"></span>

### Экосистема (Mermaid)

```mermaid
%%{init: {'theme':'base','themeVariables':{'primaryColor':'#e3f2fd','primaryTextColor':'#0d47a1','primaryBorderColor':'#1565c0','lineColor':'#546e7a'}}}%%

flowchart TB
  classDef kb fill:#f3e5f5,stroke:#7b1fa2,stroke-width:2px
  classDef portal fill:#e8eaf6,stroke:#3f51b5,stroke-width:2px
  classDef code fill:#e3f2fd,stroke:#1565c0,stroke-width:2px
  classDef play fill:#fff3e0,stroke:#ef6c00,stroke-width:2px
  classDef media fill:#e8f5e9,stroke:#2e7d32,stroke-width:2px
  classDef human fill:#eceff1,stroke:#546e7a,stroke-width:2px

  Reader["Читатель"]:::human
  Author["Автор / git"]:::human

  KB["spirzen.ru<br/>энциклопедия"]:::kb
  SEARCH["search.spirzen.ru<br/>поиск везде"]:::portal
  TERMS["terms · lab · tools<br/>kids · games"]:::portal
  UTIL["writer · schema · sql<br/>color · random · html"]:::portal
  CODE["code.spirzen.ru"]:::code
  PLAY["play.spirzen.ru"]:::play
  ASSETS["assets.spirzen.ru"]:::media

  Author --> KB
  Author --> TERMS
  Author --> UTIL
  Author --> CODE
  Author --> PLAY
  Reader --> KB
  Reader --> SEARCH
  Reader --> TERMS
  Reader --> UTIL
  SEARCH -.->|индекс при сборке| KB
  SEARCH -.-> CODE
  SEARCH -.-> PLAY
  SEARCH -.-> TERMS
  KB -->|"iframe embed"| CODE
  KB -->|"iframe embed"| PLAY
  KB -->|"img URL"| ASSETS
  KB -->|"ссылки / редиректы"| TERMS
  KB -->|"ссылки"| UTIL
  KB <-->|postMessage| CODE
  KB <-->|postMessage| PLAY
```

<span id="it-universe-build-mermaid"></span>

### Пайплайн сборки (Mermaid)

```mermaid
%%{init: {'theme': 'base', 'themeVariables': { 'primaryColor': '#e3f2fd', 'primaryTextColor': '#0d47a1', 'primaryBorderColor': '#1565c0', 'lineColor': '#546e7a', 'secondaryColor': '#f5f5f5', 'tertiaryColor': '#eceff1'}}}%%

flowchart TB
  classDef io fill:#e8eaf6,stroke:#3f51b5,stroke-width:2px,color:#283593
  classDef script fill:#fff3e0,stroke:#f57c00,stroke-width:2px,color:#e65100
  classDef core fill:#f3e5f5,stroke:#7b1fa2,stroke-width:2px,color:#4a148c
  classDef file fill:#e8f5e9,stroke:#388e3c,stroke-width:2px,color:#1b5e20,stroke-dasharray: 5 5

  Start(["npm start / npm run build"]):::io

  subgraph preStart ["Pre-Scripts (Start + Build)"]
    direction TB
    W["docs:wiki-links - build-wiki-link-index.mjs"]:::script
    S["docs:search-index - build-doc-search-index.mjs"]:::script
    R["docs:redirects - build-doc-redirects.mjs"]:::script
  end

  subgraph preBuildOnly ["Pre-Scripts (только Build)"]
    direction TB
    CT["docs:collection-titles - generate-collection-doc-titles.mjs"]:::script
  end

  subgraph docusaurus ["Docusaurus 3.10"]
    direction TB
    DC["@docusaurus/core"]:::core
    Faster["@docusaurus/faster - v4 future, откл. на Win dev"]:::core
    Preset["preset-classic - docs routeBasePath /"]:::core
    MDX["MDX + remark wikiLink"]:::core
    Webpack["Webpack / Rspack - lazy chunks демо"]:::core
  end

  Out(["build/ или dev server"]):::io

  WikiOut[("wikiLinkIndex.json")]:::file
  SearchOut[("doc-search-index.json")]:::file
  RedirOut[("docLegacyRedirects.json")]:::file

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

Исходники диаграмм — `info/it-universe-architecture.drawio` (полная, генерируется скриптом) и `info/it-universe-three-tier.drawio` (упрощённая); редактор [diagrams.net](https://app.diagrams.net/) или расширение Draw.io в VS Code. PNG — на [assets.spirzen.ru](https://assets.spirzen.ru/) (`it-encyclopedia-media/public/encyclopedia/_shared/img/`). Пересборка полной схемы: `node scripts/generate-architecture-drawio.mjs`, затем экспорт PNG в media-репозиторий.

Развёрнутое текстовое описание и дополнительные фрагменты Mermaid — в [`info/ARCHITECTURE.md`](https://github.com/Spirzen/it-knowledge-base/blob/main/info/ARCHITECTURE.md) на GitHub (каталог `info/` в публичную сборку сайта не входит). Якоря на этой странице: [C4-контекст](#it-universe-c4-mermaid), [пайплайн сборки](#it-universe-build-mermaid). Тот же материал разобран по темам энциклопедии — в статьях про [веб и SSG](/encyclopedia/2-system-network/2-04-kak-rabotayut-sayty-i-veb-sayty/114), [основы C4 и нотаций](/encyclopedia/7-project/7-04-analitika/1231), [инструменты C4](/encyclopedia/7-project/7-04-analitika/126), [CI/CD](/encyclopedia/8-infra-security/8-04-devops-ci-cd/11) и [GitHub Actions](/encyclopedia/8-infra-security/8-04-devops-ci-cd/2112).

---

<span id="struktura-bazy-znaniy"></span>

## Структура базы знаний

Сайт [spirzen.ru](https://spirzen.ru/) собран на Docusaurus. В боковом меню — **семь разделов** (плюс «Общее содержание»); ядро — **Энциклопедия** с **девятью блоками** (условный порядок погружения). Остальные разделы дополняют её: инструменты, глоссарий, лаборатория, контекст, философия.

---

### 1. Основы
<span class="complexity-badge">Всем</span>

Фундаментальные знания о компьютерах, программном обеспечении и IT-сфере в целом, и таких основах, как двоичная система, ПО, лицензирование, типы приложений, история развития IT. Идеально подходит для новичков, так как фактически развивает компьютерную грамотность, вводя в вычислительные системы.

---

### 2. Система и сеть
<span class="complexity-badge">Разработчику</span>
<span class="complexity-badge">Аналитику</span>
<span class="complexity-badge">Тестировщику</span>  
<span class="complexity-badge">Архитектору</span>
<span class="complexity-badge">Инженеру</span>

Операционные системы (Windows, Linux, Unix-подобные), сетевые технологии, системное администрирование, процессы, потоки, файловые системы, сетевые модели (OSI, TCP/IP), маршрутизация, DNS, DHCP, VPN, базовая безопасность.

---

### 3. Данные и разметка
<span class="complexity-badge">Всем</span>

Работа с данными, базы данных, SQL, NoSQL, HTML, CSS, анализ информации и структуры данных, сериализация, форматы (JSON, XML, YAML), нормализация, транзакции, индексация.

---

### 4. Код и разработка
<span class="complexity-badge">Разработчику</span>
<span class="complexity-badge">Архитектору</span>
<span class="complexity-badge">Инженеру</span>

Программирование, алгоритмы, архитектура приложений, инструменты разработки и методологии, отладка, контроль версий, сборка, цикл разработки ПО.

---

### 5. Языки программирования
<span class="complexity-badge">Разработчику</span>
<span class="complexity-badge">Архитектору</span>

Глубокое изучение языков: C#, Python, Java, JavaScript/TypeScript, C++, PHP, Ruby, Rust, Lua, а также анализ старых и нишевых языков (например, COBOL, Pascal). Для каждого — семантика, runtime, особенности компиляции/интерпретации, экосистема.

---

### 6. Искусственный интеллект
<span class="complexity-badge">Разработчику</span>
<span class="complexity-badge">Архитектору</span>
<span class="complexity-badge">Инженеру</span>

Основы AI и машинного обучения, модели и инструменты, разработка и применение ИИ.

---

### 7. Управление проектами
<span class="complexity-badge">Разработчику</span>
<span class="complexity-badge">Аналитику</span>
<span class="complexity-badge">Тестировщику</span>  
<span class="complexity-badge">Архитектору</span>
<span class="complexity-badge">Руководителю</span>
<span class="complexity-badge">Техническому писателю</span>

Методологии (Agile, Scrum, Kanban, Waterfall), управление требованиями, метрики, командная работа, роль бизнес-аналитика, взаимодействие с заказчиком, карьерные траектории.

---

### 8. Инфраструктура и безопасность
<span class="complexity-badge">Разработчику</span>
<span class="complexity-badge">Архитектору</span>
<span class="complexity-badge">Инженеру</span>

DevOps-практики, контейнеризация (Docker), оркестрация (Kubernetes), облачные платформы (AWS, Azure, GCP), мониторинг (Prometheus, Grafana), логирование, шифрование, аутентификация, аудит.

---

### 9. Дополнительные темы
<span class="complexity-badge">Всем</span>

Блокчейн, IoT, мобильная разработка, игровые движки, IT-этика, энергоэффективность, влияние IT на общество. Также включает спин-офф материалы — например, исторический анализ технологий или культурные аспекты цифровизации.

Но полная информация имеется в содержании.

---

## Особенности проекта

Как можно понять, проект простой и держится на моём энтузиазме. Я не знаю точно, что мною движило - но я люблю писать, систематизировать и приводить всё в порядок. Сначала я вёл базу знаний для себя, а потом всё как-то разрослось, и я подумал - а почему бы не поделиться со всем миром?

---

### Открытость
- Все материалы **бесплатны** и доступны каждому, даже самым вредным товарищам))
- Проект имеет **открытую лицензию** и позволяет спокойно получать знания.
- Исходный код хранится в **нескольких** публичных репозиториях на GitHub (`it-knowledge-base`, `it-code-examples`, `it-play`, `it-encyclopedia-media` и др.).
- Вы можете скачать себе и развернуть, но тогда книга потеряет главное свойство - актуальность. Лучше пользуйтесь этим сайтом - spirzen.ru

---

### Формат "книги-энциклопедии"
- Проект представляет собой **статический сайт**, собранный с помощью современного генератора документации.
- Пользователи могут **только читать** материалы - это гарантирует целостность и авторскую экспертизу.
- Ведётся также работа над форматом книги, так что однажды сможем почитать и оффлайн.

---

### Многоязычность
- Основной язык: **Русский**
- Архитектура сайта готова к добавлению языковых веток без перестройки структуры (**i18n-ready**).
- На текущем этапе локализация на другие языки **не ведётся и не планируется**, так как при текущем масштабе контента это нерационально.

---

## Безопасность

### Почему только чтение?
- **Защита от вандализма**: Исключается риск намеренного искажения или удаления информации.
- **Стабильность**: Постоянные URL позволяют использовать материалы в курсах, статьях и цитатах.
- **Качество**: Все изменения проходят ревизию автора, что исключает распространение неточных формулировок.

---

### Как обновляется контент?
- Обновления производятся **только автором**
- Все изменения **тщательно проверяются**
- **Регулярные обновления** с учетом новых технологий
- **Обратная связь** от сообщества учитывается при обновлениях

---

## Статистика проекта

- **10 корневых пунктов** в боковом меню (+ внешние порталы)
- **15+ доменов** экосистемы `*.spirzen.ru` (+ [status.spirzen.ru](https://status.spirzen.ru))
- **~3000 статей** энциклопедии на spirzen, **~3700 материалов** в `docs/` репозитория (часть — редиректы на порталы)
- **~2500 примеров кода** на [code.spirzen.ru](https://code.spirzen.ru/)
- **~500 интерактивных демо** на [play.spirzen.ru](https://play.spirzen.ru/)
- **~700 иллюстраций** на [assets.spirzen.ru](https://assets.spirzen.ru/)
- **WebEditor** на [html.spirzen.ru](https://html.spirzen.ru/) — практика HTML/CSS/JS в браузере
- **15+ языков программирования** в каталоге примеров
- **Поиск** по статьям (Ctrl+K), без Algolia
- **100% бесплатно**, постоянно обновляется
- Выглядит так, будто я продаю что-то, не так ли? А вот и нет, всё открыто.

---

## Планы развития

### Краткосрочные планы
- Экспертиза и улучшение существующей информации
- Поиск, изучение и добавление нового материала
- Масштабирование разделов и каталогов code/play
- Добавление новых статей и примеров
- Улучшение DocSearch и навигации
- Новые интерактивные демо на play.spirzen.ru

---

### Долгосрочные планы
- Создание видео-материалов
- Развитие Android-приложения (APK уже на [главной](https://spirzen.ru/))
- Интеграция с образовательными платформами

---

## Сообщество

### Как принять участие?

Проект не является коллегиальным в части написания контента. Автор остаётся единственным редактором, гарантируя единство стиля, точность формулировок и качество контента. Однако он открыт для сотрудничества.

Хотя редактирование недоступно, вы можете:
- **Предлагать улучшения** через GitHub Issues
- **Сообщать об ошибках** в материалах
- **Предлагать новые темы** для статей

---

### Обратная связь

Ваше мнение важно для развития проекта! Свяжитесь с автором через:
- GitHub Issues
- Email: tim.tagirov@mail.ru
- Социальные сети: [https://t.me/spirzenverse](https://t.me/spirzenverse)

![QR.png](QR.png)

---

## Планы

Планируется расширение разделов, оптимизация производительности сайтов и постоянное добавление практических кейсов. Сначала разберёмся с теорией.

---

## Лицензия

Проект распространяется под открытой лицензией, которая позволяет свободно использовать материалы для обучения и некоммерческих целей.

---

*Создано с уважением и любовью для IT-сообщества*

---
