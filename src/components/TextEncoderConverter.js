import React, { useState, useEffect } from 'react';

const TextEncoderConverter = () => {
  const [inputText, setInputText] = useState('');
  const [sourceEncoding, setSourceEncoding] = useState('UTF-8');
  const [targetEncoding, setTargetEncoding] = useState('Windows-1251');
  const [outputText, setOutputText] = useState('');
  const [error, setError] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  const encodings = [
    'UTF-8',
    'UTF-16',
    'UTF-16BE',
    'UTF-16LE',
    'Windows-1251',
    'ISO-8859-1',
    'ISO-8859-2',
    'KOI8-R',
    'CP437',
    'MacRoman'
  ];

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleConvert = () => {
    setError(null);
    setOutputText('');

    if (!inputText) {
      setOutputText('');
      return;
    }

    try {
      const encoder = new TextEncoder(sourceEncoding);
      const bytes = encoder.encode(inputText);
      
      const decoder = new TextDecoder(targetEncoding);
      const result = decoder.decode(new Uint8Array(bytes));
      
      setOutputText(result);
    } catch (err) {
      setError(`Ошибка конвертации: ${err.message}`);
      setOutputText('');
    }
  };

  const handleAutoConvert = () => {
    handleConvert();
  };

  const handleInputChange = (e) => {
    setInputText(e.target.value);
    if (!isMobile) {
      handleAutoConvert();
    }
  };

  const styles = {
    container: {
      border: '1px solid #dcdcdc',
      borderRadius: isMobile ? '0' : '8px',
      padding: isMobile ? '12px' : '20px',
      margin: isMobile ? '10px 0' : '20px 0',
      backgroundColor: '#fafafa',
      fontFamily: 'inherit',
      maxWidth: '100%',
      boxSizing: 'border-box'
    },
    heading: {
      marginTop: '0',
      marginBottom: isMobile ? '10px' : '15px',
      color: '#333',
      fontSize: isMobile ? '1.1rem' : '1.25rem',
      fontWeight: '600'
    },
    description: {
      marginBottom: isMobile ? '15px' : '20px',
      color: '#555',
      lineHeight: '1.5',
      fontSize: isMobile ? '0.9rem' : '1rem'
    },
    controlsWrapper: {
      display: 'flex',
      gap: isMobile ? '10px' : '20px',
      marginBottom: isMobile ? '15px' : '20px',
      flexWrap: 'wrap',
      flexDirection: isMobile ? 'column' : 'row'
    },
    controlGroup: {
      display: 'flex',
      flexDirection: 'column',
      minWidth: isMobile ? 'auto' : '200px',
      flex: isMobile ? '1' : 'none'
    },
    label: {
      marginBottom: '5px',
      fontWeight: '600',
      color: '#555',
      fontSize: isMobile ? '0.85rem' : '0.9rem'
    },
    select: {
      padding: isMobile ? '10px 12px' : '8px 12px',
      border: '1px solid #ccc',
      borderRadius: '4px',
      fontSize: isMobile ? '0.9rem' : '1rem',
      backgroundColor: '#fff',
      cursor: 'pointer',
      outline: 'none',
      width: '100%'
    },
    layout: {
      display: 'flex',
      alignItems: 'stretch',
      gap: isMobile ? '10px' : '15px',
      marginBottom: '20px',
      position: 'relative',
      flexDirection: isMobile ? 'column' : 'row'
    },
    column: {
      flex: '1',
      display: 'flex',
      flexDirection: 'column',
      width: isMobile ? '100%' : 'auto'
    },
    textareaInput: {
      width: '100%',
      padding: isMobile ? '10px' : '12px',
      border: '1px solid #ddd',
      borderRadius: '4px',
      fontFamily: "'Consolas', 'Monaco', 'Courier New', monospace",
      fontSize: isMobile ? '0.9rem' : '0.95rem',
      lineHeight: '1.5',
      resize: 'vertical',
      boxSizing: 'border-box',
      transition: 'border-color 0.2s',
      minHeight: isMobile ? '120px' : 'auto'
    },
    textareaOutput: {
      width: '100%',
      padding: isMobile ? '10px' : '12px',
      border: '1px solid #ddd',
      borderRadius: '4px',
      fontFamily: "'Consolas', 'Monaco', 'Courier New', monospace",
      fontSize: isMobile ? '0.9rem' : '0.95rem',
      lineHeight: '1.5',
      resize: 'vertical',
      boxSizing: 'border-box',
      backgroundColor: '#f8f9fa',
      color: '#333',
      minHeight: isMobile ? '120px' : 'auto'
    },
    arrow: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: isMobile ? '1.5rem' : '1.5rem',
      color: '#888',
      fontWeight: 'bold',
      alignSelf: 'center',
      height: 'fit-content',
      transform: isMobile ? 'rotate(90deg)' : 'none',
      margin: isMobile ? '5px 0' : '0'
    },
    button: {
      display: 'block',
      width: isMobile ? '100%' : 'auto',
      maxWidth: isMobile ? 'none' : '200px',
      margin: '0 auto',
      padding: isMobile ? '12px 20px' : '10px 20px',
      backgroundColor: '#007bff',
      color: 'white',
      border: 'none',
      borderRadius: '4px',
      fontSize: isMobile ? '1rem' : '1rem',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'background-color 0.2s',
      touchAction: 'manipulation'
    },
    errorBox: {
      marginTop: '15px',
      padding: isMobile ? '8px' : '10px',
      backgroundColor: '#ffebee',
      color: '#c62828',
      borderRadius: '4px',
      fontSize: isMobile ? '0.85rem' : '0.9rem',
      textAlign: 'center',
      border: '1px solid #ffcdd2'
    },
    placeholder: {
      color: '#aaa'
    }
  };

  return (
    <div style={styles.container}>
      <h3 style={styles.heading}>🔄 Конвертер кодировок текста</h3>
      <p style={styles.description}>
        {isMobile 
          ? 'Введите текст, выберите кодировки и нажмите кнопку преобразования' 
          : 'Введите текст в левом окне, выберите исходную и целевую кодировки, затем нажмите кнопку «Преобразовать»'}
      </p>

      <div style={styles.controlsWrapper}>
        <div style={styles.controlGroup}>
          <label htmlFor="source-enc" style={styles.label}>📄 Исходная кодировка:</label>
          <select 
            id="source-enc" 
            value={sourceEncoding} 
            onChange={(e) => { 
              setSourceEncoding(e.target.value); 
              if (!isMobile) handleAutoConvert();
            }}
            style={styles.select}
          >
            {encodings.map(enc => (
              <option key={enc} value={enc}>{enc}</option>
            ))}
          </select>
        </div>

        <div style={styles.controlGroup}>
          <label htmlFor="target-enc" style={styles.label}>🎯 Целевая кодировка:</label>
          <select 
            id="target-enc" 
            value={targetEncoding} 
            onChange={(e) => { 
              setTargetEncoding(e.target.value); 
              if (!isMobile) handleAutoConvert();
            }}
            style={styles.select}
          >
            {encodings.map(enc => (
              <option key={enc} value={enc}>{enc}</option>
            ))}
          </select>
        </div>
      </div>

      <div style={styles.layout}>
        <div style={styles.column}>
          <label style={{...styles.label, marginBottom: '8px'}}>
            Входной текст ({sourceEncoding})
            {isMobile && <span style={{fontSize: '0.8rem', color: '#666', marginLeft: '8px'}}>(нажмите кнопку ниже)</span>}
          </label>
          <textarea
            value={inputText}
            onChange={handleInputChange}
            placeholder="Введите текст здесь..."
            rows={isMobile ? 6 : 10}
            style={styles.textareaInput}
            onFocus={(e) => {
              if (!isMobile) {
                e.target.style.borderColor = '#007bff';
                e.target.style.boxShadow = '0 0 0 2px rgba(0, 123, 255, 0.1)';
              }
            }}
            onBlur={(e) => {
              e.target.style.borderColor = '#ddd';
              e.target.style.boxShadow = 'none';
            }}
          />
        </div>

        <div style={styles.arrow}>➜</div>

        <div style={styles.column}>
          <label style={{...styles.label, marginBottom: '8px'}}>✨ Результат ({targetEncoding})</label>
          <textarea
            readOnly
            value={outputText}
            placeholder="Здесь появится результат..."
            rows={isMobile ? 6 : 10}
            style={styles.textareaOutput}
          />
        </div>
      </div>

      {/* Кнопка преобразования на мобильных устройствах всегда видна */}
      <button 
        onClick={handleConvert} 
        style={styles.button}
        onTouchStart={(e) => {
          e.currentTarget.style.opacity = '0.8';
        }}
        onTouchEnd={(e) => {
          e.currentTarget.style.opacity = '1';
        }}
      >
        {isMobile ? '🔄 Преобразовать сейчас' : 'Преобразовать'}
      </button>

      {error && (
        <div style={styles.errorBox}>
          ⚠️ {error}
        </div>
      )}

      {/* Информация о режиме работы на мобильных устройствах */}
      {isMobile && (
        <div style={{
          marginTop: '15px',
          padding: '8px',
          backgroundColor: '#e3f2fd',
          borderRadius: '4px',
          fontSize: '0.8rem',
          color: '#1976d2',
          textAlign: 'center'
        }}>
          💡 На мобильных устройствах конвертация выполняется вручную для экономии ресурсов
        </div>
      )}
    </div>
  );
};

export default TextEncoderConverter;