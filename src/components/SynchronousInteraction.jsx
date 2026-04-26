import React, { useState, useRef } from 'react';
import BrowserOnly from './BrowserOnly';

const COLORS = {
  primary: '#007bff',
  secondary: '#28a745',
  neutral: '#6c757d',
  bg: '#f8f9fa',
  text: '#343a40',
  border: '#dee2e6',
  buttonBg: '#007bff',
  buttonHover: '#0056b3',
};

const STAGES = [
  { id: 'initiate', label: 'ОТПРАВКА ЗАПРОСА', color: COLORS.primary, duration: 1500 },
  { id: 'wait', label: 'ОЖИДАНИЕ ОТВЕТА', color: COLORS.neutral, duration: 2500 },
  { id: 'receive', label: 'ПОЛУЧЕНИЕ ОТВЕТА', color: COLORS.secondary, duration: 1000 },
];

const SynchronousInteraction = () => {
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
    borderRadius: 'clamp(8px, 3vw, 12px)',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
    maxWidth: 'min(90%, 600px)',
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
    marginBottom: 'clamp(12px, 4vw, 20px)',
    padding: 'clamp(10px, 3vw, 15px)',
    borderRadius: '8px',
    backgroundColor: isActive ? (type === 'client' ? '#e7f1ff' : '#e8f5e9') : '#ffffff',
    border: `1px solid ${isActive ? (type === 'client' ? COLORS.primary : COLORS.secondary) : COLORS.border}`,
    transition: 'all 0.3s ease',
    opacity: isActive ? 1 : 0.7,
    transform: isActive ? 'scale(1.02)' : 'scale(1)',
    boxSizing: 'border-box',
    gap: 'clamp(5px, 2vw, 10px)',
    flexWrap: 'wrap',
  });

  const getIconStyle = (color, isActive) => ({
    width: 'clamp(20px, 5vw, 24px)',
    height: 'clamp(20px, 5vw, 24px)',
    marginRight: 'clamp(6px, 2vw, 12px)',
    fontWeight: 'bold',
    color: isActive ? color : COLORS.neutral,
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '50%',
    backgroundColor: isActive ? `${color}20` : '#e9ecef',
    fontSize: 'clamp(12px, 3vw, 14px)',
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
    marginLeft: 'clamp(8px, 3vw, 20px)',
    marginRight: 'clamp(8px, 3vw, 20px)',
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
      padding: 'clamp(8px, 3vw, 12px) clamp(16px, 5vw, 24px)',
      borderRadius: '20px',
      backgroundColor: `${stageData.color}20`,
      color: stageData.color,
      fontWeight: 'bold',
      fontSize: 'clamp(12px, 3.5vw, 16px)',
      border: `1px solid ${stageData.color}`,
      animation: 'pulse 1.5s infinite',
      textAlign: 'center',
      wordBreak: 'break-word',
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
    transition: 'transform 0.2s, background-color 0.2s',
    outline: 'none',
    opacity: isAnimating ? 0.7 : 1,
    pointerEvents: isAnimating ? 'none' : 'auto',
    width: 'auto',
    minWidth: 'clamp(150px, 40vw, 200px)',
    '@media (hover: hover)': {
      ':hover': {
        backgroundColor: COLORS.buttonHover,
      },
    },
  });

  const getLineStyle = () => ({
    width: 'min(80%, 300px)',
    height: '2px',
    backgroundColor: currentStageIndex === 0 ? COLORS.primary : (currentStageIndex === 1 ? COLORS.neutral : (currentStageIndex === 2 ? COLORS.secondary : COLORS.border)),
    margin: '0 auto clamp(15px, 4vw, 20px) auto',
    transition: 'background-color 0.5s ease',
    position: 'relative',
  });

  const getTitleStyle = () => ({
    marginBottom: 'clamp(20px, 5vw, 30px)',
    color: COLORS.text,
    textAlign: 'center',
    fontSize: 'clamp(18px, 5vw, 24px)',
    wordBreak: 'break-word',
    padding: '0 10px',
  });

  const getStatusLabelStyle = () => ({
    marginBottom: '10px',
    color: COLORS.neutral,
    fontSize: 'clamp(12px, 3vw, 14px)',
    textAlign: 'center',
  });

  return (
    <BrowserOnly>
      {() => (
        <div style={getContainerStyle()}>
          <h2 style={getTitleStyle()}>
            Синхронное взаимодействие системы
          </h2>

          <div style={getStatusRowStyle(currentStageIndex >= 0 && currentStageIndex < STAGES.length, 'client')}>
            <span style={getIconStyle(COLORS.primary, currentStageIndex === 0)}>▶</span>
            <span style={getTextStyle(currentStageIndex === 0, COLORS.primary)}>Клиент (Инициатор)</span>
            <span style={getArrowStyle(currentStageIndex === 0, 'right')}>➜</span>
          </div>

          <div style={getLineStyle()} />

          <div style={getStatusRowStyle(currentStageIndex >= 1 && currentStageIndex < STAGES.length, 'server')}>
            <span style={getIconStyle(currentStageIndex >= 1 ? COLORS.secondary : COLORS.neutral, currentStageIndex >= 1)}>☁</span>
            <span style={getTextStyle(currentStageIndex >= 1, currentStageIndex >= 1 ? COLORS.secondary : COLORS.neutral)}>Удаленная Система</span>
            <span style={getArrowStyle(currentStageIndex === 2, 'left')}>➤</span>
          </div>

          <div style={{ marginTop: 'clamp(20px, 5vw, 30px)', textAlign: 'center', width: '100%' }}>
            <p style={getStatusLabelStyle()}>Текущее состояние:</p>
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

          {!isAnimating && !isCompleted ? (
            <button 
              onClick={startAnimation}
              style={getButtonStyle()}
              onTouchStart={(e) => {
                if (!isAnimating) {
                  e.currentTarget.style.backgroundColor = COLORS.buttonHover;
                }
              }}
              onTouchEnd={(e) => {
                if (!isAnimating) {
                  e.currentTarget.style.backgroundColor = COLORS.buttonBg;
                }
              }}
              onMouseEnter={(e) => {
                if (!isAnimating) {
                  e.currentTarget.style.backgroundColor = COLORS.buttonHover;
                }
              }}
              onMouseLeave={(e) => {
                if (!isAnimating) {
                  e.currentTarget.style.backgroundColor = COLORS.buttonBg;
                }
              }}
            >
              Отправить запрос
            </button>
          ) : isCompleted ? (
            <button 
              onClick={resetAnimation}
              style={getButtonStyle()}
              onTouchStart={(e) => e.currentTarget.style.backgroundColor = COLORS.buttonHover}
              onTouchEnd={(e) => e.currentTarget.style.backgroundColor = COLORS.buttonBg}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = COLORS.buttonHover}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = COLORS.buttonBg}
            >
              Повторить эксперимент
            </button>
          ) : (
            <div style={{ marginTop: 'clamp(20px, 5vw, 30px)', color: COLORS.neutral, fontSize: 'clamp(12px, 3vw, 14px)' }}>
              Обработка...
            </div>
          )}

          <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=yes" />

          <style>{`
            @keyframes pulse {
              0% { box-shadow: 0 0 0 0 ${STAGES[currentStageIndex]?.color || COLORS.primary}40; }
              70% { box-shadow: 0 0 0 10px ${STAGES[currentStageIndex]?.color || COLORS.primary}00; }
              100% { box-shadow: 0 0 0 0 ${STAGES[currentStageIndex]?.color || COLORS.primary}00; }
            }
            
            @media (max-width: 480px) {
              .status-row {
                flex-direction: column;
                text-align: center;
              }
            }
            
            button {
              touch-action: manipulation;
              -webkit-tap-highlight-color: transparent;
            }
            
            html {
              scroll-behavior: smooth;
            }
          `}</style>
        </div>
      )}
    </BrowserOnly>
  );
};

export default SynchronousInteraction;