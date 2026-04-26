import React, { useState, useEffect, useRef } from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';

const HTMLPlayground = () => {
  return (
    <BrowserOnly>
      {() => {
        const [code, setCode] = useState(`<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <title>Мой пример</title>
  <style>
    body {
      font-family: sans-serif;
      padding: 20px;
      background-color: #f4f4f9;
    }
    h1 {
      color: #333;
    }
    .box {
      background: white;
      padding: 15px;
      border-radius: 8px;
      box-shadow: 0 2px 5px rgba(0,0,0,0.1);
      margin-top: 10px;
    }
  </style>
</head>
<body>
  <h1>Привет, мир!</h1>
  <div class="box">
    <p>Начните редактировать код слева, чтобы увидеть изменения здесь.</p>
    <button id="btn">Нажми меня</button>
  </div>

  <script>
    document.getElementById('btn').addEventListener('click', function() {
      alert('Вы нажали кнопку!');
      this.style.backgroundColor = '#ff6b6b';
      this.style.color = 'white';
      this.innerText = 'Ура!';
    });
  </script>
</body>
</html>`);

        const [isLoaded, setIsLoaded] = useState(false);
        const [isMobile, setIsMobile] = useState(false);
        const [activeView, setActiveView] = useState('editor');
        const iframeRef = useRef(null);

        useEffect(() => {
          const checkMobile = () => {
            const mobile = window.innerWidth <= 768;
            setIsMobile(mobile);
            
            if (mobile && activeView === 'both') {
              setActiveView('editor');
            }
          };
          
          checkMobile();
          window.addEventListener('resize', checkMobile);
          return () => window.removeEventListener('resize', checkMobile);
        }, []);

        const updateIframe = () => {
          if (!iframeRef.current) return;
          
          const iframeDoc = iframeRef.current.contentDocument || iframeRef.current.contentWindow.document;
          
          iframeDoc.open();
          iframeDoc.write(code);
          iframeDoc.close();
          
          setIsLoaded(true);
        };

        useEffect(() => {
          const timeoutId = setTimeout(() => {
            updateIframe();
          }, 500);

          return () => clearTimeout(timeoutId);
        }, [code]);

        useEffect(() => {
          updateIframe();
        }, []);

        const handleReset = () => {
          setCode(`<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <title>Мой пример</title>
  <style>
    body {
      font-family: sans-serif;
      padding: 20px;
      background-color: #f4f4f9;
    }
    h1 {
      color: #333;
    }
    .box {
      background: white;
      padding: 15px;
      border-radius: 8px;
      box-shadow: 0 2px 5px rgba(0,0,0,0.1);
      margin-top: 10px;
    }
  </style>
</head>
<body>
  <h1>Привет, мир!</h1>
  <div class="box">
    <p>Начните редактировать код слева, чтобы увидеть изменения здесь.</p>
    <button id="btn">Нажми меня</button>
  </div>

  <script>
    document.getElementById('btn').addEventListener('click', function() {
      alert('Вы нажали кнопку!');
      this.style.backgroundColor = '#ff6b6b';
      this.style.color = 'white';
      this.innerText = 'Ура!';
    });
  </script>
</body>
</html>`);
        };

        const styles = {
          container: {
            display: 'flex',
            flexDirection: 'column',
            gap: '15px',
            fontFamily: 'Segoe UI, Roboto, Helvetica, Arial, sans-serif',
            height: '100%',
            minHeight: '500px',
            border: '1px solid #eaeaea',
            borderRadius: '8px',
            overflow: 'hidden',
            boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
            backgroundColor: '#fff'
          },
          header: {
            padding: '10px 15px',
            backgroundColor: '#f8f9fa',
            borderBottom: '1px solid #eaeaea',
            fontSize: 'clamp(14px, 4vw, 16px)',
            fontWeight: '600',
            color: '#333',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '10px'
          },
          headerTitle: {
            flex: 1,
            minWidth: '150px'
          },
          label: {
            fontSize: 'clamp(12px, 3.5vw, 14px)',
            color: '#666',
            fontWeight: '500'
          },
          editorContainer: {
            flex: 1,
            display: 'flex',
            flexDirection: isMobile && activeView !== 'both' ? 'column' : 'row',
            overflow: 'hidden',
            minHeight: isMobile ? '400px' : 'auto'
          },
          textareaWrapper: {
            flex: isMobile && activeView !== 'both' ? 1 : 1,
            display: 'flex',
            flexDirection: 'column',
            borderRight: !isMobile ? '1px solid #eaeaea' : 'none',
            borderBottom: isMobile && activeView !== 'both' ? '1px solid #eaeaea' : 'none',
            position: 'relative',
            minHeight: isMobile ? '300px' : 'auto'
          },
          textarea: {
            width: '100%',
            height: '100%',
            border: 'none',
            resize: 'none',
            padding: 'clamp(10px, 3vw, 15px)',
            fontFamily: '"Fira Code", "Consolas", "Monaco", monospace',
            fontSize: 'clamp(12px, 3.5vw, 14px)',
            lineHeight: '1.5',
            color: '#2d2d2d',
            backgroundColor: '#fafafa',
            outline: 'none',
            boxSizing: 'border-box'
          },
          previewWrapper: {
            flex: isMobile && activeView !== 'both' ? 1 : 1,
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: '#fff',
            minHeight: isMobile ? '300px' : 'auto'
          },
          iframe: {
            width: '100%',
            height: '100%',
            border: 'none',
            display: 'block',
            backgroundColor: '#fff'
          },
          buttonReset: {
            padding: '6px 12px',
            fontSize: 'clamp(11px, 3vw, 12px)',
            backgroundColor: '#e9ecef',
            border: '1px solid #ced4da',
            borderRadius: '4px',
            cursor: 'pointer',
            color: '#495057',
            transition: 'all 0.2s',
            whiteSpace: 'nowrap'
          },
          loadingIndicator: {
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            color: '#aaa',
            fontSize: '12px',
            pointerEvents: 'none'
          },
          mobileTabs: {
            display: isMobile ? 'flex' : 'none',
            borderBottom: '1px solid #eaeaea',
            backgroundColor: '#f8f9fa'
          },
          mobileTab: {
            flex: 1,
            padding: '10px',
            textAlign: 'center',
            cursor: 'pointer',
            fontSize: '14px',
            fontWeight: '500',
            color: '#666',
            transition: 'all 0.2s',
            borderBottom: '2px solid transparent'
          },
          mobileTabActive: {
            color: '#007bff',
            borderBottomColor: '#007bff'
          },
          panelHeader: {
            padding: '8px 12px',
            backgroundColor: '#f8f9fa',
            borderBottom: '1px solid #eaeaea',
            fontSize: '13px',
            fontWeight: '500',
            color: '#666'
          }
        };

        const renderContent = () => {
          if (isMobile && activeView !== 'both') {
            return (
              <>
                <div style={styles.mobileTabs}>
                  <div 
                    style={{...styles.mobileTab, ...(activeView === 'editor' ? styles.mobileTabActive : {})}}
                    onClick={() => setActiveView('editor')}
                  >
                    Редактор
                  </div>
                  <div 
                    style={{...styles.mobileTab, ...(activeView === 'preview' ? styles.mobileTabActive : {})}}
                    onClick={() => setActiveView('preview')}
                  >
                    Предпросмотр
                  </div>
                </div>
                
                {activeView === 'editor' && (
                  <div style={styles.textareaWrapper}>
                    <div style={styles.panelHeader}>Исходный код:</div>
                    <textarea
                      value={code}
                      onChange={(e) => setCode(e.target.value)}
                      style={styles.textarea}
                      spellCheck="false"
                      placeholder="Введите ваш HTML, CSS и JS здесь..."
                    />
                  </div>
                )}
                
                {activeView === 'preview' && (
                  <div style={styles.previewWrapper}>
                    <div style={styles.panelHeader}>Результат:</div>
                    <iframe
                      ref={iframeRef}
                      title="Preview"
                      style={styles.iframe}
                      sandbox="allow-scripts allow-same-origin"
                    />
                  </div>
                )}
              </>
            );
          }
          
          return (
            <>
              <div style={styles.textareaWrapper}>
                <div style={styles.panelHeader}>Исходный код:</div>
                <textarea
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  style={styles.textarea}
                  spellCheck="false"
                  placeholder="Введите ваш HTML, CSS и JS здесь..."
                />
                {!isLoaded && <div style={styles.loadingIndicator}>Загрузка...</div>}
              </div>
              
              <div style={styles.previewWrapper}>
                <div style={styles.panelHeader}>Результат:</div>
                <iframe
                  ref={iframeRef}
                  title="Preview"
                  style={styles.iframe}
                  sandbox="allow-scripts allow-same-origin"
                />
              </div>
            </>
          );
        };

        return (
          <div style={styles.container}>
            <div style={styles.header}>
              <span style={styles.headerTitle}>
                <span style={styles.label}>Интерактивный редактор HTML/CSS/JS</span>
              </span>
              <button 
                onClick={handleReset} 
                style={styles.buttonReset}
                onMouseOver={(e) => e.target.style.backgroundColor = '#dee2e6'}
                onMouseOut={(e) => e.target.style.backgroundColor = '#e9ecef'}
              >
                🔄 Сбросить код
              </button>
            </div>
            
            <div style={styles.editorContainer}>
              {renderContent()}
            </div>
          </div>
        );
      }}
    </BrowserOnly>
  );
};

export default HTMLPlayground;