---
title: Python — о разделе
description: "Python — первый язык, Django, Flask и FastAPI, типизация и автоматизация; сравнение фреймворков и маршрут для новичка и backend."
sidebar_label: Python — о разделе
related:
  - title: "JavaScript — о разделе"
    doc: encyclopedia/5-languages/5-01-javascript/intro
  - title: "Java — о разделе"
    doc: encyclopedia/5-languages/5-03-java/intro
  - title: "Low-code и No-code платформы"
    doc: encyclopedia/8-infra-security/8-02-low-code-no-code/1
  - title: "Документация и инструменты Java (Microsoft)"
    doc: encyclopedia/5-languages/5-03-java/294
  - title: "Приложение с S3, PostgreSQL и ASP.NET Core Web API"
    doc: encyclopedia/5-languages/5-05-csharp/453
  - title: "Веб-разработка и REST API на Python"
    doc: encyclopedia/5-languages/5-02-python/34
  - title: "Документация и практика ASP.NET (Microsoft Learn)"
    doc: encyclopedia/5-languages/5-05-csharp/455
  - title: "Социальные сети"
    doc: encyclopedia/2-system-network/2-02-platformy/311
---

import DocCardList from '@theme/DocCardList';
import BeginnerWebStackHub from '@site/src/components/BeginnerWebStackHub';
import SyntaxComparePlay from '@site/src/components/SyntaxComparePlay';
import FirstProgramPlay from '@site/src/components/FirstProgramPlay';

# О разделе

Python удобен для **первого языка**: читается почти как текст, много материалов для школ и курсов. Это **мультипарадигменный** язык общего назначения с динамической строгой типизацией, автоматическим управлением памятью и эталонной реализацией **CPython**; экосистема пакетов строится вокруг **PyPI** и **pip**.

> **Сначала:** [Что такое код и как он работает](/encyclopedia/4-code-dev/4-02-chto-takoe-kod-i-kak-on-rabotaet/1) — общая база: **код**, **блок кода**, **компиляция** и **интерпретация**, **исходный**, **байт-** и **машинный код**; в этом разделе — синтаксис и особенности языка.

Теория и контекст: [Python — язык общего назначения](./1.md) · [история](./14.md) · [Дзен Python](./15.md) · [архитектура CPython](./11.md).

<div class="callout callout--info">
  <div class="callout-title">Среда выполнения Python</div>

  <div class="callout-body">
  Интерпретатор CPython компилирует модули в <a href="/encyclopedia/4-code-dev/4-03-vypolnenie-koda/314">байт-код</a> (<code>.pyc</code>) и исполняет его на PVM; память и <a href="/encyclopedia/4-code-dev/4-06-arhitektura-vypolneniya/1">сборка мусора</a> — в runtime. Общие термины — <a href="/encyclopedia/1-basics/1-19-programma/1">программа и библиотеки</a>.
</div>
</div>

<div class="callout callout--info">
  <div class="callout-title">Потоки, процессы и async в Python</div>

  <div class="callout-body">
  Теория ОС — <a href="/encyclopedia/4-code-dev/4-05-asinhronnost/1">процессы и потоки</a>, <a href="/encyclopedia/4-code-dev/4-05-asinhronnost/11">синхронизация</a>. В Python: <code>threading</code> и <code>multiprocessing</code> — <a href="/encyclopedia/5-languages/5-02-python/26">многопоточность</a>; <code>asyncio</code> — <a href="/encyclopedia/5-languages/5-02-python/27">асинхронность</a>; GIL — <a href="/encyclopedia/5-languages/5-02-python/28">ограничения параллелизма</a>.
</div>
</div>

В статьях раздела идеи исполнения (байт-код, модули, исключения) по возможности сначала показываются **псевдокодом**, затем — синтаксисом Python.

---

### С чего начать

| Шаг | Материал | Зачем |
|-----|----------|-------|
| 1 | [Первая программа](./16.md) | Запуск и синтаксис |
| 2 | [Flask](./3411.md) или [Django](./3011.md) | Веб с HTML |
| 3 | [DRF](./3012.md) или [FastAPI](./3432.md) | JSON API |
| 4 | [Tkinter](./3111.md) | Десктоп |
| 5 | [pytest](./37.md) | Тесты |

[Чек-лист самопроверки](./999.md).

---

### Зачем этот раздел

Подборка по **Python** в энциклопедии: синтаксис, первая программа и смежные темы. Пройдите один маршрут до конца, не смешивая несколько языков на старте.

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

<BeginnerWebStackHub defaultTab="python" />

<FirstProgramPlay language="python" />

<SyntaxComparePlay />

<DocCardList />

{/* sidebar-collections */}

---

## В подборках

Статья входит в тематические маршруты из меню **Подборки** и блока "С чего начать?" на главной. Соседние шаги того же маршрута:

**База программиста** — [JavaScript — о разделе](/encyclopedia/5-languages/5-01-javascript/intro), [Java — о разделе](/encyclopedia/5-languages/5-03-java/intro), [Low-code и No-code платформы](/encyclopedia/8-infra-security/8-02-low-code-no-code/1), [Документация и инструменты Java (Microsoft)](/encyclopedia/5-languages/5-03-java/294), [Автоматическое управление памятью](/encyclopedia/4-code-dev/4-15-sborka-musora/1), [Разработка и отладка — о разделе](/encyclopedia/4-code-dev/4-14-razrabotka-i-otladka/intro).

**Веб-разработка** — [Приложение с S3, PostgreSQL и ASP.NET Core Web API](/encyclopedia/5-languages/5-05-csharp/453), [Веб-разработка и REST API на Python](/encyclopedia/5-languages/5-02-python/34), [Документация и практика ASP.NET (Microsoft Learn)](/encyclopedia/5-languages/5-05-csharp/455), [Социальные сети](/encyclopedia/2-system-network/2-02-platformy/311), [ASP.NET - фреймворк для веб-приложений](/encyclopedia/5-languages/5-05-csharp/451), [Low-code и No-code платформы](/encyclopedia/8-infra-security/8-02-low-code-no-code/1).

**Бэкенд и серверная разработка** — [JavaScript — о разделе](/encyclopedia/5-languages/5-01-javascript/intro), [Java — о разделе](/encyclopedia/5-languages/5-03-java/intro), [SQL — о разделе](/encyclopedia/3-data-markup/3-07-sql/intro) ([PostgreSQL](/encyclopedia/3-data-markup/3-07-sql/888), [SQLite](/encyclopedia/3-data-markup/3-07-sql/887), [MySQL](/encyclopedia/3-data-markup/3-07-sql/889)), [Платформа .NET — о разделе](/encyclopedia/5-languages/5-04-platforma-dotnet/intro), [Контейнеризация и оркестрация — о разделе](/encyclopedia/8-infra-security/8-06-konteynerizatsiya-i-orkestratsiya/intro), [C# — о разделе](/encyclopedia/5-languages/5-05-csharp/intro).

{/* /sidebar-collections */}

---
