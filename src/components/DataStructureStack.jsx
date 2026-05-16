import React, { useState, useEffect } from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';

// Вся логика компонента с хуками
const DataStructureStackLogic = () => {
  const [activeTab, setActiveTab] = useState('js');
  const [stack, setStack] = useState(['Базовый уровень', 'Второй слой', 'Верхний элемент']);
  const [animationStep, setAnimationStep] = useState(null);
  const [tempValue, setTempValue] = useState('');
  const [windowWidth, setWindowWidth] = useState(0);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    
    setWindowWidth(window.innerWidth);
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobile = windowWidth <= 768;
  const isTablet = windowWidth <= 1024 && windowWidth > 768;

  const codeExamples = {
    js: {
      stack: `// Создание стека (Массив в JavaScript)
const stack = ['Базовый уровень', 'Второй слой'];

// Операция PUSH (добавление сверху)
// Элемент добавляется в конец массива
stack.push('Новый элемент'); 
console.log(stack[stack.length - 1]); // "Новый элемент"

// Операция POP (удаление сверху)
// Удаляется последний элемент массива
const topElement = stack.pop(); 
console.log(topElement); // "Новый элемент"
console.log(stack); // ['Базовый уровень', 'Второй слой']

// Операция PEEK (просмотр без удаления)
const peekElement = stack[stack.length - 1];
console.log(peekElement); // "Второй слой"`
    },
    py: {
      stack: `# Создание списка (стек) в Python
my_stack = ['Базовый уровень', 'Второй слой']

# Операция PUSH (добавление в конец)
my_stack.append('Новый элемент')
print(my_stack[-1])  # "Новый элемент"

# Операция POP (удаление последнего элемента)
top_element = my_stack.pop()
print(top_element)  # "Новый элемент"
print(my_stack)     # ['Базовый уровень', 'Второй слой']

# Операция PEEK (просмотр верхнего элемента)
if my_stack:
    print(my_stack[-1])  # "Второй слой"`
    },
    cs: {
      stack: `// Создание стека в C#
var stack = new Stack<string> { "Базовый уровень", "Второй слой" };

// Операция PUSH (добавление сверху)
stack.Push("Новый элемент");
Console.WriteLine(stack.Peek()); // "Новый элемент"

// Операция POP (удаление сверху)
string topElement = stack.Pop();
Console.WriteLine(topElement); // "Новый элемент"
Console.WriteLine($"Осталось элементов: {stack.Count}");

// Операция PEEK (просмотр без удаления)
string currentTop = stack.Peek();
Console.WriteLine(currentTop); // "Второй слой"`
    }
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

  const handlePush = () => {
    if (!tempValue.trim()) return;
    
    setAnimationStep('push');
    setTimeout(() => {
      setStack([...stack, tempValue]);
      setTempValue('');
      setAnimationStep(null);
    }, 300);
  };

  const handlePop = () => {
    if (stack.length === 0) return;
    
    setAnimationStep('pop');
    setTimeout(() => {
      setStack(stack.slice(0, -1));
      setAnimationStep(null);
    }, 300);
  };

  const styles = {
    container: {
      fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
      border: '1px solid #e0e0e0',
      borderRadius: '8px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
      backgroundColor: '#ffffff',
      overflow: 'hidden',
      margin: isMobile ? '10px 0' : '20px 0',
      width: '100%',
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
      fontSize: isMobile ? '12px' : '14px',
      color: '#555',
      marginTop: '8px',
      lineHeight: '1.5',
    },
    tabs: {
      display: 'flex',
      borderBottom: '1px solid #e0e0e0',
      backgroundColor: '#fafafa',
      flexWrap: 'wrap',
    },
    tab: {
      padding: isMobile ? '10px 16px' : '12px 24px',
      cursor: 'pointer',
      fontSize: isMobile ? '12px' : '14px',
      fontWeight: '500',
      color: '#666',
      border: 'none',
      background: 'transparent',
      transition: 'all 0.2s ease',
      borderBottom: '2px solid transparent',
      flex: isMobile ? '1' : 'auto',
      textAlign: 'center',
      whiteSpace: 'nowrap',
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
    codeBlockWrapper: {
      position: 'relative',
      overflowX: 'auto',
      padding: isMobile ? '12px' : '16px',
      backgroundColor: '#1e1e1e',
    },
    codeBlock: {
      backgroundColor: '#1e1e1e',
      color: '#d4d4d4',
      margin: 0,
      overflowX: 'auto',
      fontSize: isMobile ? '11px' : '13px',
      lineHeight: '1.6',
      fontFamily: '"Fira Code", "Consolas", "Monaco", monospace',
      whiteSpace: 'pre-wrap',
      wordBreak: 'break-word',
      overflowWrap: 'break-word',
      tabSize: 2,
      MozTabSize: 2,
      WebkitOverflowScrolling: 'touch',
      maxWidth: '100%',
    },
    copyButton: {
      position: 'absolute',
      top: '12px',
      right: '12px',
      backgroundColor: copied ? '#10b981' : '#333',
      color: '#fff',
      border: 'none',
      borderRadius: '4px',
      padding: isMobile ? '4px 10px' : '6px 12px',
      fontSize: isMobile ? '11px' : '12px',
      cursor: 'pointer',
      transition: 'all 0.2s',
      zIndex: 10,
      opacity: 0.8,
      ':hover': {
        opacity: 1,
      },
    },
    visualContainer: {
      padding: isMobile ? '16px' : '20px',
      borderTop: '1px solid #e0e0e0',
      backgroundColor: '#fcfcfc',
      minHeight: isMobile ? '250px' : '300px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '20px',
    },
    stackBase: {
      width: isMobile ? '160px' : '200px',
      height: isMobile ? '16px' : '20px',
      backgroundColor: '#9e9e9e',
      borderRadius: '4px',
      marginBottom: '10px',
      position: 'relative',
    },
    stackPlate: {
      width: isMobile ? '160px' : '200px',
      height: isMobile ? '12px' : '15px',
      backgroundColor: '#bdbdbd',
      borderRadius: '2px',
      marginBottom: '-5px',
      zIndex: 1,
    },
    elementBox: {
      width: isMobile ? '140px' : '180px',
      minHeight: isMobile ? '40px' : '50px',
      backgroundColor: '#fff',
      border: `2px solid ${animationStep === 'push' ? '#4caf50' : '#2563eb'}`,
      borderRadius: '6px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      fontSize: isMobile ? '12px' : '14px',
      fontWeight: 'bold',
      color: animationStep === 'push' ? '#4caf50' : '#2563eb',
      boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
      marginBottom: '-10px',
      zIndex: 2,
      transition: 'transform 0.3s ease, opacity 0.3s ease, border-color 0.3s ease',
      position: 'relative',
      wordBreak: 'break-word',
      padding: '8px',
    },
    actionButtons: {
      display: 'flex',
      gap: isMobile ? '8px' : '15px',
      marginTop: '20px',
      flexWrap: 'wrap',
      justifyContent: 'center',
      width: '100%',
    },
    btn: {
      padding: isMobile ? '8px 16px' : '10px 20px',
      border: 'none',
      borderRadius: '6px',
      fontSize: isMobile ? '12px' : '14px',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.2s',
      flex: isMobile ? '1' : 'auto',
      minWidth: isMobile ? '80px' : 'auto',
    },
    pushBtn: {
      backgroundColor: '#e3f2fd',
      color: '#1565c0',
      border: '1px solid #90caf9',
    },
    popBtn: {
      backgroundColor: '#ffebee',
      color: '#c62828',
      border: '1px solid #ef9a9a',
    },
    inputGroup: {
      display: 'flex',
      gap: '8px',
      marginTop: '10px',
      width: '100%',
      maxWidth: isMobile ? '100%' : '300px',
      flexDirection: isMobile ? 'column' : 'row',
    },
    input: {
      flex: 1,
      padding: isMobile ? '10px' : '8px',
      borderRadius: '4px',
      border: '1px solid #ccc',
      fontSize: isMobile ? '14px' : '13px',
      minWidth: 0,
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
    stackContainer: {
      position: 'relative',
      display: 'flex',
      flexDirection: 'column-reverse',
      alignItems: 'center',
      width: '100%',
      overflowX: 'auto',
      padding: '10px 0',
    },
    disabledBtn: {
      opacity: 0.5,
      cursor: 'not-allowed',
    },
    elementCount: {
      fontSize: '12px',
      color: '#666',
      marginTop: '10px',
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h3 style={styles.title}>Стек (Stack)</h3>
        <p style={styles.description}>
          Линейная структура данных, работающая по принципу LIFO (Last In, First Out). 
          Последний добавленный элемент извлекается первым. 
          Операции выполняются только с верхним элементом (вершиной стека).
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
        <div style={styles.codeBlockWrapper}>
          <button 
            style={styles.copyButton}
            onClick={() => handleCopy(codeExamples[activeTab].stack)}
            title="Копировать код"
          >
            {copied ? '✓ Скопировано!' : '📋 Копировать'}
          </button>
          <pre style={styles.codeBlock}>
            <code>{codeExamples[activeTab].stack}</code>
          </pre>
        </div>
        
        <div style={styles.visualContainer}>
          <div style={styles.stackContainer}>
            <div style={styles.stackBase}></div>
            
            {Array.from({ length: Math.min(5, Math.max(2, stack.length + 1)) }).map((_, i) => (
              <div key={`plate-${i}`} style={styles.stackPlate}></div>
            ))}
            
            {stack.slice().reverse().map((item, index) => (
              <div 
                key={index} 
                style={{
                  ...styles.elementBox,
                  transform: animationStep === 'push' && index === 0 ? 'translateY(-20px)' : 'none',
                  opacity: animationStep === 'pop' && index === 0 ? '0.5' : '1',
                  boxShadow: animationStep === 'push' && index === 0 ? '0 8px 12px rgba(37, 99, 235, 0.3)' : '0 4px 6px rgba(0,0,0,0.1)'
                }}
              >
                {item}
              </div>
            ))}
            
            {stack.length === 0 && (
              <div style={{...styles.elementBox, borderColor: '#ccc', color: '#999', fontStyle: 'italic'}}>
                Пусто
              </div>
            )}
          </div>

          <div style={styles.actionButtons}>
            <div style={styles.inputGroup}>
              <input 
                type="text" 
                value={tempValue}
                onChange={(e) => setTempValue(e.target.value)}
                placeholder="Введите значение..."
                style={styles.input}
                onKeyPress={(e) => e.key === 'Enter' && handlePush()}
              />
              <button 
                style={{
                  ...styles.btn, 
                  ...styles.pushBtn,
                  ...(!tempValue.trim() ? styles.disabledBtn : {})
                }}
                onClick={handlePush}
                disabled={!tempValue.trim()}
              >
                Push (+)
              </button>
              <button 
                style={{
                  ...styles.btn, 
                  ...styles.popBtn,
                  ...(stack.length === 0 ? styles.disabledBtn : {})
                }}
                onClick={handlePop}
                disabled={stack.length === 0}
              >
                Pop (-)
              </button>
            </div>
          </div>
          
          <div style={styles.elementCount}>
            В стеке элементов: {stack.length}
          </div>
        </div>

        <div style={styles.infoBox}>
          <div style={styles.infoTitle}>Как это работает:</div>
          <div style={styles.infoText}>
            Представьте стопку тарелок. Вы можете положить новую тарелку только сверху (Push). 
            Вы можете взять тарелку только с самой вершины стопки (Pop). 
            Тарелки снизу остаются недоступными, пока не будут убраны верхние. 
            Этот принцип используется в вызовах функций, отмене действий (Undo/Redo) и парсинге выражений.
          </div>
        </div>
      </div>
    </div>
  );
};

// Экспорт компонента, обернутого в BrowserOnly
export default function DataStructureStack() {
  return (
    <BrowserOnly fallback={<div>Загрузка компонента "Стек"...</div>}>
      {() => <DataStructureStackLogic />}
    </BrowserOnly>
  );
}