/** Данные для демо раздела «Разработка игр». */

export const PIPELINE_STAGES = [
  {
    id: 'concept',
    label: 'Идея',
    phase: 'Pre-production',
    weeks: '2–8',
    deliverables: ['Питч и референсы', 'Жанр и ЦА', 'Core loop на бумаге'],
    roles: ['Гейм-дизайнер', 'Продюсер'],
    risk: 'Размытая фантазия без проверяемой механики',
  },
  {
    id: 'preprod',
    label: 'Препродакшн',
    phase: 'Pre-production',
    weeks: '8–20',
    deliverables: ['GDD и техспека', 'Вертикальный срез', 'План команды и бюджета'],
    roles: ['Lead design', 'Техдир', 'Арт-директор'],
    risk: 'Переоценка объёма до прототипа',
  },
  {
    id: 'production',
    label: 'Продакшн',
    phase: 'Production',
    weeks: '40–200+',
    deliverables: ['Код механик', 'Уровни и контент', 'Арт, звук, UI'],
    roles: ['Программисты', 'Level design', 'QA'],
    risk: 'Feature creep и технический долг',
  },
  {
    id: 'qa',
    label: 'Тестирование',
    phase: 'Alpha / Beta',
    weeks: '8–24',
    deliverables: ['Баг-репорты', 'Баланс и перф', 'Сертификация TRC'],
    roles: ['QA', 'Сертификация платформ'],
    risk: 'Критические баги на финишной прямой',
  },
  {
    id: 'launch',
    label: 'Релиз',
    phase: 'Gold master',
    weeks: '2–6',
    deliverables: ['Day-1 патч', 'Маркетинг', 'Метрики воронки'],
    roles: ['Продюсер', 'Community', 'DevOps'],
    risk: 'Провал маркетинга при сильной игре',
  },
  {
    id: 'live',
    label: 'Live-ops',
    phase: 'Post-release',
    weeks: '∞',
    deliverables: ['Патчи и сезоны', 'Аналитика retention', 'Античит и модерация'],
    roles: ['Live team', 'Аналитики', 'Поддержка'],
    risk: 'Выгорание команды без плана контента',
  },
];

export const GAME_ENGINES = [
  {
    id: 'unity',
    name: 'Unity',
    lang: 'C#',
    dim: '2D / 3D',
    license: 'Подписка + роялти',
    strength: 'Инди, мобайл, кроссплатформа',
    weakness: 'Runtime overhead, большие AAA реже',
    platforms: 20,
    color: '#1a1a2e',
  },
  {
    id: 'unreal',
    name: 'Unreal Engine',
    lang: 'C++ / Blueprint',
    dim: '3D AAA',
    license: '5% после $1M',
    strength: 'Графика, Nanite, MetaHuman',
    weakness: 'Порог входа, размер билда',
    platforms: 15,
    color: '#0e7490',
  },
  {
    id: 'godot',
    name: 'Godot',
    lang: 'GDScript / C#',
    dim: '2D сильнее 3D',
    license: 'MIT, open source',
    strength: 'Лёгкий, бесплатный, сцены-дерево',
    weakness: 'Меньше ассет-стор и AAA-кейсов',
    platforms: 8,
    color: '#478cbf',
  },
  {
    id: 'roblox',
    name: 'Roblox Studio',
    lang: 'Luau',
    dim: 'UGC-платформа',
    license: 'Rev-share Roblox',
    strength: 'Соц. мультиплеер из коробки',
    weakness: 'Ограничения платформы, нет файловой системы',
    platforms: 1,
    color: '#e11d48',
  },
];

export const UNITY_DEMO_OBJECT = {
  name: 'PlayerShip',
  components: [
    {id: 'transform', label: 'Transform', desc: 'Позиция, поворот, масштаб'},
    {id: 'rigidbody', label: 'Rigidbody2D', desc: 'Физика и гравитация'},
    {id: 'collider', label: 'BoxCollider2D', desc: 'Столкновения'},
    {id: 'sprite', label: 'SpriteRenderer', desc: 'Отрисовка спрайта'},
    {id: 'input', label: 'PlayerController', desc: 'Скрипт: ввод и стрельба'},
    {id: 'audio', label: 'AudioSource', desc: 'Звук двигателя'},
  ],
};

export const ROBLOX_FLOW = [
  {from: 'client', to: 'server', msg: 'RemoteEvent: FireServer("BuySword")', secure: false},
  {from: 'server', to: 'client', msg: 'Проверка баланса в DataStore', secure: true},
  {from: 'server', to: 'client', msg: 'Replicate: Tool экипирован', secure: true},
];

export const MDA_LOOP = [
  {id: 'mechanics', label: 'Механики', desc: 'Правила: прыжок, инвентарь, урон', color: '#7c3aed'},
  {id: 'dynamics', label: 'Динамика', desc: 'Поведение системы: риск, темп, мета', color: '#2563eb'},
  {id: 'aesthetics', label: 'Эстетика', desc: 'Что чувствует игрок: вызов, фантазия, fellowship', color: '#059669'},
];

export const DEV_ROLES = [
  {id: 'design', label: 'Гейм-дизайн', focus: 'GDD, баланс, уровни'},
  {id: 'code', label: 'Программирование', focus: 'Геймплей, ИИ, сеть'},
  {id: 'art', label: 'Арт и анимация', focus: 'Модели, VFX, UI'},
  {id: 'audio', label: 'Звук', focus: 'SFX, музыка, микш'},
  {id: 'qa', label: 'QA', focus: 'Регрессия, перф, TRC'},
  {id: 'prod', label: 'Продюсирование', focus: 'Сроки, риски, релиз'},
];

export const HUB_TOPICS = [
  {title: 'Процесс', doc: '/encyclopedia/9-spinoff/9-04-razrabotka-igr/1', icon: '📋'},
  {title: 'Roblox', doc: '/encyclopedia/9-spinoff/9-04-razrabotka-igr/2', icon: '🧱'},
  {title: 'Unity', doc: '/encyclopedia/9-spinoff/9-04-razrabotka-igr/3', icon: '⚙'},
  {title: 'Unreal', doc: '/encyclopedia/9-spinoff/9-04-razrabotka-igr/4', icon: '🔥'},
  {title: 'Движки', doc: '/encyclopedia/9-spinoff/9-04-razrabotka-igr/113', icon: '🏗'},
  {title: 'Гейм-дизайн', doc: '/encyclopedia/9-spinoff/9-04-razrabotka-igr/117', icon: '🎯'},
  {title: 'Команда', doc: '/encyclopedia/9-spinoff/9-04-razrabotka-igr/111', icon: '👥'},
  {title: 'Тестирование', doc: '/encyclopedia/9-spinoff/9-04-razrabotka-igr/124', icon: '🐛'},
];
