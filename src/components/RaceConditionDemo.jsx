import React, { useState, useCallback, useRef, useEffect } from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';

const RaceConditionDemo = () => {
  return (
    <BrowserOnly>
      {() => {
        const [scenario, setScenario] = useState('race');
        const [isRunning, setIsRunning] = useState(false);
        const [balance, setBalance] = useState(1000);
        const [transactionLog, setTransactionLog] = useState([]);
        const [activeThreads, setActiveThreads] = useState({ thread1: false, thread2: false, thread3: false });
        const [semaphoreCount, setSemaphoreCount] = useState(2);
        const [atomicCounter, setAtomicCounter] = useState(0);
        
        const stopSimulationRef = useRef(false);
        const transactionIdRef = useRef(0);
        const mutexLockRef = useRef(false);
        const semaphoreLockRef = useRef(0);
        const waitingQueueRef = useRef([]);

        const resetSimulation = useCallback(() => {
          stopSimulationRef.current = true;
          setIsRunning(false);
          setBalance(1000);
          setTransactionLog([]);
          setActiveThreads({ thread1: false, thread2: false, thread3: false });
          setAtomicCounter(0);
          mutexLockRef.current = false;
          semaphoreLockRef.current = 0;
          waitingQueueRef.current = [];
          transactionIdRef.current = 0;
        }, []);

        const addLog = useCallback((message, type = 'info') => {
          const colors = {
            success: '#27ae60',
            error: '#e74c3c',
            warning: '#f39c12',
            info: '#3498db'
          };
          setTransactionLog(prev => [{
            id: transactionIdRef.current++,
            message,
            type,
            color: colors[type],
            timestamp: new Date().toLocaleTimeString()
          }, ...prev].slice(0, 50));
        }, []);

        const unsafeUpdateBalance = async (threadId, amount, delay = 100) => {
          return new Promise((resolve) => {
            setTimeout(() => {
              const currentBalance = balance;
              addLog(`Поток ${threadId}: Читает баланс = ${currentBalance}`, 'info');
              
              setTimeout(() => {
                const newBalance = currentBalance + amount;
                addLog(`Поток ${threadId}: Вычисляет новый баланс = ${newBalance} (${currentBalance} + ${amount})`, 'info');
                
                setTimeout(() => {
                  setBalance(newBalance);
                  addLog(`Поток ${threadId}: Записывает баланс = ${newBalance}`, amount > 0 ? 'success' : 'warning');
                  resolve();
                }, 50);
              }, 50);
            }, delay);
          });
        };

        const mutexUpdateBalance = async (threadId, amount, delay = 100) => {
          while (mutexLockRef.current) {
            await new Promise(resolve => setTimeout(resolve, 10));
          }
          
          mutexLockRef.current = true;
          addLog(`Поток ${threadId}: Захватил мьютекс`, 'warning');
          
          await new Promise(resolve => setTimeout(resolve, delay));
          
          const currentBalance = balance;
          addLog(`Поток ${threadId}: Читает баланс = ${currentBalance} (под защитой)`, 'info');
          
          await new Promise(resolve => setTimeout(resolve, 50));
          
          const newBalance = currentBalance + amount;
          addLog(`Поток ${threadId}: Вычисляет новый баланс = ${newBalance}`, 'info');
          
          await new Promise(resolve => setTimeout(resolve, 50));
          
          setBalance(newBalance);
          addLog(`Поток ${threadId}: Записывает баланс = ${newBalance} ✅`, 'success');
          
          mutexLockRef.current = false;
          addLog(`Поток ${threadId}: Освободил мьютекс`, 'info');
        };

        const semaphoreUpdateBalance = async (threadId, amount, delay = 100, maxThreads = 2) => {
          while (semaphoreLockRef.current >= maxThreads) {
            addLog(`Поток ${threadId}: Ожидает освобождения семафора (активных: ${semaphoreLockRef.current})`, 'info');
            await new Promise(resolve => setTimeout(resolve, 50));
          }
          
          semaphoreLockRef.current++;
          setSemaphoreCount(maxThreads - semaphoreLockRef.current);
          addLog(`Поток ${threadId}: Захватил семафор (активных: ${semaphoreLockRef.current}/${maxThreads})`, 'warning');
          
          await new Promise(resolve => setTimeout(resolve, delay));
          
          const currentBalance = balance;
          addLog(`Поток ${threadId}: Читает баланс = ${currentBalance}`, 'info');
          
          await new Promise(resolve => setTimeout(resolve, 50));
          
          const newBalance = currentBalance + amount;
          addLog(`Поток ${threadId}: Вычисляет новый баланс = ${newBalance}`, 'info');
          
          await new Promise(resolve => setTimeout(resolve, 50));
          
          setBalance(newBalance);
          addLog(`Поток ${threadId}: Записывает баланс = ${newBalance} ✅`, 'success');
          
          semaphoreLockRef.current--;
          setSemaphoreCount(maxThreads - semaphoreLockRef.current);
          addLog(`Поток ${threadId}: Освободил семафор (активных: ${semaphoreLockRef.current}/${maxThreads})`, 'info');
        };

        const atomicUpdateBalance = async (threadId, amount, delay = 100) => {
          addLog(`Поток ${threadId}: Начинает атомарную операцию`, 'warning');
          
          await new Promise(resolve => setTimeout(resolve, delay));
          
          setBalance(prev => {
            const newBalance = prev + amount;
            addLog(`Поток ${threadId}: Атомарно изменил баланс ${prev} → ${newBalance} (${amount > 0 ? '+' : ''}${amount})`, 'success');
            return newBalance;
          });
          
          setAtomicCounter(prev => {
            const newCounter = prev + 1;
            addLog(`Поток ${threadId}: Атомарный счётчик операций: ${newCounter}`, 'info');
            return newCounter;
          });
        };

        const runSimulation = useCallback(async () => {
          resetSimulation();
          setIsRunning(true);
          stopSimulationRef.current = false;
          
          addLog(`Запуск симуляции в режиме: ${scenario === 'race' ? 'ГОНКА ДАННЫХ (без защиты)' : 
                  scenario === 'mutex' ? 'МЬЮТЕКС' :
                  scenario === 'semaphore' ? 'СЕМАФОР' : 'АТОМАРНЫЕ ОПЕРАЦИИ'}`, 'info');
          
          const operations = [
            { thread: 1, amount: 200, delay: 100 },
            { thread: 2, amount: -150, delay: 150 },
            { thread: 3, amount: 300, delay: 80 },
            { thread: 1, amount: -100, delay: 120 },
            { thread: 2, amount: 250, delay: 90 },
            { thread: 3, amount: -200, delay: 110 }
          ];
          
          const promises = operations.map(async (op, index) => {
            if (stopSimulationRef.current) return;
            
            setActiveThreads(prev => ({ ...prev, [`thread${op.thread}`]: true }));
            
            try {
              if (scenario === 'race') {
                await unsafeUpdateBalance(op.thread, op.amount, op.delay);
              } else if (scenario === 'mutex') {
                await mutexUpdateBalance(op.thread, op.amount, op.delay);
              } else if (scenario === 'semaphore') {
                await semaphoreUpdateBalance(op.thread, op.amount, op.delay, 2);
              } else if (scenario === 'atomic') {
                await atomicUpdateBalance(op.thread, op.amount, op.delay);
              }
            } catch (error) {
              addLog(`❌ Ошибка в потоке ${op.thread}: ${error.message}`, 'error');
            }
            
            setActiveThreads(prev => ({ ...prev, [`thread${op.thread}`]: false }));
          });
          
          await Promise.all(promises);
          
          if (!stopSimulationRef.current) {
            const expectedBalance = 1000 + operations.reduce((sum, op) => sum + op.amount, 0);
            const isCorrect = balance === expectedBalance;
            
            addLog(`\nИТОГО: Баланс = ${balance} (Ожидалось: ${expectedBalance})`, isCorrect ? 'success' : 'error');
            
            if (scenario === 'race' && !isCorrect) {
              addLog(`⚠️ ОБНАРУЖЕНА ГОНКА ДАННЫХ! Результат неверный из-за одновременного доступа к памяти`, 'error');
            } else if (scenario !== 'race' && isCorrect) {
              addLog(`✅ Синхронизация работает корректно! Результат защищён от гонки данных`, 'success');
            }
          }
          
          setIsRunning(false);
        }, [scenario, resetSimulation, balance, addLog]);

        const expectedBalance = 1000 + 200 - 150 + 300 - 100 + 250 - 200;
        const isBalanceCorrect = balance === expectedBalance;

        const styles = {
          container: {
            maxWidth: '1400px',
            margin: '2rem auto',
            padding: '1.5rem',
            backgroundColor: '#1e1e2e',
            borderRadius: '16px',
            boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
            fontFamily: "'Segoe UI', 'Roboto', monospace",
          },
          header: {
            textAlign: 'center',
            marginBottom: '2rem',
            paddingBottom: '1rem',
            borderBottom: '2px solid #2d2d3a',
          },
          title: {
            fontSize: '1.8rem',
            color: '#c9d1d9',
            marginBottom: '0.5rem',
          },
          subtitle: {
            color: '#8b949e',
            fontSize: '0.9rem',
          },
          scenarioSelector: {
            display: 'flex',
            gap: '0.75rem',
            justifyContent: 'center',
            marginBottom: '2rem',
            flexWrap: 'wrap',
          },
          scenarioButton: {
            padding: '0.6rem 1.2rem',
            fontSize: '0.9rem',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            transition: 'all 0.2s ease',
            fontWeight: '500',
            fontFamily: 'inherit',
          },
          mainArea: {
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '1.5rem',
            marginBottom: '1.5rem',
          },
          card: {
            backgroundColor: '#2d2d3a',
            borderRadius: '12px',
            padding: '1.5rem',
            boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
          },
          cardTitle: {
            fontSize: '1.2rem',
            fontWeight: '600',
            marginBottom: '1rem',
            color: '#c9d1d9',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            flexWrap: 'wrap',
          },
          balanceDisplay: {
            backgroundColor: '#1e1e2e',
            padding: '1rem',
            borderRadius: '8px',
            textAlign: 'center',
            marginBottom: '1rem',
          },
          balanceValue: {
            fontSize: '2.5rem',
            fontWeight: 'bold',
            color: '#58a6ff',
          },
          balanceLabel: {
            fontSize: '0.85rem',
            color: '#8b949e',
            marginTop: '0.5rem',
          },
          threadContainer: {
            display: 'flex',
            flexDirection: 'column',
            gap: '0.75rem'
          },
          threadItem: {
            backgroundColor: '#1e1e2e',
            padding: '0.75rem',
            borderRadius: '8px',
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            transition: 'all 0.2s ease',
          },
          threadIcon: {
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '1.2rem',
            backgroundColor: '#2d2d3a',
          },
          threadInfo: {
            flex: 1
          },
          threadName: {
            fontWeight: '500',
            color: '#c9d1d9',
          },
          threadStatus: {
            fontSize: '0.75rem',
            color: '#8b949e',
          },
          logContainer: {
            backgroundColor: '#1e1e2e',
            borderRadius: '8px',
            padding: '1rem',
            height: '400px',
            overflowY: 'auto',
            fontFamily: 'monospace',
            fontSize: '0.8rem',
          },
          logEntry: {
            padding: '0.5rem',
            borderBottom: '1px solid #2d2d3a',
            marginBottom: '0.25rem',
            wordBreak: 'break-word',
          },
          controlButtons: {
            display: 'flex',
            gap: '1rem',
            justifyContent: 'center',
            marginTop: '1rem',
            flexWrap: 'wrap',
          },
          button: {
            padding: '0.75rem 1.5rem',
            fontSize: '1rem',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            fontWeight: '600',
            transition: 'all 0.2s ease',
            fontFamily: 'inherit',
          },
          efficiencyNote: {
            marginTop: '1.5rem',
            padding: '1rem',
            backgroundColor: '#2d2d3a',
            borderRadius: '8px',
            borderLeft: '4px solid',
            fontSize: '0.85rem',
          },
          badge: {
            display: 'inline-block',
            padding: '0.25rem 0.6rem',
            borderRadius: '12px',
            fontSize: '0.7rem',
            fontWeight: '500',
            marginLeft: '0.5rem',
          },
          semaphoreIndicator: {
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            marginTop: '0.5rem',
            padding: '0.5rem',
            backgroundColor: '#1e1e2e',
            borderRadius: '8px',
            flexWrap: 'wrap',
          }
        };

        return (
          <div style={styles.container}>
            <div style={styles.header}>
              <h2 style={styles.title}>Гонка данных и механизмы синхронизации</h2>
              <p style={styles.subtitle}>
                Интерактивная демонстрация проблемы параллельного доступа к памяти и способов её решения
              </p>
            </div>

            <div style={styles.scenarioSelector}>
              <button
                style={{
                  ...styles.scenarioButton,
                  backgroundColor: scenario === 'race' ? '#e74c3c' : '#2d2d3a',
                  color: scenario === 'race' ? 'white' : '#8b949e'
                }}
                onClick={() => setScenario('race')}
                disabled={isRunning}
              >
                Гонка данных
              </button>
              <button
                style={{
                  ...styles.scenarioButton,
                  backgroundColor: scenario === 'mutex' ? '#3498db' : '#2d2d3a',
                  color: scenario === 'mutex' ? 'white' : '#8b949e'
                }}
                onClick={() => setScenario('mutex')}
                disabled={isRunning}
              >
                Мьютекс
              </button>
              <button
                style={{
                  ...styles.scenarioButton,
                  backgroundColor: scenario === 'semaphore' ? '#2ecc71' : '#2d2d3a',
                  color: scenario === 'semaphore' ? 'white' : '#8b949e'
                }}
                onClick={() => setScenario('semaphore')}
                disabled={isRunning}
              >
                Семафор
              </button>
              <button
                style={{
                  ...styles.scenarioButton,
                  backgroundColor: scenario === 'atomic' ? '#f39c12' : '#2d2d3a',
                  color: scenario === 'atomic' ? 'white' : '#8b949e'
                }}
                onClick={() => setScenario('atomic')}
                disabled={isRunning}
              >
                Атомарные
              </button>
            </div>

            <div style={styles.mainArea}>
              <div>
                <div style={styles.card}>
                  <div style={styles.cardTitle}>
                    Состояние счёта
                    <span style={{
                      ...styles.badge,
                      backgroundColor: isBalanceCorrect ? '#2ecc71' : '#e74c3c',
                      color: 'white'
                    }}>
                      {isBalanceCorrect ? '✓ Корректно' : '✗ Ошибка'}
                    </span>
                  </div>
                  <div style={styles.balanceDisplay}>
                    <div style={styles.balanceValue}>
                      {balance} ₽
                    </div>
                    <div style={styles.balanceLabel}>
                      Ожидаемый баланс: {expectedBalance} ₽
                    </div>
                    <div style={styles.balanceLabel}>
                      Отклонение: {balance - expectedBalance} ₽
                    </div>
                  </div>
                  
                  {scenario === 'semaphore' && (
                    <div style={styles.semaphoreIndicator}>
                      <span>Доступные слоты семафора:</span>
                      <strong style={{ fontSize: '1.2rem', color: '#2ecc71' }}>{semaphoreCount}</strong>
                      <span>/ 2</span>
                    </div>
                  )}
                  
                  {scenario === 'atomic' && (
                    <div style={styles.semaphoreIndicator}>
                      <span>Атомарных операций выполнено:</span>
                      <strong style={{ fontSize: '1.2rem', color: '#f39c12' }}>{atomicCounter}</strong>
                    </div>
                  )}
                </div>

                <div style={{ ...styles.card, marginTop: '1rem' }}>
                  <div style={styles.cardTitle}>🧵 Активные потоки</div>
                  <div style={styles.threadContainer}>
                    {[1, 2, 3].map(threadId => (
                      <div key={threadId} style={{
                        ...styles.threadItem,
                        borderLeft: activeThreads[`thread${threadId}`] ? '4px solid #58a6ff' : '4px solid #2d2d3a',
                        backgroundColor: activeThreads[`thread${threadId}`] ? '#2d2d3a' : '#1e1e2e'
                      }}>
                        <div style={styles.threadIcon}>
                          {activeThreads[`thread${threadId}`] ? '⚡' : '💤'}
                        </div>
                        <div style={styles.threadInfo}>
                          <div style={styles.threadName}>
                            Поток {threadId}
                            {threadId === 1 && ' (Депозит)'}
                            {threadId === 2 && ' (Снятие)'}
                            {threadId === 3 && ' (Перевод)'}
                          </div>
                          <div style={styles.threadStatus}>
                            {activeThreads[`thread${threadId}`] ? 'Выполняется...' : 'Ожидание'}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div style={styles.card}>
                <div style={styles.cardTitle}>📋 Лог операций</div>
                <div style={styles.logContainer}>
                  {transactionLog.map(entry => (
                    <div key={entry.id} style={styles.logEntry}>
                      <span style={{ color: '#8b949e', fontSize: '0.7rem' }}>[{entry.timestamp}]</span>{' '}
                      <span style={{ color: entry.color }}>{entry.message}</span>
                    </div>
                  ))}
                  {transactionLog.length === 0 && (
                    <div style={{ color: '#8b949e', textAlign: 'center', padding: '2rem' }}>
                      Нажмите "Запустить" для начала симуляции
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div style={styles.controlButtons}>
              <button
                style={{
                  ...styles.button,
                  backgroundColor: '#58a6ff',
                  color: 'white',
                  opacity: isRunning ? 0.6 : 1
                }}
                onClick={runSimulation}
                disabled={isRunning}
              >
                {isRunning ? 'Выполняется...' : 'Запустить симуляцию'}
              </button>
              <button
                style={{
                  ...styles.button,
                  backgroundColor: '#e74c3c',
                  color: 'white'
                }}
                onClick={resetSimulation}
                disabled={isRunning}
              >
                Сбросить
              </button>
            </div>

            {scenario === 'race' && (
              <div style={{ ...styles.efficiencyNote, borderLeftColor: '#e74c3c' }}>
                <strong>Гонка данных (Race Condition)</strong><br />
                Несколько потоков одновременно читают и записывают общую переменную balance. 
                Из-за отсутствия синхронизации, некоторые операции "перезаписывают" друг друга, 
                что приводит к неверному результату. Ожидаемый баланс: {expectedBalance} ₽, 
                но реальный результат отличается из-за состояния гонки.
              </div>
            )}

            {scenario === 'mutex' && (
              <div style={{ ...styles.efficiencyNote, borderLeftColor: '#3498db' }}>
                <strong>Мьютекс (Mutex)</strong><br />
                Только один поток может захватить мьютекс и получить доступ к критической секции. 
                Остальные потоки ожидают освобождения блокировки. Это гарантирует, что операции 
                над балансом выполняются последовательно, предотвращая гонку данных. Результат 
                всегда корректен, но может быть медленнее из-за ожидания.
              </div>
            )}

            {scenario === 'semaphore' && (
              <div style={{ ...styles.efficiencyNote, borderLeftColor: '#2ecc71' }}>
                <strong>Семафор (Semaphore)</strong><br />
                Семафор позволяет одновременно работать ограниченному числу потоков (в данном случае 2). 
                Когда слоты заняты, остальные потоки ждут. Это баланс между параллелизмом и безопасностью. 
                Полезно для ресурсов с ограниченной пропускной способностью (например, подключения к БД).
              </div>
            )}

            {scenario === 'atomic' && (
              <div style={{ ...styles.efficiencyNote, borderLeftColor: '#f39c12' }}>
                <strong>Атомарные операции (Atomic Operations)</strong><br />
                Операция выполняется как единое неделимое действие непосредственно на уровне процессора. 
                Другие потоки не могут вмешаться в процесс чтения-изменения-записи. Это самый 
                эффективный способ синхронизации для простых операций (инкремент, декремент, 
                сравнение с обменом). Не требует блокировок и не вызывает ожидания.
              </div>
            )}

            <div style={{ ...styles.efficiencyNote, borderLeftColor: '#8b949e', marginTop: '1rem' }}>
              <strong>💡 Deadlock, Starvation и Live-lock:</strong><br />
              • <strong>Deadlock:</strong> Поток 1 захватил ресурс А и ждёт Б, Поток 2 захватил Б и ждёт А — бесконечное ожидание.<br />
              • <strong>Starvation:</strong> Низкоприоритетные потоки никогда не получают доступ к ресурсу из-за высокоприоритетных.<br />
              • <strong>Live-lock:</strong> Потоки постоянно уступают друг другу, но никто не может выполнить задачу.<br />
              Правильный выбор механизма синхронизации помогает избежать этих проблем!
            </div>
          </div>
        );
      }}
    </BrowserOnly>
  );
};

export default RaceConditionDemo;