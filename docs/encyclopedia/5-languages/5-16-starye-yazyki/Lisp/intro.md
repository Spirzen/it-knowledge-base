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

  <div class="callout-body">
  Примеры кода в учебных статьях (2–8) рассчитаны на **ANSI Common Lisp** (SBCL, CCL, CLISP). **Scheme** и **Clojure** упоминаются в истории и сравнениях; синтаксис у них близкий, но детали отличаются (например, `defun` и `define`, `nil` и `#f`).
</div>
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

### Как читать раздел без перегруза

Если кажется, что Lisp "слишком теоретичен", используйте практический ритм:

1. Прочитайте 1 небольшой блок теории (5-10 минут).
2. Сразу повторите 2-3 выражения в REPL.
3. Зафиксируйте, что именно вернуло выражение и почему.
4. Только после этого переходите к следующему блоку.

Так материал перестаёт быть абстрактным: каждое определение сразу превращается в рабочий навык. Для такого ритма удобна связка: [первая программа](/encyclopedia/5-languages/5-16-starye-yazyki/Lisp/7) → [основы](/encyclopedia/5-languages/5-16-starye-yazyki/Lisp/2) → [управляющие конструкции](/encyclopedia/5-languages/5-16-starye-yazyki/Lisp/5).

---

### Сквозные темы раздела

Чтобы не воспринимать статьи как отдельные фрагменты, держите в голове три сквозные идеи:

- **Код как данные**: из этого вырастают `quote`, `eval`, макросы и DSL ([архитектура](/encyclopedia/5-languages/5-16-starye-yazyki/Lisp/3)).
- **Функции как значения**: из этого вырастают `mapcar`, `lambda`, замыкания и композиция ([функции](/encyclopedia/5-languages/5-16-starye-yazyki/Lisp/6), [FP-стиль](/encyclopedia/5-languages/5-16-starye-yazyki/Lisp/8)).
- **Интерактивная разработка**: из этого вырастают REPL-подход, быстрые итерации и отладка ([первая программа](/encyclopedia/5-languages/5-16-starye-yazyki/Lisp/7), [справочник](/encyclopedia/5-languages/5-16-starye-yazyki/Lisp/811)).

---

<DocCardList />

{/* sidebar-collections */}

---

## В подборках

Статья входит в [тематические подборки](/about/collections) и блок «С чего начать?» на [главной](/). Соседние шаги того же маршрута:

**Бэкенд и серверная разработка** — [Fortran — о разделе](/encyclopedia/5-languages/5-16-starye-yazyki/Fortran/intro), [Pascal — о разделе](/encyclopedia/5-languages/5-16-starye-yazyki/Pascal/intro), [Cobol — о разделе](/encyclopedia/5-languages/5-16-starye-yazyki/Cobol/intro), [Visual Basic — о разделе](/encyclopedia/5-languages/5-16-starye-yazyki/visual-basic/intro), [Lua и Luau — о разделе](/encyclopedia/5-languages/5-15-lua-i-luau/intro), [Ассемблер — о разделе](/encyclopedia/5-languages/5-16-starye-yazyki/assembler/intro).

{/* /sidebar-collections */}

---
