import React, { useState, useEffect } from 'react';
import BrowserOnly from './BrowserOnly';

const RabbitMQSimulation = () => {
  const [status, setStatus] = useState('idle');
  const [queueItems, setQueueItems] = useState([]);
  const [logs, setLogs] = useState([]);
  const [activeConsumer, setActiveConsumer] = useState(null);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobile = windowWidth <= 768;
  const isTablet = windowWidth <= 1024 && windowWidth > 768;

  const colors = {
    producer: '#8e44ad', 
    broker: '#2980b9',   
    queue: '#f39c12',    
    consumer1: '#27ae60', 
    consumer2: '#c0392b', 
    bg: '#ffffff',
    text: '#2c3e50',
    border: '#dfe6e9',
    line: '#bdc3c7',
    waiting: '#95a5a6'
  };

  const addLog = (message, type = 'info') => {
    const timestamp = new Date().toLocaleTimeString();
    setLogs(prev => [{ id: Date.now(), message, type, timestamp }, ...prev]);
  };

  const handleStart = () => {
    if (status !== 'idle') return;
    
    resetState();
    setStatus('subscribing');
    addLog('Потребитель 1 и Потребитель 2 подключаются к брокеру...', 'info');
    addLog('Ожидание сообщений в очереди...', 'info');

    setTimeout(() => {
      setIsSubscribed(true);
      addLog('✅ Потребитель 1 успешно подписан на очередь.', 'success');
      addLog('✅ Потребитель 2 успешно подписан на очередь.', 'success');
      
      setTimeout(handlePublish, 1000);
    }, 1500);
  };

  const handlePublish = () => {
    if (status === 'subscribing') return;
    
    setStatus('publishing');
    addLog('Продюсер отправляет новое сообщение в брокер...', 'info');

    setTimeout(() => {
      setStatus('queued');
      const newMessage = `msg-${Date.now()}`;
      setQueueItems(prev => [...prev, { id: newMessage, content: `Сообщение ${newMessage}`, status: 'pending' }]);
      addLog(`Сообщение "${newMessage}" помещено в очередь.`, 'success');
      
      setTimeout(processQueue, 1500);
    }, 1500);
  };

  const processQueue = () => {
    if (queueItems.length === 0 || !isSubscribed) {
      setStatus('idle');
      addLog('⚠️ Очередь пуста или потребители не подписаны. Ожидание новых сообщений.', 'warning');
      return;
    }

    setStatus('consuming');
    
    let nextConsumer = activeConsumer;
    if (!nextConsumer) {
        nextConsumer = 'consumer1';
    } else {
        nextConsumer = activeConsumer === 'consumer1' ? 'consumer2' : 'consumer1';
    }

    setActiveConsumer(nextConsumer);
    const msgIndex = queueItems.findIndex(item => item.status === 'pending');
    
    if (msgIndex !== -1) {
      const currentMsg = queueItems[msgIndex];
      const consumerName = nextConsumer === 'consumer1' ? 'Потребитель 1' : 'Потребитель 2';
      
      addLog(`${consumerName} забирает сообщение "${currentMsg.content}" из очереди...`, 'info');

      const updatedQueue = [...queueItems];
      updatedQueue[msgIndex] = { ...updatedQueue[msgIndex], status: 'processing', consumerId: nextConsumer };
      setQueueItems(updatedQueue);

      setTimeout(() => {
        setQueueItems(prev => prev.filter((_, idx) => idx !== msgIndex));
        
        addLog(`✅ ${consumerName} успешно обработал сообщение "${currentMsg.content}".`, 'success');
        
        setActiveConsumer(null);
        setStatus('idle');
        
        if (queueItems.length > 1 && isSubscribed) {
          setTimeout(processQueue, 1000);
        } else if (queueItems.length <= 1) {
           addLog('🏁 Все сообщения обработаны. Очередь пуста.', 'info');
        }
      }, 2000);
    }
  };

  const resetState = () => {
    setQueueItems([]);
    setLogs([]);
    setStatus('idle');
    setActiveConsumer(null);
    setIsSubscribed(false);
  };

  const resetSimulation = () => {
    resetState();
    addLog('Симуляция сброшена.', 'info');
  };

  const containerStyle = {
    fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif',
    backgroundColor: colors.bg,
    borderRadius: isMobile ? '8px' : '12px',
    padding: isMobile ? '15px' : isTablet ? '20px' : '25px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    maxWidth: '100%',
    width: '100%',
    margin: isMobile ? '10px auto' : '20px auto',
    color: colors.text,
    border: `1px solid ${colors.border}`,
    boxSizing: 'border-box'
  };

  const headerStyle = {
    marginBottom: '20px',
    fontSize: isMobile ? '1.2rem' : '1.5rem',
    fontWeight: 'bold',
    borderBottom: `2px solid ${colors.line}`,
    paddingBottom: '10px',
    display: 'flex',
    flexDirection: isMobile ? 'column' : 'row',
    justifyContent: 'space-between',
    alignItems: isMobile ? 'flex-start' : 'center',
    gap: isMobile ? '10px' : '0'
  };

  const gridStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    marginBottom: '30px',
    position: 'relative'
  };

  const topRowStyle = {
    display: 'grid',
    gridTemplateColumns: isMobile ? '1fr' : isTablet ? '1fr 1fr 1fr' : 'repeat(3, 1fr)',
    gap: isMobile ? '15px' : '20px',
    alignItems: 'center'
  };

  const nodeCardStyle = (color, isActive, isProcessing) => ({
    backgroundColor: isActive ? color : (isProcessing ? '#2ecc71' : color),
    color: 'white',
    padding: isMobile ? '12px' : '15px',
    borderRadius: '10px',
    textAlign: 'center',
    boxShadow: '0 4px 6px rgba(0,0,0,0.15)',
    position: 'relative',
    zIndex: 2,
    minHeight: isMobile ? '70px' : '100px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    transition: 'all 0.3s ease',
    fontSize: isMobile ? '0.9rem' : '1rem'
  });

  const connectorLineStyle = {
    display: isMobile ? 'none' : 'flex',
    height: '4px',
    backgroundColor: colors.line,
    borderRadius: '2px'
  };

  const queueContainerStyle = {
    marginTop: '20px',
    padding: isMobile ? '10px' : '15px',
    backgroundColor: '#fff8e1',
    border: `2px dashed ${colors.queue}`,
    borderRadius: '8px',
    minHeight: isMobile ? '60px' : '80px',
    maxHeight: isMobile ? '150px' : '200px',
    overflowY: 'auto',
    width: '100%',
    boxSizing: 'border-box'
  };

  const queueItemStyle = (item) => ({
    backgroundColor: item.status === 'processing' 
      ? (item.consumerId === 'consumer1' ? colors.consumer1 : colors.consumer2) 
      : colors.queue,
    color: 'white',
    padding: isMobile ? '6px 10px' : '8px 12px',
    borderRadius: '6px',
    fontSize: isMobile ? '0.8rem' : '0.9rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    animation: 'fadeIn 0.3s ease-in-out',
    marginBottom: '8px',
    wordBreak: 'break-word'
  });

  const consumersContainerStyle = {
    display: 'flex',
    flexDirection: isMobile ? 'column' : 'row',
    gap: isMobile ? '15px' : '20px',
    marginTop: '10px'
  };

  const consumerCardStyle = (color, isActive, opacity = 1) => ({
    flex: 1,
    ...nodeCardStyle(color, isActive, false),
    opacity,
    width: '100%'
  });

  const logPanelStyle = {
    marginTop: '20px',
    backgroundColor: '#f8f9fa',
    border: `1px solid ${colors.border}`,
    borderRadius: '8px',
    padding: isMobile ? '10px' : '15px',
    maxHeight: isMobile ? '150px' : '200px',
    overflowY: 'auto',
    fontFamily: 'monospace',
    fontSize: isMobile ? '0.8rem' : '0.9rem'
  };

  const buttonGroupStyle = {
    display: 'flex',
    gap: isMobile ? '10px' : '15px',
    marginTop: '20px',
    justifyContent: 'center',
    flexDirection: isMobile ? 'column' : 'row'
  };

  const buttonStyle = (enabled) => ({
    padding: isMobile ? '10px 15px' : '10px 20px',
    fontSize: isMobile ? '0.9rem' : '1rem',
    fontWeight: 'bold',
    borderRadius: '6px',
    cursor: enabled ? 'pointer' : 'not-allowed',
    border: 'none',
    outline: 'none',
    backgroundColor: enabled ? colors.producer : '#95a5a6',
    color: 'white',
    transition: 'all 0.3s ease',
    width: isMobile ? '100%' : 'auto',
    opacity: enabled ? 1 : 0.6
  });

  return (
    <BrowserOnly>
      {() => (
        <div style={containerStyle}>
          <style>
            {`
              @keyframes slidePacket {
                0% { left: 100%; opacity: 0; transform: translate(-50%, -50%) scale(0.5); }
                10% { opacity: 1; transform: translate(-50%, -50%) scale(1); }
                90% { opacity: 1; }
                100% { left: 0%; opacity: 0; transform: translate(-50%, -50%) scale(0.5); }
              }
              @keyframes fadeIn {
                from { opacity: 0; transform: translateY(-5px); }
                to { opacity: 1; transform: translateY(0); }
              }
              
              @media (max-width: 768px) {
                .log-entry {
                  font-size: 11px;
                }
              }
              
              @media (max-width: 480px) {
                .message-content {
                  font-size: 10px;
                }
              }
            `}
          </style>

          <h2 style={headerStyle}>
            <span style={{ fontSize: isMobile ? '1.1rem' : '1.5rem' }}>Схема работы RabbitMQ</span>
            <span style={{ fontSize: isMobile ? '0.75rem' : '0.9rem', fontWeight: 'normal', opacity: 0.8 }}>
              {status === 'idle' && !isSubscribed ? 'Нажмите "Старт"' : `Статус: ${status}`}
            </span>
          </h2>

          <div style={gridStyle}>
            <div style={topRowStyle}>
              <div style={{ ...nodeCardStyle(colors.producer, false, false), transform: status === 'publishing' ? 'scale(1.05)' : 'scale(1)' }}>
                <strong>Продюсер</strong>
                <small style={{ fontSize: isMobile ? '0.7rem' : '0.8rem' }}>Отправитель</small>
              </div>

              <div style={{ ...nodeCardStyle(colors.broker, false, false), transform: (status === 'publishing' || status === 'queued' || status === 'consuming') ? 'scale(1.05)' : 'scale(1)' }}>
                <strong>RabbitMQ</strong>
                <small style={{ fontSize: isMobile ? '0.7rem' : '0.8rem' }}>Брокер</small>
              </div>

              {!isMobile && (
                <div style={{ ...nodeCardStyle(colors.queue, false, false), backgroundColor: colors.queue }}>
                  <strong>Очередь</strong>
                  <small style={{ fontSize: isMobile ? '0.7rem' : '0.8rem' }}>Queue</small>
                </div>
              )}
            </div>

            {isMobile && (
              <div style={queueContainerStyle}>
                <div style={{ fontSize: '0.8rem', fontWeight: 'bold', color: colors.queue, marginBottom: '5px' }}>
                  📋 Очередь сообщений ({queueItems.length})
                </div>
                {queueItems.length === 0 ? (
                  <div style={{ fontStyle: 'italic', color: '#7f8c8d', textAlign: 'center', fontSize: '0.8rem' }}>
                    Очередь пуста
                  </div>
                ) : (
                  queueItems.map((item) => (
                    <div key={item.id} style={queueItemStyle(item)}>
                      <span className="message-content">{item.content}</span>
                      {item.status === 'processing' && (
                        <span style={{ fontSize: '0.7rem', opacity: 0.9, marginLeft: '8px' }}>
                          {item.consumerId === 'consumer1' ? '🟢 P1' : '🔴 P2'}
                        </span>
                      )}
                    </div>
                  ))
                )}
              </div>
            )}

            {!isMobile && (
              <div style={queueContainerStyle}>
                <div style={{ fontSize: '0.9rem', fontWeight: 'bold', color: colors.queue, marginBottom: '5px' }}>
                  📋 Очередь сообщений ({queueItems.length})
                </div>
                {queueItems.length === 0 ? (
                  <div style={{ fontStyle: 'italic', color: '#7f8c8d', textAlign: 'center' }}>Очередь пуста</div>
                ) : (
                  queueItems.map((item) => (
                    <div key={item.id} style={queueItemStyle(item)}>
                      <span>{item.content}</span>
                      {item.status === 'processing' && (
                        <span style={{ fontSize: '0.8rem', opacity: 0.9 }}>
                          {item.consumerId === 'consumer1' ? '🟢 P1' : '🔴 P2'}
                        </span>
                      )}
                    </div>
                  ))
                )}
              </div>
            )}

            <div style={consumersContainerStyle}>
              <div style={{ ...consumerCardStyle(colors.consumer1, activeConsumer === 'consumer1', isSubscribed ? 1 : 0.5) }}>
                <strong>Потребитель 1</strong>
                <small style={{ fontSize: isMobile ? '0.7rem' : '0.8rem' }}>
                  {isSubscribed ? (activeConsumer === 'consumer1' ? '⏳ Обработка...' : '⏸ Ожидание') : '🔴 Не подписан'}
                </small>
                {status === 'consuming' && activeConsumer === 'consumer1' && (
                  <span style={{ display: 'inline-block', marginTop: '5px', fontSize: '1.2rem' }}>📦</span>
                )}
              </div>

              <div style={{ ...consumerCardStyle(colors.consumer2, activeConsumer === 'consumer2', isSubscribed ? 1 : 0.5) }}>
                <strong>Потребитель 2</strong>
                <small style={{ fontSize: isMobile ? '0.7rem' : '0.8rem' }}>
                  {isSubscribed ? (activeConsumer === 'consumer2' ? '⏳ Обработка...' : '⏸ Ожидание') : '🔴 Не подписан'}
                </small>
                {status === 'consuming' && activeConsumer === 'consumer2' && (
                  <span style={{ display: 'inline-block', marginTop: '5px', fontSize: '1.2rem' }}>📦</span>
                )}
              </div>
            </div>
          </div>

          <div style={logPanelStyle}>
            <div style={{ fontWeight: 'bold', marginBottom: '10px', borderBottom: '1px solid #ccc', paddingBottom: '5px', fontSize: isMobile ? '0.85rem' : '1rem' }}>
              📝 Журнал событий:
            </div>
            {logs.length === 0 ? (
              <div style={{ color: '#95a5a6', fontSize: isMobile ? '0.8rem' : '0.9rem' }}>Нет событий...</div>
            ) : (
              logs.map(log => (
                <div key={log.id} className="log-entry" style={{ 
                  marginBottom: '5px', 
                  color: log.type === 'error' ? '#c0392b' : log.type === 'success' ? '#27ae60' : log.type === 'warning' ? '#f39c12' : '#2c3e50',
                  fontSize: isMobile ? '0.7rem' : '0.85rem',
                  lineHeight: '1.4'
                }}>
                  <span style={{ opacity: 0.6, fontSize: isMobile ? '0.65rem' : '0.75rem' }}>[{log.timestamp}]</span> {log.message}
                </div>
              ))
            )}
          </div>

          <div style={buttonGroupStyle}>
            <button 
              onClick={handleStart} 
              disabled={status !== 'idle'}
              style={buttonStyle(status === 'idle')}
            >
              ▶ Старт симуляции
            </button>
            
            <button 
              onClick={resetSimulation} 
              disabled={false}
              style={buttonStyle(true)}
            >
              🔄 Сброс
            </button>
          </div>

          {isMobile && (
            <div style={{ 
              marginTop: '15px', 
              padding: '10px', 
              backgroundColor: '#f0f0f0', 
              borderRadius: '6px',
              fontSize: '0.75rem',
              textAlign: 'center',
              color: '#666'
            }}>
              💡 Сообщения распределяются по очереди между потребителями (Round-Robin)
            </div>
          )}
        </div>
      )}
    </BrowserOnly>
  );
};

export default RabbitMQSimulation;