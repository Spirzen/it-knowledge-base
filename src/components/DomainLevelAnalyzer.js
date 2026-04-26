import React, { useState } from 'react';

const DomainLevelAnalyzer = () => {
  const [inputUrl, setInputUrl] = useState('');
  const [analysisResult, setAnalysisResult] = useState(null);
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
      width: '100%',
      overflow: 'hidden'
    },
    heading: {
      marginTop: '0',
      marginBottom: '15px',
      color: '#333',
      fontSize: 'clamp(1.1rem, 4vw, 1.25rem)',
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
      gap: '10px',
      marginBottom: '20px',
      flexWrap: 'wrap',
      alignItems: 'flex-end'
    },
    label: {
      width: '100%',
      fontWeight: '600',
      color: '#444',
      fontSize: 'clamp(0.85rem, 3vw, 0.95rem)',
      marginBottom: '5px',
      display: 'block'
    },
    textarea: {
      flex: '1',
      minWidth: '200px',
      padding: '12px',
      border: '1px solid #ddd',
      borderRadius: '4px',
      fontFamily: "'Consolas', 'Monaco', 'Courier New', monospace",
      fontSize: 'clamp(0.85rem, 3vw, 0.95rem)',
      resize: 'vertical',
      minHeight: '60px',
      boxSizing: 'border-box',
      width: '100%'
    },
    button: {
      padding: '10px 20px',
      backgroundColor: '#007bff',
      color: 'white',
      border: 'none',
      borderRadius: '4px',
      fontSize: 'clamp(0.85rem, 3vw, 1rem)',
      fontWeight: '600',
      cursor: 'pointer',
      height: 'auto',
      minHeight: '42px',
      width: 'auto',
      minWidth: '140px',
      transition: 'all 0.2s ease',
      '@media (hover: hover)': {
        '&:hover': {
          backgroundColor: '#0056b3'
        }
      }
    },
    resultContainer: {
      marginTop: '20px',
      backgroundColor: '#fff',
      border: '1px solid #e0e0e0',
      borderRadius: '4px',
      overflowX: 'auto',
      WebkitOverflowScrolling: 'touch'
    },
    treeItem: {
      display: 'flex',
      alignItems: 'flex-start',
      borderBottom: '1px solid #eee',
      padding: 'clamp(8px, 2vw, 15px)',
      fontSize: 'clamp(0.85rem, 3vw, 0.95rem)',
      flexWrap: 'wrap',
      gap: '8px'
    },
    levelIndicator: {
      width: 'auto',
      minWidth: 'clamp(100px, 20%, 140px)',
      fontWeight: '600',
      color: '#555',
      textTransform: 'uppercase',
      fontSize: 'clamp(0.75rem, 2.5vw, 0.85rem)',
      flexShrink: 0
    },
    domainValue: {
      flex: '1',
      color: '#007bff',
      fontFamily: "'Consolas', 'Monaco', 'Courier New', monospace",
      wordBreak: 'break-all',
      fontSize: 'clamp(0.8rem, 2.8vw, 0.9rem)',
      minWidth: '150px'
    },
    descText: {
      flex: '1',
      color: '#666',
      fontSize: 'clamp(0.8rem, 2.8vw, 0.9rem)',
      minWidth: '200px',
      lineHeight: '1.4'
    },
    errorBox: {
      marginTop: '15px',
      padding: 'clamp(8px, 2vw, 15px)',
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
      padding: 'clamp(12px, 3vw, 20px)',
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
    examplesBlock: {
      marginTop: '20px',
      fontSize: 'clamp(0.85rem, 3vw, 0.9rem)',
      color: '#666',
      wordBreak: 'break-word'
    },
    code: {
      backgroundColor: '#f5f5f5',
      padding: '2px 6px',
      borderRadius: '3px',
      fontFamily: "'Consolas', 'Monaco', 'Courier New', monospace",
      fontSize: '0.9em',
      wordBreak: 'break-all'
    }
  };

  const analyzeDomain = () => {
    setError(null);
    setAnalysisResult(null);

    let urlToAnalyze = inputUrl.trim();

    if (!urlToAnalyze) {
      return;
    }

    try {
      if (!/^https?:\/\//i.test(urlToAnalyze)) {
        urlToAnalyze = 'http://' + urlToAnalyze;
      }

      const urlObj = new URL(urlToAnalyze);
      const hostname = urlObj.hostname.toLowerCase();
      
      const parts = hostname.split('.').filter(part => part.length > 0);
      
      if (parts.length < 2) {
        throw new Error('Не удалось определить структуру домена. Минимум два уровня (например, example.com).');
      }

      const tld = parts[parts.length - 1];
      const sld = parts[parts.length - 2];
      const subdomains = parts.slice(0, parts.length - 2);

      const levels = [];

      for (let i = subdomains.length - 1; i >= 0; i--) {
        const currentSubdomain = subdomains[i];
        const fullPath = [...subdomains.slice(i), sld, tld].join('.');
        
        levels.push({
          name: `Поддомен ${i + 1}`,
          value: currentSubdomain,
          fullName: fullPath,
          description: `Часть доменного имени перед основным именем. Указывает на конкретный сервис или подразделение.`
        });
      }

      levels.push({
        name: 'Второй уровень (SLD)',
        value: sld,
        fullName: `${sld}.${tld}`,
        description: 'Основное имя ресурса, которое регистрирует владелец.'
      });

      levels.push({
        name: 'Верхний уровень (TLD)',
        value: tld,
        fullName: tld,
        description: 'Категория домена (.ru, .com, .org и т.д.).'
      });

      setAnalysisResult({
        original: urlToAnalyze.replace('http://', '').replace('https://', ''),
        hostname: hostname,
        protocol: urlObj.protocol.replace(':', ''),
        path: urlObj.pathname || '/',
        levels: levels
      });

    } catch (err) {
      setError(`Ошибка анализа: ${err.message}`);
    }
  };

  const mediaStyles = `
    @media (max-width: 768px) {
      .domain-tree-item {
        flex-direction: column;
        align-items: flex-start;
      }
      .domain-level-indicator {
        width: 100%;
        margin-bottom: 5px;
      }
      .domain-value, .domain-desc {
        width: 100%;
        margin-left: 0;
      }
    }
    @media (max-width: 480px) {
      .input-group {
        flex-direction: column;
      }
      .analyze-button {
        width: 100%;
      }
    }
    @media (hover: hover) {
      .analyze-button:hover {
        background-color: #0056b3;
        transform: translateY(-1px);
      }
    }
    .analyze-button:active {
      transform: translateY(1px);
    }
  `;

  return (
    <>
      <style>{mediaStyles}</style>
      <div style={styles.container}>
        <h3 style={styles.heading}>Анализатор структуры домена</h3>
        <p style={styles.description}>
          Введите адрес сайта (URL) ниже. Система разберет ссылку на составляющие уровни доменной зоны и покажет их значение.
        </p>

        <div className="input-group" style={styles.inputGroup}>
          <div style={{ flex: 1, minWidth: '200px', width: '100%' }}>
            <label htmlFor="domain-input" style={styles.label}>Введите URL:</label>
            <textarea
              id="domain-input"
              value={inputUrl}
              onChange={(e) => setInputUrl(e.target.value)}
              placeholder="Например: https://mail.google.com/mail/"
              style={styles.textarea}
              rows={2}
            />
          </div>
          <button onClick={analyzeDomain} className="analyze-button" style={styles.button}>
            Проанализировать
          </button>
        </div>

        {error && (
          <div style={styles.errorBox}>
            ⚠️ {error}
          </div>
        )}

        {analysisResult && (
          <div style={styles.resultContainer}>
            <div className="domain-tree-item" style={{...styles.treeItem, borderBottom: '2px solid #007bff', backgroundColor: '#f0f7ff'}}>
              <span className="domain-level-indicator" style={styles.levelIndicator}>Исходные данные</span>
              <span className="domain-value" style={styles.domainValue}>{analysisResult.original}</span>
              <span className="domain-desc" style={styles.descText}>Полный адрес без протокола</span>
            </div>

            {analysisResult.levels.map((level, index) => (
              <div key={index} className="domain-tree-item" style={styles.treeItem}>
                <span className="domain-level-indicator" style={styles.levelIndicator}>
                  {level.name}
                </span>
                <span className="domain-value" style={styles.domainValue}>{level.fullName}</span>
                <span className="domain-desc" style={styles.descText}>{level.description}</span>
              </div>
            ))}

            <div className="domain-tree-item" style={{...styles.treeItem, backgroundColor: '#f8f9fa'}}>
              <span className="domain-level-indicator" style={styles.levelIndicator}>Путь к ресурсу</span>
              <span className="domain-value" style={styles.domainValue}>{analysisResult.path}</span>
              <span className="domain-desc" style={styles.descText}>Расположение файла или страницы внутри сайта.</span>
            </div>
          </div>
        )}

        <div style={styles.infoBox}>
          <strong>Как устроена иерархия:</strong>
          <ul style={styles.exampleList}>
            <li style={styles.exampleItem}>
              <strong>TLD (Top Level Domain):</strong> Самая высокая часть 
              (например, <code style={styles.code}>.ru</code>, <code style={styles.code}>.com</code>)
            </li>
            <li style={styles.exampleItem}>
              <strong>SLD (Second Level Domain):</strong> Основное имя, которое вы покупаете 
              (например, <code style={styles.code}>yandex</code> в <code style={styles.code}>yandex.ru</code>)
            </li>
            <li style={styles.exampleItem}>
              <strong>Поддомены:</strong> Дополнительные части слева от основного имени 
              (например, <code style={styles.code}>mail</code> в <code style={styles.code}>mail.yandex.ru</code>)
            </li>
          </ul>
        </div>
        
        <div style={styles.examplesBlock}>
          <strong>💡 Примеры для проверки:</strong><br/>
          • Основной сайт: <code style={styles.code}>example.com</code><br/>
          • С поддоменом: <code style={styles.code}>shop.amazon.co.uk</code><br/>
          • Со сложным путем: <code style={styles.code}>docs.python.org/3/library</code><br/>
          • Много поддоменов: <code style={styles.code}>a.b.c.d.e.example.org</code>
        </div>
      </div>
    </>
  );
};

export default DomainLevelAnalyzer;