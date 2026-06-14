---
title: Сборка мусора — о разделе
description: "Подборка материалов раздела Сборка мусора — GC, утечки, Java, Python, Go, C#."
sidebar_label: Сборка мусора — о разделе
---

import DocCardList from '@theme/DocCardList';

# О разделе

Раздел про **автоматическое управление памятью** — достижимость объектов, поколения, паузы stop-the-world и типичные "утечки" через живые ссылки.

**Длинные листинги (от ~8 строк)** вынесены в каталог [code.spirzen.ru](https://code.spirzen.ru/) и подгружаются через `ExternalCodeEmbed`; короткие фрагменты и псевдокод mark-and-sweep остаются в статье. Интерактив mark-and-sweep — в [play.spirzen.ru](https://play.spirzen.ru/) (`ExternalPlayEmbed` в [статье 1](./1.md)).

| Статья | Содержание |
|--------|------------|
| [1. Автоматическое управление памятью](./1.md) | Теория, утечки, C#, Java, Python; интерактив mark-and-sweep |
| [4. Java, Python и Go](./4.md) | Сравнение трёх моделей GC — шпаргалка |
| [2. Итоги](./2.md) · [3. Чек-лист](./3.md) | Закрепление |

Языковые детали — в [JVM (Java)](/encyclopedia/5-languages/5-03-java/23), [CPython](/encyclopedia/5-languages/5-02-python/27), [Go runtime](/encyclopedia/5-languages/5-10-go/13).

<DocCardList />

---
