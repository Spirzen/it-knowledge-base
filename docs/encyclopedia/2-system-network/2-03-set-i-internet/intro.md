---
title: Сеть и интернет — о разделе
description: "Подборка материалов раздела Сеть и интернет в энциклопедии Вселенная IT."
sidebar_label: Сеть и интернет — о разделе
related:
  - title: "Сайты и веб-сайты"
    doc: encyclopedia/2-system-network/2-04-kak-rabotayut-sayty-i-veb-sayty/1
  - title: "Веб-браузеры"
    doc: encyclopedia/1-basics/1-11-soft-ryadovogo-polzovatelya/3
  - title: "Сеть и интернет - основы и принципы работы"
    doc: encyclopedia/2-system-network/2-03-set-i-internet/1
  - title: "Веб-сайты и веб-приложения — о разделе"
    doc: encyclopedia/2-system-network/2-04-kak-rabotayut-sayty-i-veb-sayty/intro
  - title: "История интернета"
    doc: encyclopedia/1-basics/1-07-nemnogo-o-proshlom/4
  - title: "Интерфейс — о разделе"
    doc: encyclopedia/1-basics/1-25-interfeys/intro
---

import DocCardList from '@theme/DocCardList';

# О разделе

Раздел объясняет, как устройства находят друг друга в сети, обмениваются данными и как из адреса в браузере получается загруженная страница.

---

## Рекомендуемый порядок

| Этап | Статьи | Зачем |
| :--- | :--- | :--- |
| 1. Основы | [1](./1.md), [2](./2.md) | Сети, IP, порты, [шесть типов серверов](./1.md#tipy-serverov), история связи |
| 2. Имена и протоколы | [3](./3.md), [4](./4.md), [6](./6.md) | URI/URL, OSI, [модель TCP/IP](./4.md#model-tcp-ip), [обзор девяти ключевых протоколов](./4.md#key-network-protocols), TCP/UDP, HTTP, DNS |
| 3. Практика веба | [5](./5.md), [11](./11.md), [7](./7.md) | Загрузка сайта, HTTPS, cookie и кэш |
| 4. Инфраструктура | [21](./21.md), [211](./211.md), [212](./212.md) | Устройства, магистрали, CDN |
| 5. Углубление | [8](./8.md), [41](./41.md), [421](./421.md), [611](./611.md), [618](./618.md), [619](./619.md), [база по HTTP](/encyclopedia/2-system-network/2-09-osnovy-integratsionnogo-vzaimodeystviya/118) | TCP и перегрузка, HTTP/2–3, [карта HTTP-экосистемы](/encyclopedia/2-system-network/2-09-osnovy-integratsionnogo-vzaimodeystviya/118#http-ecosystem), [девять ключевых протоколов](./618.md#key-protocols-overview), [18 основных портов](./618.md#18-osnovnyh-portov), [справочник IP и CIDR](./619.md) |

Опционально: [71](./71.md) (Wi‑Fi, Bluetooth, LTE), [91](./91.md) (регулирование), [613](./613.md)–[617](./617.md) (VPN, прокси, мониторинг).

---

## Маршрут по учебнику (нисходящий подход)

Таблица ниже повторяет логику классического курса **«Компьютерные сети. Нисходящий подход»** (Куроуз, Росс): сначала приложения, затем транспорт, IP, канал и радио. Статьи энциклопедии идут в том же порядке, с перекрёстными ссылками на соседние разделы.

| Глава учебника | Тема | Статьи раздела 2.03 |
| :--- | :--- | :--- |
| 1 | Интернет, задержки, уровни, периферия и ядро | [1](./1.md), [2](./2.md) |
| 2 | HTTP, DNS, почта, сокеты | [3](./3.md), [5](./5.md), [6](./6.md), [11](./11.md), [7](./7.md), [4](./4.md) |
| 3 | TCP, UDP, надёжность, перегрузка | [4](./4.md), [42](./42.md), [421](./421.md), [612](./612.md) |
| 4 | IP, маршрутизация, BGP | [41](./41.md), [619](./619.md), [211](./211.md) |
| 5 | Ethernet, ARP, «день HTTP-запроса» | [21](./21.md), [5](./5.md#put-paketa-dhcp-http), [2-06/61](/encyclopedia/2-system-network/2-06-sistemnoe-administrirovanie/61) |
| 6 | Wi‑Fi, сотовые сети | [71](./71.md) |
| 7 | CDN, стриминг, VoIP | [212](./212.md), [8](./8.md) |
| 8 | TLS, VPN, фаервол | [2-08](/encyclopedia/2-system-network/2-08-osnovy-informatsionnoy-bezopasnosti/intro), [613](./613.md), [2-04/128](/encyclopedia/2-system-network/2-04-kak-rabotayut-sayty-i-veb-sayty/128) |

Полный план обогащения по книге — в репозитории, файл `build/kurose-ross-mapping.md`.

---

## Источники

- *Компьютерные сети. Нисходящий подход*, Дж. Куроуз, К. Росс — 2016 (базовая структура маршрута выше).
- *Компьютерные сети*, Э. Таненбаум — для сравнения «снизу вверх» и альтернативных технологий.
- См. также [библиотеку в документации](/docs/tools/documentation/1#сети-и-безопасность).

---

## Связь с другими разделами

- Шифрование и угрозы — **2.08. Основы информационной безопасности**
- Веб-разработка — раздел [2.04. Сайты и веб-сайты](/encyclopedia/2-system-network/2-04-kak-rabotayut-sayty-i-veb-sayty/intro)
- Форумы, мемы и рунетская лексика (культура, не протоколы) — [9.10 / 120](/encyclopedia/9-spinoff/9-10-internet-kultura/120), мост [2.04 / 125](/encyclopedia/2-system-network/2-04-kak-rabotayut-sayty-i-veb-sayty/125)
- Самопроверка — [чек-лист](./99.md) и [итоги](./98.md)
- Подготовка к system design — [задержка и пропускная способность](./1.md#пропускная-способность-и-задержка), маршрут в [143.md](/encyclopedia/7-project/7-06-proektirovanie-i-arhitektura/143#poriadok-izucheniia)

<DocCardList />

---

{/* http-basics-link  */}
<div class="callout callout--tip">
  <div class="callout-title">Основа по протоколу</div>

  <div class="callout-body">
  Базовый разбор HTTP и HTTPS находится в отдельной статье — [HTTP как основа веб-интеграций](/encyclopedia/2-system-network/2-09-osnovy-integratsionnogo-vzaimodeystviya/118).

  Практика запросов из терминала — [утилита curl](/encyclopedia/2-system-network/2-05-terminal/1133), [curl / fetch — примеры](/lab/Примеры/1133).
</div>
  </div>

{/* sidebar-collections */}

---

## В подборках

Статья входит в [тематические подборки](/about/collections) и блок «С чего начать?» на [главной](/). Соседние шаги того же маршрута:

**Сетевая грамотность** — [Сайты и веб-сайты](/encyclopedia/2-system-network/2-04-kak-rabotayut-sayty-i-veb-sayty/1), [Веб-браузеры](/encyclopedia/1-basics/1-11-soft-ryadovogo-polzovatelya/3), [Сеть и интернет - основы и принципы работы](/encyclopedia/2-system-network/2-03-set-i-internet/1), [Веб-сайты и веб-приложения — о разделе](/encyclopedia/2-system-network/2-04-kak-rabotayut-sayty-i-veb-sayty/intro), [Организация домашней сети](/encyclopedia/2-system-network/2-06-sistemnoe-administrirovanie/61), [NAT и проброс портов](/encyclopedia/2-system-network/2-06-sistemnoe-administrirovanie/7).

**Веб-разработка** — [История интернета](/encyclopedia/1-basics/1-07-nemnogo-o-proshlom/4), [Веб-сайты и веб-приложения — о разделе](/encyclopedia/2-system-network/2-04-kak-rabotayut-sayty-i-veb-sayty/intro), [Интерфейс — о разделе](/encyclopedia/1-basics/1-25-interfeys/intro), [Веб-браузеры](/encyclopedia/1-basics/1-11-soft-ryadovogo-polzovatelya/3), [HTML — о разделе](/encyclopedia/3-data-markup/3-09-html/intro), [JavaScript — о разделе](/encyclopedia/5-languages/5-01-javascript/intro).

{/* /sidebar-collections */}

---
