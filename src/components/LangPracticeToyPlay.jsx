import React, {useMemo, useState} from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';
import DemoShell, {DemoCard} from './shared/DemoShell';
import {demoLoadingFallback} from './shared/demoFallback';
import {
  BUG_CASES,
  LOOT_TABLES,
  QUESTS,
  TAMAGOTCHI_ACTIONS,
  THEMES,
  TOY_META,
  caesarShift,
  pickWeighted,
  randomMemeLog,
} from './shared/langPracticeToysEngine';
import styles from './LangPracticeToyPlay.module.css';

function QuestToy({theme}) {
  const quest = QUESTS[theme] ?? QUESTS.javascript;
  const [roomId, setRoomId] = useState(quest.start);
  const [inventory, setInventory] = useState([]);

  const room = quest.rooms[roomId];

  const reset = () => {
    setRoomId(quest.start);
    setInventory([]);
  };

  const takeItem = (item) => {
    if (item && !inventory.includes(item)) {
      setInventory((prev) => [...prev, item]);
    }
  };

  const go = (next) => {
    const target = quest.rooms[next];
    if (!target) return;
    if (target.needs && !inventory.includes(target.needs)) return;
    if (target.item) takeItem(target.item);
    setRoomId(next);
  };

  if (!room) return null;

  return (
    <div className={styles.panel}>
      <p className={styles.story}>{room.text}</p>
      {inventory.length > 0 && (
        <div className={styles.inventory}>
          <span className={styles.score}>Инвентарь:</span>
          {inventory.map((item) => (
            <span key={item} className={styles.tag}>
              {item}
            </span>
          ))}
        </div>
      )}
      {room.end ? (
        <button type="button" className="it-demo__btn it-demo__btn--primary" onClick={reset}>
          Сыграть снова
        </button>
      ) : (
        <div className={styles.choices}>
          {(room.choices ?? []).map((choice) => {
            const target = quest.rooms[choice.next];
            const blocked = target?.needs && !inventory.includes(target.needs);
            return (
              <button
                key={choice.label}
                type="button"
                className={styles.choiceBtn}
                disabled={blocked}
                onClick={() => go(choice.next)}
              >
                {choice.label}
                {choice.hint && <span className={styles.hint}>{choice.hint}</span>}
                {blocked && target?.blocked && <span className={styles.hint}>{target.blocked}</span>}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}

function LootboxToy() {
  const [inventory, setInventory] = useState([]);
  const [lastDrop, setLastDrop] = useState(null);
  const [opens, setOpens] = useState(0);

  const openBox = () => {
    const item = pickWeighted(LOOT_TABLES.default);
    setLastDrop(item);
    setOpens((n) => n + 1);
    setInventory((prev) => [...prev, item]);
  };

  return (
    <div className={styles.panel}>
      <p className={styles.score}>Открыто сундуков: {opens}</p>
      <button type="button" className="it-demo__btn it-demo__btn--primary" onClick={openBox}>
        Открыть лутбокс
      </button>
      {lastDrop && (
        <p className={styles.story}>
          Выпало: <strong style={{color: lastDrop.color}}>{lastDrop.name}</strong> ({lastDrop.rarity})
        </p>
      )}
      {inventory.length > 0 && (
        <div className={styles.lootGrid}>
          {inventory.map((item, idx) => (
            <span
              key={`${item.name}-${idx}`}
              className={styles.lootItem}
              style={{borderColor: item.color, color: item.color}}
            >
              {item.name}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

function BugQuizToy() {
  const cases = BUG_CASES.default;
  const [idx, setIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [picked, setPicked] = useState(null);

  const current = cases[idx % cases.length];

  const pick = (optionIdx) => {
    if (picked !== null) return;
    setPicked(optionIdx);
    if (optionIdx === current.answer) setScore((s) => s + 1);
  };

  const next = () => {
    setIdx((i) => i + 1);
    setPicked(null);
  };

  const correct = picked === current.answer;

  return (
    <div className={styles.panel}>
      <p className={styles.score}>
        Раунд {(idx % cases.length) + 1}/{cases.length} · Очки: {score}
      </p>
      <ul className={styles.story}>
        {current.symptoms.map((s) => (
          <li key={s}>{s}</li>
        ))}
      </ul>
      <div className={styles.quizOpts}>
        {current.options.map((opt, i) => (
          <button
            key={opt}
            type="button"
            className={styles.choiceBtn}
            disabled={picked !== null}
            onClick={() => pick(i)}
          >
            {opt}
          </button>
        ))}
      </div>
      {picked !== null && (
        <>
          <div className={correct ? styles.feedbackOk : styles.feedbackBad}>
            {correct ? 'Верно!' : 'Не то.'} {current.explain}
          </div>
          <button type="button" className="it-demo__btn it-demo__btn--secondary" onClick={next}>
            Следующий кейс
          </button>
        </>
      )}
    </div>
  );
}

function TamagotchiToy() {
  const [stats, setStats] = useState({load: 40, temp: 55, uptime: 12});
  const [log, setLog] = useState(['Сервер-питомец запущен. Следите за load и temp.']);
  const [alive, setAlive] = useState(true);

  const act = (action) => {
    if (!alive) return;
    setStats((s) => {
      const next = {
        load: Math.max(0, Math.min(100, s.load + action.load)),
        temp: Math.max(0, Math.min(100, s.temp + action.temp)),
        uptime: Math.max(0, s.uptime + action.uptime),
      };
      const dead = next.load >= 95 || next.temp >= 90;
      setAlive(!dead);
      setLog((prev) => [
        ...prev.slice(-5),
        dead
          ? `Перегрев! load=${next.load} temp=${next.temp}`
          : `${action.label}: load ${s.load}→${next.load}, temp ${s.temp}→${next.temp}`,
      ]);
      return next;
    });
  };

  const reset = () => {
    setStats({load: 40, temp: 55, uptime: 12});
    setLog(['Рестарт. Сервер снова жив.']);
    setAlive(true);
  };

  const bars = [
    {key: 'load', label: 'Load', value: stats.load},
    {key: 'temp', label: 'Temp', value: stats.temp},
    {key: 'uptime', label: 'Uptime (д)', value: Math.min(stats.uptime, 100)},
  ];

  return (
    <div className={styles.panel}>
      <div className={styles.stats}>
        {bars.map((b) => (
          <div key={b.key} className={styles.stat}>
            {b.label}: {b.value}
            <div className={styles.statBar}>
              <div className={styles.statFill} style={{width: `${b.value}%`}} />
            </div>
          </div>
        ))}
      </div>
      <div className={styles.choices}>
        {TAMAGOTCHI_ACTIONS.map((a) => (
          <button
            key={a.id}
            type="button"
            className={styles.choiceBtn}
            disabled={!alive}
            onClick={() => act(a)}
          >
            {a.label}
          </button>
        ))}
      </div>
      <div className={styles.logBox}>
        {log.map((line, i) => (
          <p key={i} className={styles.logLine}>
            {line}
          </p>
        ))}
      </div>
      {!alive && (
        <button type="button" className="it-demo__btn it-demo__btn--primary" onClick={reset}>
          Перезапустить питомца
        </button>
      )}
    </div>
  );
}

function CipherToy() {
  const [text, setText] = useState('Guild secret: meet at port 8080');
  const [shift, setShift] = useState(3);

  const encoded = useMemo(() => caesarShift(text, shift), [text, shift]);
  const decoded = useMemo(() => caesarShift(encoded, -shift), [encoded, shift]);

  return (
    <div className={styles.panel}>
      <label className="it-demo__label">Послание</label>
      <input
        className="it-demo__input"
        value={text}
        onChange={(e) => setText(e.target.value)}
        spellCheck={false}
      />
      <div className={styles.cipherRow}>
        <label className="it-demo__label">Сдвиг: {shift}</label>
        <input
          type="range"
          min={-13}
          max={13}
          value={shift}
          onChange={(e) => setShift(Number(e.target.value))}
        />
      </div>
      <p className={styles.story}>
        <strong>Шифр:</strong> {encoded}
      </p>
      <p className={styles.score}>
        <strong>Расшифровка:</strong> {decoded}
      </p>
    </div>
  );
}

function MemeLogsToy() {
  const [logs, setLogs] = useState([randomMemeLog()]);

  const generate = () => setLogs((prev) => [randomMemeLog(), ...prev].slice(0, 8));

  return (
    <div className={styles.panel}>
      <button type="button" className="it-demo__btn it-demo__btn--primary" onClick={generate}>
        Сгенерировать лог
      </button>
      <div className={styles.logBox}>
        {logs.map((line, i) => (
          <p key={i} className={styles.logLine}>
            {line}
          </p>
        ))}
      </div>
    </div>
  );
}

function ToyBody({toy, theme}) {
  switch (toy) {
    case 'quest':
      return <QuestToy theme={theme} />;
    case 'lootbox':
      return <LootboxToy />;
    case 'bugquiz':
      return <BugQuizToy />;
    case 'tamagotchi':
      return <TamagotchiToy />;
    case 'cipher':
      return <CipherToy />;
    case 'memelogs':
      return <MemeLogsToy />;
    default:
      return <QuestToy theme={theme} />;
  }
}

function LangPracticeToyPlayInner({toy = 'quest', theme = 'javascript'}) {
  const meta = TOY_META[toy] ?? TOY_META.quest;
  const themeData = THEMES[theme] ?? THEMES.javascript;
  const questTitle = toy === 'quest' ? (QUESTS[theme]?.title ?? '') : '';

  return (
    <DemoShell className={styles.root} style={{'--toy-accent': themeData.accent}}>
      <DemoCard
        title={questTitle || meta.title}
        subtitle={`${themeData.label} · ${meta.subtitle}`}
      >
        <p className={styles.score}>Закрепляет: {meta.skill}</p>
        <ToyBody toy={toy} theme={theme} />
      </DemoCard>
    </DemoShell>
  );
}

/** Игровой мини-тренажёр для глав «Простые приложения на …». */
export default function LangPracticeToyPlay(props) {
  return (
    <BrowserOnly fallback={demoLoadingFallback('Загрузка тренажёра…')}>
      {() => <LangPracticeToyPlayInner {...props} />}
    </BrowserOnly>
  );
}

/** Набор тренажёров для языка (3 штуки подряд). */
export function LangPracticeToysHubInner({theme = 'javascript', toys}) {
  const list = toys ?? ['quest', 'lootbox', 'bugquiz'];
  return (
    <div className={styles.panel}>
      {list.map((toy) => (
        <LangPracticeToyPlayInner key={toy} toy={toy} theme={theme} />
      ))}
    </div>
  );
}

export function LangPracticeToysHub(props) {
  return (
    <BrowserOnly fallback={demoLoadingFallback('Загрузка тренажёров…')}>
      {() => <LangPracticeToysHubInner {...props} />}
    </BrowserOnly>
  );
}
