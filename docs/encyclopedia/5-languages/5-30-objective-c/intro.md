import ExternalPlayEmbed from '@site/src/components/ExternalPlayEmbed';

---
title: "Objective-C — о разделе"
description: "Черновик раздела Objective-C — Cocoa, Apple legacy и связь со Swift."
sidebar_label: Objective-C — о разделе
related:
  - title: "Swift — о разделе"
    doc: encyclopedia/5-languages/5-14-swift/intro
  - title: "C++ — о разделе"
    doc: encyclopedia/5-languages/5-06-cpp/intro
  - title: "Smalltalk — о разделе"
    doc: encyclopedia/5-languages/5-08-smalltalk/intro
---

import DocCardList from '@theme/DocCardList';

# Objective-C — о разделе

<ExternalPlayEmbed example="lab/first-program-play" title="Первая программа" minHeight={420} playProps={{"language":"objectivec"}} />


<ExternalPlayEmbed example="data-markup/language-intro-play" title="Обзор Objective-C" minHeight={520} playProps={{"topic":"objectivec"}} />


> **Черновик раздела.** Материалы будут дополняться; ниже — структура, ключевые идеи messaging/runtime и черновые статьи для чтения legacy-кода Apple.

**Objective-C** — язык Apple до доминирования [Swift](/encyclopedia/5-languages/5-14-swift/intro):

- сообщения в стиле [Smalltalk](/encyclopedia/5-languages/5-08-smalltalk/intro) поверх синтаксиса C;
- фреймворки Foundation, UIKit, AppKit;
- **ARC** (Automatic Reference Counting) для управления памятью объектов.

Раздел нужен для **чтения legacy-кода** iOS/macOS, поддержки старых модулей и понимания bridge в Swift.

| Материал | Зачем |
|----------|-------|
| [История языка](./1.md) | NeXT, Apple, переход к Swift |
| [Первая программа](./7.md) | Xcode, clang, Foundation |
| [Swift intro](/encyclopedia/5-languages/5-14-swift/intro) | Современный стек Apple |
| [Smalltalk intro](/encyclopedia/5-languages/5-08-smalltalk/intro) | Модель сообщений |

---

## Что такое Objective-C простыми словами

Objective-C = **C** + **объектная модель с сообщениями**. Вместо `obj.method(arg)` пишут `[obj method:arg]`. Runtime динамический: можно отправить сообщение объекту, даже если метод объявлен в category позже.

| Аспект | Objective-C | Swift |
|--------|-------------|-------|
| Синтаксис | `[ ]`, `@` directives | Современный, типобезопасный |
| Null для объектов | `nil` | Optionals |
| Память | ARC (раньше MRC вручную) | ARC + value types |
| Новые API Apple | Legacy headers, `@objc` | Swift-first |

Новые приложения пишут на Swift; Objective-C остаётся в системных фреймворках, open source (AFNetworking era, FFmpeg bindings) и миллионах строк legacy в App Store.

---

## Планируемое содержание

| № | Тема | Статус |
|---|------|--------|
| 1 | [История языка](./1.md) | черновик |
| 2 | Синтаксис, `@interface`, `@implementation` | планируется |
| 3 | Messaging, `nil`, протоколы | планируется |
| 4 | Memory management — MRC и ARC | планируется |
| 5 | Foundation — NSString, NSArray, NSDictionary | планируется |
| 6 | Interop Swift ↔ Objective-C | планируется |
| 7 | [Первая программа](./7.md) | черновик |
| 8+ | UIKit lifecycle, миграция на Swift | планируется |

---

## Ключевые идеи раздела

### Messaging, не вызов метода

```objc
NSString *s = @"Hello";
NSString *upper = [s uppercaseString];
```

Компилятор превращает в `objc_msgSend`. Динамическая диспетчеризация — основа swizzling и KVO (Key-Value Observing) в legacy-коде.

### Directives `@`

| Директива | Назначение |
|-----------|------------|
| `@interface` / `@implementation` | Объявление и реализация класса |
| `@property` | Геттер/сеттер + backing ivar |
| `@protocol` | Аналог interface в Java |
| `@selector` | Указатель на метод для runtime |
| Literals `@"..."`, `@[]`, `@{}` | NSString, NSArray, NSDictionary |

### ARC

Компилятор вставляет `retain`/`release`/`autorelease` автоматически. В `@autoreleasepool` объекты освобождаются в конце scope. До 2011 года **MRC** (Manual Reference Counting) требовал ручного `release` — читать старый код без паники.

### Categories и protocols

**Category** добавляет методы существующему классу без подкласса. **Protocol** — контракт методов (`<UITableViewDelegate>`). Swift унаследовал идеи через extensions и protocols.

---

## Инструменты

| Инструмент | Назначение |
|------------|------------|
| **Xcode** | IDE, симулятор, Interface Builder |
| **clang** | Компилятор Obj-C и Swift |
| **Instruments** | Профилирование памяти и CPU |
| **lldb** | Отладчик в терминале и Xcode |

Разработка Objective-C для Apple-платформ — на **macOS**. Linux GNUstep — нишевый путь вне основного раздела.

---

## Порядок чтения

1. [История языка](./1.md) — NeXT → Apple → Swift.
2. [Первая программа](./7.md) — CLI Hello World, `@interface`.
3. Messaging и Foundation (статьи 2–5).
4. Bridging header и mixed Swift/Obj-C (статья 6).

Параллельно полезны [C++](/encyclopedia/5-languages/5-06-cpp/intro) (синтаксис C) и [Smalltalk](/encyclopedia/5-languages/5-08-smalltalk/intro) (философия сообщений).

---

## Кому подойдёт раздел

| Сценарий | Зачем Objective-C |
|----------|-------------------|
| Поддержка legacy iOS-модуля | Читать без полного rewrite |
| Mixed Swift/Obj-C проект | Bridging, `@objc` |
| Понимание Apple SDK | Многие headers Obj-C |
| Open source на GitHub | Старые библиотеки |

Новый UI-код — Swift; Objective-C — страховка для maintenance и собеседований в компаниях с длинной историей iOS.

---

## Связанные разделы

| Раздел | Связь |
|--------|-------|
| [Swift](/encyclopedia/5-languages/5-14-swift/intro) | Преемник, interop |
| [Smalltalk](/encyclopedia/5-languages/5-08-smalltalk/intro) | Messaging model |
| [C++](/encyclopedia/5-languages/5-06-cpp/intro) | Синтаксическая база C |
| [Мобильные приложения](/encyclopedia/4-code-dev/4-12-mobilnye-prilozheniya/intro) | Контекст платформы |

<div class="callout callout--info">
  <div class="callout-title">Черновик</div>
  <div class="callout-body">
  Статьи 2–6 в плане. Черновики <a href="./1.md">истории</a> и <a href="./7.md">первой программы</a> содержат рабочие команды clang и фрагменты <code>@interface</code>.
  </div>
</div>

---

## Пошаговый маршрут на две недели

| День | Задача | Результат |
|------|--------|-----------|
| 1–2 | [7.md](./7.md) CLI Hello World | `clang -fobjc-arc` работает |
| 3 | Literals `@""`, `@[]`, `@{}` | Foundation collections |
| 4 | [1.md](./1.md) история + messaging | Понимание NeXT lineage |
| 5 | `@property` strong/weak/copy | ARC qualifiers |
| 6 | Protocol + delegate (read-only) | UIKit header pattern |
| 7 | Bridging header в mixed project | Swift вызывает Obj-C |
| 8–10 | Legacy file на GitHub | Аннотации в `.m` |

<div class="callout callout--tip">
  <div class="callout-title">Практика</div>
  <div class="callout-body">
  Не начинайте с storyboard. Сначала CLI + Foundation, затем один legacy ViewController только для чтения. Так быстрее связывается messaging с реальным кодом.
  </div>
</div>

---

## Учебный разбор retain cycle

```objc
@interface Worker : NSObject
@property (nonatomic, copy) void (^onDone)(void);
@end

@implementation Worker
- (void)start {
    self.onDone = ^{
        [self cleanup];  // cycle: block → self → block
    };
}
- (void)cleanup {}
@end
```

Исправление — `__weak typeof(self) weakSelf = self;` в block. Отладка — Instruments Leaks и [отладка](/encyclopedia/4-code-dev/4-14-razrabotka-i-otladka/111).

---

## Foundation literals — шпаргалка

```objc
NSString *s = @"text";
NSNumber *n = @42;
NSArray *a = @[s, n];
NSDictionary *d = @{@"key": s};
for (NSString *item in a) { NSLog(@"%@", item); }
```

| Literal | Класс |
|---------|-------|
| `@"..."` | NSString |
| `@[]` | NSArray |
| `@{}` | NSDictionary |
| `@42` | NSNumber |

---

## Interop Swift (кратко)

1. Bridging header: `#import "LegacyManager.h"`.
2. Swift class для Obj-C: `@objcMembers class Foo: NSObject`.
3. Generated header `Target-Swift.h` в `.m`.

Подробнее — [Swift intro](/encyclopedia/5-languages/5-14-swift/intro), Git workflow — [Git](/encyclopedia/4-code-dev/4-13-osnovy-raboty-s-git/112).

---

## Упражнения

1. Соберите Hello World из [7.md](./7.md) без Xcode GUI.
2. Class `Counter` с `-increment` и property `count`.
3. `NSArray` из трёх имён — fast enumeration + `NSLog`.
4. Намеренный retain cycle → Instruments.
5. Найдите `@protocol` в UIKit header.
6. Swift `@objc` class, вызов из `.m`.
7. Stack trace с `objc_msgSend` — найти selector.
8. Сравните `nil` messaging с Swift Optional.
9. Прочитайте open source `.m` на GitHub.
10. Объясните `-` vs `+` на примере `NSString`.

---

## Troubleshooting

| Симптом | Причина | Решение |
|---------|---------|---------|
| Foundation.h not found | Нет `-framework Foundation` | Флаг clang |
| Unrecognized selector | Typo или wrong class | `po [obj class]` в lldb |
| Bridging header missing | Build Settings | `SWIFT_OBJC_BRIDGING_HEADER` |
| Duplicate symbol | `.m` в двух targets | Target Membership |
| Leak | strong в block | `weakSelf` |
| Swift invisible in Obj-C | Нет `@objc` | NSObject + `@objcMembers` |
| Autorelease warning | Hot loop | `@autoreleasepool` |
| Code signing | Provisioning | Automatic signing |

---

## FAQ

**Нужен ли Objective-C новичку Apple-разработчику?**
Для новых app — Swift достаточно. Obj-C — legacy, headers, mixed targets.

**Чем messaging отличается от вызова функции?**
Runtime ищет IMP по selector; позднее binding, categories.

**Что такое selector?**
Имя метода в runtime, тип `SEL` (`stringWithFormat:`).

**Зачем `@autoreleasepool`?**
Drain autorelease objects в scope CLI программ.

**MRC ещё актуален?**
Только в очень старых кодовых базах.

**Categories безопасны?**
Конфликт при одинаковых selectors — осторожно в categories на системных классах.

**Blocks и GCD?**
Closures + Grand Central Dispatch — legacy concurrency до Swift async.

**Obj-C без macOS?**
GNUstep — niche; iOS dev — macOS + Xcode.

**Как читать `.h`?**
`@interface` public; `@implementation` в `.m`.

**Что такое `instancetype`?**
Typed return для `[[Class alloc] init]`.

**IBOutlet / IBAction?**
Storyboard bindings; legacy UIKit.

**Migration на Swift?**
Module за module, bridging header, `@objc` exposure.

**Где практиковать без устройства?**
Simulator; CLI Foundation на macOS.

**Open source Obj-C?**
GitHub: старые iOS libs, FFmpeg bindings.

**Связь со Smalltalk?**
Message passing без функционального Smalltalk runtime — [Smalltalk intro](/encyclopedia/5-languages/5-08-smalltalk/intro).

---

## Дополнительные упражнения раздела

11. Xcode workspace: CLI tool + unit test target.
12. Найдите `@protocol` с `@optional` в UIKit header.
13. Diagram retain graph: strong vs weak delegate.
14. Crash log с `objc_msgSend` — найти selector.
15. Mixed target: Swift вызывает Greeter.

<div class="callout callout--warning">
  <div class="callout-title">Платформа</div>
  <div class="callout-body">
  iOS-сборка требует macOS. GNUstep на Linux не заменяет UIKit tutorial path.
  </div>
</div>

---

## Instruments и профилирование (обзор)

**Instruments** в Xcode профилирует Obj-C/Swift: Leaks, Time Profiler, Allocations. Legacy Obj-C часто показывает retain cycles в delegate chains — ищите strong delegate properties.

---

## Ключевые префиксы Apple API

| Префикс | Происхождение |
|---------|---------------|
| NS | NeXTstep / Foundation |
| UI | UIKit (iOS) |
| CG | Core Graphics (C) |
| CF | Core Foundation (C, toll-free bridge) |

Чтение headers проще, когда префикс указывает на слой стека.

---

## Чек-лист раздела Objective-C

- [ ] Прочитана [история](./1.md)
- [ ] Собран [Hello World](./7.md) через clang или Xcode
- [ ] Объяснено отличие messaging от C function call
- [ ] Понятны ARC и `strong`/`weak`
- [ ] Открыт [Swift intro](/encyclopedia/5-languages/5-14-swift/intro) для mixed targets

---

## WWDC и migration resources

Apple публикует guides по постепенной миграции Obj-C → Swift: mixed targets, `@objc` exposure, nullability annotations в headers. Полезно при чтении legacy UIKit code.

---

## Типичные символы в crash logs

| Symbol | Значение |
|--------|----------|
| `objc_msgSend` | Dynamic dispatch |
| `-[Class method:]` | Instance method |
| `+[Class method]` | Class method |

Умение читать stack trace ускоряет отладку legacy apps.

---

## FAQ (дополнение раздела)

**Obj-C для App Store в 2026?** Новые apps Swift; Obj-C для maintenance.

**GNUstep карьера?** Не для iOS jobs.

**clang без Xcode?** CLT enough for Foundation CLI.

**Reading order summary?** [1.md](./1.md) → [7.md](./7.md) → Swift interop.

---

## Связанные материалы (итог)

| Статья | Тема |
|--------|------|
| [1.md](./1.md) | История NeXT и Apple |
| [7.md](./7.md) | CLI Hello World |
| [Swift](/encyclopedia/5-languages/5-14-swift/intro) | Современный стек |
| [Git](/encyclopedia/4-code-dev/4-13-osnovy-raboty-s-git/112) | Версионирование |

---

<DocCardList />

---
