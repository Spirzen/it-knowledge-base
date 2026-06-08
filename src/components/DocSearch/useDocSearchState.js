import {useCallback, useDeferredValue, useEffect, useMemo, useRef, useState} from 'react';
import {useHistory} from '@docusaurus/router';
import useBaseUrl from '@docusaurus/useBaseUrl';
import {scheduleIdleWork} from '@site/src/components/shared/deferredIdle';
import {loadDocSearchIndex, searchDocs} from './docSearchEngine';

function isModKey(event) {
  return event.metaKey || event.ctrlKey;
}

export function useDocSearchState() {
  const history = useHistory();
  const baseUrl = useBaseUrl('/');
  const navbarInputRef = useRef(null);
  const heroInputRef = useRef(null);
  const docsRef = useRef([]);

  const [query, setQuery] = useState('');
  const deferredQuery = useDeferredValue(query);
  const [activeIndex, setActiveIndex] = useState(0);
  const [loadState, setLoadState] = useState('idle');
  const loadStateRef = useRef('idle');
  /** @type {null | 'navbar' | 'hero'} */
  const [activeSurface, setActiveSurface] = useState(null);

  loadStateRef.current = loadState;
  const isPending = query !== deferredQuery;

  const ensureIndex = useCallback(() => {
    if (loadStateRef.current === 'ready' || loadStateRef.current === 'loading') {
      return;
    }
    loadStateRef.current = 'loading';
    setLoadState('loading');
    loadDocSearchIndex(baseUrl)
      .then((index) => {
        docsRef.current = index.docs;
        loadStateRef.current = 'ready';
        setLoadState('ready');
      })
      .catch(() => {
        loadStateRef.current = 'error';
        setLoadState('error');
      });
  }, [baseUrl]);

  const results = useMemo(() => {
    if (loadState !== 'ready') {
      return [];
    }
    return searchDocs(docsRef.current, deferredQuery);
  }, [deferredQuery, loadState]);

  useEffect(() => {
    setActiveIndex(0);
  }, [deferredQuery, results.length]);

  const openPanel = useCallback(
    (surface) => {
      ensureIndex();
      setActiveSurface(surface);
    },
    [ensureIndex],
  );

  const closePanel = useCallback(() => {
    setActiveSurface(null);
  }, []);

  const goToActive = useCallback(() => {
    const target = results[activeIndex];
    if (!target) {
      return;
    }
    history.push(target.u);
    setQuery('');
    closePanel();
  }, [results, activeIndex, history, closePanel]);

  const focusNavbarSearch = useCallback(() => {
    ensureIndex();

    const isMobile =
      typeof window !== 'undefined' &&
      window.matchMedia('(max-width: 996px)').matches;

    if (isMobile && heroInputRef.current) {
      heroInputRef.current.focus();
      setActiveSurface('hero');
      return;
    }

    navbarInputRef.current?.focus();
    setActiveSurface('navbar');
  }, [ensureIndex]);

  useEffect(() => {
    let removeKeydown = () => {};

    const cancelIdle = scheduleIdleWork(() => {
      const onKeyDown = (event) => {
        if (isModKey(event) && event.key.toLowerCase() === 'k') {
          const tag = event.target?.tagName;
          if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT') {
            return;
          }
          event.preventDefault();
          focusNavbarSearch();
          return;
        }

        if (!activeSurface || results.length === 0) {
          return;
        }

        const tag = event.target?.tagName;
        if (tag !== 'INPUT' && tag !== 'TEXTAREA') {
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
        } else if (event.key === 'Escape') {
          event.preventDefault();
          closePanel();
          navbarInputRef.current?.blur();
          heroInputRef.current?.blur();
        }
      };

      document.addEventListener('keydown', onKeyDown);
      removeKeydown = () => document.removeEventListener('keydown', onKeyDown);
    });

    return () => {
      cancelIdle();
      removeKeydown();
    };
  }, [activeSurface, results.length, goToActive, closePanel, focusNavbarSearch]);

  return {
    query,
    setQuery,
    deferredQuery,
    activeIndex,
    setActiveIndex,
    results,
    loadState,
    isPending,
    activeSurface,
    openPanel,
    closePanel,
    goToActive,
    navbarInputRef,
    heroInputRef,
    focusNavbarSearch,
    ensureIndex,
  };
}
