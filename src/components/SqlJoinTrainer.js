import React, { useState } from 'react';
import BrowserOnly from './BrowserOnly';

const usersData = [
  { id: 1, name: 'Иван', age: 25, city_id: 1, salary: 50000 },
  { id: 2, name: 'Мария', age: 30, city_id: 2, salary: 65000 },
  { id: 3, name: 'Алексей', age: 22, city_id: 1, salary: 45000 },
  { id: 4, name: 'Елена', age: 28, city_id: 3, salary: 55000 },
  { id: 5, name: 'Дмитрий', age: 35, city_id: 2, salary: 70000 },
  { id: 6, name: 'Ольга', age: 27, city_id: null, salary: 48000 },
  { id: 7, name: 'Павел', age: 29, city_id: 4, salary: 52000 },
];

const citiesData = [
  { id: 1, name: 'Москва', population: 12500000, region: 'Центральный' },
  { id: 2, name: 'Санкт-Петербург', population: 5400000, region: 'Северо-Западный' },
  { id: 3, name: 'Екатеринбург', population: 1500000, region: 'Уральский' },
  { id: 4, name: 'Новосибирск', population: 1600000, region: 'Сибирский' },
  { id: 5, name: 'Казань', population: 1250000, region: 'Приволжский' },
];

const ordersData = [
  { id: 1, user_id: 1, product: 'Ноутбук', amount: 50000, date: '2024-01-15' },
  { id: 2, user_id: 1, product: 'Мышь', amount: 1500, date: '2024-01-20' },
  { id: 3, user_id: 2, product: 'Телефон', amount: 30000, date: '2024-02-10' },
  { id: 4, user_id: 3, product: 'Клавиатура', amount: 3000, date: '2024-02-15' },
  { id: 5, user_id: 5, product: 'Монитор', amount: 20000, date: '2024-03-01' },
  { id: 6, user_id: 6, product: 'Наушники', amount: 5000, date: '2024-03-05' },
  { id: 7, user_id: 7, product: 'Планшет', amount: 25000, date: '2024-03-10' },
];

const SqlJoinTrainer = () => {
  const [query, setQuery] = useState("SELECT u.name, c.name as city FROM users u INNER JOIN cities c ON u.city_id = c.id");
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const [executedQuery, setExecutedQuery] = useState(null);
  const [activeTab, setActiveTab] = useState('result');
  const [isMobile, setIsMobile] = useState(false);

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const executeQuery = () => {
    setError(null);
    setResult(null);
    setExecutedQuery(null);

    let sql = query.trim();
    
    if (!sql.toUpperCase().startsWith('SELECT')) {
      setError('Запрос должен начинаться с команды SELECT.');
      return;
    }

    try {
      const joinTypes = ['INNER JOIN', 'LEFT JOIN', 'RIGHT JOIN', 'FULL OUTER JOIN', 'CROSS JOIN'];
      let joinType = null;
      
      for (const type of joinTypes) {
        if (sql.toUpperCase().includes(type)) {
          joinType = type;
          break;
        }
      }
      
      if (!joinType) {
        setError('Поддерживаются только JOIN запросы: INNER JOIN, LEFT JOIN, RIGHT JOIN, FULL OUTER JOIN, CROSS JOIN');
        return;
      }

      const fromMatch = sql.match(/FROM\s+(\w+)\s+(\w+)/i);
      if (!fromMatch) {
        throw new Error('Не удалось разобрать FROM часть. Используйте формат: FROM table alias');
      }
      
      const mainTable = fromMatch[1].toLowerCase();
      const mainAlias = fromMatch[2];
      
      let joinTable = null;
      let joinAlias = null;
      let joinCondition = null;
      
      if (joinType === 'CROSS JOIN') {
        const crossMatch = sql.match(/CROSS\s+JOIN\s+(\w+)\s+(\w+)/i);
        if (crossMatch) {
          joinTable = crossMatch[1].toLowerCase();
          joinAlias = crossMatch[2];
        }
      } else {
        const joinRegex = new RegExp(`${joinType}\\s+(\\w+)\\s+(\\w+)\\s+ON\\s+(.+)`, 'i');
        const joinMatch = sql.match(joinRegex);
        if (joinMatch) {
          joinTable = joinMatch[1].toLowerCase();
          joinAlias = joinMatch[2];
          joinCondition = joinMatch[3];
        }
      }
      
      if (!joinTable) {
        throw new Error('Не удалось разобрать JOIN часть запроса');
      }
      
      let mainData = [];
      let joinData = [];
      
      const getData = (table) => {
        if (table === 'users') return JSON.parse(JSON.stringify(usersData));
        if (table === 'cities') return JSON.parse(JSON.stringify(citiesData));
        if (table === 'orders') return JSON.parse(JSON.stringify(ordersData));
        return null;
      };
      
      mainData = getData(mainTable);
      joinData = getData(joinTable);
      
      if (!mainData || !joinData) {
        throw new Error(`Таблица не существует. Доступны: users, cities, orders`);
      }
      
      let joinedData = [];
      
      if (joinType === 'CROSS JOIN') {
        for (const mainRow of mainData) {
          for (const joinRow of joinData) {
            const newRow = {
              [mainAlias]: { ...mainRow },
              [joinAlias]: { ...joinRow }
            };
            joinedData.push(newRow);
          }
        }
      } else {
        const conditionMatch = joinCondition.match(/(\w+)\.(\w+)\s*=\s*(\w+)\.(\w+)/);
        if (!conditionMatch) {
          throw new Error('Не удалось разобрать условие JOIN. Используйте формат: alias.column = alias.column');
        }
        
        const leftAlias = conditionMatch[1];
        const leftColumn = conditionMatch[2];
        const rightAlias = conditionMatch[3];
        const rightColumn = conditionMatch[4];
        
        const isMainLeft = leftAlias === mainAlias;
        const mainKey = isMainLeft ? leftColumn : rightColumn;
        const joinKey = isMainLeft ? rightColumn : leftColumn;
        
        if (joinType === 'INNER JOIN') {
          joinedData = mainData
            .filter(mainRow => joinData.some(joinRow => mainRow[mainKey] === joinRow[joinKey]))
            .map(mainRow => {
              const matchedJoin = joinData.find(joinRow => mainRow[mainKey] === joinRow[joinKey]);
              return {
                [mainAlias]: { ...mainRow },
                [joinAlias]: { ...matchedJoin }
              };
            });
        } 
        else if (joinType === 'LEFT JOIN') {
          joinedData = mainData.map(mainRow => {
            const matchedJoin = joinData.find(joinRow => mainRow[mainKey] === joinRow[joinKey]);
            return {
              [mainAlias]: { ...mainRow },
              [joinAlias]: matchedJoin ? { ...matchedJoin } : null
            };
          });
        }
        else if (joinType === 'RIGHT JOIN') {
          joinedData = joinData.map(joinRow => {
            const matchedMain = mainData.find(mainRow => mainRow[mainKey] === joinRow[joinKey]);
            return {
              [mainAlias]: matchedMain ? { ...matchedMain } : null,
              [joinAlias]: { ...joinRow }
            };
          });
        }
        else if (joinType === 'FULL OUTER JOIN') {
          const leftJoin = mainData.map(mainRow => {
            const matchedJoin = joinData.find(joinRow => mainRow[mainKey] === joinRow[joinKey]);
            return {
              [mainAlias]: { ...mainRow },
              [joinAlias]: matchedJoin ? { ...matchedJoin } : null
            };
          });
          
          const rightJoin = joinData
            .filter(joinRow => !mainData.some(mainRow => mainRow[mainKey] === joinRow[joinKey]))
            .map(joinRow => ({
              [mainAlias]: null,
              [joinAlias]: { ...joinRow }
            }));
          
          joinedData = [...leftJoin, ...rightJoin];
        }
      }
      
      const selectMatch = sql.match(/SELECT\s+(.+?)\s+FROM/i);
      if (!selectMatch) {
        throw new Error('Не удалось разобрать SELECT часть');
      }
      
      const selectRaw = selectMatch[1];
      const selectItems = [];
      
      let current = '';
      let parenCount = 0;
      for (let i = 0; i < selectRaw.length; i++) {
        const char = selectRaw[i];
        if (char === '(') parenCount++;
        if (char === ')') parenCount--;
        if (char === ',' && parenCount === 0) {
          selectItems.push(current.trim());
          current = '';
        } else {
          current += char;
        }
      }
      if (current) selectItems.push(current.trim());
      
      const finalResult = joinedData.map(row => {
        const newRow = {};
        for (const item of selectItems) {
          if (item === '*') {
            for (const alias in row) {
              if (row[alias]) {
                for (const [col, val] of Object.entries(row[alias])) {
                  newRow[`${alias}.${col}`] = val;
                }
              }
            }
          } else {
            let expression = item;
            let alias = null;
            
            const asMatch = item.match(/(.+)\s+AS\s+(\w+)$/i);
            if (asMatch) {
              expression = asMatch[1].trim();
              alias = asMatch[2];
            }
            
            let value = null;
            if (expression.includes('.')) {
              const [tableAlias, column] = expression.split('.');
              if (row[tableAlias]) {
                value = row[tableAlias][column];
              }
            } else {
              for (const tableAlias in row) {
                if (row[tableAlias] && expression in row[tableAlias]) {
                  value = row[tableAlias][expression];
                  break;
                }
              }
            }
            
            newRow[alias || expression] = value !== undefined ? value : null;
          }
        }
        return newRow;
      });
      
      setResult({ 
        columns: finalResult.length > 0 ? Object.keys(finalResult[0]) : [],
        rows: finalResult,
        rowCount: finalResult.length 
      });
      setExecutedQuery({ type: joinType, mainTable, joinTable, mainAlias, joinAlias });
      setActiveTab('result');
      
    } catch (e) {
      console.error(e);
      setError(`Ошибка выполнения запроса: ${e.message}`);
    }
  };

  const loadExample = (example) => {
    setQuery(example);
    setError(null);
    setResult(null);
  };

  const renderTable = (data, title, columns, note = null) => {
    if (isMobile && data.length > 0) {
      return (
        <div style={styles.tableWrapper}>
          <h3 style={styles.tableTitle}>{title}</h3>
          {note && <p style={{ fontSize: '13px', color: '#6b7280', marginBottom: '10px' }}>{note}</p>}
          <div style={styles.cardGrid}>
            {data.map((row, idx) => (
              <div key={idx} style={styles.card}>
                {columns.map((col) => (
                  <div key={col} style={styles.cardRow}>
                    <span style={styles.cardLabel}>{col}:</span>
                    <span style={styles.cardValue}>
                      {row[col] !== null && row[col] !== undefined ? (
                        String(row[col])
                      ) : (
                        <span style={styles.nullValue}>NULL</span>
                      )}
                    </span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      );
    }

    return (
      <div style={styles.tableWrapper}>
        <h3 style={styles.tableTitle}>{title}</h3>
        {note && <p style={{ fontSize: '13px', color: '#6b7280', marginBottom: '10px' }}>{note}</p>}
        <div style={styles.tableScrollWrapper}>
          <table style={styles.table}>
            <thead>
              <tr>
                {columns.map((col, idx) => (
                  <th key={idx} style={styles.th}>{col}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.map((row, idx) => (
                <tr key={idx} style={row.city_id === null ? { backgroundColor: '#fffbeb' } : {}}>
                  {columns.map((col, colIdx) => (
                    <td key={colIdx} style={styles.td}>
                      {row[col] !== null && row[col] !== undefined ? (
                        String(row[col])
                      ) : (
                        <span style={styles.nullValue}>NULL</span>
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  };

  const styles = {
    container: {
      fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif',
      padding: '16px',
      backgroundColor: '#f9fafb',
      borderRadius: '8px',
      border: '1px solid #e5e7eb',
      maxWidth: '100%',
      margin: '0 auto',
    },
    header: {
      fontSize: '20px',
      fontWeight: 'bold',
      marginBottom: '16px',
      color: '#111827',
      borderBottom: '2px solid #8b5cf6',
      paddingBottom: '10px',
    },
    tabs: {
      display: 'flex',
      gap: '8px',
      marginBottom: '16px',
      borderBottom: '1px solid #e5e7eb',
      paddingBottom: '10px',
      flexWrap: 'wrap',
    },
    tab: {
      padding: '6px 12px',
      fontSize: '13px',
      fontWeight: '500',
      cursor: 'pointer',
      borderRadius: '6px',
      transition: 'all 0.2s',
      border: 'none',
    },
    activeTab: {
      backgroundColor: '#8b5cf6',
      color: '#ffffff',
    },
    inactiveTab: {
      backgroundColor: '#e5e7eb',
      color: '#374151',
    },
    inputGroup: {
      display: 'flex',
      flexDirection: 'column',
      gap: '10px',
      marginBottom: '20px',
    },
    input: {
      flex: '1',
      width: '100%',
      padding: '10px',
      fontSize: '14px',
      fontFamily: '"Courier New", Courier, monospace',
      border: '1px solid #d1d5db',
      borderRadius: '6px',
      outline: 'none',
    },
    button: {
      width: '100%',
      padding: '10px 20px',
      fontSize: '14px',
      fontWeight: '600',
      color: '#ffffff',
      backgroundColor: '#8b5cf6',
      border: 'none',
      borderRadius: '6px',
      cursor: 'pointer',
      transition: 'background-color 0.2s',
    },
    errorBox: {
      padding: '12px',
      backgroundColor: '#fef2f2',
      color: '#b91c1c',
      borderRadius: '6px',
      border: '1px solid #fecaca',
      marginBottom: '16px',
      fontFamily: 'monospace',
      fontSize: '13px',
    },
    infoBox: {
      padding: '12px',
      backgroundColor: '#f3e8ff',
      color: '#6b21a5',
      borderRadius: '6px',
      border: '1px solid #d8b4fe',
      marginBottom: '16px',
      fontSize: '13px',
    },
    tableContainer: {
      overflowX: 'auto',
      marginTop: '16px',
    },
    tableWrapper: {
      marginBottom: '20px',
    },
    tableTitle: {
      fontSize: '16px',
      fontWeight: '600',
      color: '#374151',
      marginBottom: '10px',
      paddingLeft: '10px',
      borderLeft: '4px solid #8b5cf6',
    },
    tableScrollWrapper: {
      overflowX: 'auto',
      WebkitOverflowScrolling: 'touch',
    },
    table: {
      width: '100%',
      minWidth: '500px',
      borderCollapse: 'collapse',
      backgroundColor: '#ffffff',
      boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
      marginBottom: '20px',
    },
    th: {
      textAlign: 'left',
      padding: '10px 12px',
      backgroundColor: '#f3f4f6',
      borderBottom: '2px solid #e5e7eb',
      fontWeight: '600',
      color: '#374151',
      fontSize: '13px',
    },
    td: {
      padding: '10px 12px',
      borderBottom: '1px solid #e5e7eb',
      color: '#4b5563',
      fontSize: '13px',
    },
    nullValue: {
      color: '#f59e0b',
      fontStyle: 'italic',
      fontWeight: '500',
    },
    statsBar: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'stretch',
      marginBottom: '16px',
      padding: '10px',
      backgroundColor: '#e5e7eb',
      borderRadius: '6px',
      gap: '10px',
    },
    statsText: {
      fontSize: '13px',
      color: '#374151',
      fontWeight: '500',
      textAlign: 'center',
    },
    examples: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '8px',
      marginTop: '10px',
    },
    exampleButton: {
      flex: '1 1 auto',
      minWidth: '100px',
      padding: '8px 12px',
      fontSize: '12px',
      backgroundColor: '#e5e7eb',
      color: '#374151',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
      transition: 'background-color 0.2s',
    },
    schema: {
      backgroundColor: '#f3f4f6',
      padding: '12px',
      borderRadius: '6px',
      marginTop: '16px',
      fontSize: '12px',
      fontFamily: 'monospace',
      overflowX: 'auto',
    },
    cardGrid: {
      display: 'grid',
      gridTemplateColumns: '1fr',
      gap: '12px',
    },
    card: {
      backgroundColor: '#ffffff',
      border: '1px solid #e5e7eb',
      borderRadius: '8px',
      padding: '12px',
      boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
    },
    cardRow: {
      display: 'flex',
      justifyContent: 'space-between',
      padding: '8px 0',
      borderBottom: '1px solid #f3f4f6',
    },
    cardLabel: {
      fontWeight: '600',
      color: '#6b7280',
      fontSize: '13px',
    },
    cardValue: {
      color: '#374151',
      fontSize: '13px',
      wordBreak: 'break-word',
      textAlign: 'right',
    },
  };

  return (
    <BrowserOnly>
      {() => (
        <div style={styles.container}>
          <div style={styles.header}>Тренажёр SQL: JOIN (Объединение таблиц)</div>
          
          <div style={styles.statsBar}>
            <span style={styles.statsText}>
              Таблицы: users (7 записей), cities (5 записей), orders (7 записей)
            </span>
            {result && (
              <span style={styles.statsText}>
                Результат: {result.rowCount} записей
              </span>
            )}
          </div>
          
          <p style={{ marginBottom: '15px', lineHeight: '1.6', fontSize: isMobile ? '13px' : '16px' }}>
            Тренажёр поддерживает различные типы JOIN: INNER, LEFT, RIGHT, FULL OUTER и CROSS JOIN.
          </p>

          <div style={styles.tabs}>
            <button 
              onClick={() => setActiveTab('result')}
              style={{ ...styles.tab, ...(activeTab === 'result' ? styles.activeTab : styles.inactiveTab) }}
            >
              Результат
            </button>
            <button 
              onClick={() => setActiveTab('users')}
              style={{ ...styles.tab, ...(activeTab === 'users' ? styles.activeTab : styles.inactiveTab) }}
            >
              users
            </button>
            <button 
              onClick={() => setActiveTab('cities')}
              style={{ ...styles.tab, ...(activeTab === 'cities' ? styles.activeTab : styles.inactiveTab) }}
            >
              cities
            </button>
            <button 
              onClick={() => setActiveTab('orders')}
              style={{ ...styles.tab, ...(activeTab === 'orders' ? styles.activeTab : styles.inactiveTab) }}
            >
              orders
            </button>
          </div>

          {activeTab === 'result' && (
            <>
              <div style={styles.inputGroup}>
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  style={styles.input}
                  placeholder="SELECT u.name, c.name as city FROM users u INNER JOIN cities c ON u.city_id = c.id"
                />
                <button onClick={executeQuery} style={styles.button}>
                  Выполнить JOIN
                </button>
              </div>

              {executedQuery && (
                <div style={styles.infoBox}>
                  <strong>Выполнен {executedQuery.type}</strong><br />
                  Таблицы: {executedQuery.mainTable} ({executedQuery.mainAlias}) ⟷ {executedQuery.joinTable} ({executedQuery.joinAlias})
                </div>
              )}

              {error && (
                <div style={styles.errorBox}>
                  <strong>❌ Ошибка:</strong> {error}
                </div>
              )}

              <div style={styles.tableContainer}>
                <h3 style={{ marginBottom: '10px', fontSize: isMobile ? '16px' : '18px', color: '#374151' }}>
                  Результат запроса:
                </h3>
                {result && result.rows.length > 0 ? (
                  isMobile ? (
                    <div style={styles.cardGrid}>
                      {result.rows.map((row, idx) => (
                        <div key={idx} style={styles.card}>
                          {result.columns.map((col) => (
                            <div key={col} style={styles.cardRow}>
                              <span style={styles.cardLabel}>{col}:</span>
                              <span style={styles.cardValue}>
                                {row[col] !== null && row[col] !== undefined ? (
                                  String(row[col])
                                ) : (
                                  <span style={styles.nullValue}>NULL</span>
                                )}
                              </span>
                            </div>
                          ))}
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div style={styles.tableScrollWrapper}>
                      <table style={styles.table}>
                        <thead>
                          <tr>
                            {result.columns.map((col, idx) => (
                              <th key={idx} style={styles.th}>{col}</th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {result.rows.map((row, idx) => (
                            <tr key={idx}>
                              {result.columns.map((col, colIdx) => (
                                <td key={colIdx} style={styles.td}>
                                  {row[col] !== null && row[col] !== undefined ? (
                                    String(row[col])
                                  ) : (
                                    <span style={styles.nullValue}>NULL</span>
                                  )}
                                </td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )
                ) : result && result.rows.length === 0 ? (
                  <div style={{ textAlign: 'center', padding: '40px', color: '#6b7280' }}>
                    Запрос не вернул ни одной записи.
                  </div>
                ) : (
                  <div style={{ textAlign: 'center', padding: '40px', color: '#6b7280' }}>
                    Введите запрос и нажмите "Выполнить JOIN"
                  </div>
                )}
              </div>
            </>
          )}

          {activeTab === 'users' && renderTable(
            usersData, 
            'Таблица users - информация о пользователях', 
            ['id', 'name', 'age', 'city_id', 'salary'],
            '💡 Обратите внимание: у Ольги (id=6) city_id = NULL (она не указала город)'
          )}

          {activeTab === 'cities' && renderTable(
            citiesData, 
            'Таблица cities - информация о городах', 
            ['id', 'name', 'population', 'region'],
            '💡 Обратите внимание: у Казани (id=5) нет пользователей'
          )}

          {activeTab === 'orders' && renderTable(
            ordersData, 
            'Таблица orders - заказы пользователей', 
            ['id', 'user_id', 'product', 'amount', 'date'],
            '💡 user_id ссылается на id в таблице users'
          )}

          <div style={{ marginTop: '20px' }}>
            <strong>Быстрые примеры:</strong>
            <div style={styles.examples}>
              <button 
                onClick={() => loadExample("SELECT u.name, c.name as city FROM users u INNER JOIN cities c ON u.city_id = c.id")}
                style={styles.exampleButton}
              >
                INNER
              </button>
              <button 
                onClick={() => loadExample("SELECT u.name, c.name as city FROM users u LEFT JOIN cities c ON u.city_id = c.id")}
                style={styles.exampleButton}
              >
                LEFT
              </button>
              <button 
                onClick={() => loadExample("SELECT u.name, c.name as city FROM users u RIGHT JOIN cities c ON u.city_id = c.id")}
                style={styles.exampleButton}
              >
                RIGHT
              </button>
              <button 
                onClick={() => loadExample("SELECT u.name, c.name as city FROM users u FULL OUTER JOIN cities c ON u.city_id = c.id")}
                style={styles.exampleButton}
              >
                FULL
              </button>
              <button 
                onClick={() => loadExample("SELECT u.name, c.name as city FROM users u CROSS JOIN cities c")}
                style={styles.exampleButton}
              >
                CROSS
              </button>
              <button 
                onClick={() => loadExample("SELECT u.name, o.product, o.amount FROM users u INNER JOIN orders o ON u.id = o.user_id")}
                style={styles.exampleButton}
              >
                +orders
              </button>
            </div>
          </div>

          <div style={styles.schema}>
            <strong>Что вернут разные JOIN (users + cities):</strong><br />
            <br />
            <strong>INNER JOIN</strong> → только пользователи с city_id (6 записей: все, кроме Ольги)<br />
            <strong>LEFT JOIN</strong> → все пользователи (7 записей: у Ольги city = NULL)<br />
            <strong>RIGHT JOIN</strong> → все города (5 записей: у Казани user = NULL)<br />
            <strong>FULL OUTER JOIN</strong> → 8 записей (7 users + 1 city без user - Казань)<br />
            <strong>CROSS JOIN</strong> → 7 × 5 = 35 записей (каждый пользователь с каждым городом)<br />
          </div>
        </div>
      )}
    </BrowserOnly>
  );
};

export default SqlJoinTrainer;