import React, {lazy, Suspense} from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import Link from '@docusaurus/Link';

import HomepageHeroSearch from '@site/src/components/HomepageHeroSearch';
import UniverseLogo from '@site/src/components/UniverseLogo';
import styles from './index.module.css';

const UniverseMap = lazy(() => import('@site/src/components/UniverseMap'));
const GettingStartedPaths = lazy(
  () => import('@site/src/components/GettingStartedPaths'),
);
const RandomArticle = lazy(() => import('@site/src/components/RandomArticle'));

const APK_DOWNLOAD_URL =
  'https://github.com/Spirzen/it-knowledge-base/releases/download/Mobile/it-universe.apk';
const INDEX_GUIDE_PATH =
  '/encyclopedia/1-basics/1-03-dorozhnaya-karta-izucheniya/101';

function HomeSectionFallback({minHeight = '12rem'}) {
  return (
    <div
      className={styles.sectionFallback}
      style={{minHeight}}
      aria-hidden="true"
    />
  );
}

function HomepageHeader() {
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <div className={clsx('hero-card', styles.heroCard)}>
          <Heading as="h1" className={clsx('hero__title', styles.heroLogoTitle)}>
            <UniverseLogo />
          </Heading>
          <p className={clsx('hero__subtitle', styles.heroSubtitle)}>
            Энциклопедия с интерактивом внутри статей. Бесплатно, без рекламы и
            партнёрских вставок — только систематизированные знания.
          </p>
          <HomepageHeroSearch />
          <div className={styles.heroActions}>
            <div className={styles.buttons}>
              <Link
                className="button button--primary button--lg"
                to="/section/basics">
                Начать с основ
              </Link>
              <Link
                className="button button--secondary button--lg"
                to="/about/interactive"
                prefetch={false}>
                Витрина
              </Link>
            </div>
            <Link
              className={styles.heroIndexLink}
              to="/encyclopedia/1-basics/1-035-bazovaya-informatika/101"
              prefetch={false}>
              Компьютерная грамотность с нуля
            </Link>
            <Link className={styles.heroIndexLink} to={INDEX_GUIDE_PATH} prefetch={false}>
              Указатель — где и о чём почитать
            </Link>
          </div>
          <footer className={styles.heroFooter}>
            <a
              className={styles.heroFooterLink}
              href={APK_DOWNLOAD_URL}
              download="it-universe.apk"
              target="_blank"
              rel="noopener noreferrer">
              Скачать приложение для Android (APK)
            </a>
          </footer>
        </div>
      </div>
    </header>
  );
}

function HomepageDiscover() {
  return (
    <section className={styles.discoverSection} aria-label="Случайная статья">
      <div className="container">
        <div className={styles.discoverCard}>
          <Suspense fallback={<HomeSectionFallback minHeight="8rem" />}>
            <RandomArticle variant="discover" />
          </Suspense>
        </div>
      </div>
    </section>
  );
}

function HomepageInteractive() {
  return (
    <section className={styles.homeSection} aria-labelledby="home-interactive-title">
      <div className="container">
        <div className={clsx('home-panel', styles.homePanel)}>
          <Heading as="h2" className={styles.sectionTitle} id="home-interactive-title">
            Интерактив в каждой теме
          </Heading>
          <p className={styles.sectionLead}>
            В энциклопедии встроены сотни кастомных компонентов — тренажёры клавиатуры и
            Office, визуализаторы алгоритмов и нейросетей, схемы сети и инфраструктуры,
            эмуляторы Git, SQL, Docker и многое другое. Нажимайте, переключайте режимы и
            сразу видите, как устроена тема — без установки ПО и без отрыва от текста.
          </p>
          <div className={styles.interactiveActions}>
            <Link
              className="button button--primary button--lg"
              to="/about/interactive"
              prefetch={false}>
              Витрина
            </Link>
            <Link
              className="button button--secondary button--lg"
              to="/lab/Планы%20развития/7">
              Навигатор
            </Link>
            <Link
              className="button button--secondary button--lg"
              to="/encyclopedia/1-basics/1-03-dorozhnaya-karta-izucheniya/1">
              Дорожная карта
            </Link>
          </div>
        </div>
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
            <Heading as="h2" className={styles.sectionTitle}>
              Форматы контента
            </Heading>
            <p className={clsx(styles.sectionLead, styles.featuresLead)}>
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
                  'feature-card',
                  styles['feature-card'],
                  feature.isWide && 'feature-card--wide',
                  feature.isWide && styles['feature-card--wide'],
                )}>
                <Heading as="h3">{feature.title}</Heading>
                <p>{feature.description}</p>
                <Link
                  className={`button button--outline button--primary ${styles['feature-cta']}`}
                  to={feature.link}>
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
      paddingBottom={false}>
      <HomepageHeader />
      <main>
        <Suspense fallback={<HomeSectionFallback minHeight="20rem" />}>
          <UniverseMap />
        </Suspense>
        <Suspense fallback={<HomeSectionFallback minHeight="16rem" />}>
          <GettingStartedPaths />
        </Suspense>
        <HomepageInteractive />
        <HomepageDiscover />
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
