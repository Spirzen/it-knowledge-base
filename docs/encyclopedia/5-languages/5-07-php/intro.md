---
title: PHP — о разделе
description: "PHP выполняется на сервере: браузер получает уже готовый HTML. Часто встраивается в разметку между тегами <?php … ?> (в новых проектах чаще отдельные entrypoint-файлы и шаблоны)."
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

PHP выполняется **на сервере**: браузер получает уже готовый HTML. Часто встраивается в разметку между тегами `<?php` … `?>` (в новых проектах чаще отдельные entrypoint-файлы и шаблоны).

Материалы раздела ориентированы на **PHP 8.1+**; устаревшие API (`mysql_*`, `FILTER_SANITIZE_STRING` и др.) упоминаются только в историческом контексте или с пометкой об удалении.

> **Сначала:** [Что такое код и как он работает](/encyclopedia/4-code-dev/4-02-chto-takoe-kod-i-kak-on-rabotaet/1) — общая база: **код**, **блок кода**, **компиляция** и **интерпретация**, **исходный**, **байт-** и **машинный код**; в этом разделе — синтаксис и особенности языка.

### Рекомендуемая траектория для новичка

1. [Первая программа](/encyclopedia/5-languages/5-07-php/13) → синтаксис и типы (`14`–`17`, `152`, `153`)
2. [Данные со страницы](/encyclopedia/5-languages/5-07-php/151) → [сессии](/encyclopedia/5-languages/5-07-php/155)
3. [ООП в разделе «Код»](/encyclopedia/4-code-dev/4-08-oop/intro) (по желанию) → [ООП в PHP](/encyclopedia/5-languages/5-07-php/18) → [пространства имён](/encyclopedia/5-languages/5-07-php/157) → [enum, readonly, атрибуты](/encyclopedia/5-languages/5-07-php/158)
4. [Исключения в коде](/encyclopedia/5-languages/5-07-php/159) и [иерархия типов](/encyclopedia/5-languages/5-07-php/181)
5. [PDO](/encyclopedia/5-languages/5-07-php/160) → [форма и запись в БД](/encyclopedia/5-languages/5-07-php/161) → при необходимости [полный раздел по БД](/encyclopedia/5-languages/5-07-php/20)
6. [Composer](/encyclopedia/5-languages/5-07-php/111) и [локальная среда](/encyclopedia/5-languages/5-07-php/113)

<BeginnerWebStackHub defaultTab="php" />

<CodeRunPlacePlay />

<FirstProgramPlay language="php" />

<DocCardList />

<!-- sidebar-collections -->
## В подборках

Статья входит в тематические маршруты из меню **Подборки** и блока «С чего начать?» на главной. Соседние шаги того же маршрута:

**Веб-разработка** — [CSS — о разделе](/encyclopedia/3-data-markup/3-10-css/intro), [ASP.NET - веб-платформа Microsoft](/encyclopedia/5-languages/5-04-platforma-dotnet/172), [JavaScript — о разделе](/encyclopedia/5-languages/5-01-javascript/intro), [C# — о разделе](/encyclopedia/5-languages/5-05-csharp/intro), [HTML — о разделе](/encyclopedia/3-data-markup/3-09-html/intro), [Веб-разработка и API на C#](/encyclopedia/5-languages/5-05-csharp/45).

**Бэкенд и серверная разработка** — [C++ — о разделе](/encyclopedia/5-languages/5-06-cpp/intro), [Smalltalk — о разделе](/encyclopedia/5-languages/5-08-smalltalk/intro), [C# — о разделе](/encyclopedia/5-languages/5-05-csharp/intro), [Kotlin — о разделе](/encyclopedia/5-languages/5-09-kotlin/intro), [Платформа .NET — о разделе](/encyclopedia/5-languages/5-04-platforma-dotnet/intro), [Go — о разделе](/encyclopedia/5-languages/5-10-go/intro).

<!-- /sidebar-collections -->

---
