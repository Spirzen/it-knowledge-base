---
title: NoSQL — о разделе
description: Подборка материалов раздела NoSQL в энциклопедии Вселенная IT
sidebar_label: NoSQL — о разделе
---

import DocCardList from '@theme/DocCardList';

# О разделе

Раздел про **NoSQL** (Not Only SQL): альтернативы и дополнения к реляционным СУБД для масштаба, гибкой схемы и распределённых систем.

## Маршрут обучения

1. [История NoSQL](/encyclopedia/3-data-markup/3-06-nosql/1) — контекст и эволюция семейств СУБД.
2. [Основы NoSQL](/encyclopedia/3-data-markup/3-06-nosql/2) — модели данных, CAP, репликация, сравнение с SQL.
3. [Синтаксис запросов](/encyclopedia/3-data-markup/3-06-nosql/3) — JSON, mongosh, Redis, CQL, Cypher.
4. Практика по системам (в главах есть примеры `redis-cli`, CQL, Cypher): [MongoDB](/encyclopedia/3-data-markup/3-06-nosql/4) (связи коллекций, GridFS, типы BSON), [Redis](/encyclopedia/3-data-markup/3-06-nosql/5), [Cassandra](/encyclopedia/3-data-markup/3-06-nosql/6), [графы](/encyclopedia/3-data-markup/3-06-nosql/7), [Memcached](/encyclopedia/3-data-markup/3-06-nosql/8).
5. [NewSQL](/encyclopedia/3-data-markup/3-06-nosql/811) — SQL + ACID + горизонтальный OLTP (CockroachDB, Spanner).
6. [Итоги](/encyclopedia/3-data-markup/3-06-nosql/98) и [чек-лист с подсказками](/encyclopedia/3-data-markup/3-06-nosql/99).

Практикумы: [MongoDB](/encyclopedia/3-data-markup/3-06-nosql/411#сквозной-практикум-15-минут) (CRUD, `$lookup`, GridFS), [Cassandra](/encyclopedia/3-data-markup/3-06-nosql/611#сквозной-практикум-15-минут), [Redis](/encyclopedia/3-data-markup/3-06-nosql/5), [Cypher](/encyclopedia/3-data-markup/3-06-nosql/7#мини-практикум-в-neo4j-browser), [Memcached](/encyclopedia/3-data-markup/3-06-nosql/8), [CockroachDB SQL](/encyclopedia/3-data-markup/3-06-nosql/811#мини-практикум-cockroachdb-и-sql).

Справочники (синтаксис и ограничения): MongoDB (`41`), Redis (`51`), Cassandra (`61`), Cypher (`71`).

## Мини-глоссарий

| Термин | Кратко |
|--------|--------|
| **Partition key** | Определяет, на каком узле кластера лежит партиция (Cassandra, DynamoDB). |
| **Replication factor (RF)** | Сколько копий каждой партиции хранится в кластере. |
| **Eventual consistency** | Реплики сходятся со временем; чтение сразу после записи может вернуть старое значение. |
| **Schema-on-read** | Структура данных определяется при чтении (гибкие документы). |
| **Schema-on-write** | Структура проверяется при записи (классические таблицы SQL, валидаторы MongoDB). |
| **Denormalization** | Дублирование данных в одном документе/таблице ради одного быстрого запроса. |
| **Tombstone** | Маркер удаления в LSM-хранилищах (Cassandra); влияет на compaction. |
| **Commit log** | Журнал записи на диск до memtable; обеспечивает durability (аналог WAL в других СУБД). |
| **Memtable / SSTable** | RAM-буфер записи и неизменяемые файлы на диске после flush. |
| **Wide-column store** | Модель Cassandra/Bigtable: partition key + clustering columns. |

<DocCardList />

---
