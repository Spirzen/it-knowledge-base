import React, {useEffect, useState, type ReactElement, type ReactNode} from 'react';
import clsx from 'clsx';
import {useHistory} from '@docusaurus/router';
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
// eslint-disable-next-line @typescript-eslint/no-require-imports
const ArticlePdfExport = require('@site/src/components/ArticlePdfExport').default;
// eslint-disable-next-line @typescript-eslint/no-require-imports
const ArticleSeeAlso = require('@site/src/components/ArticleSeeAlso').default;
// eslint-disable-next-line @typescript-eslint/no-require-imports
const ArticleRelated = require('@site/src/components/ArticleRelated').default;

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

const TAG_CLASS_TO_SLUG: Record<string, string> = {
  'tag-required': 'required',
  'tag-notrequired': 'notrequired',
  'tag-human': 'beginner',
  'tag-beginner': 'beginner',
  'tag-advanced': 'advanced',
};

const COMPLEXITY_LABEL_TO_SLUG: Record<string, string> = {
  'Аналитику': 'analytic',
  'Тестировщику': 'tester',
  'Архитектору': 'architector',
  'Разработчику': 'developer',
  'Руководителю': 'manager',
  'Инженеру': 'engineer',
  'Всем': 'all',
};

function getArticleTagSlug(el: HTMLElement): string | null {
  if (el.classList.contains('tag-inprogress')) {
    return null;
  }

  for (const [className, slug] of Object.entries(TAG_CLASS_TO_SLUG)) {
    if (el.classList.contains(className)) {
      return slug;
    }
  }

  return null;
}

function getComplexityBadgeSlug(el: HTMLElement): string | null {
  const label = el.textContent?.trim();
  if (!label) {
    return null;
  }

  return COMPLEXITY_LABEL_TO_SLUG[label] ?? null;
}

/**
 * Делает HTML-теги кликабельными и ведёт на страницы /tags/*,
 * как теги из frontmatter Docusaurus.
 */
function useClickableArticleTags() {
  const history = useHistory();

  useEffect(() => {
    const navigateToTag = (slug: string) => {
      history.push(`/tags/${slug}`);
    };

    const makeInteractive = (
      elements: NodeListOf<HTMLElement>,
      getSlug: (el: HTMLElement) => string | null,
    ) => {
      elements.forEach((el) => {
        if (el.dataset.enhanced === 'true') {
          return;
        }

        const slug = getSlug(el);
        if (!slug) {
          return;
        }

        el.dataset.enhanced = 'true';
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
  }, [history]);
}

export default function DocItemLayout({children}: DocItemLayoutProps): ReactNode {
  const docTOC = useDocTOC();
  const {metadata} = useDoc();

  useClickableArticleTags();

  return (
    <div className="row">
      <div className={clsx('col', !docTOC.hidden && styles.docItemCol)}>
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
        <div className={clsx('col col--3', styles.docSidebarCol)}>
          <div className={styles.docSidebarInner}>
            <ChapterProgress />
            <div className={styles.docTocScroll}>{docTOC.desktop}</div>
          </div>
        </div>
      )}
    </div>
  );
}