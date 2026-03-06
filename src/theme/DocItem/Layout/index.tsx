import React, {useEffect, useState, type ReactNode} from 'react';
import clsx from 'clsx';
import {useWindowSize} from '@docusaurus/theme-common';
import {useDoc} from '@docusaurus/plugin-content-docs/client';
import DocItemPaginator from '@theme/DocItem/Paginator';
import DocVersionBanner from '@theme/DocVersionBanner';
import DocVersionBadge from '@theme/DocVersionBadge';
import DocItemFooter from '@theme/DocItem/Footer';
import DocItemTOCMobile from '@theme/DocItem/TOC/Mobile';
import DocItemTOCDesktop from '@theme/DocItem/TOC/Desktop';
import DocItemContent from '@theme/DocItem/Content';
import DocBreadcrumbs from '@theme/DocBreadcrumbs';
import ContentVisibility from '@theme/ContentVisibility';
import type {Props} from '@theme/DocItem/Layout';

import styles from './styles.module.css';

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
function ChapterProgress(): JSX.Element | null {
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
 * Делает систему тегов кликабельной:
 * - .article-tags .tag -> поиск по CSS-классу (tag-required и т.п.)
 * - .complexity-badge -> поиск по тексту бейджа (\"Разработчику\" и др.)
 */
function useClickableArticleTags() {
  useEffect(() => {
    const root = document;

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
          window.location.href = `/search?q=${query}`;
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

    // Обычные статусы (ОБЯЗАТЕЛЬНО, ДЛЯ НОВИЧКОВ, и т.п.) — ищем по CSS-классу tag-*
    const statusTags = root.querySelectorAll<HTMLElement>('.article-tags .tag');
    makeInteractive(statusTags, (el) => {
      const tagClass = Array.from(el.classList).find((cls) =>
        cls.startsWith('tag-'),
      );
      return tagClass ?? null;
    });

    // Complexity-бейджи (Разработчику, Аналитику, ...) — ищем по видимому тексту
    const complexityBadges =
      root.querySelectorAll<HTMLElement>('.complexity-badge');
    makeInteractive(complexityBadges, (el) => el.textContent?.trim() || null);
  }, []);
}

export default function DocItemLayout({children}: Props): ReactNode {
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