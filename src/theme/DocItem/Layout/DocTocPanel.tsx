import React, {useCallback, useEffect, useState, type ReactNode} from 'react';
import clsx from 'clsx';
import {translate} from '@docusaurus/Translate';
import {
  getInitialDocTocCollapsed,
  writeDocTocCollapsed,
} from '@site/src/theme/docLayoutPrefs';

import styles from './styles.module.css';

type DocTocPanelProps = {
  sidebarColClassName: string;
  innerClassName: string;
  children: ReactNode;
};

function IconTocList(): ReactNode {
  return (
    <svg className={styles.tocControlIcon} viewBox="0 0 16 16" aria-hidden="true">
      <path
        d="M2.75 4.25h10.5M2.75 8h10.5M2.75 11.75H9"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconChevronLeft(): ReactNode {
  return (
    <svg className={styles.tocControlIcon} viewBox="0 0 16 16" aria-hidden="true">
      <path
        d="M10 4.5 6.5 8 10 11.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconChevronRight(): ReactNode {
  return (
    <svg className={styles.tocControlIcon} viewBox="0 0 16 16" aria-hidden="true">
      <path
        d="M6 4.5 9.5 8 6 11.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function DocTocPanel({
  sidebarColClassName,
  innerClassName,
  children,
}: DocTocPanelProps): ReactNode {
  const [collapsed, setCollapsed] = useState(getInitialDocTocCollapsed);

  useEffect(() => {
    document.documentElement.classList.toggle('it-doc-toc-collapsed', collapsed);
    writeDocTocCollapsed(collapsed);
  }, [collapsed]);

  const collapse = useCallback(() => setCollapsed(true), []);
  const expand = useCallback(() => setCollapsed(false), []);

  return (
    <div
      className={clsx(
        'col',
        'docSidebarCol',
        sidebarColClassName,
        collapsed && styles.docSidebarColCollapsed,
      )}>
      {collapsed ? (
        <button
          type="button"
          className={styles.tocExpandTab}
          onClick={expand}
          aria-label={translate({
            id: 'theme.itDoc.toc.expandAria',
            message: 'Показать содержание страницы',
            description: 'ARIA label for expanding the doc TOC panel',
          })}
          title={translate({
            id: 'theme.itDoc.toc.expandTitle',
            message: 'Содержание',
            description: 'Title for expanding the doc TOC panel',
          })}>
          <IconTocList />
          <IconChevronLeft />
        </button>
      ) : (
        <div className={innerClassName}>
          <div className={styles.tocPanelHeader}>
            <span className={styles.tocPanelTitle}>
              {translate({
                id: 'theme.itDoc.toc.title',
                message: 'Содержание',
                description: 'Heading above the in-page table of contents',
              })}
            </span>
            <button
              type="button"
              className={styles.tocCollapseBtn}
              onClick={collapse}
              aria-label={translate({
                id: 'theme.itDoc.toc.collapseAria',
                message: 'Скрыть содержание',
                description: 'ARIA label for collapsing the doc TOC panel',
              })}
              title={translate({
                id: 'theme.itDoc.toc.collapseTitle',
                message: 'Скрыть',
                description: 'Title for collapsing the doc TOC panel',
              })}>
              <IconChevronRight />
            </button>
          </div>
          {children}
        </div>
      )}
    </div>
  );
}
