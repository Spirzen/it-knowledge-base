import clsx from 'clsx';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import Link from '@docusaurus/Link';

import styles from './index.module.css';

function HomepageHeader() {
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <div className={styles.heroCard}>
          <Heading as="h1" className="hero__title">
            <Link to="/about/project"><img src="/img/logoITU.png" alt="Вселенная IT" /></Link>
          </Heading>
          <p className="hero__subtitle">
            <img src="/img/docusaurus.png" alt="Вселенная IT" className={styles.emojiImage} /> «Вселенная IT» — это открытая энциклопедия по информационным технологиям. Бесплатно, без рекламы, без партнёров — только систематизированные знания.
          </p>
          <div className={styles.buttons}>
            <Link
              className="button button--primary button--lg"
              to="/section/basics">
              🔎 Начать изучение
            </Link>
            <Link
              className="button button--secondary button--lg"
              to="/about/manifest">
              <img src="/img/docusaurus.png" alt="Вселенная IT" className={styles.emojiImage} /> Манифест и Правила
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

function HomepageTabs() {
  const sections = [
    {
      title: 'Основы',
      description: 'Компьютерная и цифровая грамотность, информация, программа, интерфейс, карьера.',
      link: '/section/basics',
    },
    {
      title: 'Система и сеть',
      description: 'Операционная система, платформы, терминал, сеть, железо, администрирование, техподдержка.',
      link: '/section/system-network',
    },
    {
      title: 'Данные и разметка',
      description: 'Структуры данных, SQL/NoSQL, HTML, CSS, XML, JSON, анализ и хранение.',
      link: '/section/data-markup',
    },
    {
      title: 'Код и разработка',
      description: 'Алгоритмы, код, мышление, парадигмы, отладка, архитектура выполнения, Git, асинхронность.',
      link: '/section/code-dev',
    },
    {
      title: 'Программирование',
      description: 'JavaScript, Python, Java, .NET, C#, C++, PHP, Smalltalk, Kotlin, Go, Ruby, Rust, Groovy, Swift, Lua, и прочие.',
      link: '/section/languages',
    },
    {
      title: 'Проект',
      description: 'Команда и управление, методологии, документирование, бизнес-логика, аналитика, проектирование и архитектура.',
      link: '/section/project',
    },
    {
      title: 'Инфраструктура и безопасность',
      description: 'Облачные технологии, DevOps, микросервисы, интеграция, Docker, Kubernetes, информационная безопасность.',
      link: '/section/infra-security',
    },
    {
      title: 'Спин-офф',
      description: 'Игры, ИИ, блокчейн, биографии, этика, отраслевое ПО, интернет-культура, графика.',
      link: '/section/spinoff',
    },
    {
      title: 'Детям',
      description: 'Раздел, предназначенный для простого обучения компьютерной грамотности и программированию детей 6-12 лет.',
      link: '/section/forkids',
    },
  ];

  return (
    <section className="margin-top--md container">
      <Heading as="h2" className={styles.featuresTitle}>
        Состав энциклопедии
      </Heading>
      <div className={styles.sectionsGrid}>
        {sections.map((section, idx) => (
          <div key={idx} className={styles.sectionCard}>
            <Heading as="h3">{section.title}</Heading>
            <p>{section.description}</p>
            <Link
              className={`button button--outline button--secondary ${styles['section-cta']}`}
              to={section.link}
            >
              Перейти
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}

function HomepageFeatures() {
  const features = [
    {
      title: 'Энциклопедия',
      description: 'Систематизированный справочник по всем аспектам информационных технологий.',
      link: '/encyclopedia/intro',
      isWide: true,
    },
    {
      title: 'Инструменты',
      description: 'Обзоры, гайды и практические рекомендации по использованию технологий и ПО.',
      link: '/tools/intro',
      isWide: true,
    },
    {
      title: 'Глоссарий',
      description: 'Алфавитный справочник терминов, понятий и аббревиатур в области IT.',
      link: '/glossary/intro',
    },
    {
      title: 'Лаборатория',
      description: 'Практические задания, упражнения и примеры кода для закрепления навыков.',
      link: '/lab/intro',
    },
    {
      title: 'Контекст',
      description: 'Погружение в отрасли: финансы, здравоохранение, образование, игры и др.',
      link: '/context/intro',
    },
    {
      title: 'Философия',
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
              Форматы контента
            </Heading>
            <p className={styles.featuresSubtitle}>
              Энциклопедия первична. Затем - дополнительный контент.
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

export default function Home() {
  return (
    <Layout
      title="Вселенная IT"
      description="Открытая энциклопедия по информационным технологиям"
      paddingTop={false}
      paddingBottom={false}
    >
      <HomepageHeader />
      <main>
        <HomepageTabs />
        <HomepageFeatures />
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