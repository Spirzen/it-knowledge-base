import React from 'react';
import Link from '@docusaurus/Link';
import {
  COLLECTIONS_PAGE_PATH,
  SIDEBAR_COLLECTIONS,
  articlesCountLabel,
  collectionEntryPath,
  collectionStartPath,
} from '@site/src/data/sidebarCollections';
import {useCollectionArticleLists} from '@site/src/components/useCollectionArticleLists';

import styles from './CollectionHub.module.css';

/**
 * Страница-хаб одной тематической подборки (полный список статей маршрута).
 * @param {{ label: string }} props — label из SIDEBAR_COLLECTIONS
 */
export default function CollectionHub({label}) {
  const collection = SIDEBAR_COLLECTIONS.find((c) => c.label === label);
  const articleLists = useCollectionArticleLists();

  if (!collection) {
    return (
      <p>
        Подборка «{label}» не найдена. См.{' '}
        <Link to={COLLECTIONS_PAGE_PATH}>каталог подборок</Link>.
      </p>
    );
  }

  const articles =
    articleLists.get(collection.label) ??
    collection.items.map((docId) => ({
      id: docId,
      title: docId,
      href: collectionEntryPath(docId),
    }));

  return (
    <div className={styles.hub}>
      <p className={styles.lead}>
        {collection.emoji} {collection.description}{' '}
        <Link to={COLLECTIONS_PAGE_PATH}>Все подборки</Link>
      </p>
      <p className={styles.meta}>{articlesCountLabel(articles.length)} в маршруте</p>
      <ol className={styles.list}>
        {articles.map((article, index) => (
          <li key={article.id} className={styles.item}>
            <Link to={article.href} className={styles.link}>
              <span className={styles.index}>{index + 1}</span>
              <span className={styles.title}>{article.title}</span>
            </Link>
          </li>
        ))}
      </ol>
      <p className={styles.footer}>
        <Link to={collectionStartPath(collection)} className={styles.startLink}>
          Начать с первой статьи маршрута
        </Link>
      </p>
    </div>
  );
}
