/**
 * Базовый URL каталога IT Code Examples (без завершающего слэша).
 * Канонический прод: https://code.spirzen.ru — пути /e/embed/<slug>/, без /it-code-examples/.
 * Локально: IT_CODE_EXAMPLES_URL=http://localhost:4321 (docusaurus.config.js).
 */
export const CODE_EXAMPLES_PRODUCTION_URL = 'https://code.spirzen.ru';

/** Origins, с которых принимаем postMessage о высоте iframe. */
export const CODE_EXAMPLES_TRUSTED_ORIGINS = [
  'https://code.spirzen.ru',
  'http://localhost:4321',
  'http://127.0.0.1:4321',
  'http://localhost:4322',
  'http://127.0.0.1:4322',
];

/**
 * @param {{ customFields?: { codeExamplesUrl?: string } }} siteConfig
 * @returns {string}
 */
export function getCodeExamplesBaseUrl(siteConfig) {
  const configured = siteConfig?.customFields?.codeExamplesUrl;
  if (configured) {
    return configured.replace(/\/$/, '');
  }
  return CODE_EXAMPLES_PRODUCTION_URL;
}

/**
 * @param {string} baseUrl
 * @param {string} example slug вида `python/hello-world`
 * @returns {string}
 */
export function buildCodeExampleEmbedUrl(baseUrl, example) {
  const slug = example.replace(/^\/+|\/+$/g, '');
  return `${baseUrl}/e/embed/${slug}/`;
}

/**
 * @param {string} baseUrl
 * @param {string} example
 * @returns {string}
 */
export function buildCodeExamplePageUrl(baseUrl, example) {
  const slug = example.replace(/^\/+|\/+$/g, '');
  return `${baseUrl}/e/${slug}/`;
}

/**
 * @param {string} origin
 * @param {{ customFields?: { codeExamplesUrl?: string } }} [siteConfig]
 * @returns {boolean}
 */
export function isTrustedCodeExamplesOrigin(origin, siteConfig) {
  if (CODE_EXAMPLES_TRUSTED_ORIGINS.includes(origin)) {
    return true;
  }
  if (!siteConfig) {
    return false;
  }
  try {
    const configured = getCodeExamplesBaseUrl(siteConfig);
    return configured && new URL(configured).origin === origin;
  } catch {
    return false;
  }
}
