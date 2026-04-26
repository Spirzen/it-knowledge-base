import React, { useState } from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';

const initialData = [
  { id: 1, name: 'Иван', age: 25, city: 'Москва', salary: 50000 },
  { id: 2, name: 'Мария', age: 30, city: 'Санкт-Петербург', salary: 65000 },
  { id: 3, name: 'Алексей', age: 22, city: 'Екатеринбург', salary: 45000 },
  { id: 4, name: 'Елена', age: 28, city: 'Москва', salary: 55000 },
  { id: 5, name: 'Дмитрий', age: 35, city: 'Новосибирск', salary: 70000 },
];

const SqlInsertTrainer = () => {
  const [data, setData] = useState(initialData);
  const [query, setQuery] = useState("INSERT INTO users (name, age, city, salary) VALUES ('Анна', 27, 'Казань', 48000)");
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const [lastInsertId, setLastInsertId] = useState(null);

  const parseInsertQuery = (sql) => {
    const insertRegex = /INSERT\s+INTO\s+(\w+)\s*\(([^)]+)\)\s*VALUES\s*\(([^)]+)\)/i;
    const match = sql.match(insertRegex);
    
    if (!match) {
      throw new Error('Неверный синтаксис INSERT. Используйте: INSERT INTO table (column1, column2) VALUES (value1, value2)');
    }
    
    const [, tableName, columnsStr, valuesStr] = match;
    
    if (tableName.toLowerCase() !== 'users') {
      throw new Error('В текущей версии доступна только таблица "users"');
    }
    
    const columns = columnsStr.split(',').map(col => col.trim().toLowerCase());
    
    const values = [];
    let currentValue = '';
    let inQuotes = false;
    let quoteChar = '';
    
    for (let i = 0; i < valuesStr.length; i++) {
      const char = valuesStr[i];
      
      if ((char === "'" || char === '"') && (i === 0 || valuesStr[i-1] !== '\\')) {
        if (!inQuotes) {
          inQuotes = true;
          quoteChar = char;
          currentValue += char;
        } else if (char === quoteChar) {
          inQuotes = false;
          currentValue += char;
        } else {
          currentValue += char;
        }
      } else if (char === ',' && !inQuotes) {
        values.push(currentValue.trim());
        currentValue = '';
      } else {
        currentValue += char;
      }
    }
    
    if (currentValue) {
      values.push(currentValue.trim());
    }
    
    if (columns.length !== values.length) {
      throw new Error(`Количество колонок (${columns.length}) не совпадает с количеством значений (${values.length})`);
    }
    
    const row = {};
    for (let i = 0; i < columns.length; i++) {
      const column = columns[i];
      let value = values[i];
      
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
      
      if (column === 'id') {
        throw new Error('ID назначается автоматически, не указывайте его в запросе');
      }
      
      if (column === 'name' && typeof value === 'string' && value.length < 2) {
        throw new Error('Имя должно содержать минимум 2 символа');
      }
      
      if (column === 'age' && (typeof value !== 'number' || value < 0 || value > 150)) {
        throw new Error('Возраст должен быть числом от 0 до 150');
      }
      
      if (column === 'salary' && (typeof value !== 'number' || value < 0)) {
        throw new Error('Зарплата должна быть положительным числом');
      }
      
      row[column] = value;
    }
    
    const requiredColumns = ['name', 'age', 'city', 'salary'];
    for (const col of requiredColumns) {
      if (!(col in row)) {
        throw new Error(`Обязательное поле "${col}" отсутствует в запросе`);
      }
    }
    
    return row;
  };

  const executeInsert = () => {
    setError(null);
    setResult(null);
    setLastInsertId(null);

    const sql = query.trim();

    try {
      if (!sql.toUpperCase().startsWith('INSERT')) {
        setError('Это тренажёр для команды INSERT. Пожалуйста, введите INSERT запрос.');
        return;
      }

      const newRow = parseInsertQuery(sql);
      
      const newId = data.length > 0 ? Math.max(...data.map(item => item.id)) + 1 : 1;
      newRow.id = newId;
      
      const updatedData = [...data, newRow];
      setData(updatedData);
      setLastInsertId(newId);
      
      setResult({
        success: true,
        message: `Запись успешно добавлена! ID = ${newId}`,
        insertedRow: newRow
      });
      
    } catch (e) {
      setError(e.message);
      console.error(e);
    }
  };

  const resetData = () => {
    setData(initialData);
    setResult(null);
    setError(null);
    setLastInsertId(null);
    setQuery("INSERT INTO users (name, age, city, salary) VALUES ('Анна', 27, 'Казань', 48000)");
  };

  const styles = {
    container: {
      fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif',
      padding: '20px',
      backgroundColor: '#f9fafb',
      borderRadius: '8px',
      border: '1px solid #e5e7eb',
      maxWidth: '100%',
      margin: '0 auto',
      boxSizing: 'border-box',
    },
    header: {
      fontSize: 'clamp(20px, 5vw, 28px)',
      fontWeight: 'bold',
      marginBottom: '20px',
      color: '#111827',
      borderBottom: '2px solid #10b981',
      paddingBottom: '10px',
      wordBreak: 'break-word',
    },
    description: {
      marginBottom: '15px',
      lineHeight: '1.6',
      fontSize: 'clamp(14px, 4vw, 16px)',
      color: '#4b5563',
    },
    inputGroup: {
      display: 'flex',
      gap: '10px',
      marginBottom: '20px',
      flexWrap: 'wrap',
    },
    inputWrapper: {
      flex: '1',
      minWidth: '250px',
    },
    input: {
      width: '100%',
      padding: '12px',
      fontSize: 'clamp(14px, 3vw, 16px)',
      fontFamily: '"Courier New", Courier, monospace',
      border: '1px solid #d1d5db',
      borderRadius: '6px',
      outline: 'none',
      boxSizing: 'border-box',
      transition: 'border-color 0.2s',
    },
    button: {
      padding: '12px 24px',
      fontSize: 'clamp(14px, 3vw, 16px)',
      fontWeight: '600',
      color: '#ffffff',
      backgroundColor: '#10b981',
      border: 'none',
      borderRadius: '6px',
      cursor: 'pointer',
      transition: 'background-color 0.2s, transform 0.1s',
      whiteSpace: 'nowrap',
    },
    resetButton: {
      backgroundColor: '#6b7280',
    },
    errorBox: {
      padding: '15px',
      backgroundColor: '#fef2f2',
      color: '#b91c1c',
      borderRadius: '6px',
      border: '1px solid #fecaca',
      marginBottom: '20px',
      fontFamily: 'monospace',
      fontSize: 'clamp(13px, 3vw, 14px)',
      wordBreak: 'break-word',
    },
    successBox: {
      padding: '15px',
      backgroundColor: '#f0fdf4',
      color: '#166534',
      borderRadius: '6px',
      border: '1px solid #bbf7d0',
      marginBottom: '20px',
      fontSize: 'clamp(13px, 3vw, 14px)',
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
      minWidth: '500px',
    },
    th: {
      textAlign: 'left',
      padding: 'clamp(8px, 2vw, 12px) clamp(10px, 3vw, 15px)',
      backgroundColor: '#f3f4f6',
      borderBottom: '2px solid #e5e7eb',
      fontWeight: '600',
      color: '#374151',
      fontSize: 'clamp(13px, 3vw, 14px)',
    },
    td: {
      padding: 'clamp(8px, 2vw, 12px) clamp(10px, 3vw, 15px)',
      borderBottom: '1px solid #e5e7eb',
      color: '#4b5563',
      fontSize: 'clamp(12px, 3vw, 14px)',
    },
    statsBar: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '20px',
      padding: 'clamp(8px, 2vw, 12px)',
      backgroundColor: '#e5e7eb',
      borderRadius: '6px',
      flexWrap: 'wrap',
      gap: '10px',
    },
    statsText: {
      fontSize: 'clamp(12px, 3vw, 14px)',
      color: '#374151',
      fontWeight: '500',
    },
    emptyState: {
      textAlign: 'center',
      padding: 'clamp(30px, 10vw, 40px)',
      color: '#6b7280',
      fontStyle: 'italic',
      fontSize: 'clamp(14px, 4vw, 16px)',
    },
    infoBox: {
      marginTop: '20px',
      padding: '15px',
      fontSize: 'clamp(12px, 3vw, 14px)',
      color: '#6b7280',
      backgroundColor: '#f3f4f6',
      borderRadius: '6px',
      lineHeight: '1.6',
    },
    jsonPreview: {
      marginTop: '10px',
      fontSize: 'clamp(12px, 3vw, 13px)',
      wordBreak: 'break-all',
      backgroundColor: '#ffffff',
      padding: '8px',
      borderRadius: '4px',
      overflowX: 'auto',
    }
  };

  const mediaStyles = `
    @media (max-width: 768px) {
      .stats-bar {
        flex-direction: column;
        align-items: flex-start;
      }
      .reset-button {
        width: 100%;
        margin-left: 0 !important;
      }
      .execute-button {
        width: 100%;
      }
      .input-group {
        flex-direction: column;
      }
    }
    
    @media (max-width: 480px) {
      .table-container {
        margin: 0 -10px;
      }
      .container {
        padding: 12px;
      }
    }
    
    @media (hover: hover) {
      button:hover {
        opacity: 0.9;
        transform: translateY(-1px);
      }
    }
    
    button:active {
      transform: translateY(0px);
    }
    
    input:focus {
      border-color: #10b981;
      box-shadow: 0 0 0 2px rgba(16, 185, 129, 0.1);
    }
  `;

  return (
    <BrowserOnly>
      {() => (
        <>
          <style>{mediaStyles}</style>
          <div style={styles.container} className="container">
            <div style={styles.header}>📝 Тренажёр SQL: Команда INSERT</div>
            
            <div style={styles.statsBar} className="stats-bar">
              <span style={styles.statsText}>
                Всего записей: {data.length}
              </span>
              {lastInsertId && (
                <span style={{ ...styles.statsText, color: '#10b981' }}>
                  Последний ID: {lastInsertId}
                </span>
              )}
              <button 
                onClick={resetData}
                style={{ ...styles.button, ...styles.resetButton, padding: 'clamp(6px, 2vw, 8px) clamp(12px, 4vw, 16px)', fontSize: 'clamp(12px, 3vw, 14px)' }}
                className="reset-button"
              >
                🔄 Сбросить данные
              </button>
            </div>
            
            <div style={styles.description}>
              💡 Введите SQL-запрос INSERT для добавления новой записи в таблицу <strong>users</strong>.<br/>
              ID генерируется автоматически. Обязательные поля: <strong>name, age, city, salary</strong>.
            </div>

            <div style={styles.inputGroup} className="input-group">
              <div style={styles.inputWrapper}>
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  style={styles.input}
                  placeholder="INSERT INTO users (name, age, city, salary) VALUES ('Анна', 27, 'Казань', 48000)"
                  onKeyPress={(e) => {
                    if (e.key === 'Enter') executeInsert();
                  }}
                />
              </div>
              <button 
                onClick={executeInsert} 
                style={styles.button}
                className="execute-button"
              >
                Выполнить INSERT
              </button>
            </div>

            {error && (
              <div style={styles.errorBox}>
                <strong>❌ Ошибка:</strong> {error}
              </div>
            )}

            {result && (
              <div style={styles.successBox}>
                <strong>✅ {result.message}</strong>
                <div style={styles.jsonPreview}>
                  Добавленная запись:<br/>
                  {JSON.stringify(result.insertedRow, null, 2)}
                </div>
              </div>
            )}

            <div style={styles.tableContainer} className="table-container">
              <h3 style={{ marginBottom: '10px', fontSize: 'clamp(16px, 4vw, 18px)', color: '#374151' }}>
                Таблица users:
              </h3>
              {data.length > 0 ? (
                <div style={{ overflowX: 'auto' }}>
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
                      {data.map((row) => (
                        <tr key={row.id}>
                          <td style={styles.td}>{row.id}</td>
                          <td style={styles.td}>{row.name}</td>
                          <td style={styles.td}>{row.age}</td>
                          <td style={styles.td}>{row.city}</td>
                          <td style={styles.td}>{row.salary.toLocaleString()} ₽</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                <div style={styles.emptyState}>
                  Таблица пуста. Добавьте первую запись с помощью INSERT!
                </div>
              )}
            </div>
            
            <div style={styles.infoBox}>
              <strong>Примеры INSERT запросов:</strong><br/>
              INSERT INTO users (name, age, city, salary) VALUES ('Анна', 27, 'Казань', 48000)<br/>
              INSERT INTO users (name, age, city, salary) VALUES ('Олег', 32, 'Сочи', 52000)<br/>
              INSERT INTO users (name, age, city, salary) VALUES ('Татьяна', 29, 'Нижний Новгород', 61000)<br/>
              <br/>
              <strong>⚠️ Важно:</strong> ID назначается автоматически. Поле id не нужно указывать в запросе.<br/>
              <strong>💡 Совет:</strong> Нажмите Enter для быстрого выполнения запроса!
            </div>
          </div>
        </>
      )}
    </BrowserOnly>
  );
};

export default SqlInsertTrainer;