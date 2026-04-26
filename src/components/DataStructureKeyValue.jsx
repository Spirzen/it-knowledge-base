import React, { useState, useEffect } from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';

// Вся логика компонента с хуками
const DataStructureKeyValueLogic = () => {
  const [activeTab, setActiveTab] = useState('js');
  const [storeType, setStoreType] = useState('dictionary');
  const [windowWidth, setWindowWidth] = useState(0);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    
    setWindowWidth(window.innerWidth);
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobile = windowWidth < 768;
  const isTablet = windowWidth >= 768 && windowWidth < 1024;

  const codeExamples = {
    js: {
      dictionary: `// Объект как структура ключ-значение
const userDB = {
  "user_101": { name: "Алексей", role: "Dev" },
  "user_102": { name: "Мария", role: "QA" },
  "user_103": { name: "Дмитрий", role: "Manager" }
};

// Доступ по ключу (O(1) в среднем)
const currentUser = userDB["user_101"];
console.log(currentUser.name); // "Алексей"

// Добавление новой пары
userDB["user_104"] = { name: "Елена", role: "Designer" };`,

      hash: `// Хеш-таблица (внутренняя реализация объектов в JS)
// Данные хранятся не подряд, а вычисляются через функцию хеширования

function hash(key) {
  let hash = 0;
  for (let i = 0; i < key.length; i++) {
    hash = ((hash << 5) - hash) + key.charCodeAt(i);
    return hash & hash; // Преобразование в целое число
  }
}

const key = "user_101";
const index = hash(key); // Индекс в массиве buckets
// Значение записывается по индексу index
console.log("Индекс хранения:", index);`
    },
    py: {
      dictionary: `# Словарь (Dictionary) как структура ключ-значение
users = {
    "user_101": {"name": "Алексей", "role": "Dev"},
    "user_102": {"name": "Мария", "role": "QA"},
    "user_103": {"name": "Дмитрий", "role": "Manager"}
}

# Доступ по ключу (O(1))
current_user = users["user_101"]
print(current_user["name"])  # "Алексей"

# Добавление новой пары
users["user_104"] = {"name": "Елена", "role": "Designer"}`,

      hash: `# Хеш-функция для понимания внутренней работы
def get_hash(key):
    hash_val = 0
    for char in key:
        hash_val += ord(char)
    return hash_val % 100  # Размер таблицы

key = "user_101"
index = get_hash(key)
print(f"Ключ '{key}' хранится по индексу {index}")`
    },
    cs: {
      dictionary: `// Dictionary<TKey, TValue> как структура ключ-значение
var userDB = new Dictionary<string, object>
{
    { "user_101", new { Name = "Алексей", Role = "Dev" } },
    { "user_102", new { Name = "Мария", Role = "QA" } },
    { "user_103", new { Name = "Дмитрий", Role = "Manager" } }
};

// Доступ по ключу (O(1))
var currentUser = userDB["user_101"];
Console.WriteLine(currentUser.Name); // "Алексей"

// Добавление новой пары
userDB["user_104"] = new { Name = "Елена", Role = "Designer" };`,

      hash: `// Понимание работы хеширования в Dictionary
// Ключ преобразуется в хеш-код для поиска ячейки в таблице

string key = "user_101";
int hashCode = key.GetHashCode(); // Внутренний метод CLR
// Значение размещается в ячейке, индекс которой зависит от hashCode
Console.WriteLine($"Хеш-код ключа: {hashCode}");`
    }
  };

  const styles = {
    container: {
      fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
      border: '1px solid #e0e0e0',
      borderRadius: '8px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
      backgroundColor: '#ffffff',
      overflow: 'hidden',
      margin: '20px 0',
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
    typeSelector: {
      display: 'flex',
      flexWrap: 'wrap',
      borderBottom: '1px solid #e0e0e0',
      backgroundColor: '#fafafa',
      padding: isMobile ? '10px 12px' : '10px 20px',
      gap: '8px',
    },
    typeBtn: {
      padding: isMobile ? '6px 12px' : '8px 16px',
      cursor: 'pointer',
      fontSize: isMobile ? '12px' : '13px',
      fontWeight: '500',
      color: '#666',
      border: '1px solid #ccc',
      borderRadius: '4px',
      background: '#fff',
      transition: 'all 0.2s ease',
      whiteSpace: 'nowrap',
    },
    activeTypeBtn: {
      backgroundColor: '#2563eb',
      color: '#fff',
      borderColor: '#2563eb',
    },
    tabs: {
      display: 'flex',
      flexWrap: 'wrap',
      borderBottom: '1px solid #e0e0e0',
      backgroundColor: '#fafafa',
    },
    tab: {
      padding: isMobile ? '10px 16px' : '12px 24px',
      cursor: 'pointer',
      fontSize: isMobile ? '13px' : '14px',
      fontWeight: '500',
      color: '#666',
      border: 'none',
      background: 'transparent',
      transition: 'all 0.2s ease',
      borderBottom: '2px solid transparent',
      flex: isMobile ? '1' : '0 0 auto',
      textAlign: 'center',
    },
    activeTab: {
      color: '#2563eb',
      borderBottomColor: '#2563eb',
      backgroundColor: '#fff',
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
      fontSize: isMobile ? '11px' : '13px',
      lineHeight: '1.6',
      fontFamily: '"Fira Code", "Consolas", "Monaco", monospace',
      whiteSpace: 'pre-wrap',
      wordBreak: 'break-word',
      position: 'relative',
    },
    copyButton: {
      position: 'absolute',
      top: '10px',
      right: '10px',
      backgroundColor: copied ? '#10b981' : '#333',
      color: '#fff',
      border: 'none',
      borderRadius: '4px',
      padding: isMobile ? '4px 10px' : '6px 12px',
      fontSize: isMobile ? '11px' : '12px',
      cursor: 'pointer',
      opacity: 0.9,
      transition: 'all 0.2s',
      zIndex: 10,
    },
    visualContainer: {
      padding: isMobile ? '16px' : '20px',
      borderTop: '1px solid #e0e0e0',
      backgroundColor: '#fcfcfc',
      minHeight: isMobile ? 'auto' : '250px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: '20px',
    },
    kvGrid: {
      display: 'grid',
      gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fill, minmax(140px, 1fr))',
      gap: isMobile ? '10px' : '15px',
      width: '100%',
      maxWidth: '600px',
      margin: '0 auto',
    },
    kvCard: {
      backgroundColor: '#fff',
      border: '1px solid #ddd',
      borderRadius: '6px',
      padding: isMobile ? '10px' : '12px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
      display: 'flex',
      flexDirection: 'column',
      gap: '8px',
      transition: 'transform 0.2s ease, box-shadow 0.2s ease',
    },
    keyLabel: {
      fontSize: isMobile ? '11px' : '12px',
      color: '#666',
      textTransform: 'uppercase',
      letterSpacing: '0.5px',
      fontWeight: 'bold',
    },
    value: {
      fontSize: isMobile ? '12px' : '13px',
      color: '#333',
      wordBreak: 'break-word',
      padding: isMobile ? '4px 6px' : '6px 8px',
      backgroundColor: '#f9f9f9',
      borderRadius: '4px',
      borderLeft: '3px solid #2563eb',
    },
    infoBox: {
      padding: isMobile ? '12px 16px' : '15px 20px',
      backgroundColor: '#e8f5e9',
      borderLeft: '4px solid #2e7d32',
      margin: isMobile ? '10px' : '10px 20px',
      borderRadius: '0 4px 4px 0',
    },
    infoTitle: {
      fontSize: isMobile ? '12px' : '13px',
      fontWeight: 'bold',
      color: '#1b5e20',
      marginBottom: '5px',
    },
    infoText: {
      fontSize: isMobile ? '11px' : '12px',
      color: '#2e7d32',
      lineHeight: '1.4',
    },
  };

  const handleCopy = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Ошибка копирования:', err);
    }
  };

  const data = [
    { key: "user_101", value: "{ name: 'Алексей', role: 'Dev' }" },
    { key: "user_102", value: "{ name: 'Мария', role: 'QA' }" },
    { key: "user_103", value: "{ name: 'Дмитрий', role: 'Manager' }" },
    { key: "session_A", value: "{ token: 'xyz...', expires: '1h' }" },
    { key: "config_v1", value: "{ debug: true, version: '1.0' }" }
  ];

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h3 style={styles.title}>Структура «Ключ-значение»</h3>
        <p style={styles.description}>
          Модель хранения данных, где каждый элемент связан с уникальным идентификатором (ключом). 
          Поиск элемента происходит напрямую по ключу без перебора остальных элементов. 
          Эта модель лежит в основе словарей, хеш-таблиц, баз данных NoSQL и кэширующих систем.
        </p>
      </div>
      
      <div style={styles.typeSelector}>
        <button 
          style={{
            ...styles.typeBtn,
            ...(storeType === 'dictionary' ? styles.activeTypeBtn : {})
          }}
          onClick={() => setStoreType('dictionary')}
        >
          Логическая модель (Словарь)
        </button>
        <button 
          style={{
            ...styles.typeBtn,
            ...(storeType === 'hash' ? styles.activeTypeBtn : {})
          }}
          onClick={() => setStoreType('hash')}
        >
          Физическая модель (Хеш-таблица)
        </button>
      </div>

      <div style={styles.tabs}>
        <button 
          style={{
            ...styles.tab,
            ...(activeTab === 'js' ? styles.activeTab : {})
          }}
          onClick={() => setActiveTab('js')}
        >
          JavaScript
        </button>
        <button 
          style={{
            ...styles.tab,
            ...(activeTab === 'py' ? styles.activeTab : {})
          }}
          onClick={() => setActiveTab('py')}
        >
          Python
        </button>
        <button 
          style={{
            ...styles.tab,
            ...(activeTab === 'cs' ? styles.activeTab : {})
          }}
          onClick={() => setActiveTab('cs')}
        >
          C#
        </button>
      </div>

      <div style={styles.content}>
        <pre style={styles.codeBlock}>
          <code>{codeExamples[activeTab][storeType]}</code>
          <button 
            style={styles.copyButton}
            onClick={() => handleCopy(codeExamples[activeTab][storeType])}
            title="Копировать код"
          >
            {copied ? '✓ Скопировано!' : '📋 Копировать'}
          </button>
        </pre>
        
        <div style={styles.visualContainer}>
          <div style={styles.kvGrid}>
            {data.map((item, index) => (
              <div 
                key={index} 
                style={styles.kvCard}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 4px 8px rgba(0,0,0,0.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 2px 4px rgba(0,0,0,0.05)';
                }}
              >
                <div style={styles.keyLabel}>Ключ</div>
                <div style={{fontSize: isMobile ? '11px' : '12px', color: '#888', marginBottom: '4px', wordBreak: 'break-all'}}>"{item.key}"</div>
                <div style={styles.keyLabel}>Значение</div>
                <div style={styles.value}>{item.value}</div>
              </div>
            ))}
          </div>
        </div>

        <div style={styles.infoBox}>
          <div style={styles.infoTitle}>💡 Принцип работы:</div>
          <div style={styles.infoText}>
            При обращении к системе программист указывает ключ. Система вычисляет адрес памяти (или использует внутренний индекс), 
            где хранится нужное значение, и мгновенно возвращает его. Элементы не связаны друг с другом последовательно, 
            что обеспечивает высокую скорость чтения, но требует дополнительной памяти для хранения указателей или хеш-функций.
            <br /><br />
            <strong>Сложность операций:</strong> Доступ O(1), Поиск O(1), Вставка O(1), Удаление O(1) в среднем.
          </div>
        </div>
      </div>
    </div>
  );
};

// Экспорт компонента, обернутого в BrowserOnly
export default function DataStructureKeyValue() {
  return (
    <BrowserOnly fallback={<div>Загрузка компонента "Ключ-значение"...</div>}>
      {() => <DataStructureKeyValueLogic />}
    </BrowserOnly>
  );
}