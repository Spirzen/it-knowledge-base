import React, { useState } from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';

const initialData = [
  { id: 1, name: 'Иван', age: 25, city: 'Москва', salary: 50000 },
  { id: 2, name: 'Мария', age: 30, city: 'Санкт-Петербург', salary: 65000 },
  { id: 3, name: 'Алексей', age: 22, city: 'Екатеринбург', salary: 45000 },
  { id: 4, name: 'Елена', age: 28, city: 'Москва', salary: 55000 },
  { id: 5, name: 'Дмитрий', age: 35, city: 'Новосибирск', salary: 70000 },
];

const SqlTrainer = () => {
  const [query, setQuery] = useState('SELECT * FROM users');
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const parseWhereClause = (clause) => {
    const conditions = [];
    if (!clause || clause.trim() === '') return conditions;

    const parts = clause.split(/AND\s+/i);
    
    parts.forEach(part => {
      part = part.trim();
      if (!part) return;

      const match = part.match(/^(\w+)\s*(>=|<=|=|>|<|LIKE)\s*(.+)$/i);
      
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
    });
    
    return conditions;
  };

  const executeQuery = () => {
    setError(null);
    setResult(null);

    const originalSql = query.trim();
    const sqlUpper = originalSql.toUpperCase();

    if (!sqlUpper.startsWith('SELECT')) {
      setError('Запрос должен начинаться с команды SELECT.');
      return;
    }

    try {
      let data = [...initialData];
      const columns = ['id', 'name', 'age', 'city', 'salary'];

      if (sqlUpper.includes('WHERE')) {
        const whereMatch = originalSql.match(/WHERE\s+(.+?)(?:\s+ORDER\s+BY|\s+GROUP\s+BY|$)/i);
        
        if (whereMatch) {
          const whereClause = whereMatch[1];
          const conditions = parseWhereClause(whereClause);
          
          data = data.filter(row => {
            for (const cond of conditions) {
              const rowValue = row[cond.column];
              const targetValue = cond.value;
              
              if (cond.operator === '=') {
                if (typeof rowValue === 'string' && typeof targetValue === 'string') {
                  if (rowValue !== targetValue) return false;
                } else if (rowValue !== targetValue) {
                  return false;
                }
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
          });
        }
      }

      if (sqlUpper.includes('ORDER BY')) {
        const orderByMatch = originalSql.match(/ORDER\s+BY\s+(.+?)(?:\s+GROUP\s+BY|$)/i);
        
        if (orderByMatch) {
          const orderParts = orderByMatch[1].trim().split(/\s+/);
          const orderCol = orderParts[0].toLowerCase();
          const orderDir = orderParts[1] && orderParts[1].toUpperCase() === 'DESC' ? -1 : 1;
          
          if (columns.includes(orderCol)) {
            data.sort((a, b) => {
              const valA = a[orderCol];
              const valB = b[orderCol];
              
              if (typeof valA === 'string') {
                return orderDir * valA.localeCompare(valB);
              }
              return orderDir * (valA - valB);
            });
          }
        }
      }

      let selectedColumns = columns;
      
      if (sqlUpper.includes('SELECT *')) {
        selectedColumns = columns;
      } else {
        const selectMatch = originalSql.match(/SELECT\s+(.+?)\s+FROM/i);
        
        if (selectMatch) {
          const colsStr = selectMatch[1];
          const colsArray = colsStr.split(',').map(c => c.trim().toLowerCase());
          selectedColumns = colsArray.filter(c => columns.includes(c));
          
          if (selectedColumns.length === 0) {
            selectedColumns = columns;
          }
        }
      }

      const finalResult = data.map(row => {
        const newRow = {};
        selectedColumns.forEach(col => {
          newRow[col] = row[col];
        });
        return newRow;
      });

      setResult({ columns: selectedColumns, rows: finalResult });
    } catch (e) {
      console.error(e);
      setError('Ошибка синтаксиса запроса. Проверьте условия или названия колонок.');
    }
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
      '@media (max-width: 768px)': {
        padding: '12px',
      },
      '@media (max-width: 480px)': {
        padding: '8px',
      },
    },
    header: {
      fontSize: '24px',
      fontWeight: 'bold',
      marginBottom: '20px',
      color: '#111827',
      borderBottom: '2px solid #3b82f6',
      paddingBottom: '10px',
      '@media (max-width: 768px)': {
        fontSize: '20px',
        marginBottom: '15px',
      },
      '@media (max-width: 480px)': {
        fontSize: '18px',
        marginBottom: '12px',
      },
    },
    description: {
      marginBottom: '15px',
      lineHeight: '1.6',
      fontSize: '16px',
      '@media (max-width: 768px)': {
        fontSize: '14px',
        marginBottom: '12px',
      },
    },
    inputGroup: {
      display: 'flex',
      gap: '10px',
      marginBottom: '20px',
      flexWrap: 'wrap',
      '@media (max-width: 768px)': {
        flexDirection: 'column',
        gap: '8px',
      },
    },
    input: {
      flex: '1',
      minWidth: '300px',
      padding: '12px',
      fontSize: '16px',
      fontFamily: '"Courier New", Courier, monospace',
      border: '1px solid #d1d5db',
      borderRadius: '6px',
      outline: 'none',
      transition: 'border-color 0.3s ease',
      '@media (max-width: 768px)': {
        minWidth: 'auto',
        padding: '10px',
        fontSize: '14px',
      },
      '@media (max-width: 480px)': {
        padding: '8px',
        fontSize: '12px',
      },
    },
    button: {
      padding: '12px 24px',
      fontSize: '16px',
      fontWeight: '600',
      color: '#ffffff',
      backgroundColor: '#2563eb',
      border: 'none',
      borderRadius: '6px',
      cursor: 'pointer',
      transition: 'background-color 0.3s ease, transform 0.1s ease',
      whiteSpace: 'nowrap',
      '@media (max-width: 768px)': {
        padding: '10px 20px',
        fontSize: '14px',
        width: '100%',
      },
      '@media (max-width: 480px)': {
        padding: '8px 16px',
        fontSize: '13px',
      },
    },
    errorBox: {
      padding: '15px',
      backgroundColor: '#fef2f2',
      color: '#b91c1c',
      borderRadius: '6px',
      border: '1px solid #fecaca',
      marginBottom: '20px',
      fontFamily: 'monospace',
      fontSize: '14px',
      '@media (max-width: 768px)': {
        padding: '12px',
        fontSize: '13px',
        marginBottom: '15px',
      },
      '@media (max-width: 480px)': {
        padding: '10px',
        fontSize: '12px',
      },
    },
    tableContainer: {
      overflowX: 'auto',
      marginTop: '20px',
      WebkitOverflowScrolling: 'touch',
      borderRadius: '6px',
      '@media (max-width: 768px)': {
        marginTop: '15px',
      },
    },
    table: {
      width: '100%',
      borderCollapse: 'collapse',
      backgroundColor: '#ffffff',
      boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
      minWidth: '500px',
      '@media (max-width: 480px)': {
        fontSize: '12px',
        minWidth: '400px',
      },
    },
    th: {
      textAlign: 'left',
      padding: '12px 15px',
      backgroundColor: '#f3f4f6',
      borderBottom: '2px solid #e5e7eb',
      fontWeight: '600',
      color: '#374151',
      '@media (max-width: 768px)': {
        padding: '8px 10px',
      },
      '@media (max-width: 480px)': {
        padding: '6px 8px',
      },
    },
    td: {
      padding: '12px 15px',
      borderBottom: '1px solid #e5e7eb',
      color: '#4b5563',
      '@media (max-width: 768px)': {
        padding: '8px 10px',
      },
      '@media (max-width: 480px)': {
        padding: '6px 8px',
      },
    },
    emptyState: {
      textAlign: 'center',
      padding: '40px',
      color: '#6b7280',
      fontStyle: 'italic',
      '@media (max-width: 768px)': {
        padding: '30px',
        fontSize: '14px',
      },
      '@media (max-width: 480px)': {
        padding: '20px',
        fontSize: '13px',
      },
    },
    examples: {
      marginTop: '20px',
      fontSize: '14px',
      color: '#6b7280',
      '@media (max-width: 768px)': {
        fontSize: '12px',
        marginTop: '15px',
      },
      '@media (max-width: 480px)': {
        fontSize: '11px',
        marginTop: '12px',
      },
    },
  };

  const getResponsiveStyle = (baseStyle, isMobile, isTablet) => {
    let style = { ...baseStyle };
    if (isMobile && baseStyle['@media (max-width: 480px)']) {
      style = { ...style, ...baseStyle['@media (max-width: 480px)'] };
    } else if (isTablet && baseStyle['@media (max-width: 768px)']) {
      style = { ...style, ...baseStyle['@media (max-width: 768px)'] };
    }
    delete style['@media (max-width: 768px)'];
    delete style['@media (max-width: 480px)'];
    return style;
  };

  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);
  
  React.useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobile = windowWidth <= 480;
  const isTablet = windowWidth <= 768 && windowWidth > 480;

  return (
    <div style={getResponsiveStyle(styles.container, isMobile, isTablet)}>
      <div style={getResponsiveStyle(styles.header, isMobile, isTablet)}>
        Тренажёр SQL: Команда SELECT
      </div>
      
      <p style={getResponsiveStyle(styles.description, isMobile, isTablet)}>
        Введите SQL-запрос в поле ниже, чтобы получить результат из тестовой таблицы пользователей.
      </p>

      <div style={getResponsiveStyle(styles.inputGroup, isMobile, isTablet)}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          style={getResponsiveStyle(styles.input, isMobile, isTablet)}
          placeholder="Например: SELECT name, age FROM users WHERE age > 25 ORDER BY salary DESC"
        />
        <button 
          onClick={executeQuery} 
          style={getResponsiveStyle(styles.button, isMobile, isTablet)}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#1d4ed8'}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#2563eb'}
        >
          Выполнить запрос
        </button>
      </div>

      {error && (
        <div style={getResponsiveStyle(styles.errorBox, isMobile, isTablet)}>
          Ошибка: {error}
        </div>
      )}

      <div style={getResponsiveStyle(styles.tableContainer, isMobile, isTablet)}>
        {result ? (
          <table style={getResponsiveStyle(styles.table, isMobile, isTablet)}>
            <thead>
              <tr>
                {result.columns.map((col) => (
                  <th key={col} style={getResponsiveStyle(styles.th, isMobile, isTablet)}>{col}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {result.rows.length > 0 ? (
                result.rows.map((row, index) => (
                  <tr key={index}>
                    {result.columns.map((col) => (
                      <td key={`${index}-${col}`} style={getResponsiveStyle(styles.td, isMobile, isTablet)}>
                        {row[col]}
                      </td>
                    ))}
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={result.columns.length} style={{ ...getResponsiveStyle(styles.td, isMobile, isTablet), textAlign: 'center' }}>
                    Запрос не вернул ни одной записи.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        ) : (
          <div style={getResponsiveStyle(styles.emptyState, isMobile, isTablet)}>
            Результат выполнения запроса появится здесь.
          </div>
        )}
      </div>
      
      <div style={getResponsiveStyle(styles.examples, isMobile, isTablet)}>
        <strong>Примеры запросов:</strong><br/>
        SELECT * FROM users<br/>
        SELECT name, city FROM users WHERE city = 'Москва'<br/>
        SELECT id, salary FROM users WHERE salary &gt; 50000 ORDER BY age ASC
      </div>
    </div>
  );
};

export default function SqlTrainerWrapper() {
  return (
    <BrowserOnly>
      {() => <SqlTrainer />}
    </BrowserOnly>
  );
}