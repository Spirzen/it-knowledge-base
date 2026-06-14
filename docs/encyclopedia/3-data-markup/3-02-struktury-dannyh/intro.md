---
title: Структуры данных — о разделе
description: >-
  Массивы, списки, стеки, очереди, деревья, хеш-таблицы — теория и реализация;
  маршрут раздела "Структуры данных" в энциклопедии Вселенная IT.
sidebar_label: Структуры данных — о разделе
related:
  - title: "Продвинутые операции с данными — о разделе"
    doc: encyclopedia/3-data-markup/3-01-prodvinutye-operatsii-s-dannymi/intro
  - title: "Алгоритмы — о разделе"
    doc: encyclopedia/4-code-dev/4-01-algoritmy/intro
  - title: "Алгоритмы на Python — ЕГЭ и олимпиадка"
    doc: lab/examples/1122
  - title: "Big-O — шпаргалка с примерами"
    doc: lab/examples/1128
  - title: "Базовые операции с данными — о разделе"
    doc: encyclopedia/1-basics/1-10-bazovye-operatsii-s-dannymi/intro
  - title: "Основы баз данных — о разделе"
    doc: encyclopedia/3-data-markup/3-05-osnovy-baz-dannyh/intro
  - title: "Данные и информация — о разделе"
    doc: encyclopedia/1-basics/1-09-dannye-i-informatsiya/intro
  - title: "SQL — о разделе"
    doc: encyclopedia/3-data-markup/3-07-sql/intro
  - title: "NoSQL — о разделе"
    doc: encyclopedia/3-data-markup/3-06-nosql/intro
---

import DocCardList from '@theme/DocCardList';

# О разделе

Раздел про **способы хранения и доступа к данным в памяти** — массив, связный список, стек, очередь, дерево, хеш-таблица — когда что выбирать и какая сложность операций. Таблица `O(·)` по операциям — в [реализации](./2.md); теория классов сложности — в [Нотация Большое O](/encyclopedia/4-code-dev/4-01-algoritmy/311); **почему `list` и `set` в Python дают разную сложность** — [Lab / Big-O — 1128](/lab/Примеры/1128#ловушки-python). Это опора для алгоритмов и для понимания коллекций в языках программирования.

Идеи даются **сначала на русском псевдокоде** (`АЛГОРИТМ`, `для`, `вернуть`) — см. [алгоритмический справочник](./2.md#алгоритмический-справочник-псевдокод) в главе про реализацию; затем — синтаксис `List` / `dict` / `Map` в разделах языков.

> **Сначала (общая база):** [Данные и информация](/encyclopedia/1-basics/1-09-dannye-i-informatsiya/intro) · [Алгоритмы](/encyclopedia/4-code-dev/4-01-algoritmy/intro)

---

## Рекомендуемый порядок

| Шаг | Статья | Зачем |
|-----|--------|--------|
| 1 | [Структуры данных](./1.md) | обзор, аналогии, таблицы |
| 2 | [Реализация и O(·)](./2.md) | массив, список, стек, хеш; §7 — B- и B⁺-дерево; §10 — skip list; [§11.2 — индексы СУБД](./2.md#112-subd-indeksy-i-hranenie) (хеш, bitmap, LSM, инвертированный); обзор для БД — [пять структур индексов](/encyclopedia/3-data-markup/3-05-osnovy-baz-dannyh/3.md#pyat-osnovnyh-struktur-indeksov) |
| 3 | [История](./11.md) · [Геометрия](./12.md) | по желанию |
| 4 | [Итоги](./3.md) · [чек-лист](./4.md) | закрепление |

Дальше — коллекции в [языках](/encyclopedia/5-languages/intro) (таблица ниже). Затем [продвинутые операции с данными](/encyclopedia/3-data-markup/3-01-prodvinutye-operatsii-s-dannymi/intro). Для **задач ЕГЭ и олимпиад на Python** (`list`, `dict`, `set` в коде решений) — [Lab / 1122](/lab/Примеры/1122#3-словари-множества-и-частоты). На **Pascal** — массив, поиск, префиксы: [Lab / 1140](/lab/Примеры/1140#1-массивы).

---

## Коллекции в разделах языков

| Язык | Статья | Что внутри |
|------|--------|------------|
| Python | [Коллекции](/encyclopedia/5-languages/5-02-python/22) | `list`, `tuple`, `dict`, `set` |
| Java | [Коллекции](/encyclopedia/5-languages/5-03-java/24) | `List`, `Set`, `Map`, `Queue` |
| C# | [Коллекции](/encyclopedia/5-languages/5-05-csharp/28) | `List`, `Dictionary`, `HashSet` |
| JavaScript | [Массивы](/encyclopedia/5-languages/5-01-javascript/211) | `Array`, `Map`, `Set` |
| Kotlin | [Коллекции](/encyclopedia/5-languages/5-09-kotlin/225) | `List`, `Map`, `Sequence` |
| Go | [Типы, slice и map](/encyclopedia/5-languages/5-10-go/16) | `slice`, `map` |
| C++ | [Работа с данными](/encyclopedia/5-languages/5-06-cpp/24) | STL: `vector`, `map`, `unordered_map` |
| Rust | [Типы и коллекции](/encyclopedia/5-languages/5-13-rust/13) | `Vec`, `HashMap` |
| Swift | [Данные и коллекции](/encyclopedia/5-languages/5-14-swift/16) | `Array`, `Dictionary`, `Set` |
| PHP | [Типы данных](/encyclopedia/5-languages/5-07-php/15) | `array` как список и словарь |
| Ruby | [Типы](/encyclopedia/5-languages/5-11-ruby/13) | `Array`, `Hash` |
| Pascal | [Типы данных](/encyclopedia/5-languages/5-16-starye-yazyki/Pascal/4) | `array`, `record`, `set`; практика — [Lab / 1140](/lab/Примеры/1140#1-массивы) |

<DocCardList />

{/* sidebar-collections */}

---

## В подборках

Статья входит в [тематические подборки](/about/collections) и блок "С чего начать?" на [главной](/). Соседние шаги того же маршрута:

**Базы данных** — [Базовые операции с данными — о разделе](/encyclopedia/1-basics/1-10-bazovye-operatsii-s-dannymi/intro), [Основы баз данных — о разделе](/encyclopedia/3-data-markup/3-05-osnovy-baz-dannyh/intro), [Данные и информация — о разделе](/encyclopedia/1-basics/1-09-dannye-i-informatsiya/intro), [SQL — о разделе](/encyclopedia/3-data-markup/3-07-sql/intro), [NoSQL — о разделе](/encyclopedia/3-data-markup/3-06-nosql/intro), [Управление реляционными СУБД — о разделе](/encyclopedia/3-data-markup/3-08-upravlenie-rsubd/intro).

**Аналитика данных** — [Данные и информация — о разделе](/encyclopedia/1-basics/1-09-dannye-i-informatsiya/intro), [Основы баз данных — о разделе](/encyclopedia/3-data-markup/3-05-osnovy-baz-dannyh/intro), [SQL — о разделе](/encyclopedia/3-data-markup/3-07-sql/intro), [NoSQL — о разделе](/encyclopedia/3-data-markup/3-06-nosql/intro), [Продвинутые операции с данными — о разделе](/encyclopedia/3-data-markup/3-01-prodvinutye-operatsii-s-dannymi/intro), [Анализ данных — о разделе](/encyclopedia/3-data-markup/3-11-analiz-dannyh/intro).

{/* /sidebar-collections */}

---
