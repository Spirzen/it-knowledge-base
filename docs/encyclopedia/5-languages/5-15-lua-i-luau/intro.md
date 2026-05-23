---
title: Lua и Luau — о разделе
description: Подборка материалов раздела Lua и Luau в энциклопедии Вселенная IT
sidebar_label: Lua и Luau — о разделе
---

import DocCardList from '@theme/DocCardList';

# О разделе

Раздел охватывает **классический Lua** (в материалах ориентир — **Lua 5.4**) и **Luau** (диалект Roblox на базе Lua 5.1). В разных главах могут упоминаться фичи конкретной версии — смотрите пометки в тексте.

## Две дорожки

| Контекст | Версия | На что обратить внимание |
|----------|--------|-------------------------|
| Чистый Lua, LÖVE, Neovim, OpenResty | 5.3–5.4 | `//`, `table.unpack`, `<const>`, `<toclose>`, generational GC |
| Roblox Studio / Luau | 5.1 + расширения | аннотации типов, `task.*`, `--!strict`, другой захват `i` в `for`, ограниченные `io`/`os` |

## Рекомендуемый порядок

1. [Основы языка](/encyclopedia/5-languages/5-15-lua-i-luau/1) — философия и модель выполнения  
2. [История](/encyclopedia/5-languages/5-15-lua-i-luau/12), [экосистема](/encyclopedia/5-languages/5-15-lua-i-luau/11), [первая программа](/encyclopedia/5-languages/5-15-lua-i-luau/13)  
3. Синтаксис и типы: [14](/encyclopedia/5-languages/5-15-lua-i-luau/14) → [15](/encyclopedia/5-languages/5-15-lua-i-luau/15) → [16](/encyclopedia/5-languages/5-15-lua-i-luau/16) → [17](/encyclopedia/5-languages/5-15-lua-i-luau/17)  
4. [Метатаблицы](/encyclopedia/5-languages/5-15-lua-i-luau/18), [модули](/encyclopedia/5-languages/5-15-lua-i-luau/19), [GC](/encyclopedia/5-languages/5-15-lua-i-luau/20), [корутины](/encyclopedia/5-languages/5-15-lua-i-luau/21)  
5. [Luau и Roblox](/encyclopedia/5-languages/5-15-lua-i-luau/23) — после базового Lua  

**Справочник:** [3.md](/encyclopedia/5-languages/5-15-lua-i-luau/3) · **Самопроверка:** [999.md](/encyclopedia/5-languages/5-15-lua-i-luau/999)

<DocCardList />

---
