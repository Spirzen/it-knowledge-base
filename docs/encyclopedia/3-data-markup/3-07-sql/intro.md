---
title: SQL — о разделе
description: "Раздел охватывает SQL от основ до администрирования. Рекомендуемая последовательность для новичков: 1."
sidebar_label: SQL — о разделе
related:
  - title: "Контейнеризация и оркестрация — о разделе"
    doc: encyclopedia/8-infra-security/8-06-konteynerizatsiya-i-orkestratsiya/intro
  - title: "Практикум PostgreSQL — о разделе"
    doc: encyclopedia/8-infra-security/8-11-praktikum-postgresql/intro
  - title: "phpPgAdmin — о разделе"
    doc: encyclopedia/5-languages/5-07-php/phppgadmin/intro
  - title: "JavaScript — о разделе"
    doc: encyclopedia/5-languages/5-01-javascript/intro
  - title: "Микросервисы и интеграция — о разделе"
    doc: encyclopedia/8-infra-security/8-05-mikroservisy-i-integratsiya/intro
  - title: "Python — о разделе"
    doc: encyclopedia/5-languages/5-02-python/intro
  - title: "Анализ данных — о разделе"
    doc: encyclopedia/3-data-markup/3-11-analiz-dannyh/intro
  - title: "NoSQL — о разделе"
    doc: encyclopedia/3-data-markup/3-06-nosql/intro
  - title: "Low-code и No-code платформы"
    doc: encyclopedia/8-infra-security/8-02-low-code-no-code/1
  - title: "Техническое письмо — о разделе"
    doc: encyclopedia/7-project/7-08-tehnicheskoe-pismo/intro
  - title: "SQL — реальные кейсы"
    doc: lab/examples/1152
  - title: "Основы баз данных — о разделе"
    doc: encyclopedia/3-data-markup/3-05-osnovy-baz-dannyh/intro
---

import DocCardList from '@theme/DocCardList';

# О разделе

> **Сначала:** [Что такое код и как он работает](/encyclopedia/4-code-dev/4-02-chto-takoe-kod-i-kak-on-rabotaet/1) — общая база: **код**, **блок кода**, как текст превращается в исполняемые инструкции; в этом разделе — **язык запросов SQL** и работа с данными в таблицах.

<div class="callout callout--tip">
  <div class="callout-title">PostgreSQL — установите и потренируйтесь</div>

  <div class="callout-body">
  PostgreSQL — рекомендуемая СУБД для практики **всем** в IT, независимо от языка программирования.

  Поставьте сервер на свой компьютер, откройте psql и пройдите маршрут ниже.

  Обзор установки — [СУБД в Инструментах](/tools/data/1).
</div>
  </div>

Раздел охватывает SQL от основ до администрирования. Рекомендуемая последовательность для новичков:

1. [Эволюция систем хранения данных](./102.md) → [Реляционная модель](./103.md) ([таблица, ключи, связи, JOIN](./103.md#otnoshenie-na-praktike)) → [Нормализация](./104.md) (1НФ–4НФ, НФБК, денормализация)
2. [Принципы работы SQL-движка](./2.md) ([порядок выполнения](./2.md#базовый-порядок-выполнения-семь-шагов); [путь внутри СУБД](./2.md#путь-sql-внутри-субд); [четыре подсистемы](./2.md#четыре-подсистемы-обработки-sql) — Transport, Query Processor, parse tree, план; [архитектура PostgreSQL](./2.md#архитектура-postgresql-компоненты-субд)) → [Категории команд](./22.md#краткая-шпаргалка-команды-по-назначению) (DDL/DML/TCL в одной таблице) → [Операторы в коде](/encyclopedia/4-code-dev/4-02-chto-takoe-kod-i-kak-on-rabotaet/33) (базис перед `WHERE` и логикой) → [Оператор SELECT](./107.md#краткая-шпаргалка-конструкции-чтения) → [Фильтрация и NULL](./109.md) → [Фильтрация и группировка](./6.md#шпаргалка-агрегаты-и-группировка)
3. [Первые шаги с SQL](./101.md) → [Практикум shop_data](./111.md) → [SQL — реальные кейсы](/lab/Примеры/1152) (готовые запросы с построчным разбором на той же схеме магазина) → [Словарь данных и каталоги](./105.md)  
   **PostgreSQL:** после [101](./101.md) (установка, psql, [pgAdmin](./101.md#pgadmin-4)) — [888](./888.md) (сервер, psql, API) → [phpPgAdmin](/encyclopedia/5-languages/5-07-php/phppgadmin/intro) (веб-клиент на PHP-стеке) → [демобаза demo — авиакомпания](./891.md) → [справочник администратора](/encyclopedia/3-data-markup/3-08-upravlenie-rsubd/2.md). Продвинутая эксплуатация — [практикум PostgreSQL 8.11](/encyclopedia/8-infra-security/8-11-praktikum-postgresql/intro).
4. [Подзапросы и EXISTS](./108.md) → [JOIN](./55.md) ([четыре типа на одном примере](./55.md#chetyre-osnovnyh-join-na-odnom-primere)) → [CTE](./551.md) → [функции в коде](/encyclopedia/4-code-dev/4-02-chto-takoe-kod-i-kak-on-rabotaet/4) → [оконные функции](./7.md) → [иерархии в реляционной БД](./886.md)
5. [Транзакции](./77.md) → [Конкурентный доступ (теория)](/encyclopedia/3-data-markup/3-05-osnovy-baz-dannyh/7.md) → [блокировки](./110.md) → [оптимизация](./881.md) → [сложные индексы](./884.md) → [масштабирование БД — 7 стратегий](/encyclopedia/3-data-markup/3-08-upravlenie-rsubd/1.md#sem-strategij-masshtabirovaniya) → [восстановление после сбоя](/encyclopedia/3-data-markup/3-05-osnovy-baz-dannyh/8.md) → [резервное копирование](./106.md)
6. [SQLite — практическая работа и API](./887.md) — встроенная СУБД, команды, типы и API по языкам
7. [PostgreSQL — практическая работа и API](./888.md) → [Практикум demo — авиакомпания](./891.md) — серверная СУБД, команды, типы и API по языкам
8. [MySQL — практическая работа и API](./889.md) — серверная СУБД, команды, типы и API по языкам
9. [Microsoft SQL Server — практическая работа и API](./890.md) — серверная СУБД, T-SQL, команды, типы и API по языкам
10. [Шпаргалка типичных задач](./885.md) — после основ; рецепты на схеме магазина, не замена главам 107–108. Для учёбы с разбором каждой строки — [SQL — реальные кейсы](/lab/Примеры/1152)  
    [Шпаргалка SQL — четыре СУБД на одной схеме](./892.md) — SQLite, Oracle, MySQL, PostgreSQL на TABLE1–3; сравнение `ALTER` и JOIN
11. Табличные операции в Python (Pandas, Polars, PySpark) рядом с SQL — [напоминалка](/encyclopedia/3-data-markup/3-11-analiz-dannyh/426); типовые вызовы только в Pandas — [428](/encyclopedia/3-data-markup/3-11-analiz-dannyh/428)
11. Для углубления по **Microsoft SQL Server**: теория [T-SQL](./882.md) и [справочник](/encyclopedia/3-data-markup/3-08-upravlenie-rsubd/212) → практика на [Microsoft Learn](/tools/documentation/6) (учебник Transact-SQL, SSMS).

**Практика по СУБД (подключение, CRUD, API по языкам):**

- [SQLite](./887.md)
- [PostgreSQL](./888.md)
- [MySQL](./889.md)
- [Microsoft SQL Server](./890.md)

**Веб-админки (PostgreSQL / MySQL на PHP-стеке):** [phpPgAdmin](/encyclopedia/5-languages/5-07-php/phppgadmin/intro) · [phpMyAdmin](/encyclopedia/5-languages/5-07-php/phpmyadmin/intro)

**Продвинутая эксплуатация PostgreSQL** (MVCC, Docker, K8s, репликация) — [практикум 8.11](/encyclopedia/8-infra-security/8-11-praktikum-postgresql/intro).

Интерактивная практика: [SQL-тренажёр](./1.md) (схема shop_data, JOIN, GROUP BY, DML), [практикум shop_data](./111.md) и галерея кейсов с разбором — [SQL — реальные кейсы](/lab/Примеры/1152).

При подключении к БД из backend-кода используйте параметризованные запросы (`?`, `@param`) — иначе пользовательский ввод может изменить логику SQL. Обзор атак: [типы SQL-инъекций](/encyclopedia/8-infra-security/8-07-informatsionnaya-bezopasnost/123#sql-injection-tautology).

Отдельный конструктор запросов автора проекта — [SQL Generator Online](https://spirzen.github.io/SQLGeneratorOnline/): визуальная сборка SQL по правилам языка и генерация INSERT из загруженной таблицы Excel для импорта в БД. Под встроенным тренажёром на странице [SQL — язык](./1.md) есть та же ссылка.

<DocCardList />

{/* sidebar-collections */}

---

## В подборках

Статья входит в [тематические подборки](/about/collections) и блок «С чего начать?» на [главной](/). Соседние шаги того же маршрута:

**Бэкенд и серверная разработка** — [Контейнеризация и оркестрация — о разделе](/encyclopedia/8-infra-security/8-06-konteynerizatsiya-i-orkestratsiya/intro), [JavaScript — о разделе](/encyclopedia/5-languages/5-01-javascript/intro), [Микросервисы и интеграция — о разделе](/encyclopedia/8-infra-security/8-05-mikroservisy-i-integratsiya/intro), [Python — о разделе](/encyclopedia/5-languages/5-02-python/intro), [Методы защиты пользовательских и корпоративных данных](/encyclopedia/8-infra-security/8-03-zabota-o-kode-i-dannyh/117), [Java — о разделе](/encyclopedia/5-languages/5-03-java/intro).

**Базы данных** — [Основы баз данных — о разделе](/encyclopedia/3-data-markup/3-05-osnovy-baz-dannyh/intro), [NoSQL — о разделе](/encyclopedia/3-data-markup/3-06-nosql/intro), [Структуры данных — о разделе](/encyclopedia/3-data-markup/3-02-struktury-dannyh/intro), [Управление реляционными СУБД — о разделе](/encyclopedia/3-data-markup/3-08-upravlenie-rsubd/intro), [Базовые операции с данными — о разделе](/encyclopedia/1-basics/1-10-bazovye-operatsii-s-dannymi/intro), [ORM и работа с данными — о разделе](/encyclopedia/4-code-dev/4-10-orm-i-rabota-s-dannymi/intro).

**Аналитика данных** — [Основы баз данных — о разделе](/encyclopedia/3-data-markup/3-05-osnovy-baz-dannyh/intro), [NoSQL — о разделе](/encyclopedia/3-data-markup/3-06-nosql/intro), [Структуры данных — о разделе](/encyclopedia/3-data-markup/3-02-struktury-dannyh/intro), [Продвинутые операции с данными — о разделе](/encyclopedia/3-data-markup/3-01-prodvinutye-operatsii-s-dannymi/intro), [Данные и информация — о разделе](/encyclopedia/1-basics/1-09-dannye-i-informatsiya/intro), [Анализ данных — о разделе](/encyclopedia/3-data-markup/3-11-analiz-dannyh/intro).

**Системная аналитика** — [Low-code и No-code платформы](/encyclopedia/8-infra-security/8-02-low-code-no-code/1), [Техническое письмо — о разделе](/encyclopedia/7-project/7-08-tehnicheskoe-pismo/intro), [Основы интеграционного взаимодействия — о разделе](/encyclopedia/2-system-network/2-09-osnovy-integratsionnogo-vzaimodeystviya/intro), [Аутентификация и авторизация](/encyclopedia/2-system-network/2-08-osnovy-informatsionnoy-bezopasnosti/111), [Основы архитектуры](/encyclopedia/4-code-dev/4-04-proekt-i-freymvorki/112), [Платформенные решения в бизнесе](/encyclopedia/2-system-network/2-02-platformy/3002).

{/* /sidebar-collections */}

---
