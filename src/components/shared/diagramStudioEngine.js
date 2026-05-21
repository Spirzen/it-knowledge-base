/** Палитры и шаблоны для интерактивной студии BPMN / UML / C4 */

export const MODES = {
  bpmn: {id: 'bpmn', label: 'BPMN 2.0', color: '#0ea5e9'},
  uml: {id: 'uml', label: 'UML', color: '#8b5cf6'},
  c4: {id: 'c4', label: 'C4 Model', color: '#10b981'},
};

export const BPMN_PALETTE = [
  {type: 'bpmn-start', label: 'Старт', shape: 'circle', w: 56, h: 56},
  {type: 'bpmn-task', label: 'Задача', shape: 'rect', w: 120, h: 64},
  {type: 'bpmn-gateway', label: 'Шлюз XOR', shape: 'diamond', w: 72, h: 72},
  {type: 'bpmn-end', label: 'Конец', shape: 'circle-thick', w: 56, h: 56},
  {type: 'bpmn-lane', label: 'Дорожка', shape: 'lane', w: 280, h: 100},
];

export const UML_DIAGRAM_TYPES = [
  {id: 'usecase', label: 'Use Case'},
  {id: 'class', label: 'Классы'},
  {id: 'sequence', label: 'Последовательность'},
];

export const UML_PALETTE = {
  usecase: [
    {type: 'uml-actor', label: 'Актёр', shape: 'actor', w: 64, h: 96},
    {type: 'uml-usecase', label: 'Use case', shape: 'ellipse', w: 130, h: 56},
    {type: 'uml-system', label: 'Система', shape: 'frame', w: 200, h: 160},
  ],
  class: [
    {type: 'uml-class', label: 'Класс', shape: 'class', w: 140, h: 100},
    {type: 'uml-interface', label: 'Интерфейс', shape: 'interface', w: 140, h: 90},
    {type: 'uml-note', label: 'Заметка', shape: 'note', w: 100, h: 60},
  ],
  sequence: [
    {type: 'uml-lifeline', label: 'Объект', shape: 'lifeline', w: 90, h: 200},
    {type: 'uml-message', label: 'Сообщение', shape: 'message', w: 160, h: 32},
  ],
};

export const C4_LEVELS = [
  {id: 'context', label: 'Context', desc: 'Система и внешние акторы'},
  {id: 'container', label: 'Containers', desc: 'Приложения, БД, очереди'},
  {id: 'component', label: 'Components', desc: 'Модули внутри контейнера'},
];

export const C4_PALETTE = {
  context: [
    {type: 'c4-person', label: 'Пользователь', shape: 'person', w: 100, h: 80},
    {type: 'c4-system', label: 'Система', shape: 'system', w: 160, h: 90},
    {type: 'c4-ext', label: 'Внешняя система', shape: 'system-ext', w: 160, h: 90},
  ],
  container: [
    {type: 'c4-container', label: 'Контейнер', shape: 'container', w: 150, h: 80},
    {type: 'c4-db', label: 'База данных', shape: 'db', w: 130, h: 80},
    {type: 'c4-queue', label: 'Очередь', shape: 'queue', w: 130, h: 70},
  ],
  component: [
    {type: 'c4-component', label: 'Компонент', shape: 'component', w: 140, h: 72},
  ],
};

export const BPMN_TEMPLATES = {
  order: {
    label: 'Обработка заказа',
    nodes: [
      {id: 's1', type: 'bpmn-start', label: 'Заказ создан', x: 40, y: 80},
      {id: 't1', type: 'bpmn-task', label: 'Проверить оплату', x: 140, y: 68},
      {id: 'g1', type: 'bpmn-gateway', label: '', x: 300, y: 68},
      {id: 't2', type: 'bpmn-task', label: 'Собрать заказ', x: 400, y: 40},
      {id: 't3', type: 'bpmn-task', label: 'Уведомить клиента', x: 400, y: 120},
      {id: 'e1', type: 'bpmn-end', label: 'Завершено', x: 560, y: 80},
    ],
    edges: [
      {from: 's1', to: 't1'},
      {from: 't1', to: 'g1'},
      {from: 'g1', to: 't2', label: 'оплачен'},
      {from: 'g1', to: 't3', label: 'отмена'},
      {from: 't2', to: 'e1'},
      {from: 't3', to: 'e1'},
    ],
  },
};

export const UML_TEMPLATES = {
  auth: {
    label: 'Авторизация (Use Case)',
    umlType: 'usecase',
    nodes: [
      {id: 'a1', type: 'uml-actor', label: 'Пользователь', x: 40, y: 60},
      {id: 'uc1', type: 'uml-usecase', label: 'Войти в систему', x: 200, y: 50},
      {id: 'uc2', type: 'uml-usecase', label: 'Восстановить пароль', x: 200, y: 130},
    ],
    edges: [
      {from: 'a1', to: 'uc1'},
      {from: 'a1', to: 'uc2'},
    ],
  },
};

export const C4_TEMPLATES = {
  shop: {
    label: 'Интернет-магазин (Context)',
    level: 'context',
    nodes: [
      {id: 'p1', type: 'c4-person', label: 'Покупатель', x: 40, y: 80},
      {id: 'sys', type: 'c4-system', label: 'Shop API', x: 220, y: 70},
      {id: 'pay', type: 'c4-ext', label: 'Платёжный шлюз', x: 420, y: 80},
    ],
    edges: [
      {from: 'p1', to: 'sys', label: 'оформляет заказ'},
      {from: 'sys', to: 'pay', label: 'оплата'},
    ],
  },
};

let nodeSeq = 0;
export function nextNodeId(prefix = 'n') {
  nodeSeq += 1;
  return `${prefix}-${nodeSeq}`;
}

export function getPalette(mode, subMode) {
  if (mode === 'bpmn') return BPMN_PALETTE;
  if (mode === 'uml') return UML_PALETTE[subMode] || UML_PALETTE.usecase;
  if (mode === 'c4') return C4_PALETTE[subMode] || C4_PALETTE.context;
  return [];
}

export function getDefaultSubMode(mode) {
  if (mode === 'uml') return 'usecase';
  if (mode === 'c4') return 'context';
  return null;
}

export function createNodeFromPalette(item, x, y) {
  return {
    id: nextNodeId(item.type.split('-')[0]),
    type: item.type,
    label: item.label,
    x: Math.round(x / 20) * 20,
    y: Math.round(y / 20) * 20,
    w: item.w,
    h: item.h,
    shape: item.shape,
  };
}

export function loadTemplate(mode, key) {
  const map =
    mode === 'bpmn' ? BPMN_TEMPLATES : mode === 'uml' ? UML_TEMPLATES : C4_TEMPLATES;
  const tpl = map[key];
  if (!tpl) return {nodes: [], edges: [], subMode: getDefaultSubMode(mode)};
  return {
    nodes: tpl.nodes.map((n) => ({...n})),
    edges: tpl.edges.map((e) => ({...e})),
    subMode: tpl.umlType || tpl.level || getDefaultSubMode(mode),
  };
}

export function exportMermaid(mode, nodes, edges, subMode) {
  if (mode === 'c4' && subMode === 'context') {
    const people = nodes.filter((n) => n.type === 'c4-person');
    const systems = nodes.filter((n) => n.type.startsWith('c4-') && n.type !== 'c4-person');
    const lines = ['C4Context', '  title Контекст системы'];
    people.forEach((p) => lines.push(`  Person(${p.id}, "${p.label}")`));
    systems.forEach((s) => {
      const fn = s.type === 'c4-ext' ? 'System_Ext' : 'System';
      lines.push(`  ${fn}(${s.id}, "${s.label}")`);
    });
    edges.forEach((e) => {
      const lbl = e.label ? `, "${e.label}"` : '';
      lines.push(`  Rel(${e.from}, ${e.to}${lbl})`);
    });
    return lines.join('\n');
  }

  if (mode === 'uml' && subMode === 'usecase') {
    const lines = ['flowchart LR'];
    nodes.forEach((n) => {
      const id = n.id.replace(/-/g, '_');
      if (n.type === 'uml-actor') lines.push(`  ${id}(["👤 ${n.label}"])`);
      else if (n.type === 'uml-usecase') lines.push(`  ${id}(("${n.label}"))`);
      else lines.push(`  ${id}["${n.label}"]`);
    });
    edges.forEach((e) => {
      const lbl = e.label ? `|${e.label}|` : '';
      lines.push(`  ${e.from.replace(/-/g, '_')} -->${lbl} ${e.to.replace(/-/g, '_')}`);
    });
    return lines.join('\n');
  }

  if (mode === 'bpmn') {
    const lines = ['flowchart LR'];
    nodes.forEach((n) => {
      const id = n.id.replace(/-/g, '_');
      if (n.type === 'bpmn-start') lines.push(`  ${id}(("${n.label || 'Старт'}"))`);
      else if (n.type === 'bpmn-end') lines.push(`  ${id}(["${n.label || 'Конец'}"])`);
      else if (n.type === 'bpmn-gateway') lines.push(`  ${id}{${n.label || '?'}}`);
      else lines.push(`  ${id}["${n.label}"]`);
    });
    edges.forEach((e) => {
      const lbl = e.label ? `|${e.label}|` : '';
      lines.push(`  ${e.from.replace(/-/g, '_')} -->${lbl} ${e.to.replace(/-/g, '_')}`);
    });
    return lines.join('\n');
  }

  return `%% ${mode} / ${subMode}\n${nodes.map((n) => `${n.type}: ${n.label}`).join('\n')}`;
}

/** Краткий справочник BPMN для статьи 129 */
export const BPMN_REFERENCE = [
  {id: 'start', category: 'События', name: 'Start Event', class: 'bpmn:startEvent', hint: 'Тонкая граница, белая заливка'},
  {id: 'end', category: 'События', name: 'End Event', class: 'bpmn:endEvent', hint: 'Жирная граница'},
  {id: 'timer', category: 'События', name: 'Timer', class: 'timerEventDefinition', hint: 'PT30M, timeCycle'},
  {id: 'message', category: 'События', name: 'Message', class: 'messageEventDefinition', hint: 'messageRef на объявление'},
  {id: 'task', category: 'Действия', name: 'User Task', class: 'bpmn:userTask', hint: 'assignee, candidateGroups'},
  {id: 'service', category: 'Действия', name: 'Service Task', class: 'bpmn:serviceTask', hint: 'REST, delegateExpression'},
  {id: 'subprocess', category: 'Действия', name: 'Subprocess', class: 'bpmn:subProcess', hint: 'collapsed для декомпозиции'},
  {id: 'xor', category: 'Шлюзы', name: 'Exclusive Gateway', class: 'bpmn:exclusiveGateway', hint: 'Один исходящий поток'},
  {id: 'and', category: 'Шлюзы', name: 'Parallel Gateway', class: 'bpmn:parallelGateway', hint: 'Все ветки параллельно'},
  {id: 'or', category: 'Шлюзы', name: 'Inclusive Gateway', class: 'bpmn:inclusiveGateway', hint: 'Один или несколько путей'},
  {id: 'pool', category: 'Зоны', name: 'Pool', class: 'bpmn:participant', hint: 'Участник процесса'},
  {id: 'lane', category: 'Зоны', name: 'Lane', class: 'bpmn:lane', hint: 'Роль внутри пула'},
  {id: 'data', category: 'Артефакты', name: 'Data Object', class: 'bpmn:dataObject', hint: 'Входные/выходные данные'},
  {id: 'annotation', category: 'Артефакты', name: 'Text Annotation', class: 'bpmn:textAnnotation', hint: 'Пояснение без семантики'},
];
