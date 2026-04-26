import React, { useState, useEffect } from 'react';

const DataStructureStack = () => {
  const [activeTab, setActiveTab] = useState('js');
  const [stack, setStack] = useState(['Базовый уровень', 'Второй слой', 'Верхний элемент']);
  const [animationStep, setAnimationStep] = useState(null);
  const [tempValue, setTempValue] = useState('');
  const [copiedTab, setCopiedTab] = useState(null);

  const codeExamples = {
    js: {
      stack: "// Создание стека (Массив в JavaScript)\n" +
             "const stack = ['Базовый уровень', 'Второй слой'];\n\n" +
             "// Операция PUSH (добавление сверху)\n" +
             "// Элемент добавляется в конец массива\n" +
             "stack.push('Новый элемент'); \n" +
             "console.log(stack[stack.length - 1]); // \"Новый элемент\"\n\n" +
             "// Операция POP (удаление сверху)\n" +
             "// Удаляется последний элемент массива\n" +
             "const topElement = stack.pop(); \n" +
             "console.log(topElement); // \"Новый элемент\"\n" +
             "console.log(stack); // ['Базовый уровень', 'Второй слой']\n\n" +
             "// Операция PEEK (просмотр без удаления)\n" +
             "const peekElement = stack[stack.length - 1];\n" +
             "console.log(peekElement); // \"Второй слой\""
    },
    py: {
      stack: "# Создание списка (стек) в Python\n" +
             "my_stack = ['Базовый уровень', 'Второй слой']\n\n" +
             "# Операция PUSH (добавление в конец)\n" +
             "my_stack.append('Новый элемент')\n" +
             "print(my_stack[-1])  # \"Новый элемент\"\n\n" +
             "# Операция POP (удаление последнего элемента)\n" +
             "top_element = my_stack.pop()\n" +
             "print(top_element)  # \"Новый элемент\"\n" +
             "print(my_stack)     # ['Базовый уровень', 'Второй слой']\n\n" +
             "# Операция PEEK (просмотр верхнего элемента)\n" +
             "if my_stack:\n" +
             "    print(my_stack[-1])  # \"Второй слой\""
    },
    cs: {
      stack: "// Создание стека в C#\n" +
             "var stack = new Stack<string> { \"Базовый уровень\", \"Второй слой\" };\n\n" +
             "// Операция PUSH (добавление сверху)\n" +
             "stack.Push(\"Новый элемент\");\n" +
             "Console.WriteLine(stack.Peek()); // \"Новый элемент\"\n\n" +
             "// Операция POP (удаление сверху)\n" +
             "string topElement = stack.Pop();\n" +
             "Console.WriteLine(topElement); // \"Новый элемент\"\n" +
             "Console.WriteLine($\"Осталось элементов: {stack.Count}\");\n\n" +
             "// Операция PEEK (просмотр без удаления)\n" +
             "string currentTop = stack.Peek();\n" +
             "Console.WriteLine(currentTop); // \"Второй слой\""
    }
  };

  const handleCopy = async (text, tabName) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedTab(tabName);
      setTimeout(() => setCopiedTab(null), 2000);
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

  const getStyles = () => {
    const isMobile = typeof window !== 'undefined' && window.innerWidth <= 768;
    const isTablet = typeof window !== 'undefined' && window.innerWidth <= 1024 && window.innerWidth > 768;
    
    return {
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
        WebkitOverflowScrolling: 'touch',
      },
      copyButton: {
        position: 'sticky',
        top: '10px',
        right: '10px',
        float: 'right',
        backgroundColor: copiedTab === activeTab ? '#4caf50' : '#333',
        color: '#fff',
        border: 'none',
        borderRadius: '4px',
        padding: isMobile ? '4px 10px' : '6px 12px',
        fontSize: isMobile ? '11px' : '12px',
        cursor: 'pointer',
        transition: 'all 0.2s',
        marginBottom: '10px',
        zIndex: 10,
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
        height: isMobile ? '40px' : '50px',
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
        transition: 'transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease',
        position: 'relative',
        wordBreak: 'break-word',
        padding: '0 8px',
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
      }
    };
  };

  const styles = getStyles();

  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (animationStep === 'push') {
    }
  }, [animationStep]);

  const currentStyles = getStyles();

  return (
    <div style={currentStyles.container}>
      <div style={currentStyles.header}>
        <h3 style={currentStyles.title}>Стек (Stack)</h3>
        <p style={currentStyles.description}>
          Линейная структура данных, работающая по принципу LIFO (Last In, First Out). 
          Последний добавленный элемент извлекается первым. 
          Операции выполняются только с верхним элементом (вершиной стека).
        </p>
      </div>
      
      <div style={currentStyles.tabs}>
        <button 
          style={{...currentStyles.tab, ...(activeTab === 'js' ? currentStyles.activeTab : {})}}
          onClick={() => setActiveTab('js')}
        >
          JavaScript
        </button>
        <button 
          style={{...currentStyles.tab, ...(activeTab === 'py' ? currentStyles.activeTab : {})}}
          onClick={() => setActiveTab('py')}
        >
          Python
        </button>
        <button 
          style={{...currentStyles.tab, ...(activeTab === 'cs' ? currentStyles.activeTab : {})}}
          onClick={() => setActiveTab('cs')}
        >
          C#
        </button>
      </div>

      <div style={currentStyles.content}>
        <div style={currentStyles.codeBlockWrapper}>
          <button 
            style={currentStyles.copyButton}
            onClick={() => handleCopy(codeExamples[activeTab].stack, activeTab)}
            title="Копировать код"
          >
            {copiedTab === activeTab ? '✓ Скопировано!' : '📋 Копировать'}
          </button>
          <pre style={currentStyles.codeBlock}>
            <code>{codeExamples[activeTab].stack}</code>
          </pre>
        </div>
        
        <div style={currentStyles.visualContainer}>
          {/* Визуализация стека */}
          <div style={currentStyles.stackContainer}>
            {/* Базовая пластина */}
            <div style={currentStyles.stackBase}></div>
            
            {/* Пластины-разделители (визуальный эффект) */}
            {Array.from({ length: Math.min(5, Math.max(2, stack.length + 1)) }).map((_, i) => (
              <div key={`plate-${i}`} style={currentStyles.stackPlate}></div>
            ))}
            
            {/* Элементы стека */}
            {stack.slice().reverse().map((item, index) => (
              <div 
                key={index} 
                style={{
                  ...currentStyles.elementBox,
                  transform: animationStep === 'push' && index === 0 ? 'translateY(-20px)' : 'none',
                  opacity: animationStep === 'pop' && index === 0 ? '0.5' : '1',
                  boxShadow: animationStep === 'push' && index === 0 ? '0 8px 12px rgba(37, 99, 235, 0.3)' : '0 4px 6px rgba(0,0,0,0.1)'
                }}
              >
                {item}
              </div>
            ))}
            
            {/* Если стек пуст */}
            {stack.length === 0 && (
              <div style={{...currentStyles.elementBox, borderColor: '#ccc', color: '#999', fontStyle: 'italic'}}>
                Пусто
              </div>
            )}
          </div>

          {/* Панель управления */}
          <div style={currentStyles.actionButtons}>
            <div style={currentStyles.inputGroup}>
              <input 
                type="text" 
                value={tempValue}
                onChange={(e) => setTempValue(e.target.value)}
                placeholder="Введите значение..."
                style={currentStyles.input}
                onKeyPress={(e) => e.key === 'Enter' && handlePush()}
              />
              <button 
                style={{
                  ...currentStyles.btn, 
                  ...currentStyles.pushBtn,
                  ...(!tempValue.trim() ? currentStyles.disabledBtn : {})
                }}
                onClick={handlePush}
                disabled={!tempValue.trim()}
              >
                Push (+)
              </button>
              <button 
                style={{
                  ...currentStyles.btn, 
                  ...currentStyles.popBtn,
                  ...(stack.length === 0 ? currentStyles.disabledBtn : {})
                }}
                onClick={handlePop}
                disabled={stack.length === 0}
              >
                Pop (-)
              </button>
            </div>
          </div>
          
          {/* Индикатор количества элементов для мобильных устройств */}
          <div style={{fontSize: '12px', color: '#666', marginTop: '10px'}}>
            В стеке элементов: {stack.length}
          </div>
        </div>

        <div style={currentStyles.infoBox}>
          <div style={currentStyles.infoTitle}>Как это работает:</div>
          <div style={currentStyles.infoText}>
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

export default DataStructureStack;