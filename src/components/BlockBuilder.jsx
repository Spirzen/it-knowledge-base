import React, { useState, useEffect } from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';

const BlockBuilderContent = () => {
  const [blocks, setBlocks] = useState([]);
  const [currentLevel, setCurrentLevel] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const getIndent = (level) => {
    if (isMobile && level > 0) {
      return Array(level).fill('  ').join('');
    }
    return Array(level).fill('\t').join('');
  };

  const addInstruction = () => {
    const indent = getIndent(currentLevel);
    const newLine = `${indent}instruction_${blocks.length + 1}`;
    setBlocks([...blocks, newLine]);
  };

  const openBlock = () => {
    const indent = getIndent(currentLevel);
    setBlocks([...blocks, `${indent}{`]);
    setCurrentLevel(prev => prev + 1);
  };

  const closeBlock = () => {
    if (currentLevel > 0) {
      const newLevel = currentLevel - 1;
      const indent = getIndent(newLevel);
      setBlocks([...blocks, `${indent}}`]);
      setCurrentLevel(newLevel);
    }
  };

  const clearBlocks = () => {
    if (window.confirm('Очистить все блоки?')) {
      setBlocks([]);
      setCurrentLevel(0);
    }
  };

  return (
    <div style={{ 
      fontFamily: 'monospace', 
      border: '1px solid #e0e0e0', 
      padding: isMobile ? '12px' : '15px', 
      borderRadius: '12px',
      backgroundColor: '#ffffff',
      maxWidth: '1200px',
      margin: '0 auto',
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
      transition: 'all 0.3s ease'
    }}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '10px',
        marginBottom: '15px'
      }}>
        <h4 style={{ margin: 0, fontSize: isMobile ? '16px' : '18px' }}>
          Конструктор блоков
        </h4>
        <div style={{
          padding: '4px 12px',
          backgroundColor: '#e3f2fd',
          borderRadius: '20px',
          fontSize: isMobile ? '12px' : '14px'
        }}>
          Уровень: <strong>{currentLevel}</strong>
        </div>
      </div>
      
      <div style={{ 
        marginBottom: '20px', 
        display: 'flex', 
        gap: '10px', 
        flexWrap: 'wrap',
        justifyContent: isMobile ? 'center' : 'flex-start'
      }}>
        <button 
          onClick={addInstruction} 
          style={{ 
            cursor: 'pointer', 
            padding: isMobile ? '10px 16px' : '8px 16px',
            fontSize: isMobile ? '14px' : '13px',
            fontWeight: '500',
            border: '1px solid #1976d2',
            backgroundColor: '#1976d2',
            color: 'white',
            borderRadius: '8px',
            transition: 'all 0.2s',
            flex: isMobile ? '1' : 'auto',
            minWidth: isMobile ? '100px' : 'auto'
          }}
          onMouseEnter={(e) => e.target.style.backgroundColor = '#1565c0'}
          onMouseLeave={(e) => e.target.style.backgroundColor = '#1976d2'}
        >
          ➕ Добавить строку
        </button>
        
        <button 
          onClick={openBlock} 
          style={{ 
            cursor: 'pointer', 
            padding: isMobile ? '10px 16px' : '8px 16px',
            fontSize: isMobile ? '14px' : '13px',
            fontWeight: '500',
            border: '1px solid #2e7d32',
            backgroundColor: '#2e7d32',
            color: 'white',
            borderRadius: '8px',
            transition: 'all 0.2s',
            flex: isMobile ? '1' : 'auto',
            minWidth: isMobile ? '100px' : 'auto'
          }}
          onMouseEnter={(e) => e.target.style.backgroundColor = '#1b5e20'}
          onMouseLeave={(e) => e.target.style.backgroundColor = '#2e7d32'}
        >
          Открыть блок {'{'}
        </button>
        
        <button 
          onClick={closeBlock} 
          disabled={currentLevel === 0}
          style={{ 
            cursor: currentLevel === 0 ? 'not-allowed' : 'pointer', 
            padding: isMobile ? '10px 16px' : '8px 16px',
            fontSize: isMobile ? '14px' : '13px',
            fontWeight: '500',
            border: '1px solid #c62828',
            backgroundColor: currentLevel === 0 ? '#e0e0e0' : '#c62828',
            color: currentLevel === 0 ? '#999' : 'white',
            borderRadius: '8px',
            transition: 'all 0.2s',
            flex: isMobile ? '1' : 'auto',
            minWidth: isMobile ? '100px' : 'auto'
          }}
        >
          Закрыть блок {'}'}
        </button>

        {blocks.length > 0 && (
          <button 
            onClick={clearBlocks}
            style={{ 
              cursor: 'pointer', 
              padding: isMobile ? '10px 16px' : '8px 16px',
              fontSize: isMobile ? '14px' : '13px',
              fontWeight: '500',
              border: '1px solid #ff6f00',
              backgroundColor: '#ff6f00',
              color: 'white',
              borderRadius: '8px',
              transition: 'all 0.2s',
              flex: isMobile ? '1' : 'auto',
              minWidth: isMobile ? '80px' : 'auto'
            }}
            onMouseEnter={(e) => e.target.style.backgroundColor = '#e65100'}
            onMouseLeave={(e) => e.target.style.backgroundColor = '#ff6f00'}
          >
            Очистить
          </button>
        )}
      </div>

      <div style={{
        backgroundColor: '#f8f9fa',
        borderRadius: '8px',
        border: '1px solid #dee2e6',
        overflowX: 'auto',
        WebkitOverflowScrolling: 'touch'
      }}>
        <pre style={{ 
          whiteSpace: 'pre-wrap', 
          margin: 0, 
          fontSize: isMobile ? '13px' : '14px',
          lineHeight: '1.6',
          padding: isMobile ? '12px' : '15px',
          minHeight: isMobile ? '300px' : '400px',
          maxHeight: isMobile ? '400px' : '500px',
          overflowY: 'auto'
        }}>
          {blocks.length === 0 ? (
            <div style={{ 
              color: '#adb5bd', 
              textAlign: 'center', 
              padding: '40px 20px',
              fontStyle: 'italic'
            }}>
              Нажмите "Добавить строку" или "Открыть блок" чтобы начать
            </div>
          ) : (
            blocks.map((line, i) => {
              const isBrace = line.trim() === '{' || line.trim() === '}';
              const color = isBrace ? (line.trim() === '{' ? '#2e7d32' : '#c62828') : '#212529';
              
              return (
                <div 
                  key={i} 
                  style={{ 
                    color: color,
                    wordBreak: 'break-word',
                    whiteSpace: 'pre-wrap',
                    padding: '2px 0'
                  }}
                >
                  {line}
                </div>
              );
            })
          )}
        </pre>
      </div>

      {/* Инструкция для мобильных устройств */}
      {isMobile && (
        <div style={{
          marginTop: '15px',
          padding: '10px',
          backgroundColor: '#fff3e0',
          borderRadius: '8px',
          fontSize: '12px',
          color: '#e65100',
          textAlign: 'center'
        }}>
          💡 Подсказка: Используйте горизонтальную прокрутку для просмотра длинных строк
        </div>
      )}
    </div>
  );
};

const BlockBuilder = () => {
  return (
    <BrowserOnly fallback={<div>Loading...</div>}>
      {() => <BlockBuilderContent />}
    </BrowserOnly>
  );
};

export default BlockBuilder;