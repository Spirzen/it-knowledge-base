/** Данные для игровых мини-тренажёров в главах «Простые приложения». */

export const THEMES = {
  javascript: {label: 'JavaScript', accent: '#f7df1e'},
  python: {label: 'Python', accent: '#3776ab'},
  java: {label: 'Java', accent: '#f89820'},
  csharp: {label: 'C#', accent: '#68217a'},
  go: {label: 'Go', accent: '#00add8'},
  rust: {label: 'Rust', accent: '#dea584'},
};

export const TOY_META = {
  quest: {
    title: 'Квест с выбором',
    subtitle: 'if/else, состояние, функции — без терминала, прямо в статье',
    skill: 'условия и состояние',
  },
  lootbox: {
    title: 'Лутбокс',
    subtitle: 'массивы, объекты, weighted random',
    skill: 'коллекции и вероятности',
  },
  bugquiz: {
    title: 'Угадай баг',
    subtitle: 'симптомы → причина, счёт очков',
    skill: 'логика и отладка',
  },
  tamagotchi: {
    title: 'Тамагочи-сервер',
    subtitle: 'классы, состояние, методы',
    skill: 'ООП и состояние объекта',
  },
  cipher: {
    title: 'Шифратор гильдии',
    subtitle: 'строки, циклы, преобразования',
    skill: 'работа со строками',
  },
  memelogs: {
    title: 'Генератор мемных логов',
    subtitle: 'шаблоны, random, форматирование',
    skill: 'строки и random',
  },
};

/** Квест «Побег из дата-центра» и тематические варианты. */
export const QUESTS = {
  javascript: {
    title: 'Побег из дата-центра',
    start: 'hall',
    rooms: {
      hall: {
        text: 'Вы в зале серверов. Температура 38°C, вентиляторы ревут.',
        choices: [
          {label: 'Проверить UPS', next: 'ups', hint: 'if (power.ok) goto backup'},
          {label: 'Открыть стойку A-12', next: 'rack', hint: 'needs keycard'},
        ],
      },
      ups: {
        text: 'UPS на 12%. Вы нашли резервный ключ-карту.',
        item: 'keycard',
        choices: [{label: 'Вернуться в зал', next: 'hall'}],
      },
      rack: {
        text: 'Стойка A-12: красный свет, но дверь открылась!',
        needs: 'keycard',
        blocked: 'Нужна keycard. Сначала проверьте UPS.',
        choices: [{label: 'Выключить аварийный режим', next: 'win', hint: 'shutdown --safe'}],
      },
      win: {
        text: 'Серверы стабилизированы. Победа! Вы закрепили if/else и состояние инвентаря.',
        end: true,
      },
    },
  },
  python: {
    title: 'Подземелье скриптов',
    start: 'cave',
    rooms: {
      cave: {
        text: 'Пещера с табличкой: «import antigravity».',
        choices: [
          {label: 'Идти на свет', next: 'light'},
          {label: 'Читать traceback на стене', next: 'trace'},
        ],
      },
      light: {
        text: 'Выход! Освещённая тропа — цикл while True нашёл break.',
        end: true,
      },
      trace: {
        text: 'На стене: KeyError. Вы поняли, что ключ надо искать в dict.',
        item: 'dict_key',
        choices: [{label: 'К свету', next: 'light'}],
      },
    },
  },
  java: {
    title: 'Лабиринт классов',
    start: 'lobby',
    rooms: {
      lobby: {
        text: 'Lobby: abstract Room, concrete Hall.',
        choices: [
          {label: 'extends Dungeon', next: 'dungeon'},
          {label: 'implements Runnable', next: 'thread'},
        ],
      },
      dungeon: {text: 'Подземелье пройдено. ООП-композиция сработала.', end: true},
      thread: {text: 'Новый Thread запущен. Вы вышли параллельным путём.', end: true},
    },
  },
  csharp: {
    title: 'Коридор .NET',
    start: 'start',
    rooms: {
      start: {
        text: 'dotnet run — и вы в коридоре сервисов.',
        choices: [
          {label: 'try { openDoor }', next: 'door'},
          {label: 'catch и лог', next: 'log'},
        ],
      },
      door: {text: 'Дверь открыта без Exception. Победа!', end: true},
      log: {text: 'ILogger записал путь. Вы вышли через обработку ошибок.', end: true},
    },
  },
  go: {
    title: 'Горутинный тоннель',
    start: 'main',
    rooms: {
      main: {
        text: 'main() ждёт в канале. Куда отправить goroutine?',
        choices: [
          {label: 'go explore()', next: 'explore'},
          {label: 'select default', next: 'default'},
        ],
      },
      explore: {text: 'Goroutine вернула результат в chan. Выход найден!', end: true},
      default: {text: 'select не заблокировался — запасной маршрут.', end: true},
    },
  },
  rust: {
    title: 'Порт-страж',
    start: 'gate',
    rooms: {
      gate: {
        text: 'Порт 3000 под атакой. match event { ... }',
        choices: [
          {label: 'Repair → Ok(())', next: 'repair'},
          {label: 'Panic! (учебный)', next: 'panic'},
        ],
      },
      repair: {text: 'Сервис восстановлен. Result::Ok — победа.', end: true},
      panic: {text: 'unwrap() на None — урок усвоен. Попробуйте Repair.', choices: [{label: 'Repair', next: 'repair'}]},
    },
  },
};

export const LOOT_TABLES = {
  default: [
    {name: 'Кофе ++', rarity: 'common', weight: 50, color: '#94a3b8'},
    {name: 'Stack Overflow Tab', rarity: 'common', weight: 30, color: '#94a3b8'},
    {name: 'Рефакторинг меч', rarity: 'rare', weight: 15, color: '#60a5fa'},
    {name: 'Epic: Green CI', rarity: 'epic', weight: 4, color: '#a78bfa'},
    {name: 'Legendary: Prod без даунтайма', rarity: 'legendary', weight: 1, color: '#fbbf24'},
  ],
};

export const BUG_CASES = {
  default: [
    {
      symptoms: ['500 на POST /login', 'в логах NullPointerException', 'только у новых пользователей'],
      options: ['Баг в CSS', 'Не инициализирован объект User', 'Сломался DNS', 'Мало RAM на сервере'],
      answer: 1,
      explain: 'NPE при обращении к полю — классика неинициализированной ссылки.',
    },
    {
      symptoms: ['страница белая', 'консоль: Cannot read property of undefined', 'после деплоя фронта'],
      options: ['Ошибка в API', 'Обращение к полю до загрузки данных', 'Сервер перегрет', 'Битый кабель'],
      answer: 1,
      explain: 'undefined/null до прихода ответа — типичный async/frontend баг.',
    },
    {
      symptoms: ['цикл крутится бесконечно', 'CPU 100%', 'while (true) без break'],
      options: ['Нет break/условия выхода', 'Плохой монитор', 'Вирус', 'Слишком много RAM'],
      answer: 0,
      explain: 'Бесконечный цикл — забытое условие или break.',
    },
  ],
};

export const MEME_LOG_TEMPLATES = [
  '{time} ERROR deploy failed: {reason}',
  '{time} WARN {user} pushed on Friday',
  '{time} INFO coffee level: {pct}%',
  '{time} DEBUG it works on my machine ({reason})',
  '{time} CRITICAL prod is {reason} again',
];

export const MEME_REASONS = [
  'лишняя запятая',
  'забыли миграцию',
  'cache invalidation',
  'один символ в .env',
  'merge без review',
  'npm install --force',
];

export function pickWeighted(items) {
  const total = items.reduce((s, i) => s + i.weight, 0);
  let roll = Math.random() * total;
  for (const item of items) {
    roll -= item.weight;
    if (roll <= 0) return item;
  }
  return items[items.length - 1];
}

export function caesarShift(text, shift) {
  const n = ((shift % 26) + 26) % 26;
  return text.replace(/[a-zA-Z]/g, (ch) => {
    const base = ch <= 'Z' ? 65 : 97;
    return String.fromCharCode(((ch.charCodeAt(0) - base + n) % 26) + base);
  });
}

export function randomMemeLog() {
  const time = `${String(Math.floor(Math.random() * 24)).padStart(2, '0')}:${String(Math.floor(Math.random() * 60)).padStart(2, '0')}`;
  const tpl = MEME_LOG_TEMPLATES[Math.floor(Math.random() * MEME_LOG_TEMPLATES.length)];
  const reason = MEME_REASONS[Math.floor(Math.random() * MEME_REASONS.length)];
  const pct = Math.floor(Math.random() * 100);
  return tpl.replace('{time}', time).replace('{reason}', reason).replace('{pct}', String(pct)).replace('{user}', '@dev');
}

export const TAMAGOTCHI_ACTIONS = [
  {id: 'cool', label: 'Охладить', load: -15, temp: -8, uptime: 1},
  {id: 'deploy', label: 'Deploy', load: 20, temp: 12, uptime: 5},
  {id: 'restart', label: 'Restart', load: -30, temp: -20, uptime: -2},
  {id: 'scale', label: 'Scale out', load: -10, temp: 5, uptime: 3},
];

export const LANGUAGE_TOYS = {
  javascript: ['quest', 'memelogs', 'lootbox'],
  python: ['tamagotchi', 'bugquiz', 'lootbox'],
  java: ['quest', 'bugquiz', 'cipher'],
  csharp: ['quest', 'lootbox', 'bugquiz'],
  go: ['quest', 'bugquiz', 'lootbox'],
  rust: ['quest', 'cipher', 'lootbox'],
};
