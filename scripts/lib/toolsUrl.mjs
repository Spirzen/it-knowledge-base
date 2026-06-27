/** Базовый URL инструментов (tools.spirzen.ru). Переопределение: IT_TOOLS_URL */
export const TOOLS_ORIGIN = (process.env.IT_TOOLS_URL ?? 'https://tools.spirzen.ru').replace(/\/+$/, '');

/** @param {string} path — `/tools/…` или `/tools/…#anchor` */
export function toolsHref(path) {
  const normalized = path.startsWith('/') ? path : `/${path}`;
  return `${TOOLS_ORIGIN}${normalized}`;
}
