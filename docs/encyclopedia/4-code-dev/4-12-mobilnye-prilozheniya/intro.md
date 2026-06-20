---
title: Мобильные приложения — о разделе
description: "Подборка материалов раздела Мобильные приложения в энциклопедии Вселенная IT."
sidebar_label: Мобильные приложения — о разделе
related:
  - title: "Kivy — мобильные приложения и игры на Python"
    doc: encyclopedia/5-languages/5-02-python/320
  - title: "Практикум Kivy — о разделе"
    doc: encyclopedia/5-languages/5-02-python/kivy-praktikum/intro
  - title: "Flutter — готовые виджеты"
    doc: lab/examples/1154
  - title: Flutter
    doc: encyclopedia/5-languages/5-22-dart/311
  - title: "Dart — о разделе"
    doc: encyclopedia/5-languages/5-22-dart/intro
  - title: "Мобильные приложения на Kotlin"
    doc: encyclopedia/5-languages/5-09-kotlin/234
  - title: "Kotlin — KotlinMobileApp"
    doc: encyclopedia/5-languages/5-09-kotlin/22
  - title: "Kotlin — Kotlinochi"
    doc: encyclopedia/5-languages/5-09-kotlin/23
---

import DocCardList from '@theme/DocCardList';


import ExternalPlayEmbed from '@site/src/components/ExternalPlayEmbed';

# О разделе

### Зачем этот раздел

**Мобильные приложения** — отдельная дисциплина — ограниченная батарея, сенсорный UI, магазины приложений, фоновые режимы iOS/Android. Здесь — обзор платформ, стеки (Kotlin, Swift, React Native, MAUI, Flutter) и публикация.

**Длинные листинги (от ~15 строк)** вынесены в каталог [code.spirzen.ru](https://code.spirzen.ru/) и подгружаются в статьях через `ExternalCodeEmbed` — так HTML энциклопедии не раздувается, а код остаётся с подсветкой, вкладками и сериями "шаг 1…N". Короткие фрагменты (команды CLI, пара строк `gradle`, `app.json`) по-прежнему прямо в markdown. Диаграммы **mermaid** и интерактив — на месте или в [play.spirzen.ru](https://play.spirzen.ru/). Образец интеграции — [Каталог примеров кода](/encyclopedia/4-code-dev/4-02-chto-takoe-kod-i-kak-on-rabotaet/617).

Если вы уже делали [веб на React](/encyclopedia/5-languages/5-01-javascript/272) ([галерея компонентов](/lab/Примеры/1146)) или [десктоп](/encyclopedia/4-code-dev/4-11-desktopnye-prilozheniya/intro), многие идеи (компоненты, состояние) переносятся — меняются жизненный цикл экрана и правила Store. Кроссплатформа на Dart — [Flutter](/encyclopedia/5-languages/5-22-dart/311) и [готовые виджеты с разбором (Lab)](/lab/Примеры/1154).

---

### С чего начать

| Шаг | Материал |
|-----|----------|
| 1 | [Мобильные приложения (обзор)](./1.md) — iOS vs Android, ограничения |
| 2 | [Сборка и развёртывание](./112.md) — APK, AAB, подпись; [сравнение сложности стеков](./112.md#slozhnost-sborki-sravnenie-stekov) (MAUI, RN/Expo, Unity) |
| 3 | Стек | Android: [Kotlin](./1135.md) + [Compose](/encyclopedia/5-languages/5-09-kotlin/229) → [KotlinMobileApp](/encyclopedia/5-languages/5-09-kotlin/22) / [Kotlinochi](/encyclopedia/5-languages/5-09-kotlin/23) · кроссплатформа: [Flutter](/encyclopedia/5-languages/5-22-dart/311) → [виджеты (Lab)](/lab/Примеры/1154) · [React Native](./1131.md) → [практикум RN](./11311.md) / [Expo](./1132.md) / [MAUI](./1133.md) · Python: [Kivy](/encyclopedia/5-languages/5-02-python/320) → [практикум игр](/encyclopedia/5-languages/5-02-python/kivy-praktikum/intro) |
| 4 | [Публикация Android](./1141.md) — keystore, Play / RuStore |

---

### Частые ошибки на старте

| Симптом | Причина |
|---------|---------|
| Приложение не ставится | Debug-подпись вместо release — [Публикация Android-приложения](./1141.md) |
| "App keeps stopping" | Краш в `onCreate` / главном потоке — смотрите Logcat |
| iOS только на Mac | Сборка под iPhone требует Xcode |
| Expo не видит телефон | Разные сети — `expo start --tunnel` |
| Gradle падает на Windows (RN/Expo) | Длинный путь, JDK 24 — [Сборка и развёртывание мобильных приложений](./112.md#slozhnost-sborki-sravnenie-stekov), JDK **21**, `gradlew clean` |

---

### Что попробовать

1. Один hello-экран в выбранном стеке (Compose, RN или MAUI).
2. Установка на свой телефон через USB — [Отладка по USB на Android](./1121.md).
3. Internal testing в Play Console до публичного релиза.

---

### Все статьи раздела


<ExternalPlayEmbed example="code-dev/mobile-stack-picker-play" title="Выбор мобильного стека" minHeight={480} />

<ExternalPlayEmbed example="tools-documentation/cross-platform-mobile-play" title="Cross-platform mobile" minHeight={520} />

<DocCardList />

---
