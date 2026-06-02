---
title: Основы информационной безопасности — о разделе
description: "Подборка материалов раздела Основы информационной безопасности в энциклопедии Вселенная IT."
sidebar_label: Основы информационной безопасности — о разделе
related:
  - title: "Системное администрирование — о разделе"
    doc: encyclopedia/2-system-network/2-06-sistemnoe-administrirovanie/intro
  - title: "Софт рядового пользователя — о разделе"
    doc: encyclopedia/1-basics/1-11-soft-ryadovogo-polzovatelya/intro
  - title: "Советы для новичка — о разделе"
    doc: encyclopedia/1-basics/1-12-sovety-dlya-novichka/intro
  - title: "Операционная система — о разделе"
    doc: encyclopedia/2-system-network/2-01-operatsionnaya-sistema/intro
  - title: "Интернет-культура — о разделе"
    doc: encyclopedia/9-spinoff/9-10-internet-kultura/intro
  - title: "Архитектура десктопных приложений"
    doc: encyclopedia/4-code-dev/4-11-desktopnye-prilozheniya/1
  - title: "Государственное регулирование интернета"
    doc: encyclopedia/2-system-network/2-03-set-i-internet/91
  - title: "Основы бизнеса для IT-специалиста"
    doc: encyclopedia/1-basics/1-29-gosudarstvo-i-biznes/112
---

import DocCardList from '@theme/DocCardList';

# О разделе

Раздел для всех, кто работает с учётными записями, сетями и данными: от личной гигиены (пароли, Wi‑Fi) до корпоративных механизмов (RBAC, фаервол, SSH).

<div class="callout callout--tip">
  <div class="callout-title">Рекомендуемый порядок</div>

  <div class="callout-body">
  <ol>
    <li><a href="./1">Основы информационной безопасности</a> — триада CIA, политики, угрозы</li>
    <li><a href="./114">Устройство и надёжность паролей</a> — хеши, соль, <a href="./114#asymmetric-crypto">открытый и закрытый ключ</a>, менеджеры паролей, <a href="./114#tipy-atak-na-paroli">типы атак на пароли</a></li>
    <li><a href="./111">Аутентификация и авторизация</a> — cookie, session, JWT, PASETO, SSO и OAuth; <a href="./111#jwt-i-api-keys">JWT и API-ключи</a>; <a href="./111#bezopasnyy-potok-vhoda">безопасный поток login → refresh → logout</a></li>
    <li><a href="/encyclopedia/2-system-network/2-09-osnovy-integratsionnogo-vzaimodeystviya/132">12 советов по безопасности API</a> — HTTPS, rate limiting, gateway, OWASP (раздел интеграций)</li>
    <li><a href="./118">JWT — семь строк, которые обходят авторизацию</a> — <code>alg: none</code>, подмена RS256 на HS256, безопасный <code>jwt.verify</code></li>
    <li><a href="./119">Смена пароля — пропущенный шаг re-auth</a> — захват аккаунта при украденной сессии и CSRF</li>
    <li><a href="./120">Админка по ?isAdmin=true</a> — Broken Access Control и права с клиента</li>
    <li><a href="./115">Фаерволы</a>, <a href="./117">DDoS и отказ в обслуживании</a> и <a href="./116">Шифрование и SSH</a> — <a href="./116#asymmetric-keys">пара ключей</a>, TLS, подпись, затем протокол SSH</li>
    <li><a href="/encyclopedia/8-infra-security/8-07-informatsionnaya-bezopasnost/129">Жизненный цикл атаки</a> — семь этапов взлома и векторы проникновения (углубление в разделе 8.07)</li>
    <li><a href="./113">Риски открытых Wi‑Fi</a></li>
    <li><a href="./112">Антивирус и лечение</a> — по желанию; хвост статьи помечен как углубление</li>
    <li><a href="/encyclopedia/2-system-network/2-06-sistemnoe-administrirovanie/92">Мониторинг и логи</a> — теория; практика — <a href="/encyclopedia/2-system-network/2-06-sistemnoe-administrirovanie/zabbix-praktikum/intro">Zabbix</a>, <a href="/encyclopedia/2-system-network/2-06-sistemnoe-administrirovanie/prometheus-grafana-praktikum/intro">Prometheus и Grafana</a>, <a href="/lab/Примеры/11114">PromQL — галерея</a></li>
    <li><a href="./2">Итоги</a> и <a href="./3">Чек-лист самопроверки</a></li>
    <li><a href="/encyclopedia/8-infra-security/8-03-zabota-o-kode-i-dannyh/101">Опасные скрипты</a> — социальная инженерия через "установочный" shell-скрипт и команды от ИИ-агента; безопасная CLI-практика запросов — <a href="/encyclopedia/2-system-network/2-05-terminal/1133">утилита curl</a></li>
  </ol>
</div>
  </div>

<DocCardList />

{/* sidebar-collections */}

---

## В подборках

Статья входит в [тематические подборки](/about/collections) и блок «С чего начать?» на [главной](/). Соседние шаги того же маршрута:

**Компьютерная грамотность** — [Системное администрирование — о разделе](/encyclopedia/2-system-network/2-06-sistemnoe-administrirovanie/intro), [Софт рядового пользователя — о разделе](/encyclopedia/1-basics/1-11-soft-ryadovogo-polzovatelya/intro), [Советы для новичка — о разделе](/encyclopedia/1-basics/1-12-sovety-dlya-novichka/intro), [Операционная система — о разделе](/encyclopedia/2-system-network/2-01-operatsionnaya-sistema/intro), [Исполняемые файлы и архивы — о разделе](/encyclopedia/1-basics/1-20-ispolnyaemye-fayly-i-arhivy/intro), [Программа — о разделе](/encyclopedia/1-basics/1-19-programma/intro).

**Цифровая грамотность** — [Интернет-культура — о разделе](/encyclopedia/9-spinoff/9-10-internet-kultura/intro), [Архитектура десктопных приложений](/encyclopedia/4-code-dev/4-11-desktopnye-prilozheniya/1), [Государственное регулирование интернета](/encyclopedia/2-system-network/2-03-set-i-internet/91), [Основы бизнеса для IT-специалиста](/encyclopedia/1-basics/1-29-gosudarstvo-i-biznes/112), [Государство и цифровая экономика](/encyclopedia/1-basics/1-29-gosudarstvo-i-biznes/1), [Потребительская грамотность в цифровой среде](/encyclopedia/1-basics/1-28-marketing-i-rasprostranenie/3).

**Сетевая грамотность** — [NAT и проброс портов](/encyclopedia/2-system-network/2-06-sistemnoe-administrirovanie/7), [Основы интеграционного взаимодействия — о разделе](/encyclopedia/2-system-network/2-09-osnovy-integratsionnogo-vzaimodeystviya/intro), [Организация домашней сети](/encyclopedia/2-system-network/2-06-sistemnoe-administrirovanie/61), [Веб-сайты и веб-приложения — о разделе](/encyclopedia/2-system-network/2-04-kak-rabotayut-sayty-i-veb-sayty/intro), [Веб-браузеры](/encyclopedia/1-basics/1-11-soft-ryadovogo-polzovatelya/3), [Сеть и интернет — о разделе](/encyclopedia/2-system-network/2-03-set-i-internet/intro).

**База программиста** — [Терминал — о разделе](/encyclopedia/2-system-network/2-05-terminal/intro), [Основы интеграционного взаимодействия — о разделе](/encyclopedia/2-system-network/2-09-osnovy-integratsionnogo-vzaimodeystviya/intro), [Исполняемые файлы и архивы — о разделе](/encyclopedia/1-basics/1-20-ispolnyaemye-fayly-i-arhivy/intro), [Алгоритмы — о разделе](/encyclopedia/4-code-dev/4-01-algoritmy/intro), [Программа — о разделе](/encyclopedia/1-basics/1-19-programma/intro), [Код — о разделе](/encyclopedia/4-code-dev/4-02-chto-takoe-kod-i-kak-on-rabotaet/intro).

Также: Инфобез, DevOps и инфраструктура.

{/* /sidebar-collections */}

---
