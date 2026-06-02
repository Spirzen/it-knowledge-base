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
  - title: "Java — консольные задачи"
    doc: lab/examples/1131
  - title: "Java Swing — окна и кнопки"
    doc: lab/examples/1143
  - title: "Java — Java Survivors"
    doc: encyclopedia/9-spinoff/9-04-razrabotka-igr/praktikum-razrabotki-igr/8
  - title: "Практикум разработки игр — о разделе"
    doc: encyclopedia/9-spinoff/9-04-razrabotka-igr/praktikum-razrabotki-igr/intro
---

import DocCardList from '@theme/DocCardList';

# О разделе

> **Сначала:** [Что такое код и как он работает](/encyclopedia/4-code-dev/4-02-chto-takoe-kod-i-kak-on-rabotaet/1) — общая база: **код**, **блок кода**, **компиляция** и **интерпретация**, **исходный**, **байт-** и **машинный код**; в этом разделе — синтаксис и особенности языка.

<div class="callout callout--info">
  <div class="callout-title">Среда выполнения Java</div>

  <div class="callout-body">
  Общая теория — [байт-код и виртуальные машины](/encyclopedia/4-code-dev/4-03-vypolnenie-koda/314), [сравнение GC (Java, Python, Go)](/encyclopedia/4-code-dev/4-15-sborka-musora/4), [программа и runtime](/encyclopedia/1-basics/1-19-programma/1).

  Потоки — [процессы и потоки](/encyclopedia/4-code-dev/4-05-asinhronnost/1); в Java: [JVM и потоки](/encyclopedia/5-languages/5-03-java/23), [асинхронность](/encyclopedia/5-languages/5-03-java/298), [virtual threads (Java 21+)](/encyclopedia/5-languages/5-03-java/308).
</div>
</div>

Раздел охватывает язык **Java**, **JVM**, сборки (Maven/Gradle), фреймворки и работу с данными. Материалы рассчитаны на разработчиков и архитекторов: от первой программы до Spring, тестирования и облачного развёртывания.

**Java** — не "только банки": это JVM-экосистема (серверы, Android-наследие, инструменты). В новых backend-проектах чаще **Spring Boot**, а не JSF — legacy-главы в разделе помечены как справочные.

Общие принципы (код, ООП, алгоритмы) — в [Код и разработка](/encyclopedia/4-code-dev/code-dev) и [ООП](/encyclopedia/4-code-dev/4-08-oop/1); здесь — **особенности Java и платформы**.

В ключевых главах (JVM, коллекции, исключения) концепции по возможности даются **сначала на псевдокоде**, затем — на Java.

---

## С чего начать (основной маршрут)

1. [Основы языка Java](./1.md) — JDK/JVM, байт-код, [путь от исходника до запуска](./1.md#put-isxodnika-do-zapuska), состав дистрибутива.
2. [Первая программа](./13.md) — Maven; в статье два пути: **IntelliJ IDEA** (рекомендуется) и **NetBeans**.
2a. [public static void main — точка входа](./40.md) — когда JVM вызывает `main`.
3. [Структура и сборки](./12.md) — Maven/Gradle, запуск вне IDE; [отладка в IDEA](./132.md).
4. [Синтаксис](./14.md), [типы](./15.md) (примитивы и [обёртки](./15.md#priminitiv-i-klass-obertka)), [операторы и циклы](./17.md), [конструкции](./16.md) — в том числе `Scanner` и [случайные числа](./16.md#случайные-числа).
5. [ООП](./18.md) — классы, наследование, интерфейсы, `instanceof`.
6. [Коллекции](./24.md), [полный API Collections Framework](./305.md), [Stream API](./295.md), [полный API Streams](./306.md), [строки](./296.md), [исключения](./21.md).
7. [Ввод-вывод и файлы](./297.md), [асинхронность](./298.md), [Virtual Threads (Java 21+)](./308.md), [JVM и потоки](./23.md).
8. [Аннотации и рефлексия](./299.md), [современный синтаксис](./300.md) — record, sealed, pattern matching.
9. [Вопросы на собеседование — Core Java](./301.md) — карта тем → главы раздела.
10. **Веб и данные:** [Spring Framework](./27.md) (обзор) → [Spring Boot](./271.md) → [аннотации Spring Boot](./304.md) → [Security Basic](./272.md) → [JWT](./274.md) → [безопасность в prod](./275.md) → [ошибки REST](./303.md) → [JPA](./293.md) → [Testcontainers](./273.md) → [работа с БД](./22.md). СУБД из кода: [PostgreSQL](/encyclopedia/3-data-markup/3-07-sql/888), [MySQL](/encyclopedia/3-data-markup/3-07-sql/889), [SQLite](/encyclopedia/3-data-markup/3-07-sql/887), [SQL Server](/encyclopedia/3-data-markup/3-07-sql/890).
11. **JVM в проде:** [JVM и потоки](./23.md) → [флаги запуска в справочнике, §24](./3.md#24-jvm--параметры-запуска-и-настройка) → [jcmd, heap dump, JFR](./302.md).

<div class="callout callout--info">
  <div class="callout-title">Когда Spring, а когда ещё Core</div>

  <div class="callout-body">
  Пока не уверены в `List`, `Stream`, исключениях и `main` — не уходите в [271](./271.md). Spring опирается на те же классы, пакеты и Maven, что и консольная программа.
</div>
  </div>


---

## Ветки по цели

| Цель | Маршрут |
|------|---------|
| **Корпоративный REST** | [271](./271.md) → [272](./272.md) → [274](./274.md) → [275](./275.md) → [303](./303.md) → [293](./293.md) → [273](./273.md) |
| **Понять JVM в проде** | [23](./23.md) → [справочник §24](./3.md#24-jvm--параметры-запуска-и-настройка) → [302](./302.md) → [101](./101.md) |
| **Сборка и CI** | [12](./12.md) → [292](./292.md) (Gradle) |
| **Legacy (поддержка)** | [JSF](./25.md), [JavaBeans](./26.md) — не для зелёного поля |
| **Десктоп (JavaFX / Swing)** | [311.md](./311.md) → [3111.md](./3111.md) (JavaFX) или [Lab — Swing](/lab/Примеры/1143) (без Maven) → [3112.md](./3112.md); теория — [Архитектура десктопа](/encyclopedia/4-code-dev/4-11-desktopnye-prilozheniya/1), [112.md](/encyclopedia/4-code-dev/4-11-desktopnye-prilozheniya/112.md) |
| **Консольные задачи** | [Lab — консольные задачи](/lab/Примеры/1131) → [131](./131.md) (мини-приложения) |
| **Лабораторная с GUI** | [Lab — Swing, построчный разбор](/lab/Примеры/1143) после [16](./16.md) и [17](./17.md) |
| **Учебная игра** | [Java Survivors](/encyclopedia/9-spinoff/9-04-razrabotka-igr/praktikum-razrabotki-igr/8) (в подготовке) — маршрут раздела [Практикум разработки игр](/encyclopedia/9-spinoff/9-04-razrabotka-igr/praktikum-razrabotki-igr/intro) |

Параллельно с Java на JVM: [Kotlin](/encyclopedia/5-languages/5-09-kotlin/intro) (Android/Ktor), [Groovy](/encyclopedia/5-languages/5-12-groovy/intro) (Gradle DSL, Spock).

---

## Справочник и углубление

- [Справочник по Java](./3.md) — синтаксис, коллекции, `java.time`, JDBC, JVM + API-дополнения по language basics, collections, streams/gatherers и virtual threads.
- [Ключевые классы стандартной библиотеки](./28.md) — `String`, дата/время.
- [Экосистема Java-приложений](./110.md), [рекомендации](./101.md).
- [Паттерны GoF на Java](/encyclopedia/7-project/7-06-proektirovanie-i-arhitektura/design-patterns/140) — большой гид + практические статьи по ключевым паттернам (122-140).
- [Документация и инструменты (Microsoft)](./294.md) — OpenJDK, VS Code, Azure.
- Общая [подборка документации](/tools/documentation/2).

---

## Внешние источники

Компактные конспекты — для **второго прохода**; эталон — [OpenJDK](https://openjdk.org/) и документация Oracle.

| Источник | Назначение |
|----------|------------|
| [Oracle Java SE Documentation](https://docs.oracle.com/en/java/javase/) | Спецификация языка и API |
| [dev.java — Language Basics](https://dev.java/learn/language-basics/) | Официальный фундамент синтаксиса и моделей кода |
| [dev.java — Collections Framework](https://dev.java/learn/api/collections-framework/) | Интерфейсы и реализации коллекций |
| [dev.java — Streams](https://dev.java/learn/api/streams/) | Потоки, terminal/intermediate операции |
| [dev.java — Stream Gatherers](https://dev.java/learn/api/streams/gatherers/) | Кастомные stateful-пайплайны в Stream API |
| [dev.java — Virtual Threads](https://dev.java/learn/new-features/virtual-threads/) | Современная конкурентность Java 21+ |
| [Metanit: Java](https://metanit.com/java/) | Пошаговый курс на русском |
| [Java — конспект (GitBook)](https://andrey-ivantsov.gitbook.io/java) | Краткий Core Java |
| [proglang.su/java](http://proglang.su/java) | Углубление по коллекциям и API |
| [Microsoft для Java](https://learn.microsoft.com/ru-ru/java/) | OpenJDK, VS Code — [294](./294.md) |

<div class="callout callout--tip">
  <div class="callout-title">Соответствие конспекту GitBook главам энциклопедии</div>

  <div class="callout-body">
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
</div>
  </div>


Примеры ориентированы на **Java 17+** (LTS). Упоминания `Date`, `Vector`, `Hashtable` — в контексте legacy и собеседований.

---

### Зачем этот раздел

Дать **один понятный путь** по Java на JVM: от JDK и IDE до Spring и JVM-диагностики, без обязательного JSF и без смешивания языков на старте.

---

### С чего начать

| Шаг | Материал | Зачем |
|-----|----------|-------|
| 1 | [Первая программа](./13.md) | JDK, Maven, IDEA или NetBeans |
| 2 | [Отладка](./132.md) | Точки останова, Variables, Call Stack |
| 3 | [Spring Boot](./271.md) | REST после Core |
| 4 | [Spring Security](./272.md) · [prod](./275.md) | Защита API и чеклист выкладки |
| 5 | [JVM](./23.md) · [флаги §24](./3.md#24-jvm--параметры-запуска-и-настройка) · [диагностика](./302.md) | Память, GC, `-Xmx`, jcmd |

---

### Частые ошибки при старте

| Ошибка | Что делать |
|--------|------------|
| Прыжки между языками | Закройте одну "первую программу", потом Kotlin/Groovy |
| Код без запуска | `mvn compile exec:java` или Run в IDE |
| Spring до коллекций | Сначала шаги 4–6 основного маршрута |
| Путать JDK и JRE | Для разработки нужен **JDK** — [1](./1.md) |

---

### Что попробовать

1. [13.md](./13.md) — оба варианта IDE или тот, что у вас в команде.
2. [132.md](./132.md) — найти off-by-one в цикле через F8.
3. [271.md](./271.md) — `curl localhost:8080/...` к своему API.

```bash
curl localhost:8080/...
```
4. [чек-лист](./999.md) в конце раздела.

---

<DocCardList />

{/* sidebar-collections */}

---

## В подборках

Статья входит в тематические маршруты из меню **Подборки** и блока "С чего начать?" на главной. Соседние шаги того же маршрута:

**База программиста** — [Python — о разделе](/encyclopedia/5-languages/5-02-python/intro), [Документация и инструменты Java (Microsoft)](/encyclopedia/5-languages/5-03-java/294), [JavaScript — о разделе](/encyclopedia/5-languages/5-01-javascript/intro), [Low-code и No-code платформы](/encyclopedia/8-infra-security/8-02-low-code-no-code/1), [Автоматическое управление памятью](/encyclopedia/4-code-dev/4-15-sborka-musora/1), [Разработка и отладка — о разделе](/encyclopedia/4-code-dev/4-14-razrabotka-i-otladka/intro).

**Бэкенд и серверная разработка** — [Python — о разделе](/encyclopedia/5-languages/5-02-python/intro), [Платформа .NET — о разделе](/encyclopedia/5-languages/5-04-platforma-dotnet/intro), [JavaScript — о разделе](/encyclopedia/5-languages/5-01-javascript/intro), [C# — о разделе](/encyclopedia/5-languages/5-05-csharp/intro), [SQL — о разделе](/encyclopedia/3-data-markup/3-07-sql/intro) ([PostgreSQL](/encyclopedia/3-data-markup/3-07-sql/888), [MySQL](/encyclopedia/3-data-markup/3-07-sql/889), [SQLite](/encyclopedia/3-data-markup/3-07-sql/887), [SQL Server](/encyclopedia/3-data-markup/3-07-sql/890)), [C++ — о разделе](/encyclopedia/5-languages/5-06-cpp/intro).

{/* /sidebar-collections */}

---