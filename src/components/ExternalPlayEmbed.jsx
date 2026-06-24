import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import {useColorMode} from '@docusaurus/theme-common';
import {
  buildPlayEmbedUrl,
  buildPlayPageUrl,
  getPlayBaseUrl,
  isTrustedPlayOrigin,
  PLAY_PRODUCTION_URL,
} from '@site/src/constants/playExamples';
import EmbedClickGate from '@site/src/components/shared/EmbedClickGate';
import {EMBED_PLAY_LOADING_MESSAGE} from '@site/src/components/shared/embedMessages';
import {acquirePageScrollLock} from '@site/src/components/shared/embedScrollLock';
import {
  useStableEmbedHeight,
  useStableIframeSrc,
} from '@site/src/components/shared/useEmbedViewport';
import styles from './ExternalPlayEmbed.module.css';

/**
 * Встраивает интерактивное демо из IT Play через iframe с авто-высотой.
 *
 * @param {{ example?: string, src?: string, title: string, minHeight?: number, playProps?: Record<string, unknown>, embedData?: Record<string, unknown> }} props
 */
function ExternalPlayEmbedInner({autoLoad = false, example, src, title, minHeight = 320, playProps, embedData}) {
  const {siteConfig} = useDocusaurusContext();
  const {colorMode} = useColorMode();
  const iframeRef = useRef(null);
  const [userActivated, setUserActivated] = useState(autoLoad);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [heightSettling, setHeightSettling] = useState(false);
  const hostRef = useRef(null);
  const wasFullscreenRef = useRef(false);
  const {height, scheduleHeight} = useStableEmbedHeight(hostRef, minHeight, isFullscreen);

  const baseUrl = getPlayBaseUrl(siteConfig);

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
        const url = new URL(buildPlayEmbedUrl(baseUrl, example));
        url.searchParams.set('theme', theme);
        if (playProps && typeof playProps === 'object') {
          for (const [key, value] of Object.entries(playProps)) {
            if (value === undefined || value === null) continue;
            url.searchParams.set(
              key,
              typeof value === 'object' ? JSON.stringify(value) : String(value),
            );
          }
        }
        return url.toString();
      }
      return '';
    },
    [baseUrl, example, playProps, src],
  );

  const srcKey = useMemo(
    () => JSON.stringify({example, src, playProps}),
    [example, playProps, src],
  );
  const {iframeSrc, releaseLoadSlot} = useStableIframeSrc(buildSrc, userActivated, colorMode, srcKey);

  const fullPageUrl = useMemo(() => {
    if (example) return buildPlayPageUrl(baseUrl, example);
    if (!iframeSrc) return '';
    return iframeSrc.replace(/\/p\/embed\//, '/p/');
  }, [baseUrl, example, iframeSrc]);

  const playOrigin = useMemo(() => {
    try {
      return new URL(baseUrl).origin;
    } catch {
      return new URL(PLAY_PRODUCTION_URL).origin;
    }
  }, [baseUrl]);

  const sendThemeToFrame = useCallback(() => {
    const frame = iframeRef.current;
    if (!frame?.contentWindow) return;
    frame.contentWindow.postMessage({type: 'it-play-theme', theme: colorMode}, playOrigin);
  }, [colorMode, playOrigin]);

  const sendEmbedDataToFrame = useCallback(() => {
    const frame = iframeRef.current;
    if (!frame?.contentWindow || embedData == null) return;
    frame.contentWindow.postMessage({type: 'it-play-embed-data', payload: embedData}, playOrigin);
  }, [embedData, playOrigin]);

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
    if (wasFullscreenRef.current && !isFullscreen) {
      setHeightSettling(true);
    }
    wasFullscreenRef.current = isFullscreen;
    if (isFullscreen) {
      setHeightSettling(false);
    }
  }, [isFullscreen]);

  useEffect(() => {
    if (!heightSettling) {
      return undefined;
    }
    const timer = window.setTimeout(() => setHeightSettling(false), 950);
    return () => window.clearTimeout(timer);
  }, [height, heightSettling]);

  useEffect(() => {
    if (!iframeSrc) return undefined;

    const onMessage = (event) => {
      if (!isTrustedPlayOrigin(event.origin, siteConfig)) return;
      const frame = iframeRef.current;
      if (!frame?.contentWindow || event.source !== frame.contentWindow) return;

      const data = event.data;
      if (!data || typeof data !== 'object') return;

      if (data.type === 'it-play-embed-height') {
        scheduleHeight(data.height);
        return;
      }

      if (data.type === 'it-play-fullscreen') {
        setIsFullscreen(Boolean(data.active));
      }
    };

    window.addEventListener('message', onMessage);
    return () => window.removeEventListener('message', onMessage);
  }, [iframeSrc, isFullscreen, scheduleHeight, siteConfig]);

  useEffect(() => {
    if (!isFullscreen) return undefined;
    const releaseScroll = acquirePageScrollLock();
    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        const frame = iframeRef.current;
        if (frame?.contentWindow) {
          frame.contentWindow.postMessage({type: 'it-play-fullscreen-close'}, playOrigin);
        }
        setIsFullscreen(false);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => {
      releaseScroll();
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [isFullscreen, playOrigin]);

  useEffect(() => {
    sendThemeToFrame();
  }, [colorMode, iframeSrc, sendThemeToFrame]);

  useEffect(() => {
    sendEmbedDataToFrame();
  }, [embedData, iframeSrc, sendEmbedDataToFrame]);

  const showLoadingMask = Boolean(iframeSrc) && !isLoaded;

  if (!buildSrc(colorMode)) {
    return (
      <div className={styles.error} role="alert">
        Укажите <code>example</code> (например <code>code-basics/block-builder</code>) или полный{' '}
        <code>src</code>.
      </div>
    );
  }

  if (!userActivated) {
    return (
      <EmbedClickGate
        kind="play"
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
      data-external-play-embed
      data-fullscreen={isFullscreen ? 'true' : undefined}
      style={!isFullscreen ? {minHeight: `${minHeight}px`} : undefined}>
      <div className={styles.frameHost}>
        {showLoadingMask && !isFullscreen && (
          <div className={styles.loadingMask} role="status" aria-live="polite">
            {EMBED_PLAY_LOADING_MESSAGE}
          </div>
        )}
        {iframeSrc ? (
          <iframe
            ref={iframeRef}
            className={styles.frame}
            src={iframeSrc}
            title={title}
            loading="eager"
            style={{height: isFullscreen || heightSettling ? '100%' : `${height}px`}}
            referrerPolicy="no-referrer-when-downgrade"
            allow="fullscreen"
            onLoad={() => {
              setIsLoaded(true);
              releaseLoadSlot();
              sendThemeToFrame();
              sendEmbedDataToFrame();
            }}
            onError={() => {
              releaseLoadSlot();
            }}
          />
        ) : (
          <div className={styles.skeletonInline} style={{minHeight: `${minHeight}px`}} role="status">
            {EMBED_PLAY_LOADING_MESSAGE}
          </div>
        )}
      </div>
      {!isFullscreen && fullPageUrl && (
        <div className={styles.caption}>
          <a href={fullPageUrl} target="_blank" rel="noopener noreferrer">
            Полное демо на play.spirzen.ru ↗
          </a>
        </div>
      )}
    </div>
  );
}

export default function ExternalPlayEmbed(props) {
  const minHeight = props.minHeight ?? 320;

  return (
    <BrowserOnly
      fallback={
        <div className={styles.skeleton} style={{minHeight}} role="status" aria-live="polite">
          {EMBED_PLAY_LOADING_MESSAGE}
        </div>
      }>
      {() => <ExternalPlayEmbedInner {...props} />}
    </BrowserOnly>
  );
}
