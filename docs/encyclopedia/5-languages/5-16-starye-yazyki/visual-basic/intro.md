---
title: Visual Basic — о разделе
description: Подборка материалов раздела Visual Basic в энциклопедии Вселенная IT
sidebar_label: Visual Basic — о разделе
---

import DocCardList from '@theme/DocCardList';

# О разделе

Раздел про **Visual Basic** — от классического VB 6.0 и **VBA** в Microsoft Office до **VB.NET** на платформе .NET.

**Для кого:** новички (синтаксис, типы, циклы, события), разработчики legacy (WinForms, Access, Excel-макросы), те, кто сопровождает корпоративные Windows-приложения.

**С чего начать:** [История](/encyclopedia/5-languages/5-16-starye-yazyki/visual-basic/1) → [Основы](/encyclopedia/5-languages/5-16-starye-yazyki/visual-basic/2) → [Типы данных](/encyclopedia/5-languages/5-16-starye-yazyki/visual-basic/4) → [Преобразования и value/reference](/encyclopedia/5-languages/5-16-starye-yazyki/visual-basic/9) → [Управляющие конструкции](/encyclopedia/5-languages/5-16-starye-yazyki/visual-basic/5) → [Процедуры](/encyclopedia/5-languages/5-16-starye-yazyki/visual-basic/6) → [Первая программа](/encyclopedia/5-languages/5-16-starye-yazyki/visual-basic/7) → [Консоль, CLI, коллекции, файлы](/encyclopedia/5-languages/5-16-starye-yazyki/visual-basic/10) → [Лямбды, LINQ, свои коллекции](/encyclopedia/5-languages/5-16-starye-yazyki/visual-basic/11). Для автоматизации Excel: [VBA в Excel](/encyclopedia/5-languages/5-16-starye-yazyki/visual-basic/8). Справочник: [711](/encyclopedia/5-languages/5-16-starye-yazyki/visual-basic/711).

**Практика:** для нового обучения удобнее **VB.NET** и **Visual Studio Community** (консоль или Windows Forms). VB 6.0 — только если нужен исторический контекст или сопровождение старых EXE.

**Важно:** **VB6**, **VBA** и **VB.NET** — разные ветви одного семейства; синтаксис похож, но среда выполнения, типы и инструменты различаются. В учебных главах по умолчанию имеется в виду **VB.NET**, если не указано иное.

| | VB6 / VBA | VB.NET |
|---|-----------|--------|
| Среда | `MSVBVM60.DLL`, Office | CLR (.NET Framework / .NET 5+) |
| Типизация | `Variant`, слабее | `Object` + `Option Strict` |
| GUI | Формы VB6, VBA UserForm | WinForms, WPF |
| Ошибки | `On Error GoTo` | `Try…Catch…Finally` |
| Статус | legacy, VBA в Office | поддержка платформы, язык без новых фич |

<DocCardList />

---
