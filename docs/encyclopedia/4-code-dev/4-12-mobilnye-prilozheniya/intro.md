---
title: Мобильные приложения — о разделе
description: "Подборка материалов раздела Мобильные приложения в энциклопедии Вселенная IT."
sidebar_label: Мобильные приложения — о разделе
related:
  - title: "Flutter — готовые виджеты"
    doc: lab/examples/1154
  - title: Flutter
    doc: encyclopedia/5-languages/5-22-dart/311
  - title: "Dart — о разделе"
    doc: encyclopedia/5-languages/5-22-dart/intro
---

import DocCardList from '@theme/DocCardList';

# О разделе

### Зачем этот раздел

**Мобильные приложения** — отдельная дисциплина: ограниченная батарея, сенсорный UI, магазины приложений, фоновые режимы iOS/Android. Здесь — обзор платформ, стеки (Kotlin, Swift, React Native, MAUI, Flutter) и публикация.

Если вы уже делали [веб на React](/encyclopedia/5-languages/5-01-javascript/272) ([галерея компонентов](/lab/Примеры/1146)) или [десктоп](/encyclopedia/4-code-dev/4-11-desktopnye-prilozheniya/intro), многие идеи (компоненты, состояние) переносятся — меняются жизненный цикл экрана и правила Store. Кроссплатформа на Dart — [Flutter](/encyclopedia/5-languages/5-22-dart/311) и [готовые виджеты с разбором (Lab)](/lab/Примеры/1154).

---

### С чего начать

| Шаг | Материал |
|-----|----------|
| 1 | [Мобильные приложения (обзор)](./1.md) — iOS vs Android, ограничения |
| 2 | [Сборка и развёртывание](./112.md) — APK, AAB, подпись; [сравнение сложности стеков](./112.md#slozhnost-sborki-sravnenie-stekov) (MAUI, RN/Expo, Unity) |
| 3 | Стек | Android: [Kotlin](./1135.md) + [Compose](/encyclopedia/5-languages/5-09-kotlin/229) · кроссплатформа: [Flutter](/encyclopedia/5-languages/5-22-dart/311) → [виджеты (Lab)](/lab/Примеры/1154) · [React Native](./1131.md) → [практикум RN](./11311.md) / [Expo](./1132.md) / [MAUI](./1133.md) |
| 4 | [Публикация Android](./1141.md) — keystore, Play / RuStore |

---

### Частые ошибки на старте

| Симптом | Причина |
|---------|---------|
| Приложение не ставится | Debug-подпись вместо release — [1141](./1141.md) |
| "App keeps stopping" | Краш в `onCreate` / главном потоке — смотрите Logcat |
| iOS только на Mac | Сборка под iPhone требует Xcode |
| Expo не видит телефон | Разные сети — `expo start --tunnel` |
| Gradle падает на Windows (RN/Expo) | Длинный путь, JDK 24 — [112](./112.md#slozhnost-sborki-sravnenie-stekov), JDK **21**, `gradlew clean` |

---

### Что попробовать

1. Один hello-экран в выбранном стеке (Compose, RN или MAUI).
2. Установка на свой телефон через USB — [1121](./1121.md).
3. Internal testing в Play Console до публичного релиза.

---

### Все статьи раздела

<DocCardList />

---
