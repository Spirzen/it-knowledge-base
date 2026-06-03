---
title: Интерактив
description: >-
  Витрина лучших интерактивных компонентов "Вселенной IT": тренажёры, эмуляторы,
  визуализаторы и схемы — от основ до продвинутых тем, в порядке разделов энциклопедии.
slug: /about/interactive
---

import KeyboardPlay from '@site/src/components/KeyboardPlay';
import TouchTypingFingerPlay from '@site/src/components/TouchTypingFingerPlay';
import TypingSpeedTrainerPlay from '@site/src/components/TypingSpeedTrainerPlay';
import IoDevicesPlay from '@site/src/components/IoDevicesPlay';
import DataTypesPlay from '@site/src/components/DataTypesPlay';
import ComputerArchitecturePlay from '@site/src/components/ComputerArchitecturePlay';
import CompilerSimulator from '@site/src/components/CompilerSimulator.jsx';
import InteractiveRoadmap from '@site/src/components/InteractiveRoadmap';
import BlockBuilder from '@site/src/components/BlockBuilder';
import WebAppArchitecturePlay from '@site/src/components/WebAppArchitecturePlay.jsx';
import NetworkStackExplorerPlay from '@site/src/components/NetworkStackExplorerPlay';
import HttpRequestAnalyzer from '@site/src/components/HttpRequestAnalyzer';
import HTMLPlayground from '@site/src/components/HTMLPlayground.js';
import SqlJoinTrainer from '@site/src/components/SqlJoinTrainer';
import AlgoCodeVisualizer from '@site/src/components/AlgoCodeVisualizer.jsx';
import GitEmulator from '@site/src/components/GitEmulator.jsx';
import BashShellPlay from '@site/src/components/BashShellPlay';
import NeuralNetworkDemo from '@site/src/components/NeuralNetworkDemo.jsx';
import AiAgentPlay from '@site/src/components/AiAgentPlay.jsx';
import TestingBasicsDemo from '@site/src/components/TestingBasicsDemo.jsx';
import BpmnReferencePlay from '@site/src/components/BpmnReferencePlay.jsx';
import InfraDiagramStudio from '@site/src/components/InfraDiagramStudio.jsx';
import DockerComposePlay from '@site/src/components/DockerComposePlay';
import CicdValidationLayersPlay from '@site/src/components/CicdValidationLayersPlay.jsx';
import EnglishVocabularyTrainer from '@site/src/components/EnglishVocabularyTrainer';
import LabTrainersHub from '@site/src/components/LabTrainersHub';
import ArchiStylerPlay from '@site/src/components/ArchiStylerPlay.jsx';
import DatabaseSchemaViewerPlay from '@site/src/components/DatabaseSchemaViewerPlay.jsx';
import SchemaMakerPlay from '@site/src/components/SchemaMakerPlay.jsx';

# Интерактив

Текст в энциклопедии дополняется **интерактивом**: более четырёхсот кастомных React-компонентов встроены прямо в статьи. Это не сторонние виджеты и не скриншоты — эмуляторы Office и терминала, пошаговые визуализаторы алгоритмов, схемы сети и инфраструктуры, тренажёры SQL и Git, игровые мини-демо и многое другое. Можно нажимать, переключать режимы и сразу видеть, как устроена тема.

Ниже — **витрина лучших демо** в порядке возрастания сложности: сначала раздел "Основы", затем система и сеть, данные, код, языки, ИИ, проект и инфраструктура. Полный каталог привязан к статьям энциклопедии; здесь — ориентиры, с которых удобно начать.

> Полный реестр компонентов ведётся в репозитории (`info/demo-registry.md`). На сайте каждое демо живёт в своей статье — откройте ссылку под блоком, чтобы углубиться.

---

## 1. Основы

### Скорость печати

Замер зн/мин и слов/мин с подсветкой ошибок: шесть базовых текстов, **тридцать сложных** на русском и **тридцать на английском** (QWERTY). Удобно начать здесь, затем перейти к карте клавиатуры и зонам пальцев.

Статьи: [Как научиться быстро печатать](/encyclopedia/1-basics/1-12-sovety-dlya-novichka/14), [Клавиши для новичка](/encyclopedia/1-basics/1-08-kak-rabotaet-kompyuter/7131), [Клавиатура](/encyclopedia/1-basics/1-08-kak-rabotaet-kompyuter/713), [Горячие клавиши Windows](/encyclopedia/1-basics/1-12-sovety-dlya-novichka/3)

<TypingSpeedTrainerPlay />

---

### Карта клавиатуры

Тренажёр раскладки, зон и сочетаний — полезен новичкам до углубления в ОС.

Статья: [Советы для новичка](/encyclopedia/1-basics/1-12-sovety-dlya-novichka/3)

<KeyboardPlay />

---

### Зоны пальцев (слепая печать)

Цветовая схема домашнего ряда и мини-дрилл «нажми нужную клавишу».

Статья: [Как научиться быстро печатать](/encyclopedia/1-basics/1-12-sovety-dlya-novichka/14)

<TouchTypingFingerPlay />

---

### Устройства ввода-вывода

Как данные попадают в компьютер и обратно — мышь, клавиатура, диск, сеть.

Статья: [Базовые операции с данными](/encyclopedia/1-basics/1-10-bazovye-operatsii-s-dannymi/1)

<IoDevicesPlay />

---

### Типы данных

Биты, числа, строки и логика представления — фундамент перед программированием.

Статья: [Данные и информация](/encyclopedia/1-basics/1-09-dannye-i-informatsiya/3)

<DataTypesPlay />

---

### Архитектура ПК

Процессор, память, накопители и периферия в одной наглядной схеме.

Статья: [Архитектура персонального компьютера](/encyclopedia/1-basics/1-08-kak-rabotaet-kompyuter/7)

<ComputerArchitecturePlay />

---

### Компилятор и интерпретатор

Как исходный код превращается в исполняемую программу.

Статья: [Программа](/encyclopedia/1-basics/1-19-programma/1)

<CompilerSimulator />

---

### Дорожная карта изучения

Интерактивное дерево всех разделов энциклопедии и рекомендуемый маршрут.

Статья: [Дорожная карта изучения](/encyclopedia/1-basics/1-03-dorozhnaya-karta-izucheniya/1)

<InteractiveRoadmap />

---

### Визуальные блоки кода

Сборка простых программ из блоков — мост к текстовому коду.

Статья: [Основные языки](/encyclopedia/1-basics/1-24-osnovnye-yazyki/7)

<BlockBuilder />

---

### Веб-приложение: фронт и бэк

Запросы, слои и роли клиента и сервера.

Статья: [Фронтенд и бэкенд](/encyclopedia/1-basics/1-23-frontend-i-bekend/1)

<WebAppArchitecturePlay />

---

### IT-английский

Три режима: карточки с переворотом, викторина и ввод перевода. Прогресс сохраняется в браузере; слова берутся из учебного плана и таблицы в статье.

Статья: [Ключевые термины и фразы](/encyclopedia/1-basics/1-30-angliyskiy-yazyk/2)

<EnglishVocabularyTrainer />

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

<NetworkStackExplorerPlay />

---

### HTTP-запрос

Разбор заголовков, метода, тела и ответа сервера.

Статья: [HTTP как основа веб-интеграций](/encyclopedia/2-system-network/2-09-osnovy-integratsionnogo-vzaimodeystviya/118)

<HttpRequestAnalyzer />

---

## 3. Данные и разметка

### HTML-песочница

Живое редактирование разметки и просмотр результата.

Статья: [HTML](/encyclopedia/3-data-markup/3-09-html/3)

<HTMLPlayground />

---

### SQL JOIN

Пошаговый тренажёр соединений таблиц.

Статья: [SQL](/encyclopedia/3-data-markup/3-07-sql/55)

<SqlJoinTrainer />

---

### SQL Generator Online

Конструктор запросов: соберите SELECT/INSERT по правилам SQL; можно загрузить таблицу из Excel и получить INSERT для импорта в БД.

Отдельное приложение: [SQL Generator Online](https://spirzen.github.io/SQLGeneratorOnline/) — в статьях раздела SQL ссылка также стоит под встроенным [SQL-тренажёром](/encyclopedia/3-data-markup/3-07-sql/1).

---

### Просмотр схемы БД

Имитация подключения к СУБД и ER-диаграмма таблиц с внешними ключами — по мотивам Database Schema Viewer. Панели подключения и сведений о таблице можно свернуть, чтобы видеть схему целиком.

Статья: [Основы баз данных](/encyclopedia/3-data-markup/3-05-osnovy-baz-dannyh/1)

<DatabaseSchemaViewerPlay />

---

## 4. Код и разработка

### Визуализатор алгоритма

Пошаговое выполнение кода с подсветкой строк.

Статья: [Что такое код](/encyclopedia/4-code-dev/4-02-chto-takoe-kod-i-kak-on-rabotaet/1)

<AlgoCodeVisualizer />

---

### Git

Ветки, коммиты и слияния в безопасной песочнице.

Статья: [Основы Git](/encyclopedia/4-code-dev/4-13-osnovy-raboty-s-git/112)

<GitEmulator />

---

### Schema Maker — свободные схемы

Лёгкий редактор блок-схем и эскизов: фигуры, связи, рисование от руки, экспорт PNG / PDF / JSON. По мотивам отдельного проекта Schema Maker.

Статья: [Проектирование и архитектура](/encyclopedia/7-project/7-06-proektirovanie-i-arhitektura/1)

Полная онлайн-версия (минималистичный холст, экспорт PNG в один клик): [Schema Maker Online](https://spirzen.github.io/SchemaMakerOnline/).

<SchemaMakerPlay defaultDocName="Витрина" title="Schema Maker" />

---

### ArchiStyler — планировщик классов

UML-диаграмма, шаблоны паттернов (MVP, Strategy, Factory, Repository, слои), роли классов и превью C# / Java. Режим "во весь экран" — кнопка ⛶ у демо.

Статьи: [Основы архитектуры](/encyclopedia/4-code-dev/4-04-proekt-i-freymvorki/112), [Паттерны проектирования](/encyclopedia/7-project/7-06-proektirovanie-i-arhitektura/design-patterns/1)

Отдельное приложение для архитектурных схем и паттернов: [ArchiStyler Online](https://spirzen.github.io/ArchiStylerOnline/).

<ArchiStylerPlay defaultPattern="mvp" />

---

## 5. Программирование

### Bash-оболочка

Команды, пайпы и сценарии в интерактивном терминале.

Статья: [Bash](/encyclopedia/5-languages/5-25-bash/11)

<BashShellPlay />

---

## 6. Искусственный интеллект

### Нейросеть

Слои, веса и прохождение сигнала через сеть.

Статья: [Нейросети](/encyclopedia/6-ai/6-03-neyroseti/1)

<NeuralNetworkDemo />

---

### ИИ-агент

Цикл восприятия, рассуждения и действий агента.

Статья: [Модели и инструменты](/encyclopedia/6-ai/6-04-modeli-i-instrumenty/111)

<AiAgentPlay />

---

## 7. Проект

### Основы тестирования

Уровни и виды проверок качества ПО.

Статья: [Тестирование](/encyclopedia/7-project/7-05-testirovanie/1)

<TestingBasicsDemo />

---

### BPMN

Справочник нотации и построение процессов.

Статья: [Аналитика](/encyclopedia/7-project/7-04-analitika/129)

<BpmnReferencePlay />

---

## 8. Инфраструктура и безопасность

### Диаграмма инфраструктуры

Сборка схемы сервисов, балансировки и масштабирования.

Статья: [Микросервисы и интеграция](/encyclopedia/8-infra-security/8-05-mikroservisy-i-integratsiya/1)

<InfraDiagramStudio />

---

### Docker Compose

Сервисы, сети и зависимости в одном стеке.

Статья: [Контейнеризация](/encyclopedia/8-infra-security/8-06-konteynerizatsiya-i-orkestratsiya/1111)

<DockerComposePlay />

---

### CI/CD: слои проверок

Конвейер сборки, тестов и выкладки.

Статья: [DevOps и CI/CD](/encyclopedia/8-infra-security/8-04-devops-ci-cd/13)

<CicdValidationLayersPlay />

---

<div class="callout callout--tip">
  <div class="callout-title">Как искать демо дальше</div>

  <div class="callout-body">
  Откройте любой раздел энциклопедии с карты на <a href="/">главной</a> или по <a href="/encyclopedia/1-basics/1-03-dorozhnaya-karta-izucheniya/1">дорожной карте</a> — интерактивные блоки стоят там, где они помогают понять тему, а не ради украшения.
</div>
  </div>

