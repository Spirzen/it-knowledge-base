const stores = {
  0: {strings: {}, hashes: {}, lists: {}, sets: {}},
  1: {strings: {}, hashes: {}, lists: {}, sets: {}},
};

let dbIndex = 0;

function store() {
  if (!stores[dbIndex]) stores[dbIndex] = {strings: {}, hashes: {}, lists: {}, sets: {}};
  return stores[dbIndex];
}

function splitArgs(line) {
  const parts = [];
  const re = /"([^"]*)"|(\S+)/g;
  let m;
  while ((m = re.exec(line))) parts.push(m[1] ?? m[2]);
  return parts;
}

export function executeRedisCommand(line) {
  const parts = splitArgs(line.trim());
  if (!parts.length) return {lines: [], db: dbIndex};

  const cmd = parts[0].toUpperCase();

  if (cmd === 'SELECT') {
    dbIndex = Number(parts[1]) || 0;
    return {lines: [{type: 'success', text: 'OK'}], db: dbIndex};
  }

  const s = store();

  if (cmd === 'SET') {
    s.strings[parts[1]] = parts[2] ?? '';
    return {lines: [{type: 'success', text: 'OK'}], db: dbIndex};
  }
  if (cmd === 'GET') {
    const v = s.strings[parts[1]];
    return {
      lines: [{type: v != null ? 'output' : 'muted', text: v != null ? `"${v}"` : '(nil)'}],
      db: dbIndex,
    };
  }
  if (cmd === 'HSET') {
    const key = parts[1];
    const field = parts[2];
    const val = parts[3] ?? '';
    if (!s.hashes[key]) s.hashes[key] = {};
    s.hashes[key][field] = val;
    return {lines: [{type: 'success', text: '(integer) 1'}], db: dbIndex};
  }
  if (cmd === 'HGETALL') {
    const h = s.hashes[parts[1]];
    if (!h) return {lines: [{type: 'muted', text: '(empty hash)'}], db: dbIndex};
    const text = Object.entries(h)
      .flatMap(([k, v]) => [k, v])
      .join('\n');
    return {lines: [{type: 'output', text}], db: dbIndex};
  }
  if (cmd === 'LPUSH') {
    const key = parts[1];
    if (!s.lists[key]) s.lists[key] = [];
    s.lists[key].unshift(parts[2]);
    return {lines: [{type: 'success', text: `(integer) ${s.lists[key].length}`}], db: dbIndex};
  }
  if (cmd === 'LRANGE') {
    const list = s.lists[parts[1]] ?? [];
    return {lines: [{type: 'output', text: JSON.stringify(list)}], db: dbIndex};
  }
  if (cmd === 'KEYS') {
    const all = [
      ...Object.keys(s.strings).map((k) => k),
      ...Object.keys(s.hashes).map((k) => k),
      ...Object.keys(s.lists).map((k) => k),
    ];
    return {lines: [{type: 'output', text: all.join('\n') || '(empty)'}], db: dbIndex};
  }

  if (cmd === 'HELP') {
    return {
      lines: [
        {
          type: 'output',
          text: 'SELECT 1 · SET key val · GET key · HSET emp f v · HGETALL emp · LPUSH log msg · KEYS *',
        },
      ],
      db: dbIndex,
    };
  }

  return {lines: [{type: 'error', text: `ERR unknown command '${cmd}'`}], db: dbIndex};
}

export function getRedisWelcome(db) {
  return [
    {type: 'banner', text: 'redis-cli · Universe IT'},
    {type: 'muted', text: `127.0.0.1:6379 [db ${db}]`},
  ];
}
