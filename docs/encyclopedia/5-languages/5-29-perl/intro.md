import ExternalPlayEmbed from '@site/src/components/ExternalPlayEmbed';

---
title: "Perl — о разделе"
description: "Черновик раздела Perl — текстовая обработка, CPAN и практические материалы."
sidebar_label: Perl — о разделе
related:
  - title: "Bash — о разделе"
    doc: encyclopedia/5-languages/5-25-bash/intro
  - title: "Python — о разделе"
    doc: encyclopedia/5-languages/5-02-python/intro
  - title: "PHP — о разделе"
    doc: encyclopedia/5-languages/5-07-php/intro
---

import DocCardList from '@theme/DocCardList';

# Perl — о разделе

<ExternalPlayEmbed example="lab/first-program-play" title="Первая программа" minHeight={420} playProps={{"language":"perl"}} />


<ExternalPlayEmbed example="data-markup/language-intro-play" title="Обзор Perl" minHeight={520} playProps={{"topic":"perl"}} />


> **Черновик раздела.** Материалы будут дополняться; ниже — структура, контекст экосистемы и черновые статьи с практическим содержанием для чтения legacy-кода и написания скриптов.

**Perl** — язык с сильной строковой и regex-моделью, **CPAN** (Comprehensive Perl Archive Network — реестр модулей) и традицией системного администрирования и bioinformatics. В разделе — акцент на **Perl 5** (современный синтаксис, `use strict`, `use warnings`, signatures в 5.36+).

| Материал | Зачем |
|----------|-------|
| [История языка](./1.md) | Larry Wall, CPAN, Perl 5 и Raku |
| [Первая программа](./7.md) | strict, Hello World, однострочники |
| [Python intro](/encyclopedia/5-languages/5-02-python/intro) | Альтернатива для новых скриптов |
| [Bash intro](/encyclopedia/5-languages/5-25-bash/intro) | Shell glue рядом с Perl |

---

## Что такое Perl простыми словами

Perl создавался для **извлечения и преобразования текста** — логи, отчёты, конфиги, HTML эпохи CGI. Синтаксис гибкий (TMTOWTDI — There's more than one way to do it), встроены регулярные выражения, контексты scalar/list и огромный архив модулей CPAN.

Сегодня новый прикладной код чаще пишут на [Python](/encyclopedia/5-languages/5-02-python/intro) или [Bash](/encyclopedia/5-languages/5-25-bash/intro), но Perl остаётся в:

- legacy web (mod_perl, старые CGI);
- log parsing и DevOps-скриптах;
- bioinformatics (BioPerl);
- embedded tooling в старых enterprise-системах.

Раздел помогает **читать и поддерживать** существующий Perl, а не обязательно выбирать его для greenfield-проектов.

---

## Планируемое содержание

| № | Тема | Статус |
|---|------|--------|
| 1 | [История языка](./1.md) | черновик |
| 2 | Скаляры, массивы, хеши | планируется |
| 3 | Регулярные выражения и `match` | планируется |
| 4 | CPAN, cpanm, модули | планируется |
| 5 | ОО в Perl (Moo/Moose) | планируется |
| 6 | Однострочники и системное администрирование | планируется |
| 7 | [Первая программа](./7.md) | черновик |
| 8+ | PSGI, Mojolicious, сравнение с Python | планируется |

---

## Ключевые идеи раздела

### Контексты scalar и list

Выражение ведёт себя по-разному в зависимости от ожидаемого контекста:

```perl
my @items = (1, 2, 3);
my $count = @items;    # scalar context → 3
my ($a, $b) = @items;  # list context → первые элементы
```

Понимание контекста — главный барьер для новичков после Python.

### Регулярные выражения

Regex — часть языка, не отдельная библиотека:

```perl
if ($line =~ /ERROR: (.+)/) {
    my $msg = $1;
}
```

Статья 3 разберёт флаги, capture groups и `s///`.

### CPAN

**CPAN** — реестр тысяч модулов: `LWP::UserAgent`, `DBI`, `JSON`, `Moo`. Установка через **cpanm**:

```bash
cpanm JSON::MaybeXS
```

См. [пакетные менеджеры](/encyclopedia/4-code-dev/4-02-chto-takoe-kod-i-kak-on-rabotaet/621).

### strict и warnings

Современный Perl начинается с:

```perl
use strict;
use warnings;
use v5.36;  # включает signatures и часть features
```

Без `strict` опечатки в именах переменных создают silent bugs.

---

## Perl 5 и Raku

**Raku** (бывший Perl 6) — **отдельный язык**, не совместимый с Perl 5. В вакансиях "Perl" почти всегда означает **Perl 5**. В [истории](./1.md) — хронология разветвления.

---

## Порядок чтения

1. [История языка](./1.md) — контекст и CPAN.
2. [Первая программа](./7.md) — установка, strict, Hello World.
3. Regex и файлы (статьи 2–3, когда появятся).
4. CPAN и модули (статья 4).

Для однострочников в shell параллельно полезен [Bash intro](/encyclopedia/5-languages/5-25-bash/intro).

---

## Кому подойдёт раздел

| Сценарий | Зачем Perl |
|----------|------------|
| Поддержка legacy CGI/mod_perl | Читать и патчить без переписывания |
| Log analysis на старых серверах | `-ne`, `-pe`, regex |
| Bioinformatics legacy | BioPerl модули |
| DevOps archaeology | Скрипты в `/usr/local/bin` |

Для **новых** CLI-утилит и автomation чаще выбирают Python или Go — но Perl-грамотность экономит время при инцидентах.

---

## Связанные разделы

| Раздел | Связь |
|--------|-------|
| [Python](/encyclopedia/5-languages/5-02-python/intro) | Преемник для скриптов и ML |
| [Bash](/encyclopedia/5-languages/5-25-bash/intro) | Pipeline и glue |
| [PHP](/encyclopedia/5-languages/5-07-php/intro) | CGI-эра web рядом с Perl |

<div class="callout callout--info">
  <div class="callout-title">Черновик</div>
  <div class="callout-body">
  Статьи 2–6 в плане. Черновики <a href="./1.md">истории</a> и <a href="./7.md">первой программы</a> уже дают рабочий старт с <code>strict</code> и однострочниками.
  </div>
</div>

---

## Современный Perl 5 (5.36+)

**Signatures** (experimental/stable по версии) сокращают boilerplate:

```perl
use v5.36;

sub greet ($name) {
    return "Hello, $name";
}
```

**say** вместо `print ... "\n"`; **state** для lexical static; **refactoring** через `Perl::Critic` и `Perl::Tidy`.

| Feature | Модуль / pragma |
|---------|-----------------|
| Strict vars | `use strict` |
| Warnings | `use warnings` |
| Signatures | `use v5.36` или `use experimental 'signatures'` |
| OO без boilerplate | Moo, Moose |

---

## Однострочники и CLI

Perl славится **one-liners** для администрирования:

```bash
perl -ne 'print if /ERROR/' access.log
perl -pe 's/foo/bar/g' file.txt
perl -lane '$F[0]++' names.txt   # uniq -c style
```

Флаги: `-n` (loop without print), `-p` (print), `-a` (autosplit), `-l` (chomp `\n`). Для новых pipeline часто достаточно [Bash](/encyclopedia/5-languages/5-25-bash/intro), но legacy серверы всё ещё содержат Perl glue.

---

## Безопасность при работе с legacy

| Риск | Мера |
|------|------|
| SQL injection | Prepared statements через DBI |
| Command injection | Трехаргументный `open` или IPC::Run |
| Tainted data (legacy) | `-T` taint mode (редко в новом коде) |
| Устаревшие модули | `cpan-outdated`, audit CPAN deps |

Не копируйте однострочники из Stack Overflow без понимания контекста scalar/list.

---

## PSGI и веб (обзор)

**PSGI** — интерфейс между Perl web app и сервером (аналог WSGI в Python):

```perl
my $app = sub {
    my $env = shift;
    return [200, ['Content-Type' => 'text/plain'], ['Hello']];
};
```

**Plack** — reference implementation; **Mojolicious** — full-stack framework. Legacy **CGI** `.pl` в `cgi-bin` — типичный объект миграции на [PHP](/encyclopedia/5-languages/5-07-php/intro) или Python, но поддержка требует знания Perl.

---

## Bioinformatics и CPAN

**BioPerl** — экосystem модулей для последовательностей, BLAST, форматы GenBank. Много legacy lab scripts на Perl 5.10–5.20. Обновление — осторожно с `$` sigils и deprecated features.

---

## Perl и Python для новых скриптов

| Задача | Perl | Python |
|--------|------|--------|
| Regex-heavy log parse | Силён из коробки | `re` module |
| ML / data science | Слабо | pandas, numpy |
| DevOps greenfield | Редко | Ansible, scripts |
| Поддержка старого CGI | **Perl** | Переписывание |

Раздел учит **читать** Perl; для новых проектов см. [Python intro](/encyclopedia/5-languages/5-02-python/intro).

---

## Чек-лист чтения legacy Perl

- [ ] В начале файла есть `use strict; use warnings;`
- [ ] Понятен контекст: scalar `@array` vs list `(@a, @b)`
- [ ] Regex с флагами и capture `$1`, `$2`
- [ ] Зависимости в `cpanfile` или `Makefile.PL`
- [ ] Запуск через `perl script.pl`, не случайный `sh script.pl`

**Дальше:** [история](./1.md) → [первая программа](./7.md).

---

## Однострочники Perl в production archaeology

| Задача | Команда |
|--------|---------|
| Строки с ERROR | `perl -ne 'print if /ERROR/' log` |
| Замена in-place | `perl -pi -e 's/old/new/g' *.conf` |
| CSV 2-й столбец | `perl -lane 'print $F[1]' file.csv` |
| Подсчёт uniq | `sort file \| uniq -c` (часто + Perl) |

Perl часто живёт в Makefile и cron — знание `-n`/`-p` экономит часы.

---

## CPAN — как устроен реестр

```bash
cpanm Carton
carton install   # lock для Perl проекта
```

| Инструмент | Роль |
|------------|------|
| **cpanm** | Установка модулей |
| **Carton** | Lock + local lib |
| **Pinto** | Private CPAN mirror |
| **MetaCPAN** | Поиск и документация |

---

## Perl и regex — preview статьи 3

```perl
if ($line =~ /^(\d{4}-\d{2}-\d{2})\s+(ERROR|WARN)\s+(.*)$/) {
    my ($date, $level, $msg) = ($1, $2, $3);
}
```

Флаги `/x` (comments), `/m` (multiline), `/s` (dotall) — в полной статье по regex.

---

## Когда читать Perl, а когда переписывать

| Ситуация | Действие |
|----------|----------|
| Скрипт 50 строк, cron | Поддерживать на Perl |
| Модуль 5k+ строк, нет тестов | План миграции на Python |
| BioPerl pipeline | Оставить Perl, изолировать env |
| Новый microservice | Python/Go, не Perl |

---

## Модули и `@INC` (preview)

Perl ищет модули в `@INC` — список директорий. Локальная lib:

```perl
use lib './lib';
use MyApp::Config;
```

Установка в site_perl через `cpanm` предпочтительнее `use lib` в production.

---

## Perl::Critic и качество кода

**Perl::Critic** — линтер по best practices (severity 1–5). Запуск:

```bash
perlcritic script.pl
```

Полезно при code review legacy без полного переписывания.

---

## Carton и lockfile (preview)

**Carton** фиксирует версии CPAN-модулей per project — аналог bundler. Файл `cpanfile.snapshot` коммитится в git для воспроизводимых deploy.

---

## Краткий FAQ раздела

**Perl или Python для нового скрипта?** Python — [intro](/encyclopedia/5-languages/5-02-python/intro); Perl — legacy support.

**С чего начать?** [7.md](./7.md) → [1.md](./1.md).

---


<DocCardList />

---
