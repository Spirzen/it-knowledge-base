import React, { useState } from 'react';
import BrowserOnly from './BrowserOnly';

const DataStructureQueue = () => {
  return (
    <BrowserOnly>
      {() => {
        const [activeTab, setActiveTab] = useState('js');
        const [queue, setQueue] = useState(['Заявка #1', 'Заявка #2', 'Заявка #3']);
        const [tempValue, setTempValue] = useState('');
        const [log, setLog] = useState([]);

        const codeExamples = {
          js: {
            queue: "// Создание очереди (Массив в JavaScript)\n" +
                   "const queue = ['Заявка #1', 'Заявка #2'];\n\n" +
                   "// Операция ENQUEUE (добавление в конец)\n" +
                   "queue.push('Новая заявка'); \n" +
                   "console.log(queue[0]); // \"Заявка #1\" (первый в очереди)\n\n" +
                   "// Операция DEQUEUE (удаление из начала)\n" +
                   "const firstItem = queue.shift(); \n" +
                   "console.log(firstItem); // \"Заявка #1\"\n" +
                   "console.log(queue);     // ['Заявка #2', 'Новая заявка']\n\n" +
                   "// Операция PEEK (просмотр первого элемента без удаления)\n" +
                   "const head = queue[0];\n" +
                   "console.log(head);"
          },
          py: {
            queue: "# Создание очереди (deque) в Python\n" +
                   "from collections import deque\n" +
                   "my_queue = deque(['Заявка #1', 'Заявка #2'])\n\n" +
                   "# Операция ENQUEUE (добавление в конец)\n" +
                   "my_queue.append('Новая заявка')\n" +
                   "print(my_queue[0])  # \"Заявка #1\"\n\n" +
                   "# Операция DEQUEUE (удаление из начала)\n" +
                   "first_item = my_queue.popleft()\n" +
                   "print(first_item)   # \"Заявка #1\"\n" +
                   "print(my_queue)     # deque(['Заявка #2', 'Новая заявка'])\n\n" +
                   "# Операция PEEK (просмотр первого элемента)\n" +
                   "if my_queue:\n" +
                   "    print(my_queue[0])"
          },
          cs: {
            queue: "// Создание очереди в C#\n" +
                   "using System.Collections.Generic;\n" +
                   "var queue = new Queue<string> { \"Заявка #1\", \"Заявка #2\" };\n\n" +
                   "// Операция ENQUEUE (добавление в конец)\n" +
                   "queue.Enqueue(\"Новая заявка\");\n" +
                   "Console.WriteLine(queue.Peek()); // \"Заявка #1\"\n\n" +
                   "// Операция DEQUEUE (удаление из начала)\n" +
                   "string firstItem = queue.Dequeue();\n" +
                   "Console.WriteLine(firstItem); // \"Заявка #1\"\n" +
                   "Console.WriteLine($\"Осталось элементов: {queue.Count}\");\n\n" +
                   "// Операция PEEK (просмотр без удаления)\n" +
                   "string currentHead = queue.Peek();"
          }
        };

        const getStyles = () => {
          const isMobile = window.innerWidth <= 768;
          const isTablet = window.innerWidth > 768 && window.innerWidth <= 1024;
          
          return {
            container: {
              fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
              border: '1px solid #e0e0e0',
              borderRadius: '8px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
              backgroundColor: '#ffffff',
              overflow: 'hidden',
              margin: isMobile ? '10px 0' : '20px 0',
            },
            header: {
              backgroundColor: '#f5f7fa',
              padding: isMobile ? '12px 16px' : '16px 20px',
              borderBottom: '1px solid #e0e0e0',
            },
            title: {
              fontSize: isMobile ? '16px' : '18px',
              fontWeight: '600',
              color: '#1a1a1a',
              margin: 0,
            },
            description: {
              fontSize: isMobile ? '12px' : '14px',
              color: '#555',
              marginTop: '8px',
              lineHeight: '1.5',
            },
            tabs: {
              display: 'flex',
              borderBottom: '1px solid #e0e0e0',
              backgroundColor: '#fafafa',
              overflowX: 'auto',
              overflowY: 'hidden',
              WebkitOverflowScrolling: 'touch',
              scrollbarWidth: 'thin',
            },
            tab: {
              padding: isMobile ? '10px 16px' : '12px 24px',
              cursor: 'pointer',
              fontSize: isMobile ? '12px' : '14px',
              fontWeight: '500',
              color: '#666',
              border: 'none',
              background: 'transparent',
              transition: 'all 0.2s ease',
              borderBottom: '2px solid transparent',
              whiteSpace: 'nowrap',
              flexShrink: 0,
            },
            activeTab: {
              color: '#2563eb',
              borderBottomColor: '#2563eb',
              backgroundColor: '#fff',
            },
            content: {
              padding: 0,
              position: 'relative',
            },
            codeBlock: {
              backgroundColor: '#1e1e1e',
              color: '#d4d4d4',
              padding: isMobile ? '16px' : '20px',
              margin: 0,
              overflowX: 'auto',
              fontSize: isMobile ? '11px' : '13px',
              lineHeight: isMobile ? '1.5' : '1.6',
              fontFamily: '"Fira Code", "Consolas", "Monaco", monospace',
              whiteSpace: 'pre-wrap',
              wordBreak: 'break-word',
              WebkitOverflowScrolling: 'touch',
              position: 'relative',
            },
            copyButton: {
              position: 'absolute',
              top: '10px',
              right: '10px',
              backgroundColor: '#333',
              color: '#fff',
              border: 'none',
              borderRadius: '4px',
              padding: isMobile ? '4px 10px' : '6px 12px',
              fontSize: isMobile ? '10px' : '12px',
              cursor: 'pointer',
              opacity: 0.8,
              transition: 'opacity 0.2s',
              zIndex: 10,
            },
            visualContainer: {
              padding: isMobile ? '16px' : '20px',
              borderTop: '1px solid #e0e0e0',
              backgroundColor: '#fcfcfc',
              minHeight: '250px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '20px',
            },
            queuePipe: {
              width: '100%',
              maxWidth: '500px',
              minHeight: isMobile ? 'auto' : '80px',
              backgroundColor: '#e0e0e0',
              borderRadius: isMobile ? '20px' : '40px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexWrap: 'wrap',
              padding: isMobile ? '15px 10px' : '0 10px',
              boxSizing: 'border-box',
              position: 'relative',
              border: '2px solid #999',
              gap: isMobile ? '8px' : '0',
            },
            arrowIn: {
              position: isMobile ? 'relative' : 'absolute',
              left: isMobile ? 'auto' : '-30px',
              top: isMobile ? 'auto' : '50%',
              transform: isMobile ? 'none' : 'translateY(-50%)',
              fontSize: isMobile ? '20px' : '24px',
              color: '#2563eb',
              fontWeight: 'bold',
              marginRight: isMobile ? '8px' : '0',
            },
            arrowOut: {
              position: isMobile ? 'relative' : 'absolute',
              right: isMobile ? 'auto' : '-30px',
              top: isMobile ? 'auto' : '50%',
              transform: isMobile ? 'none' : 'translateY(-50%)',
              fontSize: isMobile ? '20px' : '24px',
              color: '#c62828',
              fontWeight: 'bold',
              marginLeft: isMobile ? '8px' : '0',
            },
            elementBox: {
              width: isMobile ? '80px' : '100px',
              minWidth: isMobile ? '70px' : '100px',
              height: isMobile ? '50px' : '60px',
              backgroundColor: '#fff',
              border: '2px solid #2563eb',
              borderRadius: '8px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              textAlign: 'center',
              fontSize: isMobile ? '11px' : '13px',
              fontWeight: 'bold',
              color: '#2563eb',
              boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
              transition: 'transform 0.3s ease, opacity 0.3s ease',
              flexShrink: 0,
              zIndex: 2,
              position: 'relative',
              padding: isMobile ? '4px' : '0',
              wordBreak: 'break-word',
            },
            emptyState: {
              color: '#999',
              fontStyle: 'italic',
              fontSize: '14px',
              padding: '20px 0',
            },
            actionButtons: {
              display: 'flex',
              gap: '15px',
              marginTop: '10px',
              width: '100%',
              maxWidth: '500px',
              justifyContent: 'center',
            },
            inputGroup: {
              display: 'flex',
              flexDirection: isMobile ? 'column' : 'row',
              gap: isMobile ? '10px' : '10px',
              width: '100%',
              maxWidth: '500px',
            },
            input: {
              flex: 1,
              padding: isMobile ? '10px' : '8px',
              borderRadius: '4px',
              border: '1px solid #ccc',
              fontSize: isMobile ? '14px' : '13px',
              minWidth: 0,
            },
            btn: {
              padding: isMobile ? '10px 16px' : '10px 20px',
              border: 'none',
              borderRadius: '6px',
              fontSize: isMobile ? '13px' : '14px',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'background-color 0.2s',
              whiteSpace: 'nowrap',
              flexShrink: 0,
            },
            enqueueBtn: {
              backgroundColor: '#e3f2fd',
              color: '#1565c0',
              border: '1px solid #90caf9',
            },
            dequeueBtn: {
              backgroundColor: '#ffebee',
              color: '#c62828',
              border: '1px solid #ef9a9a',
            },
            infoBox: {
              padding: isMobile ? '12px 16px' : '15px 20px',
              backgroundColor: '#e8f5e9',
              borderLeft: '4px solid #2e7d32',
              margin: isMobile ? '0 16px 16px 16px' : '10px 20px',
              borderRadius: '0 4px 4px 0',
            },
            infoTitle: {
              fontSize: isMobile ? '12px' : '13px',
              fontWeight: 'bold',
              color: '#1b5e20',
              marginBottom: '5px',
            },
            infoText: {
              fontSize: isMobile ? '11px' : '12px',
              color: '#2e7d32',
              lineHeight: '1.4',
            },
            logBox: {
              width: '100%',
              maxWidth: '500px',
              marginTop: '10px',
              padding: '10px',
              backgroundColor: '#f5f5f5',
              borderRadius: '4px',
              fontSize: isMobile ? '11px' : '12px',
              maxHeight: '100px',
              overflowY: 'auto',
              border: '1px solid #ddd',
              WebkitOverflowScrolling: 'touch',
            },
            logItem: {
              marginBottom: '4px',
              borderBottom: '1px solid #eee',
              paddingBottom: '2px',
              wordBreak: 'break-word',
            }
          };
        };

        const [styles, setStyles] = useState(getStyles());

        React.useEffect(() => {
          const handleResize = () => {
            setStyles(getStyles());
          };

          window.addEventListener('resize', handleResize);
          return () => window.removeEventListener('resize', handleResize);
        }, []);

        const handleCopy = (text) => {
          navigator.clipboard.writeText(text);
        };

        const handleEnqueue = () => {
          if (!tempValue.trim()) return;
          
          const newItem = tempValue;
          setQueue([...queue, newItem]);
          setTempValue('');
          addLog(`ENQUEUE: "${newItem}" добавлен в конец очереди.`);
        };

        const handleDequeue = () => {
          if (queue.length === 0) return;
          
          const removedItem = queue[0];
          setQueue(queue.slice(1));
          addLog(`DEQUEUE: "${removedItem}" удален из начала очереди.`);
        };

        const addLog = (message) => {
          setLog(prev => [message, ...prev].slice(0, 5));
        };

        return (
          <div style={styles.container}>
            <div style={styles.header}>
              <h3 style={styles.title}>Очередь (Queue)</h3>
              <p style={styles.description}>
                Линейная структура данных, работающая по принципу FIFO (First In, First Out). 
                Первый добавленный элемент извлекается первым. 
                Элементы добавляются в конец (enqueue) и удаляются из начала (dequeue).
              </p>
            </div>
            
            <div style={styles.tabs}>
              <button 
                style={{...styles.tab, ...(activeTab === 'js' ? styles.activeTab : {})}}
                onClick={() => setActiveTab('js')}
              >
                JavaScript
              </button>
              <button 
                style={{...styles.tab, ...(activeTab === 'py' ? styles.activeTab : {})}}
                onClick={() => setActiveTab('py')}
              >
                Python
              </button>
              <button 
                style={{...styles.tab, ...(activeTab === 'cs' ? styles.activeTab : {})}}
                onClick={() => setActiveTab('cs')}
              >
                C#
              </button>
            </div>

            <div style={styles.content}>
              <pre style={styles.codeBlock}>
                <code>{codeExamples[activeTab].queue}</code>
                <button 
                  style={styles.copyButton}
                  onClick={() => handleCopy(codeExamples[activeTab].queue)}
                  title="Копировать код"
                >
                  Копировать
                </button>
              </pre>
              
              <div style={styles.visualContainer}>
                <div style={styles.queuePipe}>
                  <span style={styles.arrowIn}>→</span>
                  
                  {queue.map((item, index) => (
                    <div key={index} style={styles.elementBox}>
                      {item}
                    </div>
                  ))}
                  
                  {queue.length === 0 && (
                    <div style={styles.emptyState}>Пусто</div>
                  )}
                  
                  <span style={styles.arrowOut}>←</span>
                </div>

                <div style={styles.inputGroup}>
                  <input 
                    type="text" 
                    value={tempValue}
                    onChange={(e) => setTempValue(e.target.value)}
                    placeholder="Название заявки..."
                    style={styles.input}
                    onKeyPress={(e) => e.key === 'Enter' && handleEnqueue()}
                  />
                  <button 
                    style={{...styles.btn, ...styles.enqueueBtn}}
                    onClick={handleEnqueue}
                    disabled={!tempValue.trim()}
                  >
                    Enqueue (+)
                  </button>
                  <button 
                    style={{...styles.btn, ...styles.dequeueBtn}}
                    onClick={handleDequeue}
                    disabled={queue.length === 0}
                  >
                    Dequeue (-)
                  </button>
                </div>

                {log.length > 0 && (
                  <div style={styles.logBox}>
                    <div style={{fontWeight: 'bold', marginBottom: '5px'}}>Журнал операций:</div>
                    {log.map((entry, idx) => (
                      <div key={idx} style={styles.logItem}>{entry}</div>
                    ))}
                  </div>
                )}
              </div>

              <div style={styles.infoBox}>
                <div style={styles.infoTitle}>Как это работает:</div>
                <div style={styles.infoText}>
                  Представьте линию людей в магазине. Человек, который пришел первым, обслуживается первым. 
                  Новые люди встают в конец линии (Enqueue), а обслуженные уходят из начала (Dequeue). 
                  Этот принцип используется в планировании задач процессора, обработке запросов веб-сервера и печати документов.
                </div>
              </div>
            </div>
          </div>
        );
      }}
    </BrowserOnly>
  );
};

export default DataStructureQueue;