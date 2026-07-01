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
| 0. Школа | [Базовая информатика — телекоммуникации и веб](/encyclopedia/1-basics/1-035-bazovaya-informatika/1#телекоммуникационные-технологии-и-компьютерные-сети), [Интернет и сетевые сервисы](/encyclopedia/1-basics/1-035-bazovaya-informatika/6) | LAN/WAN, DNS, HTTP, FTP, объекты сети |
| 1. Основы | [Сеть и интернет - основы и принципы работы](./1.md), [История развития сетевых технологий](./2.md) | Сети, IP, порты, [шесть типов серверов](./1.md#tipy-serverov), история связи |
| 2. Имена и протоколы | [URL URI URN](./3.md), [Сетевые протоколы, порты и установка соединения](./4.md), [DNS - система доменных имён и её работа](./6.md) | URI/URL, OSI, [модель TCP/IP](./4.md#model-tcp-ip), [обзор девяти ключевых протоколов](./4.md#key-network-protocols), TCP/UDP, HTTP, DNS |
| 3. Практика веба | [Что происходит при загрузке сайта](./5.md), [HTTP и HTTPS](./11.md), [Cookie](./7.md) | Загрузка сайта, HTTPS, cookie и кэш |
| 4. Инфраструктура | [Сетевые устройства - маршрутизаторы, коммутаторы, модемы](./21.md), [Настройки сетевых адаптеров в Windows](./620.md), [Архитектура глобальной сети](./211.md), [Глобальная доставка контента - CDN и кэширование](./212.md) | Устройства, NIC в Windows, магистрали, CDN |
| 5. Углубление | [Дополнительные сетевые технологии](./8.md), [Основы IP-адресации](./41.md), [TCP — соединение, окно и перегрузка](./421.md), [Справочник по HTTP-протоколу](./611.md), [Справочник по сетевым протоколам и портам](./618.md), [Справочник по IP-адресам и CIDR](./619.md), [база по HTTP](/encyclopedia/2-system-network/2-09-osnovy-integratsionnogo-vzaimodeystviya/118) | TCP и перегрузка, HTTP/2–3, [карта HTTP-экосистемы](/encyclopedia/2-system-network/2-09-osnovy-integratsionnogo-vzaimodeystviya/118#http-ecosystem), [девять ключевых протоколов](./618.md#key-protocols-overview), [18 основных портов](./618.md#18-osnovnyh-portov), [справочник IP и CIDR](./619.md) |

Опционально — [Беспроводные сети - Wi-Fi, Bluetooth, LTE](./71.md) (Wi‑Fi, Bluetooth, LTE), [Государственное регулирование интернета](./91.md) (регулирование), [Виртуальные частные сети (VPN)](./613.md)–[Браузерные бенчмарки и производительность](./617.md) (VPN, прокси, мониторинг).

> **Практика в браузере.** После глав про HTTP и DNS удобно собрать простую страницу и увидеть результат без локального сервера — в [WebEditor](https://html.spirzen.ru/) экосистемы «Вселенная IT» (отдельный домен, живой предпросмотр HTML/CSS/JS).

---

## Маршрут по учебнику (нисходящий подход)

Таблица ниже повторяет логику классического курса **"Компьютерные сети. Нисходящий подход"** (Куроуз, Росс) — сначала приложения, затем транспорт, IP, канал и радио. Статьи энциклопедии идут в том же порядке, с перекрёстными ссылками на соседние разделы.

| Глава учебника | Тема | Статьи раздела 2.03 |
| :--- | :--- | :--- |
| 1 | Интернет, задержки, уровни, периферия и ядро | [Сеть и интернет - основы и принципы работы](./1.md), [История развития сетевых технологий](./2.md) |
| 2 | HTTP, DNS, почта, сокеты | [URL URI URN](./3.md), [Что происходит при загрузке сайта](./5.md), [DNS - система доменных имён и её работа](./6.md), [HTTP и HTTPS](./11.md), [Cookie](./7.md), [Сетевые протоколы, порты и установка соединения](./4.md) |
| 3 | TCP, UDP, надёжность, перегрузка | [Сетевые протоколы, порты и установка соединения](./4.md), [Надёжная доставка — от идеи к TCP](./42.md), [TCP — соединение, окно и перегрузка](./421.md), [Измерение и оптимизация скорости интернета](./612.md) |
| 4 | IP, маршрутизация, BGP | [Основы IP-адресации](./41.md), [Справочник по IP-адресам и CIDR](./619.md), [Архитектура глобальной сети](./211.md) |
| 5 | Ethernet, ARP, "день HTTP-запроса" | [Сетевые устройства - маршрутизаторы, коммутаторы, модемы](./21.md), [Что происходит при загрузке сайта](./5.md#put-paketa-dhcp-http), [2-06/61](/encyclopedia/2-system-network/2-06-sistemnoe-administrirovanie/61) |
| 6 | Wi‑Fi, сотовые сети | [Беспроводные сети - Wi-Fi, Bluetooth, LTE](./71.md) |
| 7 | CDN, стриминг, VoIP | [Глобальная доставка контента - CDN и кэширование](./212.md), [Дополнительные сетевые технологии](./8.md) |
| 8 | TLS, VPN, фаервол | [2-08](/encyclopedia/2-system-network/2-08-osnovy-informatsionnoy-bezopasnosti/intro), [Виртуальные частные сети (VPN)](./613.md), [2-04/128](/encyclopedia/2-system-network/2-04-kak-rabotayut-sayty-i-veb-sayty/128) |

Полный план обогащения по книге — в репозитории, файл `build/kurose-ross-mapping.md`.

---

## Источники

- *Компьютерные сети. Нисходящий подход*, Дж. Куроуз, К. Росс — 2016 (базовая структура маршрута выше).
- *Компьютерные сети*, Э. Таненбаум — для сравнения "снизу вверх" и альтернативных технологий.
- См. также [библиотеку в документации](/docs/tools/documentation/1#сети-и-безопасность).

---

## Связь с другими разделами

- Шифрование и угрозы — **2.08. Основы информационной безопасности**
- Веб-разработка — раздел [2.04. Сайты и веб-сайты](/encyclopedia/2-system-network/2-04-kak-rabotayut-sayty-i-veb-sayty/intro)
- Форумы, мемы и рунетская лексика (культура, не протоколы) — [9.10 / 120](/encyclopedia/9-spinoff/9-10-internet-kultura/120), мост [2.04 / 125](/encyclopedia/2-system-network/2-04-kak-rabotayut-sayty-i-veb-sayty/125)
- Самопроверка — [чек-лист](./99.md) и [итоги](./98.md)
- Подготовка к system design — [задержка и пропускная способность](./1.md#пропускная-способность-и-задержка), маршрут в [System Design — карта тем и подготовка](/encyclopedia/7-project/7-06-proektirovanie-i-arhitektura/143#poriadok-izucheniia)

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

Статья входит в [тематические подборки](/about/collections) и блок "С чего начать?" на [главной](/). Соседние шаги того же маршрута:

**Сетевая грамотность** — [Сайты и веб-сайты](/encyclopedia/2-system-network/2-04-kak-rabotayut-sayty-i-veb-sayty/1), [Веб-браузеры](/encyclopedia/1-basics/1-11-soft-ryadovogo-polzovatelya/3), [Сеть и интернет - основы и принципы работы](/encyclopedia/2-system-network/2-03-set-i-internet/1), [Веб-сайты и веб-приложения — о разделе](/encyclopedia/2-system-network/2-04-kak-rabotayut-sayty-i-veb-sayty/intro), [Организация домашней сети](/encyclopedia/2-system-network/2-06-sistemnoe-administrirovanie/61), [NAT и проброс портов](/encyclopedia/2-system-network/2-06-sistemnoe-administrirovanie/7).

**Веб-разработка** — [История интернета](/encyclopedia/1-basics/1-07-nemnogo-o-proshlom/4), [Веб-сайты и веб-приложения — о разделе](/encyclopedia/2-system-network/2-04-kak-rabotayut-sayty-i-veb-sayty/intro), [Интерфейс — о разделе](/encyclopedia/1-basics/1-25-interfeys/intro), [Веб-браузеры](/encyclopedia/1-basics/1-11-soft-ryadovogo-polzovatelya/3), [HTML — о разделе](/encyclopedia/3-data-markup/3-09-html/intro), [JavaScript — о разделе](/encyclopedia/5-languages/5-01-javascript/intro).

{/* /sidebar-collections */}

---
