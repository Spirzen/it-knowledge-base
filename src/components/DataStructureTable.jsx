import React, {useState} from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';
import clsx from 'clsx';
import {demoLoadingFallback} from './shared/demoFallback';
import {
  DataStructureLayout,
  LangTabs,
  CodeBlock,
  VizSection,
  InfoNote,
  useIsMobile,
  useCopyToClipboard,
} from './shared/dataStructureDemo';
import styles from './shared/dataStructureDemo.module.css';

const CODE = {
  js: `const table = [
  ['ID', 'Имя', 'Роль'],
  [1, 'Алексей', 'Разработчик'],
  [2, 'Мария', 'Тестировщик'],
];
const role = table[1][2]; // [строка][столбец]
table.push([3, 'Дмитрий', 'Менеджер']);`,
  py: `table = [
    ['ID', 'Имя', 'Роль'],
    [1, 'Алексей', 'Разработчик'],
]
role = table[1][2]`,
  cs: `var table = new List<List<object>> {
    new() { "ID", "Имя", "Роль" },
    new() { 1, "Алексей", "Разработчик" },
};
var role = table[1][2].ToString();`,
};

const ROWS = [
  {id: 1, name: 'Алексей', role: 'Разработчик'},
  {id: 2, name: 'Мария', role: 'Тестировщик'},
  {id: 3, name: 'Дмитрий', role: 'Менеджер'},
];

const COLS = ['ID', 'Имя', 'Роль'];

function TableLogic() {
  const [activeTab, setActiveTab] = useState('js');
  const [selected, setSelected] = useState({row: 1, col: 2});
  const isMobile = useIsMobile();
  const {copied, copy} = useCopyToClipboard();

  const cellValue = selected.row === 0 ? COLS[selected.col] : Object.values(ROWS[selected.row - 1])[selected.col];

  return (
    <DataStructureLayout
      title="Таблица (2D массив)"
      subtitle="Данные организованы в строки и столбцы. Каждая ячейка доступна по паре индексов [строка][столбец] — как в электронной таблице или SQL-результате."
    >
      <LangTabs active={activeTab} onChange={setActiveTab} />
      <CodeBlock code={CODE[activeTab]} copied={copied} onCopy={copy} />

      <VizSection label="Кликните ячейку">
        {isMobile ? (
          <div style={{display: 'flex', flexDirection: 'column', gap: '0.75rem', width: '100%'}}>
            {ROWS.map((row, ri) => (
              <div
                key={row.id}
                className="it-demo__panel"
                style={{cursor: 'pointer'}}
                onClick={() => setSelected({row: ri + 1, col: 1})}
              >
                <div><strong>ID:</strong> {row.id}</div>
                <div><strong>Имя:</strong> {row.name}</div>
                <div><strong>Роль:</strong> {row.role}</div>
              </div>
            ))}
          </div>
        ) : (
          <div className="it-demo__table-wrap">
            <table className="it-demo__table">
              <thead>
                <tr>
                  {COLS.map((h, ci) => (
                    <th
                      key={h}
                      className={clsx(selected.row === 0 && selected.col === ci && styles.tableHighlight)}
                      onClick={() => setSelected({row: 0, col: ci})}
                      style={{cursor: 'pointer'}}
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {ROWS.map((row, ri) => (
                  <tr key={row.id}>
                    {[row.id, row.name, row.role].map((val, ci) => (
                      <td
                        key={ci}
                        className={clsx(
                          selected.row === ri + 1 && selected.col === ci && styles.tableHighlight,
                        )}
                        onClick={() => setSelected({row: ri + 1, col: ci})}
                        style={{cursor: 'pointer'}}
                      >
                        {val}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        <p className={styles.coordHint}>
          table[{selected.row}][{selected.col}] = <strong>{String(cellValue)}</strong>
        </p>
      </VizSection>

      <InfoNote>
        {isMobile
          ? 'На узком экране строки показаны карточками; на десктопе — классической таблицей с подсветкой ячеек.'
          : 'Подсветка показывает, как в коде обращаются к элементу по двум индексам.'}
      </InfoNote>
    </DataStructureLayout>
  );
}

export default function DataStructureTable() {
  return (
    <BrowserOnly fallback={demoLoadingFallback('Загрузка таблицы…')}>
      {() => <TableLogic />}
    </BrowserOnly>
  );
}
