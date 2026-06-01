---
title: JavaScript — о разделе
description: "JavaScript — браузер, Node.js, TypeScript, React и Vue; npm, Express; сравнение подходов к фронтенду и backend."
sidebar_label: JavaScript — о разделе
related:
  - title: "Low-code и No-code платформы"
    doc: encyclopedia/8-infra-security/8-02-low-code-no-code/1
  - title: "Python — о разделе"
    doc: encyclopedia/5-languages/5-02-python/intro
  - title: "Автоматическое управление памятью"
    doc: encyclopedia/4-code-dev/4-15-sborka-musora/1
  - title: "Java — о разделе"
    doc: encyclopedia/5-languages/5-03-java/intro
  - title: "HTML — о разделе"
    doc: encyclopedia/3-data-markup/3-09-html/intro
  - title: "CSS — о разделе"
    doc: encyclopedia/3-data-markup/3-10-css/intro
  - title: "Веб-браузеры"
    doc: encyclopedia/1-basics/1-11-soft-ryadovogo-polzovatelya/3
  - title: "PHP — о разделе"
    doc: encyclopedia/5-languages/5-07-php/intro
  - title: "Практикум разработки игр — о разделе"
    doc: encyclopedia/9-spinoff/9-04-razrabotka-igr/praktikum-razrabotki-igr/intro
  - title: "Веб-игры на HTML5 и Canvas"
    doc: encyclopedia/3-data-markup/3-09-html/22
  - title: "Примеры фигур на Processing/p5.js"
    doc: lab/examples/1114
  - title: "SVG — рисунки кодом"
    doc: lab/examples/1119
  - title: "CSS-анимации — готовые эффекты"
    doc: lab/examples/1116
  - title: "HTML + CSS — готовые макеты"
    doc: lab/examples/110
  - title: "HTML-страницы целиком"
    doc: lab/examples/1153
  - title: "Fetch / axios — типовые запросы"
    doc: lab/examples/1145
  - title: "React — компоненты-рецепты"
    doc: lab/examples/1146
  - title: "curl / fetch — API-запросы"
    doc: lab/examples/1133
---

import DocCardList from '@theme/DocCardList';
import BeginnerWebStackHub from '@site/src/components/BeginnerWebStackHub';
import WebPageLayersPlay from '@site/src/components/WebPageLayersPlay';
import FirstProgramPlay from '@site/src/components/FirstProgramPlay';

# О разделе

JavaScript оживляет страницу в **браузере**. Это не Java — разные языки.

### Термины экосистемы

| Термин | Кратко | Статья раздела |
|--------|--------|----------------|
| **ECMAScript** | официальный стандарт языка (TC39, Ecma International) | [Основы](./1.md), [История](./11.md) |
| **JavaScript** | торговое имя реализации ECMAScript в браузерах и Node.js | [Основы](./1.md) |
| **JScript** | реализация Microsoft в Internet Explorer | [История](./11.md) |
| **ActionScript** | язык платформы Adobe Flash (на базе ECMAScript) | [История](./11.md), [Экосистема](./25.md) |
| **DOM** | дерево объектов HTML/XML в браузере | [Работа с HTML](./102.md), [Применение в вебе](./14.md) |
| **AJAX** | обмен данными с сервером без полной перезагрузки страницы | [Асинхронность](./21.md), [История](./11.md) |
| **Comet** | push-модели поверх HTTP (long polling, поток) | [Асинхронность](./21.md), [SSE](./37.md) |
| **Веб-приложение** | интерактивная программа в браузере (часто SPA) | [Применение в вебе](./14.md) |
| **V8** | движок JavaScript (Chrome, Node.js) | [Применение](./14.md), [Node.js](./26.md) |
| **Chromium** | открытый браузерный проект (рендер + V8) | [Применение](./14.md) |
| **Node.js** | серверная среда на V8 | [Node.js](./26.md) |
| **Electron** | десктоп на Chromium + Node.js | [Применение](./14.md) |
| **webOS** | платформа устройств (TV) на веб-технологиях | [Применение](./14.md) |
| **jQuery** | библиотека DOM и AJAX (2006+) | [Экосистема](./25.md) |
| **React, Vue, Angular, Ember, Ext JS** | UI-фреймворки и библиотеки | [React](./27.md) ([карта тем](./27.md#карта-тем-react), [первая программа](./272.md), [справочник](./271.md), [галерея компонентов](/lab/Примеры/1146)), [Vue](./28.md), [Angular](./29.md), [Экосистема](./25.md), [Ext JS](./31.md) |

> **Сначала:** [Что такое код и как он работает](/encyclopedia/4-code-dev/4-02-chto-takoe-kod-i-kak-on-rabotaet/1) — общая база: **код**, **блок кода**, **компиляция** и **интерпретация**, **исходный**, **байт-** и **машинный код**; в этом разделе — синтаксис и особенности языка.

<div class="callout callout--info">
  <div class="callout-title">Event loop, Worker и async</div>

  <div class="callout-body">
  В браузере и Node.js основной поток один; параллелизм — через [асинхронность](/encyclopedia/4-code-dev/4-05-asinhronnost/12) и [Web Workers](/encyclopedia/5-languages/5-01-javascript/36).

  Теория — [процессы и потоки](/encyclopedia/4-code-dev/4-05-asinhronnost/1); в Node — `worker_threads`, `child_process`.
</div>
</div>

В [основах JavaScript](./1.md) модель Event Loop и асинхронность сначала разбираются **псевдокодом**, затем — на JS/Node.

Краткие идиоматичные записи (обмен переменных, `slice`, spread, `Set`) — в общей [таблице однострочников](/encyclopedia/4-code-dev/4-02-chto-takoe-kod-i-kak-on-rabotaet/614#sravnenie-yazykov); разворот и методы строк — в [типах данных — строки](./18.md#срезы-и-разбиение).

---

### Главы по API и расширению возможностей JavaScript

Если вы хотите углубиться именно в тему API, интеграций и расширений, идите по этому маршруту:

| Шаг | Материал | Что изучаете |
|-----|----------|---------------|
| 1 | [Основы JavaScript](./1.md) | среда выполнения, Web API, Event Loop |
| 2 | [Асинхронное программирование](./21.md) | Promise, `async/await`, `fetch`, очереди задач |
| 3 | [Работа с HTML](./102.md) + [События](./23.md) | доступ к DOM, `addEventListener`, реакция на действия пользователя |
| 3a | [Canvas 2D](./47.md) | программируемая графика на `<canvas>` |
| 3b | [Примеры фигур p5.js](/lab/Примеры/1114) | квадрат, цветок, фракталы — готовые скетчи с разбором строк |
| 4 | [BOM](./41.md) | `window`, `location`, `history`, `navigator`, geolocation |
| 5 | [Практика](./32.md) · [curl / fetch — примеры](/lab/Примеры/1133) · [Fetch / axios — типовые запросы](/lab/Примеры/1145) | рабочие сниппеты и галереи: GET/POST, токен, таймаут, React `useEffect` — с построчным разбором |
| 6 | [Web Share API](./44.md) | системное окно «Поделиться» через `navigator.share` |
| 7 | [Notification API](./46.md) | разрешения и нативные уведомления браузера |
| 8 | [Первая программа на React](./272.md) | подключение API в компонентном UI |
| 8a | [React — компоненты-рецепты](/lab/Примеры/1146) | счётчик, todo, формы, modal, Router — готовый код с разбором строк |

Этот маршрут даёт полноценный переход от нативных API браузера к прикладным интеграциям в реальных интерфейсах.

---

### Важно про TypeScript

Если идёте в сторону крупных frontend/backend-проектов, добавьте в маршрут [TypeScript](./30.md). Для ветки 7.x в экосистеме TypeScript анонсирован нативный компилятор на Go: это ориентировано на более быструю проверку типов и сборку в больших кодовых базах, особенно в CI/CD. Примеры workflow для Node — [GitHub Actions — CI/CD рецепты](/lab/Примеры/1134).

Практический вывод: при обновлении toolchain проверяйте официальные release notes TypeScript и совместимость вашей инфраструктуры.

---

### Маршрут по TypeScript

Пошаговое углубление в [статью TypeScript](./30.md):

| Шаг | Тема | Раздел |
|-----|------|--------|
| 1 | Зачем TS, типы и значения | [§ Типы и значения](./30.md#типы-и-значения) |
| 2 | Компилятор, `tsconfig`, strict | [§ Компилятор](./30.md#компилятор-typescript), [справочник §11](./301.md#11-конфигурация-typescript-tsconfigjson) |
| 3 | Функции, полиморфизм, type-driven | [§ Разработка на основе типов](./30.md#разработка-на-основе-типов) |
| 4 | Классы, примеси, паттерны | [§ Примеси и паттерны](./30.md#примеси-и-паттерны) |
| 5 | Продвинутые типы, тотальность | [§ Продвинутые типы](./30.md#продвинутые-типы) |
| 6 | Ошибки — Option, Result | [§ Обработка ошибок](./30.md#обработка-ошибок) |
| 7 | Promise, Worker | [§ Асинхронность с типами](./30.md#асинхронность-с-типами), [21.md](./21.md) |
| 8 | Миграция JS-проекта | [§ Поэтапная миграция](./30.md#поэтапная-миграция) |
| 9 | Monorepo, NPM | [§ Monorepo и публикация](./30.md#monorepo-и-публикация) |
| 10 | Шпаргалка | [Справочник TypeScript](./301.md) |

---

### С чего начать

| Шаг | Материал | Зачем |
|-----|----------|-------|
| 1 | [Основы JavaScript](./1.md) | Синтаксис, браузер |
| 1a | [Типы данных](./18.md) | Примитивы, [методы строк](./18.md#методы-строк) (`charAt`, `includes`, `slice`, …) |
| 1b | [TypeScript](./30.md) | Типизация и масштабирование больших проектов |
| 2 | [Первая программа на Node.js](./262.md) → [Express](./263.md) | Консоль, npm, `http`, REST API |
| 2a | [Точка входа в Node.js](./48.md) | `require.main`, ESM и прямой `node file.js` |
| 3 | [React](./272.md) · [галерея компонентов](/lab/Примеры/1146) · [Vue](./282.md) · [Next](./2731.md) | UI |
| 3b | [Fullstack](./264.md) | API + фронт, CORS |
| 4 | [Angular](./292.md) | Крупные SPA (по желанию) |
| 5 | [Electron + React](/encyclopedia/4-code-dev/4-11-desktopnye-prilozheniya/118) | Десктоп |
| 5a | [TypeScript](./30.md) → [Практикум](/encyclopedia/9-spinoff/9-04-razrabotka-igr/praktikum-razrabotki-igr/intro) | Игры на TS (Canvas, онлайн-карты) |

В конце раздела — [чек-лист самопроверки](./999.md).

<div class="callout callout--tip">
  <div class="callout-title">Маршрут: от Node до fullstack</div>

  <div class="callout-body">
  Последовательность «сервер → браузер → сборка»: <a href="./262.md">262</a> (Node до Express) → <a href="./18.md">типы и Date</a> → <a href="./21.md">async и fetch</a> → <a href="/lab/Примеры/1145">Fetch / axios — типовые запросы</a> → <a href="./102.md">DOM</a> → <a href="./47.md">Canvas</a> → <a href="/lab/Примеры/1114">p5.js — фигуры</a> → <a href="./25.md#сборка-для-браузера--webpack-и-vite">Webpack / Vite</a> → <a href="./263.md">Express</a> → <a href="./264.md">Fullstack</a>.
</div>
</div>

<div class="callout callout--info">
  <div class="callout-title">Инструменты для старта</div>

  <div class="callout-body">
  **VS Code**, встроенный терминал, **Live Server** и **Emmet** для HTML/CSS — [DevTools в браузере — справочник](/encyclopedia/4-code-dev/4-14-razrabotka-i-otladka/1116), общие принципы отладки — [Отладка](/encyclopedia/4-code-dev/4-14-razrabotka-i-otladka/111), IDE — [редакторы](/encyclopedia/4-code-dev/4-04-proekt-i-freymvorki/10).

  Разметка — [HTML](/encyclopedia/3-data-markup/3-09-html/intro), стили — [CSS](/encyclopedia/3-data-markup/3-10-css/intro).

  Целый `index.html` с разбором тегов — [HTML-страницы целиком](/lab/Примеры/1153).

  Макеты до первого скрипта — [HTML + CSS — готовые макеты](/lab/Примеры/110), Tailwind — [Tailwind — готовые блоки](/lab/Примеры/1117), анимации — [CSS-анимации — готовые эффекты](/lab/Примеры/1116).
</div>
</div>

---

### Частые ошибки при старте

| Ошибка | Что делать |
|--------|------------|
| Прыжки между языками | Закройте одну "первую программу", потом сравнивайте |
| Код без запуска | Выполните пример локально |
| Сразу большой фреймворк | Сначала база раздела, потом REST/UI |

---

### Что попробовать

1. Шаг 1 из таблицы.
2. Три непонятных термина — найдите статьи в оглавлении раздела.
3. Другой язык — только после своей рабочей первой программы.

---

<BeginnerWebStackHub defaultTab="javascript" />

<FirstProgramPlay language="javascript" />

<WebPageLayersPlay />

<DocCardList />

{/* sidebar-collections */}

---

## В подборках

Статья входит в тематические маршруты из меню **Подборки** и блока "С чего начать?" на главной. Соседние шаги того же маршрута:

**База программиста** — [Low-code и No-code платформы](/encyclopedia/8-infra-security/8-02-low-code-no-code/1), [Python — о разделе](/encyclopedia/5-languages/5-02-python/intro), [Автоматическое управление памятью](/encyclopedia/4-code-dev/4-15-sborka-musora/1), [Java — о разделе](/encyclopedia/5-languages/5-03-java/intro), [Разработка и отладка — о разделе](/encyclopedia/4-code-dev/4-14-razrabotka-i-otladka/intro), [Документация и инструменты Java (Microsoft)](/encyclopedia/5-languages/5-03-java/294).

**Веб-разработка** — [HTML — о разделе](/encyclopedia/3-data-markup/3-09-html/intro), [CSS — о разделе](/encyclopedia/3-data-markup/3-10-css/intro), [Веб-браузеры](/encyclopedia/1-basics/1-11-soft-ryadovogo-polzovatelya/3), [PHP — о разделе](/encyclopedia/5-languages/5-07-php/intro), [Веб-сайты и веб-приложения — о разделе](/encyclopedia/2-system-network/2-04-kak-rabotayut-sayty-i-veb-sayty/intro), [ASP.NET - веб-платформа Microsoft](/encyclopedia/5-languages/5-04-platforma-dotnet/172).

**Бэкенд и серверная разработка** — [SQL — о разделе](/encyclopedia/3-data-markup/3-07-sql/intro) ([SQLite](/encyclopedia/3-data-markup/3-07-sql/887), [PostgreSQL](/encyclopedia/3-data-markup/3-07-sql/888), [MySQL](/encyclopedia/3-data-markup/3-07-sql/889), [SQL Server](/encyclopedia/3-data-markup/3-07-sql/890)), [Python — о разделе](/encyclopedia/5-languages/5-02-python/intro), [Контейнеризация и оркестрация — о разделе](/encyclopedia/8-infra-security/8-06-konteynerizatsiya-i-orkestratsiya/intro), [Java — о разделе](/encyclopedia/5-languages/5-03-java/intro), [Микросервисы и интеграция — о разделе](/encyclopedia/8-infra-security/8-05-mikroservisy-i-integratsiya/intro), [Платформа .NET — о разделе](/encyclopedia/5-languages/5-04-platforma-dotnet/intro).

{/* /sidebar-collections */}

---
