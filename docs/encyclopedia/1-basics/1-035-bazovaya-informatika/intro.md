---
tags:
  - inprogress

title: Базовая информатика — о разделе
description: >-
  Учебный маршрут по школьной и начальной информатике — кодирование, железо, ОС,
  интернет, алгоритмы, право и рабочее место — со ссылками на подробные главы
  энциклопедии.
sidebar_label: Базовая информатика — о разделе
related:
  - title: Дорожная карта изучения
    doc: encyclopedia/1-basics/1-03-dorozhnaya-karta-izucheniya/1
  - title: Как работает компьютер
    doc: encyclopedia/1-basics/1-08-kak-rabotaet-kompyuter/intro
  - title: Данные и информация
    doc: encyclopedia/1-basics/1-09-dannye-i-informatsiya/intro
  - title: Программа
    doc: encyclopedia/1-basics/1-19-programma/intro
  - title: "Big-O — шпаргалка с примерами"
    doc: lab/examples/1128
  - title: "Алгоритмы на Python — ЕГЭ и олимпиадка"
    doc: lab/examples/1122
---

import DocCardList from '@theme/DocCardList';
import InteractiveRoadmap from '@site/src/components/InteractiveRoadmap';

# О разделе

<div class="article-tags">
  <span class="tag tag-inprogress">В РАЗРАБОТКЕ</span>
</div>

**Учебный маршрут** по школьной и начальной информатике — что читать, в каком порядке и где углубляться. Подробные статьи уже есть в энциклопедии; здесь они собраны в одну последовательность.

| Частая путаница | Как различать | Где разобрать |
|-----------------|---------------|---------------|
| Интернет и веб | Интернет — инфраструктура; WWW — сервис страниц в браузере | [6](/encyclopedia/1-basics/1-035-bazovaya-informatika/6) |
| ОЗУ и накопитель | ОЗУ — работа «здесь и сейчас»; диск — хранение после выключения | [3](/encyclopedia/1-basics/1-035-bazovaya-informatika/3) |
| Алгоритм и программа | Алгоритм — план; программа — запись плана для машины | [4](/encyclopedia/1-basics/1-035-bazovaya-informatika/4) |
| Файл и процесс | Файл на диске; процесс — исполнение программы в памяти | [Программа](/encyclopedia/1-basics/1-19-programma/1#programma-protsess-potok) |

<div class="callout callout--tip">
  <div class="callout-title">Как пользоваться</div>

  <div class="callout-body">
  Идите по главам **1 → 8** подряд или выборочно по таблице ниже. Глава **9** — справочник по средам (Godot, Flutter, BeautifulSoup и др.), её можно открывать по мере необходимости.

  Итоги и чек-лист — в конце ([98](/encyclopedia/1-basics/1-035-bazovaya-informatika/98), [99](/encyclopedia/1-basics/1-035-bazovaya-informatika/99)).
</div>
  </div>


---

## Карта курса

| № | Тема | Глава курса | Подробнее в энциклопедии |
|---|---------------|-------------|---------------------------|
| 1 | Ключевые понятия и маршрут | [1](/encyclopedia/1-basics/1-035-bazovaya-informatika/1) | [Дорожная карта](/encyclopedia/1-basics/1-03-dorozhnaya-karta-izucheniya/1) |
| 2 | Кодирование, сжатие, архивы, обзор БД | [2](/encyclopedia/1-basics/1-035-bazovaya-informatika/2) | [Данные и информация](/encyclopedia/1-basics/1-09-dannye-i-informatsiya/intro), [Архивы](/encyclopedia/1-basics/1-20-ispolnyaemye-fayly-i-arhivy/2), [типы баз данных](/encyclopedia/3-data-markup/3-05-osnovy-baz-dannyh/1#chetyre-osnovnyh-tipa-baz-dannyh) |
| 3 | Железо, периферия, сети (компьютер, ЭВМ, устройства) | [3](/encyclopedia/1-basics/1-035-bazovaya-informatika/3) | [Как работает компьютер](/encyclopedia/1-basics/1-08-kak-rabotaet-kompyuter/intro), [Аппаратное обеспечение](/encyclopedia/2-system-network/2-10-zhelezo/1) |
| 4 | Алгоритмы, языки, программирование | [4](/encyclopedia/1-basics/1-035-bazovaya-informatika/4) | [Программа](/encyclopedia/1-basics/1-19-programma/intro), [Код и разработка](/encyclopedia/4-code-dev/code-dev), [Ассемблер](/encyclopedia/5-languages/5-16-starye-yazyki/assembler/intro), [Visual Basic](/encyclopedia/5-languages/5-16-starye-yazyki/visual-basic/intro) |
| 5 | ОС, файловые системы, утилиты | [5](/encyclopedia/1-basics/1-035-bazovaya-informatika/5) | [ОС](/encyclopedia/2-system-network/2-01-operatsionnaya-sistema/intro), [модели развёртывания](/encyclopedia/1-basics/1-13-soft-prodvinutogo-polzovatelya/8#chetiryre-modeli-razvertyvaniya) |
| 6 | Интернет и сервисы | [6](/encyclopedia/1-basics/1-035-bazovaya-informatika/6) | [Сеть](/encyclopedia/2-system-network/2-03-set-i-internet/intro), [Поиск](/encyclopedia/1-basics/1-21-poisk-informatsii/intro), [Коммуникация](/encyclopedia/1-basics/1-22-kommunikatsiya-i-obschenie/intro) |
| 7 | Право и защита информации | [7](/encyclopedia/1-basics/1-035-bazovaya-informatika/7) | [Интеллектуальные права](/encyclopedia/7-project/7-07-intellektualnye-prava/intro) |
| 8 | Организация рабочего места | [8](/encyclopedia/1-basics/1-035-bazovaya-informatika/8) | [Эргономика клавиатуры](/encyclopedia/1-basics/1-08-kak-rabotaet-kompyuter/713) |
| 9 | Инструменты и среды (справочник) | [9](/encyclopedia/1-basics/1-035-bazovaya-informatika/9) | BeautifulSoup, Godot, Flutter, App Inventor и др. |

---

## Рекомендуемый порядок для новичка

```mermaid
flowchart LR
    A["1 Понятия и маршрут"] --> B["2 Данные"]
    B --> C["3 Железо"]
    C --> D["5 ОС"]
    D --> E["6 Интернет"]
    E --> F["4 Алгоритмы"]
    F --> G["7 Право"]
    G --> H["8 Рабочее место"]
    H --> I["98 Итоги"]
```

Главу **4** (алгоритмы и программирование) можно пройти раньше, если вы уже на уроках пишете код — она не зависит от интернета. После теории удобно разобрать **сложность алгоритмов на примерах** — [Big-O — шпаргалка](/lab/Примеры/1128), затем задачи на **Python** — [Алгоритмы на Python — ЕГЭ и олимпиадка](/lab/Примеры/1122), на **Java** — [консольные задачи](/lab/Примеры/1131); для лабораторной с окном — [Swing — окна и кнопки](/lab/Примеры/1143), на **Pascal** (школа, PascalABC, Lazarus) — [типовые программы](/lab/Примеры/1140), в **Кумир** (ОГЭ, Чертёжник, Робот) — [Lab / 1115](/lab/Примеры/1115) и [глава Кумир](/encyclopedia/9-spinoff/9-11-dlya-detey/5-kod/11). Главы **7** и **8** удобны в любой момент после [1](/encyclopedia/1-basics/1-035-bazovaya-informatika/1).

---

## Интерактивная карта маршрута

Если удобнее идти по "живому" дереву тем вместо таблицы, используйте карту —

<InteractiveRoadmap />

После просмотра выберите свой ближайший маршрут из 3 шагов — текущая глава -> следующая обязательная -> глава для углубления. Это поможет не потеряться в материале и сразу закрепить порядок прохождения.

<DocCardList />
---
