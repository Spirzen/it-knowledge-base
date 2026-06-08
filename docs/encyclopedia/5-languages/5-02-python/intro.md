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
  - title: "Kivy — мобильные приложения и игры на Python"
    doc: encyclopedia/5-languages/5-02-python/320
  - title: "Практикум Kivy — о разделе"
    doc: encyclopedia/5-languages/5-02-python/kivy-praktikum/intro
  - title: "Pygame — мини-игры на Python"
    doc: lab/examples/1132
  - title: "Tkinter — окна и виджеты"
    doc: lab/examples/1124
---

import ExternalPlayEmbed from '@site/src/components/ExternalPlayEmbed';


import DocCardList from '@theme/DocCardList';

# О разделе

**Длинные листинги (от ~15 строк)** вынесены в каталог [code.spirzen.ru](https://code.spirzen.ru/) и подгружаются в статьях через `ExternalCodeEmbed` — так HTML энциклопедии не раздувается, а код остаётся с подсветкой, вкладками и сериями «шаг 1…N». Короткие фрагменты (одна строка, пара выражений) по-прежнему прямо в markdown. Диаграммы **mermaid** и интерактив — на месте или в [play.spirzen.ru](https://play.spirzen.ru/).

Python удобен для **первого языка**: читается почти как текст, много материалов для школ и курсов. Это **мультипарадигменный** язык общего назначения с динамической строгой типизацией, автоматическим управлением памятью и эталонной реализацией **CPython**; экосистема пакетов строится вокруг **PyPI** и **pip**.

> **Сначала:** [Что такое код и как он работает](/encyclopedia/4-code-dev/4-02-chto-takoe-kod-i-kak-on-rabotaet/1) — общая база: **код**, **блок кода**, **компиляция** и **интерпретация**, **исходный**, **байт-** и **машинный код**; в этом разделе — синтаксис и особенности языка.

Теория и контекст: [Python — язык общего назначения](./1.md) · [история](./14.md) · [Дзен Python](./15.md) · [архитектура CPython](./11.md). Краткие идиоматичные записи — [однострочные приёмы](./38.md) (обзор для всех языков — [в разделе «Код»](/encyclopedia/4-code-dev/4-02-chto-takoe-kod-i-kak-on-rabotaet/614)). Массовая работа с таблицами (`read_csv(chunksize=…)`, ETL) — [Пакетная работа с данными](/encyclopedia/3-data-markup/3-11-analiz-dannyh/433), [Pandas](/encyclopedia/3-data-markup/3-11-analiz-dannyh/427).

<div class="callout callout--tip">
  <div class="callout-title">Официальная документация</div>

  <div class="callout-body">
  Статьи раздела объясняют язык и экосистему; при споре о синтаксисе, API библиотеки или флагах CLI сверяйтесь с первоисточником:

  [Python 3 (RU)](https://docs.python.org/3/ru/) · [Django](https://docs.djangoproject.com/) · [FastAPI](https://fastapi.tiangolo.com/ru/) · [Metanit: Python](https://metanit.com/python/) · [подборка документации](/tools/documentation/2).
  </div>
</div>

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

Перед [обработкой исключений](./28.md): [общая теория](/encyclopedia/4-code-dev/4-06-arhitektura-vypolneniya/111) (что такое ошибка, чем она отличается от исключения).

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
| 4a-k | [Kivy](./320.md) → [Практикум Kivy](./kivy-praktikum/intro.md) (2048, Pong, Snake) | Мобильные игры на Python: тач, Clock, APK |
| 4a-mc | [Разработка в Minecraft](/encyclopedia/9-spinoff/9-04-razrabotka-igr/21) → [команды и datapack](/lab/Примеры/1142) | Java Edition: чат, scoreboard, `.mcfunction` — без Pygame |
| 4b | [Трёхмерная графика и Panda3D](./318.md) · [примеры фигур](/lab/Примеры/1111) | 3D-сцены, текстуры, куб из вершин |
| 4b2 | [Turtle](./32.md) · [примеры фигур](/lab/Примеры/111) | 2D-черепашка на Python |
| 4b3 | [Canvas 2D](/encyclopedia/5-languages/5-01-javascript/47) · [p5.js в Lab](/lab/Примеры/1114) · [SVG в Lab](/lab/Примеры/1119) | те же фигуры в браузере: Canvas/p5 или векторная разметка |
| 4c | [Matplotlib — графики](./319.md) · [примеры](/lab/Примеры/1112) | Линии, гистограммы, scatter, подграфики |
| 4d | [Excel — формулы](/lab/Примеры/1139) → [Анализ данных — pandas, NumPy](./33.md) · [NumPy — примеры](/lab/Примеры/1129) · [428](/encyclopedia/3-data-markup/3-11-analiz-dannyh/428) · [примеры Pandas](/lab/Примеры/1113) · [практикум Pandas Data Viewer](./334.md) | Сначала массивы, затем таблица, CSV, groupby; сквозное GUI-приложение |
| 4d-ml | [PyTorch для разработчика](./333.md) → [практикум — цифры MNIST на PyTorch](./335.md) | CNN, обучение, GUI-инференс; образец `F:\Projects\Python\TestPyTorch` |
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

<ExternalPlayEmbed example="data-markup/beginner-web-stack-hub" title="Веб-стек для новичка" minHeight={520} playProps={{ defaultTab: 'python' }} />

<ExternalPlayEmbed example="lab/first-program-play" title="Первая программа" minHeight={420} playProps={{ language: 'python' }} />

<ExternalPlayEmbed example="data-markup/syntax-compare-play" title="Сравнение синтаксиса языков" minHeight={420} />

<DocCardList />

{/* sidebar-collections */}

---

## В подборках

Статья входит в [тематические подборки](/about/collections) и блок «С чего начать?» на [главной](/). Соседние шаги того же маршрута:

**Первый коммит** — [Как работает компьютер — о разделе](/encyclopedia/1-basics/1-08-kak-rabotaet-kompyuter/intro), [Терминал — о разделе](/encyclopedia/2-system-network/2-05-terminal/intro), [Программа — о разделе](/encyclopedia/1-basics/1-19-programma/intro), [Код — о разделе](/encyclopedia/4-code-dev/4-02-chto-takoe-kod-i-kak-on-rabotaet/intro), [Основы работы с Git — о разделе](/encyclopedia/4-code-dev/4-13-osnovy-raboty-s-git/intro), [Разработка и отладка — о разделе](/encyclopedia/4-code-dev/4-14-razrabotka-i-otladka/intro).

**База программиста** — [JavaScript — о разделе](/encyclopedia/5-languages/5-01-javascript/intro), [Java — о разделе](/encyclopedia/5-languages/5-03-java/intro), [Low-code и No-code платформы](/encyclopedia/8-infra-security/8-02-low-code-no-code/1), [Документация и инструменты Java (Microsoft)](/encyclopedia/5-languages/5-03-java/294), [Автоматическое управление памятью](/encyclopedia/4-code-dev/4-15-sborka-musora/1), [Разработка и отладка — о разделе](/encyclopedia/4-code-dev/4-14-razrabotka-i-otladka/intro).

**Веб-разработка** — [Приложение с S3, PostgreSQL и ASP.NET Core Web API](/encyclopedia/5-languages/5-05-csharp/453), [Веб-разработка и REST API на Python](/encyclopedia/5-languages/5-02-python/34), [Документация и практика ASP.NET (Microsoft Learn)](/encyclopedia/5-languages/5-05-csharp/455), [Социальные сети](/encyclopedia/2-system-network/2-02-platformy/311), [ASP.NET - фреймворк для веб-приложений](/encyclopedia/5-languages/5-05-csharp/451), [Low-code и No-code платформы](/encyclopedia/8-infra-security/8-02-low-code-no-code/1).

**Бэкенд и серверная разработка** — [JavaScript — о разделе](/encyclopedia/5-languages/5-01-javascript/intro), [Java — о разделе](/encyclopedia/5-languages/5-03-java/intro), [SQL — о разделе](/encyclopedia/3-data-markup/3-07-sql/intro), [Платформа .NET — о разделе](/encyclopedia/5-languages/5-04-platforma-dotnet/intro), [Контейнеризация и оркестрация — о разделе](/encyclopedia/8-infra-security/8-06-konteynerizatsiya-i-orkestratsiya/intro), [C# — о разделе](/encyclopedia/5-languages/5-05-csharp/intro).

Также: Соло / инди-разработчик, Аналитика данных.

{/* /sidebar-collections */}

---
