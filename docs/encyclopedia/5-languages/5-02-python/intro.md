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
  - title: "Практикум разработки игр — о разделе"
    doc: encyclopedia/9-spinoff/9-04-razrabotka-igr/praktikum-razrabotki-igr/intro
  - title: "Разработка игр на Python"
    doc: encyclopedia/5-languages/5-02-python/312
  - title: "Pygame — мини-игры на Python"
    doc: lab/examples/1132
  - title: "Tkinter — окна и виджеты"
    doc: lab/examples/1124
  - title: "Алгоритмы на Python — ЕГЭ и олимпиадка"
    doc: lab/examples/1122
  - title: "Python — работа с файлами и текстом"
    doc: lab/examples/1126
  - title: "Regex — готовые паттерны"
    doc: lab/examples/615
  - title: "NumPy — массивы и матрицы"
    doc: lab/examples/1129
  - title: "Pandas — типовые операции"
    doc: lab/examples/1113
  - title: "Excel и Google Sheets — формулы"
    doc: lab/examples/1139
  - title: "Matplotlib — графики (примеры)"
    doc: lab/examples/1112
  - title: "LaTeX — формулы для отчётов"
    doc: lab/examples/1137
  - title: "SymPy — уравнения и производные"
    doc: lab/examples/1118
  - title: "Примеры фигур Turtle на Python"
    doc: lab/examples/111
  - title: "Примеры фигур на Processing/p5.js"
    doc: lab/examples/1114
  - title: "SVG — рисунки кодом"
    doc: lab/examples/1119
---

import DocCardList from '@theme/DocCardList';
import BeginnerWebStackHub from '@site/src/components/BeginnerWebStackHub';
import SyntaxComparePlay from '@site/src/components/SyntaxComparePlay';
import FirstProgramPlay from '@site/src/components/FirstProgramPlay';

# О разделе

Python удобен для **первого языка**: читается почти как текст, много материалов для школ и курсов. Это **мультипарадигменный** язык общего назначения с динамической строгой типизацией, автоматическим управлением памятью и эталонной реализацией **CPython**; экосистема пакетов строится вокруг **PyPI** и **pip**.

> **Сначала:** [Что такое код и как он работает](/encyclopedia/4-code-dev/4-02-chto-takoe-kod-i-kak-on-rabotaet/1) — общая база: **код**, **блок кода**, **компиляция** и **интерпретация**, **исходный**, **байт-** и **машинный код**; в этом разделе — синтаксис и особенности языка.

Теория и контекст: [Python — язык общего назначения](./1.md) · [история](./14.md) · [Дзен Python](./15.md) · [архитектура CPython](./11.md). Краткие идиоматичные записи — [однострочные приёмы](./38.md) (обзор для всех языков — [в разделе «Код»](/encyclopedia/4-code-dev/4-02-chto-takoe-kod-i-kak-on-rabotaet/614)).

<div class="callout callout--info">
  <div class="callout-title">Среда выполнения Python</div>

  <div class="callout-body">
  Интерпретатор CPython компилирует модули в [байт-код](/encyclopedia/4-code-dev/4-03-vypolnenie-koda/314) (`.pyc`) и исполняет его на PVM — см. [жизненный цикл кода](/encyclopedia/5-languages/5-02-python/11#zhiznennyy-tsikl-koda); память — в [архитектуре выполнения](/encyclopedia/5-languages/5-02-python/27), сравнение с Java и Go — [шпаргалка GC](/encyclopedia/4-code-dev/4-15-sborka-musora/4).

  Общие термины — [программа и библиотеки](/encyclopedia/1-basics/1-19-programma/1).
</div>
</div>

<div class="callout callout--info">
  <div class="callout-title">Потоки, процессы и async в Python</div>

  <div class="callout-body">
  Теория ОС — [процессы и потоки](/encyclopedia/4-code-dev/4-05-asinhronnost/1), [синхронизация](/encyclopedia/4-code-dev/4-05-asinhronnost/11).

  В Python: `threading` и `multiprocessing` — [многопоточность](/encyclopedia/5-languages/5-02-python/26); `asyncio` — [асинхронность](/encyclopedia/5-languages/5-02-python/27);

  GIL — [ограничения параллелизма](/encyclopedia/5-languages/5-02-python/28).

  Сетевой I/O — [сетевое программирование](/encyclopedia/5-languages/5-02-python/315) и [справочник библиотек](/encyclopedia/5-languages/5-02-python/315#spravochnik-setevyh-bibliotek).
</div>
</div>

В статьях раздела идеи исполнения (байт-код, модули, исключения) по возможности сначала показываются **псевдокодом**, затем — синтаксисом Python.

---

### С чего начать

| Шаг | Материал | Зачем |
|-----|----------|-------|
| 1 | [Первая программа](./16.md) | Запуск и синтаксис |
| 1b | [if __name__ == "__main__"](./40.md) | Точка входа: прямой запуск и импорт |
| 1a | [Зависимости — requirements.txt и pyproject.toml](./39.md) | `pip install -r`, venv, пример с `requests` |
| 1ca | [Big-O — шпаргалка с примерами](/lab/Примеры/1128) | После циклов: O(n), вложенные циклы, `set` vs `list` |
| 1c | [Алгоритмы на Python — ЕГЭ и олимпиадка](/lab/Примеры/1122) | Задачи на ввод-вывод, поиск, ДП |
| 1d | [Python — работа с файлами и текстом](/lab/Примеры/1126) | `open`, `with`, `pathlib`, CSV, JSON, чтение из файла |
| 1e | [Regex — готовые паттерны](/lab/Примеры/615) | Модуль `re`: email, телефон, лог — с разбором по символам |
| 2 | [Flask](./3411.md) или [Django](./3011.md) | Веб с HTML |
| 2a | [Справочник по Django](./301.md) после [3011](./3011.md) | FormSet, CBV, auth, деплой |
| 2b | [Практикум — доска объявлений](./3013.md) | Сквозной сайт: рубрики, объявления, комментарии |
| 2c | [Pydantic — входящие данные](./41.md) | Что такое валидация и схема перед API |
| 3 | [DRF](./3012.md) или [FastAPI](./3432.md) | JSON API |
| 4 | [Tkinter](./311.md) → [3111](./3111.md) → [3112](./3112.md) · [примеры окон и виджетов](/lab/Примеры/1124) | Десктоп; теория — [раздел 4.11](/encyclopedia/4-code-dev/4-11-desktopnye-prilozheniya/intro) |
| 4a | [Разработка игр на Python](./312.md) → [мини-игры в Lab](/lab/Примеры/1132) → [Практикум](/encyclopedia/9-spinoff/9-04-razrabotka-igr/praktikum-razrabotki-igr/intro) | Pygame и учебные мини-игры |
| 4a-mc | [Разработка в Minecraft](/encyclopedia/9-spinoff/9-04-razrabotka-igr/21) → [команды и datapack](/lab/Примеры/1142) | Java Edition: чат, scoreboard, `.mcfunction` — без Pygame |
| 4b | [Трёхмерная графика и Panda3D](./318.md) · [примеры фигур](/lab/Примеры/1111) | 3D-сцены, текстуры, куб из вершин |
| 4b2 | [Turtle](./32.md) · [примеры фигур](/lab/Примеры/111) | 2D-черепашка на Python |
| 4b3 | [Canvas 2D](/encyclopedia/5-languages/5-01-javascript/47) · [p5.js в Lab](/lab/Примеры/1114) · [SVG в Lab](/lab/Примеры/1119) | те же фигуры в браузере: Canvas/p5 или векторная разметка |
| 4c | [Matplotlib — графики](./319.md) · [примеры](/lab/Примеры/1112) | Линии, гистограммы, scatter, подграфики |
| 4d | [Excel — формулы](/lab/Примеры/1139) → [Анализ данных — pandas, NumPy](./33.md) · [NumPy — примеры](/lab/Примеры/1129) · [428](/encyclopedia/3-data-markup/3-11-analiz-dannyh/428) · [примеры Pandas](/lab/Примеры/1113) | Сначала массивы, затем таблица, CSV, groupby |
| 4e | [SymPy — уравнения и производные](/lab/Примеры/1118) · [LaTeX — формулы](/lab/Примеры/1137) | Школа и вуз: корни, производные, формулы в отчёте; график f(x) — [1112](/lab/Примеры/1112) |
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
