import React, { useState } from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';

const SOAPTrainer = () => {
  return (
    <BrowserOnly>
      {() => {
        const [activeTab, setActiveTab] = useState('envelope');
        const [isFaultMode, setIsFaultMode] = useState(false);

        const styles = {
          container: {
            fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif',
            border: '1px solid #d0d7de',
            borderRadius: '6px',
            padding: 'clamp(16px, 4vw, 24px)',
            backgroundColor: '#ffffff',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)',
            margin: 'clamp(10px, 2vw, 20px) 0',
            maxWidth: '100%',
            overflowX: 'hidden',
          },
          header: {
            fontSize: 'clamp(18px, 5vw, 20px)',
            fontWeight: 'bold',
            marginBottom: 'clamp(12px, 3vw, 16px)',
            color: '#24292e',
            borderBottom: '2px solid #f6f8fa',
            paddingBottom: 'clamp(8px, 2vw, 12px)',
            wordBreak: 'break-word',
          },
          description: {
            fontSize: 'clamp(13px, 3.5vw, 15px)',
            lineHeight: '1.5',
            color: '#57606a',
            marginBottom: 'clamp(16px, 4vw, 20px)',
          },
          tabsContainer: {
            display: 'flex',
            gap: 'clamp(4px, 2vw, 8px)',
            marginBottom: 'clamp(16px, 4vw, 20px)',
            flexWrap: 'wrap',
          },
          tabButton: (isActive) => ({
            padding: 'clamp(6px, 2vw, 8px) clamp(12px, 3vw, 16px)',
            borderRadius: '6px',
            border: isActive ? '1px solid #0366d6' : '1px solid #d0d7de',
            backgroundColor: isActive ? '#0366d6' : '#f6f8fa',
            color: isActive ? '#ffffff' : '#57606a',
            cursor: 'pointer',
            fontWeight: isActive ? 'bold' : 'normal',
            transition: 'all 0.2s ease',
            fontSize: 'clamp(12px, 3.5vw, 14px)',
            whiteSpace: 'nowrap',
            '@media (max-width: 480px)': {
              whiteSpace: 'normal',
              flex: '1 0 auto',
            },
          }),
          faultToggle: {
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            marginBottom: 'clamp(16px, 4vw, 20px)',
            padding: 'clamp(10px, 2.5vw, 12px)',
            backgroundColor: isFaultMode ? '#fff5f5' : '#f6f8fa',
            borderRadius: '6px',
            border: isFaultMode ? '1px solid #d73a49' : '1px solid #d0d7de',
            flexWrap: 'wrap',
          },
          toggleLabel: {
            cursor: 'pointer',
            fontWeight: 'bold',
            color: isFaultMode ? '#cb2431' : '#24292e',
            fontSize: 'clamp(13px, 3.5vw, 14px)',
          },
          codeBlock: {
            position: 'relative',
            backgroundColor: '#24292e',
            borderRadius: '6px',
            overflow: 'hidden',
            margin: '0',
            width: '100%',
          },
          codeContent: {
            padding: 'clamp(12px, 3vw, 16px)',
            fontSize: 'clamp(11px, 3vw, 13px)',
            lineHeight: '1.5',
            color: '#e6edf3',
            fontFamily: '"SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace',
            overflowX: 'auto',
            whiteSpace: 'pre-wrap',
            wordBreak: 'break-word',
            WebkitOverflowScrolling: 'touch',
          },
          labelBox: {
            display: 'inline-block',
            padding: '2px 6px',
            borderRadius: '4px',
            fontSize: 'clamp(10px, 2.5vw, 12px)',
            fontWeight: 'bold',
            marginRight: '8px',
            marginBottom: '8px',
            verticalAlign: 'middle',
          },
          explanationBox: {
            marginTop: 'clamp(16px, 4vw, 20px)',
            padding: 'clamp(12px, 3vw, 16px)',
            backgroundColor: '#f6f8fa',
            borderRadius: '6px',
            border: '1px solid #d0d7de',
          },
          explanationTitle: {
            fontWeight: 'bold',
            fontSize: 'clamp(13px, 3.5vw, 14px)',
            display: 'block',
            marginBottom: '8px',
          },
          explanationText: {
            marginTop: '8px',
            fontSize: 'clamp(13px, 3.5vw, 14px)',
            lineHeight: '1.5',
            color: '#24292e',
            margin: 0,
          },
        };

        const getSoapCode = () => {
          if (isFaultMode) {
            return `<?xml version="1.0" encoding="UTF-8"?>
<soap:Envelope xmlns:soap="http://www.w3.org/2003/05/soap-envelope">
  <soap:Header>
    <wsse:Security xmlns:wsse="...">
    </wsse:Security>
  </soap:Header>
  <soap:Body>
    <soap:Fault>
      <soap:Code>
        <soap:Value>soap:Receiver</soap:Value>
        <soap:Subcode>
          <soap:Value>soap:InvalidMessageName</soap:Value>
        </soap:Subcode>
      </soap:Code>
      <soap:Reason>
        <soap:Text xml:lang="en">Ошибка обработки сообщения</soap:Text>
      </soap:Reason>
      <soap:Node>https://example.com/service</soap:Node>
      <soap:Role>soap:Receiver</soap:Role>
      <soap:Detail>
        <error xmlns="">Неверный формат входных данных</error>
      </soap:Detail>
    </soap:Fault>
  </soap:Body>
</soap:Envelope>`;
          }

          return `<?xml version="1.0" encoding="UTF-8"?>
<soap:Envelope xmlns:soap="http://www.w3.org/2003/05/soap-envelope">
  <soap:Header>
    <wsse:Security xmlns:wsse="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd">
      <wsse:UsernameToken>
        <wsse:Username>admin</wsse:Username>
        <wsse:Password Type="...">secret123</wsse:Password>
      </wsse:UsernameToken>
    </wsse:Security>
  </soap:Header>
  <soap:Body>
    <GetUser xmlns="http://example.com/api">
      <UserId>12345</UserId>
    </GetUser>
  </soap:Body>
</soap:Envelope>`;
        };

        const getLabelStyle = (type) => {
          let bg = '';
          let color = '';
          let border = '';

          switch (type) {
            case 'envelope':
              bg = '#e3f2fd';
              color = '#1565c0';
              border = '#bbdefb';
              break;
            case 'header':
              bg = '#fff8e1';
              color = '#f57f17';
              border = '#ffe082';
              break;
            case 'body':
              bg = '#e8f5e9';
              color = '#2e7d32';
              border = '#c8e6c9';
              break;
            case 'fault':
              bg = '#ffebee';
              color = '#c62828';
              border = '#ffcdd2';
              break;
            default:
              bg = '#f0f0f0';
              color = '#333';
              border = '#ccc';
          }

          return {
            ...styles.labelBox,
            backgroundColor: bg,
            color: color,
            border: `1px solid ${border}`
          };
        };

        const getExplanation = (type) => {
          if (isFaultMode && type === 'fault') {
            return "Блок Fault содержит информацию об ошибке. Структура включает код ошибки, причину (Reason), узел отправки (Node), роль получателя (Role) и детальное описание (Detail). Этот блок появляется только при сбое обработки запроса.";
          }
          
          switch (type) {
            case 'envelope':
              return "Элемент Envelope является корневым элементом XML-документа SOAP. Он определяет начало и конец сообщения. Внутри него находятся обязательные пространство имен (namespace), описывающее протокол SOAP.";
            case 'header':
              return "Элемент Header предназначен для передачи метаданных сообщения. Сюда помещают информацию об авторизации, транзакциях, маршрутизации или других служебных данных, которые обрабатываются промежуточными узлами до попадания в тело сообщения.";
            case 'body':
              return "Элемент Body содержит основную полезную нагрузку сообщения. Здесь размещаются вызовы методов сервиса или ответы от сервера. Именно в этом блоке происходит передача конкретных данных бизнес-логики.";
            case 'fault':
              return "Блок Fault используется для передачи информации об ошибках. Если сервер не может обработать запрос, он возвращает сообщение, содержащее этот элемент вместо тела с данными.";
            default:
              return "";
          }
        };

        return (
          <div style={styles.container}>
            <div style={styles.header}>📨 Структура SOAP-сообщения</div>
            
            <div style={styles.description}>
              Протокол Simple Object Access Protocol (SOAP) использует XML для обмена структурированными данными. 
              Сообщение представляет собой строго определённую структуру из четырёх основных частей. 
              Выберите вкладку ниже, чтобы изучить каждую часть, или переключите режим просмотра для демонстрации структуры при возникновении ошибки.
            </div>

            <div style={styles.faultToggle}>
              <input 
                type="checkbox" 
                id="faultCheck" 
                checked={isFaultMode} 
                onChange={(e) => setIsFaultMode(e.target.checked)}
                style={{ 
                  width: 'clamp(16px, 4vw, 18px)', 
                  height: 'clamp(16px, 4vw, 18px)', 
                  cursor: 'pointer',
                  flexShrink: 0,
                }}
              />
              <label htmlFor="faultCheck" style={styles.toggleLabel}>
                🔧 Режим демонстрации ошибки (Fault)
              </label>
            </div>

            <div style={styles.tabsContainer}>
              <button 
                style={styles.tabButton(activeTab === 'envelope')} 
                onClick={() => setActiveTab('envelope')}
              >
                Envelope
              </button>
              <button 
                style={styles.tabButton(activeTab === 'header')} 
                onClick={() => setActiveTab('header')}
              >
                Header
              </button>
              <button 
                style={styles.tabButton(activeTab === 'body')} 
                onClick={() => setActiveTab('body')}
              >
                Body
              </button>
              {isFaultMode && (
                <button 
                  style={styles.tabButton(activeTab === 'fault')} 
                  onClick={() => setActiveTab('fault')}
                >
                  Fault
                </button>
              )}
            </div>

            <div style={styles.codeBlock}>
              <div style={styles.codeContent}>
                <div>
                  <span style={getLabelStyle(activeTab)}>
                    {activeTab === 'envelope' ? 'ENVELOPE' : 
                     activeTab === 'header' ? 'HEADER' : 
                     activeTab === 'body' ? 'BODY' : 'FAULT'}
                  </span>
                </div>
                <div style={{ marginTop: '8px' }}>
                  {getSoapCode().split('\n').map((line, index) => (
                    <div key={index} style={{ whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}>
                      {line}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div style={styles.explanationBox}>
              <strong style={styles.explanationTitle}>📖 Описание элемента:</strong>
              <p style={styles.explanationText}>
                {getExplanation(activeTab)}
              </p>
            </div>

            <style>{`
              @media (max-width: 768px) {
                button {
                  flex: 1 1 auto;
                  min-width: 80px;
                }
              }
              
              @media (max-width: 480px) {
                button {
                  width: 100%;
                  text-align: center;
                }
                
                [style*="codeContent"] {
                  font-size: 10px;
                }
              }
              
              @media print {
                body {
                  background: white;
                }
                
                button {
                  background: #f0f0f0 !important;
                  border: 1px solid #ccc !important;
                }
              }
              
              [style*="overflowX: auto"] {
                -webkit-overflow-scrolling: touch;
              }
              
              button, input[type="checkbox"] {
                transition: all 0.2s ease;
              }
              
              @media (max-width: 600px) {
                div[style*="fontSize"] {
                  line-height: 1.4;
                }
              }
              
              @media (max-width: 360px) {
                [style*="padding"] {
                  padding-left: 12px;
                  padding-right: 12px;
                }
              }
            `}</style>
          </div>
        );
      }}
    </BrowserOnly>
  );
};

export default SOAPTrainer;