---
title: "Visual Basic — о разделе"
description: "Раздел про Visual Basic — от классического VB 6.0 и VBA в Microsoft Office до VB.NET на платформе .NET."
sidebar_label: "Visual Basic — о разделе"
related:
  - title: "Pascal — о разделе"
    doc: encyclopedia/5-languages/5-16-starye-yazyki/Pascal/intro
  - title: "Ассемблер — о разделе"
    doc: encyclopedia/5-languages/5-16-starye-yazyki/assembler/intro
  - title: "Lisp — о разделе"
    doc: encyclopedia/5-languages/5-16-starye-yazyki/Lisp/intro
  - title: "Си — о разделе"
    doc: encyclopedia/5-languages/5-16-starye-yazyki/c-language/intro
---

import DocCardList from '@theme/DocCardList';

# О разделе

Раздел про **Visual Basic** — от классического VB 6.0 и **VBA** в Microsoft Office до **VB.NET** на платформе .NET.

**Для кого:** новички (синтаксис, типы, циклы, события), разработчики legacy (WinForms, Access, Excel-макросы), те, кто сопровождает корпоративные Windows-приложения.

---

### С чего начать

| Шаг | Материал | Зачем |
|-----|----------|-------|
| 1 | [История](./1.md) | VB6 → VB.NET, VBA |
| 2 | [Основы](./2.md) | `Sub`, `Dim`, модули |
| 3 | [Типы](./4.md) | Примитивы, `String` |
| 4 | [Value и reference](./9.md) | `Structure` и `Class` |
| 5 | [Управление](./5.md) | `If`, циклы |
| 6 | [Процедуры и события](./6.md) | `Handles` |
| 7 | [Первая программа](./7.md) | VS Community |
| 8 | [Консоль, файлы](./10.md) | `List(Of T)` |
| 9 | [LINQ](./11.md) | Лямбды, запросы |
| 10 | [VBA в Excel](./8.md) | Макросы в таблицах |
| 11 | [VBScript](./12.md) | `.vbs`, WScript |
| 12 | [VBA Word и Access](./13.md) | Документы и БД |
| 13 | [Справочник](./711.md) | WinForms, VBA |

Завершение: [Итоги](./998.md), [Чек-лист](./999.md).

---

### Маршрут VBScript и Office

Сценарии Windows и макросы Office собраны в этом разделе (в [базовой информатике](/encyclopedia/1-basics/1-035-bazovaya-informatika/4) — только алгоритмы и обзор языков):

| Тема | Статья |
|------|--------|
| VBScript, WScript, `MsgBox`, циклы | [12 — VBScript](./12.md) |
| VBA Excel | [8 — VBA в Excel](./8.md) |
| VBA Word, Access | [13 — VBA Word и Access](./13.md) |
| Алгоритмы и классификация языков | [базовая информатика, гл. 4](/encyclopedia/1-basics/1-035-bazovaya-informatika/4) |
| VB.NET / Visual Studio | [7 — первая программа](./7.md) |

---

### Частые ошибки при старте

| Ошибка | Что делать |
|--------|------------|
| Синтаксис VB6 в .NET | `File.ReadAllText` вместо `Open` |
| `Option Strict Off` | Включите `On` |
| UI из фонового потока | `Invoke` / `Async` |

---

### Что попробовать

1. [Первая программа](./7.md) — консоль, затем кнопка WinForms.
2. [VBA](./8.md): `MsgBox` и `Range("A1")`.
3. [Чек-лист](./999.md).

---

### Как работать с разделом, чтобы не "утонуть"

Если читать подряд тяжело, используйте один из трёх маршрутов:

| Цель | Маршрут |
|------|---------|
| Быстро написать рабочее приложение | [7](./7.md) → [5](./5.md) → [6](./6.md) → [10](./10.md) |
| Понять архитектуру и различия поколений | [1](./1.md) → [2](./2.md) → [3](./3.md) → [9](./9.md) |
| Автоматизировать Excel | [8](./8.md) → [6](./6.md) → [711](./711.md) |
| VBScript и Office (классический курс) | [12](./12.md) → [8](./8.md) → [13](./13.md) → [7](./7.md) |

Полезный принцип: каждый блок закреплять мини-практикой, а не только чтением.

---

### Мини-словарь перед стартом

- **CLR** — среда выполнения .NET, где исполняется VB.NET-код.
- **WinForms** — классический GUI-фреймворк под Windows.
- **COM** — старый компонентный механизм, важен для VB6/VBA и Interop.
- **Option Strict** — флаг строгости типов в VB.NET.
- **Handles** — привязка обработчика к событию элемента UI.

**Практика:** для нового обучения удобнее **VB.NET** и **Visual Studio Community** (консоль или Windows Forms). VB 6.0 — только если нужен исторический контекст или сопровождение старых EXE.

**Важно:** **VB6**, **VBA** и **VB.NET** — разные ветви одного семейства; синтаксис похож, но среда выполнения, типы и инструменты различаются. В учебных главах по умолчанию имеется в виду **VB.NET**, если не указано иное.

### От BASIC к Visual Basic

**BASIC** (Beginner's All-purpose Symbolic Instruction Code — «универсальный символьный код инструкций для начинающих») создан **1 мая 1964 года** в [Дартмутском колледже](https://ru.wikipedia.org/wiki/%D0%94%D0%B0%D1%80%D1%82%D0%BC%D1%83%D1%82%D1%81%D0%BA%D0%B8%D0%B9_%D0%BA%D0%BE%D0%BB%D0%BB%D0%B5%D0%B4%D0%B6) **Джоном Кемени** и **Томасом Курцем** для студентов без специальной математической подготовки: интерактивная работа в режиме разделения времени, простой синтаксис, нумерация строк. Язык опирался на идеи **Fortran II** и **ALGOL 60**; первую реализацию (Dartmouth BASIC) изначально **компилировали**, а не только интерпретировали.

На микрокомпьютерах 1970-х BASIC стал «языком по умолчанию»; **Microsoft** получила первый коммерческий успех с **Altair BASIC** (1975). Для IBM PC в ПЗУ шёл ROM BASIC; отдельно продавались **BASICA**, **GW-BASIC**, затем **QuickBASIC** и **QBasic** — прямые предшественники синтаксиса классического VB.

**Visual Basic** (1991) связал Basic с **графическим интерфейсом Windows**: идею визуального конструктора форм и событийной модели разработал **Алан Купер**; прототип назывался **Tripod** (иногда **Ruby**). С **VB.NET** (2002) язык стал полноценным членом **.NET** на **CLR**; обратной совместимости с VB6 нет — миграция через мастер конвертации и ручную доработку.

| | VB6 / VBA | VB.NET |
|---|-----------|--------|
| Среда | `MSVBVM60.DLL`, Office | CLR (.NET Framework / .NET 5+) |
| Типизация | `Variant`, слабее | `Object` + `Option Strict` |
| GUI | Формы VB6, VBA UserForm | WinForms, WPF |
| Ошибки | `On Error GoTo` | `Try…Catch…Finally` |
| Диалекты | **VBA** (Office), **VBScript** (Windows, IE, Outlook) | тот же синтаксис, другая среда |
| Статус | legacy, VBA в Office | поддержка платформы; **новые возможности языка не развиваются** (с 2020) |

> **Сначала:** [Что такое код и как он работает](/encyclopedia/4-code-dev/4-02-chto-takoe-kod-i-kak-on-rabotaet/1) — общая база: **код**, **блок кода**, **компиляция** и **интерпретация**, **исходный**, **байт-** и **машинный код**; в этом разделе — синтаксис и особенности языка.

<div class="callout callout--info">
  <div class="callout-title">Политика Microsoft (2020)</div>

  <div class="callout-body">
  **11 марта 2020 года** компания объявила: Visual Basic останется в **.NET 5+** и дальше будет **поддерживаться**, но **новые возможности языка добавляться не будут** — развитие идёт через платформу .NET и библиотеки, доступные и из VB.NET. Подробнее — в [истории](./1.md#современное-состояние-vbnet).
  </div>
</div>

---

<DocCardList />

{/* sidebar-collections */}

---

## В подборках

Статья входит в [тематические подборки](/about/collections) и блок «С чего начать?» на [главной](/). Соседние шаги того же маршрута:

**Бэкенд и серверная разработка** — [Pascal — о разделе](/encyclopedia/5-languages/5-16-starye-yazyki/Pascal/intro), [Ассемблер — о разделе](/encyclopedia/5-languages/5-16-starye-yazyki/assembler/intro), [Lisp — о разделе](/encyclopedia/5-languages/5-16-starye-yazyki/Lisp/intro), [Си — о разделе](/encyclopedia/5-languages/5-16-starye-yazyki/c-language/intro), [Fortran — о разделе](/encyclopedia/5-languages/5-16-starye-yazyki/Fortran/intro), [Haskell — о разделе](/encyclopedia/5-languages/5-17-haskell/intro).

{/* /sidebar-collections */}

---
