---
title: PHP — о разделе
description: Подборка материалов раздела PHP в энциклопедии Вселенная IT
sidebar_label: PHP — о разделе
---

import DocCardList from '@theme/DocCardList';
import BeginnerWebStackHub from '@site/src/components/BeginnerWebStackHub';
import CodeRunPlacePlay from '@site/src/components/CodeRunPlacePlay';
import FirstProgramPlay from '@site/src/components/FirstProgramPlay';

# О разделе

PHP выполняется **на сервере**: браузер получает уже готовый HTML. Часто встраивается в разметку между тегами `<?php` … `?>` (в новых проектах чаще отдельные entrypoint-файлы и шаблоны).

Материалы раздела ориентированы на **PHP 8.1+**; устаревшие API (`mysql_*`, `FILTER_SANITIZE_STRING` и др.) упоминаются только в историческом контексте или с пометкой об удалении.

### Рекомендуемая траектория для новичка

1. [Первая программа](/encyclopedia/5-languages/5-07-php/13) → синтаксис и типы (`14`–`17`, `152`, `153`)
2. [Данные со страницы](/encyclopedia/5-languages/5-07-php/151) → [сессии](/encyclopedia/5-languages/5-07-php/155)
3. [ООП](/encyclopedia/5-languages/5-07-php/18) → [пространства имён](/encyclopedia/5-languages/5-07-php/157) → [enum, readonly, атрибуты](/encyclopedia/5-languages/5-07-php/158)
4. [Исключения в коде](/encyclopedia/5-languages/5-07-php/159) и [иерархия типов](/encyclopedia/5-languages/5-07-php/181)
5. [PDO](/encyclopedia/5-languages/5-07-php/160) → [форма и запись в БД](/encyclopedia/5-languages/5-07-php/161) → при необходимости [полный раздел по БД](/encyclopedia/5-languages/5-07-php/20)
6. [Composer](/encyclopedia/5-languages/5-07-php/111) и [локальная среда](/encyclopedia/5-languages/5-07-php/113)

<BeginnerWebStackHub defaultTab="php" />

<CodeRunPlacePlay />

<FirstProgramPlay language="php" />

<DocCardList />

---
