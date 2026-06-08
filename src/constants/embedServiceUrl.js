const LOCAL_DEV_HOSTS = new Set(['localhost', '127.0.0.1']);

/**
 * На localhost:3000 подменяем прод-URL embed-сервисов на локальные порты,
 * если в siteConfig ещё зашит spirzen.ru (старый dev-сервер без рестарта).
 *
 * @param {string | undefined} configured URL из customFields
 * @param {{ localUrl: string, productionUrl: string }} options
 * @returns {string}
 */
export function resolveEmbedServiceBaseUrl(configured, {localUrl, productionUrl}) {
  const fallback = (configured || productionUrl).replace(/\/$/, '');

  if (typeof window === 'undefined') {
    return fallback;
  }

  if (!LOCAL_DEV_HOSTS.has(window.location.hostname)) {
    return fallback;
  }

  try {
    const targetHost = new URL(fallback).hostname;
    if (LOCAL_DEV_HOSTS.has(targetHost)) {
      return fallback;
    }
  } catch {
    return fallback;
  }

  return localUrl.replace(/\/$/, '');
}
