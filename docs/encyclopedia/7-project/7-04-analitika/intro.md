---
title: Аналитика — о разделе
description: Как устроен раздел "Аналитика" — роли, маршруты обучения, связь с соседними темами и карта материалов в энциклопедии Вселенная IT
sidebar_label: Аналитика — о разделе
related:
  - title: "Основы компьютерной грамотности"
    doc: encyclopedia/1-basics/1-035-bazovaya-informatika/101
  - title: "Основы диаграмм и моделирования"
    doc: encyclopedia/7-project/7-04-analitika/1231
  - title: "Основы анализа требований"
    doc: encyclopedia/7-project/7-04-analitika/111
  - title: "Программные платформы"
    doc: encyclopedia/2-system-network/2-02-platformy/3
  - title: "Основы бизнеса для IT-специалиста"
    doc: encyclopedia/1-basics/1-29-gosudarstvo-i-biznes/112
  - title: "Корпоративное ПО"
    doc: encyclopedia/2-system-network/2-02-platformy/3001
  - title: "Внедрение ERP — о разделе"
    doc: encyclopedia/7-project/7-15-vnedrenie-erp-sistem/intro
  - title: "BPMN-движки Camunda и Flowable"
    doc: encyclopedia/7-project/7-04-analitika/130
  - title: "Платформа 1С"
    doc: encyclopedia/5-languages/5-27-1s/1
  - title: "1С — о разделе"
    doc: encyclopedia/5-languages/5-27-1s/intro
  - title: "Отраслевое ПО — итоги"
    doc: encyclopedia/9-spinoff/9-06-otraslevoe-po/2
---

import ExternalPlayEmbed from '@site/src/components/ExternalPlayEmbed';


import DocCardList from '@theme/DocCardList';

# О разделе

**Длинные листинги (от ~15 строк)** вынесены в каталог [code.spirzen.ru](https://code.spirzen.ru/) и подгружаются в статьях через `ExternalCodeEmbed` — так HTML энциклопедии не раздувается, а код остаётся с подсветкой, вкладками и сериями «шаг 1…N». Короткие фрагменты (одна строка, пара выражений) по-прежнему прямо в markdown. Диаграммы **mermaid** и интерактив — на месте или в [play.spirzen.ru](https://play.spirzen.ru/).

Раздел **"Аналитика"** — практический курс для тех, кто переводит хаос пожеланий заказчика в понятные требования, модели и документы. Здесь не "про отчёты в Excel" (хотя метрики тоже разбираем), а про **инженерию смысла** на стыке бизнеса и разработки.

Если вы только входите в IT, сначала убедитесь, что уверенно пользуетесь ПК — [Основы компьютерной грамотности](/encyclopedia/1-basics/1-035-bazovaya-informatika/101). Затем — [Основы анализа требований](/encyclopedia/7-project/7-04-analitika/111) и [Профессиональная аналитика](/encyclopedia/7-project/7-04-analitika/112). Если уже работаете аналитиком — используйте раздел как справочник: BPMN, ГОСТ, API, Agile, продуктовые метрики.

<ExternalPlayEmbed example="project/analytics-section-hub" title="Аналитика — хаб раздела" minHeight={560} />

---

## Четыре "аналитики" — не путайте роли

| Роль | Главный вопрос | Типичный результат |
| :--- | :--- | :--- |
| **Бизнес-аналитик (BA)** | Зачем менять процесс и что нужно бизнесу? | BPMN as-is/to-be, BRD, приоритеты, ROI |
| **Системный аналитик (SA)** | Как система должна работать технически? | Use case, API, ERD, ТЗ, техдизайн |
| **Продуктовый аналитик** | Что делают пользователи в живом продукте? | Метрики, воронки, A/B, гипотезы |
| **Аналитик данных** | Какие данные нужны для ответа на вопрос? | SQL, витрины, отчёты, качество данных |

Подробнее: [BA](/encyclopedia/7-project/7-04-analitika/113), [SA](/encyclopedia/7-project/7-04-analitika/114), [продуктовая аналитика](/encyclopedia/7-project/7-04-analitika/1123), [язык данных](/encyclopedia/7-project/7-04-analitika/1121).

---

## Маршруты по уровню задач

### Старт (обязательный минимум)

0. [Основы компьютерной грамотности](/encyclopedia/1-basics/1-035-bazovaya-informatika/101) — если ещё не уверенно пользуетесь ПК, файлами и почтой.
1. [История аналитики в IT](/encyclopedia/7-project/7-04-analitika/1)
2. [Основы анализа требований](/encyclopedia/7-project/7-04-analitika/111)
3. [Профессиональная аналитика](/encyclopedia/7-project/7-04-analitika/112)
4. [Формализация и управление требованиями](/encyclopedia/7-project/7-04-analitika/116)

<div class="callout callout--tip">
  <div class="callout-title">PostgreSQL для аналитика</div>

  <div class="callout-body">
  Даже если вы не пишете продакшен-код, **установите PostgreSQL** и потренируйтесь в SQL — проверка гипотез, сверка отчётов, понимание ERD и интеграций.

  Старт — [Первые шаги с SQL](/encyclopedia/3-data-markup/3-07-sql/101) → [PostgreSQL — практическая работа](/encyclopedia/3-data-markup/3-07-sql/888); язык данных в аналитике — [1121](/encyclopedia/7-project/7-04-analitika/1121).
</div>
  </div>

---

### Бизнес-аналитик

[113](/encyclopedia/7-project/7-04-analitika/113) → [1231](/encyclopedia/7-project/7-04-analitika/1231) → [124](/encyclopedia/7-project/7-04-analitika/124) → [129](/encyclopedia/7-project/7-04-analitika/129) → [130](/encyclopedia/7-project/7-04-analitika/130) → [116](/encyclopedia/7-project/7-04-analitika/116) → [117](/encyclopedia/7-project/7-04-analitika/117) → [127](/encyclopedia/7-project/7-04-analitika/127). Для госсектора добавьте [121](/encyclopedia/7-project/7-04-analitika/121).

<div class="callout callout--tip">
  <div class="callout-title">Компактный маршрут по BABOK</div>

  <div class="callout-body">
  Последовательный проход по роли BA и управлению требованиями — без дублирования BPMN-справочника:

  1. [113](/encyclopedia/7-project/7-04-analitika/113) — роль BA, концепты, фазы проекта  
  2. [112](/encyclopedia/7-project/7-04-analitika/112) — области знаний, тип проекта, «цель → метод»  
  3. [116](/encyclopedia/7-project/7-04-analitika/116) — план BA, RM, приоритизация  
  4. [111](/encyclopedia/7-project/7-04-analitika/111) — пять шагов анализа, стоимость дефекта  
  5. [1231](/encyclopedia/7-project/7-04-analitika/1231) — основы диаграмм, выбор нотации  
  6. [124](/encyclopedia/7-project/7-04-analitika/124) — gap analysis, journey, DFD  
  7. Wireframe и UX до ТЗ — [Веб-дизайн — блок 2](/encyclopedia/1-basics/1-25-interfeys/7#блок-2--референсы-и-прототипирование)  
  8. [126](/encyclopedia/7-project/7-04-analitika/126) — инструменты BABOK  
  9. [127](/encyclopedia/7-project/7-04-analitika/127) — стейкхолдеры и конфликты  
  10. [998](/encyclopedia/7-project/7-04-analitika/998) / [999](/encyclopedia/7-project/7-04-analitika/999) — закрепление
  </div>
</div>

---

### Системный аналитик

[114](/encyclopedia/7-project/7-04-analitika/114) → [115](/encyclopedia/7-project/7-04-analitika/115) → [123](/encyclopedia/7-project/7-04-analitika/123) → [1231](/encyclopedia/7-project/7-04-analitika/1231) → [128](/encyclopedia/7-project/7-04-analitika/128). API углубляется в [7.06](/encyclopedia/7-project/7-06-proektirovanie-i-arhitektura/intro); для быстрой проверки контрактов в консоли — [утилита curl](/encyclopedia/2-system-network/2-05-terminal/1133), [curl / fetch — примеры](/lab/Примеры/1133).

---

### Продукт и данные

[1123](/encyclopedia/7-project/7-04-analitika/1123) → [1121](/encyclopedia/7-project/7-04-analitika/1121) → [1122](/encyclopedia/7-project/7-04-analitika/1122) → [3.11 Анализ данных](/encyclopedia/3-data-markup/3-11-analiz-dannyh/1).

---

## Соседние разделы

| Тема | Раздел |
| :--- | :--- |
| Методологии, ЖЦ | [7.03](/encyclopedia/7-project/7-03-metodologiya-i-zhiznennyy-tsikl-po/1) |
| Scrum, бэклог, оценка | [7.14](/encyclopedia/7-project/7-14-scrum/intro) |
| Архитектура, API | [7.06](/encyclopedia/7-project/7-06-proektirovanie-i-arhitektura/intro) |
| Тестирование | [7.05](/encyclopedia/7-project/7-05-testirovanie/intro) — в т.ч. [статическая проверка требований](/encyclopedia/7-project/7-05-testirovanie/1.md), [свойства качественных требований](/encyclopedia/7-project/7-04-analitika/111#свойства-качественных-требований) |
| Карьера | [1.26](/encyclopedia/1-basics/1-26-karera-v-it-i-mify/10) |

### Базовая теория (глава 2)

Когда в SA-маршруте не хватает «как устроено под капотом» — не останавливайтесь на формулировках требований:

| Вопрос | Теория |
| :--- | :--- |
| REST, HTTP, OpenAPI, интеграции | [2.09](/encyclopedia/2-system-network/2-09-osnovy-integratsionnogo-vzaimodeystviya/intro) · [API в 7.06](/encyclopedia/7-project/7-06-proektirovanie-i-arhitektura/design/117) |
| Сеть, DNS, TLS, задержки | [2.03](/encyclopedia/2-system-network/2-03-set-i-internet/intro) |
| Аутентификация, шифрование в NFR | [2.08](/encyclopedia/2-system-network/2-08-osnovy-informatsionnoy-bezopasnosti/111) |
| Очереди, Kafka, согласованность | [2.09.121](/encyclopedia/2-system-network/2-09-osnovy-integratsionnogo-vzaimodeystviya/121) |
| Проверка контракта в консоли | [curl](/encyclopedia/2-system-network/2-05-terminal/1133) · [Postman/curl](/encyclopedia/2-system-network/2-09-osnovy-integratsionnogo-vzaimodeystviya/2) |

### Базовая теория (глава 3)

| Вопрос аналитика | Теория |
| :--- | :--- |
| ERD, кардинальность, DDL | [Entity Relationship](/encyclopedia/3-data-markup/3-05-osnovy-baz-dannyh/11) · [нормализация](/encyclopedia/3-data-markup/3-07-sql/104#normalnye-formy) |
| SQL для сверки и отчётов | [SQL — о разделе](/encyclopedia/3-data-markup/3-07-sql/intro) · [язык данных в аналитике](./1121) |
| Миграция, маппинг, целостность | [Пакетная работа с данными](/encyclopedia/3-data-markup/3-11-analiz-dannyh/433) · [исследование систем](./115#маппинг-данных-и-миграции) |
| SQL vs NoSQL в требованиях | [Основы БД](/encyclopedia/3-data-markup/3-05-osnovy-baz-dannyh/1#chetyre-osnovnyh-tipa-baz-dannyh) · [NoSQL](/encyclopedia/3-data-markup/3-06-nosql/intro) |
| Витрины, ETL, качество данных | [3.11 Анализ данных](/encyclopedia/3-data-markup/3-11-analiz-dannyh/intro) · [продуктовая аналитика](./1123) |

### Базовая теория (глава 4)

Когда в ТЗ или sequence-диаграмме непонятно, **как это станет кодом** — не останавливайтесь на формулировках:

| Вопрос аналитика | Теория |
| :--- | :--- |
| Классы, объекты, UML → реализация | [Проектирование сущности](/encyclopedia/4-code-dev/4-03-vypolnenie-koda/1) · [ООП — о разделе](/encyclopedia/4-code-dev/4-08-oop/intro) |
| Изменение состояния, переменные, типы | [Код — о разделе](/encyclopedia/4-code-dev/4-02-chto-takoe-kod-i-kak-on-rabotaet/intro) |
| Асинхронные сценарии, очереди в use case | [Асинхронность — о разделе](/encyclopedia/4-code-dev/4-05-asinhronnost/intro) |
| Слои приложения, где живёт бизнес-логика | [Проект и фреймворки — о разделе](/encyclopedia/4-code-dev/4-04-proekt-i-freymvorki/intro) · [Технический дизайн](./128) |
| ORM, маппинг сущностей на таблицы | [ORM — о разделе](/encyclopedia/4-code-dev/4-10-orm-i-rabota-s-dannymi/intro) |
| Ошибки, исключения в сценариях | [Ошибки и отказоустойчивость](/encyclopedia/4-code-dev/4-06-arhitektura-vypolneniya/111) |

Закрепление: [Итоги](/encyclopedia/7-project/7-04-analitika/998), [Чек-лист](/encyclopedia/7-project/7-04-analitika/999).

<DocCardList />

{/* sidebar-collections */}

---

## В подборках

Статья входит в [тематические подборки](/about/collections) и блок «С чего начать?» на [главной](/). Соседние шаги того же маршрута:

**Системная аналитика** — [Основы анализа требований](/encyclopedia/7-project/7-04-analitika/111), [BPMN-движки Camunda и Flowable](/encyclopedia/7-project/7-04-analitika/130), [Основы бизнеса для IT-специалиста](/encyclopedia/1-basics/1-29-gosudarstvo-i-biznes/112), [Программные платформы](/encyclopedia/2-system-network/2-02-platformy/3), [Корпоративное ПО](/encyclopedia/2-system-network/2-02-platformy/3001), [Платформенные решения в бизнесе](/encyclopedia/2-system-network/2-02-platformy/3002).

**ERP, 1С и отраслевое ПО** — [Внедрение ERP — о разделе](/encyclopedia/7-project/7-15-vnedrenie-erp-sistem/intro), [Платформа 1С](/encyclopedia/5-languages/5-27-1s/1), [1С — о разделе](/encyclopedia/5-languages/5-27-1s/intro), [Отраслевое ПО — итоги](/encyclopedia/9-spinoff/9-06-otraslevoe-po/2), [Adobe](/encyclopedia/9-spinoff/9-06-otraslevoe-po/11), [Отраслевое программное обеспечение](/encyclopedia/9-spinoff/9-06-otraslevoe-po/1).

{/* /sidebar-collections */}

---
