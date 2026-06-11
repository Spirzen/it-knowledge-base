---
title: phpPgAdmin — о разделе
description: "Веб-интерфейс на PHP для PostgreSQL: pgsql, config.inc.php, схемы, роли, SQL и pg_dump — параллель phpMyAdmin."
sidebar_label: phpPgAdmin — о разделе
related:
  - title: "phpMyAdmin — о разделе"
    doc: encyclopedia/5-languages/5-07-php/phpmyadmin/intro
  - title: "История phpMyAdmin, phpPgAdmin и веб-админок БД на PHP"
    doc: encyclopedia/5-languages/5-07-php/phpmyadmin/5
  - title: "SQL — о разделе"
    doc: encyclopedia/3-data-markup/3-07-sql/intro
  - title: "PostgreSQL — практика и API"
    doc: encyclopedia/3-data-markup/3-07-sql/888
  - title: "Практикум PostgreSQL — о разделе"
    doc: encyclopedia/8-infra-security/8-11-praktikum-postgresql/intro
  - title: "Локальная среда разработки на PHP"
    doc: encyclopedia/5-languages/5-07-php/113
---

import DocCardList from '@theme/DocCardList';

# О разделе

**phpPgAdmin** — веб-приложение на PHP для администрирования **PostgreSQL**. По назначению оно близко к [phpMyAdmin](/encyclopedia/5-languages/5-07-php/phpmyadmin/intro), но использует расширение **pgsql**, диалект SQL PostgreSQL и модель **ролей** и **схем**.

Проект вырос из **WebDB** (начало 2002) и был переименован в phpPgAdmin в ветке 3.0.0-dev-1. Подробная хронология — в статье [История phpMyAdmin, phpPgAdmin и веб-админок БД на PHP](/encyclopedia/5-languages/5-07-php/phpmyadmin/5).

<div class="callout callout--info">
  <div class="callout-title">pgAdmin и phpPgAdmin</div>

  <div class="callout-body">
  В учебных и промышленных средах для PostgreSQL чаще встречают <strong>pgAdmin 4</strong> (отдельное приложение, не PHP). phpPgAdmin остаётся полезен там, где уже есть LAMP/PHP-стек и нужен лёгкий веб-клиент без установки pgAdmin.
  </div>
</div>

---

## Рекомендуемый порядок

| Шаг | Статья | Содержание |
|-----|--------|------------|
| 0 | [История веб-админок](/encyclopedia/5-languages/5-07-php/phpmyadmin/5) | WebDB, MySQL-Webadmin, эпохи версий |
| 1 | [Что такое phpPgAdmin](./1) | Архитектура, стеки, отличия от phpMyAdmin |
| 2 | [Требования, установка и подключение](./2) | PHP pgsql, `postgresql.conf`, `pg_hba`, config |
| 3 | [SQL, DDL и DML](./3) | Схемы, таблицы, sequences, роли |
| 4 | [Дампы, роли и FAQ](./4) | pg_dump, безопасность, типичные ошибки |

База по PostgreSQL — [раздел 3.07 SQL](/encyclopedia/3-data-markup/3-07-sql/intro) ([PostgreSQL — практическая работа и API](/encyclopedia/3-data-markup/3-07-sql/888), [Первые шаги с SQL](/encyclopedia/3-data-markup/3-07-sql/101)) и [локальная среда](/encyclopedia/5-languages/5-07-php/113#postgresql). Продвинутая эксплуатация (MVCC, Docker, репликация, Wal-G) — [практикум PostgreSQL 8.11](/encyclopedia/8-infra-security/8-11-praktikum-postgresql/intro).

---

## Связь с главами SQL и практикумом 8.11

phpPgAdmin закрывает **визуальный слой** над тем же SQL, что в [3.07](/encyclopedia/3-data-markup/3-07-sql/intro). После освоения вкладки SQL переходите к углублённым темам:

| Тема в phpPgAdmin | Глава SQL | Практикум 8.11 |
|-------------------|-----------|----------------|
| DDL/DML, схемы, роли | [Первые шаги с SQL](/encyclopedia/3-data-markup/3-07-sql/101), [PostgreSQL — практическая работа и API](/encyclopedia/3-data-markup/3-07-sql/888), [111 shop_data](/encyclopedia/3-data-markup/3-07-sql/111) | — |
| JOIN, CTE, окна | [Алиасы, JOIN и объединение таблиц](/encyclopedia/3-data-markup/3-07-sql/55), [Общие табличные выражения (CTE)](/encyclopedia/3-data-markup/3-07-sql/551), [Иерархические данные в реляционных БД](/encyclopedia/3-data-markup/3-07-sql/886) | [JSONB и партиции](/encyclopedia/8-infra-security/8-11-praktikum-postgresql/4) |
| Транзакции, блокировки | [Транзакции, изоляция и блокировки](/encyclopedia/3-data-markup/3-07-sql/77), [Блокировки и конкурентный доступ в PostgreSQL](/encyclopedia/3-data-markup/3-07-sql/110) | [Архитектура MVCC](/encyclopedia/8-infra-security/8-11-praktikum-postgresql/1) |
| EXPLAIN, индексы | [Оптимизация SQL-запросов](/encyclopedia/3-data-markup/3-07-sql/881), [Сложные индексы](/encyclopedia/3-data-markup/3-07-sql/884) | [Оптимизация](/encyclopedia/8-infra-security/8-11-praktikum-postgresql/2) |
| pg_dump / restore | [Резервное копирование и восстановление PostgreSQL](/encyclopedia/3-data-markup/3-07-sql/106) | [Бэкапы Wal-G](/encyclopedia/8-infra-security/8-11-praktikum-postgresql/10) |
| `postgresql.conf`, `pg_hba` | [3.08/2](/encyclopedia/3-data-markup/3-08-upravlenie-rsubd/2) | [Конфигурация](/encyclopedia/8-infra-security/8-11-praktikum-postgresql/3) |

<DocCardList />

---

## См. также

- [Глоссарий — phpPgAdmin](/glossary/P#phppgadmin)
- [Клиенты и инструменты SQL](/encyclopedia/3-data-markup/3-07-sql/4)
- [SQL — о разделе](/encyclopedia/3-data-markup/3-07-sql/intro)
- [Практикум PostgreSQL 8.11](/encyclopedia/8-infra-security/8-11-praktikum-postgresql/intro)
- [phpMyAdmin — SQL, DDL и DML](/encyclopedia/5-languages/5-07-php/phpmyadmin/3) — для сравнения интерфейса на MySQL

---
