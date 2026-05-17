# Вселенная IT

**Открытая образовательная энциклопедия по информационным технологиям**

### Варианты использования

1. Готовый сайт проекта — [spirzen.ru](https://spirzen.ru/)
2. Локальная (оффлайн) версия — `git clone`, `npm install`, `npm start`.

Для офлайн-сборки желательно:

- **ru-oru-zru-u** — от 4 ru-gru-b (комфортно 8 ru-gru-b и больше);
- **CPU** — 2+ ядра;
- **Диск** — от 20 ru-gru-b под репозиторий, `node_modules` и артефакты сборки;
- **ru-oru-s** — Windows 10/11, Linux или macOS;
- **Node.js** ≥ 20 и npm ≥ 9.

### ru-o проекте

> Статический сайт-база знаний на [Docusaurus 3.10](https://docusaurus.io/).  
> Цель — систематизировать знания по IT в единую, непротиворечивую и проверяемую модель для обучения и профессионального справочного использования.

Материалы ориентированы на профессионалов, преподавателей, студентов и новичков. Архитектура энциклопедии — дорожная карта и разделы с плавным погружением в темы.

---

## Технологическая основа

| Область | Стек |
|--------|------|
| **Сборка** | Docusaurus 3.10, React 19, SSG |
| **Контент** | Markdown / MDX в `docs/` |
| **Ускорение сборки** | `@docusaurus/faster`, `future.v4` |
| **Диаграммы** | `@docusaurus/theme-mermaid` |
| **Живой код** | `@docusaurus/theme-live-codeblock` (lab) |
| **Подсветка** | Prism (`prism-react-renderer`) |
| **PDF статей** | `html2canvas` + `jspdf` (ленивая загрузка) |
| **Деплой** | GitHub Actions → GitHub Pages (`spirzen.ru`) |

### Кастомизация UI и навигация

| Компонент / модуль | Назначение |
|--------------------|------------|
| `src/theme/DocItem/Layout` | Прогресс главы, кликабельные теги, PDF, блок «См. также» |
| `src/components/ArticleSeeAlso.jsx` | Карточки соседних статей раздела (`DocCardList` + sidebar) |
| `src/components/ArticlePdfExport.jsx` | Экспорт статьи в PDF |
| `src/components/shared/DemoShell.jsx` | Оболочка интерактивных демо |
| `src/components/shared/lazyDemo.js` | Ленивая загрузка тяжёлых виджетов |
| `src/css/custom.css`, `demo-widgets.css` | Тема, теги, демо, дата обновления |

Служебный реестр демо и статей: `info/demo-registry.md` (генерируется `npm run docs:demo-registry`, на сайт не попадает).

---

## Структура проекта

```
it-knowledge-base/
├── docusaurus.config.js
├── sidebars.js
├── info/
│   └── demo-registry.md             # служебный реестр демо (не в docs/)
├── scripts/
│   ├── generate-demo-registry.mjs   # обновляет info/demo-registry.md
│   └── normalize-demo-components.mjs
├── src/
│   ├── components/          # интерактивные демо и UI
│   ├── components/shared/   # DemoShell, lazyDemo, styleTokens
│   ├── theme/DocItem/       # swizzle layout статьи
│   ├── css/
│   ├── pages/index.js       # главная
│   └── utils/exportArticlePdf.js
├── docs/                    # статьи (энциклопедия, lab, about, …)
├── static/
└── package.json
```

---

## Архитектура знаний

1. **basics** — фундамент IT  
2. **system и сеть** — ru-oru-s, сеть, администрирование  
3. **data и разметка** — ru-bru-d, SQL/NoSQL, HTML/CSS, форматы  
4. **Код и разработка** — алгоритмы, архитектура, Git, отладка  
5. **Языки** — 15+ языков программирования  
6. **Искусственный интеллект**  
7. **Проект** — ru-zhru-tsru-pru-o, аналитика, тестирование, документация  
8. **Инфраструктура и безопасность** — DevOps, облака, контейнеры, ru-iru-b  
9. **Спин-офф** — смежные темы  

ru-v конце статей (кроме `intro`) автоматически выводится блок **«См. также»** — до 12 карточек соседних материалов из того же раздела sidebar, как на страницах «ru-o разделе».

---

## Установка и разработка

### Требования

- **Node.js** ≥ 20 (`engines` в `package.json`)  
- **npm** ≥ 9  
- **Git** — для даты последнего обновления статей при сборке  

### Команды

```bash
npm install
npm start              # dev-сервер
npm run build          # production (нужно ~8 ru-gru-b heap, см. package.json)
npm run serve          # просмотр build/
npm run clear          # сброс кэша Docusaurus

npm run docs:demo-registry   # обновить info/demo-registry.md
```

Сборка создаёт каталог `build/` — полностью статический сайт без backend.

Учтите объём: **тысячи статей**, полная сборка может занимать заметное время и память.

---

## Деплой

- **GitHub Pages** — workflow `.github/workflows/deploy.yml` на ветке `main`  
- Checkout с `fetch-depth: 0`, чтобы в footer статей попадала дата последнего коммита  
- Альтернативы: Vercel, Netlify и любой статический хостинг (`npm run build`, каталог `build/`)

Продакшен: [spirzen.ru](https://spirzen.ru/) (`baseUrl: '/'` в `docusaurus.config.js`).

---

## Работа с контентом

### Front matter (примеры)

```yaml
---
title: Операционная система
sidebar_label: ru-oru-s
tags: [beginner, required, developer]
see_also: false          # отключить блок «См. также»
pdf_export: false        # скрыть кнопку PDF
hide_table_of_contents: true
---
```

- **tags** — фильтры и кликабельные бейджи (`/tags/...`)  
- **see_also** — по умолчанию блок включён; на `intro` не показывается  
- Дата обновления — из истории Git (`showLastUpdateTime: true`), отображается в footer статьи  

### Подключение демо в статье

```md
import TestingBasicsDemo from '@site/src/components/TestingBasicsDemo.jsx';

<TestingBasicsDemo />
```

После добавления или переименования демо выполните `npm run docs:demo-registry`.

### Навигация

- `sidebars.js` — боковое меню  
- `docusaurus.config.js` — navbar, footer, Prism, плагины  

---

## Ограничения и особенности

- **Поиск** — встроенный Algolia отключён; локальный поиск не подключён  
- **Язык** — только русский (`locales: ['ru']`)  
- **Read-only** — без авторизации и пользовательских данных  
- **Проверка ссылок** — `onBrokenLinks: 'warn'`  

---

## Лицензия

Контент: [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/).  
Код (конфиг, компоненты, стили): **MIT**.

---

## Контакт

**Тагиров Тимур Владиславович** — автор и методист.  
Раздел [Об авторе](https://spirzen.ru/about/author) на сайте.

---

*«Вселенная IT» — не обучалка и не блог, а попытка выстроить целостную модель IT-дисциплины.*
