import React, { useState, useEffect } from 'react';

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
    const listener = (e) => setMatches(e.matches);
    media.addEventListener('change', listener);
    return () => media.removeEventListener('change', listener);
  }, [matches, query]);

  return matches;
};

const SqlDeleteTrainer = () => {
  const [data, setData] = useState(initialData);
  const [query, setQuery] = useState("DELETE FROM users WHERE city = 'Москва'");
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const [lastDeleteInfo, setLastDeleteInfo] = useState(null);
  const [showConfirm, setShowConfirm] = useState(false);
  const [pendingQuery, setPendingQuery] = useState(null);

  const isMobile = useMediaQuery('(max-width: 768px)');
  const isTablet = useMediaQuery('(min-width: 769px) and (max-width: 1024px)');

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

  const executeDelete = (confirmed = false) => {
    if (!confirmed && !showConfirm) {
      setPendingQuery(query);
      setShowConfirm(true);
      return;
    }

    setShowConfirm(false);
    setError(null);
    setResult(null);
    setLastDeleteInfo(null);

    const sql = query.trim();
    const sqlUpper = sql.toUpperCase();

    try {
      if (!sqlUpper.startsWith('DELETE')) {
        setError('Это тренажёр для команды DELETE. Пожалуйста, введите DELETE запрос.');
        return;
      }

      const tableMatch = sql.match(/DELETE\s+FROM\s+(\w+)/i);
      if (!tableMatch) {
        throw new Error('Не указано имя таблицы');
      }
      
      const tableName = tableMatch[1];
      if (tableName.toLowerCase() !== 'users') {
        throw new Error('В текущей версии доступна только таблица "users"');
      }

      if (!sqlUpper.includes('WHERE')) {
        throw new Error('❌ ОПАСНО! Запрос DELETE без WHERE удалит ВСЕ записи. Пожалуйста, добавьте условие WHERE для безопасности.');
      }

      let conditions = [];
      const whereMatch = sql.match(/WHERE\s+(.+)$/i);
      if (whereMatch) {
        const whereClause = whereMatch[1];
        conditions = parseWhereClause(whereClause);
      }

      if (conditions.length === 0) {
        throw new Error('Условие WHERE не содержит корректных операторов. Используйте =, >, <, >=, <= или LIKE');
      }

      const rowsToDelete = data.filter(row => matchesConditions(row, conditions));
      const deletedCount = rowsToDelete.length;

      if (deletedCount === 0) {
        setResult({
          success: false,
          message: 'DELETE не удалил ни одной записи. Проверьте условие WHERE.',
        });
      } else {
        if (deletedCount > 3 && !confirmed) {
          setPendingQuery(query);
          setShowConfirm(true);
          return;
        }

        const newData = data.filter(row => !matchesConditions(row, conditions));
        setData(newData);
        
        setLastDeleteInfo({
          count: deletedCount,
          condition: conditions,
          deletedRows: rowsToDelete
        });
        
        setResult({
          success: true,
          message: `✅ Удалено записей: ${deletedCount}`,
          deletedRows: rowsToDelete
        });
      }

    } catch (e) {
      setError(e.message);
      console.error(e);
    }
  };

  const confirmDelete = () => {
    executeDelete(true);
  };

  const cancelDelete = () => {
    setShowConfirm(false);
    setPendingQuery(null);
  };

  const resetData = () => {
    setData(initialData);
    setResult(null);
    setError(null);
    setLastDeleteInfo(null);
    setShowConfirm(false);
    setPendingQuery(null);
    setQuery("DELETE FROM users WHERE city = 'Москва'");
  };

  const getStyles = () => {
    const baseSpacing = isMobile ? '12px' : '20px';
    const fontSize = isMobile ? '14px' : '16px';
    const headerFontSize = isMobile ? '20px' : '24px';

    return {
      container: {
        fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif',
        padding: baseSpacing,
        backgroundColor: '#f9fafb',
        borderRadius: isMobile ? '0' : '8px',
        border: isMobile ? 'none' : '1px solid #e5e7eb',
        maxWidth: '100%',
        margin: '0 auto',
        minHeight: '100vh',
      },
      header: {
        fontSize: headerFontSize,
        fontWeight: 'bold',
        marginBottom: '15px',
        color: '#111827',
        borderBottom: '2px solid #ef4444',
        paddingBottom: '10px',
        wordBreak: 'break-word',
      },
      inputGroup: {
        display: 'flex',
        gap: '10px',
        marginBottom: '20px',
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
        width: isMobile ? '100%' : 'auto',
      },
      button: {
        padding: isMobile ? '10px 16px' : '12px 24px',
        fontSize: isMobile ? '14px' : '16px',
        fontWeight: '600',
        color: '#ffffff',
        backgroundColor: '#ef4444',
        border: 'none',
        borderRadius: '6px',
        cursor: 'pointer',
        transition: 'background-color 0.2s',
        width: isMobile ? '100%' : 'auto',
      },
      resetButton: {
        backgroundColor: '#6b7280',
        marginLeft: isMobile ? '0' : '10px',
        marginTop: isMobile ? '10px' : '0',
      },
      statsBar: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '20px',
        padding: '10px',
        backgroundColor: '#e5e7eb',
        borderRadius: '6px',
        flexWrap: 'wrap',
        gap: '10px',
        flexDirection: isMobile ? 'column' : 'row',
      },
      statsText: {
        fontSize: isMobile ? '12px' : '14px',
        color: '#374151',
        fontWeight: '500',
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
        minWidth: isMobile ? '500px' : 'auto',
      },
      th: {
        textAlign: 'left',
        padding: isMobile ? '8px 10px' : '12px 15px',
        backgroundColor: '#f3f4f6',
        borderBottom: '2px solid #e5e7eb',
        fontWeight: '600',
        color: '#374151',
        fontSize: isMobile ? '12px' : '14px',
      },
      td: {
        padding: isMobile ? '8px 10px' : '12px 15px',
        borderBottom: '1px solid #e5e7eb',
        color: '#4b5563',
        fontSize: isMobile ? '12px' : '14px',
      },
      errorBox: {
        padding: isMobile ? '12px' : '15px',
        backgroundColor: '#fef2f2',
        color: '#b91c1c',
        borderRadius: '6px',
        border: '1px solid #fecaca',
        marginBottom: '20px',
        fontFamily: 'monospace',
        fontSize: isMobile ? '12px' : '14px',
        wordBreak: 'break-word',
      },
      successBox: {
        padding: isMobile ? '12px' : '15px',
        backgroundColor: '#fef2f2',
        color: '#991b1b',
        borderRadius: '6px',
        border: '1px solid #fecaca',
        marginBottom: '20px',
        fontSize: isMobile ? '12px' : '14px',
      },
      warningBox: {
        padding: isMobile ? '12px' : '15px',
        backgroundColor: '#fffbeb',
        color: '#92400e',
        borderRadius: '6px',
        border: '1px solid #fde68a',
        marginBottom: '20px',
        fontSize: isMobile ? '12px' : '14px',
        wordBreak: 'break-word',
      },
      confirmBox: {
        padding: isMobile ? '15px' : '20px',
        backgroundColor: '#fef3c7',
        color: '#92400e',
        borderRadius: '8px',
        border: '2px solid #f59e0b',
        marginBottom: '20px',
        textAlign: 'center',
        fontSize: isMobile ? '13px' : '16px',
      },
      emptyState: {
        textAlign: 'center',
        padding: isMobile ? '30px' : '40px',
        color: '#6b7280',
        fontStyle: 'italic',
        fontSize: isMobile ? '14px' : '16px',
      },
      confirmButton: {
        padding: isMobile ? '8px 16px' : '10px 20px',
        fontSize: isMobile ? '12px' : '14px',
        fontWeight: '600',
        margin: '0 10px',
        borderRadius: '6px',
        cursor: 'pointer',
        border: 'none',
      },
      infoText: {
        marginTop: '20px',
        fontSize: isMobile ? '11px' : '14px',
        color: '#6b7280',
        lineHeight: '1.6',
      },
    };
  };

  const styles = getStyles();

  return (
    <div style={styles.container}>
      <div style={styles.header}>Тренажёр SQL: Команда DELETE</div>
      
      <div style={styles.statsBar}>
        <span style={styles.statsText}>
          Всего записей: {data.length}
        </span>
        {lastDeleteInfo && (
          <span style={{ ...styles.statsText, color: '#ef4444' }}>
            Последнее удаление: {lastDeleteInfo.count} записей
          </span>
        )}
        <button 
          onClick={resetData}
          style={{ ...styles.button, ...styles.resetButton, padding: isMobile ? '8px 12px' : '6px 12px', fontSize: isMobile ? '12px' : '14px', width: isMobile ? '100%' : 'auto' }}
        >
          🔄 Сбросить данные
        </button>
      </div>
      
      <p style={{ marginBottom: '15px', lineHeight: '1.6', fontSize: isMobile ? '13px' : '16px' }}>
        Введите SQL-запрос DELETE для удаления данных из таблицы users.
        <strong style={{ color: '#ef4444' }}> Всегда используйте WHERE, чтобы случайно не удалить все записи!</strong>
      </p>

      <div style={styles.inputGroup}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          style={styles.input}
          placeholder="DELETE FROM users WHERE city = 'Москва'"
        />
        <button onClick={() => executeDelete(false)} style={styles.button}>
          Выполнить DELETE
        </button>
      </div>

      {showConfirm && (
        <div style={styles.confirmBox}>
          <strong>⚠️ ПОДТВЕРЖДЕНИЕ УДАЛЕНИЯ</strong>
          <p style={{ marginTop: '10px', marginBottom: '10px', wordBreak: 'break-word' }}>
            Запрос: <code>{pendingQuery}</code>
          </p>
          <p style={{ marginBottom: '15px' }}>Это удалит несколько записей. Вы уверены?</p>
          <div>
            <button 
              onClick={confirmDelete}
              style={{ ...styles.confirmButton, ...styles.confirmYes }}
            >
              ✅ Да, удалить
            </button>
            <button 
              onClick={cancelDelete}
              style={{ ...styles.confirmButton, ...styles.confirmNo }}
            >
              ❌ Отмена
            </button>
          </div>
        </div>
      )}

      {error && (
        <div style={styles.errorBox}>
          <strong>❌ Ошибка:</strong> {error}
        </div>
      )}

      {result && result.success === false && (
        <div style={styles.warningBox}>
          <strong>⚠️ Внимание:</strong> {result.message}
        </div>
      )}

      {result && result.success === true && (
        <div style={styles.successBox}>
          <strong>{result.message}</strong>
          {result.deletedRows && result.deletedRows.length <= 5 && (
            <div style={{ marginTop: '10px', fontSize: isMobile ? '11px' : '14px' }}>
              <strong>Удаленные записи:</strong>
              {result.deletedRows.map((row, idx) => (
                <div key={idx} style={{ marginTop: '5px', wordBreak: 'break-word' }}>
                  ID={row.id}: {row.name}, {row.age} лет, {row.city}, зарплата {row.salary}
                </div>
              ))}
            </div>
          )}
          {result.deletedRows && result.deletedRows.length > 5 && (
            <div style={{ marginTop: '10px', fontSize: isMobile ? '12px' : '14px' }}>
              Удалено {result.deletedRows.length} записей. Для просмотра деталей используйте SELECT.
            </div>
          )}
        </div>
      )}

      {lastDeleteInfo && lastDeleteInfo.deletedRows && lastDeleteInfo.deletedRows.length > 0 && (
        <div style={styles.warningBox}>
          <strong>Информация о последнем DELETE:</strong><br/>
          • Удалено записей: {lastDeleteInfo.count}<br/>
          • Условие: {JSON.stringify(lastDeleteInfo.condition)}<br/>
          • ID удаленных записей: {lastDeleteInfo.deletedRows.map(r => r.id).join(', ')}
        </div>
      )}

      <div style={styles.tableContainer}>
        <h3 style={{ marginBottom: '10px', fontSize: isMobile ? '16px' : '18px', color: '#374151' }}>
          Текущие данные таблицы users:
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
              {data.map((row) => (
                <tr key={row.id}>
                  <td style={styles.td}>{row.id}</td>
                  <td style={styles.td}>{row.name}</td>
                  <td style={styles.td}>{row.age}</td>
                  <td style={styles.td}>{row.city}</td>
                  <td style={styles.td}>{row.salary.toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div style={styles.emptyState}>
            Таблица пуста. Нажмите "Сбросить данные", чтобы восстановить начальные записи.
          </div>
        )}
      </div>
      
      <div style={styles.infoText}>
        <strong>Примеры DELETE запросов:</strong><br />
        DELETE FROM users WHERE city = 'Москва'<br />
        DELETE FROM users WHERE age {'<'} 25<br />
        DELETE FROM users WHERE salary {'>'} 60000<br />
        DELETE FROM users WHERE name = 'Иван' AND city = 'Москва'<br />
        DELETE FROM users WHERE age {'>='} 25 AND age {'<='} 30<br />
        <br />
        <strong>ВАЖНЫЕ ПРАВИЛА БЕЗОПАСНОСТИ:</strong><br />
        • DELETE без WHERE запрещен системой!<br />
        • При удалении более 3 записей требуется подтверждение<br />
        • Удаленные данные нельзя восстановить (кроме кнопки сброса)<br />
        • Всегда проверяйте условие WHERE перед выполнением!<br />
        • На мобильных устройствах таблицу можно скроллить горизонтально
      </div>
    </div>
  );
};

export default SqlDeleteTrainer;