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

/** Общие учебные схемы (источник — 1-basics/1-07-nemnogo-o-proshlom) */
export const VON_NEUMANN_ARCHITECTURE_SVG = encyclopediaMediaUrl(
  '1-basics/1-07-nemnogo-o-proshlom/Схема_архитектуры_фон_Неймана.svg',
);
export const HARVARD_ARCHITECTURE_SVG = encyclopediaMediaUrl(
  '1-basics/1-07-nemnogo-o-proshlom/Гарвардская_архитектура_компьютера.svg',
);
