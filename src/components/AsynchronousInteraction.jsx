import React, { useState, useRef } from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';

const COLORS = {
  primary: '#007bff',
  secondary: '#6f42c1',
  success: '#28a745',
  neutral: '#6c757d',
  bg: '#f8f9fa',
  text: '#343a40',
  border: '#dee2e6',
  buttonBg: '#007bff',
  buttonHover: '#0056b3',
};

const STAGES = [
  { id: 'initiate', label: 'ОТПРАВКА ЗАПРОСА', color: COLORS.primary, duration: 1000 },
  { 
    id: 'async_wait', 
    label: 'ОБРАБОТКА НА СЕРВЕРЕ (НЕ БЛОКИРУЕТ РАБОТУ)', 
    color: COLORS.secondary, 
    duration: 3500 
  },
  { id: 'notify', label: 'ПОЛУЧЕНИЕ ОТВЕТА', color: COLORS.success, duration: 1000 },
];

const AsynchronousInteraction = () => {
  const [currentStageIndex, setCurrentStageIndex] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  
  const timerRef = useRef(null);

  const clearTimer = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  };

  const startAnimation = () => {
    if (isAnimating || isCompleted) return;

    setIsAnimating(true);
    setIsCompleted(false);
    setCurrentStageIndex(0);

    let currentIndex = 0;

    const runNextStep = () => {
      if (currentIndex >= STAGES.length) {
        setIsAnimating(false);
        setIsCompleted(true);
        return;
      }

      const stage = STAGES[currentIndex];
      
      setCurrentStageIndex(currentIndex);

      const nextTimer = setTimeout(() => {
        currentIndex += 1;
        runNextStep();
      }, stage.duration);

      timerRef.current = nextTimer;
    };

    runNextStep();
  };

  const resetAnimation = () => {
    clearTimer();
    setIsAnimating(false);
    setIsCompleted(false);
    setCurrentStageIndex(0);
  };

  React.useEffect(() => {
    return () => {
      clearTimer();
    };
  }, []);

  const getContainerStyle = () => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 'clamp(20px, 5vw, 40px)',
    backgroundColor: COLORS.bg,
    borderRadius: '12px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
    maxWidth: 'min(90%, 800px)',
    margin: 'clamp(10px, 3vw, 20px) auto',
    border: `1px solid ${COLORS.border}`,
    width: '100%',
    boxSizing: 'border-box',
  });

  const getStatusRowStyle = (isActive, type) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 'clamp(15px, 4vw, 20px)',
    padding: 'clamp(10px, 3vw, 15px)',
    borderRadius: '8px',
    backgroundColor: isActive ? (type === 'client' ? '#e7f1ff' : '#e8f5e9') : '#ffffff',
    border: `1px solid ${isActive ? (type === 'client' ? COLORS.primary : COLORS.secondary) : COLORS.border}`,
    transition: 'all 0.3s ease',
    opacity: isActive ? 1 : 0.7,
    transform: isActive ? 'scale(1.02)' : 'scale(1)',
    boxSizing: 'border-box',
    flexWrap: 'wrap',
    gap: '10px',
  });

  const getIconStyle = (color, isActive) => ({
    width: 'clamp(20px, 6vw, 24px)',
    height: 'clamp(20px, 6vw, 24px)',
    marginRight: 'clamp(8px, 2vw, 12px)',
    fontWeight: 'bold',
    color: isActive ? color : COLORS.neutral,
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '50%',
    backgroundColor: isActive ? `${color}20` : '#e9ecef',
    fontSize: 'clamp(12px, 3.5vw, 14px)',
    transition: 'all 0.3s ease',
    flexShrink: 0,
  });

  const getTextStyle = (isActive, color) => ({
    flex: 1,
    textAlign: 'left',
    fontWeight: isActive ? 'bold' : 'normal',
    color: isActive ? color : COLORS.text,
    fontSize: 'clamp(14px, 4vw, 16px)',
    letterSpacing: '0.5px',
    transition: 'color 0.3s ease',
    wordBreak: 'break-word',
  });

  const getArrowStyle = (isActive, direction) => ({
    marginLeft: 'clamp(10px, 3vw, 20px)',
    marginRight: 'clamp(10px, 3vw, 20px)',
    color: isActive ? COLORS.primary : COLORS.neutral,
    fontSize: 'clamp(16px, 5vw, 20px)',
    transition: 'all 0.3s ease',
    transform: direction === 'right' && isActive ? 'translateX(5px)' : 'none',
    flexShrink: 0,
  });

  const getStatusBadgeStyle = (stageData) => {
    if (!stageData) return {};
    
    return {
      marginTop: 'clamp(20px, 5vw, 30px)',
      padding: 'clamp(10px, 3vw, 12px) clamp(16px, 5vw, 24px)',
      borderRadius: '20px',
      backgroundColor: `${stageData.color}20`,
      color: stageData.color,
      fontWeight: 'bold',
      fontSize: 'clamp(14px, 4vw, 16px)',
      border: `1px solid ${stageData.color}`,
      animation: 'pulse 1.5s infinite',
      textAlign: 'center',
      wordBreak: 'break-word',
      maxWidth: '100%',
    };
  };

  const getButtonStyle = () => ({
    marginTop: 'clamp(20px, 5vw, 30px)',
    padding: 'clamp(10px, 3vw, 12px) clamp(20px, 6vw, 24px)',
    backgroundColor: isAnimating ? COLORS.neutral : COLORS.buttonBg,
    color: 'white',
    border: 'none',
    borderRadius: '6px',
    cursor: isAnimating ? 'not-allowed' : 'pointer',
    fontSize: 'clamp(14px, 4vw, 16px)',
    fontWeight: 'bold',
    transition: 'all 0.2s ease',
    outline: 'none',
    opacity: isAnimating ? 0.7 : 1,
    pointerEvents: isAnimating ? 'none' : 'auto',
    width: 'auto',
    minWidth: 'clamp(160px, 40vw, 200px)',
    '@media (max-width: 480px)': {
      width: '100%',
    },
  });

  const getTitleStyle = () => ({
    marginBottom: 'clamp(20px, 5vw, 30px)',
    color: COLORS.text,
    textAlign: 'center',
    fontSize: 'clamp(18px, 5vw, 24px)',
    wordBreak: 'break-word',
    padding: '0 10px',
  });

  const getLineStyle = () => ({
    width: 'min(80%, 300px)',
    height: '2px',
    backgroundColor: currentStageIndex === 0 ? COLORS.primary : (currentStageIndex === 1 ? COLORS.secondary : (currentStageIndex === 2 ? COLORS.success : COLORS.border)),
    margin: '0 auto clamp(15px, 4vw, 20px) auto',
    transition: 'background-color 0.5s ease',
    position: 'relative',
    animation: currentStageIndex === 1 ? 'linePulse 1s infinite alternate' : 'none',
  });

  const getLoadingTextStyle = () => ({
    marginTop: 'clamp(20px, 5vw, 30px)',
    color: COLORS.neutral,
    fontSize: 'clamp(12px, 3.5vw, 14px)',
    textAlign: 'center',
  });

  const getStageLabelStyle = () => ({
    marginBottom: 'clamp(8px, 2vw, 10px)',
    color: COLORS.neutral,
    fontSize: 'clamp(12px, 3.5vw, 14px)',
    textAlign: 'center',
  });

  const mediaStyles = `
    @media (max-width: 768px) {
      .status-row {
        flex-direction: column;
        text-align: center;
      }
    }
    
    @media (max-width: 480px) {
      .status-row {
        flex-direction: column;
        text-align: center;
      }
      
      .status-row span:first-child {
        margin-bottom: 8px;
      }
      
      .arrow {
        display: none;
      }
      
      .status-row {
        opacity: 1 !important;
      }
    }
    
    @keyframes pulse {
      0% { 
        box-shadow: 0 0 0 0 ${STAGES[currentStageIndex]?.color || COLORS.primary}40; 
      }
      70% { 
        box-shadow: 0 0 0 10px ${STAGES[currentStageIndex]?.color || COLORS.primary}00; 
      }
      100% { 
        box-shadow: 0 0 0 0 ${STAGES[currentStageIndex]?.color || COLORS.primary}00; 
      }
    }
    
    @keyframes linePulse {
      0% { opacity: 0.3; }
      100% { opacity: 1; }
    }
    
    @media (prefers-reduced-motion: reduce) {
      * {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
      }
    }
  `;

  return (
    <BrowserOnly>
      {() => (
        <div style={getContainerStyle()}>
          <style>{mediaStyles}</style>
          
          <h2 style={getTitleStyle()}>
            Асинхронное взаимодействие системы
          </h2>

          {/* Блок Клиента (Инициатор) */}
          <div 
            className="status-row"
            style={getStatusRowStyle(currentStageIndex >= 0 && currentStageIndex < STAGES.length, 'client')}
          >
            <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center', gap: '8px' }}>
              <span style={getIconStyle(COLORS.primary, currentStageIndex === 0)}>▶</span>
              <span style={getTextStyle(currentStageIndex === 0, COLORS.primary)}>Клиент (Инициатор)</span>
            </div>
            <span className="arrow" style={getArrowStyle(currentStageIndex === 0, 'right')}>➜</span>
          </div>

          {/* Линия соединения (визуальная) */}
          <div style={getLineStyle()} />

          {/* Блок Удаленной Системы */}
          <div 
            className="status-row"
            style={getStatusRowStyle(currentStageIndex >= 1 && currentStageIndex < STAGES.length, 'server')}
          >
            <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center', gap: '8px' }}>
              <span style={getIconStyle(currentStageIndex >= 1 ? COLORS.secondary : COLORS.neutral, currentStageIndex >= 1)}>☁</span>
              <span style={getTextStyle(currentStageIndex >= 1, currentStageIndex >= 1 ? COLORS.secondary : COLORS.neutral)}>Удаленная Система</span>
            </div>
            <span className="arrow" style={getArrowStyle(currentStageIndex === 2, 'left')}>➤</span>
          </div>

          {/* Индикатор текущего этапа */}
          <div style={{ width: '100%', textAlign: 'center' }}>
            <p style={getStageLabelStyle()}>Текущее состояние:</p>
            {STAGES[currentStageIndex] ? (
              <div style={getStatusBadgeStyle(STAGES[currentStageIndex])}>
                {STAGES[currentStageIndex].label}
              </div>
            ) : (
              <div style={{ ...getStatusBadgeStyle({color: COLORS.text}), animation: 'none' }}>
                Готов к запуску
              </div>
            )}
          </div>

          {/* Кнопка управления */}
          {!isAnimating && !isCompleted ? (
            <button 
              onClick={startAnimation}
              style={getButtonStyle()}
              onMouseEnter={(e) => {
                if (!isAnimating) {
                  e.target.style.backgroundColor = COLORS.buttonHover;
                  e.target.style.transform = 'scale(1.05)';
                }
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = COLORS.buttonBg;
                e.target.style.transform = 'scale(1)';
              }}
            >
              Отправить запрос
            </button>
          ) : isCompleted ? (
            <button 
              onClick={resetAnimation}
              style={getButtonStyle()}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = COLORS.buttonHover;
                e.target.style.transform = 'scale(1.05)';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = COLORS.buttonBg;
                e.target.style.transform = 'scale(1)';
              }}
            >
              Повторить эксперимент
            </button>
          ) : (
            <div style={getLoadingTextStyle()}>
              Обработка...
            </div>
          )}
        </div>
      )}
    </BrowserOnly>
  );
};

export default AsynchronousInteraction;