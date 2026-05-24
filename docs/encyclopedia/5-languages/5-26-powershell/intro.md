---
title: PowerShell — о разделе
description: Подборка материалов раздела PowerShell в энциклопедии Вселенная IT
sidebar_label: PowerShell — о разделе
---

import PowerShellShellPlay from '@site/src/components/PowerShellShellPlay';

import DocCardList from '@theme/DocCardList';

# О разделе

<PowerShellShellPlay lesson="intro" />

Раздел посвящён **PowerShell** — оболочке и языку сценариев для автоматизации Windows, Linux и macOS. Материалы идут от истории и установки к синтаксису, объектному конвейеру, ошибкам и практическим скриптам.

## Две линейки, о которых важно помнить

| | **Windows PowerShell 5.1** | **PowerShell 7+** (`pwsh`) |
| :--- | :--- | :--- |
| Платформа | .NET Framework | .NET (Core / современный) |
| Где встречается | Встроен в Windows | Устанавливается отдельно |
| Кроссплатформа | Нет | Да |
| ISE | Есть (устаревает) | Нет; VS Code + расширение PowerShell |
| Модули | Часть старых модулей только под 5.1 | Az, Graph и др. обычно под 7 |

Проверка версии в сессии: `$PSVersionTable.PSVersion`.

## Рекомендуемый порядок чтения

1. [История PowerShell](/encyclopedia/5-languages/5-26-powershell/1) — зачем появился объектный pipeline.
2. [Экосистема автоматизации](/encyclopedia/5-languages/5-26-powershell/11) — установка, модули, облако.
3. [Основы языка](/encyclopedia/5-languages/5-26-powershell/112) и [синтаксис](/encyclopedia/5-languages/5-26-powershell/113).
4. [Ключевые слова](/encyclopedia/5-languages/5-26-powershell/114) (шпаргалка + ссылки), [условия и циклы](/encyclopedia/5-languages/5-26-powershell/117) (углублённо).
5. [Обработка ошибок](/encyclopedia/5-languages/5-26-powershell/12) — terminating/non-terminating, `$ErrorActionPreference`.
6. [Рекомендации по скриптам](/encyclopedia/5-languages/5-26-powershell/111), [первая программа](/encyclopedia/5-languages/5-26-powershell/122).
7. [Справочник](/encyclopedia/5-languages/5-26-powershell/123) — таблицы команд и операторов.

## Ключевые идеи раздела

- **Командлет** — узкая команда в формате `Verb-Noun` (`Get-Process`, `Set-Location`).
- **Провайдеры** (`FileSystem`, `Registry`, `Cert:`) — одни командлеты для файлов, реестра и сертификатов; см. [основы](/encyclopedia/5-languages/5-26-powershell/112).
- **Потоки вывода** (Success, Error, Warning, …) — не всё попадает в конвейер `|`; там же.
- **Конвейер** (`|`) передаёт **объекты**, а не текст; фильтрация — `Where-Object`, выборка — `Select-Object`.
- **Модуль** расширяет оболочку (`Import-Module`, PowerShell Gallery).
- **Политика выполнения** ограничивает запуск файлов `.ps1`, а не «блокирует все команды».

Интерактивные вставки в статьях (`PowerShellShellPlay`, демо операторов и ошибок) дополняют текст, но не заменяют пробу команд в своей среде.

<DocCardList />

---
