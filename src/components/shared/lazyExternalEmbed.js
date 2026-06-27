import React, {lazy, Suspense, useMemo, useState} from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import {
  buildCodeExamplePageUrl,
  getCodeExamplesBaseUrl,
} from '@site/src/constants/codeExamples';
import {buildPlayPageUrl, getPlayBaseUrl} from '@site/src/constants/playExamples';
import {EMBED_CODE_LOADING_MESSAGE, EMBED_PLAY_LOADING_MESSAGE} from './embedMessages';
import EmbedClickGate from './EmbedClickGate';
import ItuLoader from './ItuLoader';

function embedFallback(message, title) {
  return (
    <ItuLoader
      label={message}
      title={title}
      compact
      style={{
        margin: '1.25rem 0',
        minHeight: 120,
        borderRadius: 12,
        border: '1px dashed var(--ifm-color-emphasis-300)',
      }}
    />
  );
}

function resolveFullPageUrl(kind, props, siteConfig) {
  if (kind === 'code' && props.example) {
    return buildCodeExamplePageUrl(getCodeExamplesBaseUrl(siteConfig), props.example);
  }
  if (kind === 'play' && props.example) {
    return buildPlayPageUrl(getPlayBaseUrl(siteConfig), props.example);
  }
  return '';
}

/**
 * Ленивая загрузка ExternalPlayEmbed / ExternalCodeEmbed — chunk и iframe только после клика «Посмотреть».
 */
export default function lazyExternalEmbed(importFn, options = {}) {
  const kind = options.kind === 'code' ? 'code' : 'play';
  const loadingMessage =
    kind === 'code' ? EMBED_CODE_LOADING_MESSAGE : EMBED_PLAY_LOADING_MESSAGE;
  const LazyEmbed = lazy(importFn);

  function LazyExternalEmbed(props) {
    const {siteConfig} = useDocusaurusContext();
    const [activated, setActivated] = useState(false);
    const minHeight = props.minHeight ?? (kind === 'code' ? 200 : 320);
    const fullPageUrl = useMemo(
      () => resolveFullPageUrl(kind, props, siteConfig),
      [props.example, siteConfig],
    );

    if (!activated) {
      return (
        <EmbedClickGate
          kind={kind}
          title={props.title}
          minHeight={minHeight}
          fullPageUrl={fullPageUrl}
          onActivate={() => setActivated(true)}
        />
      );
    }

    return (
      <Suspense fallback={embedFallback(loadingMessage, kind === 'code' ? 'Код IT' : 'Play IT')}>
        <LazyEmbed {...props} autoLoad />
      </Suspense>
    );
  }

  LazyExternalEmbed.displayName = 'LazyExternalEmbed';

  return function LazyExternalEmbedWithSsr(props) {
    const minHeight = props.minHeight ?? (kind === 'code' ? 200 : 320);

    return (
      <BrowserOnly fallback={embedFallback(loadingMessage, kind === 'code' ? 'Код IT' : 'Play IT')}>
        {() => <LazyExternalEmbed {...props} minHeight={minHeight} />}
      </BrowserOnly>
    );
  };
}
