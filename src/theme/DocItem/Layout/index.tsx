import React, {useEffect, useState, type ReactElement, type ReactNode} from 'react';
import clsx from 'clsx';
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
 * Делает систему тегов кликабельной и быстрой:
 * - Для .article-tags .tag ищем по ВИДИМОМУ ТЕКСТУ (\"ДЛЯ НОВИЧКОВ\" и т.п.).
 *   Локальный поиск индексирует текст страницы, а не CSS-классы, поэтому запрос
 *   по `tag-beginner` может быть очень медленным/бесполезным на больших индексах.
 * - Для .complexity-badge также ищем по тексту бейджа (\"Разработчику\" и др.).
 */
function useClickableArticleTags() {
  useEffect(() => {
    const root = document;

    const getSearchContextFromPathname = (pathname: string): string => {
      const clean = pathname.replace(/^\//, '').replace(/\/$/, '');
      const parts = clean.split('/').filter(Boolean);
      if (parts.length === 0) {
        return '';
      }

      const top = parts[0];

      // Энциклопедия индексируется по верхнему разделу: encyclopedia/<Раздел>
      if (top === 'encyclopedia') {
        const second = parts[1];
        if (!second) return 'encyclopedia/intro';
        if (second === 'intro') return 'encyclopedia/intro';
        return `encyclopedia/${second}`;
      }

      if (
        top === 'about' ||
        top === 'tools' ||
        top === 'glossary' ||
        top === 'lab' ||
        top === 'context' ||
        top === 'philosophy' ||
        top === 'section'
      ) {
        return top;
      }

      return '';
    };

    const makeInteractive = (
      elements: NodeListOf<HTMLElement>,
      getQuery: (el: HTMLElement) => string | null,
    ) => {
      elements.forEach((el) => {
        if (el.dataset.enhanced === 'true') {
          return;
        }

        const queryValue = getQuery(el);
        if (!queryValue) {
          return;
        }

        el.dataset.enhanced = 'true';
        el.classList.add(styles.clickableTag);
        el.setAttribute('role', 'button');
        el.setAttribute('tabindex', '0');

        const navigate = () => {
          const query = encodeURIComponent(queryValue);
          const ctx = getSearchContextFromPathname(window.location.pathname);
          const ctxPart = ctx ? `&ctx=${encodeURIComponent(ctx)}` : '';
          window.location.href = `/search?q=${query}${ctxPart}`;
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

    // Обычные статусы (ОБЯЗАТЕЛЬНО, ДЛЯ НОВИЧКОВ, и т.п.) — ищем по видимому тексту
    const statusTags = root.querySelectorAll<HTMLElement>('.article-tags .tag');
    makeInteractive(statusTags, (el) => {
      return el.textContent?.trim() || null;
    });

    // Complexity-бейджи (Разработчику, Аналитику, ...) — ищем по видимому тексту
    const complexityBadges =
      root.querySelectorAll<HTMLElement>('.complexity-badge');
    makeInteractive(complexityBadges, (el) => el.textContent?.trim() || null);
  }, []);
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
            <DocVersionBadge />
            {docTOC.mobile}
            <DocItemContent>{children}</DocItemContent>
            <DocItemFooter />
          </article>
          <DocItemPaginator />
        </div>
      </div>
      {docTOC.desktop && (
        <div className={clsx('col col--3', styles.docSidebarCol)}>
          <div className={styles.docSidebarInner}>
            <ChapterProgress />
            {docTOC.desktop}
          </div>
        </div>
      )}
    </div>
  );
}