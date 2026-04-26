import React, { useState, useCallback, useRef, useEffect } from 'react';
import BrowserOnly from './BrowserOnly';

const ProcessThreadVisualizer = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [mode, setMode] = useState('single');
  const [singleProgress, setSingleProgress] = useState(0);
  const [multiProgress, setMultiProgress] = useState({ thread1: 0, thread2: 0, thread3: 0 });
  const [singleResult, setSingleResult] = useState(null);
  const [multiResult, setMultiResult] = useState(null);
  const [activeThread, setActiveThread] = useState(null);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);
  
  const animationRef = useRef(null);
  const startTimeRef = useRef(null);

  const totalTasks = 100;

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobile = windowWidth <= 768;
  const isTablet = windowWidth > 768 && windowWidth <= 1024;

  const runSingleThread = useCallback(() => {
    let current = 0;
    const step = () => {
      if (current < totalTasks) {
        current++;
        setSingleProgress(current);
        setActiveThread('main');
        setTimeout(() => {
          step();
          setActiveThread(null);
        }, 30);
      } else {
        setSingleResult({
          time: ((Date.now() - startTimeRef.current) / 1000).toFixed(2),
          tasks: totalTasks
        });
        setIsRunning(false);
        setActiveThread(null);
      }
    };
    step();
  }, []);

  const runMultiThread = useCallback(() => {
    const threads = [1, 2, 3];
    let completed = 0;
    const tasksPerThread = Math.ceil(totalTasks / threads.length);
    const progress = { thread1: 0, thread2: 0, thread3: 0 };
    
    const threadStep = (threadId) => {
      if (progress[`thread${threadId}`] < tasksPerThread && completed < totalTasks) {
        progress[`thread${threadId}`]++;
        completed++;
        setMultiProgress({ ...progress });
        setActiveThread(`thread${threadId}`);
        
        setTimeout(() => {
          threadStep(threadId);
          if (completed === totalTasks) {
            setActiveThread(null);
          }
        }, 15);
      }
    };
    
    threads.forEach(id => {
      setTimeout(() => threadStep(id), 0);
    });
    
    const checkCompletion = setInterval(() => {
      if (completed >= totalTasks) {
        clearInterval(checkCompletion);
        setMultiResult({
          time: ((Date.now() - startTimeRef.current) / 1000).toFixed(2),
          tasks: totalTasks,
          threads: 3
        });
        setIsRunning(false);
        setActiveThread(null);
      }
    }, 50);
    
    return () => clearInterval(checkCompletion);
  }, []);

  const startSimulation = useCallback(() => {
    if (isRunning) return;
    
    setIsRunning(true);
    startTimeRef.current = Date.now();
    
    if (mode === 'single') {
      setSingleProgress(0);
      setSingleResult(null);
      runSingleThread();
    } else {
      setMultiProgress({ thread1: 0, thread2: 0, thread3: 0 });
      setMultiResult(null);
      runMultiThread();
    }
  }, [mode, isRunning, runSingleThread, runMultiThread]);

  const resetSimulation = useCallback(() => {
    if (animationRef.current) {
      clearTimeout(animationRef.current);
    }
    setIsRunning(false);
    setSingleProgress(0);
    setMultiProgress({ thread1: 0, thread2: 0, thread3: 0 });
    setSingleResult(null);
    setMultiResult(null);
    setActiveThread(null);
  }, []);

  const changeMode = useCallback((newMode) => {
    if (isRunning) return;
    setMode(newMode);
    resetSimulation();
  }, [isRunning, resetSimulation]);

  const styles = {
    container: {
      maxWidth: '1200px',
      margin: isMobile ? '1rem auto' : '2rem auto',
      padding: isMobile ? '1rem' : '1.5rem',
      backgroundColor: '#f8f9fa',
      borderRadius: isMobile ? '12px' : '16px',
      boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
      fontFamily: "'Segoe UI', 'Roboto', sans-serif"
    },
    header: {
      textAlign: 'center',
      marginBottom: isMobile ? '1.5rem' : '2rem',
      paddingBottom: isMobile ? '0.75rem' : '1rem',
      borderBottom: '2px solid #e0e0e0'
    },
    title: {
      fontSize: isMobile ? '1.3rem' : (isTablet ? '1.6rem' : '1.8rem'),
      color: '#2c3e50',
      marginBottom: '0.5rem'
    },
    subtitle: {
      color: '#7f8c8d',
      fontSize: isMobile ? '0.85rem' : '1rem',
      padding: '0 0.5rem'
    },
    modeSelector: {
      display: 'flex',
      gap: isMobile ? '0.75rem' : '1rem',
      justifyContent: 'center',
      marginBottom: isMobile ? '1.5rem' : '2rem',
      flexDirection: isMobile ? 'column' : 'row',
      alignItems: 'center'
    },
    modeButton: {
      padding: isMobile ? '0.6rem 1rem' : '0.75rem 1.75rem',
      fontSize: isMobile ? '0.9rem' : '1rem',
      border: 'none',
      borderRadius: '8px',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      fontWeight: '500',
      width: isMobile ? '100%' : 'auto'
    },
    modeButtonActive: {
      backgroundColor: '#3498db',
      color: 'white',
      boxShadow: '0 2px 8px rgba(52,152,219,0.3)'
    },
    modeButtonInactive: {
      backgroundColor: '#ecf0f1',
      color: '#7f8c8d'
    },
    visualizer: {
      display: 'grid',
      gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
      gap: isMobile ? '1rem' : '2rem',
      marginBottom: '2rem'
    },
    card: {
      backgroundColor: 'white',
      borderRadius: isMobile ? '10px' : '12px',
      padding: isMobile ? '1rem' : '1.5rem',
      boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
    },
    cardTitle: {
      fontSize: isMobile ? '1.1rem' : '1.3rem',
      fontWeight: '600',
      marginBottom: '1rem',
      color: '#2c3e50',
      display: 'flex',
      flexDirection: isMobile ? 'column' : 'row',
      alignItems: isMobile ? 'flex-start' : 'center',
      gap: isMobile ? '0.5rem' : '0.75rem'
    },
    threadContainer: {
      marginTop: '1rem'
    },
    threadItem: {
      backgroundColor: '#f8f9fa',
      padding: isMobile ? '0.75rem' : '1rem',
      marginBottom: '0.75rem',
      borderRadius: '8px',
      borderLeft: `4px solid`,
      transition: 'all 0.2s ease'
    },
    progressBar: {
      width: '100%',
      height: isMobile ? '24px' : '30px',
      backgroundColor: '#e0e0e0',
      borderRadius: '15px',
      overflow: 'hidden',
      marginTop: '0.5rem',
      position: 'relative'
    },
    progressFill: {
      height: '100%',
      transition: 'width 0.2s ease',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      fontSize: isMobile ? '0.7rem' : '0.85rem',
      fontWeight: '500'
    },
    stats: {
      marginTop: '1rem',
      padding: isMobile ? '0.75rem' : '1rem',
      backgroundColor: '#e8f4fd',
      borderRadius: '8px',
      fontSize: isMobile ? '0.8rem' : '0.9rem'
    },
    controlButtons: {
      display: 'flex',
      gap: isMobile ? '0.75rem' : '1rem',
      justifyContent: 'center',
      marginTop: '2rem',
      flexDirection: isMobile ? 'column' : 'row'
    },
    button: {
      padding: isMobile ? '0.7rem 1rem' : '0.75rem 1.5rem',
      fontSize: isMobile ? '0.9rem' : '1rem',
      border: 'none',
      borderRadius: '8px',
      cursor: 'pointer',
      fontWeight: '600',
      transition: 'all 0.2s ease',
      width: isMobile ? '100%' : 'auto'
    },
    buttonPrimary: {
      backgroundColor: '#3498db',
      color: 'white'
    },
    buttonSecondary: {
      backgroundColor: '#e74c3c',
      color: 'white'
    },
    buttonDisabled: {
      backgroundColor: '#bdc3c7',
      cursor: 'not-allowed',
      opacity: 0.6
    },
    efficiencyNote: {
      marginTop: '2rem',
      padding: isMobile ? '0.75rem' : '1rem',
      backgroundColor: '#d5f4e6',
      borderRadius: '8px',
      borderLeft: '4px solid #27ae60',
      fontSize: isMobile ? '0.8rem' : '0.9rem'
    },
    badge: {
      display: 'inline-block',
      padding: isMobile ? '0.2rem 0.6rem' : '0.25rem 0.75rem',
      borderRadius: '20px',
      fontSize: isMobile ? '0.65rem' : '0.75rem',
      fontWeight: '500',
      marginLeft: isMobile ? '0' : '0.5rem'
    },
    threadHeader: {
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: '0.5rem'
    },
    threadName: {
      fontSize: isMobile ? '0.85rem' : '1rem',
      fontWeight: '500'
    },
    activeBadge: {
      fontSize: isMobile ? '0.7rem' : '0.8rem',
      color: '#3498db'
    },
    progressText: {
      marginTop: '0.5rem',
      fontSize: isMobile ? '0.75rem' : '0.85rem',
      color: '#666'
    }
  };

  const getThreadColor = (threadId) => {
    const colors = {
      main: '#3498db',
      thread1: '#e74c3c',
      thread2: '#2ecc71',
      thread3: '#f39c12'
    };
    return colors[threadId] || '#3498db';
  };

  const getThreadTitle = (threadId) => {
    const titles = {
      main: '🎯 Основной поток (Main Thread)',
      thread1: '⚡ Поток 1 (Чтение данных)',
      thread2: '🔧 Поток 2 (Обработка данных)',
      thread3: '📊 Поток 3 (Вычисления)'
    };
    return titles[threadId] || threadId;
  };

  const InnerComponent = () => {
    return (
      <div style={styles.container}>
        <div style={styles.header}>
          <h2 style={styles.title}>Визуализатор процессов и потоков</h2>
          <p style={styles.subtitle}>
            {isMobile ? 'Демонстрация однопоточной и многопоточной обработки' : 'Интерактивная демонстрация разницы между однопоточной и многопоточной обработкой данных'}
          </p>
        </div>

        <div style={styles.modeSelector}>
          <button
            style={{
              ...styles.modeButton,
              ...(mode === 'single' ? styles.modeButtonActive : styles.modeButtonInactive)
            }}
            onClick={() => changeMode('single')}
            disabled={isRunning}
          >
            Однопоточный режим
          </button>
          <button
            style={{
              ...styles.modeButton,
              ...(mode === 'multi' ? styles.modeButtonActive : styles.modeButtonInactive)
            }}
            onClick={() => changeMode('multi')}
            disabled={isRunning}
          >
            Многопоточный режим (3 потока)
          </button>
        </div>

        <div style={styles.visualizer}>
          {/* Однопоточная визуализация */}
          <div style={styles.card}>
            <div style={styles.cardTitle}>
              <span>Однопоточная обработка</span>
              <span style={{...styles.badge, backgroundColor: '#3498db', color: 'white'}}>
                Последовательно
              </span>
            </div>
            <div style={styles.threadContainer}>
              <div
                style={{
                  ...styles.threadItem,
                  borderLeftColor: getThreadColor('main'),
                  backgroundColor: activeThread === 'main' ? '#e3f2fd' : '#f8f9fa'
                }}
              >
                <div style={styles.threadHeader}>
                  <span style={styles.threadName}>{getThreadTitle('main')}</span>
                  {activeThread === 'main' && (
                    <span style={styles.activeBadge}>⚡ Выполняется...</span>
                  )}
                </div>
                <div style={styles.progressBar}>
                  <div
                    style={{
                      ...styles.progressFill,
                      width: `${(singleProgress / totalTasks) * 100}%`,
                      backgroundColor: getThreadColor('main')
                    }}
                  >
                    {!isMobile && `${Math.round((singleProgress / totalTasks) * 100)}%`}
                    {isMobile && singleProgress > 0 && `${Math.round((singleProgress / totalTasks) * 100)}%`}
                  </div>
                </div>
                <div style={styles.progressText}>
                  Задач выполнено: {singleProgress} / {totalTasks}
                </div>
              </div>
            </div>
            
            {singleResult && (
              <div style={styles.stats}>
                <strong>Результат:</strong><br />
                Время выполнения: {singleResult.time} секунд<br />
                Обработано задач: {singleResult.tasks}<br />
                Тип обработки: последовательная
              </div>
            )}
          </div>

          {/* Многопоточная визуализация */}
          <div style={styles.card}>
            <div style={styles.cardTitle}>
              <span>Многопоточная обработка</span>
              <span style={{...styles.badge, backgroundColor: '#27ae60', color: 'white'}}>
                Параллельно
              </span>
            </div>
            <div style={styles.threadContainer}>
              {['thread1', 'thread2', 'thread3'].map((thread) => (
                <div
                  key={thread}
                  style={{
                    ...styles.threadItem,
                    borderLeftColor: getThreadColor(thread),
                    backgroundColor: activeThread === thread ? '#e8f8f5' : '#f8f9fa'
                  }}
                >
                  <div style={styles.threadHeader}>
                    <span style={styles.threadName}>{getThreadTitle(thread)}</span>
                    {activeThread === thread && (
                      <span style={styles.activeBadge}>🟢 Активен</span>
                    )}
                  </div>
                  <div style={styles.progressBar}>
                    <div
                      style={{
                        ...styles.progressFill,
                        width: `${(multiProgress[thread] / Math.ceil(totalTasks / 3)) * 100}%`,
                        backgroundColor: getThreadColor(thread)
                      }}
                    >
                      {!isMobile && `${Math.round((multiProgress[thread] / Math.ceil(totalTasks / 3)) * 100)}%`}
                      {isMobile && multiProgress[thread] > 0 && `${Math.round((multiProgress[thread] / Math.ceil(totalTasks / 3)) * 100)}%`}
                    </div>
                  </div>
                  <div style={styles.progressText}>
                    Задач выполнено: {multiProgress[thread]} / {Math.ceil(totalTasks / 3)}
                  </div>
                </div>
              ))}
            </div>
            
            {multiResult && (
              <div style={styles.stats}>
                <strong>🚀 Результат:</strong><br />
                Время выполнения: {multiResult.time} секунд<br />
                Обработано задач: {multiResult.tasks}<br />
                Количество потоков: {multiResult.threads}<br />
                {singleResult && (
                  <>Ускорение: ~{(singleResult.time / multiResult.time).toFixed(2)}x</>
                )}
              </div>
            )}
          </div>
        </div>

        <div style={styles.controlButtons}>
          <button
            style={{
              ...styles.button,
              ...styles.buttonPrimary,
              ...(isRunning ? styles.buttonDisabled : {})
            }}
            onClick={startSimulation}
            disabled={isRunning}
          >
            {isMobile ? '▶ Запуск' : `Запустить обработку ${mode === 'single' ? 'однопоточно' : 'многопоточно'}`}
          </button>
          <button
            style={{
              ...styles.button,
              ...styles.buttonSecondary,
              ...(!isRunning && singleProgress === 0 && multiProgress.thread1 === 0 ? styles.buttonDisabled : {})
            }}
            onClick={resetSimulation}
            disabled={(!isRunning && singleProgress === 0 && multiProgress.thread1 === 0)}
          >
            {isMobile ? '⟳ Сброс' : 'Сбросить'}
          </button>
        </div>

        {multiResult && singleResult && (
          <div style={styles.efficiencyNote}>
            <strong>Анализ эффективности:</strong><br />
            Многопоточная обработка завершилась в {multiResult.time} секунд, что в {(singleResult.time / multiResult.time).toFixed(2)} раза быстрее однопоточной ({singleResult.time} секунд).<br />
            {!isMobile && "Это демонстрирует преимущество параллельного выполнения задач на нескольких потоках."}
          </div>
        )}

        <div style={{...styles.efficiencyNote, backgroundColor: '#fef9e7', borderLeftColor: '#f39c12'}}>
          <strong>💡 Как это работает?</strong><br />
          • <strong>Однопоточный режим:</strong> Все {totalTasks} задач выполняются последовательно в одном потоке.<br />
          • <strong>Многопоточный режим:</strong> {totalTasks} задач распределяются между 3 потоками, которые работают параллельно.<br />
          {!isMobile && (
            <>
              • Потоки разделяют общую память и координируют выполнение, что позволяет быстрее обрабатывать данные.<br />
              • В реальных приложениях многопоточность особенно эффективна для IO-операций и CPU-интенсивных задач.
            </>
          )}
        </div>
      </div>
    );
  };

  return <BrowserOnly>{() => <InnerComponent />}</BrowserOnly>;
};

export default ProcessThreadVisualizer;