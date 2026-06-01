import React, {useCallback, useState} from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import clsx from 'clsx';
import {loadDocSearchIndex} from '@site/src/components/DocSearch/docSearchEngine';
import {pickRandomDoc} from './pickRandomDoc';
import styles from './styles.module.css';

function RandomArticleInner({className, variant = 'inline'}) {
  const baseUrl = useBaseUrl('/');
  const [doc, setDoc] = useState(null);
  /** @type {'idle' | 'loading' | 'ready' | 'empty' | 'error'} */
  const [status, setStatus] = useState('idle');
  const isDiscover = variant === 'discover';

  const roll = useCallback(async () => {
    setStatus('loading');
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

  const labelText = isDiscover ? 'Случайная статья' : 'Случайная статья:';
  const generateLabel = status === 'loading' ? 'Подбираем…' : 'Сгенерировать';

  const feedbackLine =
    status === 'loading' ? (
      <span className={styles.loading}>Загружаем каталог статей…</span>
    ) : status === 'error' ? (
      <span className={styles.error}>Индекс недоступен</span>
    ) : status === 'empty' ? (
      <span className={styles.muted}>Пока нет статей</span>
    ) : null;

  const articleBlock =
    status === 'ready' && doc ? (
      <div className={styles.articleBlock}>
        <Link className={styles.link} to={doc.u} title={doc.d || doc.t}>
          {doc.t}
        </Link>
        {doc.s ? <span className={styles.section}>{doc.s}</span> : null}
      </div>
    ) : null;

  return (
    <div
      className={clsx(
        styles.wrap,
        isDiscover && styles.wrapDiscover,
        className,
      )}
      aria-live="polite">
      <span className={styles.label}>{labelText}</span>
      {isDiscover ? (
        <>
          {articleBlock}
          {feedbackLine}
          <button
            type="button"
            className={styles.shuffle}
            onClick={roll}
            disabled={status === 'loading'}
            aria-label="Сгенерировать случайную статью"
            aria-busy={status === 'loading'}>
            {generateLabel}
          </button>
        </>
      ) : (
        <>
          {status === 'ready' && doc ? (
            <>
              <Link className={styles.link} to={doc.u} title={doc.d || doc.t}>
                {doc.t}
              </Link>
              {doc.s ? <span className={styles.section}>{doc.s}</span> : null}
            </>
          ) : (
            feedbackLine
          )}
          <button
            type="button"
            className={styles.shuffle}
            onClick={roll}
            disabled={status === 'loading'}
            aria-label="Сгенерировать случайную статью"
            aria-busy={status === 'loading'}>
            {generateLabel}
          </button>
        </>
      )}
    </div>
  );
}

export default function RandomArticle({className, variant = 'inline'}) {
  const isDiscover = variant === 'discover';

  return (
    <BrowserOnly
      fallback={
        <div
          className={clsx(
            styles.wrap,
            isDiscover && styles.wrapDiscover,
            className,
          )}>
          <span className={styles.label}>
            {isDiscover ? 'Случайная статья' : 'Случайная статья:'}
          </span>
          <button type="button" className={styles.shuffle} disabled>
            Сгенерировать
          </button>
        </div>
      }>
      {() => <RandomArticleInner className={className} variant={variant} />}
    </BrowserOnly>
  );
}
