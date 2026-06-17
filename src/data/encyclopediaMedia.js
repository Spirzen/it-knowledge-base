/**
 * URL иллюстраций из it-encyclopedia-media (как в markdown статей).
 * @see it-encyclopedia-media/scripts/migrate-from-kb.mjs
 */
export const ENCYCLOPEDIA_MEDIA_ORIGIN = 'https://assets.spirzen.ru';

/** @param {string} encyclopediaRelativePath путь после encyclopedia/, напр. _shared/img/bpmn/start-none.svg */
export function encyclopediaMediaUrl(encyclopediaRelativePath) {
  const rel = encyclopediaRelativePath.replace(/^\/+/, '');
  return `${ENCYCLOPEDIA_MEDIA_ORIGIN}/encyclopedia/${rel}`;
}

/** @param {string} bpmnIconId без расширения, напр. start-none */
export function bpmnIconMediaUrl(bpmnIconId) {
  return encyclopediaMediaUrl(`_shared/img/bpmn/${bpmnIconId}.svg`);
}
