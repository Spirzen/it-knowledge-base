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
          <Link to="/about/project"><img src="/it-knowledge-base/img/logoITU.png" alt="Вселенная IT"/></Link>
        </Heading>
        <p className="hero__subtitle">
          🌌 "Вселенная IT" - единый и ультимативный гайд, который позволит изучить сферу IT в максимально полном объёме. 
          Здесь вы научитесь всем аспектам компьютеров, приложений и технологий, читать и писать <Link to="/section/code-dev">код </Link> 
          на нескольких <Link to="/section/languages">языках</Link>, <Link to="/encyclopedia/Проект/6.07.%20Аналитика/1">анализу</Link>, 
          <Link to="/encyclopedia/Проект/6.08.%20Тестирование/1"> тестированию</Link> и даже <Link to="/section/infra-security">информационной безопасности</Link>.
        Можно назвать это систематизированным курсом, открытой базой знаний и даже энциклопедией.
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
        </div>
        <div className={styles.author}>
          <p>👨‍💻 Автор — <strong><Link to="/about/author">Тагиров Тимур Владиславович</Link></strong></p>
          <p>📒 Открытая база знаний по информационным технологиям</p>
        </div>
      </div>
    </header>
  );
}

function HomepageFeatures() {
  const features = [
    {
      title: '📚 Энциклопедия',
      description: 'Систематизированный справочник по всем аспектам информационных технологий.',
      link: '/encyclopedia/intro',
    },
    {
      title: '🛠️ Инструменты',
      description: 'Обзоры, гайды и практические рекомендации по использованию технологий и ПО.',
      link: '/tools/intro',
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
              📑 Разделы базы знаний
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