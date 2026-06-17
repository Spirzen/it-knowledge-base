/**
 * BPMN 2.0 glyph definitions (viewBox 0 0 50 50).
 * SVG files: npm run docs:bpmn-icons → static/img/bpmn/
 */

const S = '#1a1a1a';
const W = '#ffffff';

/** @param {number} r @param {'start'|'end'|'intermediate'} kind */
function eventRing(r, kind) {
  if (kind === 'end') {
    return `<circle cx="25" cy="25" r="${r}" fill="${W}" stroke="${S}" stroke-width="3.5"/>`;
  }
  if (kind === 'intermediate') {
    return `<circle cx="25" cy="25" r="${r}" fill="${W}" stroke="${S}" stroke-width="1.5" stroke-dasharray="4 3"/>`;
  }
  return `<circle cx="25" cy="25" r="${r}" fill="${W}" stroke="${S}" stroke-width="1.5"/>`;
}

const inner = {
  none: '',
  message: `<rect x="17" y="18" width="16" height="12" rx="1" fill="none" stroke="${S}" stroke-width="1.3"/><path d="M17 18l8 7 8-7" fill="none" stroke="${S}" stroke-width="1.3"/>`,
  timer: `<circle cx="25" cy="25" r="8" fill="none" stroke="${S}" stroke-width="1.3"/><path d="M25 21v5l3 2" fill="none" stroke="${S}" stroke-width="1.3" stroke-linecap="round"/>`,
  signal: `<polygon points="25,17 31,33 19,33" fill="none" stroke="${S}" stroke-width="1.3" stroke-linejoin="round"/>`,
  conditional: `<path d="M20 22h10v2h-4v6h-2v-6h-4z" fill="${S}"/>`,
  linkCatch: `<circle cx="25" cy="25" r="6" fill="none" stroke="${S}" stroke-width="1.3"/><path d="M22 25h6m-2-2l2 2-2 2" fill="none" stroke="${S}" stroke-width="1.3" stroke-linecap="round"/>`,
  linkThrow: `<circle cx="25" cy="25" r="6" fill="none" stroke="${S}" stroke-width="1.3"/><path d="M28 25h-6m2-2l-2 2 2 2" fill="none" stroke="${S}" stroke-width="1.3" stroke-linecap="round"/>`,
  escalation: `<polygon points="25,33 19,21 31,21" fill="none" stroke="${S}" stroke-width="1.3"/>`,
  compensation: `<path d="M19 25h12M19 25l3-3M19 25l3 3M31 25l-3-3M31 25l-3 3" fill="none" stroke="${S}" stroke-width="1.3" stroke-linecap="round"/>`,
  error: `<path d="M21 19l8 12M29 19l-8 12" fill="none" stroke="${S}" stroke-width="1.8" stroke-linecap="round"/>`,
  cancel: `<path d="M21 21l8 8M29 21l-8 8" fill="none" stroke="${S}" stroke-width="1.8" stroke-linecap="round"/>`,
  terminate: `<circle cx="25" cy="25" r="8" fill="none" stroke="${S}" stroke-width="1.5"/><circle cx="25" cy="25" r="4.5" fill="${S}"/>`,
  multiple: `<path d="M22 22h6v6h-6z" fill="none" stroke="${S}" stroke-width="1.3"/><path d="M24 24h2v2h-2z" fill="${S}"/>`,
};

function eventIcon(kind, marker, fill = 'white') {
  const ring = eventRing(18, kind);
  const fillAttr = fill === 'black' ? ` fill="${S}"` : ` fill="${W}"`;
  const ringAdj =
    kind === 'end'
      ? `<circle cx="25" cy="25" r="18"${fillAttr} stroke="${S}" stroke-width="3.5"/>`
      : ring;
  return `${ringAdj}${inner[marker] ?? ''}`;
}

function taskIcon(marker) {
  const base = `<rect x="9" y="14" width="32" height="22" rx="6" ry="6" fill="${W}" stroke="${S}" stroke-width="1.5"/>`;
  const markers = {
    none: '',
    user: `<circle cx="18" cy="22" r="3" fill="none" stroke="${S}" stroke-width="1.2"/><path d="M14 30c0-3 2-5 4-5h0c2 0 4 2 4 5" fill="none" stroke="${S}" stroke-width="1.2"/>`,
    service: `<circle cx="17" cy="25" r="5" fill="none" stroke="${S}" stroke-width="1.2"/><circle cx="17" cy="25" r="1.5" fill="${S}"/>`,
    script: `<path d="M15 22l4 3-4 3v-6zM22 28h6" fill="none" stroke="${S}" stroke-width="1.2" stroke-linecap="round"/>`,
    manual: `<path d="M16 28v-6c0-1 1-2 2-2h1c1 0 2 1 2 2v6" fill="none" stroke="${S}" stroke-width="1.2"/><path d="M14 28h8" stroke="${S}" stroke-width="1.2"/>`,
    send: `<rect x="14" y="21" width="8" height="6" rx="0.5" fill="none" stroke="${S}" stroke-width="1.1"/><path d="M22 24h5" stroke="${S}" stroke-width="1.1"/><path d="M25 22l3 2-3 2" fill="none" stroke="${S}" stroke-width="1.1"/>`,
    receive: `<rect x="14" y="21" width="8" height="6" rx="0.5" fill="none" stroke="${S}" stroke-width="1.1"/><path d="M14 24h-4" stroke="${S}" stroke-width="1.1"/><path d="M12 22l-2 2 2 2" fill="none" stroke="${S}" stroke-width="1.1"/>`,
    businessRule: `<path d="M15 20l5-4 5 4v8l-5 4-5-4z" fill="none" stroke="${S}" stroke-width="1.1"/><circle cx="20" cy="24" r="2" fill="${S}"/>`,
  };
  return base + (markers[marker] ?? '');
}

function gatewayIcon(marker) {
  const d = 'M25 8 L42 25 L25 42 L8 25 Z';
  const base = `<path d="${d}" fill="${W}" stroke="${S}" stroke-width="1.5"/>`;
  const markers = {
    exclusive: `<path d="M21 21l8 8M29 21l-8 8" stroke="${S}" stroke-width="2" stroke-linecap="round"/>`,
    parallel: `<path d="M25 18v14M18 25h14" stroke="${S}" stroke-width="2" stroke-linecap="round"/>`,
    inclusive: `<circle cx="25" cy="25" r="5" fill="none" stroke="${S}" stroke-width="2"/>`,
    eventBased: `<circle cx="25" cy="25" r="5" fill="${W}" stroke="${S}" stroke-width="1.5" stroke-dasharray="2 2"/>`,
    complex: `<path d="M20 20l10 10M30 20l-10 10" stroke="${S}" stroke-width="1.5"/><circle cx="25" cy="25" r="3" fill="none" stroke="${S}" stroke-width="1.2"/>`,
  };
  return base + (markers[marker] ?? '');
}

/** @type {Record<string, { label: string, body: string }>} */
export const BPMN_ICON_DEFINITIONS = {
  'start-none': {label: 'Стартовое событие', body: eventIcon('start', 'none')},
  'start-message': {label: 'Message Start', body: eventIcon('start', 'message')},
  'start-timer': {label: 'Timer Start', body: eventIcon('start', 'timer')},
  'start-signal': {label: 'Signal Start', body: eventIcon('start', 'signal')},
  'start-conditional': {label: 'Conditional Start', body: eventIcon('start', 'conditional')},
  'start-multiple': {label: 'Multiple Start', body: eventIcon('start', 'multiple')},

  'intermediate-catch-message': {label: 'Message Catch', body: eventIcon('intermediate', 'message')},
  'intermediate-catch-timer': {label: 'Timer Catch', body: eventIcon('intermediate', 'timer')},
  'intermediate-catch-signal': {label: 'Signal Catch', body: eventIcon('intermediate', 'signal')},
  'intermediate-catch-conditional': {label: 'Conditional Catch', body: eventIcon('intermediate', 'conditional')},
  'intermediate-catch-link': {label: 'Link Catch', body: eventIcon('intermediate', 'linkCatch')},

  'intermediate-throw-message': {label: 'Message Throw', body: eventIcon('intermediate', 'message', 'black')},
  'intermediate-throw-signal': {label: 'Signal Throw', body: eventIcon('intermediate', 'signal', 'black')},
  'intermediate-throw-escalation': {label: 'Escalation Throw', body: eventIcon('intermediate', 'escalation', 'black')},
  'intermediate-throw-compensation': {label: 'Compensation Throw', body: eventIcon('intermediate', 'compensation', 'black')},
  'intermediate-throw-link': {label: 'Link Throw', body: eventIcon('intermediate', 'linkThrow', 'black')},

  'end-none': {label: 'Конечное событие', body: eventIcon('end', 'none', 'black')},
  'end-message': {label: 'Message End', body: eventIcon('end', 'message', 'black')},
  'end-signal': {label: 'Signal End', body: eventIcon('end', 'signal', 'black')},
  'end-error': {label: 'Error End', body: eventIcon('end', 'error', 'black')},
  'end-escalation': {label: 'Escalation End', body: eventIcon('end', 'escalation', 'black')},
  'end-cancel': {label: 'Cancel End', body: eventIcon('end', 'cancel', 'black')},
  'end-terminate': {label: 'Terminate End', body: eventIcon('end', 'terminate', 'black')},

  'boundary-timer': {
    label: 'Boundary Timer',
    body: `${eventRing(18, 'intermediate')}${inner.timer}<circle cx="38" cy="38" r="7" fill="${W}" stroke="${S}" stroke-width="1.2"/>`,
  },
  'boundary-message': {
    label: 'Boundary Message',
    body: `${eventRing(18, 'intermediate')}${inner.message}<circle cx="38" cy="38" r="7" fill="${W}" stroke="${S}" stroke-width="1.2"/>`,
  },
  'boundary-error': {
    label: 'Boundary Error',
    body: `${eventRing(18, 'intermediate')}${inner.error}<circle cx="38" cy="38" r="7" fill="${W}" stroke="${S}" stroke-width="1.2"/>`,
  },

  'task-none': {label: 'Задача', body: taskIcon('none')},
  'task-user': {label: 'User Task', body: taskIcon('user')},
  'task-service': {label: 'Service Task', body: taskIcon('service')},
  'task-script': {label: 'Script Task', body: taskIcon('script')},
  'task-manual': {label: 'Manual Task', body: taskIcon('manual')},
  'task-send': {label: 'Send Task', body: taskIcon('send')},
  'task-receive': {label: 'Receive Task', body: taskIcon('receive')},
  'task-business-rule': {label: 'Business Rule Task', body: taskIcon('businessRule')},

  'subprocess': {
    label: 'Подпроцесс',
    body: `<rect x="9" y="12" width="32" height="26" rx="6" fill="${W}" stroke="${S}" stroke-width="1.5"/><rect x="13" y="16" width="10" height="8" rx="2" fill="none" stroke="${S}" stroke-width="1"/>`,
  },
  'subprocess-event': {
    label: 'Event Sub-Process',
    body: `<rect x="9" y="12" width="32" height="26" rx="6" fill="${W}" stroke="${S}" stroke-width="1.5" stroke-dasharray="4 2"/><circle cx="17" cy="20" r="4" fill="${W}" stroke="${S}" stroke-width="1"/>`,
  },
  'subprocess-transaction': {
    label: 'Transaction',
    body: `<rect x="11" y="14" width="28" height="22" rx="5" fill="none" stroke="${S}" stroke-width="1.5"/><rect x="9" y="12" width="32" height="26" rx="6" fill="none" stroke="${S}" stroke-width="1.5"/>`,
  },
  'call-activity': {
    label: 'Call Activity',
    body: `<rect x="11" y="14" width="28" height="22" rx="5" fill="${W}" stroke="${S}" stroke-width="1.5"/><rect x="9" y="12" width="32" height="26" rx="6" fill="none" stroke="${S}" stroke-width="1.5"/>`,
  },

  'gateway-exclusive': {label: 'Exclusive Gateway', body: gatewayIcon('exclusive')},
  'gateway-parallel': {label: 'Parallel Gateway', body: gatewayIcon('parallel')},
  'gateway-inclusive': {label: 'Inclusive Gateway', body: gatewayIcon('inclusive')},
  'gateway-event-based': {label: 'Event-based Gateway', body: gatewayIcon('eventBased')},
  'gateway-complex': {label: 'Complex Gateway', body: gatewayIcon('complex')},

  'sequence-flow': {
    label: 'Sequence Flow',
    body: `<path d="M8 25h28" stroke="${S}" stroke-width="1.8" fill="none" marker-end="url(#arrow)"/><defs><marker id="arrow" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="${S}"/></marker></defs>`,
  },
  'message-flow': {
    label: 'Message Flow',
    body: `<path d="M8 25h28" stroke="${S}" stroke-width="1.5" fill="none" stroke-dasharray="5 3" marker-end="url(#arrow2)"/><circle cx="8" cy="25" r="3" fill="${W}" stroke="${S}" stroke-width="1.2"/><defs><marker id="arrow2" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="${S}"/></marker></defs>`,
  },
  'association': {
    label: 'Association',
    body: `<path d="M8 25h28" stroke="${S}" stroke-width="1.2" fill="none" stroke-dasharray="3 3"/>`,
  },

  'pool': {
    label: 'Пул',
    body: `<rect x="6" y="8" width="38" height="34" fill="${W}" stroke="${S}" stroke-width="1.5"/><line x1="6" y1="16" x2="44" y2="16" stroke="${S}" stroke-width="1.2"/><text x="10" y="14" font-size="5" fill="${S}" font-family="Arial,sans-serif">Pool</text>`,
  },
  'lane': {
    label: 'Дорожка',
    body: `<rect x="6" y="8" width="38" height="34" fill="${W}" stroke="${S}" stroke-width="1.5"/><line x1="14" y1="8" x2="14" y2="42" stroke="${S}" stroke-width="1.2"/>`,
  },
  'data-object': {
    label: 'Data Object',
    body: `<path d="M14 14h18v22h-18z" fill="${W}" stroke="${S}" stroke-width="1.3"/><path d="M26 14l6 6v16h-6z" fill="${W}" stroke="${S}" stroke-width="1.3"/>`,
  },
  'data-store': {
    label: 'Data Store',
    body: `<ellipse cx="25" cy="16" rx="12" ry="4" fill="${W}" stroke="${S}" stroke-width="1.3"/><path d="M13 16v18c0 2.2 5.4 4 12 4s12-1.8 12-4V16" fill="${W}" stroke="${S}" stroke-width="1.3"/><ellipse cx="25" cy="34" rx="12" ry="4" fill="none" stroke="${S}" stroke-width="1.3"/>`,
  },
  'annotation': {
    label: 'Text Annotation',
    body: `<path d="M12 14h22v20h-22z" fill="${W}" stroke="${S}" stroke-width="1.2"/><path d="M12 14l-4 4v16" fill="none" stroke="${S}" stroke-width="1.2"/>`,
  },
  'group': {
    label: 'Group',
    body: `<rect x="10" y="12" width="30" height="26" rx="4" fill="none" stroke="${S}" stroke-width="1.2" stroke-dasharray="6 4"/>`,
  },
};

/** @param {string} id */
export function bpmnIconSvgDocument(id) {
  const def = BPMN_ICON_DEFINITIONS[id];
  if (!def) return null;
  return `<?xml version="1.0" encoding="UTF-8"?>\n<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" role="img" aria-label="${def.label}">\n${def.body}\n</svg>\n`;
}

/** Alias map: table text / shorthand → icon id */
export const BPMN_ICON_ALIASES = {
  'отсутствует': 'start-none',
  'конверт': 'start-message',
  'часы': 'start-timer',
  'треугольник с восклицанием': 'start-signal',
  'шестиугольник': 'start-conditional',
  'стрелка в круг': 'intermediate-catch-link',
  'стрелка из круга': 'intermediate-throw-link',
  'перевёрнутый треугольник': 'intermediate-throw-escalation',
  'стрелка влево-вправо': 'intermediate-throw-compensation',
  'молния': 'end-error',
  'X в круге': 'end-cancel',
  'круг в круге': 'end-terminate',
  'шестерёнка': 'task-service',
  'силуэт человека': 'task-user',
  'рука с +': 'task-manual',
  'ромб с шестерёнкой': 'task-business-rule',
};

/** @type {{ category: string, items: { id: string, caption: string }[] }[]} */
export const BPMN_LEGEND_SECTIONS = [
  {
    category: 'События',
    items: [
      {id: 'start-none', caption: 'Старт'},
      {id: 'intermediate-catch-timer', caption: 'Промежуточное'},
      {id: 'end-none', caption: 'Конец'},
      {id: 'start-message', caption: 'Сообщение'},
      {id: 'start-timer', caption: 'Таймер'},
      {id: 'end-error', caption: 'Ошибка'},
    ],
  },
  {
    category: 'Задачи',
    items: [
      {id: 'task-none', caption: 'Задача'},
      {id: 'task-user', caption: 'Пользователь'},
      {id: 'task-service', caption: 'Сервис'},
      {id: 'task-script', caption: 'Скрипт'},
      {id: 'subprocess', caption: 'Подпроцесс'},
      {id: 'call-activity', caption: 'Вызов'},
    ],
  },
  {
    category: 'Шлюзы и потоки',
    items: [
      {id: 'gateway-exclusive', caption: 'XOR'},
      {id: 'gateway-parallel', caption: 'AND'},
      {id: 'gateway-inclusive', caption: 'OR'},
      {id: 'sequence-flow', caption: 'Поток'},
      {id: 'message-flow', caption: 'Сообщение'},
      {id: 'pool', caption: 'Пул / дорожка'},
    ],
  },
  {
    category: 'Артефакты',
    items: [
      {id: 'data-object', caption: 'Данные'},
      {id: 'data-store', caption: 'Хранилище'},
      {id: 'annotation', caption: 'Аннотация'},
      {id: 'group', caption: 'Группа'},
    ],
  },
];
