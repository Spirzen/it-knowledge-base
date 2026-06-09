import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react';
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
import EmbedClickGate from '@site/src/components/shared/EmbedClickGate';
import {EMBED_CODE_LOADING_MESSAGE} from '@site/src/components/shared/embedMessages';
import {acquirePageScrollLock} from '@site/src/components/shared/embedScrollLock';
import {
  useStableEmbedHeight,
  useStableIframeSrc,
} from '@site/src/components/shared/useEmbedViewport';
import styles from './ExternalCodeEmbed.module.css';

/**
 * Встраивает пример из IT Code Examples через iframe с авто-высотой.
 *
 * @param {{ example?: string, src?: string, title: string, minHeight?: number }} props
 */
function ExternalCodeEmbedInner({autoLoad = false, example, src, title, minHeight = 200}) {
  const {siteConfig} = useDocusaurusContext();
  const {colorMode} = useColorMode();
  const iframeRef = useRef(null);
  const [userActivated, setUserActivated] = useState(autoLoad);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const hostRef = useRef(null);
  const {height, scheduleHeight} = useStableEmbedHeight(hostRef, minHeight, isFullscreen);

  const baseUrl = getCodeExamplesBaseUrl(siteConfig);

  const buildSrc = useCallback(
    (theme) => {
      if (src) {
        try {
          const url = new URL(src, window.location.origin);
          url.searchParams.set('theme', theme);
          return url.toString();
        } catch {
          return src;
        }
      }
      if (example) {
        const url = buildCodeExampleEmbedUrl(baseUrl, example);
        return `${url}${url.includes('?') ? '&' : '?'}theme=${theme}`;
      }
      return '';
    },
    [baseUrl, example, src],
  );

  const srcKey = useMemo(() => JSON.stringify({example, src}), [example, src]);
  const {iframeSrc, releaseLoadSlot} = useStableIframeSrc(buildSrc, userActivated, colorMode, srcKey);

  const fullPageUrl = useMemo(() => {
    if (example) return buildCodeExamplePageUrl(baseUrl, example);
    if (!iframeSrc) return '';
    return iframeSrc
      .replace(/\/e\/embed\//, '/e/')
      .replace(/\?embed=1$/, '')
      .replace(/\?embed=1&/, '?')
      .replace(/&embed=1/, '');
  }, [baseUrl, example, iframeSrc]);

  const codeExamplesOrigin = useMemo(() => {
    try {
      return new URL(baseUrl).origin;
    } catch {
      return new URL(CODE_EXAMPLES_PRODUCTION_URL).origin;
    }
  }, [baseUrl]);

  const sendThemeToFrame = useCallback(() => {
    const frame = iframeRef.current;
    if (!frame?.contentWindow) return;
    frame.contentWindow.postMessage(
      {type: 'it-code-theme', theme: colorMode},
      codeExamplesOrigin,
    );
  }, [codeExamplesOrigin, colorMode]);

  useEffect(() => {
    if (!iframeSrc) {
      setIsLoaded(false);
    }
  }, [iframeSrc]);

  useEffect(() => {
    if (!iframeSrc || isLoaded) {
      return undefined;
    }
    const timer = window.setTimeout(() => setIsLoaded(true), 4000);
    return () => window.clearTimeout(timer);
  }, [iframeSrc, isLoaded]);

  useEffect(() => {
    if (!iframeSrc) return undefined;

    const onMessage = (event) => {
      if (!isTrustedCodeExamplesOrigin(event.origin, siteConfig)) return;
      const frame = iframeRef.current;
      if (!frame?.contentWindow || event.source !== frame.contentWindow) return;

      const data = event.data;
      if (!data || typeof data !== 'object') return;

      if (data.type === 'it-code-embed-height') {
        if (!isFullscreen) {
          scheduleHeight(data.height);
        }
        return;
      }

      if (data.type === 'it-code-fullscreen') {
        setIsFullscreen(Boolean(data.active));
        return;
      }

      if (data.type === 'it-code-copy') {
        const text = typeof data.text === 'string' ? data.text : '';
        const copyId = data.id;
        const reply = (ok) => {
          if (!copyId || !frame?.contentWindow) return;
          frame.contentWindow.postMessage(
            {type: 'it-code-copy-result', id: copyId, ok: Boolean(ok)},
            codeExamplesOrigin,
          );
        };
        if (!text) {
          reply(false);
          return;
        }
        navigator.clipboard
          .writeText(text)
          .then(() => reply(true))
          .catch(() => reply(false));
      }
    };

    window.addEventListener('message', onMessage);
    return () => window.removeEventListener('message', onMessage);
  }, [codeExamplesOrigin, iframeSrc, isFullscreen, scheduleHeight, siteConfig]);

  useEffect(() => {
    if (!isFullscreen) return undefined;
    const releaseScroll = acquirePageScrollLock();
    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        const frame = iframeRef.current;
        if (frame?.contentWindow) {
          frame.contentWindow.postMessage({type: 'it-code-fullscreen-close'}, codeExamplesOrigin);
        }
        setIsFullscreen(false);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => {
      releaseScroll();
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [codeExamplesOrigin, isFullscreen]);

  useEffect(() => {
    sendThemeToFrame();
  }, [colorMode, iframeSrc, sendThemeToFrame]);

  const showLoadingMask = Boolean(iframeSrc) && !isLoaded;

  if (!buildSrc(colorMode)) {
    return (
      <div className={styles.error} role="alert">
        Укажите <code>example</code> (например <code>python/hello-world</code>) или полный{' '}
        <code>src</code>.
      </div>
    );
  }

  if (!userActivated) {
    return (
      <EmbedClickGate
        kind="code"
        title={title}
        minHeight={minHeight}
        fullPageUrl={fullPageUrl}
        onActivate={() => setUserActivated(true)}
      />
    );
  }

  return (
    <div
      ref={hostRef}
      className={isFullscreen ? `${styles.wrap} ${styles.wrapFullscreen}` : styles.wrap}
      data-external-code-embed
      data-fullscreen={isFullscreen ? 'true' : undefined}
      style={!isFullscreen ? {minHeight: `${minHeight}px`} : undefined}>
      <div className={styles.frameHost}>
        {showLoadingMask && !isFullscreen && (
          <div className={styles.loadingMask} role="status" aria-live="polite">
            {EMBED_CODE_LOADING_MESSAGE}
          </div>
        )}
        {iframeSrc ? (
          <iframe
            ref={iframeRef}
            className={styles.frame}
            src={iframeSrc}
            title={title}
            loading="eager"
            style={{height: isFullscreen ? '100%' : `${height}px`}}
            referrerPolicy="no-referrer-when-downgrade"
            allow="fullscreen; clipboard-write"
            onLoad={() => {
              setIsLoaded(true);
              releaseLoadSlot();
              sendThemeToFrame();
            }}
            onError={() => {
              releaseLoadSlot();
            }}
          />
        ) : (
          <div className={styles.skeletonInline} style={{minHeight: `${minHeight}px`}} role="status">
            {EMBED_CODE_LOADING_MESSAGE}
          </div>
        )}
      </div>
      {!isFullscreen && fullPageUrl && (
        <div className={styles.caption}>
          <a href={fullPageUrl} target="_blank" rel="noopener noreferrer">
            Полный пример на code.spirzen.ru ↗
          </a>
        </div>
      )}
    </div>
  );
}

export default function ExternalCodeEmbed(props) {
  const minHeight = props.minHeight ?? 200;

  return (
    <BrowserOnly
      fallback={
        <div className={styles.skeleton} style={{minHeight}} role="status" aria-live="polite">
          {EMBED_CODE_LOADING_MESSAGE}
        </div>
      }>
      {() => <ExternalCodeEmbedInner {...props} />}
    </BrowserOnly>
  );
}
