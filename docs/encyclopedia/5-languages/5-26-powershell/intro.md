---
title: PowerShell — о разделе
description: "Раздел посвящён PowerShell — оболочке и языку сценариев для автоматизации Windows, Linux и macOS."
sidebar_label: PowerShell — о разделе
related:
  - title: "Bash — о разделе"
    doc: encyclopedia/5-languages/5-25-bash/intro
  - title: "1С — о разделе"
    doc: encyclopedia/5-languages/5-27-1s/intro
  - title: "Julia — о разделе"
    doc: encyclopedia/5-languages/5-24-julia/intro
  - title: "R — о разделе"
    doc: encyclopedia/5-languages/5-23-r/intro
---

import PowerShellShellPlay from '@site/src/components/PowerShellShellPlay';

import DocCardList from '@theme/DocCardList';

# О разделе

> **Сначала:** [Что такое код и как он работает](/encyclopedia/4-code-dev/4-02-chto-takoe-kod-i-kak-on-rabotaet/1) — общая база: **код**, **блок кода**, **компиляция** и **интерпретация**, **исходный**, **байт-** и **машинный код**; в этом разделе — синтаксис и особенности языка.

### Зачем этот раздел

Подборка по **PowerShell** в энциклопедии: синтаксис, первая программа и смежные темы. Пройдите один маршрут до конца, не смешивая несколько языков на старте.

---

### С чего начать

| Шаг | Материал | Зачем |
|-----|----------|-------|
| 1 | [Первая программа](./122.md) | Запуск и синтаксис |
| — | [Опасные скрипты](/encyclopedia/8-infra-security/8-03-zabota-o-kode-i-dannyh/101) | `Remove-Item`, ExecutionPolicy, команды от ИИ-агента |

---

### Частые ошибки при старте

| Ошибка | Что делать |
|--------|------------|
| Прыжки между языками | Закройте одну «первую программу», потом сравнивайте |
| Код без запуска | Выполните пример локально |
| Сразу большой фреймворк | Сначала база раздела, потом REST/UI |

---

### Что попробовать

1. Шаг 1 из таблицы.
2. Три непонятных термина — найдите статьи в оглавлении раздела.
3. Другой язык — только после своей рабочей первой программы.

---

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

## Официальная документация Microsoft

Теория в энциклопедии — на русском и с интерактивом. При споре о синтаксисе, установке, cmdlet или модулях опирайтесь на **документацию PowerShell на Microsoft Learn** (актуальная ветка — PowerShell 7.x). Тексты модулей Learn в статьи **не копируем** — только ссылки ([Catalog API FAQ](https://learn.microsoft.com/en-us/training/support/catalog-api-faq)).

| Ресурс | Зачем открывать |
|--------|-----------------|
| [Документация PowerShell (хаб)](https://learn.microsoft.com/ru-ru/powershell/) | Точка входа: установка, примеры, ссылка на галерею, браузер модулей |
| [Что такое PowerShell?](https://learn.microsoft.com/ru-ru/powershell/scripting/overview?view=powershell-7.6) | Оболочка, язык сценариев и платформа управления в одном обзоре |
| [Установка PowerShell](https://learn.microsoft.com/ru-ru/powershell/scripting/install/install-powershell?view=powershell-7.6) | Windows, Linux, macOS; `pwsh` и встроенный 5.1 |
| [Примеры скриптов для администрирования](https://learn.microsoft.com/ru-ru/powershell/scripting/samples/sample-scripts-for-administration?view=powershell-7.6) | Готовые сценарии: службы, события, реестр, сеть |
| [Windows PowerShell ISE](https://learn.microsoft.com/ru-ru/powershell/scripting/windows-powershell/ise/introducing-the-windows-powershell-ise?view=powershell-7.6) | Legacy-среда под 5.1; для новых проектов — VS Code |
| [PowerShell Gallery](https://www.powershellgallery.com/) | Публикация и установка модулей (`Install-Module`, `Find-Module`) |
| [Браузер модулей](https://learn.microsoft.com/ru-ru/powershell/module/) | Справочник по cmdlet в установленных и сторонних модулях |

См. также раздел [2.05 Терминал](/encyclopedia/2-system-network/2-05-terminal/intro) (CMD, Bash, [автоматизация в Windows](/encyclopedia/2-system-network/2-05-terminal/112)) и [подборку документации](/tools/documentation/2).

<DocCardList />

{/* sidebar-collections */}
## В подборках

Статья входит в тематические маршруты из меню **Подборки** и блока «С чего начать?» на главной. Соседние шаги того же маршрута:

**Бэкенд и серверная разработка** — [Bash — о разделе](/encyclopedia/5-languages/5-25-bash/intro), [1С — о разделе](/encyclopedia/5-languages/5-27-1s/intro), [Julia — о разделе](/encyclopedia/5-languages/5-24-julia/intro), [R — о разделе](/encyclopedia/5-languages/5-23-r/intro), [Dart — о разделе](/encyclopedia/5-languages/5-22-dart/intro), [Nim — о разделе](/encyclopedia/5-languages/5-21-nim/intro).

{/* /sidebar-collections */}

---
