import React, { useState, useRef } from 'react';

const COLORS = {
  event: '#ffc107',
  subscriber1: '#0d6efd',
  subscriber2: '#198754',
  bg: '#f8f9fa',
  text: '#343a40',
  border: '#dee2e6',
  buttonBg: '#ffc107',
  buttonHover: '#ffdb4d',
};

const STAGES = [
  { id: 'trigger', label: 'ГЕНЕРАЦИЯ СОБЫТИЯ', color: COLORS.event, duration: 800 },
  { id: 'publish', label: 'ОТПРАВКА В ШИНУ', color: COLORS.event, duration: 1000 },
  { 
    id: 'react_1', 
    label: 'РЕАКЦИЯ СИСТЕМЫ А', 
    color: COLORS.subscriber1, 
    duration: 1500 
  },
  { 
    id: 'react_2', 
    label: 'РЕАКЦИЯ СИСТЕМЫ Б', 
    color: COLORS.subscriber2, 
    duration: 1500 
  },
];

const ReactiveInteraction = () => {
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
    padding: 'clamp(16px, 5vw, 40px)',
    backgroundColor: COLORS.bg,
    borderRadius: 'clamp(8px, 3vw, 12px)',
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
    marginBottom: 'clamp(12px, 3vw, 20px)',
    padding: 'clamp(10px, 2.5vw, 15px)',
    borderRadius: 'clamp(6px, 2vw, 8px)',
    backgroundColor: isActive ? (type === 'event' ? '#fff3cd' : (type === 'sub1' ? '#cfe2ff' : '#d1e7dd')) : '#ffffff',
    border: `1px solid ${isActive ? (type === 'event' ? COLORS.event : (type === 'sub1' ? COLORS.subscriber1 : COLORS.subscriber2)) : COLORS.border}`,
    transition: 'all 0.3s ease',
    opacity: isActive ? 1 : 0.7,
    transform: isActive ? 'scale(1.02)' : 'scale(1)',
    boxSizing: 'border-box',
    gap: 'clamp(8px, 2vw, 12px)',
  });

  const getIconStyle = (color, isActive) => ({
    width: 'clamp(20px, 5vw, 24px)',
    height: 'clamp(20px, 5vw, 24px)',
    marginRight: 'clamp(6px, 1.5vw, 12px)',
    fontWeight: 'bold',
    color: isActive ? color : COLORS.text,
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
    fontSize: 'clamp(12px, 3.5vw, 16px)',
    letterSpacing: '0.5px',
    transition: 'color 0.3s ease',
    wordBreak: 'break-word',
  });

  const getArrowStyle = (isActive, direction) => ({
    marginLeft: 'clamp(8px, 2vw, 20px)',
    marginRight: 'clamp(8px, 2vw, 20px)',
    color: isActive ? COLORS.event : COLORS.text,
    fontSize: 'clamp(16px, 4vw, 20px)',
    transition: 'all 0.3s ease',
    transform: direction === 'right' && isActive ? 'translateX(5px)' : 'none',
    flexShrink: 0,
  });

  const getStatusBadgeStyle = (stageData) => {
    if (!stageData) return {};
    
    return {
      marginTop: 'clamp(20px, 5vw, 30px)',
      padding: 'clamp(8px, 2vw, 12px) clamp(16px, 4vw, 24px)',
      borderRadius: '20px',
      backgroundColor: `${stageData.color}20`,
      color: stageData.color,
      fontWeight: 'bold',
      fontSize: 'clamp(12px, 3vw, 16px)',
      border: `1px solid ${stageData.color}`,
      animation: 'pulse 1.5s infinite',
      textAlign: 'center',
      whiteSpace: 'nowrap',
      '@media (max-width: 480px)': {
        whiteSpace: 'normal',
        wordBreak: 'break-word',
      },
    };
  };

  const getButtonStyle = (isResetting) => ({
    marginTop: 'clamp(20px, 5vw, 30px)',
    padding: 'clamp(10px, 2.5vw, 12px) clamp(16px, 4vw, 24px)',
    backgroundColor: isAnimating ? COLORS.text : COLORS.buttonBg,
    color: 'white',
    border: 'none',
    borderRadius: '6px',
    cursor: isAnimating ? 'not-allowed' : 'pointer',
    fontSize: 'clamp(14px, 3.5vw, 16px)',
    fontWeight: 'bold',
    transition: 'transform 0.2s, background-color 0.2s',
    outline: 'none',
    opacity: isAnimating ? 0.7 : 1,
    pointerEvents: isAnimating ? 'none' : 'auto',
    width: 'auto',
    minWidth: 'clamp(160px, 30vw, 200px)',
  });

  const getSubscribersContainerStyle = () => ({
    display: 'flex',
    gap: 'clamp(12px, 3vw, 20px)',
    width: '100%',
    justifyContent: 'center',
    flexDirection: 'row',
    '@media (max-width: 640px)': {
      flexDirection: 'column',
    },
  });

  const getTitleStyle = () => ({
    marginBottom: 'clamp(20px, 5vw, 30px)',
    color: COLORS.text,
    textAlign: 'center',
    fontSize: 'clamp(18px, 4.5vw, 24px)',
    fontWeight: '600',
    padding: '0 10px',
  });

  const getDescriptionStyle = () => ({
    marginBottom: 'clamp(10px, 2vw, 15px)',
    color: COLORS.text,
    fontSize: 'clamp(11px, 3vw, 14px)',
    textAlign: 'center',
  });

  const getLineStyle = () => ({
    width: '80%',
    height: '2px',
    backgroundColor: currentStageIndex === 1 ? COLORS.event : COLORS.border,
    margin: '0 auto clamp(15px, 4vw, 20px) auto',
    transition: 'background-color 0.5s ease',
    position: 'relative',
    animation: currentStageIndex === 1 ? 'linePulse 1s infinite alternate' : 'none',
  });

  const isMobile = typeof window !== 'undefined' && window.innerWidth <= 640;
  
  const getSubscriberStyle = (index, isActive, type) => {
    const baseStyle = getStatusRowStyle(isActive, type);
    if (isMobile || (typeof window !== 'undefined' && window.innerWidth <= 640)) {
      return {
        ...baseStyle,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
      };
    }
    return {
      ...baseStyle,
      flex: 1,
      minWidth: '0',
    };
  };

  return (
    <div style={getContainerStyle()}>
      <style>{`
        @keyframes pulse {
          0% { box-shadow: 0 0 0 0 ${STAGES[currentStageIndex]?.color || COLORS.event}40; }
          70% { box-shadow: 0 0 0 10px ${STAGES[currentStageIndex]?.color || COLORS.event}00; }
          100% { box-shadow: 0 0 0 0 ${STAGES[currentStageIndex]?.color || COLORS.event}00; }
        }
        @keyframes linePulse {
          0% { opacity: 0.3; }
          100% { opacity: 1; }
        }
        
        @media (max-width: 640px) {
          .subscribers-container {
            flex-direction: column !important;
          }
          .status-badge {
            white-space: normal !important;
            word-break: break-word !important;
          }
        }
        
        @media (max-width: 480px) {
          .status-badge {
            font-size: 11px !important;
            padding: 8px 12px !important;
          }
        }
        
        @media (hover: hover) {
          button:hover {
            transform: translateY(-2px);
          }
        }
        
        @media (hover: none) {
          button:active {
            transform: scale(0.98);
          }
        }
      `}</style>

      <h2 style={getTitleStyle()}>
        Реактивное взаимодействие
      </h2>
      <p style={getDescriptionStyle()}>
        Event-Driven Architecture
      </p>

      {/* Инициатор события */}
      <div style={getStatusRowStyle(currentStageIndex >= 0 && currentStageIndex <= 1, 'event')}>
        <span style={getIconStyle(COLORS.event, currentStageIndex === 0)}>⚡</span>
        <span style={getTextStyle(currentStageIndex === 0, COLORS.event)}>Источник События</span>
        <span style={getArrowStyle(currentStageIndex === 0, 'right')}>➜</span>
      </div>

      {/* Шина событий */}
      <div style={getLineStyle()} />

      {/* Подписчики */}
      <div className="subscribers-container" style={getSubscribersContainerStyle()}>
        {/* Система А */}
        <div 
          className="subscriber-a"
          style={getSubscriberStyle(2, currentStageIndex === 2, 'sub1')}
        >
          <span style={getIconStyle(COLORS.subscriber1, currentStageIndex === 2)}>🔄</span>
          <span style={getTextStyle(currentStageIndex === 2, COLORS.subscriber1)}>
            Система А
          </span>
          <span style={getArrowStyle(currentStageIndex === 2, 'left')}>◀</span>
        </div>

        {/* Система Б */}
        <div 
          className="subscriber-b"
          style={getSubscriberStyle(3, currentStageIndex === 3, 'sub2')}
        >
          <span style={getArrowStyle(currentStageIndex === 3, 'right')}>▶</span>
          <span style={getTextStyle(currentStageIndex === 3, COLORS.subscriber2)}>
            Система Б
          </span>
          <span style={getIconStyle(COLORS.subscriber2, currentStageIndex === 3)}>🔄</span>
        </div>
      </div>

      {/* Индикатор текущего этапа */}
      <div style={{ marginTop: 'clamp(20px, 5vw, 30px)', textAlign: 'center', width: '100%' }}>
        <p style={getDescriptionStyle()}>Текущее состояние:</p>
        {STAGES[currentStageIndex] ? (
          <div className="status-badge" style={getStatusBadgeStyle(STAGES[currentStageIndex])}>
            {STAGES[currentStageIndex].label}
          </div>
        ) : (
          <div className="status-badge" style={{ ...getStatusBadgeStyle({color: COLORS.text}), animation: 'none' }}>
            Готов к запуску
          </div>
        )}
      </div>

      {/* Кнопка управления */}
      {!isAnimating && !isCompleted ? (
        <button 
          onClick={startAnimation}
          style={getButtonStyle(false)}
          onMouseEnter={(e) => e.target.style.backgroundColor = COLORS.buttonHover}
          onMouseLeave={(e) => e.target.style.backgroundColor = COLORS.buttonBg}
          onTouchStart={(e) => {
            if (!isAnimating) {
              e.target.style.backgroundColor = COLORS.buttonHover;
            }
          }}
          onTouchEnd={(e) => {
            if (!isAnimating) {
              e.target.style.backgroundColor = COLORS.buttonBg;
            }
          }}
        >
          Генерировать событие
        </button>
      ) : isCompleted ? (
        <button 
          onClick={resetAnimation}
          style={getButtonStyle(false)}
          onMouseEnter={(e) => e.target.style.backgroundColor = COLORS.buttonHover}
          onMouseLeave={(e) => e.target.style.backgroundColor = COLORS.buttonBg}
          onTouchStart={(e) => e.target.style.backgroundColor = COLORS.buttonHover}
          onTouchEnd={(e) => e.target.style.backgroundColor = COLORS.buttonBg}
        >
          Повторить эксперимент
        </button>
      ) : (
        <div style={{ marginTop: 'clamp(20px, 5vw, 30px)', color: COLORS.text, fontSize: 'clamp(12px, 3vw, 14px)' }}>
          Обработка...
        </div>
      )}
    </div>
  );
};

export default ReactiveInteraction;