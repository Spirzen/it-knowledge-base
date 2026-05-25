import {normalizeSearchText} from './docSearchEngine';

/**
 * @param {string} value
 */
function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

/**
 * @param {string} text
 * @param {string} query
 * @returns {{ text: string, mark: boolean }[]}
 */
export function splitHighlight(text, query) {
  if (!text) {
    return [];
  }

  const tokens = normalizeSearchText(query)
    .split(' ')
    .filter((token) => token.length >= 2);
  if (tokens.length === 0) {
    return [{text, mark: false}];
  }

  const pattern = tokens.map(escapeRegExp).join('|');
  const re = new RegExp(`(${pattern})`, 'giu');
  const parts = [];
  let last = 0;
  let match = re.exec(text);

  while (match) {
    if (match.index > last) {
      parts.push({text: text.slice(last, match.index), mark: false});
    }
    parts.push({text: match[0], mark: true});
    last = match.index + match[0].length;
    match = re.exec(text);
  }

  if (last < text.length) {
    parts.push({text: text.slice(last), mark: false});
  }

  return parts.length > 0 ? parts : [{text, mark: false}];
}

/**
 * @param {{ text: string, mark: boolean }[]} parts
 */
export function hasHighlight(parts) {
  return parts.some((part) => part.mark);
}
