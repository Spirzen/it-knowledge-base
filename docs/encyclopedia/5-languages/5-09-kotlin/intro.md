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

Перед [ООП в Kotlin](./15): [парадигмы](/encyclopedia/4-code-dev/4-07-paradigmy-i-urovni-abstraktsii/intro) и [ООП в разделе "Код"](/encyclopedia/4-code-dev/4-08-oop/intro).

**Kotlin** — язык от JetBrains: короче Java, безопаснее по `null`, с корутинами и официальной поддержкой **Android**. Компилируется в байт-код JVM (как Java), поэтому те же JDK, Gradle и библиотеки — плюс свой синтаксис и `kotlin-stdlib`.

Это **не замена** раздела [Java](/encyclopedia/5-languages/5-03-java/intro): для enterprise-бэкенда на Spring чаще учат Java, для нового Android — Kotlin. Многие команды держат оба языка в одном репозитории.

Общие темы (ООП, Git, сети) — в [Код и разработка](/encyclopedia/4-code-dev/code-dev). Здесь — **особенности Kotlin и типовые стеки**.

---

## Три маршрута — выберите один

Не проходите все ветки сразу. После [первой программы](./2.md) идите по **одной** колонке:

| Цель | Следующие шаги | Куда углубляться |
|------|----------------|------------------|
| **Android** | [Compose — первый экран](./229.md) → [Room + ViewModel](./231.md) → [мобильный раздел](/encyclopedia/4-code-dev/4-12-mobilnye-prilozheniya/1135) | [корутины](./222.md), [Flow](./226.md) |
| **Backend (Ktor)** | [Ktor — первая программа](./221.md) → [Ktor Client](./228.md) | [Flow](./226.md), [тесты](./223.md) |
| **Backend (Spring)** | [Spring Boot на Kotlin](./232.md) | [Security (Java)](/encyclopedia/5-languages/5-03-java/272), [JPA](/encyclopedia/5-languages/5-03-java/293) |
| **Desktop / KMP** | [Compose Multiplatform](./224.md) | [DSL](./230.md), [экосистема](./10.md) |

<div class="callout callout--tip">
  <div class="callout-title">Если уже знаете Java</div>
  Сначала [Groovy и Java](/encyclopedia/5-languages/5-12-groovy/20) не нужен — сразу [основы Kotlin](./11.md) и [совместимость с Java](./10.md) (вызов Java-классов, `@JvmStatic`, nullable). Первая программа в IDEA описана в [2.md](./2.md).
</div>

---

## Базовый маршрут (язык, ~2–3 недели)

1. [Что знать перед Kotlin](./1001.md) — JVM, IDE, Gradle.
2. [Первая программа](./2.md) — IntelliJ IDEA, Maven, `fun main()`.
3. [Основы](./11.md) → [типы](./12.md) → [операторы](./13.md) → [циклы](./14.md).
4. [ООП](./15.md) → [синтаксис](./16.md) → [конструкции](./17.md).
5. [Исключения](./171.md) → [коллекции и Sequence](./225.md).
6. [Корутины](./222.md) → [Flow](./226.md) — до Ktor и тяжёлого Android.
7. [Kotlin ↔ Java](./233.md) — если в проекте оба языка.
8. [Справочник](./3.md), [итоги](./998.md), [чек-лист](./999.md).

---

## Справочник и углубление

- [Экосистема Kotlin-приложений](./10.md) — Android, Ktor, KMM, SQLDelight, Koin (обзор).
- [Рекомендации по разработке](./101.md) — стиль, тестируемость, DI.
- [Тестирование](./223.md) — JUnit 5, MockK, Kotest.
- [Консольный ввод-вывод](./227.md) — `readln()`, кодировки.
- [Работа с БД](./18.md) — JDBC и обзор ORM на JVM.

---

### Зачем этот раздел

Собрать **цельный путь по Kotlin**: от запуска в IDEA до реального стека (Android, Ktor или CMP), без смешивания с Java/Python на этапе "Hello World".

---

### С чего начать (кратко)

| Шаг | Материал | Зачем |
|-----|----------|-------|
| 1 | [Первая программа](./2.md) | JDK, IDEA, Maven |
| 2a | [Compose](./229.md) → [Room](./231.md) | Android UI + БД |
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

Статья входит в тематические маршруты из меню **Подборки** и блока "С чего начать?" на главной. Соседние шаги того же маршрута:

**Бэкенд и серверная разработка** — [Smalltalk — о разделе](/encyclopedia/5-languages/5-08-smalltalk/intro), [Go — о разделе](/encyclopedia/5-languages/5-10-go/intro), [PHP — о разделе](/encyclopedia/5-languages/5-07-php/intro), [Ruby — о разделе](/encyclopedia/5-languages/5-11-ruby/intro), [C++ — о разделе](/encyclopedia/5-languages/5-06-cpp/intro), [Groovy — о разделе](/encyclopedia/5-languages/5-12-groovy/intro).

**Мобильная разработка** — [Справочник по Android](/encyclopedia/2-system-network/2-01-operatsionnaya-sistema/81), [Swift — о разделе](/encyclopedia/5-languages/5-14-swift/intro), [Справочник по iOS](/encyclopedia/2-system-network/2-01-operatsionnaya-sistema/71), [Мобильные игры](/encyclopedia/9-spinoff/9-04-razrabotka-igr/122), [Особенности тестирования мобильных приложений](/encyclopedia/7-project/7-05-testirovanie/124), [Беспроводные технологии - Bluetooth, Zigbee, NFC](/encyclopedia/2-system-network/2-10-zhelezo/119).

{/* /sidebar-collections */}

---
