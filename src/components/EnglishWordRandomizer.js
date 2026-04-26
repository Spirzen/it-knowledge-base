import React, { useState, useEffect } from 'react';

const isBrowser = typeof window !== 'undefined';

const EnglishWordRandomizer = () => {
  const [items, setItems] = useState([]);
  const [isReady, setIsReady] = useState(false);
  const [windowWidth, setWindowWidth] = useState(isBrowser ? window.innerWidth : 768);

  const extractDataFromPage = () => {
    if (!isBrowser) return { data: [], cols: 0 };
    
    const tableRows = document.querySelectorAll('table tbody tr');
    const extractedData = [];
    let detectedCols = 0;

    tableRows.forEach(row => {
      const cells = row.querySelectorAll('td');
      
      if (cells.length > detectedCols) {
        detectedCols = cells.length;
      }

      if (cells.length === 0) return;

      const cellTexts = Array.from(cells).map(cell => cell.textContent.trim());

      if (detectedCols === 2) {
        if (cellTexts[0] && cellTexts[1]) {
          extractedData.push({
            type: 'pair',
            term: cellTexts[0],
            definition: cellTexts[1],
            full: `${cellTexts[0]} — ${cellTexts[1]}`
          });
        }
      } else if (detectedCols >= 3) {
        if (cellTexts[0]) {
          const abbr = cellTexts[0];
          const fullDef = cellTexts.slice(1).join(' '); 
          
          extractedData.push({
            type: 'abbr',
            term: abbr,
            definition: fullDef,
            full: `${abbr}: ${fullDef}`
          });
        }
      }
    });

    return { data: extractedData, cols: detectedCols };
  };

  const getRandomItems = React.useCallback(() => {
    if (!isBrowser) return;
    
    const result = extractDataFromPage();
    
    if (!result.data || result.data.length === 0) {
      return;
    }

    const shuffled = [...result.data].sort(() => 0.5 - Math.random());
    const countToShow = result.cols >= 3 ? 1 : 5;
    const selected = shuffled.slice(0, countToShow);
    
    setItems(selected);
    setIsReady(true);
  }, []);

  useEffect(() => {
    if (!isBrowser) return;
    
    const timer = setTimeout(() => {
      const result = extractDataFromPage();
      if (result.data.length > 0) {
        getRandomItems();
      } else {
        setIsReady(false);
      }
    }, 100);

    return () => clearTimeout(timer);
  }, [getRandomItems]);

  useEffect(() => {
    if (!isBrowser) return;
    
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (!isBrowser) return;
    
    if (!document.querySelector('#randomizer-styles')) {
      const styleSheet = document.createElement('style');
      styleSheet.id = 'randomizer-styles';
      styleSheet.textContent = `
        .randomizer-summary:hover {
          background-color: #f8f9fa !important;
        }
        
        .randomizer-button:hover {
          background-color: #0b5edf !important;
        }
        
        .randomizer-details[open] .randomizer-summary {
          border-bottom-color: #0d6efd;
        }
        
        @media (max-width: 480px) {
          .randomizer-summary {
            min-height: 48px;
          }
          .randomizer-button {
            padding: 12px !important;
          }
        }
        
        @media (min-width: 769px) {
          .randomizer-container {
            max-width: 600px;
            margin-left: auto;
            margin-right: auto;
          }
        }
      `;
      document.head.appendChild(styleSheet);
    }
  }, []);

  if (!isBrowser || (!isReady && items.length === 0)) {
    return null;
  }

  const isMobile = windowWidth <= 480;

  const styles = {
    container: {
      fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
      backgroundColor: '#f8f9fa',
      border: '1px solid #e9ecef',
      borderRadius: isMobile ? '8px' : '6px',
      padding: isMobile ? '8px' : '12px',
      margin: isMobile ? '8px 0' : '16px 0',
      boxSizing: 'border-box',
      width: '100%',
      maxWidth: '100%',
    },
    button: {
      display: 'block',
      width: '100%',
      padding: isMobile ? '10px 12px' : '6px 12px',
      backgroundColor: '#0d6efd',
      color: '#ffffff',
      border: 'none',
      borderRadius: isMobile ? '6px' : '4px',
      cursor: 'pointer',
      fontSize: isMobile ? '1rem' : '0.9rem',
      fontWeight: '600',
      marginBottom: isMobile ? '12px' : '10px',
      outline: 'none',
      transition: 'all 0.2s ease',
      WebkitTapHighlightColor: 'transparent',
    },
    cardContainer: {
      display: 'flex',
      flexDirection: 'column',
      gap: isMobile ? '8px' : '6px',
    },
    details: {
      backgroundColor: '#ffffff',
      border: '1px solid #dee2e6',
      borderRadius: isMobile ? '8px' : '4px',
      overflow: 'hidden',
    },
    summary: {
      padding: isMobile ? '12px' : '8px 12px',
      cursor: 'pointer',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      listStyle: 'none',
      userSelect: 'none',
      backgroundColor: '#fff',
      borderBottom: '1px solid #eee',
      fontSize: isMobile ? '1.1rem' : '1rem',
      minHeight: isMobile ? '48px' : 'auto',
    },
    termStyle: {
      fontSize: isMobile ? '1.1rem' : '1.05rem',
      fontWeight: '700',
      color: '#212529',
      fontFamily: '"Consolas", "Monaco", monospace',
      wordBreak: 'break-word',
      flex: 1,
      paddingRight: '8px',
    },
    hint: {
      fontSize: isMobile ? '0.9rem' : '0.8rem',
      color: '#adb5bd',
      fontWeight: 'bold',
      minWidth: '24px',
      textAlign: 'center',
    },
    answer: {
      padding: isMobile ? '12px' : '8px 12px',
      backgroundColor: '#f1f3f5',
      color: '#495057',
      borderTop: '1px solid #dee2e6',
      fontSize: isMobile ? '1rem' : '0.95rem',
      lineHeight: isMobile ? '1.5' : '1.4',
      wordBreak: 'break-word',
      whiteSpace: 'pre-wrap',
    }
  };

  return (
    <div style={styles.container} className="randomizer-container">
      <button 
        onClick={getRandomItems} 
        style={styles.button}
        className="randomizer-button"
      >
        {isMobile ? '⟳ Обновить' : 'Обновить выбор'}
      </button>

      <div style={styles.cardContainer}>
        {items.map((item, index) => (
          <details key={index} style={styles.details} className="randomizer-details">
            <summary style={styles.summary} className="randomizer-summary">
              <span style={styles.termStyle}>{item.term}</span>
              <span style={styles.hint}>{isMobile ? '▼' : '?'}</span>
            </summary>
            <div style={styles.answer}>
              {item.definition}
            </div>
          </details>
        ))}
      </div>
    </div>
  );
};

export default EnglishWordRandomizer;