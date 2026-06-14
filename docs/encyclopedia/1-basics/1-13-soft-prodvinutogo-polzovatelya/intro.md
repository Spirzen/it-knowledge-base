---
title: Софт продвинутого пользователя — о разделе
description: >-
  Инструменты power user: файловые менеджеры, редакторы, автоматизация,
  виртуализация, PowerToys и сетевые утилиты — с привязкой к практике.
sidebar_label: Софт продвинутого пользователя — о разделе
related:
  - title: Советы для продвинутого
    doc: encyclopedia/1-basics/1-14-sovety-dlya-prodvinutogo/intro
  - title: Софт рядового пользователя
    doc: encyclopedia/1-basics/1-11-soft-ryadovogo-polzovatelya/intro
  - title: Терминал
    doc: encyclopedia/2-system-network/2-05-terminal/intro
  - title: "Поиск текста в файлах — grep, findstr и Select-String"
    doc: encyclopedia/2-system-network/2-05-terminal/104
---

import ExternalPlayEmbed from '@site/src/components/ExternalPlayEmbed';


import DocCardList from '@theme/DocCardList';

# О разделе

Здесь — **программы**, которыми пользуется продвинутый пользователь. Зачем они нужны и как встроить в рабочий процесс — в разделе [Советы для продвинутого](/encyclopedia/1-basics/1-14-sovety-dlya-prodvinutogo/intro) (скрипты, Home Lab, приватность, игры).

<ExternalPlayEmbed example="basics/end-user-software-hub" title="Софт пользователя — хаб" minHeight={520} playProps={{ tier: 'all', defaultApp: 'archive' }} />

Во всех главах (кроме чисто справочных вроде формата `.drawio`, где техника в теле статьи) в конце есть **Под капотом** и **Опыт, мнение и истории** — устройство инструмента и практика power user.

---

## Мини-глоссарий

| Термин | В двух словах |
| :--- | :--- |
| **MFT** | Таблица файлов NTFS; по ней строит индекс Everything |
| **Hosted / bare-metal** | ВМ как программа в Windows; гипервизор на "голом" сервере — [четыре модели развёртывания](/encyclopedia/1-basics/1-13-soft-prodvinutogo-polzovatelya/8#chetiryre-modeli-razvertyvaniya) |
| **Контейнер** | Изолированный процесс с образом (Docker), общее ядро хоста — не полная ВМ |
| **LSP** | Сервер подсказок в редакторе (IntelliSense в VS Code) |
| **NAT / Bridge** | Режимы сети виртуальной машины |
| **Sysinternals** | Набор утилит Microsoft для процессов, автозагрузки, сети |

---

## Карта раздела

| Глава | Содержание |
| :--- | :--- |
| [Обзор стека](/encyclopedia/1-basics/1-13-soft-prodvinutogo-polzovatelya/1) | Какие категории софта нужны power user |
| [Файлы и система](/encyclopedia/1-basics/1-13-soft-prodvinutogo-polzovatelya/2) | Total Commander, Everything, FileSeek, анализ диска |
| [Поиск текста в файлах](/encyclopedia/2-system-network/2-05-terminal/104) | Ctrl+F, VS Code, `grep`, Windows и macOS |
| [Редакторы и разработка](/encyclopedia/1-basics/1-13-soft-prodvinutogo-polzovatelya/3) | VS Code, Vim, Notepad++ |
| [Графика и 3D](/encyclopedia/1-basics/1-13-soft-prodvinutogo-polzovatelya/4) | GIMP, Blender, профессиональные пакеты |
| [Сеть и диагностика](/encyclopedia/1-basics/1-13-soft-prodvinutogo-polzovatelya/5) | Wireshark, ping, мониторинг |
| [Автоматизация](/encyclopedia/1-basics/1-13-soft-prodvinutogo-polzovatelya/6) | AutoHotkey, PowerShell, Task Scheduler |
| [Безопасность](/encyclopedia/1-basics/1-13-soft-prodvinutogo-polzovatelya/7) | Sysinternals, шифрование, админ-утилиты |
| [Виртуализация](/encyclopedia/1-basics/1-13-soft-prodvinutogo-polzovatelya/8) | VirtualBox, Hyper-V, Docker |
| [PowerToys и утилиты](/encyclopedia/1-basics/1-13-soft-prodvinutogo-polzovatelya/9) | PowerToys, OBS, поиск, скриншоты |
| [Draw.io и формат .drawio](/encyclopedia/1-basics/1-13-soft-prodvinutogo-polzovatelya/10) | Архитектура diagrams.net, XML mxfile/mxCell/mxGeometry |
| [Visual Studio Code](/encyclopedia/1-basics/1-13-soft-prodvinutogo-polzovatelya/11) | Установка, интерфейс, IntelliSense, терминал, отладка (Microsoft Docs) |

<DocCardList />

---
