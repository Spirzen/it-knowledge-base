import React, { useState } from 'react';
import BrowserOnly from './BrowserOnly';

const HttpRequestAnalyzer = () => {
  return (
    <BrowserOnly>
      {() => {
        const [inputText, setInputText] = useState('');
        const [parsedData, setParsedData] = useState(null);
        const [error, setError] = useState(null);

        const styles = {
          container: {
            border: '1px solid #dcdcdc',
            borderRadius: '8px',
            padding: '20px',
            margin: '20px 0',
            backgroundColor: '#fafafa',
            fontFamily: 'inherit',
            maxWidth: '100%',
            boxSizing: 'border-box',
            overflowX: 'auto'
          },
          heading: {
            marginTop: '0',
            marginBottom: '15px',
            color: '#333',
            fontSize: 'clamp(1.125rem, 4vw, 1.25rem)',
            fontWeight: '600',
            wordBreak: 'break-word'
          },
          description: {
            marginBottom: '20px',
            color: '#555',
            lineHeight: '1.5',
            fontSize: 'clamp(0.85rem, 3vw, 0.95rem)'
          },
          inputGroup: {
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
            marginBottom: '20px'
          },
          label: {
            fontWeight: '600',
            color: '#444',
            fontSize: 'clamp(0.85rem, 3vw, 0.95rem)',
            marginBottom: '5px'
          },
          textarea: {
            width: '100%',
            padding: '12px',
            border: '1px solid #ddd',
            borderRadius: '4px',
            fontFamily: "'Consolas', 'Monaco', 'Courier New', monospace",
            fontSize: 'clamp(0.85rem, 3vw, 0.95rem)',
            resize: 'vertical',
            minHeight: '100px',
            boxSizing: 'border-box',
            backgroundColor: '#fff',
            transition: 'border-color 0.2s ease'
          },
          button: {
            padding: 'clamp(8px, 3vw, 10px) clamp(16px, 4vw, 20px)',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            fontSize: 'clamp(0.9rem, 3.5vw, 1rem)',
            fontWeight: '600',
            cursor: 'pointer',
            alignSelf: 'start',
            height: 'auto',
            minHeight: '42px',
            width: 'auto',
            minWidth: '140px',
            transition: 'background-color 0.2s ease, transform 0.1s ease',
            WebkitTapHighlightColor: 'transparent'
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
            padding: 'clamp(10px, 3vw, 12px) clamp(10px, 4vw, 15px)',
            alignItems: 'flex-start',
            flexWrap: 'wrap',
            gap: '8px'
          },
          keyCell: {
            fontWeight: '600',
            color: '#555',
            fontSize: 'clamp(0.85rem, 3vw, 0.95rem)',
            flex: '1 1 auto',
            minWidth: '120px',
            wordBreak: 'break-word'
          },
          valueCell: {
            color: '#007bff',
            fontFamily: "'Consolas', 'Monaco', 'Courier New', monospace",
            fontSize: 'clamp(0.85rem, 3vw, 0.95rem)',
            textAlign: 'right',
            wordBreak: 'break-all',
            flex: '2 1 auto',
            maxWidth: '100%',
            overflowX: 'auto'
          },
          errorBox: {
            marginTop: '15px',
            padding: 'clamp(8px, 3vw, 10px)',
            backgroundColor: '#ffebee',
            color: '#c62828',
            borderRadius: '4px',
            fontSize: 'clamp(0.85rem, 3vw, 0.9rem)',
            textAlign: 'center',
            border: '1px solid #ffcdd2',
            wordBreak: 'break-word'
          },
          infoBox: {
            marginTop: '20px',
            padding: 'clamp(12px, 4vw, 15px)',
            backgroundColor: '#e3f2fd',
            color: '#0d47a1',
            borderRadius: '4px',
            fontSize: 'clamp(0.85rem, 3vw, 0.9rem)',
            lineHeight: '1.6',
            border: '1px solid #bbdefb'
          },
          exampleList: {
            listStyleType: 'none',
            padding: 0,
            margin: '10px 0 0 0',
            fontSize: 'clamp(0.85rem, 3vw, 0.9rem)'
          },
          exampleItem: {
            marginBottom: '8px',
            paddingLeft: '10px',
            borderLeft: '3px solid #1565c0',
            wordBreak: 'break-word'
          },
          sectionHeader: {
            backgroundColor: '#f1f3f4',
            padding: 'clamp(8px, 3vw, 10px) clamp(10px, 4vw, 15px)',
            fontWeight: '600',
            color: '#444',
            borderTop: '1px solid #ddd',
            fontSize: 'clamp(0.9rem, 3.5vw, 1rem)'
          },
          examplesContainer: {
            marginTop: '20px',
            fontSize: 'clamp(0.85rem, 3vw, 0.9rem)',
            color: '#666',
            wordBreak: 'break-word'
          },
          codeBlock: {
            display: 'block',
            backgroundColor: '#f5f5f5',
            padding: 'clamp(8px, 3vw, 10px)',
            borderRadius: '4px',
            marginTop: '8px',
            marginBottom: '16px',
            overflowX: 'auto',
            fontSize: 'clamp(0.8rem, 2.5vw, 0.9rem)',
            fontFamily: "'Consolas', 'Monaco', 'Courier New', monospace",
            whiteSpace: 'pre-wrap',
            wordBreak: 'break-word'
          },
          pre: {
            margin: 0,
            whiteSpace: 'pre-wrap',
            wordBreak: 'break-word',
            fontSize: 'clamp(0.8rem, 2.5vw, 0.9rem)',
            color: '#333',
            fontFamily: "'Consolas', 'Monaco', 'Courier New', monospace"
          },
          '@media (max-width: 768px)': {
            row: {
              flexDirection: 'column',
              alignItems: 'flex-start'
            },
            keyCell: {
              marginBottom: '4px'
            },
            valueCell: {
              textAlign: 'left',
              width: '100%'
            }
          }
        };

        const getResponsiveStyles = () => {
          if (typeof window !== 'undefined' && window.matchMedia) {
            if (window.matchMedia('(max-width: 768px)').matches) {
              return {
                ...styles,
                row: {
                  ...styles.row,
                  flexDirection: 'column',
                  alignItems: 'flex-start'
                },
                keyCell: {
                  ...styles.keyCell,
                  marginBottom: '4px'
                },
                valueCell: {
                  ...styles.valueCell,
                  textAlign: 'left',
                  width: '100%'
                }
              };
            }
          }
          return styles;
        };

        const parseRequest = () => {
          setError(null);
          setParsedData(null);

          const cleanInput = inputText.trim();

          if (!cleanInput) {
            return;
          }

          try {
            const lines = cleanInput.split('\n').filter(line => line.trim() !== '');
            
            if (lines.length === 0) {
              throw new Error('Входные данные пусты.');
            }

            const firstLine = lines[0];
            const requestLineParts = firstLine.split(/\s+/);

            let method = '';
            let path = '';
            let version = '';

            if (requestLineParts.length >= 2) {
              method = requestLineParts[0].toUpperCase();
              path = requestLineParts[1];
              if (requestLineParts.length >= 3) {
                version = requestLineParts.slice(2).join(' ');
              }
            } else {
              throw new Error('Неверный формат строки запроса. Ожидалось: Метод Путь Версия');
            }

            const headers = {};
            let bodyStartIndex = -1;

            for (let i = 1; i < lines.length; i++) {
              const line = lines[i];
              
              if (line.trim() === '') {
                bodyStartIndex = i + 1;
                break;
              }

              const colonIndex = line.indexOf(':');
              if (colonIndex > 0) {
                const headerName = line.substring(0, colonIndex).trim();
                const headerValue = line.substring(colonIndex + 1).trim();
                headers[headerName] = headerValue;
              }
            }

            let body = null;
            if (bodyStartIndex > -1 && bodyStartIndex < lines.length) {
              body = lines.slice(bodyStartIndex).join('\n');
            } else if (headers['Content-Length'] || headers['Transfer-Encoding']) {
              body = '(Тело отсутствует во входных данных, но ожидается по заголовкам)';
            }

            setParsedData({
              requestLine: firstLine,
              method,
              path,
              version,
              headers,
              hasBody: !!body,
              body: body
            });

          } catch (err) {
            setError(`Ошибка анализа: ${err.message}`);
          }
        };

        const currentStyles = getResponsiveStyles();

        return (
          <div style={currentStyles.container}>
            <h3 style={currentStyles.heading}>Анализатор HTTP-запросов</h3>
            <p style={currentStyles.description}>
              Введите текст HTTP-запроса ниже. Система разберет его на компоненты: метод, путь, версию протокола, заголовки и тело.
            </p>

            <div style={currentStyles.inputGroup}>
              <label htmlFor="http-input" style={currentStyles.label}>Введите строку запроса:</label>
              <textarea
                id="http-input"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder={`Например:\nGET /index.html HTTP/1.1\nHost: example.com\nUser-Agent: Mozilla/5.0\n\n`}
                style={currentStyles.textarea}
                rows={6}
              />
              <button 
                onClick={parseRequest} 
                style={currentStyles.button}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#0056b3'}
                onMouseLeave={(e) => e.target.style.backgroundColor = '#007bff'}
                onTouchStart={(e) => e.target.style.backgroundColor = '#0056b3'}
                onTouchEnd={(e) => e.target.style.backgroundColor = '#007bff'}
              >
                Проанализировать
              </button>
            </div>

            {error && (
              <div style={currentStyles.errorBox}>
                ⚠️ {error}
              </div>
            )}

            {parsedData && (
              <div style={currentStyles.resultContainer}>
                <div style={{...currentStyles.row, borderBottom: '2px solid #007bff'}}>
                  <span style={currentStyles.keyCell}>Строка запроса</span>
                  <span style={currentStyles.valueCell}>{parsedData.requestLine}</span>
                </div>

                <div style={currentStyles.sectionHeader}>Основные параметры</div>
                
                <div style={currentStyles.row}>
                  <span style={currentStyles.keyCell}>Метод (Method)</span>
                  <span style={currentStyles.valueCell}>{parsedData.method}</span>
                </div>
                
                <div style={currentStyles.row}>
                  <span style={currentStyles.keyCell}>Путь (Path)</span>
                  <span style={currentStyles.valueCell}>{parsedData.path}</span>
                </div>
                
                <div style={currentStyles.row}>
                  <span style={currentStyles.keyCell}>Версия протокола</span>
                  <span style={currentStyles.valueCell}>{parsedData.version}</span>
                </div>

                <div style={currentStyles.sectionHeader}>Заголовки (Headers)</div>
                
                {Object.keys(parsedData.headers).length === 0 ? (
                   <div style={currentStyles.row}>
                     <span style={currentStyles.keyCell}>Информация</span>
                     <span style={currentStyles.valueCell}>Заголовки отсутствуют</span>
                   </div>
                ) : (
                  Object.entries(parsedData.headers).map(([key, value]) => (
                    <div key={key} style={currentStyles.row}>
                      <span style={currentStyles.keyCell}>{key}</span>
                      <span style={currentStyles.valueCell}>{value}</span>
                    </div>
                  ))
                )}

                <div style={currentStyles.sectionHeader}>Тело запроса (Body)</div>
                
                <div style={currentStyles.row}>
                  <span style={currentStyles.keyCell}>Наличие тела</span>
                  <span style={currentStyles.valueCell}>{parsedData.hasBody ? 'Да' : 'Нет'}</span>
                </div>

                {parsedData.body && (
                  <div style={{...currentStyles.row, backgroundColor: '#f9f9f9'}}>
                    <span style={currentStyles.keyCell}>Содержимое</span>
                    <span style={currentStyles.valueCell}>
                      <pre style={currentStyles.pre}>
                        {parsedData.body}
                      </pre>
                    </span>
                  </div>
                )}
              </div>
            )}

            <div style={currentStyles.infoBox}>
              <strong>Как использовать:</strong>
              <ul style={currentStyles.exampleList}>
                <li style={currentStyles.exampleItem}>Скопируйте вывод команды <code>curl -v https://example.com</code> или логи из браузера (F12 {'>'} Network).</li>
                <li style={currentStyles.exampleItem}>Первая строка должна содержать метод, путь и версию.</li>
                <li style={currentStyles.exampleItem}>Заголовки отделяются от тела пустой строкой.</li>
              </ul>
            </div>
            
            <div style={currentStyles.examplesContainer}>
              <strong>Примеры для проверки:</strong><br/>
              • Простой GET:<br/>
              <code style={currentStyles.codeBlock}>
                GET /api/users HTTP/1.1<br/>
                Host: api.server.com<br/>
                Accept: application/json
              </code>
              • POST с данными:<br/>
              <code style={currentStyles.codeBlock}>
                POST /login HTTP/1.1<br/>
                Host: auth.com<br/>
                Content-Type: application/x-www-form-urlencoded<br/><br/>
                username=admin&password=secret
              </code>
            </div>
          </div>
        );
      }}
    </BrowserOnly>
  );
};

export default HttpRequestAnalyzer;