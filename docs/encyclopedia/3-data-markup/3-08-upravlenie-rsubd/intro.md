---
title: Управление реляционными СУБД — о разделе
description: Подборка материалов раздела Управление реляционными СУБД в энциклопедии Вселенная IT
sidebar_label: Управление реляционными СУБД — о разделе
related:
  - title: "NoSQL — о разделе"
    doc: encyclopedia/3-data-markup/3-06-nosql/intro
  - title: "ORM и работа с данными — о разделе"
    doc: encyclopedia/4-code-dev/4-10-orm-i-rabota-s-dannymi/intro
  - title: "SQL — о разделе"
    doc: encyclopedia/3-data-markup/3-07-sql/intro
  - title: "PostgreSQL — о разделе"
    doc: encyclopedia/8-infra-security/8-11-praktikum-postgresql/intro
---

import DocCardList from '@theme/DocCardList';

# О разделе

Практика **администрирования и эксплуатации** реляционных СУБД — установка, ресурсы, резервное копирование, безопасность, мониторинг. Теория запросов и транзакций — в разделе [SQL](/encyclopedia/3-data-markup/3-07-sql/intro); основы моделей — в [Основах баз данных](/encyclopedia/3-data-markup/3-05-osnovy-baz-dannyh/intro). Мониторинг СУБД — [Практикум PostgreSQL, шаг 11](/encyclopedia/8-infra-security/8-11-praktikum-postgresql/11), [Zabbix](/encyclopedia/2-system-network/2-06-sistemnoe-administrirovanie/zabbix-praktikum/intro), [Prometheus](/encyclopedia/2-system-network/2-06-sistemnoe-administrirovanie/prometheus-grafana-praktikum/intro).

---

## С чего начать

1. [Обзор администрирования РСУБД](./1.md) — [роль DBA и инструменты](./1.md#rol-administratora-i-instrumenty), жизненный цикл, WAL, сеть, типовые риски; [семь стратегий масштабирования](./1.md#sem-strategij-masshtabirovaniya) и [девять рычагов производительности](./1.md#devyat-rychagov-proizvoditelnosti). Критерии выбора СУБД на старте проекта — [в организации](/encyclopedia/3-data-markup/3-05-osnovy-baz-dannyh/6.md#vybor-subd). Теоретический конспект (B⁺, LSM, 2PC, CDC) — [опорные темы](/encyclopedia/3-data-markup/3-05-osnovy-baz-dannyh/12.md).
2. [Администрирование БД в облаке](./3.md) — managed-сервисы, shared responsibility, бэкапы.
3. [Справочник PostgreSQL](./2.md) — параметры, `pg_dump`, PITR, [новинки PostgreSQL 16](./2.md#novinki-postgresql-16), [FDW и dblink](./2.md#foreign-data-wrapper-fdw), [конфигурация для 1С](./2.md#postgresql-i-1s), `pg_stat_io`.
4. [PostgreSQL](./211.md) — установка, `initdb`, роли, бэкапы.
5. [Microsoft SQL Server](./212.md) — экземпляр, T-SQL, SSMS (теория T-SQL также в [Процедурные расширения - PL/pgSQL, T-SQL](/encyclopedia/3-data-markup/3-07-sql/882.md)).
6. [Oracle Database](./213.md) — экземпляр, PDB, RMAN в общих чертах.

Теория сбоев и журналов: [Восстановление после сбоя](/encyclopedia/3-data-markup/3-05-osnovy-baz-dannyh/8.md). Роль БД в компании: [Роль базы данных в организации](/encyclopedia/3-data-markup/3-05-osnovy-baz-dannyh/6.md).

Если вы только учите SQL как язык, этот раздел можно отложить до первого деплоя или стажировки в эксплуатации.

Продвинутая эксплуатация — MVCC, Kubernetes, HA, Wal-G — в [практикуме PostgreSQL (раздел 8.11)](/encyclopedia/8-infra-security/8-11-praktikum-postgresql/intro). Визуальная работа с SQL на PHP-стеке — [phpPgAdmin](/encyclopedia/5-languages/5-07-php/phppgadmin/intro).

**Подключение и CRUD из приложения (API по языкам):** [SQLite](/encyclopedia/3-data-markup/3-07-sql/887), [PostgreSQL](/encyclopedia/3-data-markup/3-07-sql/888) (установка и psql — [Первые шаги с SQL](/encyclopedia/3-data-markup/3-07-sql/101.md)), [MySQL](/encyclopedia/3-data-markup/3-07-sql/889) (администрирование — [справочник MySQL](./211.md)), [Microsoft SQL Server](/encyclopedia/3-data-markup/3-07-sql/890) (эксплуатация — [Справочник по Microsoft SQL Server](./212.md)).

Документация PostgreSQL на русском — [postgrespro.ru/docs/postgresql/16](https://postgrespro.ru/docs/postgresql/16). Маршрут новичка — [Первые шаги с SQL](/encyclopedia/3-data-markup/3-07-sql/101) → [PostgreSQL — практическая работа и API](/encyclopedia/3-data-markup/3-07-sql/888) → [Практикум demo — авиакомпания PostgreSQL](/encyclopedia/3-data-markup/3-07-sql/891) → [SQL — о разделе](/encyclopedia/3-data-markup/3-07-sql/intro).

---

## Что здесь не повторяем

- Написание `SELECT` / `JOIN` / транзакций — глава [SQL](/encyclopedia/3-data-markup/3-07-sql/intro); сводные практические главы по СУБД — [SQLite — практическая работа и API](/encyclopedia/3-data-markup/3-07-sql/887)–[Microsoft SQL Server — практическая работа и API](/encyclopedia/3-data-markup/3-07-sql/890).
- NoSQL и распределённая согласованность — [NoSQL](/encyclopedia/3-data-markup/3-06-nosql/intro).

<DocCardList />

{/* sidebar-collections */}

---

## В подборках

Статья входит в [тематические подборки](/about/collections) и блок "С чего начать?" на [главной](/). Соседние шаги того же маршрута:

**Базы данных** — [NoSQL — о разделе](/encyclopedia/3-data-markup/3-06-nosql/intro), [ORM и работа с данными — о разделе](/encyclopedia/4-code-dev/4-10-orm-i-rabota-s-dannymi/intro), [SQL — о разделе](/encyclopedia/3-data-markup/3-07-sql/intro), [PostgreSQL — о разделе](/encyclopedia/8-infra-security/8-11-praktikum-postgresql/intro), [Основы баз данных — о разделе](/encyclopedia/3-data-markup/3-05-osnovy-baz-dannyh/intro), [Структуры данных — о разделе](/encyclopedia/3-data-markup/3-02-struktury-dannyh/intro).

{/* /sidebar-collections */}

---
