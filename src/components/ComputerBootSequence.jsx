import React, { useState } from 'react';

const ComputerBootSequence = () => {
  const [status, setStatus] = useState('off');
  const [activePath, setActivePath] = useState([]);
  const [fileLocation, setFileLocation] = useState('disk');

  const handlePowerOn = () => {
    if (status === 'booting' || status === 'running') return;
    
    setStatus('booting');
    setActivePath(['psu', 'bios', 'disk', 'ram']);
    
    setTimeout(() => {
      setStatus('running');
      setActivePath([]); 
      setFileLocation('disk'); 
    }, 2000);
  };

  const handleOpenFile = () => {
    if (status !== 'running') return;
    
    if (fileLocation === 'disk') {
      setActivePath(['disk', 'ram']);
      setTimeout(() => {
        setFileLocation('ram');
        setActivePath([]);
        
        setActivePath(['ram', 'cpu']);
        setTimeout(() => {
          setFileLocation('cpu');
          setActivePath([]);
        }, 800);
      }, 600);
    } else if (fileLocation === 'ram') {
       setActivePath(['ram', 'cpu']);
       setTimeout(() => {
         setFileLocation('cpu');
         setActivePath([]);
       }, 800);
    }
  };

  const handleCloseFile = () => {
    if (status !== 'running') return;

    if (fileLocation === 'cpu') {
      setActivePath(['cpu', 'ram']);
      setTimeout(() => {
        setFileLocation('ram');
        setActivePath([]);
      }, 600);
    } else if (fileLocation === 'ram') {
      setActivePath(['ram', 'disk']);
      setTimeout(() => {
        setFileLocation('disk');
        setActivePath([]);
      }, 800);
    }
  };

  const handlePowerOff = () => {
    if (status === 'off' || status === 'booting') return;

    setStatus('closing');
    setActivePath(['cpu', 'ram']);
    setTimeout(() => {
      setFileLocation('disk');
      setActivePath(['ram', 'psu']);
    }, 1000);

    setTimeout(() => {
      setStatus('off');
      setActivePath([]);
      setFileLocation('disk');
    }, 2000);
  };

  const getComponentStyle = (componentId) => {
    const baseStyle = {
      width: '100%',
      aspectRatio: '1 / 1',
      borderRadius: '8px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      fontSize: 'clamp(10px, 3vw, 11px)',
      fontWeight: 'bold',
      color: '#fff',
      border: '2px solid #ccc',
      transition: 'all 0.3s ease',
      position: 'relative',
      zIndex: 2,
      backgroundColor: '#333',
      boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
      cursor: 'default',
      padding: '4px',
    };

    const activeStyle = {
      borderColor: '#4caf50',
      boxShadow: '0 0 15px #4caf50',
      transform: 'scale(1.05)',
      backgroundColor: '#2e7d32',
    };

    const processingStyle = {
      borderColor: '#ff9800',
      boxShadow: '0 0 15px #ff9800',
      transform: 'scale(1.05)',
      backgroundColor: '#ef6c00',
    };

    const poweredOffStyle = {
      borderColor: '#555',
      backgroundColor: '#222',
      opacity: 0.4,
      transform: 'scale(0.95)',
    };

    let currentStyle = { ...baseStyle };

    if (status === 'off') {
      currentStyle = { ...currentStyle, ...poweredOffStyle };
    } else if (activePath.includes(componentId)) {
      if (componentId === 'cpu' && fileLocation === 'cpu') {
         currentStyle = { ...currentStyle, ...processingStyle };
      } else {
         currentStyle = { ...currentStyle, ...activeStyle };
      }
    } else if (status === 'running') {
       currentStyle = { ...currentStyle, borderColor: '#4caf50', backgroundColor: '#1b5e20' };
    }

    return currentStyle;
  };

  const getResponsiveStyles = () => ({
    container: {
      fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif',
      padding: 'clamp(8px, 4vw, 20px)',
      backgroundColor: '#f9f9f9',
      borderRadius: 'clamp(8px, 3vw, 16px)',
      border: '1px solid #e0e0e0',
      textAlign: 'center',
      maxWidth: 'min(95%, 500px)',
      margin: '0 auto',
      width: '100%',
      boxSizing: 'border-box',
    },
    title: {
      marginBottom: 'clamp(8px, 3vw, 16px)',
      color: '#333',
      fontSize: 'clamp(16px, 5vw, 20px)',
      fontWeight: '600',
    },
    buttonContainer: {
      marginBottom: 'clamp(12px, 4vw, 20px)',
      display: 'flex',
      gap: 'clamp(4px, 2vw, 8px)',
      justifyContent: 'center',
      flexWrap: 'wrap',
    },
    button: {
      padding: 'clamp(5px, 2vw, 8px) clamp(12px, 3vw, 18px)',
      fontSize: 'clamp(12px, 3.5vw, 14px)',
      fontWeight: 'bold',
      borderRadius: '6px',
      border: 'none',
      cursor: 'pointer',
      transition: 'all 0.2s ease',
      whiteSpace: 'nowrap',
    },
    statusText: {
      marginBottom: 'clamp(12px, 4vw, 20px)',
      minHeight: 'clamp(36px, 6vw, 44px)',
      color: '#666',
      fontStyle: 'italic',
      fontSize: 'clamp(11px, 3vw, 13px)',
      textAlign: 'center',
      padding: '0 8px',
      wordBreak: 'break-word',
    },
    gridContainer: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 'clamp(10px, 3vw, 20px)',
      maxWidth: 'min(100%, 400px)',
      margin: '0 auto',
      position: 'relative',
    },

    grid: {
      display: 'contents',
    },
    footer: {
      marginTop: 'clamp(12px, 4vw, 20px)',
      fontSize: 'clamp(10px, 2.5vw, 11px)',
      color: '#888',
      padding: '0 8px',
    },
  });

  const styles = getResponsiveStyles();

  return (
    <div style={styles.container}>
      <h3 style={styles.title}>Жизненный цикл данных</h3>
      
      {/* Control Panel */}
      <div style={styles.buttonContainer}>
        {status === 'off' && (
          <button 
            onClick={handlePowerOn} 
            style={{
              ...styles.button,
              backgroundColor: '#4caf50',
              color: 'white',
              cursor: 'pointer',
            }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#45a049'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#4caf50'}
          >
            🔌 Включить компьютер
          </button>
        )}
        
        {status === 'running' && (
          <>
            <button 
              onClick={handleOpenFile} 
              disabled={fileLocation === 'cpu'} 
              style={{
                ...styles.button,
                backgroundColor: '#2196f3',
                color: 'white',
                cursor: fileLocation === 'cpu' ? 'not-allowed' : 'pointer',
                opacity: fileLocation === 'cpu' ? 0.6 : 1,
              }}
              onMouseEnter={(e) => {
                if (fileLocation !== 'cpu')
                  e.currentTarget.style.backgroundColor = '#0b7dda';
              }}
              onMouseLeave={(e) => {
                if (fileLocation !== 'cpu')
                  e.currentTarget.style.backgroundColor = '#2196f3';
              }}
            >
              📂 Открыть файл
            </button>
            <button 
              onClick={handleCloseFile} 
              disabled={fileLocation === 'disk'} 
              style={{
                ...styles.button,
                backgroundColor: '#ff9800',
                color: 'white',
                cursor: fileLocation === 'disk' ? 'not-allowed' : 'pointer',
                opacity: fileLocation === 'disk' ? 0.6 : 1,
              }}
              onMouseEnter={(e) => {
                if (fileLocation !== 'disk')
                  e.currentTarget.style.backgroundColor = '#e68900';
              }}
              onMouseLeave={(e) => {
                if (fileLocation !== 'disk')
                  e.currentTarget.style.backgroundColor = '#ff9800';
              }}
            >
              ❌ Закрыть файл
            </button>
            <button 
              onClick={handlePowerOff} 
              style={{
                ...styles.button,
                backgroundColor: '#f44336',
                color: 'white',
                cursor: 'pointer',
              }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#da190b'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#f44336'}
            >
              🔴 Выключить компьютер
            </button>
          </>
        )}
        
        {(status === 'booting' || status === 'closing') && (
          <button disabled style={{
            ...styles.button,
            cursor: 'not-allowed',
            opacity: 0.6,
            backgroundColor: '#ddd',
            color: '#666',
          }}>
            ⏳ Работа...
          </button>
        )}
      </div>

      {/* Status Text */}
      <div style={styles.statusText}>
        {status === 'off' && "💤 Компьютер выключен"}
        {status === 'booting' && "⚙️ Загрузка системы..."}
        {status === 'running' && (
          <>
            📄 Статус файла:&nbsp;
            <span style={{ 
              color: fileLocation === 'cpu' ? '#ff9800' : (fileLocation === 'ram' ? '#4caf50' : '#9e9e9e'), 
              fontWeight: 'bold',
              display: 'inline-block',
            }}>
              {fileLocation === 'cpu' ? '🔄 Обработка в ЦП' : (fileLocation === 'ram' ? '💾 В ОЗУ' : '💿 На диске')}
            </span>
          </>
        )}
        {status === 'closing' && "🧹 Очистка памяти..."}
      </div>

      {/* Components Grid */}
      <div style={styles.gridContainer}>
        {/* Row 1 */}
        <div id="psu" style={getComponentStyle('psu')}>
          <span style={{ fontSize: 'clamp(18px, 5vw, 24px)' }}>⚡</span>
          <span>БП</span>
        </div>
        
        <div id="bios" style={getComponentStyle('bios')}>
          <span style={{ fontSize: 'clamp(18px, 5vw, 24px)' }}>💾</span>
          <span>BIOS</span>
        </div>
        
        <div id="disk" style={getComponentStyle('disk')}>
          <span style={{ fontSize: 'clamp(18px, 5vw, 24px)' }}>💿</span>
          <span>Диск</span>
          {fileLocation === 'disk' && (
            <div style={{
              position: 'absolute',
              top: '-6px',
              right: '-6px',
              fontSize: 'clamp(12px, 3.5vw, 14px)',
              backgroundColor: '#ff9800',
              borderRadius: '50%',
              padding: '2px',
              width: 'clamp(16px, 4vw, 20px)',
              height: 'clamp(16px, 4vw, 20px)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              📄
            </div>
          )}
        </div>

        {/* Row 2 */}
        <div id="ram" style={getComponentStyle('ram')}>
          <span style={{ fontSize: 'clamp(18px, 5vw, 24px)' }}>🔋</span>
          <span>ОЗУ</span>
          {fileLocation === 'ram' && (
            <div style={{
              position: 'absolute',
              top: '-6px',
              right: '-6px',
              fontSize: 'clamp(12px, 3.5vw, 14px)',
              backgroundColor: '#4caf50',
              borderRadius: '50%',
              padding: '2px',
              width: 'clamp(16px, 4vw, 20px)',
              height: 'clamp(16px, 4vw, 20px)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              📄
            </div>
          )}
        </div>

        <div id="cpu" style={getComponentStyle('cpu')}>
          <span style={{ fontSize: 'clamp(18px, 5vw, 24px)' }}>🧠</span>
          <span>ЦП</span>
          {fileLocation === 'cpu' && (
            <div style={{
              position: 'absolute',
              top: '-6px',
              right: '-6px',
              fontSize: 'clamp(12px, 3.5vw, 14px)',
              backgroundColor: '#ff9800',
              borderRadius: '50%',
              padding: '2px',
              width: 'clamp(16px, 4vw, 20px)',
              height: 'clamp(16px, 4vw, 20px)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              animation: 'pulse 1s infinite',
            }}>
              📄
            </div>
          )}
        </div>
        
        {/* Empty cell for alignment */}
        <div style={{ visibility: 'hidden' }}></div>
      </div>

      <div style={styles.footer}>
        Анимация показывает путь прохождения сигнала и перемещения данных
      </div>

      <style>
        {`
          @keyframes pulse {
            0%, 100% { transform: scale(1); opacity: 1; }
            50% { transform: scale(1.1); opacity: 0.8; }
          }
          
          @media (max-width: 480px) {
            button {
              white-space: normal !important;
              word-break: keep-all;
            }
          }
          
          @media (hover: hover) {
            button:hover {
              transform: translateY(-1px);
              filter: brightness(1.05);
            }
          }
        `}
      </style>
    </div>
  );
};

export default ComputerBootSequence;