---
title: Lisp — о разделе
description: "Раздел про Lisp и его современное воплощение в учебном курсе — прежде всего Common Lisp: S-выражения, REPL, макросы, CLOS и практическая первая программа."
sidebar_label: Lisp — о разделе
related:
  - title: "Fortran — о разделе"
    doc: encyclopedia/5-languages/5-16-starye-yazyki/Fortran/intro
  - title: "Pascal — о разделе"
    doc: encyclopedia/5-languages/5-16-starye-yazyki/Pascal/intro
  - title: "Cobol — о разделе"
    doc: encyclopedia/5-languages/5-16-starye-yazyki/Cobol/intro
  - title: "Visual Basic — о разделе"
    doc: encyclopedia/5-languages/5-16-starye-yazyki/visual-basic/intro
---

import DocCardList from '@theme/DocCardList';

# О разделе

Раздел про **Lisp** и его современное воплощение в учебном курсе — прежде всего **Common Lisp**: S-выражения, REPL, макросы, CLOS и практическая первая программа.

<div class="callout callout--info">
  <div class="callout-title">Диалект в курсе</div>
  Примеры кода в учебных статьях (2–8) рассчитаны на **ANSI Common Lisp** (SBCL, CCL, CLISP). **Scheme** и **Clojure** упоминаются в истории и сравнениях; синтаксис у них близкий, но детали отличаются (например, `defun` и `define`, `nil` и `#f`).
</div>

> **Сначала:** [Что такое код и как он работает](/encyclopedia/4-code-dev/4-02-chto-takoe-kod-i-kak-on-rabotaet/1) — общая база: **код**, **блок кода**, **компиляция** и **интерпретация**, **исходный**, **байт-** и **машинный код**; в этом разделе — синтаксис и особенности языка.

---

## Рекомендуемый маршрут

| Этап | Статьи | Зачем |
|------|--------|--------|
| Контекст | [История](/encyclopedia/5-languages/5-16-starye-yazyki/Lisp/1) | от Lisp 1.5 до Common Lisp и Clojure |
| Идеи | [Основы](/encyclopedia/5-languages/5-16-starye-yazyki/Lisp/2), [Архитектура](/encyclopedia/5-languages/5-16-starye-yazyki/Lisp/3) | S-expr, eval, макросы, окружения |
| Язык | [Типы](/encyclopedia/5-languages/5-16-starye-yazyki/Lisp/4), [Управление](/encyclopedia/5-languages/5-16-starye-yazyki/Lisp/5), [Функции](/encyclopedia/5-languages/5-16-starye-yazyki/Lisp/6) | данные, `if`/`cond`, рекурсия |
| Практика | [Первая программа](/encyclopedia/5-languages/5-16-starye-yazyki/Lisp/7) | установка REPL, hello world |
| Стиль | [Функциональное программирование](/encyclopedia/5-languages/5-16-starye-yazyki/Lisp/8) | чистые функции, идиомы |
| Справка | [Справочник](/encyclopedia/5-languages/5-16-starye-yazyki/Lisp/811) | шпаргалка по CL: API, CLOS, ASDF, идиомы (не заменяет курс) |

Начните с [установки и REPL](/encyclopedia/5-languages/5-16-starye-yazyki/Lisp/7), затем читайте [основы](/encyclopedia/5-languages/5-16-starye-yazyki/Lisp/2) с открытым интерпретатором.

---

### Зачем этот раздел

Подборка по **Lisp** в энциклопедии: синтаксис, первая программа и смежные темы. Пройдите один маршрут до конца, не смешивая несколько языков на старте.

---

### С чего начать

| Шаг | Материал | Зачем |
|-----|----------|-------|
| 1 | [Первая программа](./7.md) | Запуск и синтаксис |

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

Статья входит в тематические маршруты из меню **Подборки** и блока "С чего начать?" на главной. Соседние шаги того же маршрута:

**Бэкенд и серверная разработка** — [Fortran — о разделе](/encyclopedia/5-languages/5-16-starye-yazyki/Fortran/intro), [Pascal — о разделе](/encyclopedia/5-languages/5-16-starye-yazyki/Pascal/intro), [Cobol — о разделе](/encyclopedia/5-languages/5-16-starye-yazyki/Cobol/intro), [Visual Basic — о разделе](/encyclopedia/5-languages/5-16-starye-yazyki/visual-basic/intro), [Lua и Luau — о разделе](/encyclopedia/5-languages/5-15-lua-i-luau/intro), [Ассемблер — о разделе](/encyclopedia/5-languages/5-16-starye-yazyki/assembler/intro).

{/* /sidebar-collections */}

---
