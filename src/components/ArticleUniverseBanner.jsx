import React from 'react';
import {useDoc} from '@docusaurus/plugin-content-docs/client';

import styles from './ArticleUniverseBanner.module.css';

const UNIVERSE_URL =
  'https://it-un.ru/?utm_source=encyclopedia&utm_medium=banner&utm_campaign=article-end';

export default function ArticleUniverseBanner() {
  const {frontMatter} = useDoc();

  if (frontMatter.universe_banner === false) {
    return null;
  }

  return (
    <aside className={`article-universe-banner ${styles.banner}`} aria-labelledby="article-universe-title">
      <div className={styles.text}>
        <p className={styles.title} id="article-universe-title">
          Продолжить в расширенной версии
        </p>
        <p className={styles.lead}>
          Вселенная ИТ — более крупная и масштабная платформа. Текущая энциклопедия
          является её бесплатным предком.
        </p>
      </div>
      <a
        className="button button--primary"
        href={UNIVERSE_URL}
        target="_blank"
        rel="noopener noreferrer">
        Перейти к Вселенной ИТ
      </a>
    </aside>
  );
}
