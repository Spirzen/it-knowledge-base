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
  - title: "C++ — о разделе"
    doc: encyclopedia/5-languages/5-06-cpp/intro
  - title: "Java — о разделе"
    doc: encyclopedia/5-languages/5-03-java/intro
---

import DocCardList from '@theme/DocCardList';

# О разделе

Раздел посвящён языку **C#** и экосистеме **.NET**. Материалы рассчитаны на разработчиков и архитекторов: от первого проекта до углублённых тем (LINQ, async, ООП, веб, производительность).

> **Сначала:** [Что такое код и как он работает](/encyclopedia/4-code-dev/4-02-chto-takoe-kod-i-kak-on-rabotaet/1) — общая база: **код**, **блок кода**, **компиляция** и **интерпретация**, **исходный**, **байт-** и **машинный код**; в этом разделе — синтаксис и особенности языка.

## С чего начать

1. [C# — язык платформы .NET](/encyclopedia/5-languages/5-05-csharp/1) — проекты, сборки, `using`, консоль.
2. [Синтаксис и пунктуация](/encyclopedia/5-languages/5-05-csharp/11), [переменные](/encyclopedia/5-languages/5-05-csharp/17), [типы и приведения](/encyclopedia/5-languages/5-05-csharp/20).
3. [Пространства имён](/encyclopedia/5-languages/5-05-csharp/12), [nullable](/encyclopedia/5-languages/5-05-csharp/22), [исключения](/encyclopedia/5-languages/5-05-csharp/15).
4. [ООП в C#](/encyclopedia/5-languages/5-05-csharp/25), [коллекции](/encyclopedia/5-languages/5-05-csharp/28), [LINQ](/encyclopedia/5-languages/5-05-csharp/29).
5. Данные: [EF Core — первая программа](./441) или [ADO.NET / Dapper](./442), обзор — [БД и ORM](./44).

Общие принципы (код, ООП, выполнение) — в [Код и разработка](/encyclopedia/4-code-dev/code-dev). Перед [ООП в C#](./25): [парадигмы](/encyclopedia/4-code-dev/4-07-paradigmy-i-urovni-abstraktsii/intro) и [ООП — о разделе](/encyclopedia/4-code-dev/4-08-oop/intro). Здесь — **особенности C# и .NET**.

## Справочник и углубление

- [Вопросы на собеседование .NET и C#](/encyclopedia/5-languages/5-05-csharp/474) — карта типовых вопросов Junior–Senior (по мотивам [ITVDN/DOU](https://itvdn.com/ru/blog/article/150-questions-net-developer)) и ссылки на статьи раздела.
- [Справочник по синтаксису и возможностям C#](/encyclopedia/5-languages/5-05-csharp/471) — операторы, модификаторы, `Span`, async.
- [Справочник языка C# (Microsoft Learn)](/encyclopedia/5-languages/5-05-csharp/472) — полный каталог language reference (869 разделов).
- [Справочник .NET API (BCL)](/encyclopedia/5-languages/5-05-csharp/473) — пространства имён .NET 10 и .NET Framework 4.8 / 4.8.1.
- [Асинхронность и многопоточность](/encyclopedia/5-languages/5-05-csharp/39), [сеть и HTTP](/encyclopedia/5-languages/5-05-csharp/42), [производительность](/encyclopedia/5-languages/5-05-csharp/41).

## Веб на .NET

- [ASP.NET — фреймворк](./451), [Web API](./4511), [Minimal API и OpenAPI](./4517), [MediatR и pipeline](./4518), [интеграционные тесты](./4516), [Razor Pages](./4514), [Identity и JWT](./4515), [Blazor](./4512), [справочник](./452), [документация Microsoft Learn](./455)
- Данные: [EF Core](./441), [ADO.NET / Dapper](./442), [обзор БД](./44)
- Архитектура solution: [Clean Architecture на ASP.NET Core](/encyclopedia/7-project/7-06-proektirovanie-i-arhitektura/design/2143)

## Внешние источники

- [Документация C#](https://learn.microsoft.com/ru-ru/dotnet/csharp/)
- [Справочник языка C#](https://learn.microsoft.com/ru-ru/dotnet/csharp/language-reference/)
- [.NET API](https://learn.microsoft.com/ru-ru/dotnet/api/?view=net-10.0)
- [ASP.NET Core 10](https://learn.microsoft.com/ru-ru/aspnet/core/?view=aspnetcore-10.0)

Актуальные примеры в разделе ориентированы на **.NET 8+** и современный C# (nullable reference types, records, top-level statements). Упоминания Xamarin, Web Forms, LINQ to SQL — в контексте сопровождения legacy.

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
| Прыжки между языками | Закройте одну «первую программу», потом сравнивайте |
| Код без запуска | Выполните пример локально |
| Сразу большой фреймворк | Сначала база раздела, потом REST/UI |

---

### Что попробовать

1. Шаг 1 из таблицы.
2. Три непонятных термина — найдите статьи в оглавлении раздела.
3. Другой язык — только после своей рабочей первой программы.

---

<DocCardList />

<!-- sidebar-collections -->
## В подборках

Статья входит в тематические маршруты из меню **Подборки** и блока «С чего начать?» на главной. Соседние шаги того же маршрута:

**Веб-разработка** — [ASP.NET - веб-платформа Microsoft](/encyclopedia/5-languages/5-04-platforma-dotnet/172), [Веб-разработка и API на C#](/encyclopedia/5-languages/5-05-csharp/45), [PHP — о разделе](/encyclopedia/5-languages/5-07-php/intro), [ASP.NET - фреймворк для веб-приложений](/encyclopedia/5-languages/5-05-csharp/451), [CSS — о разделе](/encyclopedia/3-data-markup/3-10-css/intro), [Документация и практика ASP.NET (Microsoft Learn)](/encyclopedia/5-languages/5-05-csharp/455).

**Бэкенд и серверная разработка** — [Платформа .NET — о разделе](/encyclopedia/5-languages/5-04-platforma-dotnet/intro), [C++ — о разделе](/encyclopedia/5-languages/5-06-cpp/intro), [Java — о разделе](/encyclopedia/5-languages/5-03-java/intro), [PHP — о разделе](/encyclopedia/5-languages/5-07-php/intro), [Python — о разделе](/encyclopedia/5-languages/5-02-python/intro), [Smalltalk — о разделе](/encyclopedia/5-languages/5-08-smalltalk/intro).

<!-- /sidebar-collections -->

---
