---
title: "C# — о разделе"
description: Подборка материалов раздела C# в энциклопедии Вселенная IT — от синтаксиса до ASP.NET и современных возможностей языка.
sidebar_label: "C# — о разделе"
related:
  - title: "ASP.NET - веб-платформа Microsoft"
    doc: encyclopedia/5-languages/5-04-platforma-dotnet/172
  - title: "Веб-разработка и API на C#"
    doc: encyclopedia/5-languages/5-05-csharp/45
  - title: "PHP — о разделе"
    doc: encyclopedia/5-languages/5-07-php/intro
  - title: "ASP.NET - фреймворк для веб-приложений"
    doc: encyclopedia/5-languages/5-05-csharp/451
  - title: "Платформа .NET — о разделе"
    doc: encyclopedia/5-languages/5-04-platforma-dotnet/intro
  - title: "C# WinForms и WPF — простые окна"
    doc: lab/examples/1138
  - title: "C++ — о разделе"
    doc: encyclopedia/5-languages/5-06-cpp/intro
  - title: "Java — о разделе"
    doc: encyclopedia/5-languages/5-03-java/intro
  - title: "История платформы .NET"
    doc: encyclopedia/5-languages/5-04-platforma-dotnet/11
  - title: "Версии C# и .NET — справочная таблица"
    doc: encyclopedia/5-languages/5-05-csharp/48
  - title: "Разработка игр — о разделе"
    doc: encyclopedia/9-spinoff/9-04-razrabotka-igr/intro
  - title: "Unity C# — скрипты для новичков"
    doc: lab/examples/1136
---

import DocCardList from '@theme/DocCardList';

# О разделе

Раздел посвящён языку **C#** и экосистеме **.NET**. Материалы рассчитаны на разработчиков и архитекторов: от первого проекта до углублённых тем (LINQ, async, ООП, веб, производительность).

> **Сначала:** [Что такое код и как он работает](/encyclopedia/4-code-dev/4-02-chto-takoe-kod-i-kak-on-rabotaet/1) — общая база: **код**, **блок кода**, **компиляция** и **интерпретация**, **исходный**, **байт-** и **машинный код**; в этом разделе — синтаксис и особенности языка.

<div class="callout callout--info">
  <div class="callout-title">Потоки, Task и async в .NET</div>

  <div class="callout-body">
  Теория — [процессы и потоки](/encyclopedia/4-code-dev/4-05-asinhronnost/1), [мьютексы и гонки](/encyclopedia/4-code-dev/4-05-asinhronnost/11).

  В C# — `async`/`await`, `Task`, пул потоков CLR; см. статьи раздела про параллелизм и асинхронность после основ синтаксиса.
</div>
</div>

В [вводной статье по C#](./1.md) и материалах про .NET цепочка "исходник → IL → CLR" по возможности показана **псевдокодом** до синтаксиса C#.

---

## С чего начать

1. [C# — язык платформы .NET](/encyclopedia/5-languages/5-05-csharp/1) — проекты, сборки, `using`, консоль.
1a. [Main и top-level statements — точка входа](/encyclopedia/5-languages/5-05-csharp/49) — `Program.cs`, exe vs library.
2. [Синтаксис и пунктуация](/encyclopedia/5-languages/5-05-csharp/11), [переменные](/encyclopedia/5-languages/5-05-csharp/17), [типы и приведения](/encyclopedia/5-languages/5-05-csharp/20).
3. [Пространства имён](/encyclopedia/5-languages/5-05-csharp/12), [nullable](/encyclopedia/5-languages/5-05-csharp/22), [исключения](/encyclopedia/5-languages/5-05-csharp/15).
4. [ООП в C#](/encyclopedia/5-languages/5-05-csharp/25), [коллекции и кортежи](/encyclopedia/5-languages/5-05-csharp/28), [LINQ](/encyclopedia/5-languages/5-05-csharp/29).
5. Данные: [EF Core — первая программа](./441) или [ADO.NET / Dapper](./442), обзор — [БД и ORM](./44). СУБД: [SQL Server](/encyclopedia/3-data-markup/3-07-sql/890), [PostgreSQL](/encyclopedia/3-data-markup/3-07-sql/888), [SQLite](/encyclopedia/3-data-markup/3-07-sql/887), [MySQL](/encyclopedia/3-data-markup/3-07-sql/889).

Общие принципы (код, ООП, выполнение) — в [Код и разработка](/encyclopedia/4-code-dev/code-dev). Перед [ООП в C#](./25): [парадигмы](/encyclopedia/4-code-dev/4-07-paradigmy-i-urovni-abstraktsii/intro) и [ООП — о разделе](/encyclopedia/4-code-dev/4-08-oop/intro). Здесь — **особенности C# и .NET**.

---

## C# для Unity

Unity-скрипты — это обычный C# плюс API движка (`UnityEngine`). Если вы учите язык **ради игр**, не обязательно проходить весь раздел до ASP.NET — достаточно ветки ниже параллельно с [Разработка на Unity](/encyclopedia/9-spinoff/9-04-razrabotka-igr/3). Готовые `MonoBehaviour` с разбором строк — [Unity C# — скрипты для новичков](/lab/Примеры/1136).

| Тема в Unity | Статья C# | Комментарий |
|--------------|-----------|-------------|
| Переменные, типы, `if`/`for` | [17](/encyclopedia/5-languages/5-05-csharp/17), [20](/encyclopedia/5-languages/5-05-csharp/20), [18](/encyclopedia/5-languages/5-05-csharp/18) (в т.ч. [boxing и `int?`](/encyclopedia/5-languages/5-05-csharp/18#znachimye-tipy-i-boxing)) | Основа до `MonoBehaviour` |
| Классы, наследование, `GetComponent` | [25](/encyclopedia/5-languages/5-05-csharp/25) — блок **Unity** | `MonoBehaviour`, композиция |
| `List`, `Dictionary`, `Stack`, `HashSet` | [28](/encyclopedia/5-languages/5-05-csharp/28) | Инвентарь, пулы, лут |
| `enum`, свойства `get`/`set` | [25](/encyclopedia/5-languages/5-05-csharp/25), [18](/encyclopedia/5-languages/5-05-csharp/18) | Состояние игрока, `KeyCode` |
| `static`, утилиты без сцены | [25](/encyclopedia/5-languages/5-05-csharp/25) | `LevelRestart`, хелперы |
| Делегаты, `event` | [102](/encyclopedia/5-languages/5-05-csharp/102) | UI ↔ GameManager |
| Generics | [26](/encyclopedia/5-languages/5-05-csharp/26) | Обобщённые коллекции и API |

Полный маршрут «Unity + C#» шаг за шагом — в [intro раздела «Разработка игр»](/encyclopedia/9-spinoff/9-04-razrabotka-igr/intro#unity-csharp-track). Самопроверка — [чек-лист 9.04/999](/encyclopedia/9-spinoff/9-04-razrabotka-igr/999).

<div class="callout callout--info">
  <div class="callout-title">Unity и .NET</div>

  <div class="callout-body">
  В редакторе Unity используется профиль .NET, совместимый с игровым рантаймом (IL2CPP / Mono). Веб- и desktop-статьи этого раздела (ASP.NET, WPF) для первого игрового прототипа можно отложить.
</div>
</div>

---

## История и эволюция

- [История платформы .NET](../5-04-platforma-dotnet/11.md) — NGWS, рождение C#, .NET Framework → Core → единый .NET, F#.
- [Версии C# и .NET — справочная таблица](./48.md) — C# 1.0–14, LTS/STS, .NET Framework, NGen / R2R / Native AOT.
- [Архитектурные особенности .NET](../5-04-platforma-dotnet/12.md) — CLI, CLR, эволюция версий в контексте архитектуры.

Файл [11.md](./11.md) в этом разделе — **синтаксис и пунктуация**, не хронология.

---

## Справочник и углубление

- [Вопросы на собеседование .NET и C#](/encyclopedia/5-languages/5-05-csharp/474) — карта типовых вопросов Junior–Senior (по мотивам [ITVDN/DOU](https://itvdn.com/ru/blog/article/150-questions-net-developer)) и ссылки на статьи раздела.
- [Справочник по синтаксису и возможностям C#](/encyclopedia/5-languages/5-05-csharp/471) — операторы, модификаторы, `Span`, async.
- [Справочник языка C# (Microsoft Learn)](/encyclopedia/5-languages/5-05-csharp/472) — полный каталог language reference (869 разделов).
- [Версии C# и .NET — справочная таблица](./48.md) — шпаргалка по версиям и поддержке.
- [Справочник .NET API (BCL)](/encyclopedia/5-languages/5-05-csharp/473) — пространства имён .NET 10 и .NET Framework 4.8 / 4.8.1.
- [Guid в C# — шпаргалка](/encyclopedia/5-languages/5-05-csharp/493) — `NewGuid`, `Parse`/`TryParse`, форматы строки, `Empty`, сравнение.
- [Асинхронность и многопоточность](/encyclopedia/5-languages/5-05-csharp/39), [Task и async/await](/encyclopedia/5-languages/5-05-csharp/392), [класс `Thread`](/encyclopedia/5-languages/5-05-csharp/391), [сеть и HTTP](/encyclopedia/5-languages/5-05-csharp/42), [производительность](/encyclopedia/5-languages/5-05-csharp/41).

---

## Десктоп на .NET

Общая теория окон, элементов и UI-потока — [Архитектура десктопных приложений](/encyclopedia/4-code-dev/4-11-desktopnye-prilozheniya/1), [Особенности разработки](/encyclopedia/4-code-dev/4-11-desktopnye-prilozheniya/112.md), [раздел «Десктопные приложения»](/encyclopedia/4-code-dev/4-11-desktopnye-prilozheniya/intro).

| Стек | Теория / практика | Элементы UI | Примеры в Lab |
|------|-------------------|-------------|---------------|
| WinForms | [115.md](/encyclopedia/4-code-dev/4-11-desktopnye-prilozheniya/115) | [1152.md](/encyclopedia/4-code-dev/4-11-desktopnye-prilozheniya/1152) | [1138](/lab/Примеры/1138) |
| WPF | [119.md](/encyclopedia/4-code-dev/4-11-desktopnye-prilozheniya/119) | [1192.md](/encyclopedia/4-code-dev/4-11-desktopnye-prilozheniya/1192) | [1138](/lab/Примеры/1138) |
| Windows-платформа | [116.md](/encyclopedia/4-code-dev/4-11-desktopnye-prilozheniya/116) | — |
| UI-фреймворки .NET | [13.md](../5-04-platforma-dotnet/13.md) | — |
| Кроссплатформа | [MAUI — первая программа](./4513.md) | [мобильный раздел](/encyclopedia/4-code-dev/4-12-mobilnye-prilozheniya/intro) |

**Галерея для лабораторной и курсовой** — [C# WinForms и WPF — простые окна](/lab/Примеры/1138): полный `Program.cs`, кнопка, TextBox, MessageBox, конвертер температуры, to-do с построчным разбором (аналог [Tkinter в Lab](/lab/Примеры/1124) для Python).

## Веб на .NET

- [ASP.NET — фреймворк](./451), [Web API](./4511), [Minimal API и OpenAPI](./4517), [MediatR и pipeline](./4518), [тесты — юнит и интеграция](./4516), [Razor Pages](./4514), [Identity — JWT и cookie](./4515), [Blazor](./4512), [справочник](./452), [документация Microsoft Learn](./455)
- Данные: [EF Core](./441), [ADO.NET / Dapper](./442), [обзор БД](./44); практика СУБД — [SQL Server](/encyclopedia/3-data-markup/3-07-sql/890), [PostgreSQL](/encyclopedia/3-data-markup/3-07-sql/888), [SQLite](/encyclopedia/3-data-markup/3-07-sql/887), [MySQL](/encyclopedia/3-data-markup/3-07-sql/889)
- Архитектура solution: [Clean Architecture на ASP.NET Core](/encyclopedia/7-project/7-06-proektirovanie-i-arhitektura/design/2143)

---

## Внешние источники

- [Документация C#](https://learn.microsoft.com/ru-ru/dotnet/csharp/)
- [Справочник языка C#](https://learn.microsoft.com/ru-ru/dotnet/csharp/language-reference/)
- [.NET API](https://learn.microsoft.com/ru-ru/dotnet/api/?view=net-10.0)
- [ASP.NET Core 10](https://learn.microsoft.com/ru-ru/aspnet/core/?view=aspnetcore-10.0)

Актуальные примеры в разделе ориентированы на **.NET 8+** и современный C# (nullable reference types, records, top-level statements). Упоминания Xamarin, Web Forms, LINQ to SQL — в контексте сопровождения legacy.

---

### Зачем этот раздел

Подборка по **"C#** в энциклопедии: синтаксис, первая программа и смежные темы. Пройдите один маршрут до конца, не смешивая несколько языков на старте.

---

### С чего начать

| Шаг | Материал | Зачем |
|-----|----------|-------|
| 1 | [Первая программа](./16.md) | Запуск и синтаксис |
| 2 | [ASP.NET Core](./4511.md) | Углубление |
| 3 | [MAUI](./4513.md) | Углубление |

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

---

{/* http-basics-link  */}
<div class="callout callout--tip">
  <div class="callout-title">Основа по протоколу</div>

  <div class="callout-body">
  Базовый разбор HTTP и HTTPS находится в отдельной статье — [HTTP как основа веб-интеграций](/encyclopedia/2-system-network/2-09-osnovy-integratsionnogo-vzaimodeystviya/118).
</div>
  </div>

{/* sidebar-collections */}

---

## В подборках

Статья входит в [тематические подборки](/about/collections) и блок «С чего начать?» на [главной](/). Соседние шаги того же маршрута:

**Веб-разработка** — [ASP.NET - веб-платформа Microsoft](/encyclopedia/5-languages/5-04-platforma-dotnet/172), [Веб-разработка и API на C#](/encyclopedia/5-languages/5-05-csharp/45), [PHP — о разделе](/encyclopedia/5-languages/5-07-php/intro), [ASP.NET - фреймворк для веб-приложений](/encyclopedia/5-languages/5-05-csharp/451), [CSS — о разделе](/encyclopedia/3-data-markup/3-10-css/intro), [Документация и практика ASP.NET (Microsoft Learn)](/encyclopedia/5-languages/5-05-csharp/455).

**Бэкенд и серверная разработка** — [Платформа .NET — о разделе](/encyclopedia/5-languages/5-04-platforma-dotnet/intro), [C++ — о разделе](/encyclopedia/5-languages/5-06-cpp/intro), [Java — о разделе](/encyclopedia/5-languages/5-03-java/intro), [PHP — о разделе](/encyclopedia/5-languages/5-07-php/intro), [Python — о разделе](/encyclopedia/5-languages/5-02-python/intro), [Smalltalk — о разделе](/encyclopedia/5-languages/5-08-smalltalk/intro).

{/* /sidebar-collections */}

---
