import React, { useState, useEffect, useCallback } from 'react';

const GarbageCollectorDemo = () => {
  const [memoryBlocks, setMemoryBlocks] = useState([]);
  const [isCollecting, setIsCollecting] = useState(false);
  const [nextId, setNextId] = useState(1);
  const [log, setLog] = useState(['Компонент загружен. GC ожидает...']);
  const [autoCollect, setAutoCollect] = useState(true);

  const allocateMemory = useCallback(() => {
    const reachable = Math.random() > 0.4;
    const newBlock = {
      id: nextId,
      name: `Block_${nextId}`,
      size: Math.floor(Math.random() * 30) + 10,
      reachable: reachable,
      marked: false,
      createdAt: new Date()
    };
    
    setMemoryBlocks(prev => [...prev, newBlock]);
    setLog(prev => [`Выделен блок ${newBlock.name} (${newBlock.size} KB) - ${reachable ? 'Достижим' : 'Не достижим (мусор)'}`, ...prev.slice(0, 9)]);
    setNextId(prev => prev + 1);
  }, [nextId]);

  const runGarbageCollector = useCallback(() => {
    if (isCollecting) return;
    
    setIsCollecting(true);
    setLog(prev => ['Запуск сборщика мусора (Mark-and-Sweep)...', ...prev.slice(0, 9)]);
    
    setTimeout(() => {
      setLog(prev => ['Фаза 1: Маркировка достижимых объектов...', ...prev.slice(0, 9)]);
      
      setMemoryBlocks(prev => 
        prev.map(block => ({
          ...block,
          marked: block.reachable
        }))
      );

      setTimeout(() => {
        setLog(prev => ['Фаза 2: Удаление не отмеченных объектов (Sweep)...', ...prev.slice(0, 9)]);
        
        setMemoryBlocks(prev => {
          const removed = prev.filter(block => !block.marked);
          const kept = prev.filter(block => block.marked);
          
          if (removed.length > 0) {
            setLog(prevLog => [
              `Удалено ${removed.length} блок(ов) мусора: ${removed.map(b => b.name).join(', ')}`,
              ...prevLog.slice(0, 8)
            ]);
          } else {
            setLog(prevLog => ['Мусора не найдено, ничего не удалено', ...prevLog.slice(0, 9)]);
          }
          
          return kept.map(block => ({
            ...block,
            marked: false
          }));
        });
        
        setIsCollecting(false);
        setLog(prev => ['✅ Сборка мусора завершена', ...prev.slice(0, 9)]);
      }, 800);
    }, 800);
  }, [isCollecting]);

  useEffect(() => {
    if (!autoCollect) return;
    
    const interval = setInterval(() => {
      if (memoryBlocks.length > 0 && !isCollecting) {
        runGarbageCollector();
      }
    }, 5000);
    
    return () => clearInterval(interval);
  }, [autoCollect, memoryBlocks.length, isCollecting, runGarbageCollector]);

  const manualCollect = () => {
    if (!isCollecting && memoryBlocks.length > 0) {
      runGarbageCollector();
    }
  };

  const resetDemo = () => {
    setMemoryBlocks([]);
    setNextId(1);
    setLog(['Демо сброшено. Начните выделять память!']);
    setIsCollecting(false);
  };

  const toggleReachable = (id) => {
    if (isCollecting) return;
    
    setMemoryBlocks(prev => 
      prev.map(block => 
        block.id === id 
          ? { ...block, reachable: !block.reachable }
          : block
      )
    );
    
    const block = memoryBlocks.find(b => b.id === id);
    if (block) {
      setLog(prev => [
        `Изменён статус ${block.name}: ${!block.reachable ? 'стал достижимым' : 'стал мусором (не достижим)'}`,
        ...prev.slice(0, 9)
      ]);
    }
  };

  const totalMemory = memoryBlocks.reduce((sum, block) => sum + block.size, 0);
  const garbageMemory = memoryBlocks
    .filter(block => !block.reachable)
    .reduce((sum, block) => sum + block.size, 0);
  const aliveMemory = totalMemory - garbageMemory;

  const styles = {
    container: {
      fontFamily: 'system-ui, -apple-system, "Segoe UI", Roboto, monospace',
      maxWidth: '1200px',
      margin: '1rem',
      background: 'linear-gradient(135deg, #0f0c29, #302b63, #24243e)',
      borderRadius: '20px',
      padding: '16px',
      boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
      color: '#e0e0e0',
      '@media (minWidth: 768px)': {
        margin: '2rem auto',
        padding: '24px',
      }
    },
    title: {
      fontSize: '1.5rem',
      margin: 0,
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
      '@media (minWidth: 768px)': {
        fontSize: '2.2rem',
      }
    },
    controls: {
      display: 'flex',
      gap: '10px',
      marginBottom: '20px',
      flexWrap: 'wrap',
      justifyContent: 'center',
    },
    button: {
      padding: '8px 16px',
      border: 'none',
      borderRadius: '8px',
      color: 'white',
      fontFamily: 'inherit',
      fontSize: '13px',
      fontWeight: 'bold',
      transition: 'transform 0.2s, opacity 0.2s',
      cursor: 'pointer',
      flex: '1',
      minWidth: '120px',
      '@media (minWidth: 768px)': {
        padding: '10px 20px',
        fontSize: '14px',
        flex: 'initial',
      }
    },
    statsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
      gap: '12px',
      marginBottom: '20px',
      '@media (minWidth: 768px)': {
        gap: '16px',
      }
    },
    statCard: {
      background: 'rgba(0,0,0,0.3)',
      borderRadius: '12px',
      padding: '12px',
      textAlign: 'center',
    },
    statValue: {
      fontSize: '24px',
      fontWeight: 'bold',
      '@media (minWidth: 768px)': {
        fontSize: '28px',
      }
    },
    heapArea: {
      background: 'rgba(0,0,0,0.4)',
      borderRadius: '16px',
      padding: '16px',
      marginBottom: '20px',
      minHeight: '250px',
    },
    blocksContainer: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '8px',
      alignItems: 'flex-start',
      justifyContent: 'center',
    },
    memoryBlock: {
      borderRadius: '10px',
      padding: '10px',
      minWidth: '80px',
      textAlign: 'center',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      flex: '1',
      maxWidth: '120px',
      '@media (minWidth: 768px)': {
        padding: '12px',
        minWidth: '100px',
        flex: 'initial',
      }
    },
    logArea: {
      background: 'rgba(0,0,0,0.5)',
      borderRadius: '12px',
      padding: '12px',
      fontFamily: 'monospace',
      fontSize: '11px',
      '@media (minWidth: 768px)': {
        padding: '16px',
        fontSize: '12px',
      }
    },
    infoArea: {
      marginTop: '20px',
      background: 'rgba(0,0,0,0.3)',
      borderRadius: '12px',
      padding: '12px',
      fontSize: '12px',
      lineHeight: '1.5',
      '@media (minWidth: 768px)': {
        marginTop: '24px',
        padding: '16px',
        fontSize: '13px',
      }
    }
  };

  return (
    <div style={styles.container}>
      
      {/* Заголовок */}
      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <h1 style={styles.title}>
          Garbage Collector Visualizer
        </h1>
        <p style={{ color: '#aaa', marginTop: '8px', fontSize: '12px' }}>
          Mark-and-Sweep Algorithm Simulation
        </p>
      </div>

      {/* Панель управления */}
      <div style={styles.controls}>
        <button
          onClick={allocateMemory}
          disabled={isCollecting}
          style={{
            ...styles.button,
            background: 'linear-gradient(135deg, #00b4db, #0083b0)',
            opacity: isCollecting ? 0.5 : 1,
            cursor: isCollecting ? 'not-allowed' : 'pointer'
          }}
          onMouseEnter={(e) => !isCollecting && (e.currentTarget.style.transform = 'scale(1.02)')}
          onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
        >
          Выделить память
        </button>
        
        <button
          onClick={manualCollect}
          disabled={isCollecting || memoryBlocks.length === 0}
          style={{
            ...styles.button,
            background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
            opacity: (isCollecting || memoryBlocks.length === 0) ? 0.5 : 1,
            cursor: (isCollecting || memoryBlocks.length === 0) ? 'not-allowed' : 'pointer'
          }}
          onMouseEnter={(e) => !isCollecting && memoryBlocks.length > 0 && (e.currentTarget.style.transform = 'scale(1.02)')}
          onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
        >
          Запустить GC
        </button>
        
        <button
          onClick={resetDemo}
          disabled={isCollecting}
          style={{
            ...styles.button,
            background: 'linear-gradient(135deg, #434343, #000000)',
            opacity: isCollecting ? 0.5 : 1,
            cursor: isCollecting ? 'not-allowed' : 'pointer'
          }}
          onMouseEnter={(e) => !isCollecting && (e.currentTarget.style.transform = 'scale(1.02)')}
          onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
        >
          Сброс
        </button>
        
        <label style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          padding: '8px 16px',
          background: 'rgba(255,255,255,0.1)',
          borderRadius: '8px',
          cursor: 'pointer',
          fontSize: '13px'
        }}>
          <input
            type="checkbox"
            checked={autoCollect}
            onChange={(e) => setAutoCollect(e.target.checked)}
            disabled={isCollecting}
            style={{ cursor: 'pointer', width: '16px', height: '16px' }}
          />
          Авто-GC
        </label>
      </div>

      {/* Статистика */}
      <div style={styles.statsGrid}>
        <div style={styles.statCard}>
          <div style={{ ...styles.statValue, color: '#667eea' }}>
            {memoryBlocks.length}
          </div>
          <div style={{ fontSize: '11px', color: '#aaa' }}>Всего объектов</div>
        </div>
        
        <div style={styles.statCard}>
          <div style={{ ...styles.statValue, color: '#4ade80' }}>
            {aliveMemory} KB
          </div>
          <div style={{ fontSize: '11px', color: '#aaa' }}>Достижимая память</div>
        </div>
        
        <div style={styles.statCard}>
          <div style={{ ...styles.statValue, color: '#f87171' }}>
            {garbageMemory} KB
          </div>
          <div style={{ fontSize: '11px', color: '#aaa' }}>Мусор</div>
        </div>
      </div>

      {/* Визуализация памяти */}
      <div style={styles.heapArea}>
        <div style={{ fontSize: '12px', marginBottom: '12px', color: '#aaa' }}>
          Область памяти {memoryBlocks.length === 0 ? '' : `(${totalMemory} KB)`}
        </div>
        
        <div style={styles.blocksContainer}>
          {memoryBlocks.length === 0 ? (
            <div style={{ 
              textAlign: 'center', 
              width: '100%', 
              padding: '30px',
              color: '#666',
              fontSize: '14px'
            }}>
              💡 Нажмите "Выделить память", чтобы создать объекты
            </div>
          ) : (
            memoryBlocks.map(block => (
              <div
                key={block.id}
                onClick={() => toggleReachable(block.id)}
                style={{
                  ...styles.memoryBlock,
                  background: block.reachable 
                    ? 'linear-gradient(135deg, #4ade80, #22c55e)'
                    : 'linear-gradient(135deg, #f87171, #ef4444)',
                  cursor: isCollecting ? 'default' : 'pointer',
                  opacity: block.marked ? 0.7 : 1,
                  boxShadow: block.marked ? '0 0 0 2px #fbbf24' : 'none',
                  transform: block.marked ? 'scale(1.02)' : 'scale(1)'
                }}
              >
                <div style={{ fontWeight: 'bold', fontSize: '12px' }}>
                  {block.name}
                </div>
                <div style={{ fontSize: '10px', marginTop: '4px' }}>
                  {block.size} KB
                </div>
                <div style={{ fontSize: '9px', marginTop: '4px' }}>
                  {block.reachable ? '🔗 Достижим' : '💔 Мусор'}
                </div>
                {block.marked && (
                  <div style={{ fontSize: '8px', marginTop: '4px', color: '#fbbf24' }}>
                    Marked
                  </div>
                )}
              </div>
            ))
          )}
        </div>
        
        {isCollecting && (
          <div style={{
            marginTop: '16px',
            textAlign: 'center',
            padding: '8px',
            background: 'rgba(251,191,36,0.2)',
            borderRadius: '8px',
            animation: 'pulse 1s infinite',
            fontSize: '12px'
          }}>
            Сборщик мусора работает... {memoryBlocks.filter(b => b.marked).length} отмечено
          </div>
        )}
      </div>

      {/* Лог событий */}
      <div style={styles.logArea}>
        <div style={{ marginBottom: '8px', fontWeight: 'bold', color: '#667eea', fontSize: '12px' }}>
          Event Log
        </div>
        <div style={{ maxHeight: '200px', overflowY: 'auto' }}>
          {log.map((entry, idx) => (
            <div key={idx} style={{ 
              padding: '4px 0', 
              borderBottom: '1px solid rgba(255,255,255,0.1)',
              color: idx === 0 ? '#fff' : '#aaa',
              fontSize: '10px'
            }}>
              {entry}
            </div>
          ))}
        </div>
      </div>

      {/* Объяснение */}
      <div style={styles.infoArea}>
        <div style={{ fontWeight: 'bold', marginBottom: '8px', color: '#667eea', fontSize: '13px' }}>
          Как работает Garbage Collector (Mark-and-Sweep):
        </div>
        <ul style={{ margin: 0, paddingLeft: '20px' }}>
          <li><strong>Выделение памяти</strong> - создание новых объектов в куче (heap)</li>
          <li><strong>Достижимые объекты</strong> - зеленые блоки, на которые есть ссылки (их не удалят)</li>
          <li><strong>Мусор</strong> - красные блоки, без ссылок (будут удалены GC)</li>
          <li><strong>Mark</strong> - GC проходит по всем достижимым объектам и помечает их</li>
          <li><strong>Sweep</strong> - GC удаляет все неотмеченные объекты (мусор)</li>
          <li><strong>💡 Совет</strong> - кликайте по блокам, чтобы менять их статус</li>
        </ul>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.6; }
        }
        
        @media (max-width: 480px) {
          button {
            font-size: 12px !important;
            padding: 8px 12px !important;
          }
        }
        
        @media (min-width: 768px) and (max-width: 1024px) {
          .memory-block {
            min-width: 90px !important;
          }
        }
      `}</style>
    </div>
  );
};

export default GarbageCollectorDemo;