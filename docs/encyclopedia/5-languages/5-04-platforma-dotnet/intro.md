---
title: Платформа .NET — о разделе
description: "Раздел описывает платформу .NET: CLR, сборки, развёртывание, экосистему приложений и языки (C#, F#, VB)."
sidebar_label: Платформа .NET — о разделе
related:
  - title: "Java — о разделе"
    doc: encyclopedia/5-languages/5-03-java/intro
  - title: "C# — о разделе"
    doc: encyclopedia/5-languages/5-05-csharp/intro
  - title: "Python — о разделе"
    doc: encyclopedia/5-languages/5-02-python/intro
  - title: "C++ — о разделе"
    doc: encyclopedia/5-languages/5-06-cpp/intro
  - title: "История платформы .NET"
    doc: encyclopedia/5-languages/5-04-platforma-dotnet/11
  - title: "Версии C# и .NET — справочная таблица"
    doc: encyclopedia/5-languages/5-05-csharp/48
---

import DocCardList from '@theme/DocCardList';

# О разделе

Раздел описывает **платформу .NET**: CLR, сборки, развёртывание, экосистему приложений и языки (C#, F#, VB).

> **Сначала:** [Что такое код и как он работает](/encyclopedia/4-code-dev/4-02-chto-takoe-kod-i-kak-on-rabotaet/1) — общая база: **код**, **блок кода**, **компиляция** и **интерпретация**, **исходный**, **байт-** и **машинный код**; в этом разделе — синтаксис и особенности языка.

В [обзоре платформы](./1.md) цепочка CIL → CLR → JIT по возможности показана **псевдокодом** до деталей CLI.

---

## С чего начать (.NET)

1. [Платформа .NET](./1.md) — CLR, CIL, BCL, развёртывание.
2. [Архитектурные особенности .NET](./12.md) — CTS, CLS, PAL, эволюция версий.
3. [История платформы .NET](./11.md) — хронология от NGWS до .NET 10.
4. [Версии C# и .NET — таблица](../5-05-csharp/48.md) — LTS/STS и соответствие C# ↔ .NET ↔ Visual Studio.

---

## F# — с чего начать

1. [F# в экосистеме .NET](./18) — обзор языка и парадигм.
2. [Первая программа на F#](./182) — консольный проект и `match`.
3. [Интерактивная работа (FSI)](./185) — REPL и скрипты `.fsx`.
4. [Сопоставление с образцом — практикум](./186) · [Императивные конструкции](./187).
5. [ООП в разделе "Код"](/encyclopedia/4-code-dev/4-08-oop/intro) (база) · [ООП для взаимодействия с .NET](./188) · [Асинхронность: async, task и агенты](./189).
6. [Структура F#-проекта](./190) — порядок файлов и solution.
7. [Справочник по F#](./181) · [Справочник F# (Learn)](./184).

---

## Справочники

- [Вопросы на собеседование .NET и C#](../5-05-csharp/474) — шпаргалка с отсылками к материалам платформы и языка.
- [Справочник .NET API](./183) — полный каталог BCL (.NET 10, .NET Framework 4.8 / 4.8.1) с навигацией по Microsoft Learn.
- [Справочник по F#](./181) · [Справочник F# (Learn)](./184) · [ADO.NET](./171) · [EF Core (C#)](../5-05-csharp/441) · [ASP.NET](./172)
- Практика СУБД из .NET: [SQL Server](/encyclopedia/3-data-markup/3-07-sql/890), [PostgreSQL](/encyclopedia/3-data-markup/3-07-sql/888), [SQLite](/encyclopedia/3-data-markup/3-07-sql/887), [MySQL](/encyclopedia/3-data-markup/3-07-sql/889)

---

## Внешние источники

- [.NET API browser](https://learn.microsoft.com/ru-ru/dotnet/api/?view=net-10.0)
- [.NET Framework 4.8 API](https://learn.microsoft.com/ru-ru/dotnet/api/?view=netframework-4.8&preserve-view=true)
- [Справочник C#](../5-05-csharp/472)

---

### Зачем этот раздел

Подборка по **Платформа .NET** в энциклопедии: синтаксис, первая программа и смежные темы. Пройдите один маршрут до конца, не смешивая несколько языков на старте.

---

### С чего начать

| Шаг | Материал | Зачем |
|-----|----------|-------|
| 1 | [Платформа .NET](./1.md) | CLR, сборки, публикация |
| 2 | [Типы приложений](./13.md) | Выбор шаблона проекта; для WinForms/WPF — [галерея (Lab)](/lab/Примеры/1138) |

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

---

## В подборках

Статья входит в [тематические подборки](/about/collections) и блок «С чего начать?» на [главной](/). Соседние шаги того же маршрута:

**Бэкенд и серверная разработка** — [Java — о разделе](/encyclopedia/5-languages/5-03-java/intro), [C# — о разделе](/encyclopedia/5-languages/5-05-csharp/intro), [Python — о разделе](/encyclopedia/5-languages/5-02-python/intro), [C++ — о разделе](/encyclopedia/5-languages/5-06-cpp/intro), [JavaScript — о разделе](/encyclopedia/5-languages/5-01-javascript/intro), [PHP — о разделе](/encyclopedia/5-languages/5-07-php/intro).

{/* /sidebar-collections */}

---
