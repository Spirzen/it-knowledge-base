---
title: "TypeScript — о разделе"
description: "TypeScript как отдельный язык: основы, экосистема, типизация, архитектура компиляции, практика с React и Node.js."
sidebar_label: "TypeScript — о разделе"
related:
  - title: "JavaScript — о разделе"
    doc: encyclopedia/5-languages/5-01-javascript/intro
  - title: "Python — о разделе"
    doc: encyclopedia/5-languages/5-02-python/intro
  - title: "C# — о разделе"
    doc: encyclopedia/5-languages/5-05-csharp/intro
  - title: "Что такое код"
    doc: encyclopedia/4-code-dev/4-02-chto-takoe-kod-i-kak-on-rabotaet/1
  - title: "React — компоненты-рецепты"
    doc: lab/examples/1146
  - title: "curl / fetch — API-запросы"
    doc: lab/examples/1133
---

import DocCardList from '@theme/DocCardList';

# О разделе

**TypeScript** — JavaScript с **статической проверкой типов**. Исходники — файлы `.ts`; компилятор [`tsc`](./15.md) проверяет контракты и выдаёт обычный JavaScript. В runtime работает только JS (браузер, Node.js, Deno, Bun); аннотации типов в сборку не попадают.

Это отдельный учебный раздел: от [типов](./10.md) и [первой программы](./4.md) до [TypeScript и React](./21.md), [Node.js](./22.md) и [паттернов](./28.md). Краткий обзор внутри курса JavaScript — [статья 30](/encyclopedia/5-languages/5-01-javascript/30); таблицы и синтаксис — [справочник 301](/encyclopedia/5-languages/5-01-javascript/301).

> **Сначала:** [Что такое код и как он работает](/encyclopedia/4-code-dev/4-02-chto-takoe-kod-i-kak-on-rabotaet/1) — компиляция, интерпретация, исходный код. Для сравнения динамической типизации — [типы в JavaScript](/encyclopedia/5-languages/5-01-javascript/18). Если статическая типизация знакома по C# — полезно свериться с [типами в C#](/encyclopedia/5-languages/5-05-csharp/20).

<div class="callout callout--info">
  <div class="callout-title">TypeScript ≠ отдельная среда выполнения</div>

  <div class="callout-body">
  TS не заменяет JavaScript в браузере. Аннотации типов исчезают при компиляции — в <code>dist/</code> остаётся JS. Подробнее — <a href="./15.md">архитектура компиляции</a> и <a href="./4.md">первая программа</a>.
</div>
</div>

<div class="callout callout--info">
  <div class="callout-title">Связь с JavaScript</div>

  <div class="callout-body">
  Изучайте <a href="/encyclopedia/5-languages/5-01-javascript/intro">JavaScript</a> как базу (синтаксис, Promise, модули), затем переходите сюда за типами, <code>tsconfig</code> и практикой крупных проектов. Event loop и async в JS — <a href="/encyclopedia/5-languages/5-01-javascript/21">асинхронность JS</a>; типизация Promise — <a href="./17.md">async в TypeScript</a>.
</div>
</div>

---

## Карта ключевых тем

| Тема | Статья |
|------|--------|
| Что такое TypeScript, надмножество JS | [intro](./intro.md), [история](./7.md), [типы §введение](./10.md) |
| Проблемы JavaScript и зачем TS | [история](./7.md), [типы §зачем](./10.md) |
| Статическая типизация, типобезопасность | [Типы и типизация](./10.md), [рекомендации](./6.md) |
| Утиная vs структурная типизация | [Типы и типизация](./10.md), [классы](./18.md) |
| Проектирование типов, LSP (Лисков) | [типы §проектирование](./10.md), [Паттерны](./28.md) |
| Типы и значения, примитивы, enum, tuple | [Типы и типизация](./10.md), [коллекции](./19.md) |
| Обязательны ли аннотации `let x: T` | [переменные](./11.md) |
| Проверка только на этапе TS | [Компиляция](./15.md) |
| Type-driven development | [рекомендации](./6.md), [функции](./14.md) |
| Компилятор, флаги, Go 7.x, TypeScript Server | [Компиляция](./15.md), [TypeScript Server](./16.md) |
| React / Node.js | [21](./21.md), [22](./22.md) |
| Дженерики, Omit, keyof, literal union, связанный выбор | [дженерики](./24.md), [Типы и типизация](./10.md) |
| Exclude / Extract, сужение по группам (`Compat`) | [типы §utility](./10.md#utility-types), [24 §Compat](./24.md#связанные-generic-выбор-по-группе-compat) |
| Mapped types, `PayloadMap[E]`, webhooks | [24 §сопоставленные](./24.md#сопоставленные-типы-и-обобщённая-индексация), [28](./28.md) |
| `tsx`, сборка TS для GitHub Pages | [4](./4.md), [3](./3.md) |
| Декораторы, примеси, паттерны | [23](./23.md), [28](./28.md) |
| Миграция, monorepo, DefinitelyTyped | [6](./6.md), [3](./3.md), [9](./9.md) |
| Async, генераторы, TypeORM, практикум | [17](./17.md), [25](./25.md), [26](./26.md), [5](./5.md) |

Полная нумерованная карта блоков — в [1.md](./1.md). Соответствие **18 разделам справочника 301** (основы типизации … расширение TS) — в [индексе справочника](./2.md).

---

## С чего начать

| Шаг | Материал | Назначение |
|-----|----------|-------|
| 1 | [Основы и карта раздела](./1.md) | Полный маршрут по темам |
| 2 | [Первая программа](./4.md) | `npm`, `tsc`, первый `dist/` |
| 3 | [Типы и типизация](./10.md) | Ядро языка — контракты данных |
| 4 | [Рекомендации](./6.md) | `strict`, `unknown`, CI |
| 5 | [Простые приложения](./5.md) | Мини-проекты |
| 6 | [Async](./17.md) | `Promise<T>`, состояния UI |
| 7 | [TypeScript и React](./21.md) или [Node.js](./22.md) | Прикладной стек |

---

## Что входит в раздел

Раздел проходит путь от [синтаксиса](./8.md) и [типов](./10.md) через [функции](./14.md), [классы](./18.md) и [коллекции](./19.md) к [компиляции](./15.md), [`tsserver`](./16.md) и [экосистеме](./3.md). Прикладной блок — [TypeScript и React](./21.md), [Node.js](./22.md), [TypeORM](./26.md), [Паттерны](./28.md) и [Обработка ошибок](./27.md). Навигация по таблицам — [индекс](./2.md) и [справочник 301](/encyclopedia/5-languages/5-01-javascript/301); в конце — [итоги](./998.md) и [чек-лист](./999.md).

---

## Где применяют TypeScript

| Область | Примеры |
|---------|---------|
| Frontend | React, Vue, Angular, Next.js, SvelteKit |
| Backend | Node.js, NestJS, Express + TS |
| Mobile / desktop | React Native, Ionic, Electron |
| Инструменты | VS Code, часть CLI и сборщиков |

---

## Частые ошибки при старте

| Ошибка | Что делать |
|--------|------------|
| Путать TS с отдельным runtime | TS компилируется в JS — см. [15](./15.md) |
| Игнорировать ошибки компилятора | Исправлять; не отключать `strict` без причины — [6](./6.md) |
| Везде `any` | `unknown` + проверки; типы API в `types/` — [10](./10.md) |
| Учить TS без JS | Сначала база [JavaScript](/encyclopedia/5-languages/5-01-javascript/intro) |
| Дублировать справочник в голове | Учёба — статьи раздела; таблицы — [301](/encyclopedia/5-languages/5-01-javascript/301) |

---

<DocCardList />
