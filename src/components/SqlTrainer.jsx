import React, {useCallback, useState} from 'react';
import {executeSelect} from './shared/sqlEngine';
import {
  SqlBrowserOnly,
  SqlExampleChips,
  SqlQueryEditor,
  SqlResultTable,
  SqlToolbar,
  SqlTrainerCard,
} from './shared/sqlTrainerDemo';

const EXAMPLES = [
  {id: 'all', label: 'Все', sql: 'SELECT * FROM users'},
  {id: 'moscow', label: 'Москва', sql: "SELECT name, city FROM users WHERE city = 'Москва'"},
  {
    id: 'salary',
    label: 'Зарплата',
    sql: 'SELECT id, salary FROM users WHERE salary > 50000 ORDER BY age ASC',
  },
];

function SqlTrainerInner() {
  const [query, setQuery] = useState(EXAMPLES[0].sql);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const [activeExample, setActiveExample] = useState('all');

  const runQuery = useCallback(
    (sql = query) => {
      setError(null);
      setResult(null);
      try {
        setResult(executeSelect(sql));
      } catch (err) {
        setError(err.message);
      }
    },
    [query],
  );

  const loadExample = (ex) => {
    setActiveExample(ex.id);
    setQuery(ex.sql);
    runQuery(ex.sql);
  };

  return (
    <SqlTrainerCard
      accent="select"
      command="SELECT"
      title="Выборка данных"
      subtitle="Пишите SELECT с WHERE и ORDER BY — результат из учебной таблицы users."
      footer={
        <>
          Поддерживаются: <code>SELECT</code>, <code>WHERE</code> (AND, =, &gt;, &lt;, LIKE),{' '}
          <code>ORDER BY</code> ASC/DESC.
        </>
      }
    >
      <SqlExampleChips examples={EXAMPLES} activeId={activeExample} onSelect={loadExample} />

      <SqlQueryEditor
        id="sql-select-query"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
          setActiveExample(null);
        }}
        onExecute={runQuery}
        placeholder="SELECT name, age FROM users WHERE age > 25 ORDER BY salary DESC"
      />

      <SqlToolbar onExecute={runQuery} executeLabel="Выполнить SELECT" />

      {error && <div className="it-demo__alert it-demo__alert--error">{error}</div>}

      {result ? (
        <SqlResultTable columns={result.columns} rows={result.rows} />
      ) : (
        !error && (
          <p className="it-demo__alert it-demo__alert--info">
            Выберите пример или введите запрос — результат появится в таблице ниже.
          </p>
        )
      )}
    </SqlTrainerCard>
  );
}

export default function SqlTrainer() {
  return (
    <SqlBrowserOnly>
      <SqlTrainerInner />
    </SqlBrowserOnly>
  );
}
