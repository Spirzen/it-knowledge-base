/** Базовый URL детского портала (kids.spirzen.ru). Переопределение: IT_KIDS_URL */
export const KIDS_ORIGIN = (process.env.IT_KIDS_URL ?? 'https://kids.spirzen.ru').replace(/\/+$/, '');

/** @param {string} path — `/kids/…` */
export function kidsHref(path) {
  const normalized = path.startsWith('/') ? path : `/${path}`;
  return `${KIDS_ORIGIN}${normalized}`;
}

/** @param {string} relPath — encyclopedia/9-spinoff/9-11-dlya-detey/… */
export function kidsHrefFromSpinoff(relPath) {
  let clean = relPath
    .replace(/^encyclopedia\/9-spinoff\/9-11-dlya-detey\/?/, '')
    .replace(/\.mdx?$/i, '');
  if (!clean || clean === 'forkids') {
    clean = 'intro';
  }
  return kidsHref(`/kids/${clean}`);
}
