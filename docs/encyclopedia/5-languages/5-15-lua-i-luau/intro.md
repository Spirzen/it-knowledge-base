---
title: Lua и Luau — о разделе
description: "Раздел охватывает классический Lua (в материалах ориентир — Lua 5.4) и Luau (диалект Roblox на базе Lua 5.1)."
sidebar_label: Lua и Luau — о разделе
related:
  - title: "Swift — о разделе"
    doc: encyclopedia/5-languages/5-14-swift/intro
  - title: "Cobol — о разделе"
    doc: encyclopedia/5-languages/5-16-starye-yazyki/Cobol/intro
  - title: "Rust — о разделе"
    doc: encyclopedia/5-languages/5-13-rust/intro
  - title: "Fortran — о разделе"
    doc: encyclopedia/5-languages/5-16-starye-yazyki/Fortran/intro
---

import DocCardList from '@theme/DocCardList';

# О разделе

**Длинные листинги (от ~15 строк)** вынесены в каталог [code.spirzen.ru](https://code.spirzen.ru/) и подгружаются в статьях через `ExternalCodeEmbed` — так HTML энциклопедии не раздувается, а код остаётся с подсветкой, вкладками и сериями «шаг 1…N». Короткие фрагменты (одна строка, пара выражений) по-прежнему прямо в markdown. Диаграммы **mermaid** и интерактив — на месте или в [play.spirzen.ru](https://play.spirzen.ru/).

Раздел охватывает **классический Lua** (в материалах ориентир — **Lua 5.4**) и **Luau** (диалект Roblox на базе Lua 5.1). В разных главах могут упоминаться фичи конкретной версии — смотрите пометки в тексте.

**Lua** (*лу́а*, «луна») — встраиваемый скриптовый язык из PUC-Rio (Бразилия, с 1993 года). Таблицы заменяют массивы и объекты; метатаблицы дают ООП и перегрузку операций. Материалы раздела опираются на официальную документацию [lua.org](https://www.lua.org) и обобщают проверенные формулировки из энциклопедических источников (в том числе [статьи о Lua в Википедии](https://ru.wikipedia.org/wiki/Lua)).

> **Сначала:** [Что такое код и как он работает](/encyclopedia/4-code-dev/4-02-chto-takoe-kod-i-kak-on-rabotaet/1) — общая база: **код**, **блок кода**, **компиляция** и **интерпретация**, **исходный**, **байт-** и **машинный код**; в этом разделе — синтаксис и особенности языка.

---

## Две дорожки

| Контекст | Версия | На что обратить внимание |
|----------|--------|-------------------------|
| Чистый Lua, LÖVE, Neovim, OpenResty | 5.3–5.4 | `//`, `table.unpack`, `<const>`, `<toclose>`, generational GC |
| Roblox Studio / Luau | 5.1 + расширения | аннотации типов, `task.*`, `--!strict`, другой захват `i` в `for`, ограниченные `io`/`os` |

---

## Маршрут Luau для Roblox

Если цель — **игры на Roblox**, идите параллельно с разделом [Разработка игр](/encyclopedia/9-spinoff/9-04-razrabotka-igr/intro):

| Шаг | Luau (этот раздел) | Roblox (геймдев) |
|-----|--------------------|------------------|
| 1 | [13 — первая программа](./13) | [203 — Studio](/encyclopedia/9-spinoff/9-04-razrabotka-igr/203) |
| 2 | [14](./14) → [17](./17) | [204 — обби](/encyclopedia/9-spinoff/9-04-razrabotka-igr/204) |
| 3 | [23 — Luau и Roblox](./23) | [206 — продвижение](/encyclopedia/9-spinoff/9-04-razrabotka-igr/206) |

---

## Рекомендуемый порядок

1. [Основы языка](/encyclopedia/5-languages/5-15-lua-i-luau/1) — философия и модель выполнения  
2. [История](/encyclopedia/5-languages/5-15-lua-i-luau/12), [экосистема](/encyclopedia/5-languages/5-15-lua-i-luau/11), [первая программа](/encyclopedia/5-languages/5-15-lua-i-luau/13)  
3. Синтаксис и типы: [14](/encyclopedia/5-languages/5-15-lua-i-luau/14) → [15](/encyclopedia/5-languages/5-15-lua-i-luau/15) → [16](/encyclopedia/5-languages/5-15-lua-i-luau/16) → [17](/encyclopedia/5-languages/5-15-lua-i-luau/17)  
4. [Метатаблицы](/encyclopedia/5-languages/5-15-lua-i-luau/18), [модули](/encyclopedia/5-languages/5-15-lua-i-luau/19), [GC](/encyclopedia/5-languages/5-15-lua-i-luau/20), [корутины](/encyclopedia/5-languages/5-15-lua-i-luau/21)  
5. [Luau и Roblox](/encyclopedia/5-languages/5-15-lua-i-luau/23) — после базового Lua  

**Справочник:** [3.md](/encyclopedia/5-languages/5-15-lua-i-luau/3) · **Самопроверка:** [999.md](/encyclopedia/5-languages/5-15-lua-i-luau/999)

---

### Зачем этот раздел

Подборка по **Lua и Luau** в энциклопедии: синтаксис, первая программа и смежные темы. Пройдите один маршрут до конца, не смешивая несколько языков на старте.

---

### С чего начать

| Шаг | Материал | Зачем |
|-----|----------|-------|
| 1 | [Первая программа](./13.md) | Запуск и синтаксис |

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

<DocCardList />

{/* sidebar-collections */}

---

## В подборках

Статья входит в [тематические подборки](/about/collections) и блок «С чего начать?» на [главной](/). Соседние шаги того же маршрута:

**Бэкенд и серверная разработка** — [Swift — о разделе](/encyclopedia/5-languages/5-14-swift/intro), [Cobol — о разделе](/encyclopedia/5-languages/5-16-starye-yazyki/Cobol/intro), [Rust — о разделе](/encyclopedia/5-languages/5-13-rust/intro), [Fortran — о разделе](/encyclopedia/5-languages/5-16-starye-yazyki/Fortran/intro), [Groovy — о разделе](/encyclopedia/5-languages/5-12-groovy/intro), [Lisp — о разделе](/encyclopedia/5-languages/5-16-starye-yazyki/Lisp/intro).

{/* /sidebar-collections */}

---
