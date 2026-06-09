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
  - title: Основы интеграционного взаимодействия — о разделе
    doc: encyclopedia/2-system-network/2-09-osnovy-integratsionnogo-vzaimodeystviya/intro
  - title: Контекст — о разделе
    doc: context/intro
---

import DocCardList from '@theme/DocCardList';

# О разделе

**Длинные листинги (от ~15 строк)** вынесены в каталог [code.spirzen.ru](https://code.spirzen.ru/) и подгружаются в статьях через `ExternalCodeEmbed` — forensics-скрипты, Terraform/HCL, примеры уязвимостей и защитный код не раздувают HTML энциклопедии. Короткие фрагменты (одна строка, пара выражений) по-прежнему прямо в markdown. Диаграммы **mermaid** и интерактив — на месте или в [play.spirzen.ru](https://play.spirzen.ru/).

Раздел для разработчиков и инженеров: от базовых понятий (CIA, риски, OWASP) до практики — защита приложений, криптография, PKI, мониторинг и реагирование на инциденты.

<div class="callout callout--tip">
  <div class="callout-title">Официальные источники по безопасности</div>

  <div class="callout-body">
  Энциклопедия даёт контекст и практику; при проверке уязвимостей и стандартов защиты опирайтесь на актуальные материалы OWASP и CWE:

  [OWASP Top 10](https://owasp.org/www-project-top-ten/) · [OWASP Cheat Sheet Series](https://cheatsheetseries.owasp.org/) · [OWASP ASVS](https://owasp.org/www-project-application-security-verification-standard/) · [CWE](https://cwe.mitre.org/) · [подборка документации](/tools/documentation/2).
  </div>
</div>

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
- **[Кейс — захват аккаунтов через AI-поддержку и дипфейк](133.md)** — Instagram (Meta), 2026: восстановление доступа, дипфейк-селфи, почему 2FA не спасает от бота поддержки.
- **[Обеспечение безопасности](2.md)** — анализ хостов Windows/Linux, логи, forensics, автоматизация (объёмная глава; удобна как справочник).
- **[Вирусы и вредоносные программы](119.md)**, **[Стилеры](134.md)**, **[Как выявлять замаскированные вирусы?](135.md)**, **[Антивирусы](120.md)** — malware, маскировка под системные процессы, кража паролей и cookie, EDR; в статье про антивирусы — внедрение и сопровождение **Kaspersky Endpoint Security** (политики, задачи, защита файлов и сети).
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
