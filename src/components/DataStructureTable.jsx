import React, { useState, useEffect } from 'react';
import BrowserOnly from './BrowserOnly';

const DataStructureTable = () => {
  const [activeTab, setActiveTab] = useState('js');
  const [copied, setCopied] = useState(false);
  const [windowWidth, setWindowWidth] = useState(1200);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const codeExamples = {
    js: `// Создание двумерной матрицы (таблицы)
const table = [
  ['ID', 'Имя', 'Роль'],
  [1, 'Алексей', 'Разработчик'],
  [2, 'Мария', 'Тестировщик'],
  [3, 'Дмитрий', 'Менеджер']
];

// Доступ к элементу по строке и столбцу
const roleName = table[1][2]; // "Разработчик"

// Добавление новой строки
table.push([4, 'Елена', 'Дизайнер']);`,

    py: `# Создание списка списков (таблицы)
table = [
    ['ID', 'Имя', 'Роль'],
    [1, 'Алексей', 'Разработчик'],
    [2, 'Мария', 'Тестировщик'],
    [3, 'Дмитрий', 'Менеджер']
]

# Доступ к элементу
role_name = table[1][2]  # "Разработчик"

# Добавление новой строки
table.append([4, 'Елена', 'Дизайнер'])`,

    cs: `// Создание массива массивов (Jagged Array) или List<List<T>>
var table = new List<List<object>>
{
    new List<object> { "ID", "Имя", "Роль" },
    new List<object> { 1, "Алексей", "Разработчик" },
    new List<object> { 2, "Мария", "Тестировщик" },
    new List<object> { 3, "Дмитрий", "Менеджер" }
};

// Доступ к элементу
string roleName = table[1][2].ToString(); // "Разработчик"

// Добавление новой строки
table.Add(new List<object> { 4, 'Елена', 'Дизайнер' });`
  };

  const dataRows = [
    { id: 1, name: 'Алексей', role: 'Разработчик' },
    { id: 2, name: 'Мария', role: 'Тестировщик' },
    { id: 3, name: 'Дмитрий', role: 'Менеджер' }
  ];

  const handleCopy = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const isMobile = windowWidth < 768;
  const isTablet = windowWidth >= 768 && windowWidth < 1024;

  const styles = {
    container: {
      fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
      border: '1px solid #e0e0e0',
      borderRadius: '12px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
      backgroundColor: '#ffffff',
      overflow: 'hidden',
      margin: '20px 0',
      maxWidth: '100%',
      transition: 'all 0.3s ease',
    },
    header: {
      backgroundColor: '#f5f7fa',
      padding: isMobile ? '12px 16px' : '16px 20px',
      borderBottom: '1px solid #e0e0e0',
    },
    title: {
      fontSize: isMobile ? '16px' : '18px',
      fontWeight: '600',
      color: '#1a1a1a',
      margin: 0,
    },
    description: {
      fontSize: isMobile ? '13px' : '14px',
      color: '#555',
      marginTop: '8px',
      lineHeight: '1.5',
    },
    tabs: {
      display: 'flex',
      flexDirection: isMobile ? 'column' : 'row',
      borderBottom: '1px solid #e0e0e0',
      backgroundColor: '#fafafa',
    },
    tab: {
      padding: isMobile ? '10px 20px' : '12px 24px',
      cursor: 'pointer',
      fontSize: '14px',
      fontWeight: '500',
      color: '#666',
      border: 'none',
      background: 'transparent',
      transition: 'all 0.2s ease',
      borderBottom: isMobile ? 'none' : '2px solid transparent',
      borderLeft: isMobile ? '3px solid transparent' : 'none',
      textAlign: 'left',
      width: isMobile ? '100%' : 'auto',
    },
    activeTab: {
      color: '#2563eb',
      borderBottomColor: isMobile ? 'transparent' : '#2563eb',
      borderLeftColor: isMobile ? '#2563eb' : 'transparent',
      backgroundColor: isMobile ? '#eff6ff' : '#fff',
    },
    content: {
      padding: 0,
      position: 'relative',
    },
    codeBlock: {
      backgroundColor: '#1e1e1e',
      color: '#d4d4d4',
      padding: isMobile ? '16px' : '20px',
      margin: 0,
      overflowX: 'auto',
      fontSize: isMobile ? '12px' : '13px',
      lineHeight: '1.6',
      fontFamily: '"Fira Code", "Consolas", "Monaco", monospace',
      whiteSpace: 'pre-wrap',
      wordBreak: 'break-word',
      position: 'relative',
    },
    copyButton: {
      position: 'sticky',
      float: 'right',
      backgroundColor: copied ? '#10b981' : '#333',
      color: '#fff',
      border: 'none',
      borderRadius: '6px',
      padding: isMobile ? '6px 12px' : '6px 12px',
      fontSize: '12px',
      cursor: 'pointer',
      transition: 'all 0.2s',
      marginBottom: '10px',
    },
    interactivePreview: {
      padding: isMobile ? '16px' : '20px',
      borderTop: '1px solid #e0e0e0',
      backgroundColor: '#fcfcfc',
      boxSizing: 'border-box',
    },
    previewTitle: {
      fontSize: isMobile ? '13px' : '14px',
      fontWeight: '600',
      color: '#333',
      marginBottom: '12px',
    },
    tableWrapper: {
      overflowX: 'auto',
      WebkitOverflowScrolling: 'touch',
      borderRadius: '8px',
      border: '1px solid #e5e7eb',
    },
    grid: {
      display: 'table',
      width: '100%',
      borderCollapse: 'collapse',
      minWidth: isMobile ? '300px' : 'auto',
    },
    row: {
      display: 'table-row',
    },
    cell: {
      display: 'table-cell',
      padding: isMobile ? '10px 8px' : '12px 8px',
      textAlign: 'center',
      borderBottom: '1px solid #e5e7eb',
      backgroundColor: '#fff',
      fontSize: isMobile ? '12px' : '13px',
      wordWrap: 'break-word',
      overflowWrap: 'break-word',
      maxWidth: isMobile ? '100px' : 'none',
    },
    headerCell: {
      backgroundColor: '#f0f4f8',
      fontWeight: 'bold',
      color: '#2c3e50',
      borderBottom: '2px solid #d1d5db',
    },
    cardView: {
      display: 'flex',
      flexDirection: 'column',
      gap: '12px',
    },
    card: {
      backgroundColor: '#fff',
      border: '1px solid #e5e7eb',
      borderRadius: '8px',
      padding: '12px',
      transition: 'transform 0.2s, box-shadow 0.2s',
      cursor: 'pointer',
    },
    cardField: {
      display: 'flex',
      justifyContent: 'space-between',
      padding: '8px 0',
      borderBottom: '1px solid #f0f0f0',
      fontSize: '13px',
    },
    cardLabel: {
      fontWeight: '600',
      color: '#6b7280',
    },
    cardValue: {
      color: '#1f2937',
      wordBreak: 'break-word',
      textAlign: 'right',
      maxWidth: '60%',
    },
    infoText: {
      fontSize: '12px',
      color: '#888',
      marginTop: '12px',
      textAlign: 'center',
    },
    codeWrapper: {
      position: 'relative',
    }
  };

  const renderTableView = () => (
    <div style={styles.tableWrapper}>
      <div style={styles.grid}>
        <div style={styles.row}>
          <div style={{...styles.cell, ...styles.headerCell}}>ID</div>
          <div style={{...styles.cell, ...styles.headerCell}}>Имя</div>
          <div style={{...styles.cell, ...styles.headerCell}}>Роль</div>
        </div>
        
        {dataRows.map((row, index) => (
          <div style={styles.row} key={index}>
            <div style={styles.cell}>{row.id}</div>
            <div style={styles.cell}>{row.name}</div>
            <div style={styles.cell}>{row.role}</div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderCardView = () => (
    <div style={styles.cardView}>
      {dataRows.map((row, index) => (
        <div style={styles.card} key={index}>
          <div style={styles.cardField}>
            <span style={styles.cardLabel}>ID:</span>
            <span style={styles.cardValue}>{row.id}</span>
          </div>
          <div style={styles.cardField}>
            <span style={styles.cardLabel}>Имя:</span>
            <span style={styles.cardValue}>{row.name}</span>
          </div>
          <div style={styles.cardField}>
            <span style={styles.cardLabel}>Роль:</span>
            <span style={styles.cardValue}>{row.role}</span>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h3 style={styles.title}>Таблица (2D массив)</h3>
        <p style={styles.description}>
          {isMobile 
            ? 'Структура данных в виде строк и столбцов. Доступ к элементу по индексам [строка][столбец].'
            : 'Структура данных, организованная в виде строк и столбцов. Каждый элемент доступен по уникальному индексу строки и столбца. Таблица эффективно хранит данные с фиксированной структурой, такие как записи базы данных или электронные таблицы.'
          }
        </p>
      </div>
      
      <div style={styles.tabs}>
        <button 
          style={{...styles.tab, ...(activeTab === 'js' ? styles.activeTab : {})}}
          onClick={() => setActiveTab('js')}
        >
          JavaScript
        </button>
        <button 
          style={{...styles.tab, ...(activeTab === 'py' ? styles.activeTab : {})}}
          onClick={() => setActiveTab('py')}
        >
          Python
        </button>
        <button 
          style={{...styles.tab, ...(activeTab === 'cs' ? styles.activeTab : {})}}
          onClick={() => setActiveTab('cs')}
        >
          C#
        </button>
      </div>

      <div style={styles.content}>
        <div style={styles.codeWrapper}>
          <button 
            style={styles.copyButton}
            onClick={() => handleCopy(codeExamples[activeTab])}
          >
            {copied ? '✓ Скопировано!' : '📋 Копировать'}
          </button>
          <pre style={styles.codeBlock}>
            <code>{codeExamples[activeTab]}</code>
          </pre>
        </div>
        
        <div style={styles.interactivePreview}>
          <div style={styles.previewTitle}>
            Визуализация структуры:
            {isMobile && <span style={{fontSize: '11px', marginLeft: '8px', color: '#666'}}>(листайте вправо →)</span>}
          </div>
          
          {isMobile ? renderCardView() : renderTableView()}
          
          <p style={styles.infoText}>
            💡 {isMobile 
              ? 'На мобильных устройствах данные отображаются в виде карточек для лучшей читаемости'
              : 'Каждая ячейка соответствует элементу по координатам [строка][столбец]'
            }
          </p>
        </div>
      </div>
    </div>
  );
};

export default function WrappedDataStructureTable() {
  return (
    <BrowserOnly>
      {() => <DataStructureTable />}
    </BrowserOnly>
  );
}