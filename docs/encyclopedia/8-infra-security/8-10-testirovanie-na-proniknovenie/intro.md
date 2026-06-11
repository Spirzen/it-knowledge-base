---
title: "Тестирование на проникновение — о разделе"
description: "Маршрут пентеста на Kali — процессы PTES, recon, оценка уязвимостей, эксплуатация, веб, AD, pivoting, post-exploitation и отчёты коммерческого уровня."
sidebar_label: "Пентест — о разделе"
related:
  - title: "Тестирование информационной безопасности"
    doc: encyclopedia/7-project/7-05-testirovanie/123
  - title: "Информационная безопасность — о разделе"
    doc: encyclopedia/8-infra-security/8-07-informatsionnaya-bezopasnost/intro
  - title: "Белое хакерство и Bug Bounty — о разделе"
    doc: encyclopedia/8-infra-security/8-09-belyy-haking-i-bug-bounty/intro
  - title: "Процессы пентестинга"
    doc: encyclopedia/8-infra-security/8-10-testirovanie-na-proniknovenie/6
---

import DocCardList from '@theme/DocCardList';

# О разделе

Раздел — **маршрут** тестирования на проникновение на базе **Kali Linux**: от установки среды и договорной рамки (PTES, scope, ROE) через разведку и эксплуатацию до pivoting, повышения привилегий и **отчёта коммерческого уровня**. Девять статей покрывают процесс целиком, а не только набор утилит.

**Команды Kali и nmap** (1–15 строк) остаются **прямо в статьях** — это учебные однострочники и короткие сценарии, их удобнее копировать из markdown. Длинные листинги в этом разделе не встречаются; развёрнутые шаблоны отчётов — в [8.09](/encyclopedia/8-infra-security/8-09-belyy-haking-i-bug-bounty/2), практикумы с YAML/SQL/Terraform — в [8.11 PostgreSQL](/encyclopedia/8-infra-security/8-11-praktikum-postgresql/intro) и [code.spirzen.ru](https://code.spirzen.ru/).

### Методологический каркас

| Этап PTES | Статьи 8.10 |
|-----------|-------------|
| Pre-engagement | [intro](./intro.md), [Процессы пентестинга — процессы](./6.md), [8.09 scope](/encyclopedia/8-infra-security/8-09-belyy-haking-i-bug-bounty/2) |
| Intelligence gathering | [Инструменты Kali и сбор информации — recon](./2.md), [Сканирование, перехват и брутфорс — скан](./5.md) |
| Threat modeling | [Процессы пентестинга](./6.md), [Инструменты Kali и сбор информации](./2.md) |
| Vulnerability analysis | [Оценка уязвимостей и эксплуатация](./7.md), [Уязвимости веб-приложений и серверов](./4.md) |
| Exploitation | [Оценка уязвимостей и эксплуатация](./7.md), [Active Directory и типовые сервисы](./8.md) |
| Post-exploitation | [Pivoting, post-exploitation и отчёты — pivot, privesc, отчёт](./9.md) |
| Reporting | [Pivoting, post-exploitation и отчёты](./9.md), [8.09/2](/encyclopedia/8-infra-security/8-09-belyy-haking-i-bug-bounty/2) |

<div class="callout callout--info">
  <div class="callout-title">Для кого раздел</div>

  <div class="callout-body">
  Инженеры, тестировщики, менеджеры проектов ИБ и студенты курсов OSCP-профиля. Нужны [основы ИБ](/encyclopedia/8-infra-security/8-07-informatsionnaya-bezopasnost/intro), Linux и HTTP. Wi-Fi и AD — только lab или internal pentest с договором.
  </div>
</div>

<div class="callout callout--danger">
  <div class="callout-title">Только с разрешения</div>

  <div class="callout-body">
  Техники из раздела — для **собственных** lab, учебных стендов и **письменного** engagement. [ст. 272 УК РФ](https://www.consultant.ru/document/cons_doc_LAW_10699/c87a336408011de5d6f360a9bf71e30d4f22d/) — при несанкционированном доступе.
  </div>
</div>

---

## Маршрут — 9 шагов

| Шаг | Статья | Содержание |
|-----|--------|------------|
| 1 | [Kali Linux — установка](./1.md) | VM, apt, lab-сеть |
| 2 | [Процессы пентестинга](./6.md) | PTES, SoW, ROE, типы аудита |
| 3 | [Recon — сбор информации](./2.md) | OSINT, DNS, сетевое перечисление, fingerprinting, веб-разведка |
| 4 | [Сканирование и брутфорс](./5.md) | Nmap, Wireshark, MitM, Hashcat, Hydra |
| 5 | [Wi-Fi-аудит](./3.md) | 802.11, WPA, monitor mode |
| 6 | [Веб и серверы](./4.md) | Burp, OWASP, SQLi, SSRF |
| 7 | [Оценка уязвимостей и эксплуатация](./7.md) | VA vs exploit, Metasploit, triage |
| 8 | [Active Directory и сервисы](./8.md) | Kerberos, SMB, RDP, BloodHound, spraying |
| 9 | [Pivot, post-exploitation, отчёты](./9.md) | Lateral movement, privesc, enterprise report |

Закрепление: [итоги](./998.md), [чек-лист](./999.md).

---

## Маршруты по ролям

| Кто вы | Маршрут | Время (оценка) |
|--------|---------|----------------|
| **Новичок** | 1 → 6 → 2 → 4 → 7 → 9 | 4–6 недель + lab |
| **Web pentester** | 6 → 2 → 4 → 7 → 9 | 3–4 недели |
| **Internal / AD** | 1 → 6 → 2 → 5 → 8 → 9 | 1–2 месяца |
| **Менеджер ИБ** | 6 → 9 (executive report) → [7.05/123](/encyclopedia/7-project/7-05-testirovanie/123) | 1 неделя |

---

## Что нужно знать заранее

- Linux shell, TCP/IP, DNS, HTTP.
- [Триада CIA](/encyclopedia/8-infra-security/8-07-informatsionnaya-bezopasnost/1), [жизненный цикл атаки](/encyclopedia/8-infra-security/8-07-informatsionnaya-bezopasnost/129).
- [Инъекции](/encyclopedia/8-infra-security/8-07-informatsionnaya-bezopasnost/123), [безопасность приложений](/encyclopedia/8-infra-security/8-07-informatsionnaya-bezopasnost/113).

---

## Связанные материалы

- [Анализ и тестирование безопасности](/encyclopedia/8-infra-security/8-07-informatsionnaya-bezopasnost/1131)
- [Белое хакерство и Bug Bounty](/encyclopedia/8-infra-security/8-09-belyy-haking-i-bug-bounty/intro)

<DocCardList />

{/* sidebar-collections */}

---

## В подборках

**Инфобез** — [Основы информационной безопасности](/encyclopedia/2-system-network/2-08-osnovy-informatsionnoy-bezopasnosti/intro), [Тестирование ИБ](/encyclopedia/7-project/7-05-testirovanie/123), [Информационная безопасность — о разделе](/encyclopedia/8-infra-security/8-07-informatsionnaya-bezopasnost/intro), [Белое хакерство — о разделе](/encyclopedia/8-infra-security/8-09-belyy-haking-i-bug-bounty/intro).

{/* /sidebar-collections */}

---
