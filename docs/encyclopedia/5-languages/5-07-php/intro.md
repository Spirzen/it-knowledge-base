---
title: PHP — о разделе
description: "PHP на сервере — Laravel и Symfony, Composer и PHPUnit; чем отличаются фреймворки и с чего начать веб-backend."
sidebar_label: PHP — о разделе
related:
  - title: "CSS — о разделе"
    doc: encyclopedia/3-data-markup/3-10-css/intro
  - title: "ASP.NET - веб-платформа Microsoft"
    doc: encyclopedia/5-languages/5-04-platforma-dotnet/172
  - title: "JavaScript — о разделе"
    doc: encyclopedia/5-languages/5-01-javascript/intro
  - title: "C# — о разделе"
    doc: encyclopedia/5-languages/5-05-csharp/intro
  - title: "C++ — о разделе"
    doc: encyclopedia/5-languages/5-06-cpp/intro
  - title: "Smalltalk — о разделе"
    doc: encyclopedia/5-languages/5-08-smalltalk/intro
  - title: "Kotlin — о разделе"
    doc: encyclopedia/5-languages/5-09-kotlin/intro
---

import DocCardList from '@theme/DocCardList';
import BeginnerWebStackHub from '@site/src/components/BeginnerWebStackHub';
import CodeRunPlacePlay from '@site/src/components/CodeRunPlacePlay';
import FirstProgramPlay from '@site/src/components/FirstProgramPlay';

# О разделе

PHP выполняется **на сервере**: браузер получает уже готовый HTML. Язык изначально задумывали как **препроцессор гипертекста** — программу, которая обрабатывает файл страницы и подставляет динамические фрагменты в [HTML-разметку](/encyclopedia/3-data-markup/3-09-html/1) (гипертекст со ссылками и формами). Часто код вставляют между `<?php` … `?>`; в новых проектах чаще отдельные entrypoint-файлы и шаблоны (Blade, Twig).

> **Теория веба:** [гипертекст и ссылки](/encyclopedia/3-data-markup/3-09-html/1#gipertekst-i-giperssylki), [статическая и динамическая страница](/encyclopedia/3-data-markup/3-09-html/1#veb-stranitsa) — в разделе HTML; [что такое PHP](/encyclopedia/5-languages/5-07-php/1), [история](./11.md) — здесь.

Материалы раздела ориентированы на **PHP 8.1+**; устаревшие API (`mysql_*`, `FILTER_SANITIZE_STRING` и др.) упоминаются только в историческом контексте или с пометкой об удалении.

> **Сначала:** [Что такое код и как он работает](/encyclopedia/4-code-dev/4-02-chto-takoe-kod-i-kak-on-rabotaet/1) — общая база: **код**, **блок кода**, **компиляция** и **интерпретация**, **исходный**, **байт-** и **машинный код**; в этом разделе — синтаксис и особенности языка.

---

### Рекомендуемая траектория для новичка

1. [Первая программа](/encyclopedia/5-languages/5-07-php/13) → синтаксис и типы (`14`–`17`, `152`, `153`)
2. [Данные со страницы](/encyclopedia/5-languages/5-07-php/151) → [загрузка файлов и валидация](/encyclopedia/5-languages/5-07-php/162) → [сессии](/encyclopedia/5-languages/5-07-php/155)
3. [ООП в разделе "Код"](/encyclopedia/4-code-dev/4-08-oop/intro) (по желанию) → [ООП в PHP](/encyclopedia/5-languages/5-07-php/18) → [пространства имён](/encyclopedia/5-languages/5-07-php/157) → [enum, readonly, атрибуты](/encyclopedia/5-languages/5-07-php/158)
4. [Исключения в коде](/encyclopedia/5-languages/5-07-php/159) и [иерархия типов](/encyclopedia/5-languages/5-07-php/181)
5. [PDO](/encyclopedia/5-languages/5-07-php/160) → [форма и запись в БД](/encyclopedia/5-languages/5-07-php/161) → при необходимости [полный раздел по БД](/encyclopedia/5-languages/5-07-php/20); СУБД из кода — [MySQL](/encyclopedia/3-data-markup/3-07-sql/889), [PostgreSQL](/encyclopedia/3-data-markup/3-07-sql/888), [SQLite](/encyclopedia/3-data-markup/3-07-sql/887), [SQL Server](/encyclopedia/3-data-markup/3-07-sql/890); веб-админки — [phpMyAdmin](/encyclopedia/5-languages/5-07-php/phpmyadmin/intro), [phpPgAdmin](/encyclopedia/5-languages/5-07-php/phppgadmin/intro), [история обеих](/encyclopedia/5-languages/5-07-php/phpmyadmin/5); production Postgres — [практикум 8.11](/encyclopedia/8-infra-security/8-11-praktikum-postgresql/intro)
6. [Composer](/encyclopedia/5-languages/5-07-php/111) и [локальная среда](/encyclopedia/5-languages/5-07-php/113)
7. [Laravel](/encyclopedia/5-languages/5-07-php/1431) → [Livewire](/encyclopedia/5-languages/5-07-php/1434) → [Filament](/encyclopedia/5-languages/5-07-php/1435)
8. [API + Sanctum](/encyclopedia/5-languages/5-07-php/1433) — для отдельного SPA

[Чек-лист самопроверки](./999.md).

---

### Зачем этот раздел

Подборка по **PHP** в энциклопедии: синтаксис, первая программа и смежные темы. Пройдите один маршрут до конца, не смешивая несколько языков на старте.

---

### С чего начать

| Шаг | Материал | Зачем |
|-----|----------|-------|
| 1 | [Первая программа](./13.md) | Запуск и синтаксис |
| 2 | [Laravel](./1431.md) | Углубление |
| 3 | [Symfony](./1441.md) | Углубление |

---

### Частые ошибки при старте

| Ошибка | Что делать |
|--------|------------|
| Прыжки между языками | Закройте одну "первую программу", потом сравнивайте |
| Код без запуска | Выполните пример локально |
| Сразу большой фреймворк | Сначала база раздела, потом REST/UI |

---

### Что попробовать

1. Шаг 1 из таблицы.
2. Три непонятных термина — найдите статьи в оглавлении раздела.
3. Другой язык — только после своей рабочей первой программы.

---

<BeginnerWebStackHub defaultTab="php" />

<CodeRunPlacePlay />

<FirstProgramPlay language="php" />

<DocCardList />

{/* sidebar-collections */}

---

## В подборках

Статья входит в тематические маршруты из меню **Подборки** и блока "С чего начать?" на главной. Соседние шаги того же маршрута:

**Веб-разработка** — [CSS — о разделе](/encyclopedia/3-data-markup/3-10-css/intro), [ASP.NET - веб-платформа Microsoft](/encyclopedia/5-languages/5-04-platforma-dotnet/172), [JavaScript — о разделе](/encyclopedia/5-languages/5-01-javascript/intro), [C# — о разделе](/encyclopedia/5-languages/5-05-csharp/intro), [HTML — о разделе](/encyclopedia/3-data-markup/3-09-html/intro), [Веб-разработка и API на C#](/encyclopedia/5-languages/5-05-csharp/45).

**Бэкенд и серверная разработка** — [C++ — о разделе](/encyclopedia/5-languages/5-06-cpp/intro), [Smalltalk — о разделе](/encyclopedia/5-languages/5-08-smalltalk/intro), [C# — о разделе](/encyclopedia/5-languages/5-05-csharp/intro), [Kotlin — о разделе](/encyclopedia/5-languages/5-09-kotlin/intro), [Платформа .NET — о разделе](/encyclopedia/5-languages/5-04-platforma-dotnet/intro), [Go — о разделе](/encyclopedia/5-languages/5-10-go/intro).

{/* /sidebar-collections */}

---
