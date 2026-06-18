---
title: Анализ данных — о разделе
description: "Подборка материалов раздела Анализ данных в энциклопедии Вселенная IT."
sidebar_label: Анализ данных — о разделе
related:
  - title: "Основы компьютерной грамотности"
    doc: encyclopedia/1-basics/1-035-bazovaya-informatika/101
  - title: "NoSQL — о разделе"
    doc: encyclopedia/3-data-markup/3-06-nosql/intro
  - title: "SQL — о разделе"
    doc: encyclopedia/3-data-markup/3-07-sql/intro
  - title: "NumPy — массивы и матрицы"
    doc: lab/examples/1129
  - title: "LaTeX — формулы для отчётов"
    doc: lab/examples/1137
  - title: "Matplotlib — графики (примеры)"
    doc: lab/examples/1112
  - title: "SymPy — уравнения и производные"
    doc: lab/examples/1118
  - title: "Prompt engineering — библиотека промптов"
    doc: lab/examples/1150
  - title: "SQL — реальные кейсы"
    doc: lab/examples/1152
  - title: "Продвинутые операции с данными — о разделе"
    doc: encyclopedia/3-data-markup/3-01-prodvinutye-operatsii-s-dannymi/intro
  - title: "Python — о разделе"
    doc: encyclopedia/5-languages/5-02-python/intro
  - title: R — о разделе
    doc: encyclopedia/5-languages/5-23-r/intro
  - title: Наука (контекст)
    doc: context/science/intro
---

import DocCardList from '@theme/DocCardList';

# О разделе

**Длинные листинги (от ~15 строк)** вынесены в каталог [code.spirzen.ru](https://code.spirzen.ru/) и подгружаются в статьях через `ExternalCodeEmbed` — так HTML энциклопедии не раздувается, а код остаётся с подсветкой, вкладками и сериями "шаг 1…N". Короткие фрагменты (одна формула DAX, пара строк pandas, SQL до staging) по-прежнему прямо в markdown. Диаграммы **mermaid** и интерактив — на месте или в [play.spirzen.ru](https://play.spirzen.ru/).

Раздел выстроен от общей картины к инструментам и прикладным сценариям. Если вы ещё не уверенно работаете с ПК, файлами и браузером — сначала [Основы компьютерной грамотности](/encyclopedia/1-basics/1-035-bazovaya-informatika/101).

Рекомендуемый порядок для первого прохода:

0. **Старт из Excel** — [Работа с Microsoft Excel — основы](/encyclopedia/1-basics/1-15-tekst/212) → [Excel и Google Sheets — формулы — формулы с разбором](/lab/Примеры/1139) → [Разведочный анализ данных в Excel — EDA в Excel](/encyclopedia/3-data-markup/3-11-analiz-dannyh/429) → [Основы статистики — статистика](/encyclopedia/3-data-markup/3-11-analiz-dannyh/42) → [Маршрут Excel → R → Python — маршрут Excel → R → Python](/encyclopedia/3-data-markup/3-11-analiz-dannyh/430) → ветка [Python для анализа данных — Python](/encyclopedia/3-data-markup/3-11-analiz-dannyh/424) или [5-23-r/103 — R](/encyclopedia/5-languages/5-23-r/103).
1. [Анализ данных](/encyclopedia/3-data-markup/3-11-analiz-dannyh/1) — OLTP/OLAP, семантика, DAX, жизненный цикл аналитики.
2. [Data Science](/encyclopedia/3-data-markup/3-11-analiz-dannyh/12) — роли, стек и [подготовка данных для ML](/encyclopedia/3-data-markup/3-11-analiz-dannyh/12#podgotovka-dannyh-dlya-ml) (нормализация, split, аугментация); до Pandas — [Python — файлы и CSV (stdlib)](/lab/Примеры/1126); [NumPy — массивы и матрицы](/lab/Примеры/1129); [типовые операции Pandas](/encyclopedia/3-data-markup/3-11-analiz-dannyh/428); [примеры pandas с разбором](/lab/Примеры/1113); [практикум — Pandas Data Viewer](/encyclopedia/5-languages/5-02-python/334) (Tkinter + pandas — загрузка CSV/Excel, поиск, статистика); [текст как признаки — TF-IDF](/encyclopedia/3-data-markup/3-11-analiz-dannyh/424#tekst-kak-priznaki); [практикум — распознавание цифр на PyTorch](/encyclopedia/5-languages/5-02-python/335) (MNIST, CNN, GUI-инференс); [практикум — тональность отзывов на PyTorch](/encyclopedia/5-languages/5-02-python/336); [SQL — реальные кейсы](/lab/Примеры/1152) (groupby, join, суммы — тот же смысл, что в SQL); [напоминалка Pandas / Polars / SQL / PySpark / Excel](/encyclopedia/3-data-markup/3-11-analiz-dannyh/426); [очистка в Pandas](/encyclopedia/3-data-markup/3-11-analiz-dannyh/427).
3. [Пакетная работа с данными](/encyclopedia/3-data-markup/3-11-analiz-dannyh/433) — теория batch, bulk, chunk, транзакции, идемпотентность, разбиение тяжёлых операций (хаб перед ETL и потоком).
4. [Big Data](/encyclopedia/3-data-markup/3-11-analiz-dannyh/11) (в т. ч. [Data Warehouse, Data Lake и Data Mesh](/encyclopedia/3-data-markup/3-11-analiz-dannyh/11#data-warehouse-lake-mesh)), [ETL/ELT](/encyclopedia/3-data-markup/3-11-analiz-dannyh/425), [потоковая аналитика](/encyclopedia/3-data-markup/3-11-analiz-dannyh/423) — масштаб, конвейеры, события в реальном времени.
5. [Дата-майнинг](/encyclopedia/3-data-markup/3-11-analiz-dannyh/2), [причинно-следственный анализ](/encyclopedia/3-data-markup/3-11-analiz-dannyh/422), [ошибки интерпретации](/encyclopedia/3-data-markup/3-11-analiz-dannyh/3) — закономерности, корреляция и критическое мышление.
6. [Python для анализа](/encyclopedia/3-data-markup/3-11-analiz-dannyh/424) (очистка таблиц — [Очистка и подготовка данных в Pandas](/encyclopedia/3-data-markup/3-11-analiz-dannyh/427)), [ИИ в аналитике](/encyclopedia/3-data-markup/3-11-analiz-dannyh/421) (промпты — [библиотека](/lab/Примеры/1150)), [Power BI](/encyclopedia/3-data-markup/3-11-analiz-dannyh/43) — практика и self-service. Числовые массивы — [NumPy — массивы и матрицы — NumPy](/lab/Примеры/1129); текст отчёта с формулами — [LaTeX — формулы для отчётов](/lab/Примеры/1137); символьная математика (уравнения, производные) — [SymPy — уравнения и производные](/lab/Примеры/1118); графики из Python — [Matplotlib — графики](/lab/Примеры/1112).

Углубление по тому же маршруту — [Вероятность для аналитика данных — вероятность](/encyclopedia/3-data-markup/3-11-analiz-dannyh/431), [Линейная регрессия — Excel, R и Python — регрессия в Excel, R и Python](/encyclopedia/3-data-markup/3-11-analiz-dannyh/432).

Прикладные кейсы: [технологии в спорте](/encyclopedia/3-data-markup/3-11-analiz-dannyh/41), [умный дом](/encyclopedia/3-data-markup/3-11-analiz-dannyh/4) (IoT и телеметрия). Итоги — в [Анализ данных — итоги](/encyclopedia/3-data-markup/3-11-analiz-dannyh/998), самопроверка — в [Анализ данных — чек-лист](/encyclopedia/3-data-markup/3-11-analiz-dannyh/999).

<DocCardList />

{/* sidebar-collections */}

---

## В подборках

Статья входит в [тематические подборки](/about/collections) и блок "С чего начать?" на [главной](/). Соседние шаги того же маршрута:

**Аналитика данных** — [Продвинутые операции с данными — о разделе](/encyclopedia/3-data-markup/3-01-prodvinutye-operatsii-s-dannymi/intro), [Python — о разделе](/encyclopedia/5-languages/5-02-python/intro), [NoSQL — о разделе](/encyclopedia/3-data-markup/3-06-nosql/intro), [R — о разделе](/encyclopedia/5-languages/5-23-r/intro), [SQL — о разделе](/encyclopedia/3-data-markup/3-07-sql/intro), [Основы баз данных — о разделе](/encyclopedia/3-data-markup/3-05-osnovy-baz-dannyh/intro).

{/* /sidebar-collections */}

---
