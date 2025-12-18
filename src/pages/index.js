import clsx from 'clsx';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import Link from '@docusaurus/Link';
import AnimatedBackground from '@site/src/components/AnimatedBackground';

import styles from './index.module.css';

function HomepageHeader() {
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <div className={styles.heroCard}>
        <Heading as="h1" className="hero__title">
          <Link to="/about/project"><img src="/img/logoITU.png" alt="Вселенная IT"/></Link>
        </Heading>
        <p className="hero__subtitle">
          <img src="/img/docusaurus.png" alt="Вселенная IT" className={styles.emojiImage} /> "Вселенная IT" - единый и ультимативный гайд, который позволит изучить сферу IT в максимально полном объёме. 
          Здесь вы научитесь всем аспектам компьютеров, приложений и технологий, читать и писать <Link to="/section/code-dev">код </Link> 
          на нескольких <Link to="/section/languages">языках</Link>, <Link to="/encyclopedia/Проект/6.07.%20Аналитика/1">анализу</Link>, 
          <Link to="/encyclopedia/Проект/6.08.%20Тестирование/1"> тестированию</Link> и даже <Link to="/section/infra-security">информационной безопасности</Link>.
        Можно назвать это систематизированным курсом, открытой базой знаний и даже энциклопедией. Сейчас "Вселенная IT" находится на стадии экспертизы и редактуры -
         это самый долгий этап, когда нужно всё подправить, привести в порядок.
        </p>
        <p className="hero__subtitle">
          Это бесплатный и открытый <Link to="/about/project">проект</Link>, который я веду в одиночку, на чистом энтузиазме.
          Надеюсь, вам будет интересно!
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--primary button--lg"
            to="/section/basics">
            🔎 Начать изучение
          </Link>
          <Link
            className="button button--secondary button--lg"
            to="/toc">
            📋 Содержание
          </Link>
          <Link
            className="button button--secondary button--lg"
            to="/about/manifest">
            <img src="/img/docusaurus.png" alt="Вселенная IT" className={styles.emojiImage} /> Манифест и Правила
          </Link>
        </div>
        <div className={styles.author}>
          <p>👨‍💻 Автор — <strong><Link to="/about/author">Тагиров Тимур Владиславович</Link></strong></p>
          <p><img src="/img/docusaurus.png" alt="Вселенная IT" className={styles.emojiImage} /> Открытая база знаний по информационным технологиям</p>
        </div>
        </div>
      </div>
    </header>
  );
}

function HomepageTabs() {
  return (
    <section className="margin-vert--xl container">
      <Heading as="h2" className={styles.featuresTitle}>🗂 Состав энциклопедии</Heading>

      {/* Спойлер: Детям */}
      <details>
        <summary><strong>👦 Детям</strong></summary>
        <p>Этот раздел ориентирован на обучение <strong>детей 8–16 лет</strong>, сочетая игровой подход с системным введением в цифровую грамотность.
        Вместо упрощённых аналогий используется целостная модель IT-мира, адаптированная под когнитивные особенности возраста: от физического устройства компьютера и файловой системы до основ сетевой безопасности и алгоритмического мышления.
        Особое внимание уделено практической вовлечённости — работе с текстовыми и графическими редакторами, созданию презентаций, знакомству с блок-кодом (Scratch, Edublocks), а затем — с реальными языками (Python, JavaScript) в технически корректной, но доступной форме.
        Игровые механики интегрированы как инструмент понимания: жанровая классификация, моддинг, элементы разработки (Unity, Roblox) служат плацдармом для перехода к профессиональным компетенциям.
        Раздел закладывает именно <em>мышление разработчика</em>: «почему так устроено» и «как это можно изменить».</p>
        <p><img src="/img/docusaurus.png" alt="Вселенная IT" className={styles.emojiImage} /> Подробности — в <Link to="/section/forkids">разделе для детей</Link>.</p>
      </details>

      {/* Спойлер: Основы */}
      <details>
        <summary><strong>🧱 Основы</strong></summary>
        <p>Раздел <strong>«Основы»</strong> — фундаментальный вводный курс, формирующий единое понимание предметной области IT как целостной системы.
        Здесь систематизированы не только технические, но и социокультурные, экономические и исторические аспекты: от устройства ЭВМ и классификации данных до анализа рынка, карьерных траекторий и распространённых мифов индустрии.
        Ключевые категории — <em>информация</em> как объект обработки, <em>программа</em> как формализованный процесс, <em>интерфейс</em> как средство взаимодействия, <em>сеть</em> как среда передачи — вводятся с опорой на реальные примеры и проверяемые определения.
        Отдельно рассмотрены фундаментальные компетенции: поисковая грамотность (включая эффективное использование поисковых систем и ИИ), профессиональная коммуникация, эргономика и цифровая гигиена.
        После каждого подраздела предусмотрен чек-лист самопроверки, поддерживающий метакогнитивный контроль.
        Этот раздел задаёт общий <em>язык описания</em> для всей энциклопедии и рекомендуется к изучению до углубления в специализации.</p>
        <p><img src="/img/docusaurus.png" alt="Вселенная IT" className={styles.emojiImage} /> Полное содержание — в <Link to="/section/basics">разделе «Основы»</Link>.</p>
      </details>

      {/* Спойлер: Система и сеть */}
      <details>
        <summary><strong>🖥️ Система и сеть</strong></summary>
        <p>Раздел <strong>«Система и сеть»</strong> посвящён аппаратно-программной базе современных вычислительных систем и принципам сетевого взаимодействия.
        Рассматриваются операционные системы: от архитектуры ядра (микроядро, монолитное ядро) до особенностей Windows, Linux (включая продвинутую работу в терминале), macOS, Android и iOS.
        Даётся целостная модель сети: от физического уровня и протоколов (TCP/IP, DNS, HTTP) до сценариев подключения, NAT, cookies и механизмов государственного регулирования трафика.
        Отдельно освещены системное администрирование (установка ОС, настройка серверов, планирование задач, мониторинг), техническая поддержка и основы информационной безопасности.
        Эмпирически объясняется, что происходит при загрузке сайта — от ввода URL до отображения контента в браузере, что закрывает «чёрный ящик» для новичков и уточняет картину для опытных.
        Раздел обеспечивает понимание <em>инфраструктурного контекста</em>, в котором функционируют приложения и данные.</p>
        <p><img src="/img/docusaurus.png" alt="Вселенная IT" className={styles.emojiImage} /> Подробности — в <Link to="/section/system-network">разделе «Система и сеть»</Link>.</p>
      </details>

      {/* Спойлер: Данные и разметка */}
      <details>
        <summary><strong>📊 Данные и разметка</strong></summary>
        <p>Фокус раздела <strong>«Данные и разметка»</strong> — на природе данных, их представлении, хранении, обработке и визуализации.
        Начинается с теоретических основ: типизации, фундаментальных структур данных (массивы, списки, деревья, графы), теории реляционных баз данных (нормальные формы, реляционная алгебра).
        Затем следует практическая реализация: глубокое погружение в SQL — от DDL/DML до процедур, транзакций, индексов, оптимизации и процедурных расширений (PL/pgSQL, T-SQL), а также в NoSQL-подходы: документные (MongoDB), ключ-значение (Redis), колоночные (Cassandra), графовые БД.
        Параллельно разбираются форматы представления: от офисных (DOCX, XLSX) до структурированных (XML, JSON, YAML, Markdown) и разметочных (HTML, CSS), с акцентом на различие между <em>данными</em>, <em>метаданными</em> и <em>конфигурациями</em>.
        Раздел завершается темами анализа данных и data mining, формируя базу для работы с реальными наборами информации.
        Это — ядро цифровой грамотности любого IT-специалиста.</p>
        <p><img src="/img/docusaurus.png" alt="Вселенная IT" className={styles.emojiImage} /> Полное содержание — в <Link to="/section/data-markup">разделе «Данные и разметка»</Link>.</p>
      </details>

      {/* Спойлер: Код и разработка */}
      <details>
        <summary><strong>💻 Код и разработка</strong></summary>
        <p>Раздел <strong>«Код и разработка»</strong> формирует <em>инженерное мышление разработчика</em>, выходя за рамки синтаксиса конкретных языков.
        Рассматривается, что такое код, как он преобразуется и исполняется — от исходного текста через компиляцию/интерпретацию до машинных инструкций, включая архитектуру CPU, кэширование и представление данных в памяти.
        Даётся системное осмысление парадигм (процедурная, ООП, функциональная), уровней абстракции, модульности, управления зависимостями и асинхронностью.
        Ключевые концепции — алгоритмическая сложность, стек и куча, сборка мусора, битовые операции, ORM — представлены с технической глубиной, но без излишней формализации.
        Уделено внимание инженерной практике: работа с Git, отладка, проектирование десктопных и мобильных приложений, архитектура выполнения.
        Раздел не учит конкретному языку — он задаёт <em>метаязык описания кода</em>, необходимый для быстрого освоения любых технологий.
        Это — теоретический каркас, на который «навешиваются» языковые реализации.</p>
        <p><img src="/img/docusaurus.png" alt="Вселенная IT" className={styles.emojiImage} /> Глубокий разбор — в <Link to="/section/code-dev">разделе «Код и разработка»</Link>.</p>
      </details>

      {/* Спойлер: Программирование */}
      <details>
        <summary><strong>🗣️ Программирование</strong></summary>
        <p>Этот раздел — практическая реализация концепций из «Кода и разработки» на конкретных языках программирования.
        Охвачены как промышленные стандарты (C#, Java, Python, JavaScript/TypeScript), так и нишевые и исторически значимые (C++, Go, Rust, Kotlin, Ruby, Lua, Smalltalk, Groovy), включая классические (Си, Ассемблер, Pascal, Fortran, COBOL, Lisp, VB).
        Для каждого языка даётся: история и философия, архитектурные особенности (JVM, CLR, встраиваемость), синтаксис, типизация, управление памятью, парадигматические инструменты (например, метатаблицы в Lua), фреймворки (Spring, Django, React, .NET MAUI и др.), применение в реальных сценариях.
        Особое внимание — межъязыковым аналогиям: как реализуется асинхронность в JS (Promises), Python (async/await), C# (Task), Go (goroutines), что позволяет переносить знания между экосистемами.
        Раздел служит не только справочником, но и путеводителем по выбору инструмента под задачу, с акцентом на долгосрочную поддерживаемость и адекватность контекста.</p>
        <p><img src="/img/docusaurus.png" alt="Вселенная IT" className={styles.emojiImage} /> Исследуйте <Link to="/section/languages">языки программирования</Link> подробно.</p>
      </details>

      {/* Спойлер: Проект */}
      <details>
        <summary><strong>📋 Проект</strong></summary>
        <p>Раздел <strong>«Проект»</strong> переходит от индивидуального кода к <em>коллективной инженерной деятельности</em> — управлению жизненным циклом программного обеспечения.
        Освещены методологии разработки (включая специфику госзаказа по ГОСТ 19 и 34), управление командой, проектирование архитектуры (масштабируемость, параллелизм), культура кода (включая цикломатическую сложность), работа с легаси-системами.
        Центральное место занимают <em>документационные практики</em>: техническое письмо, составление ТЗ, спецификаций, ПМИ, ПЗ и других регламентированных ГОСТ документов — с акцентом на структуру, однозначность и проверяемость формулировок.
        Отдельно выделены <Link to="/encyclopedia/Проект/6.07.%20Аналитика/1">анализ</Link> (сбор и формализация требований, моделирование бизнес-процессов) и <Link to="/encyclopedia/Проект/6.08.%20Тестирование/1">тестирование</Link> (стратегии, виды, автоматизация, метрики качества).
        Также рассматриваются правоотношения (интеллектуальные права), бизнес-контекст и этика инженерной деятельности.
        Это — раздел профессиональной зрелости, необходимый для перехода от исполнителя к проектировщику и техлиду.</p>
        <p><img src="/img/docusaurus.png" alt="Вселенная IT" className={styles.emojiImage} /> Подробности — в <Link to="/section/project">разделе «Проект»</Link>.</p>
      </details>

      {/* Спойлер: Инфраструктура и безопасность */}
      <details>
        <summary><strong>🚀 Инфраструктура и безопасность</strong></summary>
        <p>В разделе <strong>«Инфраструктура и безопасность»</strong> фокус смещается с разработки на <em>эксплуатацию и сопровождение</em>: как приложение становится устойчивым продуктом.
        Рассматриваются облачные платформы (IaaS, PaaS, SaaS), контейнеризация (Docker), оркестрация (Kubernetes), DevOps-практики (CI/CD, мониторинг, логирование), микросервисная архитектура и интеграционные паттерны (REST, gRPC, очереди сообщений).
        Отдельный блок посвящён Low-code/No-code платформам — их возможностям, ограничениям и месту в экосистеме: когда они уместны, а когда создают долгосрочные риски.
        Безопасность рассматривается как <em>сквозной атрибут</em>: от защиты кода (статический анализ, управление уязвимостями в зависимостях) и данных (шифрование, резервное копирование, GDPR/RoHS-совместимость) до обеспечения ИБ на уровне сети и приложений (аутентификация, авторизация, аудит, защита от DDoS).
        Раздел даёт понимание, как обеспечить надёжность, отказоустойчивость и соответствие требованиям в условиях реальной эксплуатации.</p>
        <p><img src="/img/docusaurus.png" alt="Вселенная IT" className={styles.emojiImage} /> Глубокий анализ — в <Link to="/section/infra-security">разделе «Инфраструктура и безопасность»</Link>.</p>
      </details>

      {/* Спойлер: Спин-офф */}
      <details>
        <summary><strong>🔭 Спин-офф</strong></summary>
        <p>Раздел <strong>«Спин-офф»</strong> выходит за рамки классической инженерии, исследуя смежные и перспективные области, формирующие контекст развития IT.
        Включает биографии ключевых фигур (от Тьюринга и Берсера до современных архитекторов), анализ игровой индустрии как экономической и технологической системы, основы разработки игр (Unity, Roblox), блокчейн, криптографию и NFT — с технической критикой и без спекулятивных обещаний.
        Освещены нейросети и ИИ с акцентом на границы применимости: почему ИИ не заменит профессии, требующие системного проектирования, анализа требований и ответственности за архитектурные решения.
        Кратко рассмотрены отраслевые решения (ГИС, ELMA365, BPMSoft), компьютерная графика (рендеринг, шейдеры), медиаконтент (процессы производства и дистрибуции).
        Важное место отведено вопросам профессионального самоопределения — например, <em>как понять, что пора менять работу</em>: объективные критерии, а не эмоциональные импульсы.
        Раздел служит расширением горизонта, связывая IT с культурой, экономикой и философией технологий.</p>
        <p><img src="/img/docusaurus.png" alt="Вселенная IT" className={styles.emojiImage} /> Дополнительные материалы — в <Link to="/section/spinoff">разделе «Спин-офф»</Link>.</p>
      </details>
    </section>
  );
}

function HomepageFeatures() {
  const features = [
    {
      title: '📚 Энциклопедия',
      description: 'Систематизированный справочник по всем аспектам информационных технологий.',
      link: '/encyclopedia/intro',
      isWide: true,
    },
    {
      title: '🛠️ Инструменты',
      description: 'Обзоры, гайды и практические рекомендации по использованию технологий и ПО.',
      link: '/tools/intro',
      isWide: true,
    },
    {
      title: '📜 Глоссарий',
      description: 'Алфавитный справочник терминов, понятий и аббревиатур в области IT.',
      link: '/glossary/intro',
    },
    {
      title: '🔬 Лаборатория',
      description: 'Практические задания, упражнения и примеры кода для закрепления навыков.',
      link: '/lab/intro',
    },
    {
      title: '🌍 Контекст',
      description: 'Погружение в отрасли: финансы, здравоохранение, образование, игры и др.',
      link: '/context/intro',
    },
    {
      title: '🧠 Философия',
      description: 'Размышления о культуре разработки, этике, подходах и будущем технологий.',
      link: '/philosophy/intro',
    },
  ];

  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          <div className="col col--12">
            <Heading as="h2" className={styles.featuresTitle}>
              🟣 Разделы базы знаний 🟣
            </Heading>
            <p className={styles.featuresSubtitle}>
              Шесть основных разделов покрывают все аспекты IT-сферы
            </p>
          </div>
        </div>

        <div className={styles.featuresSection}>
          <div className={styles['cards-grid']}>
            {features.map((feature, idx) => (
              <div
                key={idx}
                className={clsx(
                  styles['feature-card'],
                  feature.isWide && styles['feature-card--wide']
                )}
              >
                <Heading as="h3">{feature.title}</Heading>
                <p>{feature.description}</p>
                <Link
                  className={`button button--outline button--primary ${styles['feature-cta']}`}
                  to={feature.link}
                >
                  Изучить раздел
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function HomepageStats() {
  const stats = [
    { number: '∞', label: 'срок актуальности фундамента' },
    { number: '0', label: 'коммерческих партнёров' },
    { number: '1000+', label: 'статей и материалов' },
    { number: '1', label: 'автор и куратор' },
  ];

  return (
    <section className={styles.stats}>
      <div className="container">
        <div className="row">
          {stats.map((stat, idx) => (
            <div key={idx} className="col col--3">
              <div className={styles.statCard}>
                <div className={styles.statNumber}>{stat.number}</div>
                <div className={styles.statLabel}>{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <Layout
      title="Вселенная IT"
      description="Единый и ультимативный гайд по IT - открытая база знаний для всех"
    >
      <AnimatedBackground />
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <HomepageTabs />
        <HomepageStats />
      </main>
      <script
      dangerouslySetInnerHTML={{
        __html: `
          document.addEventListener('DOMContentLoaded', function() {
            const cardsWrapper = document.querySelector('.cardsWrapper');
            const overlay = cardsWrapper?.querySelector('.overlay');
            if (!cardsWrapper || !overlay) return;

            // Clone featureCard into overlay
            const originalCards = cardsWrapper.querySelectorAll('.featureCard');
            originalCards.forEach(card => {
              const clone = card.cloneNode(true);
              clone.setAttribute('aria-hidden', 'true');
              clone.style.position = 'absolute';
              clone.style.top = '0';
              clone.style.left = '0';
              clone.style.width = '100%';
              clone.style.height = '100%';
              clone.style.pointerEvents = 'none';
              const cta = clone.querySelector('.featureCta');
              if (cta) cta.style.display = 'none';
              overlay.appendChild(clone);
            });

            cardsWrapper.addEventListener('mousemove', e => {
              const rect = cardsWrapper.getBoundingClientRect();
              const x = e.clientX - rect.left;
              const y = e.clientY - rect.top;
              overlay.style.setProperty('--x', \`\${x}px\`);
              overlay.style.setProperty('--y', \`\${y}px\`);
              overlay.style.setProperty('--opacity', '1');
            });

            cardsWrapper.addEventListener('mouseleave', () => {
              overlay.style.setProperty('--opacity', '0');
            });
          });
        `,
      }}
    />
    </Layout>
  );
}