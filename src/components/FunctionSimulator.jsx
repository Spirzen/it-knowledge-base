import React, { useState, useEffect } from 'react';

const FunctionSimulator = () => {
  const [step, setStep] = useState(0);
  const [animationActive, setAnimationActive] = useState(false);
  const [callArg, setCallArg] = useState(5);
  const [result, setResult] = useState(null);

  const steps = [
    { 
      description: "1. Начало выполнения — код читается сверху вниз",
      highlight: "start",
      callStack: [],
      showReturn: false,
      currentValue: null
    },
    { 
      description: "2. Объявление функции — код перепрыгивает через тело функции",
      highlight: "definition",
      callStack: [],
      showReturn: false,
      currentValue: null
    },
    { 
      description: "3. Вызов функции — подстановка аргумента (5) в параметр x",
      highlight: "call",
      callStack: [],
      showReturn: false,
      currentValue: null
    },
    { 
      description: "4. Погружение в функцию — параметр x получает значение 5",
      highlight: "enter",
      callStack: [{ name: "double", param: 5, line: "return x * 2" }],
      showReturn: false,
      currentValue: null
    },
    { 
      description: "5. Выполнение тела функции — вычисление x * 2",
      highlight: "body",
      callStack: [{ name: "double", param: 5, line: "return x * 2" }],
      showReturn: false,
      currentValue: "5 * 2 = 10"
    },
    { 
      description: "6. Возврат результата — функция возвращает 10",
      highlight: "return",
      callStack: [],
      showReturn: true,
      returnValue: 10,
      currentValue: null
    },
    { 
      description: "7. Результат записывается в переменную num и выводится",
      highlight: "result",
      callStack: [],
      showReturn: false,
      currentValue: null,
      finalResult: 10
    }
  ];

  const handleRun = () => {
    setAnimationActive(true);
    setResult(null);
    setStep(0);
  };

  useEffect(() => {
    if (animationActive && step < steps.length) {
      const timer = setTimeout(() => {
        setStep(step + 1);
        if (step + 1 === steps.length) {
          setResult(steps[step]?.finalResult || null);
          setAnimationActive(false);
        }
      }, 1800);
      return () => clearTimeout(timer);
    }
  }, [step, animationActive]);

  const currentStep = steps[step] || steps[steps.length - 1];

  const getLineStyle = (lineType) => {
    const baseStyle = { 
      padding: '8px', 
      margin: '4px 0', 
      borderRadius: '6px', 
      transition: 'all 0.3s',
      fontSize: 'clamp(12px, 3vw, 14px)'
    };
    if (!animationActive) return { ...baseStyle, opacity: 0.7 };
    
    if (currentStep.highlight === lineType) {
      return { ...baseStyle, backgroundColor: '#ffd700', color: '#1e1e1e', transform: 'scale(1.02)', boxShadow: '0 2px 8px rgba(0,0,0,0.2)' };
    }
    if (currentStep.highlight === 'definition' && lineType === 'definition') {
      return { ...baseStyle, backgroundColor: '#ffd700', color: '#1e1e1e' };
    }
    if (lineType === 'normal') return { ...baseStyle, backgroundColor: '#2d2d2d' };
    return { ...baseStyle, backgroundColor: '#1e1e1e' };
  };

  return (
    <div style={{
      backgroundColor: '#1e1e1e',
      borderRadius: 'clamp(8px, 4vw, 12px)',
      padding: 'clamp(12px, 4vw, 20px)',
      margin: 'clamp(10px, 3vw, 20px) 0',
      color: '#d4d4d4',
      fontFamily: "'Fira Code', 'Consolas', monospace",
      border: '1px solid #333',
      maxWidth: '1200px',
      width: '100%',
      boxSizing: 'border-box'
    }}>
      <div style={{ 
        marginBottom: 'clamp(15px, 4vw, 20px)', 
        padding: 'clamp(8px, 3vw, 10px)', 
        backgroundColor: '#2d2d2d', 
        borderRadius: '8px' 
      }}>
        <h3 style={{ 
          margin: '0 0 10px 0', 
          color: '#ffd700',
          fontSize: 'clamp(16px, 5vw, 20px)'
        }}>
          ⚡ Симулятор выполнения функции
        </h3>
        <p style={{ 
          margin: 0, 
          fontSize: 'clamp(12px, 3.5vw, 14px)',
          lineHeight: '1.4'
        }}>
          Функция получает число, удваивает его и возвращает результат
        </p>
      </div>

      {/* Код с подсветкой */}
      <div style={{
        backgroundColor: '#252526',
        borderRadius: '8px',
        padding: 'clamp(10px, 3vw, 15px)',
        marginBottom: 'clamp(15px, 4vw, 20px)',
        borderLeft: `4px solid ${currentStep.highlight ? '#ffd700' : '#007acc'}`,
        transition: 'border-left-color 0.3s',
        overflowX: 'auto'
      }}>
        <div style={{ minWidth: '200px' }}>
          <div style={getLineStyle('start')}>
            <span style={{ color: '#569cd6' }}>1</span>  <span style={{ color: '#9cdcfe' }}>// Программа начинает выполнение</span>
          </div>
          <div style={{ margin: '10px 0', height: '1px', backgroundColor: '#333' }} />
          
          <div style={getLineStyle('definition')}>
            <span style={{ color: '#569cd6' }}>2</span>  <span style={{ color: '#c586c0' }}>def</span> <span style={{ color: '#dcdcaa' }}>double</span>(<span style={{ color: '#9cdcfe' }}>x</span>):
          </div>
          
          <div style={{ paddingLeft: 'clamp(15px, 5vw, 25px)', ...getLineStyle(currentStep.highlight === 'definition' ? 'definition' : 'normal') }}>
            <span style={{ color: '#569cd6' }}>3</span>      <span style={{ color: '#c586c0' }}>return</span> <span style={{ color: '#9cdcfe' }}>x</span> * 2
          </div>
          
          <div style={getLineStyle('normal')}>
            <span style={{ color: '#569cd6' }}>4</span>  
          </div>
          
          <div style={getLineStyle('call')}>
            <span style={{ color: '#569cd6' }}>5</span>  <span style={{ color: '#9cdcfe' }}>num</span> = <span style={{ color: '#dcdcaa' }}>double</span>({callArg})
          </div>
          
          <div style={getLineStyle('result')}>
            <span style={{ color: '#569cd6' }}>6</span>  <span style={{ color: '#9cdcfe' }}>print</span>(num)
          </div>
        </div>
      </div>

      {/* Визуализация стека вызовов */}
      <div style={{
        backgroundColor: '#2d2d2d',
        borderRadius: '8px',
        padding: 'clamp(10px, 3vw, 15px)',
        marginBottom: 'clamp(15px, 4vw, 20px)'
      }}>
        <h4 style={{ 
          margin: '0 0 10px 0', 
          color: '#ffd700', 
          fontSize: 'clamp(13px, 4vw, 14px)' 
        }}>
          Стек вызовов
        </h4>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {currentStep.callStack.length === 0 ? (
            <div style={{ color: '#6a9955', fontSize: 'clamp(11px, 3vw, 12px)' }}>
              Стек пуст — функция не выполняется или уже завершилась
            </div>
          ) : (
            currentStep.callStack.map((frame, idx) => (
              <div key={idx} style={{
                backgroundColor: '#1e1e1e',
                padding: 'clamp(6px, 2.5vw, 8px) clamp(8px, 3vw, 12px)',
                borderRadius: '6px',
                borderLeft: '3px solid #ffd700',
                fontSize: 'clamp(11px, 3vw, 13px)',
                wordBreak: 'break-word'
              }}>
                <span style={{ color: '#dcdcaa' }}>{frame.name}</span>
                <span style={{ color: '#858585' }}>(</span>
                <span style={{ color: '#9cdcfe' }}>x = {frame.param}</span>
                <span style={{ color: '#858585' }}>)</span>
                <span style={{ color: '#858585', marginLeft: 'clamp(5px, 2vw, 10px)' }}>→ {frame.line}</span>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Анимация передачи значения */}
      {(currentStep.currentValue || currentStep.showReturn) && (
        <div style={{
          backgroundColor: '#2d2d2d',
          borderRadius: '8px',
          padding: 'clamp(10px, 3vw, 15px)',
          marginBottom: 'clamp(15px, 4vw, 20px)',
          animation: 'pulse 0.5s ease-in-out'
        }}>
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            gap: 'clamp(8px, 4vw, 15px)', 
            flexWrap: 'wrap',
            flexDirection: 'column',
            '@media (min-width: 480px)': {
              flexDirection: 'row'
            }
          }}>
            {currentStep.currentValue && (
              <>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: 'clamp(10px, 3vw, 12px)', color: '#858585' }}>Аргумент</div>
                  <div style={{
                    backgroundColor: '#007acc',
                    borderRadius: '50%',
                    width: 'clamp(40px, 15vw, 50px)',
                    height: 'clamp(40px, 15vw, 50px)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 'bold',
                    fontSize: 'clamp(16px, 5vw, 20px)'
                  }}>{callArg}</div>
                </div>
                <div style={{ fontSize: 'clamp(18px, 6vw, 24px)', color: '#ffd700', transform: 'rotate(90deg) scaleX(0.5)',
                  '@media (min-width: 480px)': { transform: 'none' }
                }}>→</div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: 'clamp(10px, 3vw, 12px)', color: '#858585' }}>Вычисление</div>
                  <div style={{
                    backgroundColor: '#6a9955',
                    borderRadius: '8px',
                    padding: 'clamp(8px, 2.5vw, 10px)',
                    fontWeight: 'bold',
                    fontSize: 'clamp(12px, 3.5vw, 14px)'
                  }}>{currentStep.currentValue}</div>
                </div>
              </>
            )}
            {currentStep.showReturn && (
              <>
                <div style={{ fontSize: 'clamp(18px, 6vw, 24px)', color: '#ffd700', transform: 'rotate(90deg) scaleX(0.5)',
                  '@media (min-width: 480px)': { transform: 'none' }
                }}>←</div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: 'clamp(10px, 3vw, 12px)', color: '#858585' }}>Результат</div>
                  <div style={{
                    backgroundColor: '#d4d4d4',
                    borderRadius: '50%',
                    width: 'clamp(40px, 15vw, 50px)',
                    height: 'clamp(40px, 15vw, 50px)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 'bold',
                    fontSize: 'clamp(16px, 5vw, 20px)',
                    color: '#1e1e1e'
                  }}>{currentStep.returnValue}</div>
                </div>
              </>
            )}
          </div>
        </div>
      )}

      {/* Статус выполнения */}
      <div style={{
        backgroundColor: '#252526',
        borderRadius: '8px',
        padding: 'clamp(10px, 3vw, 15px)',
        marginBottom: 'clamp(15px, 4vw, 20px)'
      }}>
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center', 
          flexWrap: 'wrap', 
          gap: '10px',
          flexDirection: 'column',
          '@media (min-width: 768px)': {
            flexDirection: 'row'
          }
        }}>
          <div style={{ 
            fontSize: 'clamp(12px, 3.5vw, 14px)',
            textAlign: 'center',
            '@media (min-width: 768px)': {
              textAlign: 'left'
            }
          }}>
            <span style={{ color: '#ffd700' }}>📌 Текущий шаг: </span>
            <span>{currentStep.description}</span>
          </div>
          {result !== null && (
            <div style={{
              backgroundColor: '#6a9955',
              padding: '5px 10px',
              borderRadius: '6px',
              fontWeight: 'bold',
              fontSize: 'clamp(12px, 3.5vw, 14px)',
              width: 'fit-content'
            }}>
              ✓ Результат: num = {result}
            </div>
          )}
        </div>
      </div>

      {/* Прогресс-бар */}
      <div style={{ marginBottom: 'clamp(10px, 3vw, 15px)' }}>
        <div style={{
          height: '4px',
          backgroundColor: '#333',
          borderRadius: '2px',
          overflow: 'hidden'
        }}>
          <div style={{
            width: `${(step / steps.length) * 100}%`,
            height: '100%',
            backgroundColor: '#ffd700',
            transition: 'width 0.3s ease'
          }} />
        </div>
      </div>

      {/* Кнопки управления */}
      <div style={{ 
        display: 'flex', 
        gap: 'clamp(8px, 3vw, 10px)', 
        flexDirection: 'column',
        '@media (min-width: 480px)': {
          flexDirection: 'row',
          alignItems: 'center'
        }
      }}>
        <button
          onClick={handleRun}
          disabled={animationActive}
          style={{
            backgroundColor: animationActive ? '#555' : '#007acc',
            color: 'white',
            border: 'none',
            padding: 'clamp(8px, 3vw, 10px) clamp(15px, 5vw, 20px)',
            borderRadius: '6px',
            cursor: animationActive ? 'not-allowed' : 'pointer',
            fontSize: 'clamp(14px, 4vw, 16px)',
            transition: 'background-color 0.3s',
            width: '100%',
            '@media (min-width: 480px)': {
              width: 'auto'
            }
          }}
          onMouseEnter={(e) => !animationActive && (e.target.style.backgroundColor = '#005a9e')}
          onMouseLeave={(e) => !animationActive && (e.target.style.backgroundColor = '#007acc')}
        >
          {animationActive ? '🔄 Выполняется...' : '▶️ Запустить симуляцию'}
        </button>
        
        <div style={{ 
          display: 'flex', 
          gap: '8px', 
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          '@media (min-width: 480px)': {
            width: 'auto'
          }
        }}>
          <span style={{ fontSize: 'clamp(11px, 3.5vw, 12px)', color: '#858585' }}>Аргумент:</span>
          <input
            type="number"
            value={callArg}
            onChange={(e) => setCallArg(parseInt(e.target.value) || 0)}
            disabled={animationActive}
            style={{
              backgroundColor: '#2d2d2d',
              color: '#d4d4d4',
              border: '1px solid #555',
              borderRadius: '4px',
              padding: 'clamp(5px, 2vw, 6px)',
              width: 'clamp(60px, 20vw, 70px)',
              textAlign: 'center',
              fontSize: 'clamp(12px, 3.5vw, 14px)'
            }}
          />
        </div>
      </div>

      <style>
        {`
          @keyframes pulse {
            0%, 100% { opacity: 1; transform: scale(1); }
            50% { opacity: 0.8; transform: scale(1.02); background-color: #3a3a3a; }
          }
          
          @media (max-width: 480px) {
            .responsive-text {
              font-size: 12px;
            }
          }
          
          @media (min-width: 481px) and (max-width: 768px) {
            .responsive-text {
              font-size: 13px;
            }
          }
          
          @media (min-width: 769px) {
            .responsive-text {
              font-size: 14px;
            }
          }
        `}
      </style>
    </div>
  );
};

export default FunctionSimulator;