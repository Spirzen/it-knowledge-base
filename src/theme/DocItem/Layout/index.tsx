import React, {useEffect, type ReactNode} from 'react';
import clsx from 'clsx';
import {useHistory, useLocation} from '@docusaurus/router';
import lazyDemo from '@site/src/components/shared/lazyDemo';
import {scheduleIdleWork} from '@site/src/components/shared/deferredIdle';
import {
  enhanceArticleMeta,
  getArticleTagSlug,
  getComplexityBadgeSlug,
} from './articleMetaEnhancement';
import {enhanceArticleSections} from './articleSectionEnhancement';
import {useWindowSize} from '@docusaurus/theme-common';
import {useDoc} from '@docusaurus/plugin-content-docs/client';

import styles from './styles.module.css';

const TechArticleHero = lazyDemo(
  () => import('@site/src/components/TechArticleHero'),
);

// eslint-disable-next-line @typescript-eslint/no-require-imports
const DocItemPaginator = require('@theme/DocItem/Paginator').default;
// eslint-disable-next-line @typescript-eslint/no-require-imports
const DocVersionBanner = require('@theme/DocVersionBanner').default;
// eslint-disable-next-line @typescript-eslint/no-require-imports
const DocVersionBadge = require('@theme/DocVersionBadge').default;
// eslint-disable-next-line @typescript-eslint/no-require-imports
const DocItemFooter = require('@theme/DocItem/Footer').default;
// eslint-disable-next-line @typescript-eslint/no-require-imports
const DocItemTOCMobile = require('@theme/DocItem/TOC/Mobile').default;
// eslint-disable-next-line @typescript-eslint/no-require-imports
const DocItemTOCDesktop = require('@theme/DocItem/TOC/Desktop').default;
// eslint-disable-next-line @typescript-eslint/no-require-imports
const DocItemContent = require('@theme/DocItem/Content').default;
// eslint-disable-next-line @typescript-eslint/no-require-imports
const DocBreadcrumbs = require('@theme/DocBreadcrumbs').default;
// eslint-disable-next-line @typescript-eslint/no-require-imports
const ContentVisibility = require('@theme/ContentVisibility').default;
const ArticlePdfExport = lazyDemo(() => import('@site/src/components/ArticlePdfExport'));
const ArticleSeeAlso = lazyDemo(() => import('@site/src/components/ArticleSeeAlso'));
const ArticleRelated = lazyDemo(() => import('@site/src/components/ArticleRelated'));
const ChapterProgress = lazyDemo(
  () => import('@site/src/theme/DocItem/Layout/ChapterProgress'),
);
// eslint-disable-next-line @typescript-eslint/no-require-imports
const DocTocPanel = require('@site/src/theme/DocItem/Layout/DocTocPanel').default;

type DocItemLayoutProps = {
  children: ReactNode;
};

function useDocTOC() {
  const {frontMatter, toc} = useDoc();
  const windowSize = useWindowSize();

  const hidden = frontMatter.hide_table_of_contents;
  const canRender = !hidden && toc.length > 0;

  const mobile = canRender ? <DocItemTOCMobile /> : undefined;

  const desktop =
    canRender && (windowSize === 'desktop' || windowSize === 'ssr') ? (
      <DocItemTOCDesktop />
    ) : undefined;

  return {
    hidden,
    mobile,
    desktop,
  };
}

function useArticleMetaEnhancement() {
  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    return scheduleIdleWork(() => {
      enhanceArticleMeta();
      enhanceArticleSections();

      const navigateToTag = (slug: string) => {
        history.push(`/tags/${slug}`);
      };

      const makeInteractive = (
        elements: NodeListOf<HTMLElement>,
        getSlug: (el: HTMLElement) => string | null,
      ) => {
        elements.forEach((el) => {
          if (el.dataset.clickableTag === 'true') {
            return;
          }

          const slug = getSlug(el);
          if (!slug) {
            return;
          }

          el.dataset.clickableTag = 'true';
          el.classList.add(styles.clickableTag);
          el.setAttribute('role', 'link');
          el.setAttribute('tabindex', '0');

          const navigate = () => {
            navigateToTag(slug);
          };

          const keyHandler = (event: KeyboardEvent) => {
            if (event.key === 'Enter' || event.key === ' ') {
              event.preventDefault();
              navigate();
            }
          };

          el.addEventListener('click', navigate);
          el.addEventListener('keydown', keyHandler);
        });
      };

      const statusTags = document.querySelectorAll<HTMLElement>(
        '.article-tags .tag:not(.tag-inprogress)',
      );
      makeInteractive(statusTags, getArticleTagSlug);

      const complexityBadges =
        document.querySelectorAll<HTMLElement>('.complexity-badge');
      makeInteractive(complexityBadges, getComplexityBadgeSlug);
    });
  }, [history, location.pathname]);
}

export default function DocItemLayout({children}: DocItemLayoutProps): ReactNode {
  const docTOC = useDocTOC();
  const {metadata} = useDoc();

  useArticleMetaEnhancement();

  return (
    <div className={clsx('row', 'docItemRow', styles.docItemRow)}>
      <div className={clsx('col', 'docItemCol', styles.docItemCol)}>
        <ContentVisibility metadata={metadata} />
        <DocVersionBanner />
        <div className={styles.docItemContainer}>
          <article>
            <DocBreadcrumbs />
            <ArticlePdfExport />
            <DocVersionBadge />
            {docTOC.mobile}
            <DocItemContent>{children}</DocItemContent>
            <TechArticleHero />
            <ArticleRelated />
            <ArticleSeeAlso />
            <DocItemFooter />
          </article>
          <DocItemPaginator />
        </div>
      </div>
      {docTOC.desktop && (
        <DocTocPanel
          sidebarColClassName={styles.docSidebarCol}
          innerClassName={styles.docSidebarInner}>
          <ChapterProgress />
          <div className={styles.docTocScroll}>{docTOC.desktop}</div>
        </DocTocPanel>
      )}
    </div>
  );
}
