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
| **React, Vue, Angular, Ember, Ext JS** | UI-фреймворки и библиотеки | [React](./27.md), [Vue](./28.md), [Angular](./29.md), [Экосистема](./25.md), [Ext JS](./31.md) |

> **Сначала:** [Что такое код и как он работает](/encyclopedia/4-code-dev/4-02-chto-takoe-kod-i-kak-on-rabotaet/1) — общая база: **код**, **блок кода**, **компиляция** и **интерпретация**, **исходный**, **байт-** и **машинный код**; в этом разделе — синтаксис и особенности языка.

<div class="callout callout--info">
  <div class="callout-title">Event loop, Worker и async</div>

  <div class="callout-body">
  В браузере и Node.js основной поток один; параллелизм — через <a href="/encyclopedia/4-code-dev/4-05-asinhronnost/12">асинхронность</a> и <a href="/encyclopedia/5-languages/5-01-javascript/36">Web Workers</a>. Теория — <a href="/encyclopedia/4-code-dev/4-05-asinhronnost/1">процессы и потоки</a>; в Node — <code>worker_threads</code>, <code>child_process</code>.
</div>
</div>

В [основах JavaScript](./1.md) модель Event Loop и асинхронность сначала разбираются **псевдокодом**, затем — на JS/Node.

---

### Главы по API и расширению возможностей JavaScript

Если вы хотите углубиться именно в тему API, интеграций и расширений, идите по этому маршруту:

| Шаг | Материал | Что изучаете |
|-----|----------|---------------|
| 1 | [Основы JavaScript](./1.md) | среда выполнения, Web API, Event Loop |
| 2 | [Асинхронное программирование](./21.md) | Promise, `async/await`, `fetch`, очереди задач |
| 3 | [Работа с HTML](./102.md) + [События](./23.md) | доступ к DOM, `addEventListener`, реакция на действия пользователя |
| 4 | [BOM](./41.md) | `window`, `location`, `history`, `navigator` |
| 5 | [Практика](./32.md) | рабочие сниппеты: URL-параметры, `fetch`, буфер обмена |
| 6 | [Web Share API](./44.md) | системное окно «Поделиться» через `navigator.share` |
| 7 | [Notification API](./46.md) | разрешения и нативные уведомления браузера |
| 8 | [Первая программа на React](./272.md) | подключение API в компонентном UI |

Этот маршрут даёт полноценный переход от нативных API браузера к прикладным интеграциям в реальных интерфейсах.

---

### Важно про TypeScript

Если идёте в сторону крупных frontend/backend-проектов, добавьте в маршрут [TypeScript](./30.md). Для ветки 7.x в экосистеме TypeScript анонсирован нативный компилятор на Go: это ориентировано на более быструю проверку типов и сборку в больших кодовых базах, особенно в CI/CD.

Практический вывод: при обновлении toolchain проверяйте официальные release notes TypeScript и совместимость вашей инфраструктуры.

---

### С чего начать

| Шаг | Материал | Зачем |
|-----|----------|-------|
| 1 | [Основы JavaScript](./1.md) | Синтаксис, браузер |
| 1b | [TypeScript](./30.md) | Типизация и масштабирование больших проектов |
| 2 | [Node API](./262.md) → [Express](./263.md) | Серверный JS |
| 3 | [React](./272.md) · [Vue](./282.md) · [Next](./2731.md) | UI |
| 3b | [Fullstack](./264.md) | API + фронт, CORS |
| 4 | [Angular](./292.md) | Крупные SPA (по желанию) |
| 5 | [Electron + React](/encyclopedia/4-code-dev/4-11-desktopnye-prilozheniya/118) | Десктоп |

В конце раздела — [чек-лист самопроверки](./999.md).

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
