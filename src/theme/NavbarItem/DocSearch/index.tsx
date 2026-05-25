import React, {type ReactNode, useCallback, useEffect, useState} from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';
import DocSearchModal from '@site/src/components/DocSearch/DocSearchModal';
import {SearchIcon} from '@site/src/components/DocSearch/icons';
import {useSearchShortcutLabel} from '@site/src/components/DocSearch/useSearchShortcut';
import type {Props} from './types';

import styles from '@site/src/components/DocSearch/styles.module.css';

function isModKey(event: KeyboardEvent): boolean {
  return event.metaKey || event.ctrlKey;
}

function DocSearchButton(): ReactNode {
  const [open, setOpen] = useState(false);
  const shortcut = useSearchShortcutLabel();

  const openSearch = useCallback(() => setOpen(true), []);
  const closeSearch = useCallback(() => setOpen(false), []);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (isModKey(event) && event.key.toLowerCase() === 'k') {
        const tag = (event.target as HTMLElement | null)?.tagName;
        if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT') {
          return;
        }
        event.preventDefault();
        setOpen((was) => !was);
      }
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, []);

  return (
    <div className={styles.navbarWrap}>
      <button
        type="button"
        className={`it-doc-search-trigger ${styles.trigger}`}
        onClick={openSearch}
        aria-label="Поиск по сайту"
        aria-expanded={open}
        aria-haspopup="dialog"
        title={`Поиск (${shortcut})`}>
        <SearchIcon className={styles.triggerIcon} />
        <span className={styles.triggerLabel}>Поиск…</span>
        <kbd className={styles.triggerKbd}>{shortcut}</kbd>
      </button>
      <DocSearchModal open={open} onClose={closeSearch} />
    </div>
  );
}

export default function NavbarItemDocSearch(_props: Props): ReactNode {
  return (
    <BrowserOnly
      fallback={
        <span className={`it-doc-search-trigger ${styles.trigger}`}>
          <SearchIcon className={styles.triggerIcon} />
        </span>
      }>
      {() => <DocSearchButton />}
    </BrowserOnly>
  );
}
