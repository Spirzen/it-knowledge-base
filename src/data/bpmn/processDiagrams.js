/**
 * Учебные BPMN-процессы из иконок _shared/img/bpmn/ (компонент BpmnProcessDiagram).
 */

/** @typedef {{ id: string, label: string }} BpmnStep */

/**
 * @typedef {{
 *   title: string;
 *   caption?: string;
 *   steps: BpmnStep[];
 *   gateway?: {
 *     after: number;
 *     id: string;
 *     label: string;
 *     branches: { label: string; steps: BpmnStep[] }[];
 *   };
 *   lanes?: { name: string; steps: BpmnStep[] }[];
 * }} BpmnProcessDiagramDef
 */

/** @type {Record<string, BpmnProcessDiagramDef>} */
export const BPMN_PROCESS_DIAGRAMS = {
  'order-fulfillment': {
    title: 'Обработка заказа (описательный уровень)',
    caption:
      'Три роли: клиент оформляет заявку, менеджер проверяет, система исполняет. Шлюз «данные верны?» ветвит поток.',
    lanes: [
      {
        name: 'Клиент',
        steps: [
          {id: 'start-message', label: 'Заявка'},
          {id: 'task-receive', label: 'Оформить заказ'},
        ],
      },
      {
        name: 'Менеджер',
        steps: [
          {id: 'task-user', label: 'Проверить'},
          {id: 'gateway-exclusive', label: 'Данные верны?'},
          {id: 'task-send', label: 'Уточнить'},
        ],
      },
      {
        name: 'Система',
        steps: [
          {id: 'task-service', label: 'Исполнить'},
          {id: 'end-none', label: 'Закрыт'},
        ],
      },
    ],
  },
  'approval-flow': {
    title: 'Согласование документа',
    caption: 'Руководитель утверждает или возвращает на доработку.',
    steps: [
      {id: 'start-none', label: 'Документ готов'},
      {id: 'task-user', label: 'Согласовать'},
    ],
    gateway: {
      after: 1,
      id: 'gateway-exclusive',
      label: 'Утвердить?',
      branches: [
        {label: 'Да', steps: [{id: 'end-none', label: 'Утверждено'}]},
        {label: 'Нет', steps: [{id: 'task-user', label: 'Доработать'}]},
      ],
    },
  },
  'incident-response': {
    title: 'Реакция на инцидент',
    caption: 'Алерт запускает классификацию; критичные инциденты эскалируются вручную.',
    steps: [
      {id: 'start-timer', label: 'Алерт'},
      {id: 'task-service', label: 'Классифицировать'},
    ],
    gateway: {
      after: 1,
      id: 'gateway-exclusive',
      label: 'Критично?',
      branches: [
        {label: 'Да', steps: [{id: 'task-user', label: 'Эскалация'}, {id: 'end-none', label: 'Закрыт'}]},
        {label: 'Нет', steps: [{id: 'task-script', label: 'Авто-ремедиация'}, {id: 'end-none', label: 'Закрыт'}]},
      ],
    },
  },
};
