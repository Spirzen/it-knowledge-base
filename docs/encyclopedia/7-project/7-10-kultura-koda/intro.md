---
title: Культура кода — о разделе
description: Подборка материалов раздела Культура кода в энциклопедии Вселенная IT
sidebar_label: Культура кода — о разделе
sidebar_position: 0
related:
  - title: "Базы знаний и задачники — о разделе"
    doc: encyclopedia/7-project/7-09-bazy-znaniy-i-zadachniki/intro
  - title: "Экономика производства ПО — о разделе"
    doc: encyclopedia/7-project/7-13-ekonomika-proizvodstva-po/intro
  - title: "Scrum — о разделе"
    doc: encyclopedia/7-project/7-14-scrum/intro
  - title: "Коммуникация и общение — о разделе"
    doc: encyclopedia/1-basics/1-22-kommunikatsiya-i-obschenie/intro
  - title: "Микросервисы и интеграция — о разделе"
    doc: encyclopedia/8-infra-security/8-05-mikroservisy-i-integratsiya/intro
  - title: "Технический дизайн на основе требований"
    doc: encyclopedia/7-project/7-04-analitika/128
  - title: "Архитектура выполнения — о разделе"
    doc: encyclopedia/4-code-dev/4-06-arhitektura-vypolneniya/intro
  - title: "Командная работа в разработке ПО"
    doc: encyclopedia/7-project/7-02-komanda-i-upravlenie/11
---

import DocCardList from '@theme/DocCardList';

# О разделе "Культура кода"

Культура кода — это **общие договорённости в команде** — как мы называем сущности, форматируем файлы, комментируем неочевидное, ревьюим изменения и не превращаем качество в личный вкус одного человека. Хорошая культура снижает стоимость правок: код читают и меняют чаще, чем пишут с нуля.

Знать синтаксис языка недостаточно — важно понимать **стиль проекта**, инструменты (форматтеры, линтеры) и то, *какую* информацию оставлять в коде, а какую — в документации и тестах.

---

## Для кого

- **Новичкам** — соглашения об именовании, форматирование, комментарии "про зачем", а не "про что".
- **Разработчикам** — связь читаемости с метриками (цикломатическая сложность), принципы KISS/DRY/YAGNI на примерах.
- **Тимлидам и ревьюерам** — как обсуждать качество без морализаторства и споров "на вкус".

---

## Рекомендуемый порядок

| Шаг | Материал | Содержание |
|-----|----------|------------|
| 1 | [Культура написания и поддержки кода](./1) | Именование, стиль, комментарии, XML/JSDoc, IntelliSense, базовые принципы |
| 2 | [Цикломатическая сложность и читаемость](./2) | Метрика, пороги, запахи кода, рефакторинг, кейсы |
| 3 | [MAPPER — модель и реальность](./5) | Сопоставление домена и кода, биекция, единый принцип |
| 4 | [Анемичные модели и примитивы](./6) | Богатые объекты, value objects |
| 5 | [Изменяемость и побочные эффекты](./7) | const, иммутабельность |
| 5a | [Декларативный код](./14) | "Что" и "как", итерации, async, ошибки |
| 6 | [Условия, null и контракты](./8) | Fail fast, меньше if, без null |
| 7 | [Связанность и глобалы](./9) | Singleton, god object, запахи модульности |
| 8 | [YAGNI, быстрый провал, техдолг](./10) | Объём кода, PR, warnings |
| 9 | [Тесты как часть культуры](./11) | Качество assert, flaky, моки |
| 10 | [Исключения](./12) | try/catch, сообщения об ошибках |
| 11 | [Итоги](./3) | Краткое резюме раздела |
| 12 | [Чек-лист самопроверки](./4) | Вопросы перед merge |
| — | [Справочник тем](./13) | Симптом → статья раздела |

Если времени мало: **1** → **2** → **5** → **6** → [Примитивы, value objects и маленькие типы](/encyclopedia/4-code-dev/4-02-chto-takoe-kod-i-kak-on-rabotaet/616) → **8**; перед ревью — **4** и **13** (поиск по симптому).

---

## Что здесь и чего нет

Здесь — **качество исходного кода** на уровне файла и модуля. Настройка пайплайнов, политики веток и процессы релиза — в других главах энциклопедии (методология, инфраструктура, команда). Зато много про формулировки в ревью, автоматизацию рутины и то, как не спорить о пробелах вручную.

---

## Закрепить базовую теорию (глава 2)

Читаемый код не отменяет понимания среды, в которой он работает:

| Вопрос при ревью или ошибках | Теория |
| :--- | :--- |
| HTTP-контракт, статусы, идемпотентность | [2.09 API и HTTP](/encyclopedia/2-system-network/2-09-osnovy-integratsionnogo-vzaimodeystviya/117) · [HTTP](/encyclopedia/2-system-network/2-09-osnovy-integratsionnogo-vzaimodeystviya/118) |
| Сообщения об ошибках и утечки в ответах | [2.08 Основы ИБ](/encyclopedia/2-system-network/2-08-osnovy-informatsionnoy-bezopasnosti/intro) · [исключения в культуре кода](./12) |
| Асинхронность, очереди, retry | [Брокеры](/encyclopedia/2-system-network/2-09-osnovy-integratsionnogo-vzaimodeystviya/121) · [устойчивость в 7.06](/encyclopedia/7-project/7-06-proektirovanie-i-arhitektura/design/2136) |

## Закрепить базовую теорию (глава 4)

Культура кода — про **файл и модуль**; фундамент терминов и механизмов — в томе "Код и разработка":

| Вопрос при ревью или рефакторинге | Теория |
| :--- | :--- |
| Запахи, каталог приёмов Фаулера | [Методы рефакторинга](/encyclopedia/4-code-dev/4-02-chto-takoe-kod-i-kak-on-rabotaet/612) |
| Примитивы, value objects | [Примитивы и маленькие типы](/encyclopedia/4-code-dev/4-02-chto-takoe-kod-i-kak-on-rabotaet/616) · [ООП — введение](/encyclopedia/4-code-dev/4-08-oop/1) |
| Иммутабельность, потоки | [Параллельные вычисления — о разделе](/encyclopedia/4-code-dev/4-16-parallelnye-vychisleniya/intro) |
| Декларативность, async/await | [Асинхронность — о разделе](/encyclopedia/4-code-dev/4-05-asinhronnost/intro) |
| SOLID, DIP, абстракции | [SOLID](/encyclopedia/4-code-dev/4-07-paradigmy-i-urovni-abstraktsii/113) |
| try/catch, стек, Error vs Exception | [Ошибки и исключения](/encyclopedia/4-code-dev/4-06-arhitektura-vypolneniya/111) |
| YAGNI, мёртвый код, техдолг | [Архитектура выполнения](/encyclopedia/4-code-dev/4-06-arhitektura-vypolneniya/1) · [технический долг](/encyclopedia/4-code-dev/4-06-arhitektura-vypolneniya/115) |

<DocCardList />

{/* sidebar-collections */}

---

## В подборках

Статья входит в [тематические подборки](/about/collections) и блок "С чего начать?" на [главной](/). Соседние шаги того же маршрута:

**Техлид** — [Микросервисы и интеграция — о разделе](/encyclopedia/8-infra-security/8-05-mikroservisy-i-integratsiya/intro), [Технический дизайн на основе требований](/encyclopedia/7-project/7-04-analitika/128), [Архитектура выполнения — о разделе](/encyclopedia/4-code-dev/4-06-arhitektura-vypolneniya/intro), [Командная работа в разработке ПО](/encyclopedia/7-project/7-02-komanda-i-upravlenie/11), [Проектирование — о разделе](/encyclopedia/7-project/7-06-proektirovanie-i-arhitektura/design/intro), [Паттерны проектирования — о разделе](/encyclopedia/7-project/7-06-proektirovanie-i-arhitektura/design-patterns/intro).

**Управление проектами и Agile** — [Базы знаний и задачники — о разделе](/encyclopedia/7-project/7-09-bazy-znaniy-i-zadachniki/intro), [Экономика производства ПО — о разделе](/encyclopedia/7-project/7-13-ekonomika-proizvodstva-po/intro), [Scrum — о разделе](/encyclopedia/7-project/7-14-scrum/intro), [Коммуникация и общение — о разделе](/encyclopedia/1-basics/1-22-kommunikatsiya-i-obschenie/intro), [Методология и жизненный цикл ПО — о разделе](/encyclopedia/7-project/7-03-metodologiya-i-zhiznennyy-tsikl-po/intro), [Команда и управление — о разделе](/encyclopedia/7-project/7-02-komanda-i-upravlenie/intro).

**Тимлид** — [Scrum — о разделе](/encyclopedia/7-project/7-14-scrum/intro), [Организационная иерархия и деловая переписка](/encyclopedia/1-basics/1-22-kommunikatsiya-i-obschenie/5), [Ежедневные стендапы и коммуникация](/encyclopedia/7-project/7-02-komanda-i-upravlenie/111), [Первые 90 дней тимлида](/encyclopedia/7-project/7-02-komanda-i-upravlenie/141), [Роль тимлида — ожидания, риски и выбор траектории](/encyclopedia/7-project/7-02-komanda-i-upravlenie/14), [Эффективное управление разработчиками](/encyclopedia/7-project/7-02-komanda-i-upravlenie/13).

{/* /sidebar-collections */}

---
