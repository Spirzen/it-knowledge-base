/** Базовый URL глоссария (terms.spirzen.ru). Переопределение: IT_TERMS_URL */
export const TERMS_ORIGIN = (process.env.IT_TERMS_URL ?? 'https://terms.spirzen.ru').replace(
  /\/+$/,
  '',
);

/** @param {string} path — `/glossary/…` или `/glossary/…#anchor` */
export function termsGlossaryHref(path) {
  const normalized = path.startsWith('/') ? path : `/${path}`;
  return `${TERMS_ORIGIN}${normalized}`;
}
