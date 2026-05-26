---
title: Groovy — о разделе
description: >-
  Groovy на JVM — синтаксис, GDK, DSL для Gradle и Jenkins, тесты Spock;
  маршрут для сборки и автоматизации, не для "основного" приложения.
sidebar_label: Groovy — о разделе
related:
  - title: "Ruby — о разделе"
    doc: encyclopedia/5-languages/5-11-ruby/intro
  - title: "Rust — о разделе"
    doc: encyclopedia/5-languages/5-13-rust/intro
  - title: "Go — о разделе"
    doc: encyclopedia/5-languages/5-10-go/intro
  - title: "Swift — о разделе"
    doc: encyclopedia/5-languages/5-14-swift/intro
---

import DocCardList from '@theme/DocCardList';

# О разделе

Раздел про **Groovy** на JVM: синтаксис, GDK, замыкания, DSL (**Gradle**, **Jenkins**), тесты (**Spock**).

Честная установка: Groovy **редко** бывает единственным языком всего продукта. Его учат, когда нужно читать `build.gradle`, править `Jenkinsfile` или писать выразительные тесты к Java/Kotlin-коду. База [Java](/encyclopedia/5-languages/5-03-java/intro) сильно ускоряет вход.

Интерактивные демо в части статей — на JavaScript; рядом всегда есть примеры на Groovy.

> **Сначала:** [Что такое код и как он работает](/encyclopedia/4-code-dev/4-02-chto-takoe-kod-i-kak-on-rabotaet/1) — общая база: **код**, **блок кода**, **компиляция** и **интерпретация**, **исходный**, **байт-** и **машинный код**; в этом разделе — синтаксис и особенности языка.

---

## Два маршрута

| Кто вы | Маршрут |
|--------|---------|
| **Уже пишете на Java/Kotlin** | [1001](./1001.md) → [Groovy и Java](./20.md) → [11](./11.md) (делегирование замыканий) → [3](./3.md) (Spock, Jenkins) |
| **Новичок на JVM** | Сначала [Java — первая программа](/encyclopedia/5-languages/5-03-java/13), потом [первая программа на Groovy](./2.md) |

---

## Рекомендуемый порядок (язык + инструменты)

0. [Что знать перед Groovy](./1001.md)  
1. [История](./1.md) — зачем язык на JVM  
2. [Groovy и Java](./20.md) — `==`, GString, `def`, вызов из Java  
3. [Первая программа](./2.md) — IDEA, NetBeans или `groovy hello.groovy`  
4. [Основы](./11.md) — MetaClass, **делегирование замыканий** (сердце Gradle DSL)  
5. [Типы](./12.md) → [Операторы](./13.md) → [Циклы](./14.md)  
6. [ООП](./15.md) → [Особенности](./16.md)  
7. [Пунктуация](./17.md) → [Конструкции и фреймворки](./18.md)  
8. [Gradle Groovy DSL](./23.md) — чтение `build.gradle`  
9. [Spock](./21.md) · [Jenkins Pipeline](./22.md) — CI и тесты  
10. [Справочник](./3.md) — углубление  
11. [Итоги](./998.md) и [чек-лист](./999.md)

:::tip Gradle на Kotlin DSL
Новые проекты часто пишут `build.gradle.kts` ([Kotlin DSL](/encyclopedia/5-languages/5-09-kotlin/230)). Groovy DSL всё ещё встречается в старых репозиториях и в примерах Android — этот раздел как раз про чтение таких скриптов.
:::

---

### Зачем этот раздел

Научить **читать и писать Groovy там, где он реально живёт**: сборка, CI, тесты — а не конкурировать с Spring Boot на Java/Kotlin.

---

### С чего начать (кратко)

| Шаг | Материал | Зачем |
|-----|----------|-------|
| 1 | [Первая программа](./2.md) | Запуск, структура Gradle-проекта |
| 2 | [Gradle Groovy DSL](./23.md) | `build.gradle` |
| 3 | [Основы — делегирование](./11.md) | Почему работает `implementation` |
| 4 | [Spock](./21.md) · [Jenkins](./22.md) | Тесты и CI |

---

### Частые ошибки при старте

| Ошибка | Что делать |
|--------|------------|
| Учить Groovy без Java | Минимум [Java 13](/encyclopedia/5-languages/5-03-java/13) или Kotlin на JVM |
| Сравнивать `==` с Java | В Groovy `==` → `equals` — [20](./20.md) |
| Писать приложение на Grails "с нуля" | Для нового веба чаще Spring/Ktor; Grails — [18](./18.md), legacy |
| Забыть `def` в скрипте | Иначе `MissingPropertyException` — [2](./2.md) |

---

### Что попробовать

1. Скрипт `hello.groovy` без IDE — [2.md](./2.md).
2. В [11.md](./11.md) — мини-DSL с `delegate` как в Gradle.
3. Один тест Spock к Java-классу — раздел 19 в [3.md](./3.md).
4. [чек-лист](./999.md).

---

<DocCardList />

{/* sidebar-collections */}

---

## В подборках

Статья входит в тематические маршруты из меню **Подборки** и блока "С чего начать?" на главной. Соседние шаги того же маршрута:

**Бэкенд и серверная разработка** — [Ruby — о разделе](/encyclopedia/5-languages/5-11-ruby/intro), [Rust — о разделе](/encyclopedia/5-languages/5-13-rust/intro), [Go — о разделе](/encyclopedia/5-languages/5-10-go/intro), [Swift — о разделе](/encyclopedia/5-languages/5-14-swift/intro), [Kotlin — о разделе](/encyclopedia/5-languages/5-09-kotlin/intro), [Lua и Luau — о разделе](/encyclopedia/5-languages/5-15-lua-i-luau/intro).

{/* /sidebar-collections */}

---
