import React, {useCallback, useEffect, useState} from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import clsx from 'clsx';
import {loadDocSearchIndex} from '@site/src/components/DocSearch/docSearchEngine';
import {pickRandomDoc} from './pickRandomDoc';
import styles from './styles.module.css';

function RandomArticleInner({className}) {
  const baseUrl = useBaseUrl('/');
  const [doc, setDoc] = useState(null);
  const [status, setStatus] = useState('loading');

  const roll = useCallback(async () => {
    try {
      const index = await loadDocSearchIndex(baseUrl);
      const next = pickRandomDoc(index.docs);
      setDoc(next);
      setStatus(next ? 'ready' : 'empty');
    } catch {
      setDoc(null);
      setStatus('error');
    }
  }, [baseUrl]);

  useEffect(() => {
    const run = () => roll();
    if (typeof window.requestIdleCallback === 'function') {
      const idleId = window.requestIdleCallback(run, {timeout: 2500});
      return () => window.cancelIdleCallback(idleId);
    }
    const timerId = window.setTimeout(run, 400);
    return () => window.clearTimeout(timerId);
  }, [roll]);

  return (
    <div className={clsx(styles.wrap, className)} aria-live="polite">
      <span className={styles.label}>Случайная статья:</span>
      {status === 'loading' && <span className={styles.loading}>подбираем…</span>}
      {status === 'error' && (
        <span className={styles.error}>индекс недоступен</span>
      )}
      {status === 'empty' && <span className={styles.muted}>пока нет статей</span>}
      {status === 'ready' && doc && (
        <>
          <Link className={styles.link} to={doc.u} title={doc.d || doc.t}>
            {doc.t}
          </Link>
          {doc.s ? <span className={styles.section}>{doc.s}</span> : null}
        </>
      )}
      <button
        type="button"
        className={styles.shuffle}
        onClick={roll}
        disabled={status === 'loading'}
        aria-label="Другая случайная статья"
        title="Другая статья">
        🎲
      </button>
    </div>
  );
}

export default function RandomArticle({className}) {
  return (
    <BrowserOnly
      fallback={
        <div className={clsx(styles.wrap, className)}>
          <span className={styles.label}>Случайная статья:</span>
          <span className={styles.loading}>…</span>
        </div>
      }>
      {() => <RandomArticleInner className={className} />}
    </BrowserOnly>
  );
}
