---
title: "Практикум PostgreSQL — о разделе"
description: "Продвинутый маршрут по PostgreSQL для инженеров и DevOps — внутреннее устройство, оптимизация, конфигурация, JSONB, репликация, контейнеры, Kubernetes, HA-кластеры, бэкапы и автоматизация."
sidebar_label: "PostgreSQL — о разделе"
related:
  - title: "SQL — о разделе"
    doc: encyclopedia/3-data-markup/3-07-sql/intro
  - title: "phpPgAdmin — о разделе"
    doc: encyclopedia/5-languages/5-07-php/phppgadmin/intro
  - title: "PostgreSQL — практическая работа и API"
    doc: encyclopedia/3-data-markup/3-07-sql/888
  - title: "Управление реляционными СУБД — о разделе"
    doc: encyclopedia/3-data-markup/3-08-upravlenie-rsubd/intro
  - title: "Контейнеризация и оркестрация — о разделе"
    doc: encyclopedia/8-infra-security/8-06-konteynerizatsiya-i-orkestratsiya/intro
  - title: "Практикум Prometheus и Grafana — о разделе"
    doc: encyclopedia/2-system-network/2-06-sistemnoe-administrirovanie/prometheus-grafana-praktikum/intro
  - title: "DevOps, CI-CD — о разделе"
    doc: encyclopedia/8-infra-security/8-04-devops-ci-cd/intro
  - title: "SQL — реальные кейсы"
    doc: lab/examples/1152
  - title: "ORM и работа с данными — о разделе"
    doc: encyclopedia/4-code-dev/4-10-orm-i-rabota-s-dannymi/intro
  - title: "NoSQL — о разделе"
    doc: encyclopedia/3-data-markup/3-06-nosql/intro
---

import DocCardList from '@theme/DocCardList';

# О разделе

**Длинные листинги (от ~15 строк)** вынесены в каталог [code.spirzen.ru](https://code.spirzen.ru/) и подгружаются в статьях через `ExternalCodeEmbed` — PL/pgSQL, Docker Compose, StatefulSet, Ansible и Terraform не раздувают HTML энциклопедии. Короткие фрагменты (`EXPLAIN`, однострочные `ALTER`, команды `psql`) по-прежнему прямо в markdown. Диаграммы **mermaid** — на месте.

Раздел **8.11** — продвинутый практикум по **PostgreSQL** для бэкенд-разработчиков, DBA и DevOps-инженеров. Здесь собран маршрут от **внутреннего устройства** (MVCC, WAL, VACUUM) до **промышленной эксплуатации** в Docker, облаке и Kubernetes с репликацией, бэкапами и автоматизацией через Ansible и Terraform.

Базовый SQL, CRUD из приложения и установка "на голое железо" уже есть в [разделе 3.07](/encyclopedia/3-data-markup/3-07-sql/intro) и [3.08](/encyclopedia/3-data-markup/3-08-upravlenie-rsubd/intro). Этот практикум **углубляет** темы, которые решают задачи production — bloat, wraparound, планы запросов, пулинг соединений, Patroni и Wal-G.

<div class="callout callout--info">
  <div class="callout-title">Для кого раздел</div>

  <div class="callout-body">
  Материал рассчитан на тех, кто уже писал SQL и подключал PostgreSQL из кода, но ещё **не эксплуатировал** СУБД в контейнерах или кластере. Нужны базовый Linux, понимание [Docker](/encyclopedia/8-infra-security/8-06-konteynerizatsiya-i-orkestratsiya/111) и желательно знакомство с [Kubernetes](/encyclopedia/8-infra-security/8-06-konteynerizatsiya-i-orkestratsiya/211).
  </div>
</div>

---

## Маршрут по шагам

| Шаг | Статья | Содержание |
|-----|--------|------------|
| 1 | [Архитектура и внутреннее устройство](./1.md) | MVCC, XID, снимки, системные поля, VACUUM, bloat, wraparound, процессы, Shared Buffers, WAL |
| 2 | [Продвинутая оптимизация и индексы](./2.md) | EXPLAIN, B-tree, GiST, GIN, BRIN, частичные индексы |
| 3 | [Конфигурация postgresql.conf](./3.md) | Память, I/O, autovacuum, checkpoint |
| 4 | [JSONB, партиционирование и расширения SQL](./4.md) | Документы в Postgres, разбиение таблиц, связь с оконными функциями |
| 5 | [PL/pgSQL, триггеры и NOTIFY/LISTEN](./5.md) | Логика на стороне СУБД, аудит, событийные системы |
| 6 | [Репликация, Hot Standby и PgBouncer](./6.md) | Streaming и logical replication, чтение с реплик, пулинг |
| 7 | [PostgreSQL в Docker](./7.md) | Образы, volumes, compose, типовые ошибки |
| 8 | [Облако и Kubernetes](./8.md) | Managed-сервисы, StatefulSet, операторы, секреты |
| 9 | [HA-кластеры и распределённые СУБД](./9.md) | Patroni, Greenplum, CockroachDB — когда что выбирать |
| 10 | [Бэкапы и восстановление](./10.md) | pg_dump, PITR, pg_probackup, Wal-G |
| 11 | [Профилирование и мониторинг](./11.md) | pg_stat_*, auto_explain, pgBadger, Prometheus — [практикум Prometheus](/encyclopedia/2-system-network/2-06-sistemnoe-administrirovanie/prometheus-grafana-praktikum/intro), Zabbix — [практикум Zabbix](/encyclopedia/2-system-network/2-06-sistemnoe-administrirovanie/zabbix-praktikum/intro) |
| 12 | [Автоматизация — Ansible и Terraform](./12.md) | Роли, playbooks, провайдеры облака |

Закрепление — [итоги](./998.md), [чек-лист](./999.md).

---

## Что здесь не повторяем

| Тема | Где уже есть |
|------|--------------|
| Синтаксис SELECT, JOIN, транзакции | [3.07 SQL](/encyclopedia/3-data-markup/3-07-sql/intro), [SQL — реальные кейсы](/lab/Примеры/1152), [практикум shop_data](/encyclopedia/3-data-markup/3-07-sql/111) |
| Оконные функции и CTE | [Шпаргалка с типичными задачами по SQL](/encyclopedia/3-data-markup/3-07-sql/885.md), [Иерархические данные в реляционных БД](/encyclopedia/3-data-markup/3-07-sql/886.md) |
| Практикум JSONB с примерами | [Практикум PostgreSQL по JSONB](/encyclopedia/3-data-markup/3-07-sql/66.md) |
| Установка, pg_dump, справочник параметров | [3.08/2](/encyclopedia/3-data-markup/3-08-upravlenie-rsubd/2.md) |
| Блокировки и конкурентный доступ | [Блокировки и конкурентный доступ в PostgreSQL](/encyclopedia/3-data-markup/3-07-sql/110.md) |
| Резервное копирование (базовый уровень) | [Резервное копирование и восстановление PostgreSQL](/encyclopedia/3-data-markup/3-07-sql/106.md) |
| Веб-интерфейс phpPgAdmin | [5.07/phpPgAdmin](/encyclopedia/5-languages/5-07-php/phppgadmin/intro) |

---

## phpPgAdmin и раздел SQL

[phpPgAdmin](/encyclopedia/5-languages/5-07-php/phppgadmin/intro) — веб-клиент на PHP для PostgreSQL (аналог [phpMyAdmin](/encyclopedia/5-languages/5-07-php/phpmyadmin/intro) для MySQL). Удобен на локальном LAMP/OpenServer и для **проверки SQL из браузера** до перехода к psql, pgAdmin или production-инструментам.

| Задача в 8.11 | Сначала в SQL (3.07) | В phpPgAdmin | В практикуме 8.11 |
|---------------|----------------------|--------------|-------------------|
| Синтаксис SELECT, JOIN, транзакции | [Первые шаги с SQL](/encyclopedia/3-data-markup/3-07-sql/101) → [PostgreSQL — практическая работа и API](/encyclopedia/3-data-markup/3-07-sql/888) → [891 demo](/encyclopedia/3-data-markup/3-07-sql/891) | [SQL, DDL и DML](/encyclopedia/5-languages/5-07-php/phppgadmin/3) — вкладка SQL | — |
| JSONB, оконные функции | [Практикум PostgreSQL по JSONB](/encyclopedia/3-data-markup/3-07-sql/66), [Иерархические данные в реляционных БД](/encyclopedia/3-data-markup/3-07-sql/886), [Шпаргалка с типичными задачами по SQL](/encyclopedia/3-data-markup/3-07-sql/885) | Выполнить запрос на вкладке SQL | [шаг 4](./4.md) |
| Блокировки, MVCC (теория) | [Блокировки и конкурентный доступ в PostgreSQL](/encyclopedia/3-data-markup/3-07-sql/110), [Транзакции, изоляция и блокировки](/encyclopedia/3-data-markup/3-07-sql/77) | — | [шаг 1](./1.md) |
| EXPLAIN, индексы | [Оптимизация SQL-запросов](/encyclopedia/3-data-markup/3-07-sql/881), [Сложные индексы](/encyclopedia/3-data-markup/3-07-sql/884) | `EXPLAIN ANALYZE` во вкладке SQL | [шаг 2](./2.md) |
| `postgresql.conf`, `pg_hba` | [Первые шаги с SQL](/encyclopedia/3-data-markup/3-07-sql/101), [3.08/2](/encyclopedia/3-data-markup/3-08-upravlenie-rsubd/2) | [Установка и подключение](/encyclopedia/5-languages/5-07-php/phppgadmin/2) | [шаг 3](./3.md) |
| pg_dump, импорт SQL | [Резервное копирование и восстановление PostgreSQL](/encyclopedia/3-data-markup/3-07-sql/106) | [Дампы и FAQ](/encyclopedia/5-languages/5-07-php/phppgadmin/4) | [шаг 10](./10.md) |
| PL/pgSQL, триггеры | [Шпаргалка с типичными задачами по SQL](/encyclopedia/3-data-markup/3-07-sql/885) (рецепты) | SQL-вкладка для `CREATE FUNCTION` | [шаг 5](./5.md) |

Рекомендуемая цепочка для PHP-разработчика: [SQL intro](/encyclopedia/3-data-markup/3-07-sql/intro) → [PostgreSQL — практическая работа и API](/encyclopedia/3-data-markup/3-07-sql/888) → [phpPgAdmin/2–3](/encyclopedia/5-languages/5-07-php/phppgadmin/2) → этот практикум с [шага 1](./1.md).

---

## Маршруты по ролям

| Кто вы | Маршрут | Время (оценка) |
|--------|---------|----------------|
| **PHP + локальный стек** | [phpPgAdmin/2–3](/encyclopedia/5-languages/5-07-php/phppgadmin/2) → [PostgreSQL — практическая работа и API](/encyclopedia/3-data-markup/3-07-sql/888) → 1 → 2 | 3–4 недели |
| **Бэкенд-разработчик** | 1 → 2 → 4 → 5 | 2–3 недели |
| **DBA / сисадмин** | 1 → 3 → 6 → 10 → 11 | 3–4 недели |
| **DevOps** | 7 → 8 → 9 → 12 | 2–4 недели |
| **Полный цикл** | 1 → … → 12 | 1–2 месяца |

---

## Связанные материалы

- [SQL — о разделе](/encyclopedia/3-data-markup/3-07-sql/intro) — маршрут от SELECT до бэкапов.
- [PostgreSQL — практическая работа и API](/encyclopedia/3-data-markup/3-07-sql/888) — драйверы, psql, типовой стек.
- [phpPgAdmin — о разделе](/encyclopedia/5-languages/5-07-php/phppgadmin/intro) — веб-админка для учебных стендов на PHP.
- [Первые шаги с SQL](/encyclopedia/3-data-markup/3-07-sql/101) — установка Postgres, psql, pgAdmin.
- [Справочник PostgreSQL](/encyclopedia/3-data-markup/3-08-upravlenie-rsubd/2) — параметры и администрирование.
- [Terraform](/encyclopedia/8-infra-security/8-04-devops-ci-cd/2) и [Ansible](/encyclopedia/8-infra-security/8-04-devops-ci-cd/216) — общая теория IaC.
- [Безопасность приложений](/encyclopedia/8-infra-security/8-07-informatsionnaya-bezopasnost/113) — SQL-инъекции и hardening.

<DocCardList />

{/* sidebar-collections */}

---

## В подборках

Статья входит в [тематические подборки](/about/collections) и блок "С чего начать?" на [главной](/). Соседние шаги того же маршрута:

**Базы данных** — [ORM и работа с данными — о разделе](/encyclopedia/4-code-dev/4-10-orm-i-rabota-s-dannymi/intro), [Управление реляционными СУБД — о разделе](/encyclopedia/3-data-markup/3-08-upravlenie-rsubd/intro), [NoSQL — о разделе](/encyclopedia/3-data-markup/3-06-nosql/intro), [SQL — о разделе](/encyclopedia/3-data-markup/3-07-sql/intro), [Основы баз данных — о разделе](/encyclopedia/3-data-markup/3-05-osnovy-baz-dannyh/intro), [Структуры данных — о разделе](/encyclopedia/3-data-markup/3-02-struktury-dannyh/intro).

{/* /sidebar-collections */}

---
