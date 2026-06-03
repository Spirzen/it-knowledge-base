import React, {type ReactNode} from 'react';
import clsx from 'clsx';
import {PageMetadata, ThemeClassNames} from '@docusaurus/theme-common';
import {useCurrentSidebarCategory} from '@docusaurus/plugin-content-docs/client';
import useBaseUrl from '@docusaurus/useBaseUrl';
import DocCardList from '@theme/DocCardList';
import DocPaginator from '@theme/DocPaginator';
import DocVersionBanner from '@theme/DocVersionBanner';
import DocVersionBadge from '@theme/DocVersionBadge';
import DocBreadcrumbs from '@theme/DocBreadcrumbs';
import Heading from '@theme/Heading';
import TechIcon from '@site/src/components/TechIcon';
import {getTechIdForPath} from '@site/src/data/techArticlePages';
import heroStyles from '@site/src/css/tech-article-hero.module.css';
import type {Props} from '@theme/DocCategoryGeneratedIndexPage';

import styles from './styles.module.css';

function DocCategoryGeneratedIndexPageMetadata({
  categoryGeneratedIndex,
}: Pick<Props, 'categoryGeneratedIndex'>): ReactNode {
  return (
    <PageMetadata
      title={categoryGeneratedIndex.title}
      description={categoryGeneratedIndex.description}
      keywords={categoryGeneratedIndex.keywords}
      image={useBaseUrl(categoryGeneratedIndex.image)}
    />
  );
}

function DocCategoryGeneratedIndexPageContent({
  categoryGeneratedIndex,
}: Pick<Props, 'categoryGeneratedIndex'>): ReactNode {
  const category = useCurrentSidebarCategory();
  const techId = category?.href ? getTechIdForPath(category.href) : null;

  return (
    <div className={styles.generatedIndexPage}>
      <DocVersionBanner />
      <DocBreadcrumbs />
      <DocVersionBadge />
      <div className={clsx(ThemeClassNames.docs.docMarkdown, 'markdown')}>
        <header>
          <div className={heroStyles.wrap}>
            {techId ? (
              <div className={heroStyles.iconHost}>
                <TechIcon
                  techId={techId}
                  variant="badge"
                  size="lg"
                  className={heroStyles.icon}
                />
              </div>
            ) : null}
            <Heading as="h1">{categoryGeneratedIndex.title}</Heading>
          </div>
          {categoryGeneratedIndex.description && (
            <p className={styles.description}>{categoryGeneratedIndex.description}</p>
          )}
        </header>
        <article className={styles.cardSection}>
          <DocCardList items={category.items} className={styles.list} />
        </article>
      </div>
      <footer className={styles.footer}>
        <DocPaginator
          previous={categoryGeneratedIndex.navigation.previous}
          next={categoryGeneratedIndex.navigation.next}
        />
      </footer>
    </div>
  );
}

export default function DocCategoryGeneratedIndexPage(props: Props): ReactNode {
  return (
    <>
      <DocCategoryGeneratedIndexPageMetadata {...props} />
      <DocCategoryGeneratedIndexPageContent {...props} />
    </>
  );
}
