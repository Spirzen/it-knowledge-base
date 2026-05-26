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

> **Сначала:** [Что такое код и как он работает](/encyclopedia/4-code-dev/4-02-chto-takoe-kod-i-kak-on-rabotaet/1) — общая база: **код**, **блок кода**, **компиляция** и **интерпретация**, **исходный**, **байт-** и **машинный код**; в этом разделе — синтаксис и особенности языка.

Раздел охватывает язык **Java**, **JVM**, сборки (Maven/Gradle), фреймворки и работу с данными. Материалы рассчитаны на разработчиков и архитекторов: от первой программы до Spring, тестирования и облачного развёртывания.

**Java** — не «только банки»: это JVM-экосистема (серверы, Android-наследие, инструменты). В новых backend-проектах чаще **Spring Boot**, а не JSF — legacy-главы в разделе помечены как справочные.

Общие принципы (код, ООП, алгоритмы) — в [Код и разработка](/encyclopedia/4-code-dev/code-dev) и [ООП](/encyclopedia/4-code-dev/4-08-oop/1); здесь — **особенности Java и платформы**.

В ключевых главах (JVM, коллекции, исключения) концепции по возможности даются **сначала на псевдокоде**, затем — на Java.

---

## С чего начать (основной маршрут)

1. [Основы языка Java](./1.md) — JDK/JVM, байт-код, состав дистрибутива.
2. [Первая программа](./13.md) — Maven; в статье два пути: **IntelliJ IDEA** (рекомендуется) и **NetBeans**.
3. [Структура и сборки](./12.md) — Maven/Gradle, запуск вне IDE; [отладка в IDEA](./132.md).
4. [Синтаксис](./14.md), [типы](./15.md), [операторы и циклы](./17.md), [конструкции](./16.md) — в том числе `Scanner`.
5. [ООП](./18.md) — классы, наследование, интерфейсы, `instanceof`.
6. [Коллекции](./24.md), [Stream API](./295.md), [строки](./296.md), [исключения](./21.md).
7. [Ввод-вывод и файлы](./297.md), [асинхронность](./298.md), [JVM и потоки](./23.md).
8. [Аннотации и рефлексия](./299.md), [современный синтаксис](./300.md) — record, sealed, pattern matching.
9. [Вопросы на собеседование — Core Java](./301.md) — карта тем → главы раздела.
10. **Веб и данные:** [Spring Framework](./27.md) (обзор) → [Spring Boot](./271.md) → [Security Basic](./272.md) → [JWT](./274.md) → [ошибки REST](./303.md) → [JPA](./293.md) → [Testcontainers](./273.md) → [работа с БД](./22.md).
11. **JVM в проде:** [jcmd, heap dump, JFR](./302.md) — после [JVM и потоки](./23.md).

:::info Когда Spring, а когда ещё Core
Пока не уверены в `List`, `Stream`, исключениях и `main` — не уходите в [271](./271.md). Spring опирается на те же классы, пакеты и Maven, что и консольная программа.
:::

---

## Ветки по цели

| Цель | Маршрут |
|------|---------|
| **Корпоративный REST** | [271](./271.md) → [272](./272.md) → [274](./274.md) → [303](./303.md) → [293](./293.md) → [273](./273.md) |
| **Понять JVM в проде** | [23](./23.md) → [302](./302.md) → [101](./101.md) |
| **Сборка и CI** | [12](./12.md) → [292](./292.md) (Gradle) |
| **Legacy (поддержка)** | [JSF](./25.md), [JavaBeans](./26.md) — не для зелёного поля |

Параллельно с Java на JVM: [Kotlin](/encyclopedia/5-languages/5-09-kotlin/intro) (Android/Ktor), [Groovy](/encyclopedia/5-languages/5-12-groovy/intro) (Gradle DSL, Spock).

---

## Справочник и углубление

- [Справочник по Java](./3.md) — синтаксис, коллекции, `java.time`, JDBC, JVM.
- [Ключевые классы стандартной библиотеки](./28.md) — `String`, дата/время.
- [Экосистема Java-приложений](./110.md), [рекомендации](./101.md).
- [Документация и инструменты (Microsoft)](./294.md) — OpenJDK, VS Code, Azure.
- Общая [подборка документации](/tools/documentation/2).

## Внешние источники

Компактные конспекты — для **второго прохода**; эталон — [OpenJDK](https://openjdk.org/) и документация Oracle.

| Источник | Назначение |
|----------|------------|
| [Oracle Java SE Documentation](https://docs.oracle.com/en/java/javase/) | Спецификация языка и API |
| [Metanit: Java](https://metanit.com/java/) | Пошаговый курс на русском |
| [Java — конспект (GitBook)](https://andrey-ivantsov.gitbook.io/java) | Краткий Core Java |
| [proglang.su/java](http://proglang.su/java) | Углубление по коллекциям и API |
| [Microsoft для Java](https://learn.microsoft.com/ru-ru/java/) | OpenJDK, VS Code — [294](./294.md) |

:::tip Соответствие конспекту GitBook главам энциклопедии
| Тема в [GitBook](https://andrey-ivantsov.gitbook.io/java) | Глава здесь |
|-----------------------------------------------------------|-------------|
| Типы, литералы, переменные, операторы | [15](./15.md), [16](./16.md), [17](./17.md) |
| Ввод с клавиатуры | [16](./16.md) (`Scanner`) |
| Особенности строк | [296](./296.md), [15](./15.md) |
| Коллекции, Stream API | [24](./24.md), [295](./295.md) |
| Файлы, I/O | [297](./297.md) |
| Асинхронность | [298](./298.md) |
| Аннотации, рефлексия | [299](./299.md) |
| record, sealed, pattern matching | [300](./300.md) |
| Дата и время | [28](./28.md) (`java.time`) |
| Исключения | [21](./21.md), [211](./211.md) |
| Интерфейсы, `instanceof` | [18](./18.md), [141](./141.md) |
:::

Примеры ориентированы на **Java 17+** (LTS). Упоминания `Date`, `Vector`, `Hashtable` — в контексте legacy и собеседований.

---

### Зачем этот раздел

Дать **один понятный путь** по Java на JVM: от JDK и IDE до Spring и JVM-диагностики, без обязательного JSF и без смешивания языков на старте.

---

### С чего начать (кратко)

| Шаг | Материал | Зачем |
|-----|----------|-------|
| 1 | [Первая программа](./13.md) | JDK, Maven, IDEA или NetBeans |
| 2 | [Отладка](./132.md) | Точки останова, Variables, Call Stack |
| 3 | [Spring Boot](./271.md) | REST после Core |
| 4 | [Spring Security](./272.md) | Защита API |
| 5 | [JVM](./23.md) · [диагностика](./302.md) | Память, GC, jcmd |

---

### Частые ошибки при старте

| Ошибка | Что делать |
|--------|------------|
| Прыжки между языками | Закройте одну «первую программу», потом Kotlin/Groovy |
| Код без запуска | `mvn compile exec:java` или Run в IDE |
| Spring до коллекций | Сначала шаги 4–6 основного маршрута |
| Путать JDK и JRE | Для разработки нужен **JDK** — [1](./1.md) |

---

### Что попробовать

1. [13.md](./13.md) — оба варианта IDE или тот, что у вас в команде.
2. [132.md](./132.md) — найти off-by-one в цикле через F8.
3. [271.md](./271.md) — `curl localhost:8080/...` к своему API.
4. [чек-лист](./999.md) в конце раздела.

---

<DocCardList />

{/* sidebar-collections */}
## В подборках

Статья входит в тематические маршруты из меню **Подборки** и блока «С чего начать?» на главной. Соседние шаги того же маршрута:

**База программиста** — [Python — о разделе](/encyclopedia/5-languages/5-02-python/intro), [Документация и инструменты Java (Microsoft)](/encyclopedia/5-languages/5-03-java/294), [JavaScript — о разделе](/encyclopedia/5-languages/5-01-javascript/intro), [Low-code и No-code платформы](/encyclopedia/8-infra-security/8-02-low-code-no-code/1), [Автоматическое управление памятью](/encyclopedia/4-code-dev/4-15-sborka-musora/1), [Разработка и отладка — о разделе](/encyclopedia/4-code-dev/4-14-razrabotka-i-otladka/intro).

**Бэкенд и серверная разработка** — [Python — о разделе](/encyclopedia/5-languages/5-02-python/intro), [Платформа .NET — о разделе](/encyclopedia/5-languages/5-04-platforma-dotnet/intro), [JavaScript — о разделе](/encyclopedia/5-languages/5-01-javascript/intro), [C# — о разделе](/encyclopedia/5-languages/5-05-csharp/intro), [SQL — о разделе](/encyclopedia/3-data-markup/3-07-sql/intro), [C++ — о разделе](/encyclopedia/5-languages/5-06-cpp/intro).

{/* /sidebar-collections */}

---
