import React, {useEffect, useState, type ReactElement, type ReactNode} from 'react';
import clsx from 'clsx';
import {useHistory, useLocation} from '@docusaurus/router';
import lazyDemo from '@site/src/components/shared/lazyDemo';
import {
  enhanceArticleMeta,
  getArticleTagSlug,
  getComplexityBadgeSlug,
} from './articleMetaEnhancement';
import {enhanceArticleSections} from './articleSectionEnhancement';
import {useWindowSize} from '@docusaurus/theme-common';
import {useDoc} from '@docusaurus/plugin-content-docs/client';

import styles from './styles.module.css';

// Docusaurus theme aliases (`@theme/*`) резолвятся на этапе сборки.
// Для TypeScript-линта в IDE используем `require`, чтобы не зависеть от type-aliases.
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
// eslint-disable-next-line @typescript-eslint/no-require-imports
const DocTocPanel = require('@site/src/theme/DocItem/Layout/DocTocPanel').default;

type DocItemLayoutProps = {
  children: ReactNode;
};

/**
 * Решение, нужно ли отображать оглавление
 */
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

function clamp(value: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, value));
}

/**
 * Прогресс-бар освоения текущей главы (страницы документации)
 */
function ChapterProgress(): ReactElement | null {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    function updateProgress() {
      const article =
        document.querySelector<HTMLElement>('.theme-doc-markdown > article') ??
        document.querySelector<HTMLElement>('.theme-doc-markdown') ??
        document.querySelector<HTMLElement>('article');

      if (!article) {
        return;
      }

      const rect = article.getBoundingClientRect();
      const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
      const docTop = window.scrollY + rect.top;
      const docHeight = article.offsetHeight;
      const maxScrollable = Math.max(docHeight - viewportHeight, 1);
      const scrolled = clamp(window.scrollY - docTop, 0, maxScrollable);

      const ratio = clamp(scrolled / maxScrollable, 0, 1);
      setProgress(Math.round(ratio * 100));
    }

    updateProgress();

    window.addEventListener('scroll', updateProgress, {passive: true});
    window.addEventListener('resize', updateProgress);

    return () => {
      window.removeEventListener('scroll', updateProgress);
      window.removeEventListener('resize', updateProgress);
    };
  }, []);

  if (progress <= 0 && typeof window !== 'undefined') {
    // Не мешаем в самом начале страницы
    return null;
  }

  return (
    <div className={styles.chapterProgress}>
      <div className={styles.chapterProgressHeader}>
        <span className={styles.chapterProgressLabel}>Освоение главы</span>
        <span className={styles.chapterProgressPercent}>{progress}%</span>
      </div>
      <div className={styles.chapterProgressBar}>
        <div
          className={styles.chapterProgressBarInner}
          style={{width: `${progress}%`}}
        />
      </div>
    </div>
  );
}

/**
 * Панель метаданных + кликабельные теги → /tags/*
 */
function useArticleMetaEnhancement() {
  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
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