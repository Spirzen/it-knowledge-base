import React, { useState, useEffect } from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';

const ModuleDependencyGraph = () => (
  <BrowserOnly>
    {() => (
      <ModuleComponent />
    )}
  </BrowserOnly>
);

const ModuleComponent = () => {
  const [mode, setMode] = useState('monolith');
  const [activeNode, setActiveNode] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const modules = [
    { 
      id: 'app', 
      name: 'app (main)', 
      type: 'entry', 
      description: 'Главный модуль приложения',
      icon: '🚀',
      dependencies: ['core', 'notification'],
      usedBy: []
    },
    { 
      id: 'core', 
      name: 'core (OrderService)', 
      type: 'domain', 
      description: 'Бизнес-логика заказов',
      icon: '🎯',
      dependencies: ['logger'],
      usedBy: ['app']
    },
    { 
      id: 'notification', 
      name: 'notification (Email)', 
      type: 'infra', 
      description: 'Сервис уведомлений',
      icon: '📧',
      dependencies: ['logger'],
      usedBy: ['app']
    },
    { 
      id: 'logger', 
      name: 'logger', 
      type: 'shared', 
      description: 'Общий логгер',
      icon: '📝',
      dependencies: [],
      usedBy: ['core', 'notification']
    },
  ];

  const getDependenciesForMode = (moduleId) => {
    if (mode === 'microservices' && moduleId === 'app') {
      return [
        { target: 'core', type: 'abstraction', label: 'IOrderService (интерфейс)' },
        { target: 'notification', type: 'abstraction', label: 'INotification (интерфейс)' }
      ];
    }
    
    if (mode === 'monolith' && moduleId === 'app') {
      return [
        { target: 'core', type: 'direct', label: 'прямая зависимость' },
        { target: 'notification', type: 'violation', label: '❌ прямое нарушение DIP' }
      ];
    }
    
    const module = modules.find(m => m.id === moduleId);
    return module.dependencies.map(target => ({ target, type: 'direct', label: 'зависит' }));
  };

  const handleModuleClick = (moduleId) => {
    setActiveNode(activeNode === moduleId ? null : moduleId);
    
    if (isMobile && activeNode !== moduleId) {
      setTimeout(() => {
        const infoPanel = document.getElementById('info-panel');
        if (infoPanel) {
          infoPanel.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
      }, 100);
    }
  };

  const getModuleColor = (type) => {
    switch (type) {
      case 'entry': return { bg: '#e3f2fd', border: '#1976d2', text: '#0d47a1' };
      case 'domain': return { bg: '#e8f5e9', border: '#388e3c', text: '#1b5e20' };
      case 'infra': return { bg: '#fff3e0', border: '#f57c00', text: '#e65100' };
      case 'shared': return { bg: '#f3e5f5', border: '#7b1fa2', text: '#4a148c' };
      default: return { bg: '#ffffff', border: '#ccc', text: '#333' };
    }
  };

  const getDependencyColor = (type) => {
    switch (type) {
      case 'violation': return '#d32f2f';
      case 'abstraction': return '#1976d2';
      default: return '#666';
    }
  };

  return (
    <div style={{
      maxWidth: '1200px',
      margin: '0 auto',
      padding: isMobile ? '10px' : '20px',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
    }}>
      <div style={{
        textAlign: 'center',
        marginBottom: isMobile ? '20px' : '30px',
        padding: isMobile ? '15px' : '20px',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        borderRadius: '12px',
        color: 'white'
      }}>
        <h1 style={{ 
          margin: 0, 
          fontSize: isMobile ? '20px' : '24px',
          wordBreak: 'break-word'
        }}>
          Архитектура зависимостей
        </h1>
        <p style={{ 
          margin: '8px 0 0', 
          opacity: 0.9,
          fontSize: isMobile ? '12px' : '14px'
        }}>
          Принцип инверсии зависимостей (DIP) в действии
        </p>
      </div>

      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: isMobile ? '10px' : '15px',
        marginBottom: isMobile ? '20px' : '30px',
        flexWrap: 'wrap'
      }}>
        <button
          onClick={() => { setMode('monolith'); setActiveNode(null); }}
          style={{
            padding: isMobile ? '10px 16px' : '12px 24px',
            background: mode === 'monolith' ? '#2c3e50' : 'white',
            color: mode === 'monolith' ? 'white' : '#2c3e50',
            border: `2px solid ${mode === 'monolith' ? '#2c3e50' : '#ddd'}`,
            borderRadius: '8px',
            cursor: 'pointer',
            fontWeight: 'bold',
            fontSize: isMobile ? '12px' : '14px',
            transition: 'all 0.3s',
            flex: isMobile ? '1' : 'auto',
            minWidth: isMobile ? '140px' : 'auto'
          }}
        >
          {isMobile ? 'Монолит' : 'Монолит (прямые зависимости)'}
        </button>
        <button
          onClick={() => { setMode('microservices'); setActiveNode(null); }}
          style={{
            padding: isMobile ? '10px 16px' : '12px 24px',
            background: mode === 'microservices' ? '#2c3e50' : 'white',
            color: mode === 'microservices' ? 'white' : '#2c3e50',
            border: `2px solid ${mode === 'microservices' ? '#2c3e50' : '#ddd'}`,
            borderRadius: '8px',
            cursor: 'pointer',
            fontWeight: 'bold',
            fontSize: isMobile ? '12px' : '14px',
            transition: 'all 0.3s',
            flex: isMobile ? '1' : 'auto',
            minWidth: isMobile ? '140px' : 'auto'
          }}
        >
          {isMobile ? 'Компоненты' : 'Компоненты (абстракции / DIP)'}
        </button>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: isMobile 
          ? '1fr' 
          : window.innerWidth <= 1024 && window.innerWidth > 768
            ? 'repeat(2, 1fr)'
            : 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: isMobile ? '15px' : '20px',
        marginBottom: isMobile ? '20px' : '30px'
      }}>
        {modules.map(module => {
          const colors = getModuleColor(module.type);
          const isActive = activeNode === module.id;
          const dependencies = getDependenciesForMode(module.id);
          
          return (
            <div
              key={module.id}
              onClick={() => handleModuleClick(module.id)}
              style={{
                background: colors.bg,
                border: `2px solid ${isActive ? colors.border : '#e0e0e0'}`,
                borderRadius: '12px',
                padding: isMobile ? '15px' : '20px',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                transform: isActive && !isMobile ? 'scale(1.02)' : 'scale(1)',
                boxShadow: isActive ? '0 8px 16px rgba(0,0,0,0.15)' : '0 2px 4px rgba(0,0,0,0.1)',
                position: 'relative',
                WebkitTapHighlightColor: 'transparent'
              }}
            >
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '12px',
                flexWrap: 'wrap',
                gap: '8px'
              }}>
                <span style={{ fontSize: isMobile ? '28px' : '32px' }}>{module.icon}</span>
                <span style={{
                  background: colors.border,
                  color: 'white',
                  padding: '4px 8px',
                  borderRadius: '6px',
                  fontSize: isMobile ? '10px' : '11px',
                  fontWeight: 'bold',
                  whiteSpace: 'nowrap'
                }}>
                  {module.type === 'entry' && 'Точка входа'}
                  {module.type === 'domain' && 'Домен'}
                  {module.type === 'infra' && 'Инфраструктура'}
                  {module.type === 'shared' && 'Общий модуль'}
                </span>
              </div>
              
              <h3 style={{ 
                margin: '0 0 8px', 
                color: colors.text, 
                fontSize: isMobile ? '15px' : '16px',
                wordBreak: 'break-word'
              }}>
                {module.name}
              </h3>
              
              <p style={{ 
                margin: '0 0 15px', 
                fontSize: isMobile ? '12px' : '13px', 
                color: '#666', 
                lineHeight: '1.4',
                wordBreak: 'break-word'
              }}>
                {module.description}
              </p>
              
              <div style={{
                borderTop: `1px solid ${colors.border}30`,
                paddingTop: '12px',
                marginTop: '8px'
              }}>
                <div style={{ fontSize: isMobile ? '10px' : '11px', fontWeight: 'bold', marginBottom: '8px', color: colors.text }}>
                  Зависимости:
                </div>
                {dependencies.length > 0 ? (
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                    {dependencies.map((dep, idx) => (
                      <span
                        key={idx}
                        style={{
                          background: getDependencyColor(dep.type),
                          color: 'white',
                          padding: '4px 8px',
                          borderRadius: '6px',
                          fontSize: isMobile ? '9px' : '10px',
                          fontWeight: 'bold',
                          wordBreak: 'break-word'
                        }}
                      >
                        {modules.find(m => m.id === dep.target)?.name || dep.target}
                        {!isMobile && dep.label && ` (${dep.label})`}
                      </span>
                    ))}
                  </div>
                ) : (
                  <div style={{ fontSize: isMobile ? '10px' : '11px', color: '#999', fontStyle: 'italic' }}>
                    Нет зависимостей
                  </div>
                )}
              </div>

              {module.usedBy.length > 0 && (
                <div style={{ marginTop: '10px' }}>
                  <div style={{ fontSize: isMobile ? '10px' : '11px', fontWeight: 'bold', marginBottom: '8px', color: colors.text }}>
                    Используется в:
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                    {module.usedBy.map(usedBy => (
                      <span
                        key={usedBy}
                        style={{
                          background: '#e0e0e0',
                          color: '#333',
                          padding: '4px 8px',
                          borderRadius: '6px',
                          fontSize: isMobile ? '9px' : '10px'
                        }}
                      >
                        {modules.find(m => m.id === usedBy)?.name}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {activeNode && (
        <div id="info-panel" style={{
          background: 'white',
          borderRadius: '12px',
          padding: isMobile ? '15px' : '20px',
          border: '2px solid #667eea',
          boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
          marginTop: '20px',
          animation: 'slideUp 0.3s ease'
        }}>
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'space-between', 
            marginBottom: '15px',
            flexWrap: 'wrap',
            gap: '10px'
          }}>
            <h3 style={{ margin: 0, color: '#333', fontSize: isMobile ? '18px' : '20px' }}>
              {modules.find(m => m.id === activeNode)?.icon} {modules.find(m => m.id === activeNode)?.name}
            </h3>
            <button
              onClick={() => setActiveNode(null)}
              style={{
                background: '#f0f0f0',
                border: 'none',
                borderRadius: '6px',
                padding: '8px 12px',
                cursor: 'pointer',
                fontSize: isMobile ? '12px' : '14px',
                fontWeight: 'bold',
                touchAction: 'manipulation'
              }}
            >
              ✕ Закрыть
            </button>
          </div>
          
          {mode === 'monolith' && activeNode === 'app' && (
            <div style={{
              background: '#ffebee',
              padding: isMobile ? '12px' : '15px',
              borderRadius: '8px',
              marginBottom: '15px',
              borderLeft: '4px solid #d32f2f'
            }}>
              <strong style={{ color: '#c62828', fontSize: isMobile ? '13px' : '14px' }}>Проблема в монолитной архитектуре:</strong>
              <p style={{ margin: '8px 0 0', fontSize: isMobile ? '12px' : '14px', color: '#555' }}>
                Код приложения (app) напрямую зависит от конкретной реализации notification (Email).<br/>
                Это нарушает <strong>принцип инверсии зависимостей (DIP)</strong> — высокоуровневый модуль зависит от низкоуровневого, а не от абстракции.
              </p>
            </div>
          )}
          
          {mode === 'microservices' && activeNode === 'app' && (
            <div style={{
              background: '#e8f5e9',
              padding: isMobile ? '12px' : '15px',
              borderRadius: '8px',
              marginBottom: '15px',
              borderLeft: '4px solid #4caf50'
            }}>
              <strong style={{ color: '#2e7d32', fontSize: isMobile ? '13px' : '14px' }}>Правильная архитектура с DIP:</strong>
              <p style={{ margin: '8px 0 0', fontSize: isMobile ? '12px' : '14px', color: '#555' }}>
                Приложение зависит от абстракций (IOrderService, INotification), а не от конкретных реализаций.
                Это позволяет легко заменять реализации (например, Email → SMS) без изменения кода app.
              </p>
            </div>
          )}
          
          <div style={{
            background: '#f5f5f5',
            padding: isMobile ? '12px' : '15px',
            borderRadius: '8px'
          }}>
            <strong style={{ fontSize: isMobile ? '13px' : '14px' }}>Что означает этот режим:</strong>
            <p style={{ margin: '8px 0 0', fontSize: isMobile ? '12px' : '13px', color: '#666' }}>
              {mode === 'monolith' 
                ? "В монолите зависимости жёстко зашиты в код. Изменение одного модуля может сломать другие."
                : "В компонентной архитектуре зависимости идут через интерфейсы. Модули слабо связаны, их легко тестировать и заменять."}
            </p>
          </div>
        </div>
      )}

      <div style={{
        marginTop: '30px',
        padding: isMobile ? '12px' : '15px',
        background: '#f9f9f9',
        borderRadius: '8px',
        textAlign: 'center',
        fontSize: isMobile ? '11px' : '13px',
        color: '#666'
      }}>
        💡 <strong>Совет:</strong> {isMobile ? 'Нажмите на модуль для деталей' : 'Нажмите на любой модуль, чтобы увидеть детали его зависимостей.'}
        {!isMobile && ' Переключайте режимы, чтобы сравнить монолитную и слабосвязанную архитектуру.'}
      </div>

      <style>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @media (max-width: 768px) {
          button {
            touch-action: manipulation;
          }
        }
      `}</style>
    </div>
  );
};

export default ModuleDependencyGraph;