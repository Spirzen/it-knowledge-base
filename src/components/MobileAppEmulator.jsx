import React, { useState, useEffect } from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';

const MobileAppEmulator = () => {
  return (
    <BrowserOnly>
      {() => {
        const [count, setCount] = useState(0);
        const [activeTab, setActiveTab] = useState('home');
        const [isMobile, setIsMobile] = useState(false);

        useEffect(() => {
          const checkMobile = () => {
            setIsMobile(window.innerWidth <= 768);
          };
          
          checkMobile();
          window.addEventListener('resize', checkMobile);
          return () => window.removeEventListener('resize', checkMobile);
        }, []);

        const styles = {
          container: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '100vh',
            margin: 0,
            padding: isMobile ? '1rem' : '2rem 1rem',
            backgroundColor: '#e5e5ea',
            boxSizing: 'border-box',
          },
          phone: {
            width: isMobile ? '100%' : '320px',
            maxWidth: '500px',
            height: isMobile ? 'calc(100vh - 2rem)' : '600px',
            maxHeight: isMobile ? 'calc(100vh - 2rem)' : '800px',
            minHeight: isMobile ? '500px' : 'auto',
            backgroundColor: '#1c1c1e',
            borderRadius: isMobile ? '30px' : '40px',
            boxShadow: isMobile 
              ? '0 10px 30px rgba(0,0,0,0.2)' 
              : '0 25px 40px rgba(0,0,0,0.3), 0 0 0 8px #3a3a3c, 0 0 0 12px #1c1c1e',
            overflow: 'hidden',
            position: 'relative',
            fontFamily: 'system-ui, -apple-system, sans-serif',
            transition: 'all 0.3s ease',
          },
          screen: {
            width: '100%',
            height: '100%',
            backgroundColor: '#f9f9fb',
            display: 'flex',
            flexDirection: 'column',
            overflowY: 'auto',
            overflowX: 'hidden',
            scrollbarWidth: 'thin',
            WebkitOverflowScrolling: 'touch',
          },
          statusBar: {
            padding: isMobile ? '10px 16px 6px' : '12px 20px 6px',
            backgroundColor: '#f9f9fb',
            fontSize: isMobile ? '12px' : '14px',
            fontWeight: '600',
            display: 'flex',
            justifyContent: 'space-between',
            borderBottom: '1px solid #e5e5ea',
            flexShrink: 0,
          },
          time: {
            color: '#1c1c1e',
          },
          battery: {
            color: '#1c1c1e',
          },
          header: {
            padding: isMobile ? '10px 16px' : '12px 20px',
            backgroundColor: '#ffffff',
            borderBottom: '1px solid #e5e5ea',
            flexShrink: 0,
          },
          title: {
            margin: 0,
            fontSize: isMobile ? '20px' : '22px',
            fontWeight: '600',
            color: '#007aff',
          },
          content: {
            flex: 1,
            padding: isMobile ? '16px' : '20px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            overflowY: 'auto',
          },
          counterDisplay: {
            fontSize: isMobile ? '48px' : '64px',
            fontWeight: '700',
            color: '#007aff',
            margin: '20px 0',
          },
          buttonGroup: {
            display: 'flex',
            gap: '10px',
            marginTop: '20px',
            flexWrap: 'wrap',
            justifyContent: 'center',
            width: '100%',
          },
          button: {
            padding: isMobile ? '10px 20px' : '12px 24px',
            fontSize: isMobile ? '16px' : '18px',
            fontWeight: '600',
            border: 'none',
            borderRadius: '30px',
            cursor: 'pointer',
            transition: 'transform 0.1s ease, opacity 0.2s',
            flex: isMobile ? '0 1 auto' : 'auto',
            minWidth: isMobile ? '80px' : 'auto',
            touchAction: 'manipulation',
          },
          increment: {
            backgroundColor: '#007aff',
            color: 'white',
          },
          decrement: {
            backgroundColor: '#ff3b30',
            color: 'white',
          },
          reset: {
            backgroundColor: '#e5e5ea',
            color: '#1c1c1e',
          },
          tabs: {
            display: 'flex',
            borderTop: '1px solid #e5e5ea',
            backgroundColor: '#ffffff',
            flexShrink: 0,
          },
          tab: {
            flex: 1,
            padding: isMobile ? '10px 8px' : '12px',
            textAlign: 'center',
            fontSize: isMobile ? '12px' : '14px',
            fontWeight: '500',
            cursor: 'pointer',
            transition: 'background 0.2s, color 0.2s',
            color: '#8e8e93',
            touchAction: 'manipulation',
            whiteSpace: 'nowrap',
          },
          activeTab: {
            color: '#007aff',
            borderTop: '2px solid #007aff',
          },
          aboutText: {
            textAlign: 'center',
            color: '#3a3a3c',
            lineHeight: 1.5,
            fontSize: isMobile ? '14px' : '16px',
            width: '100%',
          },
          aboutList: {
            textAlign: 'left',
            paddingLeft: '20px',
            marginTop: '10px',
          },
          aboutListItem: {
            marginBottom: '8px',
          },
        };

        const now = new Date();
        const timeString = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

        const handleButtonClick = (action) => {
          if (action === 'increment') setCount(c => c + 1);
          if (action === 'decrement') setCount(c => c - 1);
          if (action === 'reset') setCount(0);
        };

        return (
          <div style={styles.container}>
            <div style={styles.phone}>
              <div style={styles.screen}>
                <div style={styles.statusBar}>
                  <span style={styles.time}>{timeString}</span>
                  <span style={styles.battery}>🔋 98%</span>
                </div>

                {activeTab === 'home' && (
                  <>
                    <div style={styles.header}>
                      <h2 style={styles.title}>Моё приложение</h2>
                    </div>
                    <div style={styles.content}>
                      <div style={styles.counterDisplay}>{count}</div>
                      <div style={styles.buttonGroup}>
                        <button
                          style={{ ...styles.button, ...styles.increment }}
                          onClick={() => handleButtonClick('increment')}
                          onTouchStart={(e) => e.currentTarget.style.transform = 'scale(0.95)'}
                          onTouchEnd={(e) => e.currentTarget.style.transform = 'scale(1)'}
                          onMouseDown={(e) => e.currentTarget.style.transform = 'scale(0.95)'}
                          onMouseUp={(e) => e.currentTarget.style.transform = 'scale(1)'}
                          onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                        >
                          +1
                        </button>
                        <button
                          style={{ ...styles.button, ...styles.decrement }}
                          onClick={() => handleButtonClick('decrement')}
                          onTouchStart={(e) => e.currentTarget.style.transform = 'scale(0.95)'}
                          onTouchEnd={(e) => e.currentTarget.style.transform = 'scale(1)'}
                          onMouseDown={(e) => e.currentTarget.style.transform = 'scale(0.95)'}
                          onMouseUp={(e) => e.currentTarget.style.transform = 'scale(1)'}
                          onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                        >
                          -1
                        </button>
                        <button
                          style={{ ...styles.button, ...styles.reset }}
                          onClick={() => handleButtonClick('reset')}
                          onTouchStart={(e) => e.currentTarget.style.transform = 'scale(0.95)'}
                          onTouchEnd={(e) => e.currentTarget.style.transform = 'scale(1)'}
                          onMouseDown={(e) => e.currentTarget.style.transform = 'scale(0.95)'}
                          onMouseUp={(e) => e.currentTarget.style.transform = 'scale(1)'}
                          onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                        >
                          Сброс
                        </button>
                      </div>
                    </div>
                  </>
                )}

                {activeTab === 'about' && (
                  <>
                    <div style={styles.header}>
                      <h2 style={styles.title}>О приложении</h2>
                    </div>
                    <div style={styles.content}>
                      <div style={styles.aboutText}>
                        <p>📱 Эмулятор мобильного приложения</p>
                        <p>✨ Простое приложение-счётчик</p>
                        <p>💡 Демонстрирует:</p>
                        <ul style={styles.aboutList}>
                          <li style={styles.aboutListItem}>Интерфейс псевдосмартфона</li>
                          <li style={styles.aboutListItem}>Работу состояния (state)</li>
                          <li style={styles.aboutListItem}>Вкладки навигации</li>
                          <li style={styles.aboutListItem}>Адаптивный дизайн</li>
                        </ul>
                      </div>
                    </div>
                  </>
                )}

                <div style={styles.tabs}>
                  <div
                    style={{
                      ...styles.tab,
                      ...(activeTab === 'home' ? styles.activeTab : {}),
                    }}
                    onClick={() => setActiveTab('home')}
                    onTouchStart={(e) => e.currentTarget.style.opacity = '0.7'}
                    onTouchEnd={(e) => e.currentTarget.style.opacity = '1'}
                    onMouseDown={(e) => e.currentTarget.style.opacity = '0.7'}
                    onMouseUp={(e) => e.currentTarget.style.opacity = '1'}
                  >
                    🏠 Главная
                  </div>
                  <div
                    style={{
                      ...styles.tab,
                      ...(activeTab === 'about' ? styles.activeTab : {}),
                    }}
                    onClick={() => setActiveTab('about')}
                    onTouchStart={(e) => e.currentTarget.style.opacity = '0.7'}
                    onTouchEnd={(e) => e.currentTarget.style.opacity = '1'}
                    onMouseDown={(e) => e.currentTarget.style.opacity = '0.7'}
                    onMouseUp={(e) => e.currentTarget.style.opacity = '1'}
                  >
                    ℹ️ О программе
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      }}
    </BrowserOnly>
  );
};

export default MobileAppEmulator;