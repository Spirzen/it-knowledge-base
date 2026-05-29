---
title: Управление реляционными СУБД — о разделе
description: Подборка материалов раздела Управление реляционными СУБД в энциклопедии Вселенная IT
sidebar_label: Управление реляционными СУБД — о разделе
---

import DocCardList from '@theme/DocCardList';

# О разделе

Практика **администрирования и эксплуатации** реляционных СУБД: установка, ресурсы, резервное копирование, безопасность, мониторинг. Теория запросов и транзакций — в разделе [SQL](/encyclopedia/3-data-markup/3-07-sql/intro); основы моделей — в [Основах баз данных](/encyclopedia/3-data-markup/3-05-osnovy-baz-dannyh/intro).

---

## С чего начать

1. [Обзор администрирования РСУБД](./1.md) — [роль DBA и инструменты](./1.md#rol-administratora-i-instrumenty), жизненный цикл, WAL, сеть, типовые риски; [семь стратегий масштабирования](./1.md#sem-strategij-masshtabirovaniya) и [девять рычагов производительности](./1.md#devyat-rychagov-proizvoditelnosti). Критерии выбора СУБД на старте проекта — [в организации](/encyclopedia/3-data-markup/3-05-osnovy-baz-dannyh/6.md#vybor-subd). Теоретический конспект (B⁺, LSM, 2PC, CDC) — [опорные темы](/encyclopedia/3-data-markup/3-05-osnovy-baz-dannyh/12.md).
2. [Администрирование БД в облаке](./3.md) — managed-сервисы, shared responsibility, бэкапы.
3. [Справочник PostgreSQL](./2.md) — параметры, `pg_dump`, PITR, [новинки PostgreSQL 16](./2.md#novinki-postgresql-16), [FDW и dblink](./2.md#foreign-data-wrapper-fdw), [конфигурация для 1С](./2.md#postgresql-i-1s), `pg_stat_io`.
4. [PostgreSQL](./211.md) — установка, `initdb`, роли, бэкапы.
5. [Microsoft SQL Server](./212.md) — экземпляр, T-SQL, SSMS (теория T-SQL также в [882](/encyclopedia/3-data-markup/3-07-sql/882.md)).
6. [Oracle Database](./213.md) — экземпляр, PDB, RMAN в общих чертах.

Теория сбоев и журналов: [Восстановление после сбоя](/encyclopedia/3-data-markup/3-05-osnovy-baz-dannyh/8.md). Роль БД в компании: [6.md](/encyclopedia/3-data-markup/3-05-osnovy-baz-dannyh/6.md).

Если вы только учите SQL как язык, этот раздел можно отложить до первого деплоя или стажировки в эксплуатации.

**Подключение и CRUD из приложения (API по языкам):** [SQLite](/encyclopedia/3-data-markup/3-07-sql/887), [PostgreSQL](/encyclopedia/3-data-markup/3-07-sql/888) (установка и psql — [101](/encyclopedia/3-data-markup/3-07-sql/101.md)), [MySQL](/encyclopedia/3-data-markup/3-07-sql/889) (администрирование — [справочник MySQL](./211.md)), [Microsoft SQL Server](/encyclopedia/3-data-markup/3-07-sql/890) (эксплуатация — [212](./212.md)).

Документация PostgreSQL на русском — [postgrespro.ru/docs/postgresql/16](https://postgrespro.ru/docs/postgresql/16). Маршрут новичка — [101 → 888 → 891 → 2.md](/encyclopedia/3-data-markup/3-07-sql/intro).

---

## Что здесь не повторяем

- Написание `SELECT` / `JOIN` / транзакций — глава [SQL](/encyclopedia/3-data-markup/3-07-sql/intro); сводные практические главы по СУБД — [887](/encyclopedia/3-data-markup/3-07-sql/887)–[890](/encyclopedia/3-data-markup/3-07-sql/890).
- NoSQL и распределённая согласованность — [NoSQL](/encyclopedia/3-data-markup/3-06-nosql/intro).

<DocCardList />

---
