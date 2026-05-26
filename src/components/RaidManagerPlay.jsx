import React, {useState} from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';
import DemoShell, {DemoCard} from './shared/DemoShell';
import {demoLoadingFallback} from './shared/demoFallback';
import {
  DEFAULT_RAIDERS,
  LOOT_ITEMS,
  ROLES,
  attendanceSummary,
  distributeLoot,
  roleMeta,
} from './shared/raidManagerEngine';
import styles from './LangPracticeSpecial.module.css';

function RaidManagerPlayInner({language = 'Java'}) {
  const [raiders, setRaiders] = useState(DEFAULT_RAIDERS);
  const [lootIdx, setLootIdx] = useState(0);
  const [log, setLog] = useState('Отметьте присутствующих и раздайте лут.');

  const togglePresent = (id) => {
    setRaiders((list) =>
      list.map((r) => (r.id === id ? {...r, present: !r.present} : r)),
    );
  };

  const setRole = (id, role) => {
    setRaiders((list) => list.map((r) => (r.id === id ? {...r, role} : r)));
  };

  const addRaider = () => {
    const id = String(Date.now());
    setRaiders((list) => [
      ...list,
      {id, name: `Игрок-${list.length + 1}`, role: 'dps', present: true, loot: 0},
    ]);
  };

  const runDistribute = () => {
    const item = LOOT_ITEMS[lootIdx];
    const {raiders: next, log: msg} = distributeLoot(raiders, 1);
    setRaiders(next);
    setLog(`${item.name}: ${msg}`);
  };

  const resetLoot = () => {
    setRaiders((list) => list.map((r) => ({...r, loot: 0})));
    setLog('Счётчики лута сброшены.');
  };

  return (
    <DemoShell>
      <DemoCard
        title="Менеджер рейда"
        subtitle={`${language} · List/Map, валидация, распределение ресурсов`}
      >
        <p className={styles.hint}>Посещаемость: {attendanceSummary(raiders)}</p>

        <div className={styles.row}>
          <button type="button" className="it-demo__btn it-demo__btn--secondary" onClick={addRaider}>
            + Игрок
          </button>
          <label className={styles.hint}>
            Предмет:
            <select
              className="it-demo__input"
              style={{marginLeft: '0.35rem'}}
              value={lootIdx}
              onChange={(e) => setLootIdx(Number(e.target.value))}
            >
              {LOOT_ITEMS.map((item, i) => (
                <option key={item.id} value={i}>
                  {item.name}
                </option>
              ))}
            </select>
          </label>
          <button type="button" className="it-demo__btn it-demo__btn--primary" onClick={runDistribute}>
            Раздать 1 предмет
          </button>
          <button type="button" className="it-demo__btn it-demo__btn--secondary" onClick={resetLoot}>
            Сброс лута
          </button>
        </div>

        <table className={styles.table}>
          <thead>
            <tr>
              <th>На рейде</th>
              <th>Имя</th>
              <th>Роль</th>
              <th>Лут</th>
            </tr>
          </thead>
          <tbody>
            {raiders.map((r) => {
              const meta = roleMeta(r.role);
              return (
                <tr key={r.id}>
                  <td>
                    <input
                      type="checkbox"
                      checked={r.present}
                      onChange={() => togglePresent(r.id)}
                      aria-label={`${r.name} на рейде`}
                    />
                  </td>
                  <td>{r.name}</td>
                  <td>
                    <select
                      value={r.role}
                      onChange={(e) => setRole(r.id, e.target.value)}
                      style={{fontSize: '0.8rem'}}
                    >
                      {ROLES.map((role) => (
                        <option key={role.id} value={role.id}>
                          {role.label}
                        </option>
                      ))}
                    </select>
                    <span
                      className={styles.roleBadge}
                      style={{background: meta.color, marginLeft: '0.35rem'}}
                    >
                      {meta.label}
                    </span>
                  </td>
                  <td>{r.loot}</td>
                </tr>
              );
            })}
          </tbody>
        </table>

        <div className={styles.log}>{log}</div>
        <p className={styles.hint}>
          Отсутствующие не получают дроп. Вес роли влияет на шанс (танк/хил чуть выше) — как простой
          аналог DKP.
        </p>
      </DemoCard>
    </DemoShell>
  );
}

export default function RaidManagerPlay(props) {
  return (
    <BrowserOnly fallback={demoLoadingFallback('Загрузка менеджера рейда…')}>
      {() => <RaidManagerPlayInner {...props} />}
    </BrowserOnly>
  );
}
