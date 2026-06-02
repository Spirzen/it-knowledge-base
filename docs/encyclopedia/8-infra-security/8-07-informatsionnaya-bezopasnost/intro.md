---
title: Информационная безопасность — о разделе
description: "Раздел для разработчиков и инженеров: от базовых понятий (CIA, риски, OWASP) до практики — защита приложений, криптография, PKI, мониторинг и реагирование на инциденты."
sidebar_label: Информационная безопасность — о разделе
related:
  - title: "Контейнеризация и оркестрация — о разделе"
    doc: encyclopedia/8-infra-security/8-06-konteynerizatsiya-i-orkestratsiya/intro
  - title: "Забота о коде и данных — о разделе"
    doc: encyclopedia/8-infra-security/8-03-zabota-o-kode-i-dannyh/intro
  - title: "Тестирование информационной безопасности"
    doc: encyclopedia/7-project/7-05-testirovanie/123
  - title: "Белое хакерство и Bug Bounty — о разделе"
    doc: encyclopedia/8-infra-security/8-09-belyy-haking-i-bug-bounty/intro
  - title: "Основы интеграционного взаимодействия — о разделе"
    doc: encyclopedia/2-system-network/2-09-osnovy-integratsionnogo-vzaimodeystviya/intro
---

import DocCardList from '@theme/DocCardList';

# О разделе

Раздел для разработчиков и инженеров: от базовых понятий (CIA, риски, OWASP) до практики — защита приложений, криптография, PKI, мониторинг и реагирование на инциденты.

---

## С чего начать

1. **[Информационная безопасность](1.md)** — триада CIA, угрозы, риски, OWASP Top 10 (есть интерактивные симуляторы).
2. **[Жизненный цикл атаки](129.md)** — семь этапов взлома, векторы проникновения, чек-лист защитника (каркас «как думает атакующий»).
3. **[Методы защиты информации](111.md)** — системный подход: криптография, сеть, хосты, облако, DevSecOps.
4. **[Безопасность приложений](113.md)** — XSS, CSRF, CSP, бэкенд и типовые ошибки в коде.
5. **[12 советов по безопасности API](/encyclopedia/2-system-network/2-09-osnovy-integratsionnogo-vzaimodeystviya/132)** — HTTPS, OAuth, gateway, OWASP, чек-лист для ревью.
6. **[Уязвимости и атаки на API](128.md)** — IDOR, SSRF, rate limit, логические атаки.
7. **[Инъекции](123.md)** — SQLi (тавтология, UNION, blind boolean/time), CMDi, XSS: одна модель, разные контексты.
8. **[Шифрование](115.md)** и **[Сертификация и сертификаты](112.md)** — алгоритмы, TLS, PKI.
9. **[Белое хакерство и Bug Bounty](/encyclopedia/8-infra-security/8-09-belyy-haking-i-bug-bounty/intro)** — этичный поиск уязвимостей, отчёты, программы вознаграждений у техгигантов.
10. **[Тестирование на проникновение](/encyclopedia/8-infra-security/8-10-testirovanie-na-proniknovenie/intro)** — Kali Linux, recon, Wi-Fi, веб, сканирование и брутфорс в лаборатории.

---

## Практика и углубление

- **[Социальная инженерия](1291.md)** — фишинг, vishing, BEC, защита пользователей и продукта.
- **[Honeypots и приманки](130.md)** — раннее обнаружение lateral movement.
- **[Безопасность IoT](131.md)** — встраиваемые устройства, Mirai, SDL для прошивки.
- **[Патчи и управление уязвимостями](132.md)** — SLA, приоритизация CVE, типичные сбои patch management.
- **[Обеспечение безопасности](2.md)** — анализ хостов Windows/Linux, логи, forensics, автоматизация (объёмная глава; удобна как справочник).
- **[Вирусы и вредоносные программы](119.md)**, **[Антивирусы](120.md)** — malware, EDR; в статье про антивирусы — внедрение и сопровождение **Kaspersky Endpoint Security** (политики, задачи, защита файлов и сети).
- **[Мониторинг и SIEM](114.md)**, **[Средства защиты](1112.md)** — детективный контур; метрики и алерты — [Практикум Prometheus и Grafana](/encyclopedia/2-system-network/2-06-sistemnoe-administrirovanie/prometheus-grafana-praktikum/intro), [Практикум Zabbix](/encyclopedia/2-system-network/2-06-sistemnoe-administrirovanie/zabbix-praktikum/intro).
- **[Чек-лист самопроверки](999.md)** — закрепление материала.

---

## Связанные разделы

Базовые темы для новичков также есть в [Основы информационной безопасности](../../2-system-network/2-08-osnovy-informatsionnoy-bezopasnosti/intro.md) (блок "Система и сеть"). Здесь акцент на продакшен-практиках, коде и инфраструктуре.

<DocCardList />

{/* sidebar-collections */}

---

## В подборках

Статья входит в [тематические подборки](/about/collections) и блок «С чего начать?» на [главной](/). Соседние шаги того же маршрута:

**Инфобез** — [Основы информационной безопасности — о разделе](/encyclopedia/2-system-network/2-08-osnovy-informatsionnoy-bezopasnosti/intro), [Системное администрирование — о разделе](/encyclopedia/2-system-network/2-06-sistemnoe-administrirovanie/intro), [Основы интеграционного взаимодействия — о разделе](/encyclopedia/2-system-network/2-09-osnovy-integratsionnogo-vzaimodeystviya/intro), [Тестирование информационной безопасности](/encyclopedia/7-project/7-05-testirovanie/123), [Забота о коде и данных — о разделе](/encyclopedia/8-infra-security/8-03-zabota-o-kode-i-dannyh/intro), [Контейнеризация и оркестрация — о разделе](/encyclopedia/8-infra-security/8-06-konteynerizatsiya-i-orkestratsiya/intro).

{/* /sidebar-collections */}

---
