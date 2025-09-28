import clsx from 'clsx';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          Вселенная IT
        </Heading>
        <p className="hero__subtitle">
          Единый и ультимативный гайд, который позволит изучить сферу IT в максимально полном объёме и не прибегать к помощи. Здесь можно научиться всем аспектам компьютеров, приложений и технологий, читать и писать код на нескольких языках, обучиться анализу, тестированию и даже ИБ.
        </p>
        <p className={styles.author}>
          Автор — Тагиров Тимур Владиславович
        </p>
      </div>
    </header>
  );
}

export default function Home() {
  return (
    <Layout
      title="Вселенная IT"
      description="Единый и ультимативный гайд по IT"
    >
      <HomepageHeader />
    </Layout>
  );
}