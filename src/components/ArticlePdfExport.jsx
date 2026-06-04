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

function ShareIcon() {
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
        d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7a3.27 3.27 0 0 0 0-1.39l7.05-4.11A3.27 3.27 0 0 0 18 7.91c1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.03.47.08.69L8.04 9.81a3.27 3.27 0 0 0-2.04-.71C4.34 9.1 3 10.44 3 12s1.34 2.9 3 2.9c.76 0 1.44-.3 1.96-.77l7.05 4.11c-.05.22-.08.45-.08.69 0 1.66 1.34 3 3 3s3-1.34 3-3-1.34-3-3-3z"
      />
    </svg>
  );
}

async function copyArticleUrl(url) {
  await navigator.clipboard.writeText(url);
}

async function shareArticle({title, url}) {
  const payload = {
    title,
    text: `Посмотри статью «${title}»`,
    url,
  };

  if (typeof navigator.share !== 'function') {
    await copyArticleUrl(url);
    return 'copied';
  }

  try {
    if (navigator.canShare?.(payload)) {
      await navigator.share(payload);
    } else if (navigator.canShare?.({url})) {
      await navigator.share({url});
    } else {
      await navigator.share(payload);
    }
    return 'shared';
  } catch (err) {
    if (err?.name === 'AbortError') {
      return 'idle';
    }
    await copyArticleUrl(url);
    return 'copied';
  }
}

function ArticlePdfExportInner() {
  const {metadata, frontMatter} = useDoc();
  const {siteConfig} = useDocusaurusContext();
  const [status, setStatus] = useState('idle');
  const [shareStatus, setShareStatus] = useState('idle');
  const [error, setError] = useState('');

  const pdfExportEnabled = frontMatter.pdf_export !== false;

  const title =
    metadata.title ||
    frontMatter.title ||
    siteConfig.title ||
    'Статья';

  const permalink = new URL(metadata.permalink, window.location.origin).href;

  const handleShare = useCallback(async () => {
    setShareStatus('loading');
    try {
      const result = await shareArticle({title, url: permalink});
      if (result === 'shared') {
        setShareStatus('shared');
      } else if (result === 'copied') {
        setShareStatus('copied');
      } else {
        setShareStatus('idle');
      }
      if (result !== 'idle') {
        window.setTimeout(() => setShareStatus('idle'), 2500);
      }
    } catch (err) {
      console.error('Share failed:', err);
      setShareStatus('idle');
    }
  }, [permalink, title]);

  const handleExport = useCallback(async () => {
    setError('');
    setStatus('loading');

    try {
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
  }, [permalink, title]);

  return (
    <div className={`article-pdf-toolbar ${styles.toolbar}`}>
      <div className={styles.actions}>
        <button
          type="button"
          className={styles.button}
          onClick={handleShare}
          disabled={shareStatus === 'loading'}
          aria-busy={shareStatus === 'loading'}
          title="Поделиться ссылкой на статью"
        >
          <ShareIcon />
          <span>
            {shareStatus === 'loading'
              ? 'Открываем…'
              : shareStatus === 'shared'
                ? 'Готово'
                : shareStatus === 'copied'
                  ? 'Ссылка скопирована'
                  : 'Поделиться'}
          </span>
        </button>
        {pdfExportEnabled && (
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
        )}
      </div>
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
