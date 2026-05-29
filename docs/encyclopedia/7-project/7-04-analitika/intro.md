---
title: Аналитика — о разделе
description: Как устроен раздел "Аналитика" — роли, маршруты обучения, связь с соседними темами и карта материалов в энциклопедии Вселенная IT
sidebar_label: Аналитика — о разделе
related:
  - title: "Основы анализа требований"
    doc: encyclopedia/7-project/7-04-analitika/111
  - title: "Программные платформы"
    doc: encyclopedia/2-system-network/2-02-platformy/3
  - title: "Основы бизнеса для IT-специалиста"
    doc: encyclopedia/1-basics/1-29-gosudarstvo-i-biznes/112
  - title: "Корпоративное ПО"
    doc: encyclopedia/2-system-network/2-02-platformy/3001
  - title: "Внедрение ERP — о разделе"
    doc: encyclopedia/7-project/7-15-vnedrenie-erp-sistem/intro
---

import DocCardList from '@theme/DocCardList';
import AnalyticsSectionHub from '@site/src/components/AnalyticsSectionHub.jsx';

# О разделе

Раздел **"Аналитика"** — практический курс для тех, кто переводит хаос пожеланий заказчика в понятные требования, модели и документы. Здесь не "про отчёты в Excel" (хотя метрики тоже разбираем), а про **инженерию смысла** на стыке бизнеса и разработки.

Если вы только входите в IT, начните с [Основ анализа требований](/encyclopedia/7-project/7-04-analitika/111) и [Профессиональной аналитики](/encyclopedia/7-project/7-04-analitika/112). Если уже работаете аналитиком — используйте раздел как справочник: BPMN, ГОСТ, API, Agile, продуктовые метрики.

<AnalyticsSectionHub />

---

## Четыре "аналитики" — не путайте роли

| Роль | Главный вопрос | Типичный результат |
| :--- | :--- | :--- |
| **Бизнес-аналитик (BA)** | Зачем менять процесс и что нужно бизнесу? | BPMN as-is/to-be, BRD, приоритеты, ROI |
| **Системный аналитик (SA)** | Как система должна работать технически? | Use case, API, ERD, ТЗ, техдизайн |
| **Продуктовый аналитик** | Что делают пользователи в живом продукте? | Метрики, воронки, A/B, гипотезы |
| **Аналитик данных** | Какие данные нужны для ответа на вопрос? | SQL, витрины, отчёты, качество данных |

Подробнее: [BA](/encyclopedia/7-project/7-04-analitika/113), [SA](/encyclopedia/7-project/7-04-analitika/114), [продуктовая аналитика](/encyclopedia/7-project/7-04-analitika/1123), [язык данных](/encyclopedia/7-project/7-04-analitika/1121).

---

## Маршруты по уровню задач

### Старт (обязательный минимум)

1. [История аналитики в IT](/encyclopedia/7-project/7-04-analitika/1)
2. [Основы анализа требований](/encyclopedia/7-project/7-04-analitika/111)
3. [Профессиональная аналитика](/encyclopedia/7-project/7-04-analitika/112)
4. [Формализация и управление требованиями](/encyclopedia/7-project/7-04-analitika/116)

---

### Бизнес-аналитик

[113](/encyclopedia/7-project/7-04-analitika/113) → [124](/encyclopedia/7-project/7-04-analitika/124) → [129](/encyclopedia/7-project/7-04-analitika/129) → [130](/encyclopedia/7-project/7-04-analitika/130) → [116](/encyclopedia/7-project/7-04-analitika/116) → [117](/encyclopedia/7-project/7-04-analitika/117) → [127](/encyclopedia/7-project/7-04-analitika/127). Для госсектора добавьте [121](/encyclopedia/7-project/7-04-analitika/121).

<div class="callout callout--tip">
  <div class="callout-title">Компактный маршрут по BABOK</div>

  Последовательный проход по роли BA и управлению требованиями — без дублирования BPMN-справочника:

  1. [113](/encyclopedia/7-project/7-04-analitika/113) — роль BA, концепты, фазы проекта  
  2. [112](/encyclopedia/7-project/7-04-analitika/112) — области знаний, тип проекта, «цель → метод»  
  3. [116](/encyclopedia/7-project/7-04-analitika/116) — план BA, RM, приоритизация  
  4. [111](/encyclopedia/7-project/7-04-analitika/111) — пять шагов анализа, стоимость дефекта  
  5. [124](/encyclopedia/7-project/7-04-analitika/124) — gap analysis, journey, DFD  
  6. [126](/encyclopedia/7-project/7-04-analitika/126) — инструменты BABOK  
  7. [127](/encyclopedia/7-project/7-04-analitika/127) — стейкхолдеры и конфликты  
  8. [998](/encyclopedia/7-project/7-04-analitika/998) / [999](/encyclopedia/7-project/7-04-analitika/999) — закрепление  
</div>

---

### Системный аналитик

[114](/encyclopedia/7-project/7-04-analitika/114) → [115](/encyclopedia/7-project/7-04-analitika/115) → [123](/encyclopedia/7-project/7-04-analitika/123) → [128](/encyclopedia/7-project/7-04-analitika/128). API углубляется в [7.06](/encyclopedia/7-project/7-06-proektirovanie-i-arhitektura/intro).

---

### Продукт и данные

[1123](/encyclopedia/7-project/7-04-analitika/1123) → [1121](/encyclopedia/7-project/7-04-analitika/1121) → [1122](/encyclopedia/7-project/7-04-analitika/1122) → [3.11 Анализ данных](/encyclopedia/3-data-markup/3-11-analiz-dannyh/1).

---

## Соседние разделы

| Тема | Раздел |
| :--- | :--- |
| Методологии, ЖЦ | [7.03](/encyclopedia/7-project/7-03-metodologiya-i-zhiznennyy-tsikl-po/1) |
| Scrum, бэклог, оценка | [7.14](/encyclopedia/7-project/7-14-scrum/intro) |
| Архитектура, API | [7.06](/encyclopedia/7-project/7-06-proektirovanie-i-arhitektura/intro) |
| Тестирование | [7.05](/encyclopedia/7-project/7-05-testirovanie/intro) — в т.ч. [статическая проверка требований](/encyclopedia/7-project/7-05-testirovanie/1.md), [свойства качественных требований](/encyclopedia/7-project/7-04-analitika/111#свойства-качественных-требований) |
| Карьера | [1.26](/encyclopedia/1-basics/1-26-karera-v-it-i-mify/10) |

Закрепление: [Итоги](/encyclopedia/7-project/7-04-analitika/998), [Чек-лист](/encyclopedia/7-project/7-04-analitika/999).

<DocCardList />

{/* sidebar-collections */}

---

## В подборках

Статья входит в тематические маршруты из меню **Подборки** и блока "С чего начать?" на главной. Соседние шаги того же маршрута:

**Системная аналитика** — [Основы анализа требований](/encyclopedia/7-project/7-04-analitika/111), [Программные платформы](/encyclopedia/2-system-network/2-02-platformy/3), [Основы бизнеса для IT-специалиста](/encyclopedia/1-basics/1-29-gosudarstvo-i-biznes/112), [Корпоративное ПО](/encyclopedia/2-system-network/2-02-platformy/3001), [Платформенные решения в бизнесе](/encyclopedia/2-system-network/2-02-platformy/3002), [Основы архитектуры](/encyclopedia/4-code-dev/4-04-proekt-i-freymvorki/112).

{/* /sidebar-collections */}

---
