import React, { useState } from 'react';
import BrowserOnly from './BrowserOnly';

const RequestResponseModel = () => {
  return (
    <BrowserOnly>
      {() => {
        const [status, setStatus] = useState('idle');
        const [progress, setProgress] = useState(0);

        const handleSendRequest = () => {
          if (status !== 'idle' && status !== 'completed') return;

          setStatus('sending_request');
          setProgress(0);

          const duration = 2000;
          const intervalTime = 20;
          const steps = duration / intervalTime;
          let currentStep = 0;

          const animationInterval = setInterval(() => {
            currentStep++;
            const newProgress = (currentStep / steps) * 100;
            setProgress(newProgress);

            if (currentStep >= steps) {
              clearInterval(animationInterval);
              
              setStatus('received');
              
              setTimeout(() => {
                setStatus('sending_response');
                setProgress(0);

                const responseDuration = 2000;
                const responseSteps = responseDuration / intervalTime;
                let responseStep = 0;

                const responseInterval = setInterval(() => {
                  responseStep++;
                  const newRespProgress = (responseStep / responseSteps) * 100;
                  
                  const visualPosition = 100 - newRespProgress;
                  setProgress(visualPosition);

                  if (responseStep >= responseSteps) {
                    clearInterval(responseInterval);
                    setStatus('completed');
                    setProgress(100);
                  }
                }, intervalTime);
              }, 1500);
            }
          }, intervalTime);
        };

        const resetSimulation = () => {
          setStatus('idle');
          setProgress(0);
        };

        const colors = {
          nodeA: '#3b82f6',
          nodeB: '#ef4444',
          packetRequest: '#10b981',
          packetResponse: '#f59e0b',
          bg: '#ffffff',
          text: '#1f2937',
          border: '#e5e7eb',
          line: '#d1d5db'
        };

        const containerStyle = {
          fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif',
          backgroundColor: colors.bg,
          borderRadius: '12px',
          padding: 'clamp(15px, 5vw, 30px)',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          maxWidth: '900px',
          width: 'calc(100% - 40px)',
          margin: '20px auto',
          textAlign: 'center',
          color: colors.text,
          border: `1px solid ${colors.border}`,
          boxSizing: 'border-box'
        };

        const headerStyle = {
          marginBottom: 'clamp(20px, 5vw, 30px)',
          fontSize: 'clamp(1.2rem, 5vw, 1.5rem)',
          fontWeight: 'bold',
          borderBottom: `2px solid ${colors.line}`,
          paddingBottom: '10px',
          wordBreak: 'break-word'
        };

        const networkContainerStyle = {
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          position: 'relative',
          height: 'clamp(120px, 25vw, 160px)',
          marginBottom: 'clamp(20px, 5vw, 30px)',
          paddingLeft: 'clamp(10px, 3vw, 20px)',
          paddingRight: 'clamp(10px, 3vw, 20px)',
          gap: 'clamp(10px, 3vw, 20px)'
        };

        const nodeStyle = {
          width: 'clamp(70px, 15vw, 100px)',
          height: 'clamp(70px, 15vw, 100px)',
          borderRadius: '50%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          color: 'white',
          fontWeight: 'bold',
          fontSize: 'clamp(0.8rem, 4vw, 1.2rem)',
          zIndex: 2,
          boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
          flexShrink: 0,
          textAlign: 'center',
          padding: '10px'
        };

        const lineStyle = {
          flex: 1,
          height: '4px',
          backgroundColor: colors.line,
          position: 'relative',
          borderRadius: '2px',
          minWidth: '50px'
        };

        const getPacketStyle = () => {
          const isRequest = status === 'sending_request' || (status === 'completed' && progress <= 50);
          const showResponsePacket = status === 'sending_response' || (status === 'completed' && progress > 50);
          
          const isLastPacket = status === 'completed';
          
          const color = isLastPacket ? colors.packetResponse : (showResponsePacket ? colors.packetResponse : colors.packetRequest);
          
          return {
            position: 'absolute',
            top: '50%',
            transform: 'translateY(-50%)',
            width: 'clamp(20px, 5vw, 24px)',
            height: 'clamp(20px, 5vw, 24px)',
            borderRadius: '50%',
            backgroundColor: color,
            border: '2px solid white',
            boxShadow: '0 2px 4px rgba(0,0,0,0.3)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: 'white',
            fontSize: 'clamp(10px, 3vw, 12px)',
            fontWeight: 'bold',
            transition: 'left 0.02s linear',
            zIndex: 10,
            left: `${progress}%`
          };
        };

        const statusBoxStyle = {
          minHeight: 'clamp(60px, 15vh, 80px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 'clamp(0.9rem, 4vw, 1.1rem)',
          fontWeight: '500',
          color: '#4b5563',
          backgroundColor: '#f9fafb',
          border: `1px solid ${colors.border}`,
          borderRadius: '8px',
          marginBottom: 'clamp(20px, 5vw, 25px)',
          padding: 'clamp(10px, 3vw, 15px)',
          textAlign: 'center',
          wordBreak: 'break-word'
        };

        const buttonGroupStyle = {
          display: 'flex',
          gap: 'clamp(10px, 3vw, 15px)',
          justifyContent: 'center',
          flexWrap: 'wrap'
        };

        const buttonStyle = (primary) => ({
          padding: 'clamp(10px, 3vw, 12px) clamp(16px, 5vw, 24px)',
          fontSize: 'clamp(0.9rem, 4vw, 1rem)',
          fontWeight: 'bold',
          borderRadius: '8px',
          cursor: primary ? 'pointer' : 'not-allowed',
          border: 'none',
          outline: 'none',
          transition: 'transform 0.1s, box-shadow 0.2s, background-color 0.2s',
          flex: window.innerWidth < 480 ? '1' : 'auto',
          minWidth: window.innerWidth < 480 ? 'auto' : '140px',
          ...(primary 
            ? { backgroundColor: colors.nodeA, color: 'white', boxShadow: '0 4px 6px rgba(59, 130, 246, 0.4)' } 
            : { backgroundColor: '#e5e7eb', color: '#374151', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' })
        });

        const getStatusText = () => {
          switch (status) {
            case 'idle':
              return '📡 Нажмите "Отправить запрос", чтобы начать взаимодействие.';
            case 'sending_request':
              return '📤 Узел А отправляет запрос Узлу Б...';
            case 'received':
              return '📨 Статус: Запрос получен. Узел Б обрабатывает данные.';
            case 'sending_response':
              return '📥 Узел Б отправляет ответ Узлу А...';
            case 'completed':
              return '✅ Взаимодействие завершено. Ответ получен.';
            default:
              return '';
          }
        };

        const legendStyle = {
          marginTop: '20px',
          fontSize: 'clamp(0.75rem, 3.5vw, 0.9rem)',
          color: '#6b7280',
          fontStyle: 'italic',
          padding: '10px',
          backgroundColor: '#f9fafb',
          borderRadius: '8px',
          lineHeight: '1.5'
        };

        const [windowWidth, setWindowWidth] = React.useState(typeof window !== 'undefined' ? window.innerWidth : 1200);

        React.useEffect(() => {
          const handleResize = () => setWindowWidth(window.innerWidth);
          window.addEventListener('resize', handleResize);
          return () => window.removeEventListener('resize', handleResize);
        }, []);

        const isMobile = windowWidth < 768;
        const isTablet = windowWidth >= 768 && windowWidth < 1024;

        const getAdaptedNodeStyle = () => ({
          ...nodeStyle,
          fontSize: isMobile ? '0.7rem' : 'clamp(0.8rem, 4vw, 1.2rem)',
          width: isMobile ? '60px' : nodeStyle.width,
          height: isMobile ? '60px' : nodeStyle.height
        });

        return (
          <div style={containerStyle}>
            <h2 style={headerStyle}>Запрос — Ответ</h2>
            
            <div style={networkContainerStyle}>
              <div style={{ ...getAdaptedNodeStyle(), backgroundColor: colors.nodeA }}>
                <span>Узел А</span>
                {!isMobile && <span style={{ fontSize: '0.7rem', fontWeight: 'normal' }}>Клиент</span>}
              </div>

              <div style={lineStyle}>
                {(status === 'sending_request' || status === 'sending_response' || status === 'completed') && (
                  <div style={getPacketStyle()}>
                    {status === 'sending_response' || status === 'completed' ? '📥' : '📤'}
                  </div>
                )}
              </div>

              <div style={{ ...getAdaptedNodeStyle(), backgroundColor: colors.nodeB }}>
                <span>Узел Б</span>
                {!isMobile && <span style={{ fontSize: '0.7rem', fontWeight: 'normal' }}>Сервер</span>}
              </div>
            </div>

            <div style={statusBoxStyle}>
              {getStatusText()}
            </div>

            <div style={buttonGroupStyle}>
              {(status === 'idle' || status === 'completed') && (
                <button 
                  onClick={handleSendRequest} 
                  style={buttonStyle(true)}
                  onMouseEnter={(e) => {
                    if (status === 'idle' || status === 'completed') {
                      e.target.style.transform = 'scale(1.05)';
                    }
                  }}
                  onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                >
                  Отправить запрос
                </button>
              )}
              
              {(status === 'sending_request' || status === 'received' || status === 'sending_response') && (
                <button 
                  disabled 
                  style={{ ...buttonStyle(false), opacity: 0.5, cursor: 'not-allowed' }}
                >
                  В процессе...
                </button>
              )}

              {status === 'completed' && (
                <button 
                  onClick={resetSimulation} 
                  style={{ ...buttonStyle(false), cursor: 'pointer' }}
                  onMouseEnter={(e) => {
                    if (status === 'completed') {
                      e.target.style.backgroundColor = '#d1d5db';
                    }
                  }}
                  onMouseLeave={(e) => e.target.style.backgroundColor = '#e5e7eb'}
                >
                  🔄 Сбросить
                </button>
              )}
            </div>
            
            <div style={legendStyle}>
              {!isMobile ? (
                <>
                  <span>🟢 Зеленый пакет: запрос от Клиента к Серверу.</span><br />
                  <span>🟠 Оранжевый пакет: ответ от Сервера к Клиенту.</span>
                </>
              ) : (
                <>
                  <span>🟢 Зеленый: запрос →</span><br />
                  <span>🟠 Оранжевый: ответ ←</span>
                </>
              )}
            </div>
          </div>
        );
      }}
    </BrowserOnly>
  );
};

export default RequestResponseModel;