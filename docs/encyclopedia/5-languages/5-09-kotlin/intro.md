---
title: Kotlin — о разделе
description: >-
  Подборка по Kotlin — JVM, корутины, Ktor, Android (Compose), KMP; маршруты
  для backend, мобильной и кроссплатформенной разработки.
sidebar_label: Kotlin — о разделе
related:
  - title: "Smalltalk — о разделе"
    doc: encyclopedia/5-languages/5-08-smalltalk/intro
  - title: "Go — о разделе"
    doc: encyclopedia/5-languages/5-10-go/intro
  - title: "PHP — о разделе"
    doc: encyclopedia/5-languages/5-07-php/intro
  - title: "Ruby — о разделе"
    doc: encyclopedia/5-languages/5-11-ruby/intro
  - title: "Мобильные приложения на Kotlin"
    doc: encyclopedia/5-languages/5-09-kotlin/234
  - title: "Справочник по Android"
    doc: encyclopedia/2-system-network/2-01-operatsionnaya-sistema/81
  - title: "Swift — о разделе"
    doc: encyclopedia/5-languages/5-14-swift/intro
  - title: "Справочник по iOS"
    doc: encyclopedia/2-system-network/2-01-operatsionnaya-sistema/71
  - title: "Мобильные игры"
    doc: encyclopedia/9-spinoff/9-04-razrabotka-igr/122
---

import DocCardList from '@theme/DocCardList';

# О разделе

> **Сначала:** [Что такое код и как он работает](/encyclopedia/4-code-dev/4-02-chto-takoe-kod-i-kak-on-rabotaet/1) — общая база: **код**, **блок кода**, **компиляция** и **интерпретация**, **исходный**, **байт-** и **машинный код**; в этом разделе — синтаксис и особенности языка.

<div class="callout callout--info">
  <div class="callout-title">Корутины и JVM-потоки</div>

  <div class="callout-body">
  Теория — [процессы и потоки](/encyclopedia/4-code-dev/4-05-asinhronnost/1).

  В Kotlin — **корутины** (легковесная конкуренция) поверх JVM; см. статьи раздела про `suspend`, диспетчеры и structured concurrency.
</div>
</div>

Перед [ООП в Kotlin](./15): [парадигмы](/encyclopedia/4-code-dev/4-07-paradigmy-i-urovni-abstraktsii/intro) и [ООП в разделе "Код"](/encyclopedia/4-code-dev/4-08-oop/intro).

**Kotlin** — кроссплатформенный статически типизированный объектно-ориентированный язык от [JetBrains](https://ru.wikipedia.org/wiki/JetBrains). По умолчанию он работает поверх **JVM** (как Java), компилируется в **JavaScript** и в исполняемый код ряда платформ через **LLVM** (Kotlin/Native, WebAssembly в перспективе). Исходники — `.kt`, скрипты сборки и утилит — `.kts`; лицензия — [Apache 2.0](https://www.apache.org/licenses/LICENSE-2.0); официальный сайт — [kotlinlang.org](https://kotlinlang.org).

Авторы ставили цель сделать язык **лаконичнее и типобезопаснее Java** и **проще Scala** — с более быстрой компиляцией и сильной поддержкой в IDE. Полная совместимость с Java позволяет постепенно переводить проекты и подключать Kotlin в существующее Android-приложение без полного переписывания.

Это **не замена** раздела [Java](/encyclopedia/5-languages/5-03-java/intro): для enterprise-бэкенда на Spring чаще учат Java, для нового Android — Kotlin. Многие команды держат оба языка в одном репозитории.

Общие темы (ООП, Git, сети) — в [Код и разработка](/encyclopedia/4-code-dev/code-dev). Здесь — **особенности Kotlin и типовые стеки**.

---

## Кто стоит за языком

**JetBrains** (ранее IntelliJ Software) — чешская компания, основанная в **2000** году в Праге; среди основателей — **Сергей Дмитриев** и **Валентин Кипятков**. Первый продукт — **IntelliJ Renamer** для рефакторинга Java; главный флагман — **IntelliJ IDEA**. С **2010** года под руководством **Андрея Бреслава** ведётся разработка Kotlin; с **2016** года JetBrains обещает долгосрочную обратную совместимость стабильных релизов.

Название **Kotlin** — от российского [острова Котлин](https://ru.wikipedia.org/wiki/Kotlin) в Финском заливе (Кронштадт), по той же традиции, что **Java** — от индонезийского острова Ява. Публичная презентация языка — **июль 2011**; исходный код открыт в **феврале 2012** (Apache 2.0).

| Событие | Год |
|---------|-----|
| Старт разработки в JetBrains | 2010 |
| JVM Language Summit, первая демонстрация | 2011 |
| Kotlin 1.0, гарантия совместимости API | 2016 |
| Официальная поддержка Android (Google I/O) | 2017 |
| Kotlin — приоритетный язык для Android | 2019 |
| Kotlin 2.0, компилятор K2 по умолчанию | 2024 |

Подробная хронология — в [Истории языка Kotlin](./1.md).

---

## Платформы и влияния

**Целевые платформы:** JVM, Dalvik/Android, JavaScript, iOS, watchOS, tvOS, macOS, Linux, Windows, WebAssembly (экспериментально).

На дизайн повлияли **Java**, **Scala**, **C#**, **Groovy**, **Python**, **Ruby**, **JavaScript** и идеи из семейства **ML** (через Scala): постфиксные типы (`имя: Тип`), ключевые слова `fun` и `val`, опциональные точки с запятой, вывод типов, интерполяция строк в духе Perl/shell.

---

## Три маршрута — выберите один

Не проходите все ветки сразу. После [первой программы](./2.md) идите по **одной** колонке:

| Цель | Следующие шаги | Куда углубляться |
|------|----------------|------------------|
| **Android** | [Compose — первый экран](./229.md) → [мобильные на Kotlin](./234.md) → [KotlinMobileApp](./22.md) / [Kotlinochi](./23.md) | [корутины](./222.md), [Flow](./226.md), [мобильный раздел](/encyclopedia/4-code-dev/4-12-mobilnye-prilozheniya/1135) |
| **Backend (Ktor)** | [Ktor — первая программа](./221.md) → [Ktor Client](./228.md) | [Flow](./226.md), [тесты](./223.md) |
| **Backend (Spring)** | [Spring Boot на Kotlin](./232.md) | [Security (Java)](/encyclopedia/5-languages/5-03-java/272), [JPA](/encyclopedia/5-languages/5-03-java/293) |
| **Desktop / KMP** | [Compose Multiplatform](./224.md) | [DSL](./230.md), [экосистема](./10.md) |

<div class="callout callout--tip">
  <div class="callout-title">Если уже знаете Java</div>

  <div class="callout-body">
  Сначала [Groovy и Java](/encyclopedia/5-languages/5-12-groovy/20) не нужен — сразу [основы Kotlin](./11.md) и [совместимость с Java](./10.md) (вызов Java-классов, `@JvmStatic`, nullable). Первая программа в IDEA описана в [2.md](./2.md).
</div>
  </div>

---

## Базовый маршрут (язык, ~2–3 недели)

1. [Что знать перед Kotlin](./1001.md) — JVM, IDE, Gradle.
2. [Первая программа](./2.md) — IntelliJ IDEA, Maven, `fun main()`.
2a. [fun main() — точка входа](./40.md) — JVM и import.
3. [Основы](./11.md) → [типы](./12.md) → [операторы](./13.md) → [циклы](./14.md).
4. [ООП](./15.md) → [синтаксис](./16.md) → [конструкции](./17.md).
5. [Теория: ошибки и исключения](/encyclopedia/4-code-dev/4-06-arhitektura-vypolneniya/111) → [иерархия в Kotlin](./171.md), практика JVM — [Java / 21](/encyclopedia/5-languages/5-03-java/21) → [коллекции и Sequence](./225.md).
6. [Корутины](./222.md) → [Flow](./226.md) — до Ktor и тяжёлого Android.
7. [Kotlin ↔ Java](./233.md) — если в проекте оба языка.
8. [Справочник](./3.md), [итоги](./998.md), [чек-лист](./999.md).

---

## Справочник и углубление

- [Экосистема Kotlin-приложений](./10.md) — Android, Ktor, KMM, SQLDelight, Koin (обзор).
- [Рекомендации по разработке](./101.md) — стиль, тестируемость, DI.
- [Тестирование](./223.md) — JUnit 5, MockK, Kotest.
- [Консольный ввод-вывод](./227.md) — `readln()`, кодировки.
- [Работа с БД](./18.md) — JDBC и обзор ORM на JVM; практика СУБД — [PostgreSQL](/encyclopedia/3-data-markup/3-07-sql/888), [MySQL](/encyclopedia/3-data-markup/3-07-sql/889), [SQLite](/encyclopedia/3-data-markup/3-07-sql/887), [SQL Server](/encyclopedia/3-data-markup/3-07-sql/890).

---

### Зачем этот раздел

Собрать **цельный путь по Kotlin**: от запуска в IDEA до реального стека (Android, Ktor или CMP), без смешивания с Java/Python на этапе "Hello World".

---

### С чего начать

| Шаг | Материал | Зачем |
|-----|----------|-------|
| 1 | [Первая программа](./2.md) | JDK, IDEA, Maven |
| 2a | [Compose](./229.md) → [234](./234.md) → [22](./22.md) / [23](./23.md) | Android UI + учебные проекты |
| 2b | [Ktor](./221.md) | REST API |
| 2c | [Spring Boot](./232.md) | REST на Spring |
| 2d | [Compose Multiplatform](./224.md) | Desktop UI |

---

### Частые ошибки при старте

| Ошибка | Что делать |
|--------|------------|
| Сразу Android + Ktor + KMP | Выберите одну ветку из таблицы выше |
| `runBlocking` в UI-потоке Android | `lifecycleScope` / `viewModelScope` — см. [222](./222.md) |
| Gradle не синхронизирован | File → Reload Gradle Project |
| Путать Kotlin с Java | Разный синтаксис; байт-код совместим — см. [10](./10.md) |

---

### Что попробовать

1. Пройти [2.md](./2.md) и изменить цикл в `main` — пересобрать и запустить.
2. В IDEA: **Show Kotlin Bytecode** для `main` — увидеть связь с JVM.
3. Одна ветка из таблицы "Три маршрута" — до рабочего мини-приложения.
4. В конце — [чек-лист](./999.md).

---

<DocCardList />

{/* sidebar-collections */}

---

## В подборках

Статья входит в [тематические подборки](/about/collections) и блок «С чего начать?» на [главной](/). Соседние шаги того же маршрута:

**Бэкенд и серверная разработка** — [Smalltalk — о разделе](/encyclopedia/5-languages/5-08-smalltalk/intro), [Go — о разделе](/encyclopedia/5-languages/5-10-go/intro), [PHP — о разделе](/encyclopedia/5-languages/5-07-php/intro), [Ruby — о разделе](/encyclopedia/5-languages/5-11-ruby/intro), [C++ — о разделе](/encyclopedia/5-languages/5-06-cpp/intro), [Groovy — о разделе](/encyclopedia/5-languages/5-12-groovy/intro).

**Мобильная разработка** — [Справочник по Android](/encyclopedia/2-system-network/2-01-operatsionnaya-sistema/81), [Swift — о разделе](/encyclopedia/5-languages/5-14-swift/intro), [Справочник по iOS](/encyclopedia/2-system-network/2-01-operatsionnaya-sistema/71), [Мобильные игры](/encyclopedia/9-spinoff/9-04-razrabotka-igr/122), [Особенности тестирования мобильных приложений](/encyclopedia/7-project/7-05-testirovanie/124), [Беспроводные технологии - Bluetooth, Zigbee, NFC](/encyclopedia/2-system-network/2-10-zhelezo/119).

{/* /sidebar-collections */}

---
