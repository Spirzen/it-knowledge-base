import clsx from 'clsx';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import Link from '@docusaurus/Link';

import styles from './index.module.css';

function HomepageHeader() {
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          
          <img src="/it-knowledge-base/img/logoITU.png" alt="Вселенная IT"/>
        </Heading>
        <p className="hero__subtitle">
          🌌 "Вселенная IT" - единый и ультимативный гайд, который позволит изучить сферу IT в максимально полном объёме. 
          Здесь вы научитесь всем аспектам компьютеров, приложений и технологий, читать и писать код 
          на нескольких языках, анализу, тестированию и даже информационной безопасности.
        </p> 
        <p className="hero__subtitle"> 
        Можно назвать это систематизированным курсом, открытой базой знаний и даже энциклопедией.
        </p>
        <p className="hero__subtitle">
          Это бесплатный и открытый проект, который я веду в одиночку, на чистом энтузиазме.
          Надеюсь, вам будет интересно!
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--primary button--lg"
            to="/docs/section/basics">
            🚀 Начать изучение
          </Link>
          <Link
            className="button button--secondary button--lg"
            to="/docs/toc">
            📋 Содержание
          </Link>
        </div>
        <div className={styles.author}>
          <p>👨‍💻 Автор — <strong>Тагиров Тимур Владиславович</strong></p>
          <p>📚 Открытая база знаний по информационным технологиям</p>
        </div>
      </div>
    </header>
  );
}

function HomepageFeatures() {
  const features = [
    {
      title: '🧩 Основы',
      description: 'Фундаментальные знания о компьютерах, программном обеспечении и IT-сфере в целом.',
      link: '/docs/section/basics',
    },
    {
      title: '⚙️ Система и сеть',
      description: 'Операционные системы, сетевые технологии, администрирование и безопасность.',
      link: '/docs/section/system-network',
    },
    {
      title: '📊 Данные и разметка',
      description: 'Работа с данными, базы данных, HTML, CSS и анализ информации.',
      link: '/docs/section/data-markup',
    },
    {
      title: '💻 Код и разработка',
      description: 'Программирование, алгоритмы, архитектура и инструменты разработки.',
      link: '/docs/section/code-dev',
    },
    {
      title: '🔤 Языки программирования',
      description: 'Изучение различных языков программирования от основ до продвинутого уровня.',
      link: '/docs/section/languages',
    },
    {
      title: '📋 Управление проектами',
      description: 'Методологии разработки, команды, тестирование и бизнес-аспекты.',
      link: '/docs/section/project',
    },
    {
      title: '🛡️ Инфраструктура и безопасность',
      description: 'DevOps, облачные технологии, кибербезопасность и мониторинг.',
      link: '/docs/section/infra-security',
    },
    {
      title: '🎯 Дополнительные темы',
      description: 'Специализированные области, тренды и дополнительные материалы.',
      link: '/docs/section/spinoff',
    },
  ];

  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          <div className="col col--12">
            <Heading as="h2" className={styles.featuresTitle}>
              📚 Разделы базы знаний
            </Heading>
            <p className={styles.featuresSubtitle}>
              Восемь основных разделов покрывают все аспекты IT-сферы
            </p>
          </div>
        </div>
        <div className="row">
          {features.map((feature, idx) => (
            <div key={idx} className="col col--6 col--3">
              <div className="feature-card">
                <Heading as="h3">{feature.title}</Heading>
                <p>{feature.description}</p>
                <Link
                  className="button button--outline button--primary"
                  to={feature.link}>
                  Изучить раздел
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HomepageStats() {
  const stats = [
    { number: '8', label: 'Основных разделов' },
    { number: '300+', label: 'Статей' },
    { number: '15+', label: 'Языков программирования' },
    { number: '100%', label: 'Бесплатно' },
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
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <HomepageStats />
      </main>
    </Layout>
  );
}