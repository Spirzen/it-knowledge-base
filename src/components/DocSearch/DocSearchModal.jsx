import React, {
  useCallback,
  useDeferredValue,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import {createPortal} from 'react-dom';
import {useHistory} from '@docusaurus/router';
import useBaseUrl from '@docusaurus/useBaseUrl';
import useIsBrowser from '@docusaurus/useIsBrowser';
import clsx from 'clsx';
import {loadDocSearchIndex, searchDocs} from './docSearchEngine';
import DocSearchResult from './DocSearchResult';
import {CloseIcon, SearchIcon} from './icons';
import {useSearchShortcutLabel} from './useSearchShortcut';
import styles from './styles.module.css';

/**
 * @param {{ open: boolean, onClose: () => void }} props
 */
export default function DocSearchModal({open, onClose}) {
  const isBrowser = useIsBrowser();
  const history = useHistory();
  const baseUrl = useBaseUrl('/');
  const shortcut = useSearchShortcutLabel();
  const inputRef = useRef(null);
  const listRef = useRef(null);
  const [query, setQuery] = useState('');
  const deferredQuery = useDeferredValue(query);
  const [activeIndex, setActiveIndex] = useState(0);
  const [docs, setDocs] = useState([]);
  const [loadState, setLoadState] = useState('idle');

  const isPending = query !== deferredQuery;

  useEffect(() => {
    if (!open || !isBrowser) {
      return undefined;
    }
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open, isBrowser]);

  useEffect(() => {
    if (!open || !isBrowser) {
      return;
    }
    setQuery('');
    setActiveIndex(0);
    const id = window.requestAnimationFrame(() => inputRef.current?.focus());

    if (docs.length > 0) {
      setLoadState('ready');
      return () => window.cancelAnimationFrame(id);
    }

    let cancelled = false;
    setLoadState('loading');
    loadDocSearchIndex(baseUrl)
      .then((index) => {
        if (!cancelled) {
          setDocs(index.docs);
          setLoadState('ready');
        }
      })
      .catch(() => {
        if (!cancelled) {
          setLoadState('error');
        }
      });

    return () => {
      cancelled = true;
      window.cancelAnimationFrame(id);
    };
  }, [open, isBrowser, baseUrl, docs.length]);

  const results = useMemo(() => {
    if (loadState !== 'ready') {
      return [];
    }
    return searchDocs(docs, deferredQuery);
  }, [docs, deferredQuery, loadState]);

  useEffect(() => {
    setActiveIndex(0);
  }, [deferredQuery, results.length]);

  useEffect(() => {
    if (!open || results.length === 0) {
      return;
    }
    const active = listRef.current?.querySelector('[data-active="true"]');
    active?.scrollIntoView({block: 'nearest', behavior: 'smooth'});
  }, [open, activeIndex, results.length]);

  const close = useCallback(() => {
    onClose();
  }, [onClose]);

  const goToActive = useCallback(() => {
    const target = results[activeIndex];
    if (!target) {
      return;
    }
    history.push(target.u);
    close();
  }, [results, activeIndex, history, close]);

  useEffect(() => {
    if (!open || !isBrowser) {
      return undefined;
    }

    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        close();
        return;
      }
      if (results.length === 0) {
        return;
      }
      if (event.key === 'ArrowDown') {
        event.preventDefault();
        setActiveIndex((i) => (i + 1) % results.length);
      } else if (event.key === 'ArrowUp') {
        event.preventDefault();
        setActiveIndex((i) => (i - 1 + results.length) % results.length);
      } else if (event.key === 'Enter') {
        event.preventDefault();
        goToActive();
      }
    };

    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [open, isBrowser, close, results.length, goToActive]);

  if (!open || !isBrowser) {
    return null;
  }

  const trimmed = deferredQuery.trim();
  const showHint = loadState === 'ready' && trimmed.length < 2;
  const showEmpty = loadState === 'ready' && trimmed.length >= 2 && results.length === 0;

  return createPortal(
    <div
      className={clsx('it-doc-search', styles.backdrop)}
      role="presentation"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          close();
        }
      }}>
      <div
        className={styles.panel}
        role="dialog"
        aria-modal="true"
        aria-label="Поиск по энциклопедии">
        <div className={styles.header}>
          <SearchIcon className={styles.headerIcon} />
          <input
            ref={inputRef}
            type="search"
            className={styles.input}
            placeholder="Название, описание или раздел…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoComplete="off"
            spellCheck={false}
            aria-describedby="it-doc-search-hint"
          />
          <button
            type="button"
            className={styles.closeBtn}
            onClick={close}
            aria-label="Закрыть поиск">
            <CloseIcon />
          </button>
        </div>

        <div className={styles.body}>
          {loadState === 'loading' && (
            <div className={styles.status}>
              <div className={styles.skeleton} />
              <div className={styles.skeleton} />
              <div className={styles.skeletonShort} />
            </div>
          )}
          {loadState === 'error' && (
            <div className={styles.error}>
              Индекс поиска недоступен. Выполните{' '}
              <code>npm run docs:search-index</code> и перезапустите сайт.
            </div>
          )}
          {showHint && (
            <div className={styles.hint} id="it-doc-search-hint">
              <p className={styles.hintLead}>Быстрый поиск по заголовкам и описаниям статей</p>
              <p className={styles.hintSub}>Введите минимум 2 символа</p>
            </div>
          )}
          {showEmpty && (
            <div className={styles.empty}>
              <span className={styles.emptyIcon} aria-hidden>
                ∅
              </span>
              <p>Ничего не найдено по запросу «{trimmed}»</p>
            </div>
          )}
          {results.length > 0 && (
            <ul
              ref={listRef}
              className={clsx(styles.results, isPending && styles.resultsPending)}
              aria-live="polite"
              aria-busy={isPending}>
              {results.map((doc, index) => (
                <DocSearchResult
                  key={doc.u}
                  doc={doc}
                  query={deferredQuery}
                  active={index === activeIndex}
                  onSelect={close}
                />
              ))}
            </ul>
          )}
        </div>

        <footer className={styles.footer}>
          <span className={styles.footerItem}>
            <kbd className={styles.kbd}>↑</kbd>
            <kbd className={styles.kbd}>↓</kbd>
            <span>выбор</span>
          </span>
          <span className={styles.footerItem}>
            <kbd className={styles.kbd}>↵</kbd>
            <span>открыть</span>
          </span>
          <span className={styles.footerItem}>
            <kbd className={styles.kbd}>Esc</kbd>
            <span>закрыть</span>
          </span>
          <span className={styles.footerItem}>
            <kbd className={styles.kbd}>{shortcut}</kbd>
            <span>снова</span>
          </span>
          {results.length > 0 && (
            <span className={styles.footerCount}>
              {results.length} {results.length === 1 ? 'результат' : results.length < 5 ? 'результата' : 'результатов'}
            </span>
          )}
        </footer>
      </div>
    </div>,
    document.body,
  );
}
