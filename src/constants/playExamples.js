import {resolveEmbedServiceBaseUrl} from './embedServiceUrl';

/**
 * Базовый URL каталога IT Play (без завершающего слэша).
 * Канонический прод: https://play.spirzen.ru — пути /p/embed/<slug>/.
 * Локально: IT_PLAY_URL=http://localhost:4322 (docusaurus.config.js).
 */
export const PLAY_PRODUCTION_URL = 'https://play.spirzen.ru';

/** Origins, с которых принимаем postMessage о высоте iframe. */
export const PLAY_TRUSTED_ORIGINS = [
  'https://play.spirzen.ru',
  'http://localhost:4322',
  'http://127.0.0.1:4322',
];

/**
 * @param {{ customFields?: { playExamplesUrl?: string } }} siteConfig
 * @returns {string}
 */
export function getPlayBaseUrl(siteConfig) {
  const configured = siteConfig?.customFields?.playExamplesUrl;
  return resolveEmbedServiceBaseUrl(configured, {
    localUrl: 'http://localhost:4322',
    productionUrl: PLAY_PRODUCTION_URL,
  });
}

/**
 * @param {string} baseUrl
 * @param {string} example slug вида `code-basics/block-builder`
 * @returns {string}
 */
export function buildPlayEmbedUrl(baseUrl, example) {
  const slug = example.replace(/^\/+|\/+$/g, '');
  return `${baseUrl}/p/embed/${slug}/`;
}

/**
 * @param {string} baseUrl
 * @param {string} example
 * @returns {string}
 */
export function buildPlayPageUrl(baseUrl, example) {
  const slug = example.replace(/^\/+|\/+$/g, '');
  return `${baseUrl}/p/${slug}/`;
}

/**
 * @param {string} origin
 * @param {{ customFields?: { playExamplesUrl?: string } }} [siteConfig]
 * @returns {boolean}
 */
export function isTrustedPlayOrigin(origin, siteConfig) {
  if (PLAY_TRUSTED_ORIGINS.includes(origin)) {
    return true;
  }
  if (!siteConfig) {
    return false;
  }
  try {
    const configured = getPlayBaseUrl(siteConfig);
    return configured && new URL(configured).origin === origin;
  } catch {
    return false;
  }
}
