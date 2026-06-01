import React, {useCallback, useEffect, useRef} from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';
import clsx from 'clsx';
import {useWindowSize} from '@docusaurus/theme-common';
import {useDocSearch} from './DocSearchContext';
import DocSearchResult from './DocSearchResult';
import {SearchIcon} from './icons';
import {useSearchShortcutLabel} from './useSearchShortcut';
import styles from './styles.module.css';

function DocSearchPanel({
  deferredQuery,
  loadState,
  results,
  isPending,
  activeIndex,
  closePanel,
}) {
  const listRef = useRef(null);
  const trimmed = deferredQuery.trim();
  const showHint = loadState === 'ready' && trimmed.length < 2;
  const showEmpty = loadState === 'ready' && trimmed.length >= 2 && results.length === 0;

  useEffect(() => {
    if (results.length === 0) {
      return;
    }
    const active = listRef.current?.querySelector('[data-active="true"]');
    active?.scrollIntoView({block: 'nearest', behavior: 'smooth'});
  }, [activeIndex, results.length]);

  return (
    <div className={styles.dropdownPanel} role="listbox" aria-label="Результаты поиска">
      {loadState === 'loading' && (
        <div className={styles.status}>
          <div className={styles.skeleton} />
          <div className={styles.skeleton} />
          <div className={styles.skeletonShort} />
        </div>
      )}
      {loadState === 'error' && (
        <div className={styles.error}>
          Индекс поиска недоступен. Выполните <code>npm run docs:search-index</code> и
          перезапустите сайт.
        </div>
      )}
      {showHint && (
        <div className={styles.hint}>
          <p className={styles.hintLead}>Поиск по заголовкам и описаниям статей</p>
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
          className={clsx(styles.results, isPending && styles.resultsPending)}>
          {results.map((doc, index) => (
            <DocSearchResult
              key={doc.u}
              doc={doc}
              query={deferredQuery}
              active={index === activeIndex}
              onSelect={closePanel}
            />
          ))}
        </ul>
      )}
    </div>
  );
}

function DocSearchBarInner({variant = 'navbar', placement = 'navbar', className}) {
  const shortcut = useSearchShortcutLabel();
  const rootRef = useRef(null);
  const {
    query,
    setQuery,
    deferredQuery,
    activeIndex,
    results,
    loadState,
    isPending,
    activeSurface,
    openPanel,
    closePanel,
    navbarInputRef,
    heroInputRef,
  } = useDocSearch();

  const inputRef = variant === 'hero' ? heroInputRef : navbarInputRef;
  const otherInputRef = variant === 'hero' ? navbarInputRef : heroInputRef;
  const isHero = variant === 'hero';
  const resultsId = `it-doc-search-results-${variant}`;
  const windowSize = useWindowSize();
  const hideNavbarOnMobile =
    placement === 'navbar' &&
    variant === 'navbar' &&
    (windowSize === 'mobile' || windowSize === 'tablet');

  const showDropdown = activeSurface === variant;

  const openThisPanel = useCallback(() => openPanel(variant), [openPanel, variant]);

  const onBlur = useCallback(
    (event) => {
      const next = event.relatedTarget;
      if (next && rootRef.current?.contains(next)) {
        return;
      }
      if (next === otherInputRef.current) {
        return;
      }
      window.setTimeout(() => {
        const active = document.activeElement;
        if (otherInputRef.current === active) {
          return;
        }
        if (!rootRef.current?.contains(active)) {
          if (activeSurface === variant) {
            closePanel();
          }
        }
      }, 120);
    },
    [activeSurface, variant, closePanel, otherInputRef],
  );

  if (hideNavbarOnMobile) {
    return null;
  }

  return (
    <div
      ref={rootRef}
      className={clsx(
        'it-doc-search-bar',
        styles.bar,
        isHero && styles.barHero,
        className,
      )}>
      <div className={styles.field}>
        <SearchIcon className={styles.fieldIcon} aria-hidden />
        <input
          ref={inputRef}
          type="search"
          className={styles.fieldInput}
          placeholder={isHero ? 'Найти статью, термин, тему…' : 'Поиск по сайту…'}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={openThisPanel}
          onBlur={onBlur}
          autoComplete="off"
          spellCheck={false}
          aria-label="Поиск по сайту"
          aria-expanded={showDropdown}
          aria-controls={showDropdown ? resultsId : undefined}
        />
        <kbd className={styles.fieldKbd}>{shortcut}</kbd>
      </div>
      {showDropdown && (
        <div id={resultsId} className={clsx(styles.dropdown, 'it-doc-search-dropdown')}>
          <DocSearchPanel
            deferredQuery={deferredQuery}
            loadState={loadState}
            results={results}
            isPending={isPending}
            activeIndex={activeIndex}
            closePanel={() => {
              closePanel();
              setQuery('');
            }}
          />
        </div>
      )}
    </div>
  );
}

export default function DocSearchBar({
  variant = 'navbar',
  placement = 'navbar',
  className,
}) {
  return (
    <BrowserOnly
      fallback={
        <div className={clsx(styles.bar, className)}>
          <div className={styles.field}>
            <span className={styles.fieldPlaceholder}>Поиск…</span>
          </div>
        </div>
      }>
      {() => (
        <DocSearchBarInner
          variant={variant}
          placement={placement}
          className={className}
        />
      )}
    </BrowserOnly>
  );
}
