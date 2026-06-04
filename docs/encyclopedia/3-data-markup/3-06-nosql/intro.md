---
title: NoSQL — о разделе
description: "Раздел про NoSQL (Not Only SQL): альтернативы и дополнения к реляционным СУБД для масштаба, гибкой схемы и распределённых систем."
sidebar_label: NoSQL — о разделе
related:
  - title: "Анализ данных — о разделе"
    doc: encyclopedia/3-data-markup/3-11-analiz-dannyh/intro
  - title: "SQL — о разделе"
    doc: encyclopedia/3-data-markup/3-07-sql/intro
  - title: "Управление реляционными СУБД — о разделе"
    doc: encyclopedia/3-data-markup/3-08-upravlenie-rsubd/intro
  - title: "Основы баз данных — о разделе"
    doc: encyclopedia/3-data-markup/3-05-osnovy-baz-dannyh/intro
  - title: "ORM и работа с данными — о разделе"
    doc: encyclopedia/4-code-dev/4-10-orm-i-rabota-s-dannymi/intro
  - title: "Продвинутые операции с данными — о разделе"
    doc: encyclopedia/3-data-markup/3-01-prodvinutye-operatsii-s-dannymi/intro
---

import DocCardList from '@theme/DocCardList';

# О разделе

Раздел про **NoSQL** (Not Only SQL): альтернативы и дополнения к реляционным СУБД для масштаба, гибкой схемы и распределённых систем.

Практика реляционных СУБД из кода (до NoSQL): [SQLite](/encyclopedia/3-data-markup/3-07-sql/887), [PostgreSQL](/encyclopedia/3-data-markup/3-07-sql/888), [MySQL](/encyclopedia/3-data-markup/3-07-sql/889), [Microsoft SQL Server](/encyclopedia/3-data-markup/3-07-sql/890).

Массовые операции (`insertMany`, `_bulk`, Redis `--pipe`) — [Пакетная работа с данными](/encyclopedia/3-data-markup/3-11-analiz-dannyh/433#nosql-batch).

---

## Маршрут обучения

1. [История NoSQL](/encyclopedia/3-data-markup/3-06-nosql/1) — контекст и эволюция семейств СУБД.
2. [Основы NoSQL](/encyclopedia/3-data-markup/3-06-nosql/2) — модели данных, CAP, репликация, сравнение с SQL. Leader-based кластеры — [выбор лидера](/encyclopedia/7-project/7-06-proektirovanie-i-arhitektura/142.md).
3. [Операторы в коде](/encyclopedia/4-code-dev/4-02-chto-takoe-kod-i-kak-on-rabotaet/33) (базис перед `$gt`, `$and` и условиями) → [функции в коде](/encyclopedia/4-code-dev/4-02-chto-takoe-kod-i-kak-on-rabotaet/4) (вызов в программе; аналог в запросах — [функции в SQL](../3-07-sql/7)) → [Синтаксис запросов](/encyclopedia/3-data-markup/3-06-nosql/3) — JSON, mongosh, Redis, CQL, Cypher.
4. Практика по системам (в главах есть примеры `redis-cli`, CQL, Cypher): [MongoDB](/encyclopedia/3-data-markup/3-06-nosql/4) (связи коллекций, [шаблоны схем](/encyclopedia/3-data-markup/3-06-nosql/4#проектирование-схемы), GridFS, типы BSON) → [проектирование схемы](/encyclopedia/3-data-markup/3-06-nosql/412), [Redis](/encyclopedia/3-data-markup/3-06-nosql/5) → [первые шаги](/encyclopedia/3-data-markup/3-06-nosql/511) → [справочник](/encyclopedia/3-data-markup/3-06-nosql/51), [Cassandra](/encyclopedia/3-data-markup/3-06-nosql/6), [графы](/encyclopedia/3-data-markup/3-06-nosql/7), [Memcached](/encyclopedia/3-data-markup/3-06-nosql/8).
5. [NewSQL](/encyclopedia/3-data-markup/3-06-nosql/811) — SQL + ACID + горизонтальный OLTP (CockroachDB, Spanner).
6. [Итоги](/encyclopedia/3-data-markup/3-06-nosql/98) и [чек-лист с подсказками](/encyclopedia/3-data-markup/3-06-nosql/99).

Практикумы: [MongoDB](/encyclopedia/3-data-markup/3-06-nosql/411#сквозной-практикум-15-минут) (CRUD, `$lookup`, GridFS), [Cassandra](/encyclopedia/3-data-markup/3-06-nosql/611#сквозной-практикум-15-минут), [Redis — первые шаги](/encyclopedia/3-data-markup/3-06-nosql/511), [Cypher](/encyclopedia/3-data-markup/3-06-nosql/7#мини-практикум-в-neo4j-browser), [Memcached](/encyclopedia/3-data-markup/3-06-nosql/8), [CockroachDB SQL](/encyclopedia/3-data-markup/3-06-nosql/811#мини-практикум-cockroachdb-и-sql).

Справочники (синтаксис и ограничения): MongoDB (`41`), Redis (`51`), Cassandra (`61`), Cypher (`71`), Memcached (`81`).

Пошаговый протокол: [Первые шаги с Memcached](/encyclopedia/3-data-markup/3-06-nosql/8111).

---

## Мини-глоссарий

| Термин | Кратко |
|--------|--------|
| **Consistency (CAP)** | Согласованность реплик на узлах — отдельно от **Consistency (ACID)** (инварианты транзакции). См. [Основы NoSQL](./2.md#концептуальные-основы). |
| **Partition key** | Определяет, на каком узле кластера лежит партиция (Cassandra, DynamoDB). |
| **Replication factor (RF)** | Сколько копий каждой партиции хранится в кластере. |
| **Eventual consistency** | Реплики сходятся со временем; чтение сразу после записи может вернуть старое значение. |
| **Schema-on-read** | Структура данных определяется при чтении (гибкие документы). |
| **Schema-on-write** | Структура проверяется при записи (классические таблицы SQL, валидаторы MongoDB). |
| **Denormalization** | Дублирование данных в одном документе/таблице ради одного быстрого запроса. |
| **Tombstone** | Маркер удаления в LSM-хранилищах (Cassandra); влияет на compaction. |
| **Commit log** | Журнал записи на диск до memtable; обеспечивает durability (аналог WAL в других СУБД). |
| **Memtable / SSTable** | RAM-буфер записи (часто skip list) и неизменяемые файлы на диске после flush; цепочка LSM — [восемь структур](/encyclopedia/3-data-markup/3-05-osnovy-baz-dannyh/3.md#vosem-struktur-indeksa-i-hraneniya). |
| **Wide-column store** | Модель Cassandra/Bigtable: partition key + clustering columns. |

<DocCardList />

{/* sidebar-collections */}

---

## В подборках

Статья входит в [тематические подборки](/about/collections) и блок «С чего начать?» на [главной](/). Соседние шаги того же маршрута:

**Базы данных** — [SQL — о разделе](/encyclopedia/3-data-markup/3-07-sql/intro), [Управление реляционными СУБД — о разделе](/encyclopedia/3-data-markup/3-08-upravlenie-rsubd/intro), [Основы баз данных — о разделе](/encyclopedia/3-data-markup/3-05-osnovy-baz-dannyh/intro), [ORM и работа с данными — о разделе](/encyclopedia/4-code-dev/4-10-orm-i-rabota-s-dannymi/intro), [Структуры данных — о разделе](/encyclopedia/3-data-markup/3-02-struktury-dannyh/intro), [PostgreSQL — о разделе](/encyclopedia/8-infra-security/8-11-praktikum-postgresql/intro).

**Аналитика данных** — [SQL — о разделе](/encyclopedia/3-data-markup/3-07-sql/intro), [Продвинутые операции с данными — о разделе](/encyclopedia/3-data-markup/3-01-prodvinutye-operatsii-s-dannymi/intro), [Основы баз данных — о разделе](/encyclopedia/3-data-markup/3-05-osnovy-baz-dannyh/intro), [Анализ данных — о разделе](/encyclopedia/3-data-markup/3-11-analiz-dannyh/intro), [Структуры данных — о разделе](/encyclopedia/3-data-markup/3-02-struktury-dannyh/intro), [Python — о разделе](/encyclopedia/5-languages/5-02-python/intro).

{/* /sidebar-collections */}

---
