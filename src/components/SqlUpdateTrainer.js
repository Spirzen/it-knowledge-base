import React, { useState, useEffect } from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';

const initialData = [
  { id: 1, name: 'Иван', age: 25, city: 'Москва', salary: 50000 },
  { id: 2, name: 'Мария', age: 30, city: 'Санкт-Петербург', salary: 65000 },
  { id: 3, name: 'Алексей', age: 22, city: 'Екатеринбург', salary: 45000 },
  { id: 4, name: 'Елена', age: 28, city: 'Москва', salary: 55000 },
  { id: 5, name: 'Дмитрий', age: 35, city: 'Новосибирск', salary: 70000 },
];

const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => setMatches(media.matches);
    window.addEventListener('resize', listener);
    return () => window.removeEventListener('resize', listener);
  }, [matches, query]);

  return matches;
};

const SqlUpdateTrainer = () => {
  const [data, setData] = useState(initialData);
  const [query, setQuery] = useState("UPDATE users SET salary = 75000 WHERE name = 'Дмитрий'");
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const [lastUpdateInfo, setLastUpdateInfo] = useState(null);

  const isMobile = useMediaQuery('(max-width: 640px)');
  const isTablet = useMediaQuery('(max-width: 768px)');
  const isSmallMobile = useMediaQuery('(max-width: 480px)');

  const parseWhereClause = (whereClause) => {
    const conditions = [];
    if (!whereClause || whereClause.trim() === '') return conditions;

    const parts = whereClause.split(/\s+AND\s+/i);
    
    for (const part of parts) {
      const trimmedPart = part.trim();
      if (!trimmedPart) continue;

      const match = trimmedPart.match(/^(\w+)\s*(>=|<=|=|>|<|LIKE)\s*(.+)$/i);
      
      if (match) {
        const [, column, operator, valueRaw] = match;
        let parsedValue = valueRaw.trim();
        
        if ((parsedValue.startsWith("'") && parsedValue.endsWith("'")) || 
            (parsedValue.startsWith('"') && parsedValue.endsWith('"'))) {
          parsedValue = parsedValue.slice(1, -1);
        }
        
        if (!isNaN(parsedValue) && parsedValue.trim() !== '') {
          const num = Number(parsedValue);
          if (!isNaN(num)) {
            parsedValue = num;
          }
        }
        
        conditions.push({
          column: column.toLowerCase(),
          operator: operator.toUpperCase(),
          value: parsedValue
        });
      }
    }
    
    return conditions;
  };

  const matchesConditions = (row, conditions) => {
    if (conditions.length === 0) return true;
    
    for (const cond of conditions) {
      const rowValue = row[cond.column];
      const targetValue = cond.value;
      
      if (cond.operator === '=') {
        if (typeof rowValue === 'string' && typeof targetValue === 'string') {
          if (rowValue !== targetValue) return false;
        } else if (rowValue !== targetValue) return false;
      } else if (cond.operator === '>') {
        if (!(rowValue > targetValue)) return false;
      } else if (cond.operator === '<') {
        if (!(rowValue < targetValue)) return false;
      } else if (cond.operator === '>=') {
        if (!(rowValue >= targetValue)) return false;
      } else if (cond.operator === '<=') {
        if (!(rowValue <= targetValue)) return false;
      } else if (cond.operator === 'LIKE') {
        const pattern = String(targetValue).replace(/\*/g, '.*').replace(/%/g, '.*');
        if (!new RegExp(pattern, 'i').test(String(rowValue))) return false;
      }
    }
    return true;
  };

  const parseSetClause = (setClause) => {
    const updates = {};
    const parts = setClause.split(/\s*,\s*/);
    
    for (const part of parts) {
      const match = part.match(/^(\w+)\s*=\s*(.+)$/i);
      if (!match) {
        throw new Error(`Неверный синтаксис в SET: ${part}`);
      }
      
      const [, column, valueRaw] = match;
      let value = valueRaw.trim();
      
      if ((value.startsWith("'") && value.endsWith("'")) || 
          (value.startsWith('"') && value.endsWith('"'))) {
        value = value.slice(1, -1);
      }
      
      if (!isNaN(value) && value.trim() !== '') {
        const num = Number(value);
        if (!isNaN(num)) {
          value = num;
        }
      }
      
      updates[column.toLowerCase()] = value;
    }
    
    return updates;
  };

  const executeUpdate = () => {
    setError(null);
    setResult(null);
    setLastUpdateInfo(null);

    const sql = query.trim();
    const sqlUpper = sql.toUpperCase();

    try {
      if (!sqlUpper.startsWith('UPDATE')) {
        setError('Это тренажёр для команды UPDATE. Пожалуйста, введите UPDATE запрос.');
        return;
      }

      const tableMatch = sql.match(/UPDATE\s+(\w+)/i);
      if (!tableMatch) {
        throw new Error('Не указано имя таблицы');
      }
      
      const tableName = tableMatch[1];
      if (tableName.toLowerCase() !== 'users') {
        throw new Error('В текущей версии доступна только таблица "users"');
      }

      const setMatch = sql.match(/SET\s+(.+?)(?:\s+WHERE|$)/i);
      if (!setMatch) {
        throw new Error('Не указана секция SET');
      }
      
      const setClause = setMatch[1];
      const updates = parseSetClause(setClause);
      
      const validColumns = ['name', 'age', 'city', 'salary'];
      for (const col of Object.keys(updates)) {
        if (!validColumns.includes(col) && col !== 'id') {
          throw new Error(`Колонка "${col}" не существует. Доступные колонки: ${validColumns.join(', ')}`);
        }
        if (col === 'id') {
          throw new Error('Нельзя изменять поле id');
        }
      }

      for (const [col, value] of Object.entries(updates)) {
        if (col === 'name' && typeof value === 'string' && value.length < 2) {
          throw new Error('Имя должно содержать минимум 2 символа');
        }
        if (col === 'age' && (typeof value !== 'number' || value < 0 || value > 150)) {
          throw new Error('Возраст должен быть числом от 0 до 150');
        }
        if (col === 'salary' && (typeof value !== 'number' || value < 0)) {
          throw new Error('Зарплата должна быть положительным числом');
        }
      }

      let conditions = [];
      const whereMatch = sql.match(/WHERE\s+(.+)$/i);
      if (whereMatch) {
        const whereClause = whereMatch[1];
        conditions = parseWhereClause(whereClause);
      }

      let updatedCount = 0;
      const updatedRows = [];
      
      const newData = data.map(row => {
        if (matchesConditions(row, conditions)) {
          updatedCount++;
          const updatedRow = { ...row };
          for (const [col, value] of Object.entries(updates)) {
            updatedRow[col] = value;
          }
          updatedRows.push({ old: row, new: updatedRow });
          return updatedRow;
        }
        return row;
      });

      if (updatedCount === 0) {
        setResult({
          success: false,
          message: 'UPDATE не затронул ни одной записи. Проверьте условие WHERE.',
        });
      } else {
        setData(newData);
        setLastUpdateInfo({
          count: updatedCount,
          updates: updates,
          condition: conditions.length > 0 ? conditions : 'без условий (все записи)'
        });
        
        setResult({
          success: true,
          message: `✅ Обновлено записей: ${updatedCount}`,
          updatedRows: updatedRows
        });
      }

    } catch (e) {
      setError(e.message);
      console.error(e);
    }
  };

  const resetData = () => {
    setData(initialData);
    setResult(null);
    setError(null);
    setLastUpdateInfo(null);
    setQuery("UPDATE users SET salary = 75000 WHERE name = 'Дмитрий'");
  };

  const styles = {
    container: {
      fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif',
      padding: isMobile ? '12px' : '20px',
      backgroundColor: '#f9fafb',
      borderRadius: '8px',
      border: '1px solid #e5e7eb',
      maxWidth: '100%',
      margin: '0 auto',
    },
    header: {
      fontSize: isMobile ? '20px' : '24px',
      fontWeight: 'bold',
      marginBottom: '16px',
      color: '#111827',
      borderBottom: '2px solid #f59e0b',
      paddingBottom: '8px',
    },
    inputGroup: {
      display: 'flex',
      gap: isMobile ? '8px' : '10px',
      marginBottom: '16px',
      flexWrap: 'wrap',
      flexDirection: isMobile ? 'column' : 'row',
    },
    input: {
      flex: '1',
      minWidth: isMobile ? 'auto' : '300px',
      padding: isMobile ? '10px' : '12px',
      fontSize: isMobile ? '14px' : '16px',
      fontFamily: '"Courier New", Courier, monospace',
      border: '1px solid #d1d5db',
      borderRadius: '6px',
      outline: 'none',
      WebkitAppearance: 'none',
    },
    button: {
      padding: isMobile ? '10px 16px' : '12px 24px',
      fontSize: isMobile ? '14px' : '16px',
      fontWeight: '600',
      color: '#ffffff',
      backgroundColor: '#f59e0b',
      border: 'none',
      borderRadius: '6px',
      cursor: 'pointer',
      transition: 'background-color 0.2s',
      width: isMobile ? '100%' : 'auto',
      WebkitTapHighlightColor: 'transparent',
    },
    resetButton: {
      backgroundColor: '#6b7280',
      marginLeft: isMobile ? '0' : '10px',
      marginTop: isMobile ? '8px' : '0',
    },
    errorBox: {
      padding: isMobile ? '12px' : '15px',
      backgroundColor: '#fef2f2',
      color: '#b91c1c',
      borderRadius: '6px',
      border: '1px solid #fecaca',
      marginBottom: '16px',
      fontFamily: isMobile ? 'monospace' : 'monospace',
      fontSize: isMobile ? '13px' : '14px',
      wordBreak: 'break-word',
    },
    successBox: {
      padding: isMobile ? '12px' : '15px',
      backgroundColor: '#fffbeb',
      color: '#92400e',
      borderRadius: '6px',
      border: '1px solid #fde68a',
      marginBottom: '16px',
      fontSize: isMobile ? '13px' : '14px',
      wordBreak: 'break-word',
    },
    infoBox: {
      padding: isMobile ? '12px' : '15px',
      backgroundColor: '#eff6ff',
      color: '#1e40af',
      borderRadius: '6px',
      border: '1px solid #bfdbfe',
      marginBottom: '16px',
      fontSize: isMobile ? '13px' : '14px',
      wordBreak: 'break-word',
    },
    tableContainer: {
      overflowX: 'auto',
      marginTop: '20px',
      WebkitOverflowScrolling: 'touch',
    },
    table: {
      width: '100%',
      borderCollapse: 'collapse',
      backgroundColor: '#ffffff',
      boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
      minWidth: isSmallMobile ? '500px' : 'auto',
    },
    th: {
      textAlign: 'left',
      padding: isMobile ? '8px 10px' : '12px 15px',
      backgroundColor: '#f3f4f6',
      borderBottom: '2px solid #e5e7eb',
      fontWeight: '600',
      color: '#374151',
      fontSize: isMobile ? '13px' : '14px',
      whiteSpace: 'nowrap',
    },
    td: {
      padding: isMobile ? '8px 10px' : '12px 15px',
      borderBottom: '1px solid #e5e7eb',
      color: '#4b5563',
      fontSize: isMobile ? '13px' : '14px',
    },
    updatedRow: {
      backgroundColor: '#fffbeb',
    },
    statsBar: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '16px',
      padding: isMobile ? '8px 12px' : '10px',
      backgroundColor: '#e5e7eb',
      borderRadius: '6px',
      flexWrap: 'wrap',
      gap: isMobile ? '8px' : '0',
    },
    statsText: {
      fontSize: isMobile ? '12px' : '14px',
      color: '#374151',
      fontWeight: '500',
    },
    emptyState: {
      textAlign: 'center',
      padding: isMobile ? '30px' : '40px',
      color: '#6b7280',
      fontStyle: 'italic',
      fontSize: isMobile ? '14px' : '16px',
    },
    description: {
      marginBottom: '12px',
      lineHeight: '1.6',
      fontSize: isMobile ? '13px' : '14px',
    },
    examples: {
      marginTop: '16px',
      fontSize: isMobile ? '12px' : '14px',
      color: '#6b7280',
      wordBreak: 'break-word',
    },
    sectionTitle: {
      marginBottom: '8px',
      fontSize: isMobile ? '16px' : '18px',
      color: '#374151',
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>Тренажёр SQL: Команда UPDATE</div>
      
      <div style={styles.statsBar}>
        <span style={styles.statsText}>
          Всего записей: {data.length}
        </span>
        {lastUpdateInfo && (
          <span style={{ ...styles.statsText, color: '#f59e0b' }}>
            Обновлено: {lastUpdateInfo.count}
          </span>
        )}
        <button 
          onClick={resetData}
          style={{ ...styles.button, ...styles.resetButton, padding: isMobile ? '6px 12px' : '6px 12px', fontSize: isMobile ? '12px' : '14px', width: 'auto' }}
        >
          🔄 Сбросить
        </button>
      </div>
      
      <p style={styles.description}>
        Введите SQL-запрос UPDATE для изменения данных в таблице users.
        {!isMobile && " Не забывайте использовать условие WHERE, чтобы не обновить все записи!"}
      </p>

      <div style={styles.inputGroup}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          style={styles.input}
          placeholder="UPDATE users SET salary = 75000 WHERE name = 'Дмитрий'"
          onKeyPress={(e) => e.key === 'Enter' && executeUpdate()}
        />
        <button onClick={executeUpdate} style={styles.button}>
          ▶ Выполнить UPDATE
        </button>
      </div>

      {error && (
        <div style={styles.errorBox}>
          <strong>❌ Ошибка:</strong> {error}
        </div>
      )}

      {result && result.success === false && (
        <div style={styles.errorBox}>
          <strong>⚠️ Внимание:</strong> {result.message}
        </div>
      )}

      {result && result.success === true && (
        <div style={styles.successBox}>
          <strong>✅ {result.message}</strong>
          {result.updatedRows && result.updatedRows.length <= 3 && !isMobile && (
            <div style={{ marginTop: '8px', fontSize: '13px' }}>
              {result.updatedRows.map((row, idx) => (
                <div key={idx} style={{ marginTop: '4px', wordBreak: 'break-all' }}>
                  ID {row.old.id}: {JSON.stringify(row.old)} → {JSON.stringify(row.new)}
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {lastUpdateInfo && (
        <div style={styles.infoBox}>
          <strong>ℹ️ Информация о последнем UPDATE:</strong><br/>
          • Затронуто записей: {lastUpdateInfo.count}<br/>
          • Обновляемые поля: {Object.keys(lastUpdateInfo.updates).join(', ')}<br/>
          • Условие: {typeof lastUpdateInfo.condition === 'string' 
              ? lastUpdateInfo.condition 
              : JSON.stringify(lastUpdateInfo.condition)}<br/>
        </div>
      )}

      <div style={styles.tableContainer}>
        <h3 style={styles.sectionTitle}>
          📋 Текущие данные таблицы users:
        </h3>
        {data.length > 0 ? (
          <table style={styles.table}>
            <thead>
              <tr>
                <th style={styles.th}>id</th>
                <th style={styles.th}>name</th>
                <th style={styles.th}>age</th>
                <th style={styles.th}>city</th>
                <th style={styles.th}>salary</th>
              </tr>
            </thead>
            <tbody>
              {data.map((row) => {
                const wasUpdated = lastUpdateInfo && result?.updatedRows?.some(
                  updated => updated.new.id === row.id
                );
                
                return (
                  <tr key={row.id} style={wasUpdated ? styles.updatedRow : {}}>
                    <td style={styles.td}>{row.id}</td>
                    <td style={styles.td}>{row.name}</td>
                    <td style={styles.td}>{row.age}</td>
                    <td style={styles.td}>{row.city}</td>
                    <td style={styles.td}>{row.salary.toLocaleString()}₽</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        ) : (
          <div style={styles.emptyState}>
            Таблица пуста. Сначала добавьте записи с помощью INSERT!
          </div>
        )}
      </div>
      
            <div style={styles.examples}>
        <strong>Примеры UPDATE запросов:</strong><br/>
        <code>UPDATE users SET salary = 75000 WHERE name = 'Дмитрий'</code><br/>
        
        {!isMobile && (
          <>
            <code>UPDATE users SET age = 26, city = 'Москва' WHERE name = 'Алексей'</code><br/>
            <code>UPDATE users SET salary = salary * 1.1 WHERE city = 'Москва'</code><br/>
            <code>UPDATE users SET age = 31 WHERE name = 'Мария' AND city = 'Санкт-Петербург'</code><br/>
          </>
        )}
        
        {isMobile && (
          <>
            <code>UPDATE users SET salary = salary * 1.1 WHERE city = 'Москва'</code><br/>
          </>
        )}
        
        <br/>
        <strong>⚠️ Важно:</strong> Всегда используйте WHERE, чтобы случайно не обновить все записи!<br/>
        <strong>Доступные колонки:</strong> name, age, city, salary (id изменять нельзя)
      </div>
    </div>
  );
};

const SqlUpdateTrainerWrapper = () => (
  <BrowserOnly>
    {() => <SqlUpdateTrainer />}
  </BrowserOnly>
);

export default SqlUpdateTrainerWrapper;