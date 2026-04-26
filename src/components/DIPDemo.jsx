import React, { useState, useEffect } from 'react';

const DIPDemo = () => {
  const [activeDevice, setActiveDevice] = useState('bulb');
  const [bulbState, setBulbState] = useState(false);
  const [fanState, setFanState] = useState(false);
  const [radioState, setRadioState] = useState(false);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setWindowWidth(width);
      setIsMobile(width <= 768);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const devices = {
    bulb: { name: 'Лампочка', state: bulbState, setState: setBulbState, icon: '💡' },
    fan: { name: 'Вентилятор', state: fanState, setState: setFanState, icon: '🌀' },
    radio: { name: 'Радио', state: radioState, setState: setRadioState, icon: '📻' }
  };

  const currentDevice = devices[activeDevice];

  const toggleDevice = () => {
    currentDevice.setState(!currentDevice.state);
  };

  const styles = {
    container: {
      background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
      borderRadius: windowWidth <= 480 ? '16px' : '24px',
      padding: windowWidth <= 480 ? '1rem' : windowWidth <= 768 ? '1.2rem' : '1.5rem',
      margin: windowWidth <= 768 ? '1rem 0' : '2rem 0',
      color: '#e0e0e0',
      boxShadow: '0 20px 35px -10px rgba(0, 0, 0, 0.3)',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    },
    header: {
      margin: '0 0 0.5rem 0',
      fontSize: windowWidth <= 480 ? '1.2rem' : windowWidth <= 768 ? '1.4rem' : '1.6rem',
      color: '#fff',
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      flexWrap: 'wrap'
    },
    subtitle: {
      color: '#a0a0c0',
      fontSize: windowWidth <= 480 ? '0.85rem' : '0.95rem',
      marginBottom: windowWidth <= 480 ? '1.2rem' : '1.8rem',
      paddingBottom: '1rem',
      borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
    },
    layout: {
      display: 'flex',
      flexDirection: windowWidth <= 768 ? 'column' : 'row',
      gap: windowWidth <= 768 ? '1.5rem' : '2rem'
    },
    diagramContainer: {
      background: 'rgba(0, 0, 0, 0.3)',
      borderRadius: '16px',
      padding: windowWidth <= 480 ? '1rem' : '1.2rem',
      flex: windowWidth <= 768 ? 'auto' : '0 0 40%'
    },
    diagram: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '0.5rem',
      textAlign: 'center'
    },
    box: {
      background: 'rgba(255, 255, 255, 0.08)',
      borderRadius: '12px',
      padding: windowWidth <= 480 ? '0.6rem 0.8rem' : '0.8rem 1rem',
      margin: '0.5rem 0',
      transition: 'all 0.2s',
      border: '1px solid rgba(255, 255, 255, 0.15)',
      width: windowWidth <= 480 ? '100%' : 'auto',
      maxWidth: '300px'
    },
    switchBox: {
      background: 'linear-gradient(135deg, #2c3e66, #1a2639)',
      borderColor: '#4a6fa5'
    },
    interfaceBox: {
      background: 'linear-gradient(135deg, #2a1a3e, #1a0f2a)',
      borderColor: '#9b59b6'
    },
    deviceBox: {
      background: 'rgba(0, 0, 0, 0.4)',
      borderColor: '#5a6e8a'
    },
    bulbBox: {
      borderLeft: '4px solid #f39c12'
    },
    fanBox: {
      borderLeft: '4px solid #3498db'
    },
    radioBox: {
      borderLeft: '4px solid #e74c3c'
    },
    arrow: {
      fontSize: windowWidth <= 480 ? '0.7rem' : '0.85rem',
      color: '#6c7a8a',
      margin: '0.1rem 0'
    },
    devicesRow: {
      display: 'flex',
      gap: '0.8rem',
      justifyContent: 'center',
      marginTop: '0.8rem',
      flexWrap: 'wrap'
    },
    smallBox: {
      padding: windowWidth <= 480 ? '0.4rem 0.6rem' : '0.5rem 0.8rem',
      fontSize: windowWidth <= 480 ? '0.75rem' : '0.85rem'
    },
    note: {
      fontSize: '0.7rem',
      color: '#6c7a8a',
      marginTop: '0.5rem',
      display: 'block'
    },
    emoji: {
      fontSize: windowWidth <= 480 ? '1rem' : '1.2rem',
      marginRight: '0.4rem',
      display: 'inline-block',
      verticalAlign: 'middle'
    },
    interactiveDemo: {
      background: 'rgba(0, 0, 0, 0.25)',
      borderRadius: '16px',
      padding: windowWidth <= 480 ? '1rem' : '1.2rem',
      flex: windowWidth <= 768 ? 'auto' : '1'
    },
    deviceSelector: {
      marginBottom: '1rem'
    },
    selectorLabel: {
      display: 'block',
      fontSize: windowWidth <= 480 ? '0.8rem' : '0.85rem',
      color: '#a0a0c0',
      marginBottom: '0.6rem'
    },
    buttonsGroup: {
      display: 'flex',
      gap: '0.6rem',
      flexWrap: 'wrap',
      marginBottom: windowWidth <= 480 ? '1rem' : '1.5rem'
    },
    button: {
      background: 'rgba(255, 255, 255, 0.1)',
      border: '1px solid rgba(255, 255, 255, 0.2)',
      padding: windowWidth <= 480 ? '0.4rem 0.8rem' : '0.5rem 1rem',
      borderRadius: '40px',
      cursor: 'pointer',
      transition: 'all 0.2s',
      fontSize: windowWidth <= 480 ? '0.8rem' : '0.9rem',
      color: '#ddd',
      flex: windowWidth <= 480 ? '1 0 auto' : 'auto',
      minWidth: windowWidth <= 480 ? 'auto' : '80px'
    },
    activeButton: {
      background: 'linear-gradient(135deg, #667eea, #764ba2)',
      borderColor: 'transparent',
      color: 'white',
      boxShadow: '0 2px 8px rgba(102, 126, 234, 0.4)'
    },
    switchContainer: {
      background: 'rgba(0, 0, 0, 0.4)',
      borderRadius: '20px',
      padding: windowWidth <= 480 ? '1rem' : '1.5rem',
      margin: '1rem 0',
      textAlign: 'center'
    },
    deviceStatus: (isOn) => ({
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: windowWidth <= 480 ? '0.8rem' : '1.2rem',
      padding: windowWidth <= 480 ? '0.8rem' : '1rem',
      borderRadius: '16px',
      marginBottom: windowWidth <= 480 ? '1rem' : '1.5rem',
      transition: 'all 0.3s ease',
      background: isOn 
        ? 'linear-gradient(135deg, rgba(102, 126, 234, 0.2), rgba(118, 75, 162, 0.2))'
        : 'rgba(0, 0, 0, 0.5)',
      opacity: isOn ? 1 : 0.6,
      boxShadow: isOn ? '0 0 15px rgba(102, 126, 234, 0.3)' : 'none',
      flexDirection: windowWidth <= 480 ? 'row' : 'row'
    }),
    deviceIcon: {
      fontSize: windowWidth <= 480 ? '2rem' : windowWidth <= 768 ? '2.5rem' : '3rem',
      filter: 'drop-shadow(0 2px 6px rgba(0,0,0,0.3))'
    },
    deviceInfo: {
      textAlign: 'left'
    },
    deviceName: {
      display: 'block',
      fontSize: windowWidth <= 480 ? '1rem' : '1.2rem'
    },
    statusText: {
      fontSize: windowWidth <= 480 ? '0.75rem' : '0.85rem',
      color: '#aaa'
    },
    switchButton: {
      background: '#2c3e50',
      border: 'none',
      padding: windowWidth <= 480 ? '0.6rem 1.2rem' : '0.8rem 2rem',
      borderRadius: '40px',
      fontSize: windowWidth <= 480 ? '0.85rem' : '1rem',
      fontWeight: 'bold',
      cursor: 'pointer',
      transition: 'all 0.2s',
      color: '#ecf0f1',
      display: 'inline-flex',
      alignItems: 'center',
      gap: '0.6rem',
      boxShadow: '0 4px 10px rgba(0,0,0,0.3)',
      width: windowWidth <= 480 ? '100%' : 'auto'
    },
    codeHint: {
      margin: '1rem 0'
    },
    details: {
      background: 'rgba(0, 0, 0, 0.4)',
      borderRadius: '12px',
      padding: windowWidth <= 480 ? '0.5rem' : '0.6rem'
    },
    summary: {
      cursor: 'pointer',
      color: '#8ec07c',
      fontSize: windowWidth <= 480 ? '0.8rem' : '0.9rem',
      userSelect: 'none',
      display: 'inline-block'
    },
    codeBlock: {
      background: '#0d1117',
      padding: windowWidth <= 480 ? '0.8rem' : '1rem',
      borderRadius: '12px',
      overflowX: 'auto',
      fontSize: windowWidth <= 480 ? '0.65rem' : '0.75rem',
      lineHeight: '1.4',
      color: '#e6e6e6',
      marginTop: '0.8rem',
      border: '1px solid #2d2d3d',
      fontFamily: 'monospace',
      whiteSpace: 'pre-wrap',
      wordBreak: 'break-word'
    },
    benefits: {
      display: 'flex',
      flexDirection: 'column',
      gap: '0.6rem',
      marginTop: '1.2rem',
      paddingTop: '1rem',
      borderTop: '1px solid rgba(255, 255, 255, 0.1)'
    },
    benefit: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.6rem',
      fontSize: windowWidth <= 480 ? '0.8rem' : '0.85rem',
      background: 'rgba(255, 255, 255, 0.03)',
      padding: '0.5rem 0.8rem',
      borderRadius: '10px'
    },
    benefitIcon: {
      fontSize: '1.1rem'
    }
  };

  return (
    <div style={styles.container}>
      <div>
        <h3 style={styles.header}>
          <span>🔄</span> Принцип инверсии зависимостей (DIP)
        </h3>
        <p style={styles.subtitle}>
          Модули верхнего уровня (Switch) зависят от абстракции (Switchable),
          а не от конкретных устройств (LightBulb, Fan, Radio)
        </p>
      </div>

      <div style={styles.layout}>
        {/* Левая колонка - диаграмма */}
        <div style={styles.diagramContainer}>
          <div style={styles.diagram}>
            <div>
              <div style={{...styles.box, ...styles.switchBox}}>
                <span style={styles.emoji}>🔌</span>
                <strong>Switch</strong>
                <small style={{display: 'block', fontSize: windowWidth <= 480 ? '0.6rem' : '0.7rem'}}>(высокоуровн. модуль)</small>
              </div>
              <div style={styles.arrow}>зависит от ↓</div>
            </div>
            
            <div>
              <div style={{...styles.box, ...styles.interfaceBox}}>
                <span style={styles.emoji}>📄</span>
                <strong style={{display: 'inline-block'}}>«interface»</strong>
                <strong style={{color: '#e83e8c', display: 'inline-block'}}> Switchable</strong>
                <small style={{display: 'block', fontSize: windowWidth <= 480 ? '0.6rem' : '0.7rem'}}>+ turnOn()<br/>+ turnOff()</small>
              </div>
              <div style={styles.arrow}>реализуют ↓</div>
            </div>

            <div>
              <div style={styles.devicesRow}>
                <div style={{...styles.box, ...styles.smallBox, ...styles.bulbBox}}>
                  <span style={styles.emoji}>💡</span>
                  <strong>LightBulb</strong>
                </div>
                <div style={{...styles.box, ...styles.smallBox, ...styles.fanBox}}>
                  <span style={styles.emoji}>🌀</span>
                  <strong>Fan</strong>
                </div>
                <div style={{...styles.box, ...styles.smallBox, ...styles.radioBox}}>
                  <span style={styles.emoji}>📻</span>
                  <strong>Radio</strong>
                </div>
              </div>
              <small style={styles.note}>низкоуровн. модули (детали)</small>
            </div>
          </div>
        </div>

        {/* Правая колонка - интерактивная демка */}
        <div style={styles.interactiveDemo}>
          <div style={styles.deviceSelector}>
            <label style={styles.selectorLabel}>Выбери устройство (любое Switchable):</label>
            <div style={styles.buttonsGroup}>
              <button 
                style={{
                  ...styles.button,
                  ...(activeDevice === 'bulb' ? styles.activeButton : {})
                }}
                onClick={() => setActiveDevice('bulb')}
                onMouseEnter={(e) => {
                  if (activeDevice !== 'bulb') {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (activeDevice !== 'bulb') {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                  }
                }}
              >
                Лампочка
              </button>
              <button 
                style={{
                  ...styles.button,
                  ...(activeDevice === 'fan' ? styles.activeButton : {})
                }}
                onClick={() => setActiveDevice('fan')}
                onMouseEnter={(e) => {
                  if (activeDevice !== 'fan') {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (activeDevice !== 'fan') {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                  }
                }}
              >
                Вентилятор
              </button>
              <button 
                style={{
                  ...styles.button,
                  ...(activeDevice === 'radio' ? styles.activeButton : {})
                }}
                onClick={() => setActiveDevice('radio')}
                onMouseEnter={(e) => {
                  if (activeDevice !== 'radio') {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (activeDevice !== 'radio') {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                  }
                }}
              >
                Радио
              </button>
            </div>
          </div>

          <div style={styles.switchContainer}>
            <div style={styles.deviceStatus(currentDevice.state)}>
              <div style={styles.deviceIcon}>{currentDevice.icon}</div>
              <div style={styles.deviceInfo}>
                <strong style={styles.deviceName}>{currentDevice.name}</strong>
                <span style={styles.statusText}>
                  {currentDevice.state ? '🔛 Включено' : '⛔ Выключено'}
                </span>
              </div>
            </div>

            <button 
              style={styles.switchButton}
              onClick={toggleDevice}
              onMouseEnter={(e) => {
                if (!isMobile) {
                  e.currentTarget.style.background = '#3d5a73';
                  e.currentTarget.style.transform = 'scale(1.02)';
                }
              }}
              onMouseLeave={(e) => {
                if (!isMobile) {
                  e.currentTarget.style.background = '#2c3e50';
                  e.currentTarget.style.transform = 'scale(1)';
                }
              }}
              onTouchStart={(e) => {
                e.currentTarget.style.transform = 'scale(0.98)';
              }}
              onTouchEnd={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
              }}
            >
              <span className="switch-lever"></span>
              {currentDevice.state ? 'ВЫКЛЮЧИТЬ' : 'ВКЛЮЧИТЬ'}
            </button>
          </div>

          <div style={styles.codeHint}>
            <details style={styles.details}>
              <summary style={styles.summary}>Посмотреть как работает абстракция</summary>
              <pre style={styles.codeBlock}>
{`// Абстракция (интерфейс)
interface Switchable {
  void turnOn();
  void turnOff();
}

// Высокоуровневый модуль зависит от абстракции
class Switch {
  private Switchable device;
  
  public Switch(Switchable device) {
    this.device = device;
  }
  
  public void toggle() {
    if (device.isOn()) device.turnOff();
    else device.turnOn();
  }
}

// Любое устройство может реализовать Switchable
class LightBulb implements Switchable { ... }
class Fan implements Switchable { ... }
class Radio implements Switchable { ... }

// Теперь Switch работает с ЛЮБЫМ Switchable устройством!
Switch wallSwitch = new Switch(new Radio());
wallSwitch.toggle(); // Включает радио`}
              </pre>
            </details>
          </div>

          <div style={styles.benefits}>
            <div style={styles.benefit}>
              <span style={styles.benefitIcon}>✅</span>
              <span><strong>Гибкость</strong> — Switch не нужно менять для новых устройств</span>
            </div>
            <div style={styles.benefit}>
              <span style={styles.benefitIcon}>✅</span>
              <span><strong>Расширяемость</strong> — добавь TV, Projector, Heater...</span>
            </div>
            <div style={styles.benefit}>
              <span style={styles.benefitIcon}>✅</span>
              <span><strong>Тестируемость</strong> — можно подставить Mock-устройство</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DIPDemo;