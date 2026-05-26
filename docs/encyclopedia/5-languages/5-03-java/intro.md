---
title: Java — о разделе
description: >-
  Подборка материалов раздела Java — от JDK и синтаксиса до Spring, JPA и
  экосистемы; внешние конспекты и официальная документация.
sidebar_label: Java — о разделе
related:
  - title: "Python — о разделе"
    doc: encyclopedia/5-languages/5-02-python/intro
  - title: "Документация и инструменты Java (Microsoft)"
    doc: encyclopedia/5-languages/5-03-java/294
  - title: "JavaScript — о разделе"
    doc: encyclopedia/5-languages/5-01-javascript/intro
  - title: "Low-code и No-code платформы"
    doc: encyclopedia/8-infra-security/8-02-low-code-no-code/1
  - title: "Платформа .NET — о разделе"
    doc: encyclopedia/5-languages/5-04-platforma-dotnet/intro
  - title: "C# — о разделе"
    doc: encyclopedia/5-languages/5-05-csharp/intro
---

import DocCardList from '@theme/DocCardList';

# О разделе

Раздел охватывает язык **Java**, **JVM**, сборки (Maven/Gradle), фреймворки и работу с данными. Материалы рассчитаны на разработчиков и архитекторов: от первой программы до Spring, тестирования и облачного развёртывания.

> **Сначала:** [Что такое код и как он работает](/encyclopedia/4-code-dev/4-02-chto-takoe-kod-i-kak-on-rabotaet/1) — общая база: **код**, **блок кода**, **компиляция** и **интерпретация**, **исходный**, **байт-** и **машинный код**; в этом разделе — синтаксис и особенности языка.

## С чего начать

1. [Основы языка Java](./1.md) — JDK/JVM, байт-код, состав дистрибутива.
2. [Первая программа](./13.md), [структура и сборки](./12.md) — Maven/Gradle, запуск вне IDE.
3. [Синтаксис](./14.md), [типы и переменные](./15.md), [операторы и циклы](./17.md), [основные конструкции](./16.md) — в том числе `Scanner` и ввод с клавиатуры.
4. [ООП в Java](./18.md) — классы, наследование, интерфейсы, абстрактные классы, `instanceof`.
5. [Коллекции](./24.md), [Stream API](./295.md), [строки](./296.md), [исключения](./21.md).
6. [Ввод-вывод и файлы](./297.md), [асинхронность](./298.md), [JVM и потоки](./23.md).
7. [Аннотации и рефлексия](./299.md), [современные конструкции](./300.md) — record, sealed, pattern matching.
8. [Вопросы на собеседование — Core Java](./301.md) — навигация по JavaRush Top-50 и ITVDN 250+.
9. [Spring Framework](./27.md), [работа с БД](./22.md) — после основ.

Подробная база про код — в [Что такое код и как он работает](/encyclopedia/4-code-dev/4-02-chto-takoe-kod-i-kak-on-rabotaet/1). Перед [ООП в Java](./18.md): [парадигмы](/encyclopedia/4-code-dev/4-07-paradigmy-i-urovni-abstraktsii/intro) и [ООП — о разделе](/encyclopedia/4-code-dev/4-08-oop/intro). Здесь — **особенности Java и платформы**.

## Справочник и углубление

- [Справочник по Java](./3.md) — синтаксис, коллекции, `java.time`, JDBC, JVM.
- [Stream API](./295.md), [строки](./296.md), [ввод-вывод и файлы](./297.md), [асинхронность](./298.md), [аннотации и рефлексия](./299.md), [современный синтаксис](./300.md).
- [Ключевые классы стандартной библиотеки](./28.md) — `String`, дата/время, частые API.
- [Экосистема Java-приложений](./110.md), [рекомендации по разработке](./101.md).
- [Подготовка к собеседованию (Core Java)](./301.md) — карта вопросов JavaRush / ITVDN → главы раздела.
- [Документация и инструменты Java (Microsoft)](./294.md) — OpenJDK, VS Code, Azure, GitHub Actions.
- Общая [подборка документации](/tools/documentation/2) — Oracle, Metanit, учебники сообщества.

## Внешние источники (русский и официальный)

Компактные конспекты удобны для **второго прохода** по Core Java; эталон при споре — спецификация Oracle и [OpenJDK](https://openjdk.org/).

| Источник | Назначение |
|----------|------------|
| [Oracle Java SE Documentation](https://docs.oracle.com/en/java/javase/) | Спецификация языка и API |
| [Metanit: Java](https://metanit.com/java/) | Пошаговый курс на русском |
| [Java — конспект (GitBook, Andrey Ivantsov)](https://andrey-ivantsov.gitbook.io/java) | Краткий обзор Core Java: типы, операторы, строки, коллекции, исключения, интерфейсы |
| [Java — Самоучитель (proglang.su)](http://proglang.su/java) | Подробные статьи по классам коллекций и API (часто используется как углубление к конспекту GitBook) |
| [Разработчики Microsoft для Java](https://learn.microsoft.com/ru-ru/java/) | OpenJDK, VS Code, Azure — см. [294](./294.md) |

:::tip Соответствие конспекту GitBook главам энциклопедии
| Тема в [GitBook](https://andrey-ivantsov.gitbook.io/java) | Глава здесь |
|-----------------------------------------------------------|-------------|
| Типы, литералы, переменные, операторы | [15](./15.md), [16](./16.md), [17](./17.md) |
| Ввод с клавиатуры | [16](./16.md) (`Scanner`) |
| Особенности строк (`equals`, пул) | [296](./296.md), [15](./15.md) |
| Коллекции, Stream API | [24](./24.md), [295](./295.md) |
| Файлы, I/O | [297](./297.md) |
| Асинхронность | [298](./298.md) |
| Аннотации, рефлексия | [299](./299.md) |
| record, sealed, pattern matching | [300](./300.md) |
| Дата и время | [28](./28.md) (`java.time`, не legacy `Date`) |
| Исключения | [21](./21.md), [211](./211.md) |
| Интерфейсы, `instanceof` | [18](./18.md), [141](./141.md) |
:::

Актуальные примеры в разделе ориентированы на **Java 17+** (LTS) и современный API (`java.time`, pattern matching для `instanceof`, records). Упоминания `Date`, `Vector`, `Hashtable` — в контексте legacy и собеседований.

<DocCardList />

<!-- sidebar-collections -->
## В подборках

Статья входит в тематические маршруты из меню **Подборки** и блока «С чего начать?» на главной. Соседние шаги того же маршрута:

**База программиста** — [Python — о разделе](/encyclopedia/5-languages/5-02-python/intro), [Документация и инструменты Java (Microsoft)](/encyclopedia/5-languages/5-03-java/294), [JavaScript — о разделе](/encyclopedia/5-languages/5-01-javascript/intro), [Low-code и No-code платформы](/encyclopedia/8-infra-security/8-02-low-code-no-code/1), [Автоматическое управление памятью](/encyclopedia/4-code-dev/4-15-sborka-musora/1), [Разработка и отладка — о разделе](/encyclopedia/4-code-dev/4-14-razrabotka-i-otladka/intro).

**Бэкенд и серверная разработка** — [Python — о разделе](/encyclopedia/5-languages/5-02-python/intro), [Платформа .NET — о разделе](/encyclopedia/5-languages/5-04-platforma-dotnet/intro), [JavaScript — о разделе](/encyclopedia/5-languages/5-01-javascript/intro), [C# — о разделе](/encyclopedia/5-languages/5-05-csharp/intro), [SQL — о разделе](/encyclopedia/3-data-markup/3-07-sql/intro), [C++ — о разделе](/encyclopedia/5-languages/5-06-cpp/intro).

<!-- /sidebar-collections -->

---
