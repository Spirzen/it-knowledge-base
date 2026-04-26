import React, { useState, useEffect } from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';

const KafkaSimulation = () => {
  const [status, setStatus] = useState('idle');
  const [logs, setLogs] = useState([]);
  const [windowWidth, setWindowWidth] = useState(1200);
  
  const brokersCount = 3;
  const partitionsCount = 3;
  const consumersCount = 2;

  const [partitions, setPartitions] = useState([]);
  const [consumers, setConsumers] = useState([]);
  const [activeConsumerId, setActiveConsumerId] = useState(null);

  useEffect(() => {
    if (status === 'idle') {
      initSystem();
    }
  }, []);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const addLog = (message, type = 'info') => {
    const timestamp = new Date().toLocaleTimeString();
    setLogs(prev => [{ id: Date.now(), message, type, timestamp }, ...prev]);
  };

  const initSystem = () => {
    setStatus('starting');
    addLog('🚀 Инициализация кластера Apache Kafka...', 'info');
    
    setTimeout(() => {
      const brokers = Array.from({ length: brokersCount }, (_, i) => ({
        id: i + 1,
        name: `Broker-${i + 1}`
      }));

      const initialPartitions = Array.from({ length: partitionsCount }, (_, i) => ({
        id: i,
        leaderBrokerId: i % brokersCount + 1,
        messages: [],
        offset: 0,
        status: 'empty'
      }));
      
      const initialConsumers = Array.from({ length: consumersCount }, (_, i) => ({
        id: `consumer${i + 1}`,
        assignedPartitionId: null,
        status: 'idle',
        color: i === 0 ? '#27ae60' : '#c0392b'
      }));

      setPartitions(initialPartitions);
      setConsumers(initialConsumers);
      setActiveConsumerId(null);
      
      addLog(`✅ Кластер запущен: ${brokersCount} брокеров`, 'success');
      addLog(`Топик "orders" создан с ${partitionsCount} партициями`, 'success');
      
      let consumerIndex = 0;
      const updatedConsumers = [...initialConsumers];
      const partitionAssignments = [];

      for (let p of initialPartitions) {
        const consumer = updatedConsumers[consumerIndex];
        consumer.assignedPartitionId = p.id;
        partitionAssignments.push(`${p.id} -> ${consumer.id}`);
        
        consumerIndex = (consumerIndex + 1) % consumersCount;
      }

      setConsumers(updatedConsumers);
      addLog(`Назначение партиций группой потребителей "order-processors":`, 'info');
      partitionAssignments.forEach(assignment => addLog(`   ${assignment}`, 'info'));

      if (partitionsCount > consumersCount) {
         addLog(`⚠️ Оставшиеся партиции ждут назначения свободных потребителей`, 'warning');
      }

      addLog('Потребители подписались на топик и ожидают сообщения.', 'success');
      setStatus('idle');
    }, 1500);
  };

  const handlePublish = () => {
    if (status !== 'idle') return;

    setStatus('publishing');
    const msgId = `msg-${Date.now()}`;
    addLog(`Продюсер отправляет сообщение "${msgId}"...`, 'info');

    const targetPartitionIndex = Math.floor(Math.random() * partitionsCount);
    
    setTimeout(() => {
      setPartitions(prev => prev.map((p, idx) => {
        if (idx === targetPartitionIndex) {
          addLog(`✅ Сообщение "${msgId}" записано в партицию #${idx} (Брокер ${p.leaderBrokerId})`, 'success');
          return {
            ...p,
            messages: [...p.messages, { id: msgId, content: `Сообщение ${msgId}`, status: 'pending' }]
          };
        }
        return p;
      }));

      setTimeout(processQueue, 1500);
    }, 1000);
  };

  const processQueue = () => {
    if (partitions.every(p => p.messages.length === 0)) {
      setStatus('idle');
      addLog('⚠️ Очередь пуста. Ожидание новых сообщений.', 'warning');
      return;
    }

    setStatus('processing');

    let foundPartition = null;
    let consumerToAssign = null;

    for (let p of partitions) {
      if (p.messages.length > 0) {
        foundPartition = p;
        
        const assignedConsumer = consumers.find(c => c.assignedPartitionId === p.id && c.status === 'idle');
        
        if (assignedConsumer) {
          consumerToAssign = assignedConsumer;
          break;
        }
      }
    }

    if (!foundPartition || !consumerToAssign) {
      addLog(`⏳ Обработка отложена: нет свободного потребителя для доступных сообщений.`, 'warning');
      setStatus('idle');
      return;
    }

    setActiveConsumerId(consumerToAssign.id);
    const msgIndex = foundPartition.messages.findIndex(m => m.status === 'pending');
    const currentMsg = foundPartition.messages[msgIndex];

    addLog(`🔄 ${consumerToAssign.id} забирает "${currentMsg.content}" из партиции #${foundPartition.id}...`, 'info');

    setPartitions(prev => prev.map(p => {
      if (p.id === foundPartition.id) {
        const updatedMessages = [...p.messages];
        updatedMessages[msgIndex] = { ...updatedMessages[msgIndex], status: 'processing', consumerId: consumerToAssign.id };
        return { ...p, messages: updatedMessages };
      }
      return p;
    }));

    setConsumers(prev => prev.map(c => 
      c.id === consumerToAssign.id ? { ...c, status: 'processing' } : c
    ));

    setTimeout(() => {
      setPartitions(prev => prev.map(p => {
        if (p.id === foundPartition.id) {
          const filteredMessages = p.messages.filter((_, idx) => idx !== msgIndex);
          return { ...p, messages: filteredMessages };
        }
        return p;
      }));

      addLog(`✅ ${consumerToAssign.id} успешно обработал "${currentMsg.content}".`, 'success');
      
      setActiveConsumerId(null);
      setStatus('idle');

      setTimeout(processQueue, 1000);
    }, 2000);
  };

  const resetSimulation = () => {
    setStatus('starting');
    setLogs([]);
    setTimeout(initSystem, 1000);
  };

  const isMobile = windowWidth <= 768;
  const isTablet = windowWidth > 768 && windowWidth <= 1024;

  const colors = {
    bg: '#ffffff',
    text: '#2c3e50',
    border: '#dfe6e9',
    line: '#bdc3c7',
    broker: '#8e44ad',
    topic: '#f39c12',
    partitionEmpty: '#e67e22',
    partitionQueued: '#d35400',
    partitionProcessing: '#a04000',
    producer: '#2980b9',
    consumerBase: ['#27ae60', '#c0392b'],
    logBg: '#f8f9fa'
  };

  const containerStyle = {
    fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif',
    backgroundColor: colors.bg,
    borderRadius: isMobile ? '8px' : '12px',
    padding: isMobile ? '12px' : '25px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    maxWidth: '1200px',
    width: '100%',
    margin: isMobile ? '10px auto' : '20px auto',
    color: colors.text,
    border: `1px solid ${colors.border}`,
    boxSizing: 'border-box'
  };

  const headerStyle = {
    marginBottom: '15px',
    fontSize: isMobile ? '1.2rem' : '1.5rem',
    fontWeight: 'bold',
    borderBottom: `2px solid ${colors.line}`,
    paddingBottom: '10px',
    display: 'flex',
    flexDirection: isMobile ? 'column' : 'row',
    justifyContent: 'space-between',
    alignItems: isMobile ? 'flex-start' : 'center',
    gap: isMobile ? '8px' : '0'
  };

  const gridStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    marginBottom: '30px'
  };

  const producerConsumerRowStyle = {
    display: 'flex',
    flexDirection: isMobile ? 'column' : 'row',
    gap: isMobile ? '15px' : '20px',
    alignItems: 'center',
    justifyContent: 'space-between'
  };

  const nodeCardStyle = (color, isActive, isCompact = false) => ({
    backgroundColor: isActive ? adjustColor(color, 20) : color,
    color: 'white',
    padding: isCompact ? '10px' : (isMobile ? '12px' : '15px'),
    borderRadius: '10px',
    textAlign: 'center',
    boxShadow: '0 4px 6px rgba(0,0,0,0.15)',
    position: 'relative',
    zIndex: 2,
    minHeight: isCompact ? '60px' : (isMobile ? '70px' : '80px'),
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    transition: 'all 0.3s ease',
    flex: isMobile ? '1' : 'auto',
    fontSize: isMobile ? '0.9rem' : '1rem'
  });

  const brokersRowStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '10px',
    justifyContent: 'center',
    alignItems: 'center'
  };

  const partitionContainerStyle = {
    marginTop: '10px',
    padding: isMobile ? '10px' : '15px',
    backgroundColor: '#fff8e1',
    border: `2px dashed ${colors.topic}`,
    borderRadius: '8px',
    display: 'flex',
    flexDirection: 'column',
    gap: '10px'
  };

  const getPartitionStyle = (partition) => {
    if (partition.messages.length === 0) return { backgroundColor: colors.partitionEmpty };
    if (partition.messages.some(m => m.status === 'processing')) return { backgroundColor: colors.partitionProcessing };
    return { backgroundColor: colors.partitionQueued };
  };

  const logPanelStyle = {
    marginTop: '20px',
    backgroundColor: colors.logBg,
    border: `1px solid ${colors.border}`,
    borderRadius: '8px',
    padding: isMobile ? '10px' : '15px',
    maxHeight: isMobile ? '300px' : '200px',
    overflowY: 'auto',
    fontFamily: 'monospace',
    fontSize: isMobile ? '0.8rem' : '0.9rem'
  };

  const buttonGroupStyle = {
    display: 'flex',
    flexDirection: isMobile ? 'column' : 'row',
    gap: '15px',
    marginTop: '20px',
    justifyContent: 'center'
  };

  const buttonStyle = (enabled) => ({
    padding: isMobile ? '12px 20px' : '10px 20px',
    fontSize: isMobile ? '0.9rem' : '1rem',
    fontWeight: 'bold',
    borderRadius: '6px',
    cursor: enabled ? 'pointer' : 'not-allowed',
    border: 'none',
    outline: 'none',
    width: isMobile ? '100%' : 'auto',
    backgroundColor: enabled ? colors.producer : '#95a5a6',
    color: 'white',
    transition: 'all 0.3s ease'
  });

  const consumersListStyle = {
    display: 'flex',
    flexDirection: isMobile ? 'column' : 'row',
    gap: isMobile ? '10px' : '15px',
    marginTop: '10px',
    flexWrap: 'wrap'
  };

  const consumerItemStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    flex: isMobile ? '1' : '1',
    minWidth: isMobile ? 'auto' : '200px'
  };

  function adjustColor(color, amount) {
    return '#' + color.replace(/^#/, '').replace(/../g, color => ('0'+Math.min(255, Math.max(0, parseInt(color, 16) + amount)).toString(16)).substr(-2));
  }

  const SimulationContent = () => {
    const isMobile = windowWidth <= 768;
    const isTablet = windowWidth > 768 && windowWidth <= 1024;

    return (
      <div style={containerStyle}>
        <style>{`
          @keyframes slidePacket {
            0% { transform: translateX(0) scale(0.5); opacity: 0; }
            10% { transform: translateX(0) scale(1); opacity: 1; }
            90% { transform: translateX(100%) scale(1); opacity: 1; }
            100% { transform: translateX(100%) scale(0.5); opacity: 0; }
          }
          
          @keyframes slideRight {
            0% { transform: translateX(0) scale(0.5); opacity: 0; }
            10% { transform: translateX(0) scale(1); opacity: 1; }
            90% { transform: translateX(100%) scale(1); opacity: 1; }
            100% { transform: translateX(100%) scale(0.5); opacity: 0; }
          }
          
          @keyframes pulse {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.05); }
          }
          
          @media (max-width: 768px) {
            .animated-packet {
              animation-duration: 1s !important;
            }
          }
          
          ::-webkit-scrollbar {
            width: 8px;
            height: 8px;
          }
          
          ::-webkit-scrollbar-track {
            background: #f1f1f1;
            border-radius: 4px;
          }
          
          ::-webkit-scrollbar-thumb {
            background: #888;
            border-radius: 4px;
          }
          
          ::-webkit-scrollbar-thumb:hover {
            background: #555;
          }
        `}</style>

        <h2 style={headerStyle}>
          <span>Архитектура Apache Kafka</span>
          <span style={{ fontSize: isMobile ? '0.8rem' : '0.9rem', fontWeight: 'normal', opacity: 0.8 }}>
            {status === 'idle' ? '✅ Готов к работе' : `🔄 Статус: ${status}`}
          </span>
        </h2>

        <div style={gridStyle}>
          <div style={producerConsumerRowStyle}>
            <div style={nodeCardStyle(colors.producer, status === 'publishing', isMobile)}>
              <strong>Продюсер</strong>
              {!isMobile && <small>Producer</small>}
            </div>

            <div style={brokersRowStyle}>
              {Array.from({ length: brokersCount }).map((_, i) => (
                <div key={i} style={nodeCardStyle(colors.broker, false, true)}>
                  <strong>B-{i+1}</strong>
                  {!isMobile && <small>Брокер</small>}
                </div>
              ))}
            </div>
          </div>

          <div style={partitionContainerStyle}>
            <div style={{ fontSize: isMobile ? '0.85rem' : '0.9rem', fontWeight: 'bold', color: colors.topic, marginBottom: '5px' }}>
              Топик: "orders"
            </div>
            
            {partitions.map((p, idx) => {
              const hasMessage = p.messages.length > 0;
              const isProcessing = hasMessage && p.messages.some(m => m.status === 'processing');
              const activeConsumerForThis = isProcessing ? p.messages.find(m => m.status === 'processing')?.consumerId : null;
              
              return (
                <div key={idx} style={{ 
                  ...getPartitionStyle(p), 
                  padding: isMobile ? '8px' : '10px', 
                  borderRadius: '6px', 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  alignItems: 'center',
                  color: 'white',
                  opacity: 0.9,
                  borderLeft: `4px solid ${isProcessing ? '#fff' : '#ccc'}`,
                  fontSize: isMobile ? '0.85rem' : '0.9rem'
                }}>
                  <div>
                    <strong>📋 Партиция #{idx}</strong>
                    {!isMobile && <span style={{fontSize: '0.8rem', opacity: 0.8}}> → Брокер {p.leaderBrokerId}</span>}
                    {isMobile && p.leaderBrokerId && <div style={{fontSize: '0.7rem', opacity: 0.8}}>Брокер {p.leaderBrokerId}</div>}
                  </div>
                  <span style={{ fontSize: isMobile ? '0.75rem' : '0.8rem' }}>
                    {hasMessage ? (
                      <span>
                        {isProcessing ? `🔄 ${activeConsumerForThis}` : `📬 ${p.messages.length} в очереди`}
                      </span>
                    ) : (
                      <span>Пусто</span>
                    )}
                  </span>
                </div>
              );
            })}
          </div>

          <div style={{ marginTop: '10px' }}>
            <div style={{ fontSize: isMobile ? '0.85rem' : '0.9rem', fontWeight: 'bold', marginBottom: '10px' }}>
              Потребители
            </div>
            <div style={consumersListStyle}>
              {consumers.map((c, idx) => {
                const assignedPartition = c.assignedPartitionId;
                const isProcessing = c.status === 'processing';
                
                return (
                  <div key={c.id} style={consumerItemStyle}>
                    <div style={{ 
                      ...nodeCardStyle(c.color, isProcessing, true), 
                      flex: 1,
                      border: isProcessing ? `2px solid #fff` : '2px solid transparent',
                      animation: isProcessing ? 'pulse 1s ease-in-out infinite' : 'none'
                    }}>
                      <strong>👤 {c.id}</strong>
                      <small style={{ fontSize: isMobile ? '0.7rem' : '0.8rem', display: 'block' }}>
                        {isProcessing ? '🔄 Обработка...' : (assignedPartition !== null ? `P#${assignedPartition}` : '⏳ Ожидание')}
                      </small>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div style={logPanelStyle}>
          <div style={{ fontWeight: 'bold', marginBottom: '10px', borderBottom: '1px solid #ccc', paddingBottom: '5px' }}>
            Журнал событий:
          </div>
          {logs.length === 0 ? (
            <div style={{ color: '#95a5a6' }}>Нет событий...</div>
          ) : (
            logs.map(log => (
              <div key={log.id} style={{ 
                marginBottom: '5px', 
                color: log.type === 'error' ? '#c0392b' : log.type === 'success' ? '#27ae60' : log.type === 'warning' ? '#f39c12' : '#2c3e50',
                fontSize: isMobile ? '0.75rem' : '0.85rem',
                wordBreak: 'break-word'
              }}>
                <span style={{ opacity: 0.6 }}>[{log.timestamp}]</span> {log.message}
              </div>
            ))
          )}
        </div>

        <div style={buttonGroupStyle}>
          <button 
            onClick={handlePublish} 
            disabled={status !== 'idle'}
            style={buttonStyle(status === 'idle')}
          >
            Отправить сообщение
          </button>
          
          <button 
            onClick={resetSimulation} 
            style={buttonStyle(true)}
          >
            🔄 Перезапустить
          </button>
        </div>
      </div>
    );
  };

  return (
    <BrowserOnly fallback={<div style={{ padding: '20px', textAlign: 'center' }}>Загрузка симуляции...</div>}>
      {() => <SimulationContent />}
    </BrowserOnly>
  );
};

export default KafkaSimulation;