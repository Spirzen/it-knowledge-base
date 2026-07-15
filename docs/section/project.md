---
title: 7. Проект - о разделе
description: Комплексное управление IT-проектами - аналитика, разработка, тестирование, архитектурное проектирование, маркетинг продукта и организация командных процессов.
sidebar_label: 7. Проект - о разделе
slug: /section/project
id: project
---

<div class="article-tags">
  <span class="tag tag-required">ОБЯЗАТЕЛЬНО</span>
  <span class="tag tag-beginner">ДЛЯ НОВИЧКОВ</span>
</div>

---

## О разделе

Как мы уже выяснили, разработка в IT - процесс широкий и комплексный, и он охватывает множество направлений, включая как разработку, аналитику и тестирование, так и проектирование, маркетинг и управление.

Представим себе ситуацию. Вы - бизнесмен, которому нужно обеспечить автоматизацию процесса согласования договоров в организации. К этой идее вы пришли либо самостоятельно, либо увидели на форуме презентацию новой технологии. Но у вас строительная компания, и вам нужна помощь профессионалов!

Так, вас судьба привела к договору на оказание услуг по разработке информационной системы силами исполнителя. Этим исполнителем оказывается некая IT-компания, у которой всё чётко поставлено и организовано. И эта организация управления проектами в сфере информационных технологий является таким же специфичным для отрасли стилем, как и ведение проектов в строительстве, или финансовой сфере.

Общий поток всегда один:

Договоренность - Выполнение работ/оказание услуг - Сдача результата в срок.

И чтобы сдать результат в срок в строгом соответствии с условиями договора, нужно внутри организации-исполнителя грамотно поставить "конвейер" поставки продуктов. Для этого мы должны собрать команду, которая включает в себя руководителя проекта (с которого будем требовать), всех сопутствующих обслуживающих менеджеров и специалистов (эксперты, финансисты, бухгалтера, экономисты, юристы, маркетологи, администраторы, безопасники и прочие важные спецы), и самое главное - команду разработки.

В этой команде разработки мы должны включить несколько важных категорий:

1. Архитектор системы. Он должен будет, по договорённости с руководством и с заказчиком-бизнесменом, обсудить единую общую картину, как всё должно работать в результате, и именно ему предстоит всё распределить, спроектировать, и подготовить итоговое крупное видение всех элементов системы. Он проектирует набор инструментов, языков, протоколов, способов интеграции, согласует коммуникации и тому подобное, абсолютно так же, как главный архитектор здания. Это, как можно понять, должен быть самый грамотный специалист, с большим опытом работы, ведь именно его ошибка будет стоить максимально дорого. Если ошибается архитектор в выборе технологии или подхода, вся система будет не соответствовать ожиданиям и это очень, очень плохо.
2. Аналитики. Тут могут быть разные ребята - бизнес-аналитики, системные аналитики, аналитики данных, но они объединены единой целью - разобраться, и детализировать конкретные направления, которые решил архитектор. Ошибка аналитика является второй по приоритетности, так как он должен изучить логику, и если реализация будет хромать из-за него, придётся откатываться назад по целому направлению.
3. Разработчики. Это "строители", которые будут строить по проекту и анализу, как по чертежам. Это глубокие технические специалисты, которые сами разберутся с кодом и низкоуровневыми проблемами, но при этом они не лезут в выбранные решения по технологиям и реализациям. Аналитиком сказано, что нужно сделать так - разработчик сделает именно так, как сказано, так как он не видит всей картины. Пример со строителями - они положат бетонные плиты и кирпичи именно там, где сказано в проекте, их обязанность - соблюдать точность, ведь они не знают всей задумки. Сказано на 5 сантиметров выше - значит делаем так. Если это плохое решение, отвечать будет тот, кто выставил требование. Ошибку разработчика можно исправить, попросить переделать, пофиксить баг, изменить код, переписать и улучшить. Так что она третья в приоритете.
4. Тестировщики. Это те, кто проверит, точно ли в соответствии с требованиями реализована работа программы. Словом, точно ли там 5 сантиметров? По приоритетности ошибки тестировщика спорно. По идее, это четвертый приоритет, но всё же могут быть ситуации и критичные. С одной стороны, если ошибка допущена, и не замечена тестировщиком, то она всё равно есть, и выплывает позже рано или поздно, и её останется лишь исправить. Если это ошибка разработчика. Ошибку аналитика или архитектора тестировщик лишь выявит/не выявит, но природа ошибки, как её приоритет, сохранится за ответственными лицами. Поэтому ответственность тестировщика равнозначная любому проверяющему - если пропустить важный момент, то ошибка тестировщика лишь сохранит чужую ошибку. Можно сказать, что тестировщик это второй шанс, спасительная инстанция, которая может в перспективе защитить от убытков. Многие IT-компании (особенно в игровой индустрии) высший приоритет ставят именно тестированию, чтобы ничего не упустить.

И в этой книге мы должны будем разобраться, как всем этим "хозяйством" грамотно управлять. Нужно узнать, как проектируются системы - паттерны проектирования, принципы SOLID, архитектурные стили (монолит, микросервисы), а также как работать аналитику, тестировщику, как работать с задачами и документацией. Если вы менеджер или планируете управлять командой в дальнейшем, вам неизбежно придётся изучить всю внутреннюю кухню работы над проектом.

Проекты бывают разные, порой они требуют глубокого изучения предметной области, а порой представляют собой уже кем-то созданный проект, который надо "подхватить" и вытащить из болота. Тогда перед нами открывается новая проблема - когда кто-то уже сделал работу, а нам придётся в ней разобраться. Это мы тоже разберём, изучив культуру кода, хороший тон, соглашения, и конечно легаси-код, как работать с чужим кодом.

Здесь сосредоточимся на команде, процессе и ответственности. В реальном мире заказчик не спросит, как мы написали код, нас спросят, решена ли задача.

Помните - вас нанимают не потому что вы умный или хороший, а потому что вы решаете проблему заказчика/работодателя.

---

## Общее о бизнесе

<ul class="it-toc-articles">
  <li><a href="/encyclopedia/7-project/7-01-obschee-o-biznese/1">7.01. Основы бизнеса в IT-проектах</a></li>
  <li><a href="/encyclopedia/7-project/7-01-obschee-o-biznese/2">7.01. Модели IT-бизнеса</a></li>
  <li><a href="/encyclopedia/7-project/7-01-obschee-o-biznese/3">7.01. Договор и приёмка глазами разработчика</a></li>
  <li><a href="/encyclopedia/7-project/7-01-obschee-o-biznese/111">7.01. Бизнес-логика</a></li>
  <li><a href="/encyclopedia/7-project/7-01-obschee-o-biznese/112">7.01. Управление бизнесом</a></li>
  <li><a href="/encyclopedia/7-project/7-01-obschee-o-biznese/998">7.01. Общее о бизнесе — итоги</a></li>
  <li><a href="/encyclopedia/7-project/7-01-obschee-o-biznese/999">7.01. Общее о бизнесе — чек-лист</a></li>
</ul>

---

## Команда и управление

<ul class="it-toc-articles">
  <li><a href="/encyclopedia/7-project/7-02-komanda-i-upravlenie/1">7.02. Основы управления IT-проектами</a></li>
  <li><a href="/encyclopedia/7-project/7-02-komanda-i-upravlenie/2">7.02. Культура уважения к инженерному труду</a></li>
  <li><a href="/encyclopedia/7-project/7-02-komanda-i-upravlenie/3">7.02. Цифровая трансформация организаций</a></li>
  <li><a href="/encyclopedia/7-project/7-02-komanda-i-upravlenie/11">7.02. Командная работа в разработке ПО</a></li>
  <li><a href="/encyclopedia/7-project/7-02-komanda-i-upravlenie/12">7.02. Роли и функции менеджмента в IT</a></li>
  <li><a href="/encyclopedia/7-project/7-02-komanda-i-upravlenie/13">7.02. Эффективное управление разработчиками</a></li>
  <li><a href="/encyclopedia/7-project/7-02-komanda-i-upravlenie/14">7.02. Роль тимлида — ожидания, риски и выбор траектории</a></li>
  <li><a href="/encyclopedia/7-project/7-02-komanda-i-upravlenie/15">7.02. Компетенции в управлении проектами</a></li>
  <li><a href="/encyclopedia/7-project/7-02-komanda-i-upravlenie/16">7.02. Microsoft Project — планирование и контроль графика</a></li>
  <li><a href="/encyclopedia/7-project/7-02-komanda-i-upravlenie/17">7.02. BOK, PMBOK и прочие «бабоки» — своды знаний в IT-проектах</a></li>
  <li><a href="/encyclopedia/7-project/7-02-komanda-i-upravlenie/111">7.02. Ежедневные стендапы и коммуникация</a></li>
  <li><a href="/encyclopedia/7-project/7-02-komanda-i-upravlenie/112">7.02. Оценка трудозатрат</a></li>
  <li><a href="/encyclopedia/7-project/7-02-komanda-i-upravlenie/113">7.02. Как общаться с бизнесом</a></li>
  <li><a href="/encyclopedia/7-project/7-02-komanda-i-upravlenie/141">7.02. Первые 90 дней тимлида</a></li>
  <li><a href="/encyclopedia/7-project/7-02-komanda-i-upravlenie/142">7.02. Встречи один на один (1-on-1)</a></li>
  <li><a href="/encyclopedia/7-project/7-02-komanda-i-upravlenie/143">7.02. Мотивация команды для руководителя</a></li>
  <li><a href="/encyclopedia/7-project/7-02-komanda-i-upravlenie/144">7.02. Найм в команду разработки — портрет и вакансия</a></li>
  <li><a href="/encyclopedia/7-project/7-02-komanda-i-upravlenie/998">7.02. Команда и управление — итоги</a></li>
  <li><a href="/encyclopedia/7-project/7-02-komanda-i-upravlenie/999">7.02. Команда и управление — чек-лист</a></li>
</ul>

---

## Методология и жизненный цикл ПО

<ul class="it-toc-articles">
  <li><a href="/encyclopedia/7-project/7-03-metodologiya-i-zhiznennyy-tsikl-po/1">7.03. Жизненный цикл программного обеспечения</a></li>
  <li><a href="/encyclopedia/7-project/7-03-metodologiya-i-zhiznennyy-tsikl-po/2">7.03. Методологии разработки государственных ИТ-систем</a></li>
  <li><a href="/encyclopedia/7-project/7-03-metodologiya-i-zhiznennyy-tsikl-po/3">7.03. Agile — гибкая методология разработки</a></li>
  <li><a href="/encyclopedia/7-project/7-03-metodologiya-i-zhiznennyy-tsikl-po/4">7.03. Как выбрать процесс разработки под контекст</a></li>
  <li><a href="/encyclopedia/7-project/7-03-metodologiya-i-zhiznennyy-tsikl-po/5">7.03. Extreme Programming, TDD и BDD</a></li>
  <li><a href="/encyclopedia/7-project/7-03-metodologiya-i-zhiznennyy-tsikl-po/998">7.03. Методология и жизненный цикл ПО — итоги</a></li>
  <li><a href="/encyclopedia/7-project/7-03-metodologiya-i-zhiznennyy-tsikl-po/999">7.03. Методология и жизненный цикл ПО — чек-лист</a></li>
</ul>

---

## Аналитика

<ul class="it-toc-articles">
  <li><a href="/encyclopedia/7-project/7-04-analitika/1">7.04. История развития аналитики в IT</a></li>
  <li><a href="/encyclopedia/7-project/7-04-analitika/111">7.04. Основы анализа требований</a></li>
  <li><a href="/encyclopedia/7-project/7-04-analitika/112">7.04. Профессиональная аналитика</a></li>
  <li><a href="/encyclopedia/7-project/7-04-analitika/113">7.04. Роль бизнес-аналитика в проекте</a></li>
  <li><a href="/encyclopedia/7-project/7-04-analitika/114">7.04. Роль системного аналитика в разработке</a></li>
  <li><a href="/encyclopedia/7-project/7-04-analitika/115">7.04. Исследование и декомпозиция систем</a></li>
  <li><a href="/encyclopedia/7-project/7-04-analitika/116">7.04. Формализация и управление требованиями</a></li>
  <li><a href="/encyclopedia/7-project/7-04-analitika/117">7.04. Документация аналитика</a></li>
  <li><a href="/encyclopedia/7-project/7-04-analitika/118">7.04. Типы технической и пользовательской документации</a></li>
  <li><a href="/encyclopedia/7-project/7-04-analitika/119">7.04. Confluence</a></li>
  <li><a href="/encyclopedia/7-project/7-04-analitika/120">7.04. Создание руководств и инструкций</a></li>
  <li><a href="/encyclopedia/7-project/7-04-analitika/121">7.04. Дополнительные виды проектной документации</a></li>
  <li><a href="/encyclopedia/7-project/7-04-analitika/122">7.04. Документация в процессах</a></li>
  <li><a href="/encyclopedia/7-project/7-04-analitika/123">7.04. Артефакты аналитической деятельности</a></li>
  <li><a href="/encyclopedia/7-project/7-04-analitika/124">7.04. Моделирование бизнес-процессов</a></li>
  <li><a href="/encyclopedia/7-project/7-04-analitika/125">7.04. Прототипирование интерфейсов и сценариев</a></li>
  <li><a href="/encyclopedia/7-project/7-04-analitika/126">7.04. Инструменты аналитика</a></li>
  <li><a href="/encyclopedia/7-project/7-04-analitika/127">7.04. Взаимодействие аналитика с командой</a></li>
  <li><a href="/encyclopedia/7-project/7-04-analitika/128">7.04. Технический дизайн на основе требований</a></li>
  <li><a href="/encyclopedia/7-project/7-04-analitika/129">7.04. Справочник по нотации BPMN 2.0</a></li>
  <li><a href="/encyclopedia/7-project/7-04-analitika/130">7.04. BPMN-движки Camunda и Flowable</a></li>
  <li><a href="/encyclopedia/7-project/7-04-analitika/998">7.04. Аналитика — итоги</a></li>
  <li><a href="/encyclopedia/7-project/7-04-analitika/999">7.04. Аналитика — чек-лист</a></li>
  <li><a href="/encyclopedia/7-project/7-04-analitika/1121">7.04. Как переводить бизнес-задачи на язык данных</a></li>
  <li><a href="/encyclopedia/7-project/7-04-analitika/1122">7.04. SQL для аналитики</a></li>
  <li><a href="/encyclopedia/7-project/7-04-analitika/1123">7.04. Основы продуктовой аналитики</a></li>
  <li><a href="/encyclopedia/7-project/7-04-analitika/1231">7.04. Основы диаграмм и моделирования</a></li>
</ul>

---

## Тестирование программного обеспечения

<ul class="it-toc-articles">
  <li><a href="/encyclopedia/7-project/7-05-testirovanie/1">7.05. Основы тестирования программного обеспечения</a></li>
  <li><a href="/encyclopedia/7-project/7-05-testirovanie/2">7.05. Тестирование и анализ API</a></li>
  <li><a href="/encyclopedia/7-project/7-05-testirovanie/100">7.05. Добро пожаловать в тестирование</a></li>
  <li><a href="/encyclopedia/7-project/7-05-testirovanie/111">7.05. Классификация видов тестирования</a></li>
  <li><a href="/encyclopedia/7-project/7-05-testirovanie/112">7.05. Жизненный цикл тестирования</a></li>
  <li><a href="/encyclopedia/7-project/7-05-testirovanie/113">7.05. Артефакты качества в проекте</a></li>
  <li><a href="/encyclopedia/7-project/7-05-testirovanie/114">7.05. End-to-End и системное тестирование</a></li>
  <li><a href="/encyclopedia/7-project/7-05-testirovanie/115">7.05. Автоматизация тестирования</a></li>
  <li><a href="/encyclopedia/7-project/7-05-testirovanie/116">7.05. Последовательность этапов тестирования</a></li>
  <li><a href="/encyclopedia/7-project/7-05-testirovanie/117">7.05. Объекты и уровни тестирования</a></li>
  <li><a href="/encyclopedia/7-project/7-05-testirovanie/118">7.05. Инструменты для ручного и автоматизированного тестирования</a></li>
  <li><a href="/encyclopedia/7-project/7-05-testirovanie/119">7.05. Документация тестировщика</a></li>
  <li><a href="/encyclopedia/7-project/7-05-testirovanie/120">7.05. Юнит-тестирование</a></li>
  <li><a href="/encyclopedia/7-project/7-05-testirovanie/121">7.05. Интеграционное тестирование</a></li>
  <li><a href="/encyclopedia/7-project/7-05-testirovanie/122">7.05. Нагрузочное и стресс-тестирование производительности</a></li>
  <li><a href="/encyclopedia/7-project/7-05-testirovanie/123">7.05. Тестирование информационной безопасности</a></li>
  <li><a href="/encyclopedia/7-project/7-05-testirovanie/124">7.05. Особенности тестирования мобильных приложений</a></li>
  <li><a href="/encyclopedia/7-project/7-05-testirovanie/125">7.05. Мутационное тестирование</a></li>
  <li><a href="/encyclopedia/7-project/7-05-testirovanie/126">7.05. Покрытие кода и метрики полноты тестирования</a></li>
  <li><a href="/encyclopedia/7-project/7-05-testirovanie/127">7.05. Техники проектирования тестов</a></li>
  <li><a href="/encyclopedia/7-project/7-05-testirovanie/128">7.05. Ручное тестирование веб-приложений</a></li>
  <li><a href="/encyclopedia/7-project/7-05-testirovanie/129">7.05. SQL для тестировщика</a></li>
  <li><a href="/encyclopedia/7-project/7-05-testirovanie/130">7.05. White-box — тестирование потоков управления и данных</a></li>
  <li><a href="/encyclopedia/7-project/7-05-testirovanie/131">7.05. Unit, Integration, UI, E2E, TDD и BDD</a></li>
  <li><a href="/encyclopedia/7-project/7-05-testirovanie/132">7.05. Основы тестирования веб-приложений — маршрут для QA</a></li>
  <li><a href="/encyclopedia/7-project/7-05-testirovanie/998">7.05. Тестирование программного обеспечения — итоги</a></li>
  <li><a href="/encyclopedia/7-project/7-05-testirovanie/999">7.05. Тестирование программного обеспечения — чек-лист</a></li>
  <li><a href="/encyclopedia/7-project/7-05-testirovanie/1011">7.05. Подготовка среды и создание первого теста</a></li>
  <li><a href="/encyclopedia/7-project/7-05-testirovanie/1012">7.05. Проверка взаимодействия компонентов</a></li>
  <li><a href="/encyclopedia/7-project/7-05-testirovanie/1013">7.05. Проверка пользовательского сценария</a></li>
  <li><a href="/encyclopedia/7-project/7-05-testirovanie/1014">7.05. Проверка надежности под нагрузкой</a></li>
  <li><a href="/encyclopedia/7-project/7-05-testirovanie/1015">7.05. Практикум Java — JUnit и REST Assured</a></li>
  <li><a href="/encyclopedia/7-project/7-05-testirovanie/1016">7.05. Практикум JavaScript — Playwright и Jest</a></li>
  <li><a href="/encyclopedia/7-project/7-05-testirovanie/1181">7.05. Selenium</a></li>
  <li><a href="/encyclopedia/7-project/7-05-testirovanie/1182">7.05. Playwright</a></li>
  <li><a href="/encyclopedia/7-project/7-05-testirovanie/1271">7.05. Самовосстанавливающиеся тесты</a></li>
  <li><a href="/encyclopedia/7-project/7-05-testirovanie/1272">7.05. Инструменты с низким кодом для тестирования</a></li>
  <li><a href="/encyclopedia/7-project/7-05-testirovanie/1273">7.05. Тестирование нейроморфных систем</a></li>
  <li><a href="/encyclopedia/7-project/7-05-testirovanie/1274">7.05. Дополнительные модули для тестировщика</a></li>
</ul>

---

## Проектирование и архитектура

<ul class="it-toc-articles">
  <li><a href="/encyclopedia/7-project/7-06-proektirovanie-i-arhitektura/1">7.06. Основы проектирования и архитектуры программного обеспечения</a></li>
  <li><a href="/encyclopedia/7-project/7-06-proektirovanie-i-arhitektura/2">7.06. Масштабируемость и параллелизм в системном проектировании</a></li>
  <li><a href="/encyclopedia/7-project/7-06-proektirovanie-i-arhitektura/3">7.06. Практика архитектурного проектирования</a></li>
  <li><a href="/encyclopedia/7-project/7-06-proektirovanie-i-arhitektura/101">7.06. Архитектурные стили и их применение</a></li>
  <li><a href="/encyclopedia/7-project/7-06-proektirovanie-i-arhitektura/102">7.06. Стили внутренней организации кода</a></li>
  <li><a href="/encyclopedia/7-project/7-06-proektirovanie-i-arhitektura/103">7.06. Принципы компонентно-ориентированной архитектуры</a></li>
  <li><a href="/encyclopedia/7-project/7-06-proektirovanie-i-arhitektura/104">7.06. Стратегии декомпозиции монолитных систем</a></li>
  <li><a href="/encyclopedia/7-project/7-06-proektirovanie-i-arhitektura/105">7.06. Влияние инфраструктуры на архитектурные решения</a></li>
  <li><a href="/encyclopedia/7-project/7-06-proektirovanie-i-arhitektura/112">7.06. Классификация типов классов в объектно-ориентированном проектировании</a></li>
  <li><a href="/encyclopedia/7-project/7-06-proektirovanie-i-arhitektura/113">7.06. Построение систем на основе классов и объектов</a></li>
  <li><a href="/encyclopedia/7-project/7-06-proektirovanie-i-arhitektura/114">7.06. Доменная модель</a></li>
  <li><a href="/encyclopedia/7-project/7-06-proektirovanie-i-arhitektura/115">7.06. Паттерны проектирования</a></li>
  <li><a href="/encyclopedia/7-project/7-06-proektirovanie-i-arhitektura/116">7.06. Системный подход и системное мышление</a></li>
  <li><a href="/encyclopedia/7-project/7-06-proektirovanie-i-arhitektura/117">7.06. Роль и практика архитектора программного обеспечения</a></li>
  <li><a href="/encyclopedia/7-project/7-06-proektirovanie-i-arhitektura/141">7.06. 12 концепций архитектуры распределённых систем</a></li>
  <li><a href="/encyclopedia/7-project/7-06-proektirovanie-i-arhitektura/142">7.06. Алгоритмы выбора лидера в распределённых системах</a></li>
  <li><a href="/encyclopedia/7-project/7-06-proektirovanie-i-arhitektura/143">7.06. System Design — карта тем и подготовка</a></li>
  <li><a href="/encyclopedia/7-project/7-06-proektirovanie-i-arhitektura/144">7.06. Email-рассылка как распределённая система</a></li>
  <li><a href="/encyclopedia/7-project/7-06-proektirovanie-i-arhitektura/145">7.06. Асинхронная обработка данных в высоконагруженных системах</a></li>
  <li><a href="/encyclopedia/7-project/7-06-proektirovanie-i-arhitektura/998">7.06. Проектирование и архитектура — итоги</a></li>
  <li><a href="/encyclopedia/7-project/7-06-proektirovanie-i-arhitektura/999">7.06. Проектирование и архитектура — чек-лист</a></li>
  <li><a href="/encyclopedia/7-project/7-06-proektirovanie-i-arhitektura/1141">7.06. Типы классов в DDD</a></li>
  <li><a href="/encyclopedia/7-project/7-06-proektirovanie-i-arhitektura/1161">7.06. Имитационное моделирование</a></li>
  <li><a href="/encyclopedia/8-infra-security/8-00-osnovy-infrastruktury/2">8.00. Основы развития информационных систем</a></li>
</ul>

### Проектирование и архитектура

<ul class="it-toc-articles">
  <li><a href="/encyclopedia/7-project/7-06-proektirovanie-i-arhitektura/design-patterns/1">7.06. Обзор паттернов проектирования</a></li>
  <li><a href="/encyclopedia/7-project/7-06-proektirovanie-i-arhitektura/design-patterns/111">7.06. Порождающие паттерны</a></li>
  <li><a href="/encyclopedia/7-project/7-06-proektirovanie-i-arhitektura/design-patterns/112">7.06. Структурные паттерны</a></li>
  <li><a href="/encyclopedia/7-project/7-06-proektirovanie-i-arhitektura/design-patterns/113">7.06. Поведенческие паттерны</a></li>
  <li><a href="/encyclopedia/7-project/7-06-proektirovanie-i-arhitektura/design-patterns/114">7.06. Архитектурные паттерны</a></li>
  <li><a href="/encyclopedia/7-project/7-06-proektirovanie-i-arhitektura/design-patterns/115">7.06. Паттерны интеграции внешних систем</a></li>
  <li><a href="/encyclopedia/7-project/7-06-proektirovanie-i-arhitektura/design-patterns/116">7.06. Паттерны проектирования доменных моделей</a></li>
  <li><a href="/encyclopedia/7-project/7-06-proektirovanie-i-arhitektura/design-patterns/117">7.06. Стратегия в C#</a></li>
  <li><a href="/encyclopedia/7-project/7-06-proektirovanie-i-arhitektura/design-patterns/118">7.06. Итератор в C#</a></li>
  <li><a href="/encyclopedia/7-project/7-06-proektirovanie-i-arhitektura/design-patterns/119">7.06. Фабрика в C#</a></li>
  <li><a href="/encyclopedia/7-project/7-06-proektirovanie-i-arhitektura/design-patterns/120">7.06. Команда в C#</a></li>
  <li><a href="/encyclopedia/7-project/7-06-proektirovanie-i-arhitektura/design-patterns/121">7.06. Наблюдатель в C#</a></li>
  <li><a href="/encyclopedia/7-project/7-06-proektirovanie-i-arhitektura/design-patterns/122">7.06. Цепочка обязанностей в Java</a></li>
  <li><a href="/encyclopedia/7-project/7-06-proektirovanie-i-arhitektura/design-patterns/123">7.06. Итератор в Java</a></li>
  <li><a href="/encyclopedia/7-project/7-06-proektirovanie-i-arhitektura/design-patterns/124">7.06. Посредник в Java</a></li>
  <li><a href="/encyclopedia/7-project/7-06-proektirovanie-i-arhitektura/design-patterns/125">7.06. Мементо в Java</a></li>
  <li><a href="/encyclopedia/7-project/7-06-proektirovanie-i-arhitektura/design-patterns/126">7.06. Команда в Java</a></li>
  <li><a href="/encyclopedia/7-project/7-06-proektirovanie-i-arhitektura/design-patterns/127">7.06. Наблюдатель в Java</a></li>
  <li><a href="/encyclopedia/7-project/7-06-proektirovanie-i-arhitektura/design-patterns/128">7.06. Proxy в Java</a></li>
  <li><a href="/encyclopedia/7-project/7-06-proektirovanie-i-arhitektura/design-patterns/129">7.06. Фасад в Java</a></li>
  <li><a href="/encyclopedia/7-project/7-06-proektirovanie-i-arhitektura/design-patterns/130">7.06. Builder в Java</a></li>
  <li><a href="/encyclopedia/7-project/7-06-proektirovanie-i-arhitektura/design-patterns/131">7.06. Bridge в Java</a></li>
  <li><a href="/encyclopedia/7-project/7-06-proektirovanie-i-arhitektura/design-patterns/132">7.06. Composite в Java</a></li>
  <li><a href="/encyclopedia/7-project/7-06-proektirovanie-i-arhitektura/design-patterns/133">7.06. Decorator в Java</a></li>
  <li><a href="/encyclopedia/7-project/7-06-proektirovanie-i-arhitektura/design-patterns/134">7.06. Prototype в Java</a></li>
  <li><a href="/encyclopedia/7-project/7-06-proektirovanie-i-arhitektura/design-patterns/135">7.06. Abstract Factory в Java</a></li>
  <li><a href="/encyclopedia/7-project/7-06-proektirovanie-i-arhitektura/design-patterns/136">7.06. Factory Method в Java</a></li>
  <li><a href="/encyclopedia/7-project/7-06-proektirovanie-i-arhitektura/design-patterns/137">7.06. Adapter в Java</a></li>
  <li><a href="/encyclopedia/7-project/7-06-proektirovanie-i-arhitektura/design-patterns/138">7.06. Singleton в Java</a></li>
  <li><a href="/encyclopedia/7-project/7-06-proektirovanie-i-arhitektura/design-patterns/139">7.06. Strategy в Java</a></li>
  <li><a href="/encyclopedia/7-project/7-06-proektirovanie-i-arhitektura/design-patterns/140">7.06. GoF в Java - большой гид</a></li>
  <li><a href="/encyclopedia/7-project/7-06-proektirovanie-i-arhitektura/design-patterns/141">7.06. Частые паттерны GoF</a></li>
  <li><a href="/encyclopedia/7-project/7-06-proektirovanie-i-arhitektura/design-patterns/142">7.06. Принципы перед паттернами</a></li>
  <li><a href="/encyclopedia/7-project/7-06-proektirovanie-i-arhitektura/design-patterns/143">7.06. Составные паттерны и MVC</a></li>
  <li><a href="/encyclopedia/8-infra-security/8-00-osnovy-infrastruktury/2">8.00. Основы развития информационных систем</a></li>
</ul>

### Проектирование

<ul class="it-toc-articles">
  <li><a href="/encyclopedia/7-project/7-06-proektirovanie-i-arhitektura/design/1">7.06. Проектирование программных систем</a></li>
  <li><a href="/encyclopedia/7-project/7-06-proektirovanie-i-arhitektura/design/21">7.06. Проектирование распределенных систем</a></li>
  <li><a href="/encyclopedia/7-project/7-06-proektirovanie-i-arhitektura/design/116">7.06. Проектирование баз данных</a></li>
  <li><a href="/encyclopedia/7-project/7-06-proektirovanie-i-arhitektura/design/117">7.06. Проектирование API и интеграций</a></li>
  <li><a href="/encyclopedia/7-project/7-06-proektirovanie-i-arhitektura/design/118">7.06. Паттерны микросервисной архитектуры</a></li>
  <li><a href="/encyclopedia/7-project/7-06-proektirovanie-i-arhitektura/design/119">7.06. Проектирование веб-разработки</a></li>
  <li><a href="/encyclopedia/7-project/7-06-proektirovanie-i-arhitektura/design/211">7.06. Хранилища DWH и ETL-процессы</a></li>
  <li><a href="/encyclopedia/7-project/7-06-proektirovanie-i-arhitektura/design/212">7.06. Уровни развития API и модель Ричардсона</a></li>
  <li><a href="/encyclopedia/7-project/7-06-proektirovanie-i-arhitektura/design/213">7.06. Методы и ключ идемпотентности</a></li>
  <li><a href="/encyclopedia/7-project/7-06-proektirovanie-i-arhitektura/design/1111">7.06. Подходы к проектированию</a></li>
  <li><a href="/encyclopedia/7-project/7-06-proektirovanie-i-arhitektura/design/1112">7.06. Принципы проектирования</a></li>
  <li><a href="/encyclopedia/7-project/7-06-proektirovanie-i-arhitektura/design/1113">7.06. Проектирование сервисов и методов</a></li>
  <li><a href="/encyclopedia/7-project/7-06-proektirovanie-i-arhitektura/design/1114">7.06. Проектирование функциональных UI</a></li>
  <li><a href="/encyclopedia/7-project/7-06-proektirovanie-i-arhitektura/design/1116">7.06. Проектирование под нефункциональные требования</a></li>
  <li><a href="/encyclopedia/7-project/7-06-proektirovanie-i-arhitektura/design/1117">7.06. Документация как инструмент проектирования</a></li>
  <li><a href="/encyclopedia/7-project/7-06-proektirovanie-i-arhitektura/design/1171">7.06. Публичный API, OAuth 2.0 и webhooks</a></li>
  <li><a href="/encyclopedia/7-project/7-06-proektirovanie-i-arhitektura/design/1172">7.06. mTLS, JWS-подпись webhooks и AsyncAPI с outbox</a></li>
  <li><a href="/encyclopedia/7-project/7-06-proektirovanie-i-arhitektura/design/2111">7.06. Лестница проектирования систем</a></li>
  <li><a href="/encyclopedia/7-project/7-06-proektirovanie-i-arhitektura/design/2112">7.06. Вертикальное масштабирование</a></li>
  <li><a href="/encyclopedia/7-project/7-06-proektirovanie-i-arhitektura/design/2113">7.06. Горизонтальное масштабирование</a></li>
  <li><a href="/encyclopedia/7-project/7-06-proektirovanie-i-arhitektura/design/2114">7.06. Горизонтальное дублирование</a></li>
  <li><a href="/encyclopedia/7-project/7-06-proektirovanie-i-arhitektura/design/2115">7.06. Competing Consumer Pattern</a></li>
  <li><a href="/encyclopedia/7-project/7-06-proektirovanie-i-arhitektura/design/2116">7.06. Read Replicas</a></li>
  <li><a href="/encyclopedia/7-project/7-06-proektirovanie-i-arhitektura/design/2117">7.06. Shared Nothing Architecture</a></li>
  <li><a href="/encyclopedia/7-project/7-06-proektirovanie-i-arhitektura/design/2118">7.06. Shared Storage Architecture</a></li>
  <li><a href="/encyclopedia/7-project/7-06-proektirovanie-i-arhitektura/design/2119">7.06. Single Node architecture</a></li>
  <li><a href="/encyclopedia/7-project/7-06-proektirovanie-i-arhitektura/design/2120">7.06. Модельная архитектура микросервисов</a></li>
  <li><a href="/encyclopedia/7-project/7-06-proektirovanie-i-arhitektura/design/2121">7.06. Стратегии совместного использования кода в микросервисах</a></li>
  <li><a href="/encyclopedia/7-project/7-06-proektirovanie-i-arhitektura/design/2122">7.06. CQRS</a></li>
  <li><a href="/encyclopedia/7-project/7-06-proektirovanie-i-arhitektura/design/2123">7.06. Event Sourcing</a></li>
  <li><a href="/encyclopedia/7-project/7-06-proektirovanie-i-arhitektura/design/2124">7.06. Saga</a></li>
  <li><a href="/encyclopedia/7-project/7-06-proektirovanie-i-arhitektura/design/2125">7.06. Strangler Fig</a></li>
  <li><a href="/encyclopedia/7-project/7-06-proektirovanie-i-arhitektura/design/2126">7.06. Модульный монолит</a></li>
  <li><a href="/encyclopedia/7-project/7-06-proektirovanie-i-arhitektura/design/2127">7.06. Событийно-ориентированная архитектура</a></li>
  <li><a href="/encyclopedia/7-project/7-06-proektirovanie-i-arhitektura/design/2128">7.06. Сервисно-ориентированная архитектура</a></li>
  <li><a href="/encyclopedia/7-project/7-06-proektirovanie-i-arhitektura/design/2129">7.06. Пространственная архитектура</a></li>
  <li><a href="/encyclopedia/7-project/7-06-proektirovanie-i-arhitektura/design/2130">7.06. Архитектура конвейера</a></li>
  <li><a href="/encyclopedia/7-project/7-06-proektirovanie-i-arhitektura/design/2131">7.06. Одноранговая архитектура</a></li>
  <li><a href="/encyclopedia/7-project/7-06-proektirovanie-i-arhitektura/design/2132">7.06. Чистая архитектура</a></li>
  <li><a href="/encyclopedia/7-project/7-06-proektirovanie-i-arhitektura/design/2133">7.06. Многоуровневая архитектура</a></li>
  <li><a href="/encyclopedia/7-project/7-06-proektirovanie-i-arhitektura/design/2134">7.06. Надежность и доступность</a></li>
  <li><a href="/encyclopedia/7-project/7-06-proektirovanie-i-arhitektura/design/2135">7.06. Уровни SLA и реальное время простоя</a></li>
  <li><a href="/encyclopedia/7-project/7-06-proektirovanie-i-arhitektura/design/2136">7.06. Инженерия устойчивости</a></li>
  <li><a href="/encyclopedia/7-project/7-06-proektirovanie-i-arhitektura/design/2137">7.06. Масштабирование чтения и записи в веб-приложении</a></li>
  <li><a href="/encyclopedia/7-project/7-06-proektirovanie-i-arhitektura/design/2138">7.06. Стратегии работы с базами данных при разных нагрузках</a></li>
  <li><a href="/encyclopedia/7-project/7-06-proektirovanie-i-arhitektura/design/2139">7.06. GRASP и паттерн ADR для веб-бэкенда</a></li>
  <li><a href="/encyclopedia/7-project/7-06-proektirovanie-i-arhitektura/design/2140">7.06. Event Storming — совместное проектирование домена</a></li>
  <li><a href="/encyclopedia/7-project/7-06-proektirovanie-i-arhitektura/design/2141">7.06. Оценка архитектурных альтернатив</a></li>
  <li><a href="/encyclopedia/7-project/7-06-proektirovanie-i-arhitektura/design/2142">7.06. Threat modeling для архитекторов</a></li>
  <li><a href="/encyclopedia/7-project/7-06-proektirovanie-i-arhitektura/design/2143">7.06. Clean Architecture на ASP.NET Core</a></li>
  <li><a href="/encyclopedia/7-project/7-06-proektirovanie-i-arhitektura/design/2144">7.06. Паттерны перехода от монолита к микросервисам</a></li>
</ul>

---

## Интеллектуальные права

<ul class="it-toc-articles">
  <li><a href="/encyclopedia/7-project/7-07-intellektualnye-prava/1">7.07. Права интеллектуальной собственности в IT</a></li>
  <li><a href="/encyclopedia/7-project/7-07-intellektualnye-prava/111">7.07. Коммерческая тайна и защита исходного кода</a></li>
  <li><a href="/encyclopedia/7-project/7-07-intellektualnye-prava/112">7.07. Регистрация авторских прав и патентов</a></li>
  <li><a href="/encyclopedia/7-project/7-07-intellektualnye-prava/113">7.07. Юридические соглашения в разработке ПО</a></li>
  <li><a href="/encyclopedia/7-project/7-07-intellektualnye-prava/114">7.07. Лицензирование программного обеспечения</a></li>
  <li><a href="/encyclopedia/7-project/7-07-intellektualnye-prava/115">7.07. Передача прав и наследование цифровых активов</a></li>
  <li><a href="/encyclopedia/7-project/7-07-intellektualnye-prava/116">7.07. Цифровые активы</a></li>
  <li><a href="/encyclopedia/7-project/7-07-intellektualnye-prava/998">7.07. Интеллектуальные права — итоги</a></li>
  <li><a href="/encyclopedia/7-project/7-07-intellektualnye-prava/999">7.07. Интеллектуальные права — чек-лист</a></li>
  <li><a href="/encyclopedia/7-project/7-07-intellektualnye-prava/1141">7.07. Механизмы лицензионных ключей и активации</a></li>
</ul>

---

## Техническое письмо

<ul class="it-toc-articles">
  <li><a href="/encyclopedia/7-project/7-08-tehnicheskoe-pismo/1">7.08. Техническое письмо</a></li>
  <li><a href="/encyclopedia/7-project/7-08-tehnicheskoe-pismo/3">7.08. Документирование API с использованием Swagger/OpenAPI</a></li>
  <li><a href="/encyclopedia/7-project/7-08-tehnicheskoe-pismo/11">7.08. Стилевые паттерны технической документации</a></li>
  <li><a href="/encyclopedia/7-project/7-08-tehnicheskoe-pismo/12">7.08. Техническое задание по ГОСТ</a></li>
  <li><a href="/encyclopedia/7-project/7-08-tehnicheskoe-pismo/13">7.08. Спецификация по ГОСТ</a></li>
  <li><a href="/encyclopedia/7-project/7-08-tehnicheskoe-pismo/14">7.08. ПМИ по ГОСТ</a></li>
  <li><a href="/encyclopedia/7-project/7-08-tehnicheskoe-pismo/15">7.08. ПЗ по ГОСТ</a></li>
  <li><a href="/encyclopedia/7-project/7-08-tehnicheskoe-pismo/16">7.08. Руководство системного программиста по ГОСТ</a></li>
  <li><a href="/encyclopedia/7-project/7-08-tehnicheskoe-pismo/17">7.08. Руководство программиста по ГОСТ</a></li>
  <li><a href="/encyclopedia/7-project/7-08-tehnicheskoe-pismo/18">7.08. Руководство оператора по ГОСТ</a></li>
  <li><a href="/encyclopedia/7-project/7-08-tehnicheskoe-pismo/19">7.08. Руководство по техническому обслуживанию по ГОСТ</a></li>
  <li><a href="/encyclopedia/7-project/7-08-tehnicheskoe-pismo/20">7.08. Руководство пользователя по ГОСТ</a></li>
  <li><a href="/encyclopedia/7-project/7-08-tehnicheskoe-pismo/21">7.08. Руководство администратора по ГОСТ</a></li>
  <li><a href="/encyclopedia/7-project/7-08-tehnicheskoe-pismo/22">7.08. Навигатор по нормативной документации</a></li>
  <li><a href="/encyclopedia/7-project/7-08-tehnicheskoe-pismo/998">7.08. Техническое письмо — итоги</a></li>
  <li><a href="/encyclopedia/7-project/7-08-tehnicheskoe-pismo/999">7.08. Техническое письмо — чек-лист</a></li>
  <li><a href="/encyclopedia/7-project/7-08-tehnicheskoe-pismo/1001">7.08. Документация</a></li>
  <li><a href="/encyclopedia/7-project/7-08-tehnicheskoe-pismo/1002">7.08. Виды документации</a></li>
  <li><a href="/encyclopedia/7-project/7-08-tehnicheskoe-pismo/1003">7.08. Технический писатель</a></li>
  <li><a href="/encyclopedia/7-project/7-08-tehnicheskoe-pismo/1004">7.08. Качество документации</a></li>
  <li><a href="/encyclopedia/7-project/7-08-tehnicheskoe-pismo/1005">7.08. Архитектура документации</a></li>
  <li><a href="/encyclopedia/7-project/7-08-tehnicheskoe-pismo/1006">7.08. Экосистема технического письма</a></li>
  <li><a href="/encyclopedia/7-project/7-08-tehnicheskoe-pismo/1007">7.08. Word и Excel в проектной документации</a></li>
</ul>

---

## Базы знаний и задачники

<ul class="it-toc-articles">
  <li><a href="/encyclopedia/7-project/7-09-bazy-znaniy-i-zadachniki/1">7.09. Базы знаний в IT-проектах</a></li>
  <li><a href="/encyclopedia/7-project/7-09-bazy-znaniy-i-zadachniki/2">7.09. Системы управления задачами и баг-трекинг</a></li>
  <li><a href="/encyclopedia/7-project/7-09-bazy-znaniy-i-zadachniki/11">7.09. Организация внутренней Wiki</a></li>
  <li><a href="/encyclopedia/7-project/7-09-bazy-znaniy-i-zadachniki/21">7.09. Jira, YouTrack и настройка трекера</a></li>
  <li><a href="/encyclopedia/7-project/7-09-bazy-znaniy-i-zadachniki/22">7.09. Wiki, Confluence и структура базы знаний</a></li>
  <li><a href="/encyclopedia/7-project/7-09-bazy-znaniy-i-zadachniki/23">7.09. ADR и docs-as-code</a></li>
  <li><a href="/encyclopedia/7-project/7-09-bazy-znaniy-i-zadachniki/24">7.09. Онбординг-пакет в базе знаний</a></li>
  <li><a href="/encyclopedia/7-project/7-09-bazy-znaniy-i-zadachniki/111">7.09. Docusaurus</a></li>
  <li><a href="/encyclopedia/7-project/7-09-bazy-znaniy-i-zadachniki/998">7.09. Базы знаний и задачники — итоги</a></li>
  <li><a href="/encyclopedia/7-project/7-09-bazy-znaniy-i-zadachniki/999">7.09. Базы знаний и задачники — чек-лист</a></li>
</ul>

---

## Культура кода

<ul class="it-toc-articles">
  <li><a href="/encyclopedia/7-project/7-10-kultura-koda/1">7.10. Культура написания и поддержки кода</a></li>
  <li><a href="/encyclopedia/7-project/7-10-kultura-koda/2">7.10. Цикломатическая сложность и читаемость кода</a></li>
  <li><a href="/encyclopedia/7-project/7-10-kultura-koda/3">7.10. Культура кода — итоги</a></li>
  <li><a href="/encyclopedia/7-project/7-10-kultura-koda/4">7.10. Культура кода — чек-лист</a></li>
  <li><a href="/encyclopedia/7-project/7-10-kultura-koda/5">7.10. MAPPER — модель кода и предметная область</a></li>
  <li><a href="/encyclopedia/7-project/7-10-kultura-koda/6">7.10. Анемичные модели и примитивная одержимость</a></li>
  <li><a href="/encyclopedia/7-project/7-10-kultura-koda/7">7.10. Изменяемость, побочные эффекты и неизменяемые данные</a></li>
  <li><a href="/encyclopedia/7-project/7-10-kultura-koda/8">7.10. Условия, null и явные контракты</a></li>
  <li><a href="/encyclopedia/7-project/7-10-kultura-koda/9">7.10. Связанность, глобалы и запахи модульности</a></li>
  <li><a href="/encyclopedia/7-project/7-10-kultura-koda/10">7.10. YAGNI, быстрый провал и техдолг в коде</a></li>
  <li><a href="/encyclopedia/7-project/7-10-kultura-koda/11">7.10. Тесты как часть культуры кода</a></li>
  <li><a href="/encyclopedia/7-project/7-10-kultura-koda/12">7.10. Исключения и обработка ошибок в читаемом коде</a></li>
  <li><a href="/encyclopedia/7-project/7-10-kultura-koda/13">7.10. Справочник тем чистого кода</a></li>
  <li><a href="/encyclopedia/7-project/7-10-kultura-koda/14">7.10. Декларативный код — что и как</a></li>
</ul>

---

## Легаси-код

<ul class="it-toc-articles">
  <li><a href="/encyclopedia/7-project/7-11-legasi-kod/1">7.11. Что такое легаси и как его узнать</a></li>
  <li><a href="/encyclopedia/7-project/7-11-legasi-kod/2">7.11. Понимание легаси-системы</a></li>
  <li><a href="/encyclopedia/7-project/7-11-legasi-kod/3">7.11. Безопасные изменения в легаси</a></li>
  <li><a href="/encyclopedia/7-project/7-11-legasi-kod/4">7.11. Стратегии модернизации легаси</a></li>
  <li><a href="/encyclopedia/7-project/7-11-legasi-kod/5">7.11. Легаси-код — итоги</a></li>
  <li><a href="/encyclopedia/7-project/7-11-legasi-kod/6">7.11. Легаси-код — чек-лист</a></li>
</ul>

---

## Конструирование ПО

<ul class="it-toc-articles">
  <li><a href="/encyclopedia/7-project/7-12-konstruirovanie-po/1">7.12. Конструирование ПО — понятие, жизненный цикл, стандарты</a></li>
  <li><a href="/encyclopedia/7-project/7-12-konstruirovanie-po/2">7.12. Связность и сцепление модулей</a></li>
  <li><a href="/encyclopedia/7-project/7-12-konstruirovanie-po/3">7.12. Модели жизненного цикла для конструирования</a></li>
  <li><a href="/encyclopedia/7-project/7-12-konstruirovanie-po/4">7.12. Планирование конструирования — PERT, CPM, оценки</a></li>
  <li><a href="/encyclopedia/7-project/7-12-konstruirovanie-po/5">7.12. Языки конструирования программных систем</a></li>
  <li><a href="/encyclopedia/7-project/7-12-konstruirovanie-po/6">7.12. Тестирование на стадии конструирования</a></li>
  <li><a href="/encyclopedia/7-project/7-12-konstruirovanie-po/998">7.12. Конструирование ПО — итоги</a></li>
  <li><a href="/encyclopedia/7-project/7-12-konstruirovanie-po/999">7.12. Конструирование ПО — чек-лист</a></li>
</ul>

---

## Экономика производства ПО

<ul class="it-toc-articles">
  <li><a href="/encyclopedia/7-project/7-13-ekonomika-proizvodstva-po/1">7.13. Модель COCOMO II — прогноз трудоёмкости и стоимости</a></li>
  <li><a href="/encyclopedia/7-project/7-13-ekonomika-proizvodstva-po/2">7.13. Модель качества ISO/IEC 25010</a></li>
  <li><a href="/encyclopedia/7-project/7-13-ekonomika-proizvodstva-po/3">7.13. Управление конфигурацией программных комплексов</a></li>
  <li><a href="/encyclopedia/7-project/7-13-ekonomika-proizvodstva-po/4">7.13. Сопровождение программных комплексов</a></li>
  <li><a href="/encyclopedia/7-project/7-13-ekonomika-proizvodstva-po/5">7.13. Заказные системы реального времени</a></li>
  <li><a href="/encyclopedia/7-project/7-13-ekonomika-proizvodstva-po/6">7.13. Сертификация и приёмка заказных программных продуктов</a></li>
  <li><a href="/encyclopedia/7-project/7-13-ekonomika-proizvodstva-po/7">7.13. Квалификация команды для заказной разработки</a></li>
  <li><a href="/encyclopedia/7-project/7-13-ekonomika-proizvodstva-po/998">7.13. Экономика производства ПО — итоги</a></li>
</ul>

---

## Scrum

<ul class="it-toc-articles">
  <li><a href="/encyclopedia/7-project/7-14-scrum/1">7.14. Зачем Scrum и откуда он взялся</a></li>
  <li><a href="/encyclopedia/7-project/7-14-scrum/2">7.14. Scrum — роли, артефакты и события</a></li>
  <li><a href="/encyclopedia/7-project/7-14-scrum/3">7.14. Scrum — команда и Scrum Master</a></li>
  <li><a href="/encyclopedia/7-project/7-14-scrum/4">7.14. Scrum — спринт, ритм и прозрачность</a></li>
  <li><a href="/encyclopedia/7-project/7-14-scrum/5">7.14. Scrum — потери, фокус и готово</a></li>
  <li><a href="/encyclopedia/7-project/7-14-scrum/6">7.14. Scrum — бэклог, приоритеты и оценка</a></li>
  <li><a href="/encyclopedia/7-project/7-14-scrum/7">7.14. Scrum — внедрение и типичные ошибки</a></li>
  <li><a href="/encyclopedia/7-project/7-14-scrum/998">7.14. Scrum — итоги раздела</a></li>
  <li><a href="/encyclopedia/7-project/7-14-scrum/999">7.14. Scrum — чек-лист самопроверки</a></li>
</ul>

---

## Внедрение ERP

<ul class="it-toc-articles">
  <li><a href="/encyclopedia/7-project/7-15-vnedrenie-erp-sistem/1">7.15. ERP-система — что это и зачем бизнесу</a></li>
  <li><a href="/encyclopedia/7-project/7-15-vnedrenie-erp-sistem/2">7.15. Выбор ERP — требования, тендер и fit-gap</a></li>
  <li><a href="/encyclopedia/7-project/7-15-vnedrenie-erp-sistem/3">7.15. Методологии внедрения ERP</a></li>
  <li><a href="/encyclopedia/7-project/7-15-vnedrenie-erp-sistem/4">7.15. Участники проекта внедрения ERP</a></li>
  <li><a href="/encyclopedia/7-project/7-15-vnedrenie-erp-sistem/5">7.15. Жизненный цикл проекта внедрения ERP</a></li>
  <li><a href="/encyclopedia/7-project/7-15-vnedrenie-erp-sistem/6">7.15. Обследование и прототип ERP</a></li>
  <li><a href="/encyclopedia/7-project/7-15-vnedrenie-erp-sistem/7">7.15. Срок и бюджет внедрения ERP</a></li>
  <li><a href="/encyclopedia/7-project/7-15-vnedrenie-erp-sistem/8">7.15. Риски проекта внедрения ERP</a></li>
  <li><a href="/encyclopedia/7-project/7-15-vnedrenie-erp-sistem/9">7.15. Разработка, тесты и опытная эксплуатация ERP</a></li>
  <li><a href="/encyclopedia/7-project/7-15-vnedrenie-erp-sistem/10">7.15. Промышленная эксплуатация и сопровождение ERP</a></li>
  <li><a href="/encyclopedia/7-project/7-15-vnedrenie-erp-sistem/998">7.15. Внедрение ERP — итоги и шпаргалка</a></li>
  <li><a href="/encyclopedia/7-project/7-15-vnedrenie-erp-sistem/999">7.15. Внедрение ERP — чек-лист самопроверки</a></li>
</ul>

---

## ITSM и ИТ-услуги

<ul class="it-toc-articles">
  <li><a href="/encyclopedia/7-project/7-16-itsm-i-it-uslugi/1">7.16. ITSM — управление ИТ-услугами</a></li>
  <li><a href="/encyclopedia/7-project/7-16-itsm-i-it-uslugi/2">7.16. SLA — соглашение об уровне предоставления услуги</a></li>
  <li><a href="/encyclopedia/7-project/7-16-itsm-i-it-uslugi/3">7.16. ITIL — практики управления ИТ-услугами</a></li>
  <li><a href="/encyclopedia/7-project/7-16-itsm-i-it-uslugi/4">7.16. ITAM — управление ИТ-активами</a></li>
  <li><a href="/encyclopedia/7-project/7-16-itsm-i-it-uslugi/5">7.16. Словарь ITIL 4 и ИТ-услуг</a></li>
</ul>

---

## Начало работы на проекте

<ul class="it-toc-articles">
  <li><a href="/encyclopedia/7-project/7-17-nachalo-raboty-na-proekte/1">7.17. От идеи к старту проекта</a></li>
  <li><a href="/encyclopedia/7-project/7-17-nachalo-raboty-na-proekte/2">7.17. Команда, роли и найм на старте проекта</a></li>
  <li><a href="/encyclopedia/7-project/7-17-nachalo-raboty-na-proekte/3">7.17. Инфраструктура, доступы и администрирование на старте</a></li>
  <li><a href="/encyclopedia/7-project/7-17-nachalo-raboty-na-proekte/4">7.17. Репозиторий, трекер и wiki на старте проекта</a></li>
  <li><a href="/encyclopedia/7-project/7-17-nachalo-raboty-na-proekte/5">7.17. Архитектура и проектирование на старте проекта</a></li>
  <li><a href="/encyclopedia/7-project/7-17-nachalo-raboty-na-proekte/6">7.17. План, декомпозиция и первые задачи</a></li>
  <li><a href="/encyclopedia/7-project/7-17-nachalo-raboty-na-proekte/7">7.17. Онбординг участника проекта</a></li>
  <li><a href="/encyclopedia/7-project/7-17-nachalo-raboty-na-proekte/998">7.17. Начало работы на проекте — итоги раздела</a></li>
  <li><a href="/encyclopedia/7-project/7-17-nachalo-raboty-na-proekte/999">7.17. Начало работы на проекте — чек-лист самопроверки</a></li>
</ul>

---

## Kanban

<ul class="it-toc-articles">
  <li><a href="/encyclopedia/7-project/7-18-kanban/1">7.18. История Kanban и отличие от Scrum</a></li>
  <li><a href="/encyclopedia/7-project/7-18-kanban/2">7.18. Доска Kanban, колонки и WIP-лимиты</a></li>
  <li><a href="/encyclopedia/7-project/7-18-kanban/3">7.18. Классы обслуживания и приоритеты в Kanban</a></li>
  <li><a href="/encyclopedia/7-project/7-18-kanban/4">7.18. Метрики потока в Kanban</a></li>
  <li><a href="/encyclopedia/7-project/7-18-kanban/5">7.18. Когда Kanban лучше Scrum</a></li>
  <li><a href="/encyclopedia/7-project/7-18-kanban/6">7.18. Внедрение Kanban и типичные ошибки</a></li>
  <li><a href="/encyclopedia/7-project/7-18-kanban/7">7.18. Kanban в поддержке и инцидентах</a></li>
  <li><a href="/encyclopedia/7-project/7-18-kanban/998">7.18. Kanban — итоги раздела</a></li>
  <li><a href="/encyclopedia/7-project/7-18-kanban/999">7.18. Kanban — чек-лист самопроверки</a></li>
</ul>

---

## Продуктовые роли

<ul class="it-toc-articles">
  <li><a href="/encyclopedia/7-project/7-19-produktovye-roli/1">7.19. Product Owner и Product Manager</a></li>
  <li><a href="/encyclopedia/7-project/7-19-produktovye-roli/998">7.19. Продуктовые роли — итоги раздела</a></li>
  <li><a href="/encyclopedia/7-project/7-19-produktovye-roli/999">7.19. Продуктовые роли — чек-лист самопроверки</a></li>
</ul>

---

## ADR и архитектурная память

<ul class="it-toc-articles">
  <li><a href="/encyclopedia/7-project/7-20-adr-i-arhitekturnaya-pamyat/1">7.20. ADR — запись архитектурных решений</a></li>
  <li><a href="/encyclopedia/7-project/7-20-adr-i-arhitekturnaya-pamyat/998">7.20. ADR — итоги раздела</a></li>
  <li><a href="/encyclopedia/7-project/7-20-adr-i-arhitekturnaya-pamyat/999">7.20. ADR — чек-лист самопроверки</a></li>
</ul>

---

## Инциденты и эксплуатация

<ul class="it-toc-articles">
  <li><a href="/encyclopedia/7-project/7-21-incidenty-i-ekspluatatsiya/1">7.21. Инциденты, on-call и postmortem</a></li>
  <li><a href="/encyclopedia/7-project/7-21-incidenty-i-ekspluatatsiya/998">7.21. Инциденты — итоги раздела</a></li>
  <li><a href="/encyclopedia/7-project/7-21-incidenty-i-ekspluatatsiya/999">7.21. Инциденты — чек-лист самопроверки</a></li>
</ul>

---

## Управление изменениями

<ul class="it-toc-articles">
  <li><a href="/encyclopedia/7-project/7-22-upravlenie-izmeneniyami/1">7.22. Change request и управление изменениями scope</a></li>
  <li><a href="/encyclopedia/7-project/7-22-upravlenie-izmeneniyami/998">7.22. Управление изменениями — итоги</a></li>
  <li><a href="/encyclopedia/7-project/7-22-upravlenie-izmeneniyami/999">7.22. Управление изменениями — чек-лист</a></li>
</ul>

---

## Удалённая команда

<ul class="it-toc-articles">
  <li><a href="/encyclopedia/7-project/7-23-udalennaya-komanda/1">7.23. Удалённая и распределённая команда</a></li>
  <li><a href="/encyclopedia/7-project/7-23-udalennaya-komanda/998">7.23. Удалённая команда — итоги</a></li>
  <li><a href="/encyclopedia/7-project/7-23-udalennaya-komanda/999">7.23. Удалённая команда — чек-лист</a></li>
</ul>

---

## ИИ в проектном процессе

<ul class="it-toc-articles">
  <li><a href="/encyclopedia/7-project/7-24-ii-v-proektnom-protsesse/1">7.24. ИИ и LLM в командной разработке</a></li>
  <li><a href="/encyclopedia/7-project/7-24-ii-v-proektnom-protsesse/998">7.24. ИИ в проекте — итоги</a></li>
  <li><a href="/encyclopedia/7-project/7-24-ii-v-proektnom-protsesse/999">7.24. ИИ в проекте — чек-лист</a></li>
</ul>

---

## Доставка и готовность

<ul class="it-toc-articles">
  <li><a href="/encyclopedia/7-project/7-25-dostavka-i-gotovnost/1">7.25. Definition of Ready</a></li>
  <li><a href="/encyclopedia/7-project/7-25-dostavka-i-gotovnost/2">7.25. Definition of Done и release notes</a></li>
  <li><a href="/encyclopedia/7-project/7-25-dostavka-i-gotovnost/3">7.25. Feature flags — постепенный выкат и kill switch</a></li>
  <li><a href="/encyclopedia/7-project/7-25-dostavka-i-gotovnost/998">7.25. Доставка и готовность — итоги</a></li>
  <li><a href="/encyclopedia/7-project/7-25-dostavka-i-gotovnost/999">7.25. Доставка и готовность — чек-лист</a></li>
</ul>
