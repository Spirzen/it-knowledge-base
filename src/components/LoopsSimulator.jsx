import React, { useState, useEffect } from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';

const LoopsSimulator = () => {
  const [activeLoop, setActiveLoop] = useState('for');
  const [isRunning, setIsRunning] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [loopOutput, setLoopOutput] = useState([]);
  const [loopIndex, setLoopIndex] = useState(0);
  
  const loopsData = {
    for: {
      title: "Цикл с фиксированным числом повторений (for)",
      description: "Выполняется заранее известное количество раз — от 1 до 5",
      code: `for (let i = 1; i <= 5; i++) {
    console.log("Итерация:", i);
    // Выполняется 5 раз
}`,
      iterations: 5,
      execute: (step) => ({ message: `Итерация ${step}`, value: step }),
      finalMessage: (output) => `Выполнено ${output.length} итераций`
    },
    while: {
      title: "Цикл с условием (while)",
      description: "Выполняется, пока счётчик меньше или равен 5",
      code: `let counter = 1;
while (counter <= 5) {
    console.log("Счётчик:", counter);
    counter++;
    // Выполняется, пока условие истинно
}`,
      iterations: 5,
      execute: (step) => ({ message: `Счётчик = ${step}`, value: step }),
      finalMessage: (output) => `Цикл завершён, счётчик = ${output.length + 1}`
    },
    collection: {
      title: "Цикл для обработки коллекций (foreach)",
      description: "Проходит по всем элементам массива",
      code: `const numbers = [10, 20, 30, 40, 50];
let sum = 0;

for (const num of numbers) {
    sum += num;
    console.log("Текущая сумма:", sum);
    // Проход по каждому элементу
}`,
      iterations: 5,
      items: ["10", "20", "30", "40", "50"],
      execute: (step, items) => ({ 
        message: `Добавлен ${items[step-1]}, сумма = ${items.slice(0, step).reduce((a,b) => a + parseInt(b), 0)}`,
        value: parseInt(items[step-1]),
        sum: items.slice(0, step).reduce((a,b) => a + parseInt(b), 0)
      }),
      finalMessage: (output) => `Общая сумма: ${output[output.length-1]?.sum || 0}`
    }
  };

  const currentData = loopsData[activeLoop];

  const handleRun = () => {
    setIsRunning(true);
    setCurrentStep(0);
    setLoopOutput([]);
    setLoopIndex(0);
  };

  const handleReset = () => {
    setIsRunning(false);
    setCurrentStep(0);
    setLoopOutput([]);
    setLoopIndex(0);
  };

  useEffect(() => {
    if (isRunning && currentStep < currentData.iterations) {
      const timer = setTimeout(() => {
        const stepNum = currentStep + 1;
        let result;
        
        if (activeLoop === 'collection') {
          result = currentData.execute(stepNum, currentData.items);
        } else {
          result = currentData.execute(stepNum);
        }
        
        setLoopOutput(prev => [...prev, result]);
        setLoopIndex(stepNum);
        setCurrentStep(stepNum);
      }, 1000);
      
      return () => clearTimeout(timer);
    } else if (isRunning && currentStep === currentData.iterations) {
      setIsRunning(false);
    }
  }, [isRunning, currentStep, currentData, activeLoop]);

  const renderContent = () => (
    <div style={{
      backgroundColor: '#1e1e1e',
      borderRadius: '12px',
      padding: 'clamp(15px, 4vw, 20px)',
      margin: 'clamp(10px, 3vw, 20px) 0',
      color: '#d4d4d4',
      fontFamily: "'Fira Code', 'Consolas', monospace",
      border: '1px solid #333',
      maxWidth: '1200px',
      width: '100%',
      boxSizing: 'border-box'
    }}>
      <style>
        {`
          @keyframes pulse {
            0%, 100% { transform: scale(1); opacity: 1; }
            50% { transform: scale(1.1); opacity: 0.8; }
          }
          @keyframes fadeIn {
            from { opacity: 0; transform: translateX(-10px); }
            to { opacity: 1; transform: translateX(0); }
          }
          
          @media (max-width: 768px) {
            .code-block {
              font-size: 12px;
              overflow-x: auto;
            }
            .iteration-box {
              width: 32px !important;
              height: 32px !important;
              font-size: 12px !important;
            }
          }
          
          @media (max-width: 480px) {
            .iteration-box {
              width: 28px !important;
              height: 28px !important;
              font-size: 11px !important;
            }
            .button-text {
              font-size: 13px !important;
            }
          }
        `}
      </style>

      {/* Заголовок */}
      <div style={{ 
        marginBottom: 'clamp(15px, 4vw, 20px)', 
        padding: 'clamp(8px, 3vw, 10px)', 
        backgroundColor: '#2d2d2d', 
        borderRadius: '8px' 
      }}>
        <h3 style={{ 
          margin: '0 0 10px 0', 
          color: '#ffd700', 
          fontSize: 'clamp(18px, 5vw, 24px)' 
        }}>
          Симулятор циклов
        </h3>
        <p style={{ 
          margin: 0, 
          fontSize: 'clamp(12px, 3.5vw, 14px)' 
        }}>
          Наглядная демонстрация работы трёх основных типов циклов в программировании
        </p>
      </div>

      {/* Выбор типа цикла */}
      <div style={{ 
        display: 'flex', 
        gap: 'clamp(8px, 2vw, 10px)', 
        marginBottom: 'clamp(15px, 4vw, 20px)', 
        flexWrap: 'wrap' 
      }}>
        <button
          onClick={() => { setActiveLoop('for'); handleReset(); }}
          style={{
            flex: '1 1 auto',
            minWidth: 'fit-content',
            backgroundColor: activeLoop === 'for' ? '#007acc' : '#2d2d2d',
            color: 'white',
            border: 'none',
            padding: 'clamp(8px, 2.5vw, 10px) clamp(12px, 3vw, 20px)',
            borderRadius: '6px',
            cursor: 'pointer',
            fontSize: 'clamp(12px, 3.5vw, 14px)',
            transition: 'all 0.3s',
            whiteSpace: 'nowrap'
          }}
        >
          <span className="button-text">For (фиксированное число)</span>
        </button>
        <button
          onClick={() => { setActiveLoop('while'); handleReset(); }}
          style={{
            flex: '1 1 auto',
            minWidth: 'fit-content',
            backgroundColor: activeLoop === 'while' ? '#007acc' : '#2d2d2d',
            color: 'white',
            border: 'none',
            padding: 'clamp(8px, 2.5vw, 10px) clamp(12px, 3vw, 20px)',
            borderRadius: '6px',
            cursor: 'pointer',
            fontSize: 'clamp(12px, 3.5vw, 14px)',
            transition: 'all 0.3s',
            whiteSpace: 'nowrap'
          }}
        >
          <span className="button-text">While (с условием)</span>
        </button>
        <button
          onClick={() => { setActiveLoop('collection'); handleReset(); }}
          style={{
            flex: '1 1 auto',
            minWidth: 'fit-content',
            backgroundColor: activeLoop === 'collection' ? '#007acc' : '#2d2d2d',
            color: 'white',
            border: 'none',
            padding: 'clamp(8px, 2.5vw, 10px) clamp(12px, 3vw, 20px)',
            borderRadius: '6px',
            cursor: 'pointer',
            fontSize: 'clamp(12px, 3.5vw, 14px)',
            transition: 'all 0.3s',
            whiteSpace: 'nowrap'
          }}
        >
          <span className="button-text">Foreach (коллекции)</span>
        </button>
      </div>

      {/* Описание цикла */}
      <div style={{
        backgroundColor: '#252526',
        borderRadius: '8px',
        padding: 'clamp(12px, 3vw, 15px)',
        marginBottom: 'clamp(15px, 4vw, 20px)'
      }}>
        <h4 style={{ 
          margin: '0 0 5px 0', 
          color: '#ffd700', 
          fontSize: 'clamp(14px, 4vw, 16px)' 
        }}>
          {currentData.title}
        </h4>
        <p style={{ 
          margin: 0, 
          fontSize: 'clamp(12px, 3.5vw, 13px)', 
          color: '#858585' 
        }}>
          {currentData.description}
        </p>
      </div>

      {/* Код с подсветкой выполнения */}
      <div style={{
        backgroundColor: '#252526',
        borderRadius: '8px',
        padding: 'clamp(12px, 3vw, 15px)',
        marginBottom: 'clamp(15px, 4vw, 20px)',
        borderLeft: `4px solid ${isRunning ? '#ffd700' : '#007acc'}`,
        transition: 'border-left-color 0.3s',
        overflowX: 'auto'
      }} className="code-block">
        <div style={{ minWidth: '300px' }}>
          {currentData.code.split('\n').map((line, idx) => {
            const isHighlighted = (idx === 1 && currentStep > 0 && currentStep <= currentData.iterations) ||
                                 (idx === 2 && currentStep > 0 && currentData.iterations);
            return (
              <div key={idx} style={{
                padding: 'clamp(2px, 1vw, 4px) 0',
                backgroundColor: isHighlighted ? '#3a3a3a' : 'transparent',
                borderLeft: isHighlighted ? '3px solid #ffd700' : 'none',
                paddingLeft: isHighlighted ? '10px' : '0',
                transition: 'all 0.3s',
                fontSize: 'clamp(12px, 3.5vw, 14px)'
              }}>
                <span style={{ color: '#569cd6', userSelect: 'none' }}>{String(idx + 1).padStart(2, ' ')}</span>
                <span style={{ color: '#d4d4d4', marginLeft: '10px', wordBreak: 'break-word' }}>{line}</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Визуализация выполнения */}
      <div style={{
        backgroundColor: '#2d2d2d',
        borderRadius: '8px',
        padding: 'clamp(12px, 3vw, 15px)',
        marginBottom: 'clamp(15px, 4vw, 20px)'
      }}>
        <h4 style={{ 
          margin: '0 0 10px 0', 
          color: '#ffd700', 
          fontSize: 'clamp(12px, 3.5vw, 14px)' 
        }}>
          {isRunning ? 'Выполнение цикла...' : loopOutput.length > 0 ? 'Цикл завершён' : 'Нажмите "Запустить" для демонстрации'}
        </h4>
        
        {/* Визуальный индикатор итераций */}
        <div style={{ 
          display: 'flex', 
          gap: 'clamp(6px, 2vw, 8px)', 
          marginBottom: 'clamp(15px, 4vw, 20px)', 
          flexWrap: 'wrap',
          justifyContent: 'center'
        }}>
          {Array.from({ length: currentData.iterations }).map((_, idx) => (
            <div
              key={idx}
              className="iteration-box"
              style={{
                width: 'clamp(35px, 8vw, 40px)',
                height: 'clamp(35px, 8vw, 40px)',
                borderRadius: '8px',
                backgroundColor: idx < currentStep ? '#6a9955' : '#3a3a3a',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 'bold',
                fontSize: 'clamp(14px, 4vw, 16px)',
                transition: 'all 0.3s',
                animation: idx === currentStep - 1 && isRunning ? 'pulse 0.5s ease-in-out' : 'none'
              }}
            >
              {idx + 1}
            </div>
          ))}
        </div>

        {/* Лог выполнения */}
        {loopOutput.length > 0 && (
          <div style={{
            backgroundColor: '#1e1e1e',
            borderRadius: '6px',
            padding: 'clamp(8px, 2.5vw, 10px)',
            maxHeight: '200px',
            overflowY: 'auto'
          }}>
            <div style={{ fontSize: 'clamp(11px, 3vw, 12px)', color: '#858585', marginBottom: '8px' }}>
              Лог выполнения:
            </div>
            {loopOutput.map((output, idx) => (
              <div key={idx} style={{
                padding: 'clamp(4px, 1.5vw, 6px)',
                margin: '4px 0',
                backgroundColor: '#252526',
                borderRadius: '4px',
                fontFamily: 'monospace',
                fontSize: 'clamp(11px, 3vw, 13px)',
                animation: 'fadeIn 0.3s ease-in',
                wordBreak: 'break-word'
              }}>
                <span style={{ color: '#ffd700' }}>→ Итерация {idx + 1}:</span> {output.message}
              </div>
            ))}
            {!isRunning && currentStep === currentData.iterations && (
              <div style={{
                marginTop: '10px',
                padding: 'clamp(6px, 2vw, 8px)',
                backgroundColor: '#6a9955',
                borderRadius: '4px',
                textAlign: 'center',
                fontWeight: 'bold',
                fontSize: 'clamp(12px, 3.5vw, 14px)'
              }}>
                {currentData.finalMessage(loopOutput)}
              </div>
            )}
          </div>
        )}
      </div>

      {/* Блок с пояснениями */}
      <div style={{
        backgroundColor: '#252526',
        borderRadius: '8px',
        padding: 'clamp(12px, 3vw, 15px)',
        marginBottom: 'clamp(15px, 4vw, 20px)',
        borderLeft: '3px solid #ffd700'
      }}>
        <h4 style={{ 
          margin: '0 0 8px 0', 
          color: '#ffd700', 
          fontSize: 'clamp(12px, 3.5vw, 14px)' 
        }}>
          Как работает этот цикл:
        </h4>
        <ul style={{ 
          margin: 0, 
          paddingLeft: 'clamp(16px, 4vw, 20px)', 
          fontSize: 'clamp(12px, 3.5vw, 13px)' 
        }}>
          {activeLoop === 'for' && (
            <>
              <li><strong style={{ color: '#9cdcfe' }}>Инициализация</strong> — <code style={{ backgroundColor: '#1e1e1e', padding: '2px 4px', wordBreak: 'break-word' }}>let i = 1</code> (счётчик стартует с 1)</li>
              <li><strong style={{ color: '#9cdcfe' }}>Проверка условия</strong> — <code style={{ backgroundColor: '#1e1e1e', padding: '2px 4px', wordBreak: 'break-word' }}>i &lt;= 5</code> (пока условие истинно)</li>
              <li><strong style={{ color: '#9cdcfe' }}>Тело цикла</strong> — выполняется основное действие</li>
              <li><strong style={{ color: '#9cdcfe' }}>Инкремент</strong> — <code style={{ backgroundColor: '#1e1e1e', padding: '2px 4px', wordBreak: 'break-word' }}>i++</code> (увеличение счётчика)</li>
              <li><strong style={{ color: '#9cdcfe' }}>Завершение</strong> — когда i становится 6, условие ложно, цикл останавливается</li>
            </>
          )}
          {activeLoop === 'while' && (
            <>
              <li><strong style={{ color: '#9cdcfe' }}>Инициализация</strong> — <code style={{ backgroundColor: '#1e1e1e', padding: '2px 4px', wordBreak: 'break-word' }}>let counter = 1</code> (счётчик до цикла)</li>
              <li><strong style={{ color: '#9cdcfe' }}>Проверка условия</strong> — <code style={{ backgroundColor: '#1e1e1e', padding: '2px 4px', wordBreak: 'break-word' }}>counter &lt;= 5</code> (проверка перед каждой итерацией)</li>
              <li><strong style={{ color: '#9cdcfe' }}>Тело цикла</strong> — выполняется, если условие истинно</li>
              <li><strong style={{ color: '#9cdcfe' }}>Изменение счётчика</strong> — <code style={{ backgroundColor: '#1e1e1e', padding: '2px 4px', wordBreak: 'break-word' }}>counter++</code> (важно, чтобы избежать бесконечного цикла!)</li>
            </>
          )}
          {activeLoop === 'collection' && (
            <>
              <li><strong style={{ color: '#9cdcfe' }}>Коллекция</strong> — массив <code style={{ backgroundColor: '#1e1e1e', padding: '2px 4px', wordBreak: 'break-word' }}>[10, 20, 30, 40, 50]</code></li>
              <li><strong style={{ color: '#9cdcfe' }}>Переменная-элемент</strong> — <code style={{ backgroundColor: '#1e1e1e', padding: '2px 4px', wordBreak: 'break-word' }}>num</code> получает значение текущего элемента</li>
              <li><strong style={{ color: '#9cdcfe' }}>Обход</strong> — цикл автоматически проходит по всем элементам</li>
              <li><strong style={{ color: '#9cdcfe' }}>Операция</strong> — накопление суммы: <code style={{ backgroundColor: '#1e1e1e', padding: '2px 4px', wordBreak: 'break-word' }}>sum += num</code></li>
              <li><strong style={{ color: '#9cdcfe' }}>Завершение</strong> — после последнего элемента цикл автоматически останавливается</li>
            </>
          )}
        </ul>
      </div>

      {/* Управление */}
      <div style={{ display: 'flex', gap: 'clamp(8px, 2vw, 10px)', flexWrap: 'wrap' }}>
        <button
          onClick={handleRun}
          disabled={isRunning}
          style={{
            flex: '1 1 auto',
            backgroundColor: isRunning ? '#555' : '#007acc',
            color: 'white',
            border: 'none',
            padding: 'clamp(8px, 2.5vw, 10px) clamp(16px, 4vw, 20px)',
            borderRadius: '6px',
            cursor: isRunning ? 'not-allowed' : 'pointer',
            fontSize: 'clamp(14px, 4vw, 16px)',
            transition: 'background-color 0.3s',
            fontWeight: '500'
          }}
        >
          {isRunning ? 'Выполняется...' : 'Запустить цикл'}
        </button>
        
        <button
          onClick={handleReset}
          style={{
            flex: '1 1 auto',
            backgroundColor: '#6c757d',
            color: 'white',
            border: 'none',
            padding: 'clamp(8px, 2.5vw, 10px) clamp(16px, 4vw, 20px)',
            borderRadius: '6px',
            cursor: 'pointer',
            fontSize: 'clamp(14px, 4vw, 16px)',
            transition: 'background-color 0.3s',
            fontWeight: '500'
          }}
          onMouseEnter={(e) => e.target.style.backgroundColor = '#5a6268'}
          onMouseLeave={(e) => e.target.style.backgroundColor = '#6c757d'}
        >
          🔄 Сбросить
        </button>
      </div>

      {/* Прогресс-бар */}
      {isRunning && (
        <div style={{ marginTop: 'clamp(12px, 3vw, 15px)' }}>
          <div style={{
            height: '4px',
            backgroundColor: '#333',
            borderRadius: '2px',
            overflow: 'hidden'
          }}>
            <div style={{
              width: `${(currentStep / currentData.iterations) * 100}%`,
              height: '100%',
              backgroundColor: '#ffd700',
              transition: 'width 0.3s ease'
            }} />
          </div>
          <div style={{ 
            textAlign: 'center', 
            marginTop: '5px', 
            fontSize: 'clamp(11px, 3vw, 12px)', 
            color: '#858585' 
          }}>
            Итерация {currentStep} из {currentData.iterations}
          </div>
        </div>
      )}
    </div>
  );

  return (
    <BrowserOnly fallback={<div style={{ padding: '20px', color: '#d4d4d4' }}>Загрузка симулятора...</div>}>
      {() => renderContent()}
    </BrowserOnly>
  );
};

export default LoopsSimulator;