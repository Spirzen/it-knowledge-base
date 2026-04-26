import React, { useState, useEffect } from 'react';
import BrowserOnly from './BrowserOnly';

const IpAddressAnalyzer = () => {
  return (
    <BrowserOnly>
      {() => {
        const [ipInput, setIpInput] = useState('');
        const [maskInput, setMaskInput] = useState('/24');
        const [result, setResult] = useState(null);
        const [error, setError] = useState(null);
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
            border: '1px solid #dcdcdc',
            borderRadius: '8px',
            padding: isMobile ? '15px' : '20px',
            margin: isMobile ? '10px 0' : '20px 0',
            backgroundColor: '#fafafa',
            fontFamily: 'inherit',
            maxWidth: '100%',
            boxSizing: 'border-box'
          },
          heading: {
            marginTop: '0',
            marginBottom: isMobile ? '12px' : '15px',
            color: '#333',
            fontSize: isMobile ? '1.1rem' : '1.25rem',
            fontWeight: '600',
            wordWrap: 'break-word'
          },
          description: {
            marginBottom: '20px',
            color: '#555',
            lineHeight: '1.5',
            fontSize: isMobile ? '0.85rem' : '1rem',
            wordWrap: 'break-word'
          },
          inputGroup: {
            display: 'flex',
            gap: isMobile ? '10px' : '15px',
            marginBottom: '20px',
            flexWrap: 'wrap',
            flexDirection: isMobile ? 'column' : 'row'
          },
          inputWrapper: {
            flex: '1',
            minWidth: isMobile ? '100%' : '200px',
            display: 'flex',
            flexDirection: 'column'
          },
          label: {
            fontWeight: '600',
            color: '#444',
            fontSize: isMobile ? '0.85rem' : '0.95rem',
            marginBottom: '5px'
          },
          input: {
            width: '100%',
            padding: isMobile ? '8px 10px' : '10px 12px',
            border: '1px solid #ddd',
            borderRadius: '4px',
            fontSize: isMobile ? '0.9rem' : '1rem',
            fontFamily: "'Consolas', 'Monaco', 'Courier New', monospace",
            boxSizing: 'border-box',
            WebkitAppearance: 'none',
            MozAppearance: 'none'
          },
          button: {
            padding: isMobile ? '10px 16px' : '10px 20px',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            fontSize: isMobile ? '0.9rem' : '1rem',
            fontWeight: '600',
            cursor: 'pointer',
            alignSelf: isMobile ? 'stretch' : 'flex-end',
            height: isMobile ? 'auto' : '42px',
            width: isMobile ? '100%' : 'auto',
            transition: 'background-color 0.2s ease',
            ':hover': {
              backgroundColor: '#0056b3'
            },
            ':active': {
              transform: 'scale(0.98)'
            }
          },
          resultContainer: {
            marginTop: '20px',
            backgroundColor: '#fff',
            border: '1px solid #e0e0e0',
            borderRadius: '4px',
            overflow: 'hidden',
            overflowX: 'auto'
          },
          row: {
            display: 'flex',
            justifyContent: 'space-between',
            borderBottom: '1px solid #eee',
            padding: isMobile ? '10px 12px' : '12px 15px',
            alignItems: 'center',
            flexWrap: isMobile ? 'wrap' : 'nowrap',
            gap: isMobile ? '8px' : '0'
          },
          keyCell: {
            fontWeight: '600',
            color: '#555',
            fontSize: isMobile ? '0.85rem' : '0.95rem',
            flex: isMobile ? '1 1 100%' : '1',
            marginBottom: isMobile ? '5px' : '0'
          },
          valueCell: {
            color: '#007bff',
            fontFamily: "'Consolas', 'Monaco', 'Courier New', monospace",
            fontSize: isMobile ? '0.85rem' : '0.95rem',
            textAlign: isMobile ? 'left' : 'right',
            wordBreak: 'break-all',
            flex: isMobile ? '1 1 100%' : 'auto'
          },
          errorBox: {
            marginTop: '15px',
            padding: isMobile ? '8px 12px' : '10px',
            backgroundColor: '#ffebee',
            color: '#c62828',
            borderRadius: '4px',
            fontSize: isMobile ? '0.85rem' : '0.9rem',
            textAlign: 'center',
            border: '1px solid #ffcdd2',
            wordWrap: 'break-word'
          },
          hintBox: {
            marginTop: '20px',
            padding: isMobile ? '12px' : '15px',
            backgroundColor: '#e3f2fd',
            color: '#0d47a1',
            borderRadius: '4px',
            fontSize: isMobile ? '0.85rem' : '0.9rem',
            lineHeight: '1.6',
            border: '1px solid #bbdefb'
          },
          exampleList: {
            listStyleType: 'none',
            padding: 0,
            margin: '10px 0 0 0',
            fontSize: isMobile ? '0.85rem' : '0.9rem'
          },
          exampleItem: {
            marginBottom: '8px',
            paddingLeft: '10px',
            borderLeft: '3px solid #1565c0',
            wordWrap: 'break-word'
          },
          code: {
            backgroundColor: 'rgba(0,0,0,0.05)',
            padding: '2px 4px',
            borderRadius: '3px',
            fontFamily: "'Consolas', 'Monaco', 'Courier New', monospace",
            fontSize: isMobile ? '0.8rem' : '0.85rem'
          },
          networkInfo: {
            backgroundColor: '#f8f9fa',
            padding: isMobile ? '10px' : '12px',
            marginTop: '10px',
            borderRadius: '4px'
          }
        };

        const isValidIp = (ip) => {
          const parts = ip.split('.');
          if (parts.length !== 4) return false;
          return parts.every(part => {
            const num = parseInt(part, 10);
            return !isNaN(num) && num >= 0 && num <= 255 && part === num.toString();
          });
        };

        const isValidMask = (mask) => {
          let cidr = mask;
          if (!mask.startsWith('/')) {
            const parts = mask.split('.');
            if (parts.length !== 4) return false;
            
            let binaryMask = '';
            for (let part of parts) {
              const num = parseInt(part, 10);
              if (isNaN(num) || num < 0 || num > 255) return false;
              binaryMask += parseInt(num).toString(2).padStart(8, '0');
            }
            cidr = '/' + binaryMask.match(/1+/)[0].length;
          } else {
            const val = parseInt(mask.substring(1), 10);
            if (isNaN(val) || val < 0 || val > 32) return false;
          }
          return true;
        };

        const calculateNetwork = () => {
          setError(null);
          setResult(null);

          const cleanIp = ipInput.trim();
          const cleanMask = maskInput.trim();

          if (!cleanIp || !cleanMask) {
            setError('Пожалуйста, заполните оба поля.');
            return;
          }

          if (!isValidIp(cleanIp)) {
            setError('Неверный формат IP-адреса. Используйте формат X.X.X.X, где X от 0 до 255.');
            return;
          }

          if (!isValidMask(cleanMask)) {
            setError('Неверный формат маски. Используйте CIDR (/24) или классический вид (255.255.255.0).');
            return;
          }

          try {
            const ipParts = cleanIp.split('.').map(Number);
            let cidrBits = 0;

            if (cleanMask.startsWith('/')) {
              cidrBits = parseInt(cleanMask.substring(1), 10);
            } else {
              const maskParts = cleanMask.split('.').map(Number);
              let binaryMask = '';
              maskParts.forEach(p => binaryMask += p.toString(2).padStart(8, '0'));
              cidrBits = binaryMask.split('').filter(bit => bit === '1').length;
            }

            const ipLong = (ipParts[0] << 24) + (ipParts[1] << 16) + (ipParts[2] << 8) + ipParts[3];
            const maskLong = cidrBits === 0 ? 0 : -1 >>> (32 - cidrBits);
            const networkLong = ipLong & maskLong;
            const broadcastLong = networkLong | (~maskLong);

            const getIpFromLong = (long) => {
              return [
                (long >>> 24) & 255,
                (long >>> 16) & 255,
                (long >>> 8) & 255,
                long & 255
              ].join('.');
            };

            const networkIp = getIpFromLong(networkLong);
            const broadcastIp = getIpFromLong(broadcastLong);
            const firstHost = cidrBits < 31 ? getIpFromLong(networkLong + 1) : 'Нет (точка-точка)';
            const lastHost = cidrBits < 31 ? getIpFromLong(broadcastLong - 1) : 'Нет (точка-точка)';
            const totalHosts = Math.pow(2, 32 - cidrBits) - 2;
            const wildcardMask = getIpFromLong(~maskLong);

            setResult({
              ip: cleanIp,
              mask: cleanMask,
              cidr: '/' + cidrBits,
              network: networkIp,
              broadcast: broadcastIp,
              firstHost,
              lastHost,
              totalHosts: totalHosts > 0 ? totalHosts : 0,
              wildcard: wildcardMask
            });
          } catch (err) {
            setError(`Ошибка вычисления: ${err.message}`);
          }
        };

        const handleKeyPress = (e) => {
          if (e.key === 'Enter') {
            calculateNetwork();
          }
        };

        return (
          <div style={styles.container}>
            <h3 style={styles.heading}>
              {isMobile ? 'Анализатор IP' : 'Анализатор IP-адресов и маски'}
            </h3>
            
            {!isMobile && (
              <p style={styles.description}>
                Введите IP-адрес устройства и маску подсети. Система определит сетевой адрес, 
                адрес широковещания и диапазон доступных хостов.
              </p>
            )}

            <div style={styles.inputGroup}>
              <div style={styles.inputWrapper}>
                <label htmlFor="ip-input" style={styles.label}>IP-адрес</label>
                <input
                  id="ip-input"
                  type="text"
                  value={ipInput}
                  onChange={(e) => setIpInput(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Например: 192.168.1.10"
                  style={styles.input}
                  inputMode="decimal"
                />
              </div>

              <div style={styles.inputWrapper}>
                <label htmlFor="mask-input" style={styles.label}>Маска подсети</label>
                <input
                  id="mask-input"
                  type="text"
                  value={maskInput}
                  onChange={(e) => setMaskInput(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Например: /24 или 255.255.255.0"
                  style={styles.input}
                  inputMode="text"
                />
              </div>

              <button 
                onClick={calculateNetwork} 
                style={styles.button}
                onTouchStart={(e) => {
                  e.currentTarget.style.transform = 'scale(0.98)';
                }}
                onTouchEnd={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                }}
              >
                Рассчитать
              </button>
            </div>

            {error && (
              <div style={styles.errorBox}>
                ⚠️ {error}
              </div>
            )}

            {result && (
              <div style={styles.resultContainer}>
                <div style={{...styles.row, borderBottom: '2px solid #007bff'}}>
                  <span style={styles.keyCell}>Исходные данные</span>
                  <span style={styles.valueCell}>{result.ip} {result.cidr}</span>
                </div>
                
                <div style={styles.row}>
                  <span style={styles.keyCell}>🌐 Сетевой адрес</span>
                  <span style={styles.valueCell}>{result.network}</span>
                </div>
                
                <div style={styles.row}>
                  <span style={styles.keyCell}>📢 Широковещательный адрес</span>
                  <span style={styles.valueCell}>{result.broadcast}</span>
                </div>
                
                <div style={styles.row}>
                  <span style={styles.keyCell}>🖥️ Первый доступный хост</span>
                  <span style={styles.valueCell}>{result.firstHost}</span>
                </div>
                
                <div style={styles.row}>
                  <span style={styles.keyCell}>🖥️ Последний доступный хост</span>
                  <span style={styles.valueCell}>{result.lastHost}</span>
                </div>
                
                <div style={styles.row}>
                  <span style={styles.keyCell}>📊 Диапазон хостов</span>
                  <span style={styles.valueCell}>
                    {isMobile ? (
                      <div>
                        <div>{result.firstHost}</div>
                        <div style={{fontSize: '0.75rem', color: '#666'}}>—</div>
                        <div>{result.lastHost}</div>
                      </div>
                    ) : (
                      `${result.firstHost} — ${result.lastHost}`
                    )}
                  </span>
                </div>
                
                <div style={styles.row}>
                  <span style={styles.keyCell}>🔢 Количество хостов</span>
                  <span style={styles.valueCell}>{result.totalHosts.toLocaleString()}</span>
                </div>
                
                <div style={{...styles.row, borderBottom: 'none'}}>
                  <span style={styles.keyCell}>🎭 Маска Wildcard</span>
                  <span style={styles.valueCell}>{result.wildcard}</span>
                </div>
              </div>
            )}

            <div style={styles.hintBox}>
              <strong>💡 {isMobile ? 'Подсказки' : 'Как использовать:'}</strong>
              <ul style={styles.exampleList}>
                <li style={styles.exampleItem}>
                  <strong>Домашняя сеть:</strong> <code style={styles.code}>192.168.1.10</code> + <code style={styles.code}>/24</code>
                </li>
                <li style={styles.exampleItem}>
                  <strong>Публичный адрес:</strong> <code style={styles.code}>8.8.8.8</code> + <code style={styles.code}>/32</code>
                </li>
                <li style={styles.exampleItem}>
                  <strong>Форматы маски:</strong> CIDR (<code style={styles.code}>/24</code>) или классический (<code style={styles.code}>255.255.255.0</code>)
                </li>
              </ul>
            </div>
          </div>
        );
      }}
    </BrowserOnly>
  );
};

export default IpAddressAnalyzer;