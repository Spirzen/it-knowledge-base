import clsx from 'clsx';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';

import UniverseMap from '@site/src/components/UniverseMap';
import GettingStartedPaths from '@site/src/components/GettingStartedPaths';
import UniverseLogo from '@site/src/components/UniverseLogo';
import RandomArticle from '@site/src/components/RandomArticle';
import styles from './index.module.css';

const APK_DOWNLOAD_PATH = '/downloads/it-universe.apk';

function HomepageHeader() {
  const apkUrl = useBaseUrl(APK_DOWNLOAD_PATH);

  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <div className={clsx('hero-card', styles.heroCard)}>
          <Heading as="h1" className={clsx('hero__title', styles.heroLogoTitle)}>
            <UniverseLogo />
          </Heading>
          <p className="hero__subtitle">
            <img src="/img/docusaurus.png" alt="Вселенная IT" className={styles.emojiImage} /> «Вселенная IT» — это открытая энциклопедия по информационным технологиям. Бесплатно, без рекламы, без партнёров — только систематизированные знания.
          </p>
          <RandomArticle />
          <div className={styles.heroActions}>
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
            <div className={clsx('apk-strip', styles.apkStrip)}>
              <a
                className={styles.apkButton}
                href={apkUrl}
                download="it-universe.apk">
                <span className={styles.apkButtonIcon} aria-hidden="true">
                  🤖
                </span>
                <span className={styles.apkButtonText}>
                  <span className={styles.apkButtonLabel}>Скачать APK</span>
                  <span className={styles.apkButtonHint}>
                    Мобильное приложение для Android
                  </span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

function HomepageInteractive() {
  return (
    <section className={styles.interactive}>
      <div className="container">
        <div className="row">
          <div className="col col--12">
            <Heading as="h2" className={styles.interactiveTitle}>
              Интерактив в каждой теме
            </Heading>
            <p className={styles.interactiveText}>
              Это не просто статьи: в энциклопедии встроены сотни кастомных компонентов —
              тренажёры клавиатуры и Office, визуализаторы алгоритмов и нейросетей, схемы
              сети и инфраструктуры, эмуляторы Git, SQL, Docker и многое другое. Нажимайте,
              переключайте режимы и сразу видите, как устроена тема — без установки ПО и
              без отрыва от текста.
            </p>
            <div className={styles.interactiveActions}>
              <Link
                className="button button--primary button--lg"
                to="/about/interactive">
                Витрина интерактива
              </Link>
              <Link
                className="button button--outline button--primary button--lg"
                to="/encyclopedia/1-basics/1-03-dorozhnaya-karta-izucheniya/1">
                Дорожная карта →
              </Link>
            </div>
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
                  'feature-card',
                  styles['feature-card'],
                  feature.isWide && 'feature-card--wide',
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
        <UniverseMap />
        <GettingStartedPaths />
        <HomepageInteractive />
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
