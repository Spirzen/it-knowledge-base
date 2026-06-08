---
title: Интерактив
description: >-
  Витрина лучших интерактивных компонентов "Вселенной IT": тренажёры, эмуляторы,
  визуализаторы и схемы — от основ до продвинутых тем, в порядке разделов энциклопедии.
slug: /about/interactive
---

import ExternalPlayEmbed from '@site/src/components/ExternalPlayEmbed';

import LabTrainersHub from '@site/src/components/LabTrainersHub';

# Интерактив

Текст в энциклопедии дополняется **интерактивом**: кастомные React-демо встроены в статьи через [play.spirzen.ru](https://play.spirzen.ru/) (iframe, lazy load). Это не сторонние виджеты и не скриншоты — эмуляторы Office и терминала, пошаговые визуализаторы алгоритмов, схемы сети и инфраструктуры, тренажёры SQL и Git, игровые мини-демо и многое другое.

Ниже — **витрина лучших демо** в порядке возрастания сложности: сначала раздел "Основы", затем система и сеть, данные, код, языки, ИИ, проект и инфраструктура. Полный каталог привязан к статьям энциклопедии; здесь — ориентиры, с которых удобно начать.

> Полный реестр компонентов ведётся в репозитории (`info/demo-registry.md`). На сайте каждое демо живёт в своей статье — откройте ссылку под блоком, чтобы углубиться.

---

## 1. Основы

### Скорость печати

Замер зн/мин и слов/мин с подсветкой ошибок: шесть базовых текстов, **тридцать сложных** на русском и **тридцать на английском** (QWERTY). Удобно начать здесь, затем перейти к карте клавиатуры и зонам пальцев.

Статьи: [Как научиться быстро печатать](/encyclopedia/1-basics/1-12-sovety-dlya-novichka/14), [Клавиши для новичка](/encyclopedia/1-basics/1-08-kak-rabotaet-kompyuter/7131), [Клавиатура](/encyclopedia/1-basics/1-08-kak-rabotaet-kompyuter/713), [Горячие клавиши Windows](/encyclopedia/1-basics/1-12-sovety-dlya-novichka/3)

<ExternalPlayEmbed example="about/typing-speed-trainer-play" title="Typing Speed Trainer" />

---

### Карта клавиатуры

Тренажёр раскладки, зон и сочетаний — полезен новичкам до углубления в ОС.

Статья: [Советы для новичка](/encyclopedia/1-basics/1-12-sovety-dlya-novichka/3)

<ExternalPlayEmbed example="about/keyboard-play" title="Keyboard" />

---

### Зоны пальцев (слепая печать)

Цветовая схема домашнего ряда и мини-дрилл «нажми нужную клавишу».

Статья: [Как научиться быстро печатать](/encyclopedia/1-basics/1-12-sovety-dlya-novichka/14)

<ExternalPlayEmbed example="about/touch-typing-finger-play" title="Touch Typing Finger" />

---

### Устройства ввода-вывода

Как данные попадают в компьютер и обратно — мышь, клавиатура, диск, сеть.

Статья: [Базовые операции с данными](/encyclopedia/1-basics/1-10-bazovye-operatsii-s-dannymi/1)

<ExternalPlayEmbed example="about/io-devices-play" title="Io Devices" />

---

### Типы данных

Биты, числа, строки и логика представления — фундамент перед программированием.

Статья: [Данные и информация](/encyclopedia/1-basics/1-09-dannye-i-informatsiya/3)

<ExternalPlayEmbed example="about/data-types-play" title="Data Types" />

---

### Архитектура ПК

Процессор, память, накопители и периферия в одной наглядной схеме.

Статья: [Архитектура персонального компьютера](/encyclopedia/1-basics/1-08-kak-rabotaet-kompyuter/7)

<ExternalPlayEmbed example="about/computer-architecture-play" title="Computer Architecture" />

---

### Компилятор и интерпретатор

Как исходный код превращается в исполняемую программу.

Статья: [Программа](/encyclopedia/1-basics/1-19-programma/1)

<ExternalPlayEmbed example="about/compiler-simulator" title="Compiler Simulator" />

---

### Дорожная карта изучения

Интерактивное дерево всех разделов энциклопедии и рекомендуемый маршрут.

Статья: [Дорожная карта изучения](/encyclopedia/1-basics/1-03-dorozhnaya-karta-izucheniya/1)

<ExternalPlayEmbed example="about/interactive-roadmap" title="Interactive Roadmap" minHeight={520} />

---

### Визуальные блоки кода

Сборка простых программ из блоков — мост к текстовому коду.

Статья: [Основные языки](/encyclopedia/1-basics/1-24-osnovnye-yazyki/7)

<ExternalPlayEmbed example="code-basics/block-builder" title="Конструктор блоков" minHeight={420} />

---

### Веб-приложение: фронт и бэк

Запросы, слои и роли клиента и сервера.

Статья: [Фронтенд и бэкенд](/encyclopedia/1-basics/1-23-frontend-i-bekend/1)

<ExternalPlayEmbed example="about/web-app-architecture-play" title="Web App Architecture" />

---

### IT-английский

Три режима: карточки с переворотом, викторина и ввод перевода. Прогресс сохраняется в браузере; слова берутся из учебного плана и таблицы в статье.

Статья: [Ключевые термины и фразы](/encyclopedia/1-basics/1-30-angliyskiy-yazyk/2)

<ExternalPlayEmbed example="about/english-vocabulary-trainer" title="English Vocabulary Trainer" />

---

### Хаб тренажёров

SQL, терминалы, Git, Docker и практика — переключение категорий без перезагрузки страницы. Можно открыть с якорем, например `#practice/english`.

Страница: [Лаборатория → Тренажёры](/lab/Тренажеры/1)

<LabTrainersHub defaultCategory="practice" defaultTrainer="english" />

---

## 2. Система и сеть

### Сетевой стек

Уровни от приложения до канала — как пакет проходит по стеку.

Статья: [Сеть и интернет](/encyclopedia/2-system-network/2-03-set-i-internet/211)

<ExternalPlayEmbed example="about/network-stack-explorer-play" title="Network Stack Explorer" />

---

### HTTP-запрос

Разбор заголовков, метода, тела и ответа сервера.

Статья: [HTTP как основа веб-интеграций](/encyclopedia/2-system-network/2-09-osnovy-integratsionnogo-vzaimodeystviya/118)

<ExternalPlayEmbed example="about/http-request-analyzer" title="Http Request Analyzer" />

---

## 3. Данные и разметка

### HTML-песочница

Живое редактирование разметки и просмотр результата.

Статья: [HTML](/encyclopedia/3-data-markup/3-09-html/3)

<ExternalPlayEmbed example="about/html-playground" title="HTML Playground" />

---

### SQL JOIN

Пошаговый тренажёр соединений таблиц.

Статья: [SQL](/encyclopedia/3-data-markup/3-07-sql/55)

<ExternalPlayEmbed example="about/sql-join-trainer" title="Sql Join Trainer" />

---

### SQL Generator Online

Конструктор запросов: соберите SELECT/INSERT по правилам SQL; можно загрузить таблицу из Excel и получить INSERT для импорта в БД.

Отдельное приложение: [SQL Generator Online](https://spirzen.github.io/SQLGeneratorOnline/) — в статьях раздела SQL ссылка также стоит под встроенным [SQL-тренажёром](/encyclopedia/3-data-markup/3-07-sql/1).

---

### Просмотр схемы БД

Имитация подключения к СУБД и ER-диаграмма таблиц с внешними ключами — по мотивам Database Schema Viewer. Панели подключения и сведений о таблице можно свернуть, чтобы видеть схему целиком.

Статья: [Основы баз данных](/encyclopedia/3-data-markup/3-05-osnovy-baz-dannyh/1)

<ExternalPlayEmbed example="about/database-schema-viewer-play" title="Database Schema Viewer" />

---

## 4. Код и разработка

### Визуализатор алгоритма

Пошаговое выполнение кода с подсветкой строк.

Статья: [Что такое код](/encyclopedia/4-code-dev/4-02-chto-takoe-kod-i-kak-on-rabotaet/1)

<ExternalPlayEmbed example="about/algo-code-visualizer" title="Algo Code Visualizer" minHeight={420} />

---

### Git

Ветки, коммиты и слияния в безопасной песочнице.

Статья: [Основы Git](/encyclopedia/4-code-dev/4-13-osnovy-raboty-s-git/112)

<ExternalPlayEmbed example="about/git-emulator" title="Git Emulator" minHeight={420} />

---

### Schema Maker — свободные схемы

Лёгкий редактор блок-схем и эскизов: фигуры, связи, рисование от руки, экспорт PNG / PDF / JSON. По мотивам отдельного проекта Schema Maker.

Статья: [Проектирование и архитектура](/encyclopedia/7-project/7-06-proektirovanie-i-arhitektura/1)

Полная онлайн-версия (минималистичный холст, экспорт PNG в один клик): [Schema Maker Online](https://spirzen.github.io/SchemaMakerOnline/).

<ExternalPlayEmbed example="about/schema-maker-play" title="Schema Maker" />

---

### ArchiStyler — планировщик классов

UML-диаграмма, шаблоны паттернов (MVP, Strategy, Factory, Repository, слои), роли классов и превью C# / Java. Режим "во весь экран" — кнопка ⛶ у демо.

Статьи: [Основы архитектуры](/encyclopedia/4-code-dev/4-04-proekt-i-freymvorki/112), [Паттерны проектирования](/encyclopedia/7-project/7-06-proektirovanie-i-arhitektura/design-patterns/1)

Отдельное приложение для архитектурных схем и паттернов: [ArchiStyler Online](https://spirzen.github.io/ArchiStylerOnline/).

<ExternalPlayEmbed example="about/archi-styler-play" title="Archi Styler" />

---

## 5. Программирование

### Bash-оболочка

Команды, пайпы и сценарии в интерактивном терминале.

Статья: [Bash](/encyclopedia/5-languages/5-25-bash/11)

<ExternalPlayEmbed example="about/bash-shell-play" title="Bash Shell" />

---

## 6. Искусственный интеллект

### Нейросеть

Слои, веса и прохождение сигнала через сеть.

Статья: [Нейросети](/encyclopedia/6-ai/6-03-neyroseti/1)

<ExternalPlayEmbed example="ai/neural-network-demo" title="Neural Network Demo" />

---

### ИИ-агент

Цикл восприятия, рассуждения и действий агента.

Статья: [Модели и инструменты](/encyclopedia/6-ai/6-04-modeli-i-instrumenty/111)

<ExternalPlayEmbed example="ai/ai-agent-play" title="Ai Agent" />

---

## 7. Проект

### Основы тестирования

Уровни и виды проверок качества ПО.

Статья: [Тестирование](/encyclopedia/7-project/7-05-testirovanie/1)

<ExternalPlayEmbed example="about/testing-basics-demo" title="Testing Basics Demo" />

---

### BPMN

Справочник нотации и построение процессов.

Статья: [Аналитика](/encyclopedia/7-project/7-04-analitika/129)

<ExternalPlayEmbed example="about/bpmn-reference-play" title="Bpmn Reference" />

---

## 8. Инфраструктура и безопасность

### Диаграмма инфраструктуры

Сборка схемы сервисов, балансировки и масштабирования.

Статья: [Микросервисы и интеграция](/encyclopedia/8-infra-security/8-05-mikroservisy-i-integratsiya/1)

<ExternalPlayEmbed example="about/infra-diagram-studio" title="Infra Diagram Studio" minHeight={480} />

---

### Docker Compose

Сервисы, сети и зависимости в одном стеке.

Статья: [Контейнеризация](/encyclopedia/8-infra-security/8-06-konteynerizatsiya-i-orkestratsiya/1111)

<ExternalPlayEmbed example="about/docker-compose-play" title="Docker Compose" />

---

### CI/CD: слои проверок

Конвейер сборки, тестов и выкладки.

Статья: [DevOps и CI/CD](/encyclopedia/8-infra-security/8-04-devops-ci-cd/13)

<ExternalPlayEmbed example="about/cicd-validation-layers-play" title="Cicd Validation Layers" />

---

<div class="callout callout--tip">
  <div class="callout-title">Как искать демо дальше</div>

  <div class="callout-body">
  Откройте любой раздел энциклопедии с карты на <a href="/">главной</a> или по <a href="/encyclopedia/1-basics/1-03-dorozhnaya-karta-izucheniya/1">дорожной карте</a> — интерактивные блоки стоят там, где они помогают понять тему, а не ради украшения.
</div>
  </div>

