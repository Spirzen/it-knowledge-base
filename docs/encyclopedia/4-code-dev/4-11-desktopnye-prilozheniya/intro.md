---
title: Десктопные приложения — о разделе
description: "Подборка материалов раздела Десктопные приложения в энциклопедии Вселенная IT."
sidebar_label: Десктопные приложения — о разделе
related:
  - title: "ORM и работа с данными — о разделе"
    doc: encyclopedia/4-code-dev/4-10-orm-i-rabota-s-dannymi/intro
  - title: "Основы работы с Git — о разделе"
    doc: encyclopedia/4-code-dev/4-13-osnovy-raboty-s-git/intro
  - title: "Зависимости — о разделе"
    doc: encyclopedia/4-code-dev/4-09-zavisimosti/intro
  - title: "Разработка и отладка — о разделе"
    doc: encyclopedia/4-code-dev/4-14-razrabotka-i-otladka/intro
  - title: "Java Swing — окна и кнопки"
    doc: lab/examples/1143
  - title: "Tkinter — окна и виджеты"
    doc: lab/examples/1124
  - title: "C# WinForms и WPF — простые окна"
    doc: lab/examples/1138
  - title: "React — компоненты-рецепты"
    doc: lab/examples/1146
  - title: "Flutter — готовые виджеты"
    doc: lab/examples/1154
---

import DocCardList from '@theme/DocCardList';

# О разделе

### Зачем этот раздел

**Десктоп** — программы, которые работают на компьютере пользователя — окна, меню, доступ к файлам и устройствам без браузера. Здесь собраны архитектура GUI, выбор стека (нативный, Electron, WebView, Qt, Tkinter) и практики — потоки, память, установщики.
Хороший массовый пример десктоп-клиента с экосистемой магазина и сообщества — [Steam](/encyclopedia/9-spinoff/9-03-igrovaya-industriya/11435).

Если вы уже пишете веб на [React](/encyclopedia/5-languages/5-01-javascript/272) ([галерея компонентов](/lab/Примеры/1146)) или бэкенд на [Node](/encyclopedia/5-languages/5-01-javascript/262), десктоп — логичный следующий шаг для утилит и внутренних инструментов. Тот же UI на телефоне из одной кодовой базы — [Flutter](/encyclopedia/5-languages/5-22-dart/311) и [галерея виджетов (Lab)](/lab/Примеры/1154).

---

### С чего начать

| Шаг | Материал |
|-----|----------|
| 0 | [Запуск и перезапуск приложений](/encyclopedia/1-basics/1-035-bazovaya-informatika/208) — Run в IDE, `.exe`, отладка |
| 1 | [Архитектура десктопных приложений](./1.md) — GUI, WIMP, окно, UI-поток, события |
| 2 | [Особенности разработки](./112.md) — многопоточность, ресурсы |
| 3 | Стек по языку | Python: [Tkinter — теория](/encyclopedia/5-languages/5-02-python/311) · [первая программа](/encyclopedia/5-languages/5-02-python/3111) · [элементы UI](/encyclopedia/5-languages/5-02-python/3112) · [примеры в Lab](/lab/Примеры/1124) · C#: [WPF с нуля](./119.md) · [элементы WPF](./1192.md) · [WinForms](./115.md) · [элементы WinForms](./1152.md) · [примеры в Lab](/lab/Примеры/1138) · Java: [JavaFX — теория](/encyclopedia/5-languages/5-03-java/311) · [первая программа](/encyclopedia/5-languages/5-03-java/3111) · [элементы UI](/encyclopedia/5-languages/5-03-java/3112) · [Swing в Lab](/lab/Примеры/1143) (JDK без Maven) · [MAUI](/encyclopedia/5-languages/5-05-csharp/4513) · C++: [Qt](/encyclopedia/5-languages/5-06-cpp/2731) · JS: [Electron](./114.md) · [React в Lab](/lab/Примеры/1146) → [Electron + React](./118.md) |
| 4 | C# клиент-сервер | [Практикум WPF и клиент-сервер](./wpf-praktikum/intro) — MVVM, ASP.NET Core API, Prism, тесты, TaskDesk |
| 5 | Установщик для Windows | [Как сделать установщик](./120.md) — Inno Setup, PowerShell, Python, C# |

---

### Частые ошибки при старте

| Ошибка | Что делать |
|--------|------------|
| Electron "на всякий случай" | Для утилиты хватит [Tkinter](/encyclopedia/5-languages/5-02-python/3111) или [примеры в Lab](/lab/Примеры/1124), [WinForms/WPF в Lab](/lab/Примеры/1138), [Swing в Lab](/lab/Примеры/1143), либо нативного UI |
| Блокировка UI-потока | Сначала [Особенности разработки десктопных приложений](./112.md) |
| Сразу Store без MSIX | Сначала локальная сборка, потом [Microsoft Store и публикация Windows-приложений](./117.md) |

---

### Что попробовать после intro

1. Откройте [архитектуру](./1.md) и пройдите симулятор окна.
2. Выберите один стек: [WPF с нуля](./119.md) ([примеры](/lab/Примеры/1138)) *или* [WinForms](./115.md) ([примеры](/lab/Примеры/1138)) *или* [Electron](./114.md) *или* [Python Tkinter](/encyclopedia/5-languages/5-02-python/3111) ([примеры](/lab/Примеры/1124)) *или* [Java Swing](/encyclopedia/5-languages/5-03-java/311) ([примеры](/lab/Примеры/1143)) *или* [Qt](/encyclopedia/5-languages/5-06-cpp/2731).
3. Прочитайте [Особенности разработки десктопных приложений](./112.md) про UI-поток — применимо ко всем стекам.

---

### Все статьи раздела

<DocCardList />

{/* sidebar-collections */}

---

## В подборках

Статья входит в [тематические подборки](/about/collections) и блок "С чего начать?" на [главной](/). Соседние шаги того же маршрута:

**База программиста** — [ORM и работа с данными — о разделе](/encyclopedia/4-code-dev/4-10-orm-i-rabota-s-dannymi/intro), [Основы работы с Git — о разделе](/encyclopedia/4-code-dev/4-13-osnovy-raboty-s-git/intro), [Зависимости — о разделе](/encyclopedia/4-code-dev/4-09-zavisimosti/intro), [Разработка и отладка — о разделе](/encyclopedia/4-code-dev/4-14-razrabotka-i-otladka/intro), [Объектно-ориентированное программирование — о разделе](/encyclopedia/4-code-dev/4-08-oop/intro), [Автоматическое управление памятью](/encyclopedia/4-code-dev/4-15-sborka-musora/1).

{/* /sidebar-collections */}

---
