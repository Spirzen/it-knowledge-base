import React, { useState } from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
    backgroundColor: '#f9f9f9',
    padding: '20px',
    borderRadius: '8px',
    border: '1px solid #e1e4e8',
    margin: '20px 0',
    maxWidth: '100%',
    boxSizing: 'border-box',
  },
  header: {
    fontSize: 'clamp(1rem, 4vw, 1.2rem)',
    fontWeight: 'bold',
    color: '#333',
    marginBottom: '10px',
    textAlign: 'center',
  },
  description: {
    fontSize: 'clamp(0.85rem, 3vw, 0.95rem)',
    color: '#555',
    marginBottom: '20px',
    lineHeight: '1.5',
  },
  mainWrapper: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: 'clamp(15px, 4vw, 30px)',
    justifyContent: 'center',
  },
  codePanel: {
    flex: '1 1 350px',
    minWidth: '280px',
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  },
  inputGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '5px',
  },
  label: {
    fontSize: 'clamp(0.85rem, 3vw, 0.9rem)',
    fontWeight: '600',
    color: '#444',
  },
  input: {
    padding: 'clamp(8px, 2vw, 10px)',
    borderRadius: '4px',
    border: '1px solid #ccc',
    fontSize: 'clamp(0.9rem, 3vw, 1rem)',
    fontFamily: 'monospace',
    outline: 'none',
    transition: 'border-color 0.2s',
    width: '100%',
    boxSizing: 'border-box',
  },
  button: {
    padding: 'clamp(10px, 2.5vw, 12px) clamp(16px, 4vw, 20px)',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    fontSize: 'clamp(0.9rem, 3vw, 1rem)',
    cursor: 'pointer',
    fontWeight: 'bold',
    transition: 'background-color 0.2s, transform 0.1s',
    alignSelf: 'stretch',
    WebkitTapHighlightColor: 'transparent',
  },
  buttonHover: {
    backgroundColor: '#0056b3',
  },
  buttonActive: {
    transform: 'scale(0.98)',
  },
  visualPanel: {
    flex: '1 1 350px',
    minWidth: '280px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    position: 'relative',
    minHeight: '400px',
    justifyContent: 'center',
  },
  scopeBox: {
    width: 'min(100%, 280px)',
    maxWidth: '280px',
    padding: 'clamp(12px, 3vw, 15px)',
    borderRadius: '8px',
    border: '2px solid #333',
    backgroundColor: '#fff',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
    transition: 'all 0.4s ease',
    position: 'relative',
    zIndex: 2,
    boxSizing: 'border-box',
  },
  scopeTitle: {
    fontSize: 'clamp(0.8rem, 2.5vw, 0.9rem)',
    fontWeight: 'bold',
    color: '#555',
    borderBottom: '1px solid #eee',
    paddingBottom: '5px',
    marginBottom: '10px',
    textTransform: 'uppercase',
    letterSpacing: '1px',
  },
  variableList: {
    listStyleType: 'none',
    padding: 0,
    margin: 0,
    fontSize: 'clamp(0.85rem, 2.5vw, 0.95rem)',
  },
  listItem: {
    padding: '4px 0',
    display: 'flex',
    justifyContent: 'space-between',
    borderBottom: '1px dashed #eee',
    flexWrap: 'wrap',
    gap: '8px',
  },
  arrowContainer: {
    height: 'clamp(20px, 5vw, 30px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#aaa',
    fontSize: 'clamp(1.2rem, 4vw, 1.5rem)',
    transition: 'color 0.3s',
  },
  statusMessage: {
    marginTop: '20px',
    padding: 'clamp(8px, 2vw, 10px) clamp(12px, 3vw, 15px)',
    borderRadius: '4px',
    fontSize: 'clamp(0.85rem, 3vw, 1rem)',
    textAlign: 'center',
    fontWeight: 'bold',
    opacity: 0,
    transform: 'translateY(10px)',
    transition: 'all 0.5s ease',
    maxWidth: 'min(100%, 280px)',
    wordBreak: 'break-word',
  },
  highlight: {
    borderColor: '#28a745',
    backgroundColor: '#e8f5e9',
    boxShadow: '0 0 15px rgba(40, 167, 69, 0.4)',
  },
  notFound: {
    borderColor: '#dc3545',
    backgroundColor: '#f8d7da',
    color: '#721c24',
  },
  searching: {
    borderColor: '#ffc107',
    backgroundColor: '#fff3cd',
    animation: 'pulse 1s infinite',
  },
  dataHint: {
    marginTop: '10px',
    fontSize: 'clamp(0.75rem, 2.5vw, 0.85rem)',
    color: '#666',
    lineHeight: '1.4',
  },
  mobileWrapper: {
    '@media (max-width: 768px)': {
      gap: '15px',
    },
  },
  horizontalView: {
    display: 'flex',
    flexDirection: 'column',
    '@media (min-width: 769px)': {
      flexDirection: 'row',
    },
  },
};

const LexicalScopeVisualizer = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [status, setStatus] = useState(null);
  const [highlightedLevel, setHighlightedLevel] = useState(null);
  const [resultValue, setResultValue] = useState(null);
  const [isButtonHovered, setIsButtonHovered] = useState(false);
  const [isButtonPressed, setIsButtonPressed] = useState(false);

  const environmentData = {
    inner: {
      variables: { z: 30, searchTerm: 'z' },
      outerRef: 'outer'
    },
    outer: {
      variables: { y: 20, x: 10 },
      outerRef: 'global'
    },
    global: {
      variables: { x: 10, undefinedVal: undefined },
      outerRef: null
    }
  };

  const handleSearch = () => {
    if (!searchTerm.trim()) return;

    setStatus('searching');
    setHighlightedLevel(null);
    setResultValue(null);

    let currentLevel = 'inner';
    let found = false;
    let value = null;
    let path = [];

    while (currentLevel && !found) {
      path.push(currentLevel);
      const data = environmentData[currentLevel];
      
      if (data.variables.hasOwnProperty(searchTerm)) {
        found = true;
        value = data.variables[searchTerm];
      } else {
        currentLevel = data.outerRef;
      }
    }

    const runAnimation = async () => {
      for (let i = 0; i < path.length; i++) {
        await new Promise(r => setTimeout(r, 600));
        setHighlightedLevel(path[i]);
        
        if (path[i] === 'global') {
          if (!found) {
            setStatus('not-found');
            setHighlightedLevel(null);
            break;
          }
        }
      }

      if (found) {
        setStatus('found');
        setResultValue(value);
        setHighlightedLevel(null);
      }
    };

    runAnimation();
  };

  const getStatusStyles = () => {
    const baseStyle = { ...styles.statusMessage };
    
    switch (status) {
      case 'found':
        return { 
          ...baseStyle, 
          opacity: 1, 
          transform: 'translateY(0)', 
          backgroundColor: '#d4edda', 
          color: '#155724', 
          border: '1px solid #c3e6cb',
          animation: 'fadeIn 0.3s ease-out',
        };
      case 'not-found':
        return { 
          ...baseStyle, 
          opacity: 1, 
          transform: 'translateY(0)', 
          backgroundColor: '#f8d7da', 
          color: '#721c24', 
          border: '1px solid #f5c6cb',
          animation: 'fadeIn 0.3s ease-out',
        };
      case 'searching':
        return { 
          ...baseStyle, 
          opacity: 1, 
          transform: 'translateY(0)',
          animation: 'fadeIn 0.3s ease-out',
        };
      default:
        return baseStyle;
    }
  };

  const getScopeStyles = (levelName) => {
    const base = { ...styles.scopeBox };
    if (highlightedLevel === levelName) {
      if (status === 'not-found' && levelName === 'global') {
        return { ...base, ...styles.notFound };
      }
      return { ...base, ...styles.highlight };
    }
    if (status === 'searching' && highlightedLevel === levelName) {
       return { ...base, ...styles.searching };
    }
    return base;
  };

  const getButtonStyles = () => {
    const buttonStyle = { ...styles.button };
    if (isButtonHovered) {
      buttonStyle.backgroundColor = '#0056b3';
    }
    if (isButtonPressed) {
      buttonStyle.transform = 'scale(0.98)';
    }
    return buttonStyle;
  };

  return (
    <BrowserOnly>
      {() => (
        <div style={styles.container} className="lexical-scope-container">
          <div style={styles.header}>Живая цепочка окружений</div>
          <p style={styles.description}>
            Введите имя переменной (например, <code>x</code>, <code>y</code> или <code>z</code>) и нажмите кнопку "Найти переменную". 
            Система покажет путь поиска от внутренней функции к глобальной области видимости.
          </p>

          <div style={styles.mainWrapper}>
            <div style={styles.codePanel}>
              <div style={styles.inputGroup}>
                <label style={styles.label}>Имя переменной:</label>
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="x, y, z..."
                  style={styles.input}
                  onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                />
              </div>
              <button 
                onClick={handleSearch} 
                style={getButtonStyles()}
                className="btn-search"
                onMouseEnter={() => setIsButtonHovered(true)}
                onMouseLeave={() => {
                  setIsButtonHovered(false);
                  setIsButtonPressed(false);
                }}
                onMouseDown={() => setIsButtonPressed(true)}
                onMouseUp={() => setIsButtonPressed(false)}
                onTouchStart={() => setIsButtonPressed(true)}
                onTouchEnd={() => setIsButtonPressed(false)}
              >
                Найти переменную
              </button>
              
              <div style={styles.dataHint}>
                <strong>Схема данных:</strong><br/>
                • Inner: z=30<br/>
                • Outer: y=20, x=10<br/>
                • Global: x=10
              </div>
            </div>

            <div style={styles.visualPanel} className="visual-panel">
              <div style={getScopeStyles('inner')} className="scope-box">
                <div style={styles.scopeTitle}>Inner Function</div>
                <ul style={styles.variableList} className="variable-list">
                  {Object.entries(environmentData.inner.variables).map(([k, v]) => (
                    <li key={k} style={styles.listItem}>
                      <span>{k}</span>
                      <span>= {v}</span>
                    </li>
                  ))}
                </ul>
                <div style={{fontSize: 'clamp(0.7rem, 2.5vw, 0.8rem)', color: '#888', marginTop: '5px'}}>
                  Ссылка: Outer
                </div>
              </div>

              <div style={styles.arrowContainer} className="arrow-container">↓</div>

              <div style={getScopeStyles('outer')} className="scope-box">
                <div style={styles.scopeTitle}>Outer Function</div>
                <ul style={styles.variableList} className="variable-list">
                  {Object.entries(environmentData.outer.variables).map(([k, v]) => (
                    <li key={k} style={styles.listItem}>
                      <span>{k}</span>
                      <span>= {v}</span>
                    </li>
                  ))}
                </ul>
                <div style={{fontSize: 'clamp(0.7rem, 2.5vw, 0.8rem)', color: '#888', marginTop: '5px'}}>
                  Ссылка: Global
                </div>
              </div>

              <div style={styles.arrowContainer} className="arrow-container">↓</div>

              <div style={getScopeStyles('global')} className="scope-box">
                <div style={styles.scopeTitle}>Global Scope</div>
                <ul style={styles.variableList} className="variable-list">
                  {Object.entries(environmentData.global.variables).map(([k, v]) => (
                    <li key={k} style={styles.listItem}>
                      <span>{k}</span>
                      <span>= {v === undefined ? 'undefined' : v}</span>
                    </li>
                  ))}
                </ul>
                <div style={{fontSize: 'clamp(0.7rem, 2.5vw, 0.8rem)', color: '#888', marginTop: '5px'}}>
                  Корневое окружение
                </div>
              </div>

              <div style={getStatusStyles()} className="status-message">
                {status === 'found' && `Переменная "${searchTerm}" найдена! Значение: ${resultValue}`}
                {status === 'not-found' && `Переменная "${searchTerm}" не найдена ни в одном из окружений.`}
                {status === 'searching' && 'Поиск...'}
              </div>
            </div>
          </div>
        </div>
      )}
    </BrowserOnly>
  );
};

export default LexicalScopeVisualizer;