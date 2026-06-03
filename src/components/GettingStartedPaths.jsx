import React, {useCallback, useId, useState} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import {
  COLLECTION_GROUPS,
  COLLECTIONS_PAGE_PATH,
  SIDEBAR_COLLECTIONS,
  articlesCountLabel,
  collectionEntryPath,
  collectionStartPath,
} from '@site/src/data/sidebarCollections';
import {
  fallbackTitleFromDocId,
  useCollectionArticleLists,
} from '@site/src/components/useCollectionArticleLists';

import styles from './GettingStartedPaths.module.css';

function CollectionAccordion({collection, articles, isOpen, onToggle, displayIndex}) {
  const baseId = useId();
  const panelId = `${baseId}-panel`;
  const headerId = `${baseId}-header`;
  const articleCount = articles.length;

  return (
    <article
      className={clsx(styles.accordion, isOpen && styles.accordionOpen)}>
      <button
        type="button"
        className={styles.accordionHeader}
        id={headerId}
        aria-expanded={isOpen}
        aria-controls={panelId}
        onClick={onToggle}>
        <span className={styles.cardNum} aria-hidden="true">
          {displayIndex}
        </span>
        <span className={styles.cardBody}>
          <span className={styles.cardTitle}>{collection.label}</span>
          <span className={styles.cardDescription}>{collection.description}</span>
          <span className={styles.cardMeta}>
            {articlesCountLabel(articleCount)}
            {isOpen ? ' · список открыт' : ' · нажмите, чтобы раскрыть'}
          </span>
        </span>
        <span
          className={clsx(styles.chevron, isOpen && styles.chevronOpen)}
          aria-hidden="true"
        />
      </button>

      <div
        id={panelId}
        role="region"
        aria-labelledby={headerId}
        aria-hidden={!isOpen}
        className={clsx(styles.panel, isOpen && styles.panelOpen)}
        {...(!isOpen ? {inert: ''} : {})}>
        <div className={styles.panelInner}>
          <ol className={styles.articleList}>
            {articles.map((article, index) => (
              <li key={article.id} className={styles.articleItem}>
                <Link
                  to={article.href}
                  prefetch={false}
                  className={styles.articleLink}
                  onClick={(event) => event.stopPropagation()}>
                  <span className={styles.articleIndex}>{index + 1}</span>
                  <span className={styles.articleTitle}>{article.title}</span>
                  <span className={styles.articleArrow} aria-hidden="true">
                    →
                  </span>
                </Link>
              </li>
            ))}
          </ol>
          <div className={styles.panelFooter}>
            <Link
              to={collectionStartPath(collection)}
              prefetch={false}
              className={styles.startRouteLink}
              onClick={(event) => event.stopPropagation()}>
              Начать маршрут с первой статьи
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}

function CollectionGroup({group, collections, articleLists}) {
  const [openLabels, setOpenLabels] = useState(() => new Set());

  const toggle = useCallback((label) => {
    setOpenLabels((prev) => {
      const next = new Set(prev);
      if (next.has(label)) {
        next.delete(label);
      } else {
        next.add(label);
      }
      return next;
    });
  }, []);

  return (
    <div className={styles.group}>
      <Heading as="h3" className={styles.groupTitle}>
        {group.title}
      </Heading>
      <div className={styles.accordionStack}>
        {collections.map((collection, index) => {
          const articles =
            articleLists.get(collection.label) ??
            collection.items.map((docId) => ({
              id: docId,
              title: fallbackTitleFromDocId(docId),
              href: collectionEntryPath(docId),
            }));

          return (
            <CollectionAccordion
              key={collection.label}
              collection={collection}
              articles={articles}
              displayIndex={index + 1}
              isOpen={openLabels.has(collection.label)}
              onToggle={() => toggle(collection.label)}
            />
          );
        })}
      </div>
    </div>
  );
}

export default function GettingStartedPaths({variant = 'home'}) {
  const articleLists = useCollectionArticleLists();
  const isHub = variant === 'hub';

  return (
    <section
      className={clsx(styles.section, isHub && styles.sectionEmbedded)}
      aria-labelledby={isHub ? undefined : 'getting-started-title'}>
      <div className={isHub ? undefined : 'container'}>
        {!isHub && (
          <div className={styles.header}>
            <Heading as="h2" className={styles.title} id="getting-started-title">
              С чего начать?
            </Heading>
            <p className={styles.subtitle}>
              Тематические маршруты по IT — раскройте подборку, чтобы увидеть
              статьи, и переходите к нужной одним кликом.{' '}
              <Link to={COLLECTIONS_PAGE_PATH} prefetch={false}>
                Полный каталог подборок
              </Link>
              .
            </p>
          </div>
        )}

        <div className={styles.groups}>
          {COLLECTION_GROUPS.map((group) => {
            const collections = SIDEBAR_COLLECTIONS.filter(
              (c) => c.group === group.id,
            );
            if (collections.length === 0) {
              return null;
            }

            return (
              <CollectionGroup
                key={group.id}
                group={group}
                collections={collections}
                articleLists={articleLists}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
