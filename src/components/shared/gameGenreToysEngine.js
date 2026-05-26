/** Метаданные и данные для мини-игр по жанрам видеоигр. */

import {THEMES} from './langPracticeToysEngine';

export {THEMES};

export const GENRES = [
  'arcade',
  'platformer',
  'puzzle',
  'turnbased',
  'rpg',
  'roguelike',
];

export const GENRE_META = {
  arcade: {
    label: 'Аркада / экшен',
    subtitle: 'реакция в реальном времени, game loop, столкновения',
    skill: 'цикл update/render, координаты, коллизии',
    accent: '#ef4444',
    refs: 'Pac-Man, Space Invaders',
  },
  platformer: {
    label: 'Платформер',
    subtitle: 'гравитация, прыжок, проверка «на земле»',
    skill: 'физика состояния, ввод, победа/поражение',
    accent: '#22c55e',
    refs: 'Super Mario, Celeste',
  },
  puzzle: {
    label: 'Головоломка',
    subtitle: 'правила на сетке, детерминированные ходы',
    skill: 'массивы, инварианты, проверка победы',
    accent: '#a855f7',
    refs: 'Tetris, 2048, пятнашки',
  },
  turnbased: {
    label: 'Пошаговая стратегия',
    subtitle: 'дискретные ходы, очередь, ИИ противника',
    skill: 'очередь ходов, pathfinding по клеткам',
    accent: '#3b82f6',
    refs: 'XCOM, Civilization',
  },
  rpg: {
    label: 'RPG',
    subtitle: 'статы, инвентарь, ветвление сюжета',
    skill: 'объект персонажа, прогресс, save state',
    accent: '#f59e0b',
    refs: 'Fallout, Final Fantasy',
  },
  roguelike: {
    label: 'Roguelike',
    subtitle: 'случайные комнаты, permadeath, мета-прогресс',
    skill: 'RNG, процедурность, риск',
    accent: '#14b8a6',
    refs: 'Hades, Slay the Spire',
  },
};

/** Короткие фрагменты «как это пишут» — привязка к языку главы. */
export const CODE_SNIPPETS = {
  javascript: {
    arcade: `while (running) {
  readInput();
  updatePositions(dt);
  if (playerHits(enemy)) gameOver();
  drawFrame();
}`,
    platformer: `if (onGround && keys.jump) vy = JUMP;
vy += GRAVITY * dt;
y += vy * dt;
onGround = floor.collides(x, y);`,
    puzzle: `function tryMove(board, r, c) {
  if (!isAdjacentEmpty(board, r, c)) return board;
  return swapWithEmpty(board, r, c);
}`,
    turnbased: `if (phase === 'player') moveUnit(sel, cell);
else enemy.takeTurn(state);
if (allEnemiesDown()) win();`,
    rpg: `hero = { hp: 20, gold: 0, items: [] };
function choose(action) {
  apply(hero, action.effects);
  scene = action.next;
}`,
    roguelike: `room = randomRoom(seed, floor);
hero.hp -= room.risk;
if (hero.hp <= 0) return restartRun();`,
  },
  python: {
    arcade: `while running:
    events = poll_input()
    update_positions(dt)
    if player_hits(enemy):
        game_over()
    draw_frame()`,
    platformer: `if on_ground and keys["jump"]:
    vy = JUMP
vy += GRAVITY * dt
y += vy * dt
on_ground = floor.collides(x, y)`,
    puzzle: `def try_move(board, r, c):
    if not is_adjacent_empty(board, r, c):
        return board
    return swap_with_empty(board, r, c)`,
    turnbased: `if phase == "player":
    move_unit(sel, cell)
else:
    enemy.take_turn(state)`,
    rpg: `hero = {"hp": 20, "gold": 0, "items": []}

def choose(action):
    apply(hero, action.effects)
    global scene
    scene = action.next_id`,
    roguelike: `room = random_room(seed, floor)
hero["hp"] -= room["risk"]
if hero["hp"] <= 0:
    restart_run()`,
  },
  java: {
    arcade: `while (running) {
  input.poll();
  world.update(dt);
  if (world.collides(player, foe)) gameOver();
  renderer.draw(world);
}`,
    platformer: `if (onGround && input.jump()) vy = JUMP;
vy += GRAVITY * dt;
y += vy * dt;
onGround = floor.collides(x, y);`,
    puzzle: `Board tryMove(Board b, int r, int c) {
  if (!adjacentEmpty(b, r, c)) return b;
  return swapWithEmpty(b, r, c);
}`,
    turnbased: `if (phase == Phase.PLAYER) move(sel, cell);
else ai.takeTurn(state);`,
    rpg: `Hero hero = new Hero(20, 0);
void choose(Action a) {
  a.apply(hero);
  scene = a.next();
}`,
    roguelike: `Room room = Rooms.roll(seed, floor);
hero.hp -= room.risk();
if (hero.hp <= 0) restartRun();`,
  },
  csharp: {
    arcade: `while (running) {
  Input.Poll();
  World.Update(dt);
  if (World.Collides(player, foe)) GameOver();
  Renderer.Draw(World);
}`,
    platformer: `if (onGround && input.Jump) vy = JumpForce;
vy += Gravity * dt;
y += vy * dt;
onGround = floor.Collides(x, y);`,
    puzzle: `Board TryMove(Board b, int r, int c) =>
  AdjacentEmpty(b, r, c) ? SwapEmpty(b, r, c) : b;`,
    turnbased: `if (phase == Phase.Player) Move(sel, cell);
else enemy.TakeTurn(ref state);`,
    rpg: `var hero = new Hero(Hp: 20);
void Choose(Action a) {
  a.Apply(hero);
  scene = a.Next;
}`,
    roguelike: `var room = Rooms.Roll(seed, floor);
hero.Hp -= room.Risk;
if (hero.Hp <= 0) RestartRun();`,
  },
  go: {
    arcade: `for running {
  in := pollInput()
  update(&world, dt)
  if collides(world.Player, world.Foe) { gameOver() }
  draw(world)
}`,
    platformer: `if onGround && in.Jump { vy = jump }
vy += gravity * dt
y += vy * dt
onGround = floor.Collides(x, y)`,
    puzzle: `func tryMove(b Board, r, c int) Board {
  if !adjacentEmpty(b, r, c) { return b }
  return swapEmpty(b, r, c)
}`,
    turnbased: `if phase == player { move(sel, cell) } else { ai.Turn(&st) }`,
    rpg: `hero := Hero{HP: 20}
func choose(a Action) {
  a.Apply(&hero)
  scene = a.Next
}`,
    roguelike: `room := rooms.Roll(seed, floor)
hero.HP -= room.Risk
if hero.HP <= 0 { restartRun() }`,
  },
  rust: {
    arcade: `while running {
    let input = poll_input();
    world.update(dt);
    if world.collides(player, foe) { break; }
    draw(&world);
}`,
    platformer: `if on_ground && input.jump { vy = JUMP; }
vy += GRAVITY * dt;
y += vy * dt;
on_ground = floor.collides(x, y);`,
    puzzle: `fn try_move(board: &mut Board, r: usize, c: usize) {
    if adjacent_empty(board, r, c) { swap_empty(board, r, c); }
}`,
    turnbased: `match phase {
    Phase::Player => move_unit(sel, cell),
    Phase::Enemy => ai.take_turn(&mut state),
}`,
    rpg: `struct Hero { hp: i32, gold: i32 }
fn choose(hero: &mut Hero, action: &Action) {
    action.apply(hero);
}`,
    roguelike: `let room = rooms::roll(seed, floor);
hero.hp -= room.risk;
if hero.hp <= 0 { restart_run(); }`,
  },
};

export function getCodeSnippet(theme, genre) {
  const lang = CODE_SNIPPETS[theme] ?? CODE_SNIPPETS.javascript;
  return lang[genre] ?? lang.arcade;
}

/** Пятнашки 3×3: 0 — пустая клетка. */
export const SOLVED_PUZZLE = [1, 2, 3, 4, 5, 6, 7, 8, 0];

export function createShuffledPuzzle() {
  const board = [...SOLVED_PUZZLE];
  for (let i = 0; i < 24; i += 1) {
    const empty = board.indexOf(0);
    const moves = neighbors(empty);
    const pick = moves[Math.floor(Math.random() * moves.length)];
    [board[empty], board[pick]] = [board[pick], board[empty]];
  }
  if (isPuzzleSolved(board)) return createShuffledPuzzle();
  return board;
}

function neighbors(idx) {
  const r = Math.floor(idx / 3);
  const c = idx % 3;
  const out = [];
  if (r > 0) out.push(idx - 3);
  if (r < 2) out.push(idx + 3);
  if (c > 0) out.push(idx - 1);
  if (c < 2) out.push(idx + 1);
  return out;
}

export function tryPuzzleMove(board, index) {
  const empty = board.indexOf(0);
  if (!neighbors(empty).includes(index)) return board;
  const next = [...board];
  [next[empty], next[index]] = [next[index], next[empty]];
  return next;
}

export function isPuzzleSolved(board) {
  return board.every((v, i) => v === SOLVED_PUZZLE[i]);
}

/** RPG — короткий квест с характеристиками. */
export const RPG_SCENES = {
  start: {
    text: 'Вы у ворот подземелья. HP: полные. В рюкзаке — факел.',
    choices: [
      {label: 'Идти в тёмный коридор', next: 'dark', effects: {}},
      {label: 'Поговорить со стражником', next: 'guard', effects: {gold: 5}},
    ],
  },
  guard: {
    text: 'Стражник дал зелье (+8 HP) за честный ответ на загадку.',
    choices: [
      {label: 'Взять зелье и войти', next: 'dark', effects: {hp: 8, item: 'potion'}},
      {label: 'Отказаться и идти с факелом', next: 'dark', effects: {xp: 10}},
    ],
  },
  dark: {
    text: 'В темноте слышен рык. Без факела или зелья больно.',
    needs: null,
    choices: [
      {label: 'Атаковать тенью', next: 'fight', effects: {hp: -6, xp: 15}},
      {label: 'Использовать факел', next: 'safe', effects: {xp: 5}, needsItem: 'torch'},
      {label: 'Выпить зелье и атаковать', next: 'win', effects: {xp: 25}, needsItem: 'potion'},
    ],
  },
  safe: {
    text: 'Факел отпугивает тень. Вы находите артефакт.',
    choices: [{label: 'Забрать артефакт', next: 'win', effects: {gold: 30, xp: 20}}],
  },
  fight: {
    text: 'Бой закончен. Вы живы, но изранены.',
    choices: [{label: 'Отдохнуть у костра', next: 'win', effects: {hp: 5, gold: 10}}],
  },
  win: {
    text: 'Уровень пройден! RPG закрепляет статы, инвентарь и ветвление.',
    end: true,
  },
};

export const ROGUE_EVENTS = [
  {id: 'trap', label: 'Ловушка', risk: 12, text: 'Стрела из стены. -12 HP.'},
  {id: 'heal', label: 'Фонтан', risk: -10, text: 'Глоток воды. +10 HP.'},
  {id: 'gold', label: 'Сундук', risk: 0, text: '+15 золота, но шум привлекает стражу.', gold: 15},
  {id: 'altar', label: 'Алтарь', risk: 6, text: 'Жертва силы ради артефакта. -6 HP, +1 артефакт.'},
  {id: 'empty', label: 'Пустая комната', risk: 0, text: 'Тишина. Следующий этаж ближе.'},
  {id: 'boss', label: 'Мини-босс', risk: 18, text: 'Жёсткий бой. -18 HP, +2 этажа.'},
];

export function rollRogueEvent(seed) {
  const idx = Math.abs(seed) % ROGUE_EVENTS.length;
  return ROGUE_EVENTS[idx];
}

/** Стартовые позиции для пошаговой мини-стратегии (5×5). */
export const TURN_START = {
  player: {r: 4, c: 1, hp: 3},
  enemy: {r: 0, c: 3, hp: 2},
};

export function manhattan(a, b) {
  return Math.abs(a.r - b.r) + Math.abs(a.c - b.c);
}

export function enemyTurn(player, enemy) {
  if (manhattan(player, enemy) === 1) return {attack: true, enemy};
  const dr = player.r > enemy.r ? 1 : player.r < enemy.r ? -1 : 0;
  const dc = player.c > enemy.c ? 1 : player.c < enemy.c ? -1 : 0;
  let nr = enemy.r;
  let nc = enemy.c;
  if (dr !== 0 && Math.abs(player.r - enemy.r) >= Math.abs(player.c - enemy.c)) {
    nr += dr;
  } else if (dc !== 0) {
    nc += dc;
  } else if (dr !== 0) {
    nr += dr;
  }
  nr = Math.max(0, Math.min(4, nr));
  nc = Math.max(0, Math.min(4, nc));
  if (nr === player.r && nc === player.c) return {attack: true, enemy};
  return {attack: false, enemy: {r: nr, c: nc, hp: enemy.hp}};
}
