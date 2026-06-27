/** Базовый URL лаборатории (lab.spirzen.ru). Переопределение: IT_LAB_URL */
export const LAB_ORIGIN = (process.env.IT_LAB_URL ?? 'https://lab.spirzen.ru').replace(/\/+$/, '');

/** @param {string} path — `/lab/…` или `/lab/…#anchor` */
export function labHref(path) {
  const normalized = path.startsWith('/') ? path : `/${path}`;
  return `${LAB_ORIGIN}${normalized}`;
}
