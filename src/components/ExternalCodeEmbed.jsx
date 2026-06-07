import React, {useEffect, useMemo, useRef, useState} from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import {useColorMode} from '@docusaurus/theme-common';
import {
  buildCodeExampleEmbedUrl,
  buildCodeExamplePageUrl,
  CODE_EXAMPLES_PRODUCTION_URL,
  getCodeExamplesBaseUrl,
  isTrustedCodeExamplesOrigin,
} from '@site/src/constants/codeExamples';
import styles from './ExternalCodeEmbed.module.css';

/**
 * Встраивает пример из IT Code Examples через iframe с авто-высотой.
 *
 * @param {{ example?: string, src?: string, title: string, minHeight?: number }} props
 */
function ExternalCodeEmbedInner({example, src, title, minHeight = 200}) {
  const {siteConfig} = useDocusaurusContext();
  const {colorMode} = useColorMode();
  const iframeRef = useRef(null);
  const [height, setHeight] = useState(minHeight);

  const baseUrl = getCodeExamplesBaseUrl(siteConfig);

  const embedSrc = useMemo(() => {
    if (src) {
      try {
        const url = new URL(src, window.location.origin);
        url.searchParams.set('theme', colorMode);
        return url.toString();
      } catch {
        return src;
      }
    }
    if (example) {
      const url = buildCodeExampleEmbedUrl(baseUrl, example);
      return `${url}${url.includes('?') ? '&' : '?'}theme=${colorMode}`;
    }
    return '';
  }, [baseUrl, colorMode, example, src]);

  const fullPageUrl = useMemo(() => {
    if (example) return buildCodeExamplePageUrl(baseUrl, example);
    return embedSrc
      .replace(/\/e\/embed\//, '/e/')
      .replace(/\?embed=1$/, '')
      .replace(/\?embed=1&/, '?')
      .replace(/&embed=1/, '');
  }, [baseUrl, embedSrc, example]);

  const codeExamplesOrigin = useMemo(() => {
    try {
      return new URL(baseUrl).origin;
    } catch {
      return new URL(CODE_EXAMPLES_PRODUCTION_URL).origin;
    }
  }, [baseUrl]);

  const sendThemeToFrame = () => {
    const frame = iframeRef.current;
    if (!frame?.contentWindow) return;
    frame.contentWindow.postMessage(
      {type: 'it-code-theme', theme: colorMode},
      codeExamplesOrigin,
    );
  };

  useEffect(() => {
    if (!embedSrc) return undefined;

    const onMessage = (event) => {
      if (!isTrustedCodeExamplesOrigin(event.origin, siteConfig)) return;
      const data = event.data;
      if (!data || data.type !== 'it-code-embed-height') return;
      if (typeof data.height !== 'number' || data.height < 48) return;
      setHeight(Math.max(minHeight, Math.ceil(data.height + 2)));
    };

    window.addEventListener('message', onMessage);
    return () => window.removeEventListener('message', onMessage);
  }, [embedSrc, minHeight, siteConfig]);

  useEffect(() => {
    sendThemeToFrame();
  }, [colorMode, embedSrc, codeExamplesOrigin]);

  if (!embedSrc) {
    return (
      <div className={styles.error} role="alert">
        Укажите <code>example</code> (например <code>python/hello-world</code>) или полный{' '}
        <code>src</code>.
      </div>
    );
  }

  return (
    <div className={styles.wrap} data-external-code-embed>
      <iframe
        ref={iframeRef}
        className={styles.frame}
        src={embedSrc}
        title={title}
        loading="lazy"
        style={{height: `${height}px`}}
        referrerPolicy="no-referrer-when-downgrade"
        onLoad={sendThemeToFrame}
      />
      <div className={styles.caption}>
        <a href={fullPageUrl} target="_blank" rel="noopener noreferrer">
          Полный пример на code.spirzen.ru ↗
        </a>
      </div>
    </div>
  );
}

export default function ExternalCodeEmbed(props) {
  const minHeight = props.minHeight ?? 200;

  return (
    <BrowserOnly
      fallback={
        <div className={styles.skeleton} style={{minHeight}} aria-hidden="true">
          Загрузка примера кода…
        </div>
      }>
      {() => <ExternalCodeEmbedInner {...props} />}
    </BrowserOnly>
  );
}
