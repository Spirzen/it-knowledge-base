export const ROOMS = [
  {id: 'tavern', label: 'Таверна', emoji: '🍺'},
  {id: 'guild', label: 'Гильдия', emoji: '⚔️'},
  {id: 'raid', label: 'Рейд', emoji: '🐉'},
];

export const BOT_REPLIES = {
  tavern: [
    'Кто-нибудь видел мой stash?',
    'Сегодня деплой только после второго эспрессо.',
    'Здесь Wi‑Fi сильнее, чем на проде.',
  ],
  guild: [
    'Собираемся в 20:00 — не опаздывайте.',
    'Нужен ещё один хил на босса.',
    'Лут по DKP, как всегда.',
  ],
  raid: [
    'Босс на 30% — не афкайте!',
    'Внимание: AoE по всей площадке.',
    'Рестарт? Только если wipe.',
  ],
};

export const SYSTEM_COMMANDS = {
  '/roll': () => {
    const n = Math.floor(Math.random() * 20) + 1;
    return {type: 'system', text: `🎲 Выпало: ${n}`};
  },
  '/help': () => ({
    type: 'system',
    text: 'Команды: /roll · /who · /clear',
  }),
  '/who': (room) => ({
    type: 'system',
    text: `В комнате «${room.label}»: вы + ${2 + Math.floor(Math.random() * 4)} игроков (симуляция).`,
  }),
};

export function parseMessage(raw, room, nickname) {
  const text = raw.trim();
  if (!text) return null;

  if (text.startsWith('/')) {
    const cmd = text.split(/\s+/)[0].toLowerCase();
    if (cmd === '/roll' && SYSTEM_COMMANDS['/roll']) return SYSTEM_COMMANDS['/roll']();
    if (cmd === '/help' && SYSTEM_COMMANDS['/help']) return SYSTEM_COMMANDS['/help']();
    if (cmd === '/who' && SYSTEM_COMMANDS['/who']) return SYSTEM_COMMANDS['/who'](room);
    if (cmd === '/clear') return {type: 'clear'};
    return {type: 'system', text: `Неизвестная команда: ${cmd}`};
  }

  if (text.startsWith('/w ') || text.startsWith('/whisper ')) {
    const parts = text.split(/\s+/);
    const target = parts[1] ?? 'кому-то';
    const msg = parts.slice(2).join(' ') || '…';
    return {
      type: 'whisper',
      from: nickname,
      to: target,
      text: msg,
    };
  }

  return {
    type: 'chat',
    from: nickname,
    text,
    roomId: room.id,
  };
}

export function randomBotMessage(roomId) {
  const pool = BOT_REPLIES[roomId] ?? BOT_REPLIES.tavern;
  const names = ['Гоблин-SRE', 'Бард-PM', 'Паладин-QA', 'Маг-DevOps'];
  return {
    type: 'chat',
    from: names[Math.floor(Math.random() * names.length)],
    text: pool[Math.floor(Math.random() * pool.length)],
    roomId,
  };
}

export const LANGUAGE_LABELS = {
  javascript: 'Node.js + socket.io (учебная модель)',
  python: 'Python + threading (учебная модель)',
  go: 'Go + goroutines + channels (учебная модель)',
};
