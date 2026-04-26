import React, { useState } from 'react';
import BrowserOnly from './BrowserOnly';

const UrlUriRnConverter = () => {
  return (
    <BrowserOnly>
      {() => {
        const [inputString, setInputString] = useState('');
        const [parsedData, setParsedData] = useState(null);
        const [error, setError] = useState(null);
        const [typeLabel, setTypeLabel] = useState('');

        const styles = {
          container: {
            border: '1px solid #dcdcdc',
            borderRadius: '8px',
            padding: 'clamp(12px, 4vw, 20px)',
            margin: 'clamp(10px, 3vw, 20px) 0',
            backgroundColor: '#fafafa',
            fontFamily: 'inherit',
            maxWidth: '100%',
            boxSizing: 'border-box'
          },
          heading: {
            marginTop: '0',
            marginBottom: 'clamp(10px, 3vw, 15px)',
            color: '#333',
            fontSize: 'clamp(1.1rem, 4vw, 1.25rem)',
            fontWeight: '600',
            wordBreak: 'break-word'
          },
          description: {
            marginBottom: 'clamp(15px, 4vw, 20px)',
            color: '#555',
            lineHeight: '1.5',
            fontSize: 'clamp(0.85rem, 3vw, 0.95rem)'
          },
          inputGroup: {
            display: 'flex',
            flexDirection: 'column',
            gap: 'clamp(8px, 3vw, 10px)',
            marginBottom: 'clamp(15px, 4vw, 20px)'
          },
          label: {
            fontWeight: '600',
            color: '#444',
            fontSize: 'clamp(0.85rem, 3vw, 0.95rem)',
            marginBottom: '5px'
          },
          textarea: {
            width: '100%',
            padding: 'clamp(10px, 3vw, 12px)',
            border: '1px solid #ddd',
            borderRadius: '4px',
            fontFamily: "'Consolas', 'Monaco', 'Courier New', monospace",
            fontSize: 'clamp(0.85rem, 3vw, 0.95rem)',
            resize: 'vertical',
            minHeight: 'clamp(70px, 15vw, 80px)',
            boxSizing: 'border-box',
            WebkitAppearance: 'none'
          },
          button: {
            padding: 'clamp(8px 16px, 3vw 5vw, 10px 20px)',
            paddingTop: 'clamp(8px, 2.5vw, 10px)',
            paddingBottom: 'clamp(8px, 2.5vw, 10px)',
            paddingLeft: 'clamp(16px, 5vw, 20px)',
            paddingRight: 'clamp(16px, 5vw, 20px)',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            fontSize: 'clamp(0.9rem, 3vw, 1rem)',
            fontWeight: '600',
            cursor: 'pointer',
            alignSelf: 'start',
            transition: 'background-color 0.2s ease',
            width: 'auto',
            minWidth: 'clamp(120px, 30vw, 160px)',
            ':hover': {
              backgroundColor: '#0056b3'
            },
            ':active': {
              transform: 'scale(0.98)'
            }
          },
          resultContainer: {
            marginTop: 'clamp(15px, 4vw, 20px)',
            backgroundColor: '#fff',
            border: '1px solid #e0e0e0',
            borderRadius: '4px',
            padding: 'clamp(12px, 3vw, 15px)',
            overflowX: 'auto'
          },
          typeBadge: {
            display: 'inline-block',
            padding: 'clamp(4px 8px, 2vw 3vw, 4px 8px)',
            paddingTop: 'clamp(4px, 1.5vw, 6px)',
            paddingBottom: 'clamp(4px, 1.5vw, 6px)',
            paddingLeft: 'clamp(8px, 3vw, 12px)',
            paddingRight: 'clamp(8px, 3vw, 12px)',
            borderRadius: '4px',
            fontSize: 'clamp(0.75rem, 2.5vw, 0.85rem)',
            fontWeight: 'bold',
            marginBottom: 'clamp(10px, 3vw, 15px)',
            color: '#fff'
          },
          row: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            borderBottom: '1px solid #eee',
            padding: 'clamp(8px, 2.5vw, 10px) 0',
            gap: 'clamp(8px, 3vw, 15px)',
            '@media (max-width: 480px)': {
              flexDirection: 'column',
              alignItems: 'flex-start',
              gap: '5px'
            }
          },
          key: {
            fontWeight: '600',
            color: '#555',
            flex: '1',
            fontSize: 'clamp(0.8rem, 2.8vw, 0.9rem)',
            minWidth: 'clamp(80px, 25vw, 100px)'
          },
          value: {
            color: '#007bff',
            wordBreak: 'break-all',
            textAlign: 'right',
            fontSize: 'clamp(0.8rem, 2.8vw, 0.9rem)',
            flex: '2',
            '@media (max-width: 480px)': {
              textAlign: 'left'
            }
          },
          errorBox: {
            marginTop: 'clamp(12px, 3vw, 15px)',
            padding: 'clamp(10px, 3vw, 12px)',
            backgroundColor: '#ffebee',
            color: '#c62828',
            borderRadius: '4px',
            fontSize: 'clamp(0.8rem, 2.8vw, 0.9rem)',
            textAlign: 'center',
            border: '1px solid #ffcdd2',
            wordBreak: 'break-word'
          },
          infoBox: {
            marginTop: 'clamp(12px, 3vw, 15px)',
            padding: 'clamp(10px, 3vw, 12px)',
            backgroundColor: '#e3f2fd',
            color: '#0d47a1',
            borderRadius: '4px',
            fontSize: 'clamp(0.8rem, 2.8vw, 0.9rem)',
            border: '1px solid #bbdefb',
            wordBreak: 'break-word'
          },
          examplesContainer: {
            marginTop: 'clamp(15px, 4vw, 20px)',
            fontSize: 'clamp(0.8rem, 2.8vw, 0.9rem)',
            color: '#666'
          },
          code: {
            backgroundColor: '#f0f0f0',
            padding: '2px 6px',
            borderRadius: '3px',
            fontFamily: "'Consolas', 'Monaco', 'Courier New', monospace",
            fontSize: 'clamp(0.75rem, 2.5vw, 0.85rem)',
            wordBreak: 'break-all',
            display: 'inline-block',
            maxWidth: '100%',
            overflowX: 'auto'
          }
        };

        const handleParse = () => {
          setError(null);
          setParsedData(null);
          setTypeLabel('');

          if (!inputString.trim()) {
            return;
          }

          try {
            let urlObj;
            let detectedType = '';

            try {
              urlObj = new URL(inputString);
              detectedType = 'URL (Uniform Resource Locator)';
            } catch (urlError) {
              if (inputString.startsWith('urn:')) {
                detectedType = 'URN (Uniform Resource Name)';
                urlObj = null;
              } else {
                detectedType = 'URI (Uniform Resource Identifier)';
                urlObj = null;
              }
            }

            let components = {};

            if (detectedType.includes('URL')) {
              components = {
                scheme: urlObj.protocol.replace(':', ''),
                host: urlObj.hostname,
                port: urlObj.port || '(стандартный)',
                pathname: urlObj.pathname,
                search: urlObj.search || '(пусто)',
                hash: urlObj.hash || '(пусто)',
                username: urlObj.username || '(не указан)',
                password: urlObj.password ? '(скрыт)' : '(не указан)',
                fullAuthority: `${urlObj.host}${urlObj.port && urlObj.port !== '80' && urlObj.port !== '443' ? ':' + urlObj.port : ''}`
              };
            } else if (detectedType.includes('URN')) {
              const parts = inputString.split(':');
              if (parts.length >= 3) {
                components = {
                  namespace: parts[1],
                  nss: parts.slice(2).join(':'),
                  fullUrn: inputString
                };
              } else {
                components = {
                  raw: inputString,
                  note: 'Не удалось распарсить структуру URN корректно'
                };
              }
            } else {
              try {
                 const schemeMatch = inputString.match(/^([a-zA-Z][a-zA-Z0-9+.-]*):/);
                 if (schemeMatch) {
                   const scheme = schemeMatch[1];
                   const rest = inputString.substring(scheme.length + 1);
                   
                   components = {
                     scheme: scheme,
                     authority: rest.startsWith('//') ? rest.substring(2) : '(нет авторитета)',
                     path: rest.startsWith('//') ? rest.split('//')[1] : rest,
                     note: 'Это общий URI, содержащий схему и путь.'
                   };
                 } else {
                   throw new Error('Строка не содержит схемы URI');
                 }
              } catch (e) {
                components = {
                  raw: inputString,
                  note: 'Строка не соответствует стандартам URI/URL/URN'
                };
              }
            }

            setParsedData(components);
            setTypeLabel(detectedType);
          } catch (err) {
            setError(`Ошибка анализа: ${err.message}`);
          }
        };

        const handleKeyPress = (e) => {
          if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
            handleParse();
          }
        };

        return (
          <div style={styles.container}>
            <h3 style={styles.heading}>
              Анализатор URI / URL / URN
            </h3>
            <p style={styles.description}>
              Введите адрес (ссылку), идентификатор ресурса или имя ресурса ниже. 
              Система определит тип объекта и покажет его внутреннюю структуру.
            </p>

            <div style={styles.inputGroup}>
              <label htmlFor="uri-input" style={styles.label}>
                Введите строку:
              </label>
              <textarea
                id="uri-input"
                value={inputString}
                onChange={(e) => setInputString(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="Примеры: https://ru.wikipedia.org/wiki/URI, urn:isbn:0451450523"
                style={styles.textarea}
                rows={3}
              />
              <button 
                onClick={handleParse} 
                style={styles.button}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#0056b3'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#007bff'}
                onTouchStart={(e) => e.currentTarget.style.backgroundColor = '#0056b3'}
                onTouchEnd={(e) => e.currentTarget.style.backgroundColor = '#007bff'}
              >
                🔄 Анализировать
              </button>
            </div>

            {error && (
              <div style={styles.errorBox}>
                ⚠️ {error}
              </div>
            )}

            {parsedData && (
              <div style={styles.resultContainer}>
                <div style={{
                  ...styles.typeBadge, 
                  backgroundColor: parsedData.note ? '#ff9800' : '#4caf50'
                }}>
                  Тип: {typeLabel}
                </div>
                
                {Object.entries(parsedData).map(([key, value]) => (
                  <div key={key} style={styles.row}>
                    <span style={styles.key}>
                      {key === 'nss' ? 'NSS' : 
                       key === 'fullUrn' ? 'FULL URN' :
                       key === 'fullAuthority' ? 'FULL AUTHORITY' :
                       key.toUpperCase()}
                    </span>
                    <span style={styles.value}>{String(value)}</span>
                  </div>
                ))}

                {parsedData.note && (
                  <div style={styles.infoBox}>
                    💡 <b>Пояснение:</b> {parsedData.note}
                  </div>
                )}
              </div>
            )}
            
            <div style={styles.examplesContainer}>
              <strong>📋 Примеры для проверки:</strong><br/>
              • URL: <code style={styles.code}>https://example.com:8080/path/to/page?query=1#section</code><br/>
              • URN: <code style={styles.code}>urn:isbn:0451450523</code><br/>
              • URI: <code style={styles.code}>mailto:user@example.com</code>
              <div style={{marginTop: '8px', fontSize: '0.8rem', color: '#888'}}>
                💡 Подсказка: Нажмите Ctrl/Cmd + Enter для быстрого анализа
              </div>
            </div>
          </div>
        );
      }}
    </BrowserOnly>
  );
};

export default UrlUriRnConverter;