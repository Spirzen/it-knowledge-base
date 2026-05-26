---
title: Visual Basic — о разделе
description: "Раздел про Visual Basic — от классического VB 6.0 и VBA в Microsoft Office до VB.NET на платформе .NET."
sidebar_label: Visual Basic — о разделе
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

### С чего начать (рекомендуемый маршрут)

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
| 10 | [VBA в Excel](./8.md) | Макросы |
| 11 | [Справочник](./711.md) | WinForms |

Завершение: [Итоги](./998.md), [Чек-лист](./999.md).

### Частые ошибки при старте

| Ошибка | Что делать |
|--------|------------|
| Синтаксис VB6 в .NET | `File.ReadAllText` вместо `Open` |
| `Option Strict Off` | Включите `On` |
| UI из фонового потока | `Invoke` / `Async` |

### Что попробовать

1. [Первая программа](./7.md) — консоль, затем кнопка WinForms.
2. [VBA](./8.md): `MsgBox` и `Range("A1")`.
3. [Чек-лист](./999.md).

**Практика:** для нового обучения удобнее **VB.NET** и **Visual Studio Community** (консоль или Windows Forms). VB 6.0 — только если нужен исторический контекст или сопровождение старых EXE.

**Важно:** **VB6**, **VBA** и **VB.NET** — разные ветви одного семейства; синтаксис похож, но среда выполнения, типы и инструменты различаются. В учебных главах по умолчанию имеется в виду **VB.NET**, если не указано иное.

| | VB6 / VBA | VB.NET |
|---|-----------|--------|
| Среда | `MSVBVM60.DLL`, Office | CLR (.NET Framework / .NET 5+) |
| Типизация | `Variant`, слабее | `Object` + `Option Strict` |
| GUI | Формы VB6, VBA UserForm | WinForms, WPF |
| Ошибки | `On Error GoTo` | `Try…Catch…Finally` |
| Статус | legacy, VBA в Office | поддержка платформы, язык без новых фич |

> **Сначала:** [Что такое код и как он работает](/encyclopedia/4-code-dev/4-02-chto-takoe-kod-i-kak-on-rabotaet/1) — общая база: **код**, **блок кода**, **компиляция** и **интерпретация**, **исходный**, **байт-** и **машинный код**; в этом разделе — синтаксис и особенности языка.

### Зачем этот раздел

Подборка по **Visual Basic** в энциклопедии: синтаксис, первая программа и смежные темы. Пройдите один маршрут до конца, не смешивая несколько языков на старте.

---

### С чего начать

| Шаг | Материал | Зачем |
|-----|----------|-------|
| 1 | [Первая программа](./7.md) | Запуск и синтаксис |

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

<DocCardList />

{/* sidebar-collections */}
## В подборках

Статья входит в тематические маршруты из меню **Подборки** и блока "С чего начать?" на главной. Соседние шаги того же маршрута:

**Бэкенд и серверная разработка** — [Pascal — о разделе](/encyclopedia/5-languages/5-16-starye-yazyki/Pascal/intro), [Ассемблер — о разделе](/encyclopedia/5-languages/5-16-starye-yazyki/assembler/intro), [Lisp — о разделе](/encyclopedia/5-languages/5-16-starye-yazyki/Lisp/intro), [Си — о разделе](/encyclopedia/5-languages/5-16-starye-yazyki/c-language/intro), [Fortran — о разделе](/encyclopedia/5-languages/5-16-starye-yazyki/Fortran/intro), [Haskell — о разделе](/encyclopedia/5-languages/5-17-haskell/intro).

{/* /sidebar-collections */}

---
