import React, {useCallback, useState} from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';
import {useDoc} from '@docusaurus/plugin-content-docs/client';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import {
  exportArticleToPdf,
  printArticleAsPdf,
} from '@site/src/utils/exportArticlePdf';

import styles from './ArticlePdfExport.module.css';

function PdfIcon() {
  return (
    <svg
      className={styles.icon}
      viewBox="0 0 24 24"
      width="18"
      height="18"
      aria-hidden="true"
      focusable="false"
    >
      <path
        fill="currentColor"
        d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zm-1 2 5 5h-5V4zM8 13h8v2H8v-2zm0 4h5v2H8v-2z"
      />
    </svg>
  );
}

function ArticlePdfExportInner() {
  const {metadata, frontMatter} = useDoc();
  const {siteConfig} = useDocusaurusContext();
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState('');

  if (frontMatter.pdf_export === false) {
    return null;
  }

  const title =
    metadata.title ||
    frontMatter.title ||
    siteConfig.title ||
    'Статья';

  const handleExport = useCallback(async () => {
    setError('');
    setStatus('loading');

    try {
      const permalink = new URL(metadata.permalink, window.location.origin).href;
      await exportArticleToPdf({
        title,
        permalink,
        filename: title,
      });
      setStatus('done');
      window.setTimeout(() => setStatus('idle'), 2500);
    } catch (err) {
      console.error('PDF export failed:', err);
      setStatus('idle');
      setError(
        'Не удалось сформировать PDF автоматически. Открываем диалог печати — выберите "Сохранить как PDF".',
      );
      printArticleAsPdf();
    }
  }, [metadata.permalink, title]);

  return (
    <div className={`article-pdf-toolbar ${styles.toolbar}`}>
      <button
        type="button"
        className={styles.button}
        onClick={handleExport}
        disabled={status === 'loading'}
        aria-busy={status === 'loading'}
        title="Скачать статью в формате PDF"
      >
        <PdfIcon />
        <span>
          {status === 'loading'
            ? 'Формирование PDF…'
            : status === 'done'
              ? 'PDF сохранён'
              : 'Сохранить PDF'}
        </span>
      </button>
      {error && (
        <p className={styles.hint} role="status">
          {error}
        </p>
      )}
    </div>
  );
}

export default function ArticlePdfExport() {
  return (
    <BrowserOnly fallback={null}>
      {() => <ArticlePdfExportInner />}
    </BrowserOnly>
  );
}
