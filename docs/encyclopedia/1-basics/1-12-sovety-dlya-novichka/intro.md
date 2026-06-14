---
title: Советы для новичка — о разделе
description: "Подборка материалов раздела Советы для новичка в энциклопедии Вселенная IT."
sidebar_label: Советы для новичка — о разделе
related:
  - title: "Дорожная карта"
    doc: encyclopedia/1-basics/1-03-dorozhnaya-karta-izucheniya/intro
  - title: "Советы для продвинутого"
    doc: encyclopedia/1-basics/1-14-sovety-dlya-prodvinutogo/intro
  - title: "Операционная система — о разделе"
    doc: encyclopedia/2-system-network/2-01-operatsionnaya-sistema/intro
  - title: "Софт рядового пользователя — о разделе"
    doc: encyclopedia/1-basics/1-11-soft-ryadovogo-polzovatelya/intro
  - title: "Запуск и перезапуск приложений"
    doc: encyclopedia/1-basics/1-12-sovety-dlya-novichka/13
  - title: "Исполняемые файлы и архивы — о разделе"
    doc: encyclopedia/1-basics/1-20-ispolnyaemye-fayly-i-arhivy/intro
  - title: "Системное администрирование — о разделе"
    doc: encyclopedia/2-system-network/2-06-sistemnoe-administrirovanie/intro
  - title: "Управление службами в Windows"
    doc: encyclopedia/2-system-network/2-06-sistemnoe-administrirovanie/64
  - title: "Prompt engineering — библиотека промптов"
    doc: lab/examples/1150
  - title: "Генерация кода — ChatGPT, Gemini и DeepSeek"
    doc: encyclopedia/6-ai/6-04-modeli-i-instrumenty/117
  - title: "Поиск текста в файлах — grep, findstr и Select-String"
    doc: encyclopedia/2-system-network/2-05-terminal/104
  - title: "Базовая информатика — о разделе"
    doc: encyclopedia/1-basics/1-035-bazovaya-informatika/intro
  - title: "Цифровая безопасность для пользователя"
    doc: encyclopedia/1-basics/1-035-bazovaya-informatika/112
  - title: "Облако, синхронизация и бэкап для дома"
    doc: encyclopedia/1-basics/1-12-sovety-dlya-novichka/15
  - title: "ИИ для новичка"
    doc: encyclopedia/1-basics/1-21-poisk-informatsii/5
---

import DocCardList from '@theme/DocCardList';

# О разделе

**Цифровая безопасность** (фишинг, пароли, 2FA, сценарии мошенничества) — единым блоком в [Базовой информатике](/encyclopedia/1-basics/1-035-bazovaya-informatika/112); здесь — практика Windows, macOS, Linux, Android и бытовые гайды.

Перед командами из интернета или от ИИ-помощника — [Опасные скрипты](/encyclopedia/8-infra-security/8-03-zabota-o-kode-i-dannyh/101). Код из чата без разбора — [вайб-кодинг](/encyclopedia/6-ai/6-07-vayb-koding-i-neurokontent/1); осознанный цикл с LLM — [Генерация кода](/encyclopedia/6-ai/6-04-modeli-i-instrumenty/117) и [библиотека промптов](/lab/Примеры/1150) (объяснение темы, traceback, домашка без списывания).

Скриншоты Windows (проводник, диспетчер задач, поиск) — в [Основах компьютерной грамотности](/encyclopedia/1-basics/1-035-bazovaya-informatika/101) и [таблице переиспользования](/encyclopedia/1-basics/1-035-bazovaya-informatika/101#иллюстрации-для-других-статей).

Если вы уже настраиваете Windows глубже, откройте практикум [Управление службами в Windows](/encyclopedia/2-system-network/2-06-sistemnoe-administrirovanie/64) и применяйте изменения через `Manual` с проверкой зависимостей.

<div class="callout callout--tip">
  <div class="callout-title">Платформы и быт</div>

  <div class="callout-body">
  Windows — <a href="/encyclopedia/1-basics/1-12-sovety-dlya-novichka/11">настройка</a>; macOS — <a href="/encyclopedia/1-basics/1-12-sovety-dlya-novichka/16">первые шаги</a>; Linux — <a href="/encyclopedia/1-basics/1-12-sovety-dlya-novichka/17">обзор</a>; Android — <a href="/encyclopedia/1-basics/1-12-sovety-dlya-novichka/18">знакомство</a>. Облако и бэкап — <a href="/encyclopedia/1-basics/1-12-sovety-dlya-novichka/15">глава 15</a>; смена устройства — <a href="/encyclopedia/1-basics/1-12-sovety-dlya-novichka/21">глава 21</a>.
</div>
</div>

<div class="callout callout--tip">
  <div class="callout-title">Запуск, перезапуск, dev-сервер</div>

  <div class="callout-body">
  Если путаете Run в IDE, <code>npm run dev</code>, двойной клик по <code>.exe</code> и Docker — начните с <a href="/encyclopedia/1-basics/1-12-sovety-dlya-novichka/13">Запуск и перезапуск приложений</a>.
</div>
  </div>

<div class="callout callout--tip">
  <div class="callout-title">Найти слово в файле или в папке</div>

  <div class="callout-body">
  В открытом документе — <strong>Ctrl+F</strong> (Mac — <strong>Cmd+F</strong>); по папке — VS Code или Notepad++; в терминале — <code>grep</code>. Обзор способов — <a href="/encyclopedia/2-system-network/2-05-terminal/104">поиск текста в файлах</a>; горячие клавиши — <a href="/encyclopedia/1-basics/1-12-sovety-dlya-novichka/3">глава про клавиатуру</a>; слепая печать — <a href="/encyclopedia/1-basics/1-12-sovety-dlya-novichka/14">как научиться быстро печатать</a>.
</div>
  </div>

<div class="callout callout--tip">
  <div class="callout-title">PostgreSQL на своём компьютере</div>

  <div class="callout-body">
  Когда дойдёте до данных и SQL — **обязательно поставьте PostgreSQL** и потренируйтесь — psql, простые запросы, проверка таблиц.

  Это нужно любой IT-роли, не только разработчикам.

  Старт — [Первые шаги с SQL](/encyclopedia/3-data-markup/3-07-sql/101), установка — [СУБД в Инструментах](/tools/data/1).
</div>
  </div>

<DocCardList />

{/* sidebar-collections */}

---

## В подборках

Статья входит в [тематические подборки](/about/collections) и блок "С чего начать?" на [главной](/). Соседние шаги того же маршрута:

**Старт в IT** — [Основы компьютерной грамотности](/encyclopedia/1-basics/1-035-bazovaya-informatika/101), [Базовая информатика — о разделе](/encyclopedia/1-basics/1-035-bazovaya-informatika/intro), [Карьера в IT и мифы — о разделе](/encyclopedia/1-basics/1-26-karera-v-it-i-mify/intro), [Восприятие IT в обществе](/encyclopedia/1-basics/1-04-kak-vidyat-it-obychnye-lyudi/1), [Фронтенд и бэкенд — о разделе](/encyclopedia/1-basics/1-23-frontend-i-bekend/intro), [Дорожная карта изучения — о разделе](/encyclopedia/1-basics/1-03-dorozhnaya-karta-izucheniya/intro), [Обзор структуры Вселенной IT — о разделе](/encyclopedia/1-basics/1-02-vvedenie/intro).

**Компьютерная грамотность** — [Основы компьютерной грамотности](/encyclopedia/1-basics/1-035-bazovaya-informatika/101), [Операционная система — о разделе](/encyclopedia/2-system-network/2-01-operatsionnaya-sistema/intro), [Софт рядового пользователя — о разделе](/encyclopedia/1-basics/1-11-soft-ryadovogo-polzovatelya/intro), [Исполняемые файлы и архивы — о разделе](/encyclopedia/1-basics/1-20-ispolnyaemye-fayly-i-arhivy/intro), [Системное администрирование — о разделе](/encyclopedia/2-system-network/2-06-sistemnoe-administrirovanie/intro), [Программа — о разделе](/encyclopedia/1-basics/1-19-programma/intro), [Основы информационной безопасности — о разделе](/encyclopedia/2-system-network/2-08-osnovy-informatsionnoy-bezopasnosti/intro).

{/* /sidebar-collections */}

---
