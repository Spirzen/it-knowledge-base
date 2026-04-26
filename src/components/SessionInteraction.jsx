import React, { useState, useRef } from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';

const COLORS = {
  primary: '#007bff',
  secondary: '#6f42c1',
  success: '#28a745',
  warning: '#ffc107',
  neutral: '#6c757d',
  bg: '#f8f9fa',
  text: '#343a40',
  border: '#dee2e6',
  buttonBg: '#007bff',
  buttonHover: '#0056b3',
};

const STAGES = [
  { 
    id: 'initiate', 
    label: 'ОТПРАВКА ЗАПРОСА', 
    color: COLORS.primary, 
    duration: 1500,
    desc: 'Клиент отправляет запрос на сервер'
  },
  { 
    id: 'create', 
    label: 'СОЗДАНИЕ СЕССИИ', 
    color: COLORS.secondary, 
    duration: 2000,
    desc: 'Сервер генерирует уникальный Session ID'
  },
  { 
    id: 'return_token', 
    label: 'ВОЗВРАТ ID СЕССИИ', 
    color: COLORS.warning, 
    duration: 1000,
    desc: 'Сервер отдает Cookie или Token клиенту'
  },
  { 
    id: 'active', 
    label: 'АКТИВНАЯ СЕССИЯ', 
    color: COLORS.success, 
    duration: 3000,
    desc: 'Клиент использует ID для авторизации'
  },
  { 
    id: 'terminate', 
    label: 'ЗАВЕРШЕНИЕ СЕССИИ', 
    color: COLORS.neutral, 
    duration: 1000,
    desc: 'Сессия уничтожена или истекла'
  },
];

const SessionInteractionContent = () => {
  const [currentStageIndex, setCurrentStageIndex] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  
  const timerRef = useRef(null);
  const [sessionId, setSessionId] = useState('');

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
    setSessionId('');

    let currentIndex = 0;

    const runNextStep = () => {
      if (currentIndex >= STAGES.length) {
        setIsAnimating(false);
        setIsCompleted(true);
        return;
      }

      const stage = STAGES[currentIndex];
      
      setCurrentStageIndex(currentIndex);

      if (stage.id === 'create') {
        const randomId = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
        setSessionId(randomId);
      }

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
    setSessionId('');
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
    maxWidth: 'min(600px, 95%)',
    margin: 'clamp(10px, 3vw, 20px) auto',
    border: `1px solid ${COLORS.border}`,
    width: '100%',
    boxSizing: 'border-box',
  });

  const getStatusRowStyle = (isActive, type) => {
    let bgColor = '#ffffff';
    let borderColor = COLORS.border;
    let shadowColor = COLORS.border;

    if (isActive) {
      if (type === 'client') {
        bgColor = '#e7f1ff';
        borderColor = COLORS.primary;
        shadowColor = COLORS.primary;
      } else if (type === 'server') {
        bgColor = '#e8f5e9';
        borderColor = COLORS.secondary;
        shadowColor = COLORS.secondary;
      } else if (type === 'token') {
        bgColor = '#fff3cd';
        borderColor = COLORS.warning;
        shadowColor = COLORS.warning;
      }
    }

    return {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      width: '100%',
      marginBottom: 'clamp(12px, 4vw, 20px)',
      padding: 'clamp(10px, 3vw, 15px)',
      borderRadius: '8px',
      backgroundColor: bgColor,
      border: `1px solid ${borderColor}`,
      transition: 'all 0.3s ease',
      opacity: isActive ? 1 : 0.7,
      transform: isActive ? 'scale(1.01)' : 'scale(1)',
      boxShadow: isActive ? `0 2px 8px ${shadowColor}40` : 'none',
      flexWrap: 'wrap',
      gap: '10px',
    };
  };

  const getIconStyle = (color, isActive) => ({
    width: 'clamp(20px, 5vw, 24px)',
    height: 'clamp(20px, 5vw, 24px)',
    marginRight: 'clamp(8px, 2vw, 12px)',
    fontWeight: 'bold',
    color: isActive ? color : COLORS.neutral,
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '50%',
    backgroundColor: isActive ? `${color}20` : '#e9ecef',
    fontSize: 'clamp(12px, 4vw, 14px)',
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
    minWidth: '120px',
  });

  const getStatusSpanStyle = () => ({
    marginLeft: 'clamp(10px, 2vw, 20px)',
    fontSize: 'clamp(11px, 3vw, 14px)',
    flexShrink: 0,
  });

  const getArrowStyle = (isActive, color) => ({
    width: 'min(80%, 400px)',
    height: '2px',
    backgroundColor: isActive ? color : COLORS.border,
    margin: '0 auto 10px auto',
    transition: 'background-color 0.5s ease',
    position: 'relative',
  });

  const getTokenBoxStyle = (isActive) => ({
    width: 'min(90%, 400px)',
    marginTop: '10px',
    marginBottom: '10px',
    padding: 'clamp(8px, 3vw, 12px)',
    borderRadius: '8px',
    backgroundColor: isActive ? '#fff3cd' : '#f8f9fa',
    border: `1px dashed ${isActive ? COLORS.warning : COLORS.border}`,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all 0.3s ease',
    opacity: isActive ? 1 : 0.5,
    transform: isActive ? 'translateY(0)' : 'translateY(-5px)',
    flexWrap: 'wrap',
    gap: '8px',
    textAlign: 'center',
  });

  const getTokenTextStyle = (isActive) => ({
    color: isActive ? COLORS.warning : COLORS.neutral,
    fontWeight: 'bold',
    fontSize: 'clamp(12px, 3.5vw, 14px)',
    wordBreak: 'break-all',
    maxWidth: '100%',
  });

  const getSessionIdSpanStyle = () => ({
    marginLeft: 'clamp(5px, 2vw, 10px)',
    fontFamily: 'monospace',
    color: COLORS.warning,
    fontSize: 'clamp(11px, 3vw, 13px)',
    wordBreak: 'break-all',
  });

  const getStatusBadgeStyle = (stageData) => {
    if (!stageData) return {};
    
    return {
      marginTop: 'clamp(20px, 5vw, 30px)',
      padding: 'clamp(8px, 3vw, 12px) clamp(16px, 4vw, 24px)',
      borderRadius: '20px',
      backgroundColor: `${stageData.color}20`,
      color: stageData.color,
      fontWeight: 'bold',
      fontSize: 'clamp(13px, 4vw, 16px)',
      border: `1px solid ${stageData.color}`,
      animation: 'pulse 1.5s infinite',
      textAlign: 'center',
      wordBreak: 'break-word',
    };
  };

  const getButtonStyle = () => ({
    marginTop: 'clamp(20px, 5vw, 30px)',
    padding: 'clamp(10px, 3vw, 12px) clamp(20px, 5vw, 24px)',
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
    minWidth: 'clamp(160px, 40vw, 200px)',
  });

  const getTitleStyle = () => ({
    marginBottom: 'clamp(20px, 5vw, 30px)',
    color: COLORS.text,
    textAlign: 'center',
    fontSize: 'clamp(20px, 6vw, 28px)',
    wordBreak: 'break-word',
  });

  const getDescStyle = () => ({
    marginTop: '10px',
    fontSize: 'clamp(12px, 3.5vw, 14px)',
    color: COLORS.text,
    textAlign: 'center',
    padding: '0 10px',
  });

  const getLoadingTextStyle = () => ({
    marginTop: 'clamp(20px, 5vw, 30px)',
    color: COLORS.neutral,
    fontSize: 'clamp(12px, 3.5vw, 14px)',
  });

  return (
    <div style={getContainerStyle()}>
      <h2 style={getTitleStyle()}>
        Жизненный цикл сессии
      </h2>

      {/* Блок Клиента */}
      <div style={getStatusRowStyle(currentStageIndex >= 0 && currentStageIndex <= 3, 'client')}>
        <div style={{ display: 'flex', alignItems: 'center', flex: 1, minWidth: '150px' }}>
          <span style={getIconStyle(COLORS.primary, currentStageIndex === 0)}>🖥️</span>
          <span style={getTextStyle(currentStageIndex >= 0 && currentStageIndex <= 3, COLORS.primary)}>Клиент (Браузер)</span>
        </div>
        <span style={{ 
          ...getStatusSpanStyle(), 
          color: currentStageIndex === 3 ? COLORS.success : COLORS.neutral,
          fontWeight: 'bold'
        }}>
          {currentStageIndex === 3 ? 'Активен' : ''}
        </span>
      </div>

      {/* Стрелка к серверу */}
      <div style={getArrowStyle(currentStageIndex === 0, COLORS.primary)} />

      {/* Блок Сервера */}
      <div style={getStatusRowStyle(currentStageIndex >= 1 && currentStageIndex <= 3, 'server')}>
        <div style={{ display: 'flex', alignItems: 'center', flex: 1, minWidth: '150px' }}>
          <span style={getIconStyle(COLORS.secondary, currentStageIndex >= 1)}>☁️</span>
          <span style={getTextStyle(currentStageIndex >= 1 && currentStageIndex <= 3, COLORS.secondary)}>Сервер (Backend)</span>
        </div>
        <span style={{ 
          ...getStatusSpanStyle(), 
          color: currentStageIndex === 1 ? COLORS.secondary : COLORS.neutral 
        }}>
          {currentStageIndex === 1 ? 'Генерация...' : ''}
        </span>
      </div>

      {/* Блок Сессии (Token) */}
      <div style={getTokenBoxStyle(currentStageIndex >= 2)}>
        <span style={getTokenTextStyle(currentStageIndex >= 2)}>🔑</span>
        <span style={getTokenTextStyle(currentStageIndex >= 2)}>
          {currentStageIndex >= 2 ? 'Session ID:' : 'Ожидание ID...'}
        </span>
        {currentStageIndex >= 2 && (
          <span style={getSessionIdSpanStyle()}>
            {sessionId}
          </span>
        )}
      </div>

      {/* Стрелка от сервера к клиенту */}
      {currentStageIndex === 2 && (
        <div style={{ 
          width: 'min(80%, 400px)', 
          height: '2px', 
          backgroundColor: COLORS.warning, 
          margin: '10px auto', 
          animation: 'linePulse 1s infinite alternate'
        }} />
      )}

      {/* Индикатор текущего этапа */}
      <div style={{ marginTop: 'clamp(20px, 5vw, 30px)', textAlign: 'center', width: '100%' }}>
        <p style={{ marginBottom: '10px', color: COLORS.neutral, fontSize: 'clamp(12px, 3.5vw, 14px)' }}>
          Текущее состояние:
        </p>
        {STAGES[currentStageIndex] ? (
          <>
            <div style={getStatusBadgeStyle(STAGES[currentStageIndex])}>
              {STAGES[currentStageIndex].label}
            </div>
            <p style={getDescStyle()}>
              {STAGES[currentStageIndex].desc}
            </p>
          </>
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
            if (!isAnimating) e.target.style.backgroundColor = COLORS.buttonHover;
          }}
          onMouseLeave={(e) => {
            if (!isAnimating) e.target.style.backgroundColor = COLORS.buttonBg;
          }}
        >
          Начать сессию
        </button>
      ) : isCompleted ? (
        <button 
          onClick={resetAnimation}
          style={getButtonStyle()}
          onMouseEnter={(e) => e.target.style.backgroundColor = COLORS.buttonHover}
          onMouseLeave={(e) => e.target.style.backgroundColor = COLORS.buttonBg}
        >
          Повторить эксперимент
        </button>
      ) : (
        <div style={getLoadingTextStyle()}>
          Обработка...
        </div>
      )}

      {/* Стили анимации */}
      <style>{`
        @keyframes pulse {
          0% { box-shadow: 0 0 0 0 ${STAGES[currentStageIndex]?.color || COLORS.primary}40; }
          70% { box-shadow: 0 0 0 10px ${STAGES[currentStageIndex]?.color || COLORS.primary}00; }
          100% { box-shadow: 0 0 0 0 ${STAGES[currentStageIndex]?.color || COLORS.primary}00; }
        }
        @keyframes linePulse {
          0% { opacity: 0.3; }
          100% { opacity: 1; }
        }
        
        /* Адаптивные стили для планшетов */
        @media (max-width: 768px) {
          div[style*="flex-direction"] {
            padding: 20px;
          }
        }
        
        /* Адаптивные стили для мобильных устройств */
        @media (max-width: 480px) {
          div[style*="flex-direction"] {
            padding: 15px;
            margin: 10px;
          }
        }
      `}</style>
    </div>
  );
};

const SessionInteraction = () => {
  return (
    <BrowserOnly fallback={<div style={{padding: '20px', textAlign: 'center'}}>Загрузка интерактива...</div>}>
      {() => <SessionInteractionContent />}
    </BrowserOnly>
  );
};

export default SessionInteraction;