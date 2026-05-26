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

1. [Обзор администрирования РСУБД](./1.md) — роли DBA, жизненный цикл, WAL, сеть, типовые риски.
2. [Администрирование БД в облаке](./3.md) — managed-сервисы, shared responsibility, бэкапы.
3. [Справочник PostgreSQL](./2.md) — параметры, `pg_dump`, PITR.
4. [PostgreSQL](./211.md) — установка, `initdb`, роли, бэкапы.
5. [Microsoft SQL Server](./212.md) — экземпляр, T-SQL, SSMS (теория T-SQL также в [882](/encyclopedia/3-data-markup/3-07-sql/882.md)).
6. [Oracle Database](./213.md) — экземпляр, PDB, RMAN в общих чертах.

Теория сбоев и журналов: [Восстановление после сбоя](/encyclopedia/3-data-markup/3-05-osnovy-baz-dannyh/8.md). Роль БД в компании: [6.md](/encyclopedia/3-data-markup/3-05-osnovy-baz-dannyh/6.md).

Если вы только учите SQL как язык, этот раздел можно отложить до первого деплоя или стажировки в эксплуатации.

---

## Что здесь не повторяем

- Написание `SELECT` / `JOIN` / транзакций — глава [SQL](/encyclopedia/3-data-markup/3-07-sql/intro).
- NoSQL и распределённая согласованность — [NoSQL](/encyclopedia/3-data-markup/3-06-nosql/intro).

<DocCardList />

---
