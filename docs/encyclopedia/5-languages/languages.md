---
title: 5. Языки - о разделе
description: Языки программирования и типичные стеки - что берут для фронтенда и бэкенда, как языки появляются под задачи и почему "лучший язык" зависит от контекста.
sidebar_label: 5. Языки - о разделе
slug: /encyclopedia/5-languages/intro
id: languages
---

<div class="article-tags">
  <span class="tag tag-required">ОБЯЗАТЕЛЬНО</span>
  <span class="tag tag-beginner">ДЛЯ НОВИЧКОВ</span>
</div>

import DocCardList from '@theme/DocCardList';

---

## О разделе

<DocCardList />

Мы изучили, как пишут программы, теперь пора посмотреть, на чём пишут.

<div class="callout callout--tip">
  <div class="callout-title">Как читать разделы языков</div>

  <div class="callout-body">
  Общие идеи (компиляция, память, ООП, зависимости) — в <a href="/encyclopedia/4-code-dev/code-dev">"Код и разработка"</a>. Краткие идиоматичные записи (обмен переменных, срезы, включения) — <a href="/encyclopedia/4-code-dev/4-02-chto-takoe-kod-i-kak-on-rabotaet/614">однострочные приёмы</a> и <a href="/encyclopedia/5-languages/5-02-python/38">шпаргалка для Python</a>. В вводных статьях языков сложные механизмы по возможности даются <strong>сначала на русском псевдокоде</strong>, затем — синтаксисом конкретного языка (блоки "Справочно на …"). На старте выберите <strong>один</strong> язык из маршрута и пройдите его intro → первую программу, не смешивая правила владения, GC и типов.
</div>
  </div>


Что используется для фронтенда, что для бэкенда — какие инструменты и технологии нужны в разных областях. Бэкенд-сервисы чаще упаковывают в **контейнеры** или ВМ — см. [четыре модели развёртывания](/encyclopedia/1-basics/1-13-soft-prodvinutogo-polzovatelya/8#chetiryre-modeli-razvertyvaniya) (это про инфраструктуру, а не про JVM).

Для учебных игр на коде без движка Unity/Unreal — [Разработка игр на Python](/encyclopedia/5-languages/5-02-python/312), [короткие мини-игры Pygame с разбором](/lab/Примеры/1132), [Minecraft — команды и datapack](/lab/Примеры/1142) (Java Edition, без IDE) и сквозные проекты в [Практикуме разработки игр](/encyclopedia/9-spinoff/9-04-razrabotka-igr/praktikum-razrabotki-igr/intro) (Python/Pygame, [Java Survivors](/encyclopedia/9-spinoff/9-04-razrabotka-igr/praktikum-razrabotki-igr/8), [Приключения Урала Батыра](https://spirzen.github.io/OnlineCardGame/) на [TypeScript](/encyclopedia/5-languages/5-01-javascript/30)). Для **Unity + C#** — [курс в редакторе](/encyclopedia/9-spinoff/9-04-razrabotka-igr/3) и [готовые MonoBehaviour в Lab](/lab/Примеры/1136).

При изучении языка ИИ уместен для объяснений и черновика, но [вайб-кодинг](/encyclopedia/6-ai/6-07-vayb-koding-i-neurokontent/1) (копипаста без понимания синтаксиса и runtime) тормозит прогресс. Практика с проверкой — [Генерация кода](/encyclopedia/6-ai/6-04-modeli-i-instrumenty/117); про однотипный «пустой» вывод — [нейрослоп](/encyclopedia/6-ai/6-07-vayb-koding-i-neurokontent/2).

Технически, языки по большей части универсальны. Они обычно появляются с определённой целью (JavaScript для оживления страниц, C/C++ для системного программирования, а Java чтобы обезопасить и упростить разработку), но в дальнейшем развиваются, получая новый функционал, новые фичи и возможности.

В интернете часто можно найти громкие заголовки вроде "Какой язык программирования выбрать?" И почти всегда вы встретите от года в год одно и то же - Python лучше всех, JavaScript и Java нужны везде, а C# никому не нужен. Но не всё так просто.

```mermaid
mindmap
  root((5. Языки))
    Веб и backend
      5.01 JavaScript
      5.02 Python
      5.03 Java
      5.07 PHP
      5.10 Go
      5.11 Ruby
      5.12 Groovy
    Mobile
      5.09 Kotlin
      5.14 Swift
      5.22 Dart
    Системные и производительность
      5.06 C++
      5.13 Rust
      5.20 Zig
      5.21 Nim
    Платформа .NET
      5.04 Платформа .NET
      5.05 C#
    Скрипты и автоматизация
      5.15 Lua и Luau
      5.25 Bash
      5.26 PowerShell
    Функциональные и JVM-альтернативы
      5.08 Smalltalk
      5.17 Haskell
      5.18 Scala
      5.19 Elixir
    Data science и аналитика
      5.23 R
      5.24 Julia
    Legacy
      5.16 Старые языки
        Си
        Ассемблер
        Pascal
        Fortran
        Cobol
        Lisp
        Visual Basic
    Корпоративные и нишевые
      5.27 1С
```


---
