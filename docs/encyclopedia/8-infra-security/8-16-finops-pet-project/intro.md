---
title: "FinOps для pet-проекта — о разделе"
description: "Контроль облачных расходов для личных и учебных проектов — одна глава с чек-листом и примерами cost."
sidebar_label: "FinOps — о разделе"
related:
  - title: "Облачные технологии — о разделе"
    doc: encyclopedia/8-infra-security/8-01-oblachnye-tehnologii/intro
---

import DocCardList from '@theme/DocCardList';

# О разделе

Короткий модуль про **FinOps** (Financial Operations, управление облачными расходами) для pet-проектов, учебных стендов и side-проектов без enterprise chargeback. FinOps — это набор привычек: видеть счёт до сюрприза, помечать ресурсы тегами, выключать dev ночью и удалять "осиротевшие" диски. Отдельный продукт для FinOps pet-проекту не обязателен. Для одного разработчика достаточно **15 минут в неделю** на обзор billing и простых алертов.

Pet-проект — личный сайт, demo API, lab Kubernetes, блог на VPS. Такие проекты легко съедают **$30–80 в месяц** на одной забытый t3.medium или managed DB "на вырост", хотя реальная нагрузка укладывается в GitHub Pages и SQLite. Модуль учит ловить типовые утечки и связывать расходы с инфраструктурой DR (дешёвый offsite tier для бэкапов).

---

## Что внутри раздела

Основная статья **[FinOps для pet-проекта](./1.md)** содержит таблицы типовых утечек с цифрами, минимальный набор контролей (budget alert, tags, calendar stop), примеры CLI для Yandex Cloud и AWS, дешёвый stack для static site и API, чек-лист перед концом месяца. Там же — связь с [DR offsite storage](/encyclopedia/8-infra-security/8-15-praktikum-dr/1), где dump хранят в cold object storage.

---

## Связанные темы

[Облачные концепции и экономика](/encyclopedia/8-infra-security/8-01-oblachnye-tehnologii/12) — CapEx и OpEx, модели оплаты облака. [DR practicum](/encyclopedia/8-infra-security/8-15-praktikum-dr/intro) — offsite dump и lifecycle tier. [DevOps и IaC](/encyclopedia/8-infra-security/8-04-devops-ci-cd/intro) — Terraform destroy для lab и теги через код.

---

## Для кого модуль

Материал рассчитан на разработчика или инженера, который уже завёл аккаунт в AWS, Yandex Cloud, VK Cloud или аналоге, но ещё не настроил budget alert. Бейдж **ДЛЯ НОВИЧКОВ** в основной статье означает, что термины объясняются с нуля. Enterprise FinOps (chargeback, showback, FinOps Foundation framework) здесь сознательно не разбираются — для pet-проекта они избыточны.

---

## Словарь FinOps для pet-проекта

| Термин | Значение |
|--------|----------|
| FinOps | Управление облачными расходами |
| Budget alert | Email при пороге % бюджета |
| Tag / label | Метка ресурса для cost report |
| Orphan resource | Диск/IP/LB без владельца |
| Cold tier | Дешёвый класс object storage |
| OpEx | Помесячные операционные расходы |
| Lifecycle | Автопереход/удаление объектов по age |

---

## Типичный путь по модулю

Сначала прочитайте [основную статью](./1.md) и включите budget alert на **$15–25**. Затем пройдите inventory running VM и unattached disks. Если параллельно идёте [DR practicum](/encyclopedia/8-infra-security/8-15-praktikum-dr/intro), настройте lifecycle на bucket с dump — две темы усиливают друг друга.

---

## Ожидаемая экономия

| Действие | Экономия $/мес (ориентир) |
|----------|---------------------------|
| Stop dev VM 12 h/день | $10–25 |
| Удалить orphan 100 GB disk | $8 |
| GitHub Pages вместо S3+CloudFront для blog | $1–5 |
| Cold tier для backup | $0.30–1 по сравнению со Standard |

Сумма **$20–40/мес** на типичном "забытом" lab — цена двух походов в кофейню, но за год это **$240–480**, которые можно вложить в домен, мониторинг или offsite DR.

---

## Полный walkthrough настройки FinOps

### Шаг 1 — budget alert (15 мин)

1. Откройте billing консоль провайдера (AWS / YC / VK Cloud).
2. Создайте budget **$20/мес** (или эквивалент в ₽).
3. Alerts на **50%, 80%, 100%** на email.
4. Опционально фильтр tag `project=petshop`.

Ожидаемый результат — письмо-подтверждение создания budget.

### Шаг 2 — inventory (10 мин)

```bash
# AWS
aws ec2 describe-instances --query 'Reservations[*].Instances[*].[InstanceId,State.Name,Tags]' --output table
aws ec2 describe-volumes --filters Name=status,Values=available --output table

# YC
yc compute instance list
yc compute disk list --filter "status=READY"
```

Ожидаемо — список running/stopped VM и unattached disks.

### Шаг 3 — tags (5 мин)

На каждый ресурс:

```
env=dev
project=petshop
owner=you
```

### Шаг 4 — первая экономия

Stop одной dev VM на ночь или delete один orphan disk. Запишите в `finops-log.md`:

```
2026-06-15 deleted vol-abc saved ~$8/mo
```

---

## Типичные ошибки FinOps pet-проекта

| Ошибка | Сигнал | Действие |
|--------|--------|----------|
| Нет budget alert | сюрприз в конце месяца | создать budget сегодня |
| Все ресурсы без tags | Cost Explorer "unknown" | tag env, project |
| K8s cluster забыли | $100+/mo | terraform destroy |
| EIP без instance | $3.6/mo each | release |
| Standard tier backup | $0.46/20GB | lifecycle → cold |

---

## Предупреждения

1. Budget alert не останавливает ресурсы — нужен отдельный auto-stop.
2. Free tier expiry — calendar reminder за 30 дней.
3. Reserved 1y — только stable prod, не lab.
4. Cross-region egress — осознанный trade-off для DR offsite.
5. Не храните IAM keys в git — rotate при утечке.

---

## Чек-лист готовности к основной статье

| # | Проверка | Ожидание |
|---|----------|----------|
| 1 | Аккаунт облака | активен |
| 2 | Billing email | настроен |
| 3 | Хотя бы 1 VM или bucket | для inventory |
| 4 | finops-log.md | создан |
| 5 | DR practicum (опц.) | offsite bucket |

---

## Первые 30 минут FinOps — таймлайн

| Минута | Действие | Результат |
|--------|----------|-----------|
| 0–5 | Budget $20 + alerts | email подтверждение |
| 5–12 | Inventory VM, disks | список кандидатов |
| 12–18 | Tag env=dev на 1 ресурс | видно в billing |
| 18–25 | Stop или delete 1 orphan | запись в finops-log |
| 25–30 | Lifecycle на DR bucket | rule Enabled |

<DocCardList />

---
