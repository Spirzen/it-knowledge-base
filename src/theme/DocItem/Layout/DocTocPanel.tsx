import React, {useCallback, useEffect, useState, type ReactNode} from 'react';
import clsx from 'clsx';
import {translate} from '@docusaurus/Translate';
import IconArrow from '@theme/Icon/Arrow';
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

  if (collapsed) {
    return (
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
        <span className={styles.tocExpandTabLabel}>
          {translate({
            id: 'theme.itDoc.toc.expandShort',
            message: 'Содержание',
            description: 'Short label on collapsed TOC tab',
          })}
        </span>
        <IconArrow className={styles.tocExpandTabIcon} />
      </button>
    );
  }

  return (
    <div className={clsx('col', 'docSidebarCol', sidebarColClassName)}>
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
            <IconArrow className={styles.tocCollapseBtnIcon} />
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}
