import React, { useState } from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';

const AlgoCodeVisualizer = () => {
  const [step, setStep] = useState(0);

  const data = [
    { algo: "ПРОСНУТЬСЯ()", code: "wakeUp();" },
    { algo: "СОБРАТЬ ВЕЩИ()", code: "packBag();" },
    { algo: "ЕСЛИ ПОГОДА == 'ДОЖДЬ'", code: "if (weather === 'rain') {" },
    { algo: "ТО ОСТАТЬСЯ()", code: "  stayHome();" },
    { algo: "ИНАЧЕ ГУЛЯТЬ()", code: "} else { walk();" }
  ];

  return (
    <BrowserOnly>
      {() => (
        <div style={{ 
          border: '1px solid #ccc', 
          padding: '20px', 
          borderRadius: '8px',
          maxWidth: '1200px',
          margin: '0 auto',
          backgroundColor: '#fff'
        }}>
          <h3 style={{ margin: '0 0 20px 0', fontSize: 'clamp(1.2rem, 4vw, 1.5rem)' }}>
            Алгоритм и Код
          </h3>
          
          <div style={{ 
            display: 'flex', 
            flexDirection: 'column',
            gap: '20px',
            '@media (min-width: 768px)': {
              flexDirection: 'row'
            }
          }}>
            {/* Блок Алгоритма */}
            <div style={{ 
              flex: 1, 
              backgroundColor: '#f9f9f9', 
              padding: 'clamp(10px, 3vw, 20px)', 
              borderRadius: '8px',
              overflowX: 'auto'
            }}>
              <strong style={{ fontSize: 'clamp(14px, 3.5vw, 16px)', display: 'block', marginBottom: '10px' }}>
                Алгоритм (Мыслительный процесс)
              </strong>
              <ul style={{ 
                margin: 0, 
                paddingLeft: 'clamp(20px, 5vw, 30px)',
                listStyleType: 'none'
              }}>
                {data.map((item, idx) => (
                  <li key={idx} style={{ 
                    color: idx === step ? '#0066cc' : '#333', 
                    fontWeight: idx === step ? 'bold' : 'normal',
                    fontSize: 'clamp(14px, 3.5vw, 16px)',
                    padding: '8px 0',
                    borderBottom: idx !== data.length - 1 ? '1px solid #e0e0e0' : 'none',
                    transition: 'all 0.3s ease',
                    wordBreak: 'break-word'
                  }}>
                    {idx === step && '👉 '}
                    {item.algo}
                  </li>
                ))}
              </ul>
            </div>

            {/* Блок Кода */}
            <div style={{ 
              flex: 1, 
              backgroundColor: '#2d2d2d', 
              color: '#fff', 
              padding: 'clamp(10px, 3vw, 20px)', 
              borderRadius: '8px',
              fontFamily: 'monospace',
              overflowX: 'auto'
            }}>
              <strong style={{ 
                fontSize: 'clamp(14px, 3.5vw, 16px)', 
                display: 'block', 
                marginBottom: '10px',
                color: '#fff'
              }}>
                Код (Инструкции машине)
              </strong>
              <ul style={{ 
                margin: 0, 
                paddingLeft: 'clamp(20px, 5vw, 30px)',
                listStyleType: 'none'
              }}>
                {data.map((item, idx) => (
                  <li key={idx} style={{ 
                    color: idx === step ? '#4caf50' : '#ccc', 
                    fontWeight: idx === step ? 'bold' : 'normal',
                    fontSize: 'clamp(12px, 3vw, 14px)',
                    padding: '8px 0',
                    borderBottom: idx !== data.length - 1 ? '1px solid #444' : 'none',
                    transition: 'all 0.3s ease',
                    fontFamily: "'Courier New', 'Monaco', monospace",
                    wordBreak: 'break-word',
                    whiteSpace: 'pre-wrap'
                  }}>
                    {idx === step && '> '}
                    {item.code}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Кнопка управления */}
          <div style={{ 
            marginTop: '20px', 
            display: 'flex', 
            justifyContent: 'center',
            gap: '10px'
          }}>
            <button 
              onClick={() => setStep(prev => prev < data.length - 1 ? prev + 1 : 0)} 
              style={{ 
                cursor: 'pointer',
                padding: 'clamp(8px, 3vw, 12px) clamp(16px, 5vw, 24px)',
                fontSize: 'clamp(14px, 3.5vw, 16px)',
                backgroundColor: '#007bff',
                color: 'white',
                border: 'none',
                borderRadius: '6px',
                transition: 'all 0.3s ease',
                fontWeight: 'bold',
                width: 'auto',
                minWidth: '160px'
              }}
              onMouseEnter={(e) => e.target.style.backgroundColor = '#0056b3'}
              onMouseLeave={(e) => e.target.style.backgroundColor = '#007bff'}
            >
              {step === data.length - 1 ? '🔄 Начать сначала' : '➡️ Следующий шаг'}
            </button>
          </div>

          {/* Индикатор прогресса для мобильных устройств */}
          <div style={{ 
            marginTop: '15px',
            textAlign: 'center',
            fontSize: 'clamp(12px, 3vw, 14px)',
            color: '#666'
          }}>
            Шаг {step + 1} из {data.length}
          </div>
        </div>
      )}
    </BrowserOnly>
  );
};

export default AlgoCodeVisualizer;