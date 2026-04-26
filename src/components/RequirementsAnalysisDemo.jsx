import React, { useState } from 'react';

const RequirementsAnalysisDemo = () => {
  const [activeSection, setActiveSection] = useState(null);
  const [activeTab, setActiveTab] = useState('requirements');
  const [elicitationMethod, setElicitationMethod] = useState('interview');
  const [validationResult, setValidationResult] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const [requirements, setRequirements] = useState({
    functional: [
      { id: 1, text: 'Пользователь может авторизоваться по email/паролю', priority: 'Высокий', status: 'Утверждено', category: 'auth' },
      { id: 2, text: 'Система должна отправлять email уведомления', priority: 'Средний', status: 'На рассмотрении', category: 'notifications' },
      { id: 3, text: 'Поиск товаров по категориям и фильтрам', priority: 'Высокий', status: 'Утверждено', category: 'search' },
      { id: 4, text: 'Экспорт отчетов в PDF/Excel', priority: 'Низкий', status: 'Черновик', category: 'reports' }
    ],
    nonFunctional: [
      { id: 5, text: 'Время отклика API менее 200 мс', priority: 'Высокий', status: 'Утверждено', metric: 'Производительность' },
      { id: 6, text: 'Поддержка 1000+ одновременных пользователей', priority: 'Высокий', status: 'Утверждено', metric: 'Масштабируемость' },
      { id: 7, text: '99.9% времени доступности (SLA)', priority: 'Средний', status: 'На рассмотрении', metric: 'Надежность' },
      { id: 8, text: 'Шифрование данных в покое и при передаче', priority: 'Критичный', status: 'Утверждено', metric: 'Безопасность' }
    ]
  });
  
  const [stakeholders, setStakeholders] = useState([
    { id: 1, name: 'Иван Петров', role: 'Владелец продукта', influence: 'Высокое', interest: 'Высокий', concerns: 'ROI, соответствие рынку' },
    { id: 2, name: 'Елена Смирнова', role: 'Технический лид', influence: 'Высокое', interest: 'Средний', concerns: 'Архитектура, техдолг' },
    { id: 3, name: 'Анна Козлова', role: 'Конечный пользователь', influence: 'Низкое', interest: 'Высокий', concerns: 'Юзабилити, функции' },
    { id: 4, name: 'Дмитрий Орлов', role: 'Специалист по безопасности', influence: 'Среднее', interest: 'Высокий', concerns: 'Комплаенс, защита данных' }
  ]);
  
  const [userStories, setUserStories] = useState([
    { id: 1, text: 'Как пользователь, я хочу видеть историю заказов, чтобы отслеживать статус доставки', acceptance: 'Список заказов с фильтрацией по дате', priority: 'Высокий', status: 'В разработке' },
    { id: 2, text: 'Как администратор, я хочу управлять ролями пользователей, чтобы ограничить доступ к данным', acceptance: 'CRUD операции для ролей, назначение прав', priority: 'Средний', status: 'В бэклоге' },
    { id: 3, text: 'Как менеджер, я хочу получать дашборд с KPI, чтобы принимать решения', acceptance: 'Визуализация метрик в реальном времени', priority: 'Высокий', status: 'На рассмотрении' }
  ]);
  
  const [newRequirement, setNewRequirement] = useState('');
  const [newUserStory, setNewUserStory] = useState('');
  const [selectedPriority, setSelectedPriority] = useState('Средний');
  
  const elicitationMethods = {
    interview: {
      name: 'Интервью',
      description: 'Индивидуальные беседы с заинтересованными лицами',
      steps: ['Подготовка вопросов', 'Проведение интервью', 'Документирование', 'Согласование'],
      duration: '1-2 часа на человека',
      bestFor: 'Сложные требования, неявные потребности'
    },
    workshop: {
      name: 'Воркшоп',
      description: 'Групповые сессии с заказчиком и командой',
      steps: ['Планирование сессии', 'Модерация обсуждения', 'Фиксация решений', 'Приоритизация'],
      duration: '2-4 часа',
      bestFor: 'Быстрое согласование, противоречивые требования'
    },
    survey: {
      name: 'Анкетирование',
      description: 'Сбор требований через опросы',
      steps: ['Дизайн анкеты', 'Рассылка', 'Анализ результатов', 'Выявление паттернов'],
      duration: '3-7 дней',
      bestFor: 'Большая аудитория, количественные данные'
    },
    observation: {
      name: 'Наблюдение',
      description: 'Изучение текущих процессов',
      steps: ['Выбор процесса', 'Наблюдение', 'Фиксация проблем', 'Предложение улучшений'],
      duration: '2-5 дней',
      bestFor: 'Анализ текущего состояния, выявление узких мест'
    }
  };
  
  const addRequirement = () => {
    if (!newRequirement.trim()) return;
    
    const newReq = {
      id: requirements.functional.length + requirements.nonFunctional.length + 1,
      text: newRequirement,
      priority: selectedPriority,
      status: 'Черновик',
      category: 'general'
    };
    
    setRequirements({
      ...requirements,
      functional: [...requirements.functional, newReq]
    });
    setNewRequirement('');
  };
  
  const validateRequirement = (reqText) => {
    const smart = {
      Конкретность: reqText.includes('должен') || reqText.includes('может') || reqText.includes('будет'),
      Измеримость: reqText.match(/\d+/) !== null,
      Достижимость: true,
      Значимость: reqText.length > 20,
      Ограниченность_во_времени: reqText.includes('в течение') || reqText.includes('до')
    };
    
    const score = Object.values(smart).filter(v => v === true).length;
    setValidationResult({ smart, score, text: reqText });
  };
  
  const traceabilityMatrix = [
    { req: 'FR-001: Авторизация', source: 'Интервью с владельцем продукта', test: 'TC-001: Тест логина', status: 'Покрыто' },
    { req: 'FR-002: Email уведомления', source: 'Воркшоп', test: 'TC-005: Тест уведомлений', status: 'Покрыто' },
    { req: 'NFR-001: Производительность', source: 'SLA требования', test: 'TC-010: Нагрузочное тестирование', status: 'Ожидает' },
    { req: 'FR-003: Поиск', source: 'Обратная связь от пользователей', test: 'TC-015: Тест поиска', status: 'В процессе' }
  ];
  
  const moscowPriorities = {
    Must: { color: '#ef4444', desc: 'Обязательно (критично для успеха)' },
    Should: { color: '#f59e0b', desc: 'Важно, но можно отложить' },
    Could: { color: '#10b981', desc: 'Хорошо бы иметь' },
    Wont: { color: '#6b7280', desc: 'Не в этом релизе' }
  };
  
  const tabs = [
    { id: 'requirements', name: 'Требования' },
    { id: 'stakeholders', name: 'Стейкхолдеры' },
    { id: 'stories', name: 'Истории' },
    { id: 'elicitation', name: 'Сбор' },
    { id: 'traceability', name: 'Трассировка' }
  ];

  return (
    <div style={{
      fontFamily: 'system-ui, -apple-system, "Segoe UI", Roboto, sans-serif',
      maxWidth: '1400px',
      margin: 'clamp(0.5rem, 4vw, 2rem) auto',
      background: 'linear-gradient(135deg, #0f172a 0%, #1e1b4b 100%)',
      borderRadius: 'clamp(16px, 5vw, 24px)',
      padding: 'clamp(12px, 4vw, 24px)',
      boxShadow: '0 25px 50px rgba(0,0,0,0.3)',
      color: '#e2e8f0'
    }}>
      
      {/* Заголовок */}
      <div style={{ textAlign: 'center', marginBottom: 'clamp(20px, 6vw, 32px)' }}>
        <h1 style={{ 
          fontSize: 'clamp(1.5rem, 6vw, 2.5rem)', 
          margin: 0,
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text'
        }}>
          Анализ требований
        </h1>
        <p style={{ 
          color: '#94a3b8', 
          marginTop: '8px',
          fontSize: 'clamp(0.75rem, 3vw, 0.9rem)',
          padding: '0 16px'
        }}>
          От сбора и анализа до валидации и приоритизации
        </p>
      </div>
      
      {/* Мобильное меню */}
      <div style={{ marginBottom: '24px' }}>
        {/* Кнопка мобильного меню */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          style={{
            display: 'none',
            width: '100%',
            padding: '12px',
            background: 'linear-gradient(135deg, #667eea, #764ba2)',
            border: 'none',
            borderRadius: '12px',
            color: 'white',
            cursor: 'pointer',
            fontSize: '16px',
            fontWeight: 'bold',
            '@media (max-width: 768px)': {
              display: 'block'
            }
          }}
        >
          {isMobileMenuOpen ? '✕ Закрыть меню' : '☰ Меню разделов'}
        </button>
        
        {/* Навигация */}
        <div style={{
          display: 'flex',
          gap: '8px',
          borderBottom: '2px solid rgba(255,255,255,0.1)',
          paddingBottom: '12px',
          flexWrap: 'wrap',
          '@media (max-width: 768px)': {
            display: isMobileMenuOpen ? 'flex' : 'none',
            flexDirection: 'column'
          }
        }}>
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => {
                setActiveTab(tab.id);
                setIsMobileMenuOpen(false);
              }}
              style={{
                padding: 'clamp(8px, 3vw, 10px) clamp(12px, 4vw, 20px)',
                background: activeTab === tab.id ? 'linear-gradient(135deg, #667eea, #764ba2)' : 'rgba(255,255,255,0.05)',
                border: 'none',
                borderRadius: '12px',
                color: 'white',
                fontFamily: 'inherit',
                fontSize: 'clamp(12px, 3vw, 14px)',
                cursor: 'pointer',
                transition: 'all 0.3s',
                flex: window.innerWidth <= 768 ? '1' : 'auto',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis'
              }}
            >
              {tab.name}
            </button>
          ))}
        </div>
      </div>
      
      {/* Вкладка Требования */}
      {activeTab === 'requirements' && (
        <div style={{ animation: 'fadeIn 0.3s ease' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 450px), 1fr))',
            gap: 'clamp(16px, 4vw, 24px)',
            marginBottom: '24px'
          }}>
            {/* Функциональные требования */}
            <div style={{
              background: 'rgba(0,0,0,0.3)',
              borderRadius: '16px',
              padding: 'clamp(12px, 4vw, 20px)'
            }}>
              <div style={{
                fontSize: 'clamp(16px, 4vw, 18px)',
                fontWeight: 'bold',
                marginBottom: '16px',
                color: '#3b82f6'
              }}>
                Функциональные требования
              </div>
              {requirements.functional.map(req => (
                <div
                  key={req.id}
                  style={{
                    background: 'rgba(59,130,246,0.1)',
                    borderLeft: `4px solid ${
                      req.priority === 'Критичный' ? '#ef4444' :
                      req.priority === 'Высокий' ? '#f59e0b' :
                      req.priority === 'Средний' ? '#10b981' : '#6b7280'
                    }`,
                    padding: 'clamp(10px, 3vw, 12px)',
                    marginBottom: '12px',
                    borderRadius: '8px',
                    cursor: 'pointer'
                  }}
                  onClick={() => validateRequirement(req.text)}
                >
                  <div style={{ fontSize: 'clamp(12px, 3.5vw, 14px)' }}>{req.text}</div>
                  <div style={{
                    display: 'flex',
                    gap: '8px',
                    marginTop: '8px',
                    fontSize: 'clamp(10px, 2.5vw, 11px)',
                    flexWrap: 'wrap'
                  }}>
                    <span style={{
                      background: `rgba(${
                        req.priority === 'Высокий' ? '245,158,11' :
                        req.priority === 'Средний' ? '16,185,129' : '107,114,128'
                      }, 0.2)`,
                      padding: '2px 6px',
                      borderRadius: '4px'
                    }}>
                      Приоритет: {req.priority}
                    </span>
                    <span style={{
                      background: 'rgba(100,116,139,0.2)',
                      padding: '2px 6px',
                      borderRadius: '4px'
                    }}>
                      {req.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Нефункциональные требования */}
            <div style={{
              background: 'rgba(0,0,0,0.3)',
              borderRadius: '16px',
              padding: 'clamp(12px, 4vw, 20px)'
            }}>
              <div style={{
                fontSize: 'clamp(16px, 4vw, 18px)',
                fontWeight: 'bold',
                marginBottom: '16px',
                color: '#8b5cf6'
              }}>
                Нефункциональные требования
              </div>
              {requirements.nonFunctional.map(req => (
                <div
                  key={req.id}
                  style={{
                    background: 'rgba(139,92,246,0.1)',
                    borderLeft: `4px solid #8b5cf6`,
                    padding: 'clamp(10px, 3vw, 12px)',
                    marginBottom: '12px',
                    borderRadius: '8px'
                  }}
                >
                  <div style={{ fontSize: 'clamp(12px, 3.5vw, 14px)' }}>{req.text}</div>
                  <div style={{ fontSize: 'clamp(10px, 2.5vw, 11px)', marginTop: '4px', color: '#a78bfa' }}>
                    Метрика: {req.metric}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* SMART Валидация */}
          {validationResult && (
            <div style={{
              background: 'rgba(16,185,129,0.1)',
              borderRadius: '16px',
              padding: 'clamp(16px, 4vw, 20px)',
              marginBottom: '24px',
              border: '1px solid rgba(16,185,129,0.3)'
            }}>
              <div style={{ fontWeight: 'bold', marginBottom: '12px', fontSize: 'clamp(14px, 3.5vw, 16px)' }}>SMART Валидация</div>
              <div style={{ fontSize: 'clamp(11px, 3vw, 13px)', marginBottom: '12px', wordWrap: 'break-word' }}>"{validationResult.text}"</div>
              <div style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fit, minmax(80px, 1fr))', 
                gap: '8px', 
                marginBottom: '12px' 
              }}>
                {Object.entries(validationResult.smart).map(([key, value]) => (
                  <div key={key} style={{
                    textAlign: 'center',
                    padding: '8px',
                    background: value ? 'rgba(16,185,129,0.2)' : 'rgba(239,68,68,0.2)',
                    borderRadius: '8px'
                  }}>
                    <div style={{ fontSize: 'clamp(16px, 4vw, 20px)' }}>{value ? '✓' : '✗'}</div>
                    <div style={{ fontSize: 'clamp(9px, 2.5vw, 10px)', wordWrap: 'break-word' }}>{key}</div>
                  </div>
                ))}
              </div>
              <div style={{ fontSize: 'clamp(11px, 3vw, 12px)' }}>
                Оценка: {validationResult.score}/5 - {validationResult.score >= 4 ? 'Хорошее требование' : 'Требует улучшения'}
              </div>
            </div>
          )}
          
          {/* Добавить новое требование */}
          <div style={{
            background: 'rgba(0,0,0,0.3)',
            borderRadius: '16px',
            padding: 'clamp(16px, 4vw, 20px)'
          }}>
            <div style={{ fontWeight: 'bold', marginBottom: '12px', fontSize: 'clamp(14px, 3.5vw, 16px)' }}>➕ Добавить требование</div>
            <div style={{ display: 'flex', gap: '12px', flexDirection: 'column' }}>
              <input
                type="text"
                value={newRequirement}
                onChange={(e) => setNewRequirement(e.target.value)}
                placeholder="Введите новое требование..."
                style={{
                  width: '100%',
                  padding: '12px',
                  background: 'rgba(255,255,255,0.1)',
                  border: '1px solid rgba(255,255,255,0.2)',
                  borderRadius: '8px',
                  color: 'white',
                  fontFamily: 'inherit',
                  fontSize: 'clamp(12px, 3.5vw, 14px)'
                }}
              />
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <select
                  value={selectedPriority}
                  onChange={(e) => setSelectedPriority(e.target.value)}
                  style={{
                    flex: 1,
                    padding: '12px',
                    background: 'rgba(255,255,255,0.1)',
                    border: '1px solid rgba(255,255,255,0.2)',
                    borderRadius: '8px',
                    color: 'white',
                    fontSize: 'clamp(12px, 3.5vw, 14px)'
                  }}
                >
                  <option>Критичный</option>
                  <option>Высокий</option>
                  <option>Средний</option>
                  <option>Низкий</option>
                </select>
                <button
                  onClick={addRequirement}
                  style={{
                    padding: '12px 24px',
                    background: 'linear-gradient(135deg, #667eea, #764ba2)',
                    border: 'none',
                    borderRadius: '8px',
                    color: 'white',
                    cursor: 'pointer',
                    fontSize: 'clamp(12px, 3.5vw, 14px)',
                    whiteSpace: 'nowrap'
                  }}
                >
                  Добавить
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* Вкладка Стейкхолдеры */}
      {activeTab === 'stakeholders' && (
        <div style={{ animation: 'fadeIn 0.3s ease' }}>
          {/* Матрица власть/интерес */}
          <div style={{
            background: 'rgba(0,0,0,0.3)',
            borderRadius: '16px',
            padding: 'clamp(16px, 4vw, 20px)',
            marginBottom: '24px'
          }}>
            <div style={{ fontWeight: 'bold', marginBottom: '16px', fontSize: 'clamp(14px, 3.5vw, 16px)' }}>Матрица власть/интерес</div>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 250px), 1fr))',
              gap: '16px',
              marginBottom: '16px'
            }}>
              <div style={{
                background: 'rgba(239,68,68,0.1)',
                padding: 'clamp(12px, 3vw, 16px)',
                borderRadius: '12px',
                border: '2px solid #ef4444'
              }}>
                <div style={{ fontWeight: 'bold', color: '#ef4444', marginBottom: '8px', fontSize: 'clamp(12px, 3vw, 14px)' }}>Высокая власть, высокий интерес</div>
                <div style={{ fontSize: 'clamp(11px, 2.5vw, 13px)' }}>Управлять внимательно: Владелец продукта, Спонсор</div>
              </div>
              <div style={{
                background: 'rgba(245,158,11,0.1)',
                padding: 'clamp(12px, 3vw, 16px)',
                borderRadius: '12px',
                border: '2px solid #f59e0b'
              }}>
                <div style={{ fontWeight: 'bold', color: '#f59e0b', marginBottom: '8px', fontSize: 'clamp(12px, 3vw, 14px)' }}>Высокая власть, низкий интерес</div>
                <div style={{ fontSize: 'clamp(11px, 2.5vw, 13px)' }}>Держать удовлетворенными: Специалист по безопасности, Юристы</div>
              </div>
              <div style={{
                background: 'rgba(16,185,129,0.1)',
                padding: 'clamp(12px, 3vw, 16px)',
                borderRadius: '12px',
                border: '2px solid #10b981'
              }}>
                <div style={{ fontWeight: 'bold', color: '#10b981', marginBottom: '8px', fontSize: 'clamp(12px, 3vw, 14px)' }}>Низкая власть, высокий интерес</div>
                <div style={{ fontSize: 'clamp(11px, 2.5vw, 13px)' }}>Держать в курсе: Конечные пользователи, Команда поддержки</div>
              </div>
              <div style={{
                background: 'rgba(107,114,128,0.1)',
                padding: 'clamp(12px, 3vw, 16px)',
                borderRadius: '12px',
                border: '2px solid #6b7280'
              }}>
                <div style={{ fontWeight: 'bold', color: '#6b7280', marginBottom: '8px', fontSize: 'clamp(12px, 3vw, 14px)' }}>Низкая власть, низкий интерес</div>
                <div style={{ fontSize: 'clamp(11px, 2.5vw, 13px)' }}>Мониторить: Внешние поставщики</div>
              </div>
            </div>
          </div>
          
          {/* Список стейкхолдеров */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
            gap: '16px'
          }}>
            {stakeholders.map(stakeholder => (
              <div
                key={stakeholder.id}
                style={{
                  background: 'rgba(0,0,0,0.3)',
                  borderRadius: '16px',
                  padding: 'clamp(12px, 3vw, 16px)',
                  cursor: 'pointer'
                }}
                onClick={() => setActiveSection(stakeholder.id)}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px', flexWrap: 'wrap' }}>
                  <div style={{
                    width: 'clamp(36px, 8vw, 40px)',
                    height: 'clamp(36px, 8vw, 40px)',
                    background: 'linear-gradient(135deg, #667eea, #764ba2)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 'clamp(16px, 4vw, 20px)'
                  }}>
                    {stakeholder.name[0]}
                  </div>
                  <div>
                    <div style={{ fontWeight: 'bold', fontSize: 'clamp(14px, 3.5vw, 16px)' }}>{stakeholder.name}</div>
                    <div style={{ fontSize: 'clamp(11px, 2.5vw, 12px)', color: '#94a3b8' }}>{stakeholder.role}</div>
                  </div>
                </div>
                <div style={{ fontSize: 'clamp(11px, 2.5vw, 13px)', marginBottom: '4px' }}>
                  Влияние: {stakeholder.influence} | Интерес: {stakeholder.interest}
                </div>
                <div style={{ fontSize: 'clamp(10px, 2.5vw, 12px)', color: '#94a3b8', wordWrap: 'break-word' }}>
                  Ожидания: {stakeholder.concerns}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      
      {/* Вкладка Пользовательские истории */}
      {activeTab === 'stories' && (
        <div style={{ animation: 'fadeIn 0.3s ease' }}>
          <div style={{
            background: 'rgba(0,0,0,0.3)',
            borderRadius: '16px',
            padding: 'clamp(16px, 4vw, 20px)',
            marginBottom: '24px'
          }}>
            <div style={{ fontWeight: 'bold', marginBottom: '16px', fontSize: 'clamp(14px, 3.5vw, 16px)' }}>Пользовательские истории (INVEST формат)</div>
            {userStories.map(story => (
              <div
                key={story.id}
                style={{
                  background: 'rgba(139,92,246,0.1)',
                  borderRadius: '12px',
                  padding: 'clamp(12px, 3vw, 16px)',
                  marginBottom: '16px'
                }}
              >
                <div style={{ fontSize: 'clamp(12px, 3.5vw, 14px)', marginBottom: '8px', wordWrap: 'break-word' }}>{story.text}</div>
                <div style={{ fontSize: 'clamp(10px, 2.5vw, 12px)', color: '#a78bfa', marginBottom: '8px', wordWrap: 'break-word' }}>
                  Критерии приемки: {story.acceptance}
                </div>
                <div style={{ display: 'flex', gap: '8px', fontSize: 'clamp(10px, 2.5vw, 11px)', flexWrap: 'wrap' }}>
                  <span style={{ background: 'rgba(245,158,11,0.2)', padding: '4px 10px', borderRadius: '4px' }}>
                    Приоритет: {story.priority}
                  </span>
                  <span style={{ background: 'rgba(100,116,139,0.2)', padding: '4px 10px', borderRadius: '4px' }}>
                    Статус: {story.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
          
          {/* Добавить пользовательскую историю */}
          <div style={{
            background: 'rgba(0,0,0,0.3)',
            borderRadius: '16px',
            padding: 'clamp(16px, 4vw, 20px)'
          }}>
            <div style={{ fontWeight: 'bold', marginBottom: '12px', fontSize: 'clamp(14px, 3.5vw, 16px)' }}>Создать пользовательскую историю</div>
            <textarea
              value={newUserStory}
              onChange={(e) => setNewUserStory(e.target.value)}
              placeholder="Как [роль], я хочу [действие], чтобы [ценность]..."
              rows="3"
              style={{
                width: '100%',
                padding: '12px',
                background: 'rgba(255,255,255,0.1)',
                border: '1px solid rgba(255,255,255,0.2)',
                borderRadius: '8px',
                color: 'white',
                fontFamily: 'inherit',
                marginBottom: '12px',
                fontSize: 'clamp(12px, 3.5vw, 14px)'
              }}
            />
            <button
              onClick={() => {
                if (newUserStory.trim()) {
                  setUserStories([...userStories, {
                    id: userStories.length + 1,
                    text: newUserStory,
                    acceptance: 'Будет определено',
                    priority: 'Средний',
                    status: 'Черновик'
                  }]);
                  setNewUserStory('');
                }
              }}
              style={{
                width: '100%',
                padding: '12px',
                background: 'linear-gradient(135deg, #10b981, #059669)',
                border: 'none',
                borderRadius: '8px',
                color: 'white',
                cursor: 'pointer',
                fontSize: 'clamp(12px, 3.5vw, 14px)'
              }}
            >
              Добавить историю
            </button>
          </div>
        </div>
      )}
      
      {/* Вкладка Сбор требований */}
      {activeTab === 'elicitation' && (
        <div style={{ animation: 'fadeIn 0.3s ease' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 200px), 1fr))',
            gap: '16px',
            marginBottom: '24px'
          }}>
            {Object.entries(elicitationMethods).map(([key, method]) => (
              <div
                key={key}
                onClick={() => setElicitationMethod(key)}
                style={{
                  background: elicitationMethod === key ? 'rgba(102,126,234,0.2)' : 'rgba(0,0,0,0.3)',
                  border: `2px solid ${elicitationMethod === key ? '#667eea' : 'rgba(255,255,255,0.1)'}`,
                  borderRadius: '16px',
                  padding: 'clamp(12px, 3vw, 16px)',
                  cursor: 'pointer',
                  transition: 'all 0.3s'
                }}
              >
                <div style={{ fontSize: 'clamp(20px, 5vw, 24px)', marginBottom: '8px' }}>
                  {key === 'interview' && '🎙️'}
                  {key === 'workshop' && '👥'}
                  {key === 'survey' && '📋'}
                  {key === 'observation' && '👁️'}
                </div>
                <div style={{ fontWeight: 'bold', marginBottom: '4px', fontSize: 'clamp(12px, 3vw, 14px)' }}>{method.name}</div>
                <div style={{ fontSize: 'clamp(10px, 2.5vw, 12px)', color: '#94a3b8' }}>{method.description}</div>
              </div>
            ))}
          </div>
          
          <div style={{
            background: 'rgba(0,0,0,0.3)',
            borderRadius: '16px',
            padding: 'clamp(16px, 4vw, 20px)'
          }}>
            <div style={{ fontWeight: 'bold', marginBottom: '16px', color: '#667eea', fontSize: 'clamp(14px, 3.5vw, 16px)' }}>
              📋 {elicitationMethods[elicitationMethod].name} - Методология
            </div>
            <div style={{ marginBottom: '16px' }}>
              <div style={{ fontSize: 'clamp(12px, 3vw, 13px)', marginBottom: '8px' }}>Шаги:</div>
              <ul style={{ margin: 0, paddingLeft: '20px' }}>
                {elicitationMethods[elicitationMethod].steps.map((step, idx) => (
                  <li key={idx} style={{ fontSize: 'clamp(11px, 3vw, 13px)', marginBottom: '4px', wordWrap: 'break-word' }}>{step}</li>
                ))}
              </ul>
            </div>
            <div style={{ fontSize: 'clamp(11px, 3vw, 13px)', marginBottom: '8px' }}>
              Длительность: {elicitationMethods[elicitationMethod].duration}
            </div>
            <div style={{ fontSize: 'clamp(11px, 3vw, 13px)' }}>
              Лучше всего для: {elicitationMethods[elicitationMethod].bestFor}
            </div>
          </div>
        </div>
      )}
      
      {/* Вкладка Трассировка */}
      {activeTab === 'traceability' && (
        <div style={{ animation: 'fadeIn 0.3s ease' }}>
          <div style={{
            background: 'rgba(0,0,0,0.3)',
            borderRadius: '16px',
            padding: 'clamp(16px, 4vw, 20px)',
            marginBottom: '24px',
            overflowX: 'auto'
          }}>
            <div style={{ fontWeight: 'bold', marginBottom: '16px', fontSize: 'clamp(14px, 3.5vw, 16px)' }}>Матрица трассировки требований (RTM)</div>
            <div style={{ minWidth: '500px', overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 'clamp(11px, 3vw, 13px)' }}>
                <thead>
                  <tr style={{ borderBottom: '2px solid rgba(255,255,255,0.2)' }}>
                    <th style={{ padding: '12px', textAlign: 'left' }}>Требование</th>
                    <th style={{ padding: '12px', textAlign: 'left' }}>Источник</th>
                    <th style={{ padding: '12px', textAlign: 'left' }}>Тест-кейс</th>
                    <th style={{ padding: '12px', textAlign: 'left' }}>Статус</th>
                  </tr>
                </thead>
                <tbody>
                  {traceabilityMatrix.map((item, idx) => (
                    <tr key={idx} style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                      <td style={{ padding: '12px', wordWrap: 'break-word' }}>{item.req}</td>
                      <td style={{ padding: '12px', wordWrap: 'break-word' }}>{item.source}</td>
                      <td style={{ padding: '12px', wordWrap: 'break-word' }}>{item.test}</td>
                      <td style={{ padding: '12px' }}>
                        <span style={{
                          color: item.status === 'Покрыто' ? '#10b981' : 
                                 item.status === 'Ожидает' ? '#f59e0b' : '#94a3b8'
                        }}>
                          {item.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          
          {/* MoSCoW Приоритизация */}
          <div style={{
            background: 'rgba(0,0,0,0.3)',
            borderRadius: '16px',
            padding: 'clamp(16px, 4vw, 20px)'
          }}>
            <div style={{ fontWeight: 'bold', marginBottom: '16px', fontSize: 'clamp(14px, 3.5vw, 16px)' }}>Приоритизация по MoSCoW</div>
            <div style={{ display: 'grid', gap: '12px' }}>
              {Object.entries(moscowPriorities).map(([key, value]) => (
                <div key={key} style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px',
                  padding: 'clamp(10px, 3vw, 12px)',
                  background: `rgba(${key === 'Must' ? '239,68,68' : 
                                   key === 'Should' ? '245,158,11' : 
                                   key === 'Could' ? '16,185,129' : '107,114,128'}, 0.1)`,
                  borderRadius: '12px',
                  flexWrap: 'wrap'
                }}>
                  <div style={{
                    minWidth: '100px',
                    fontWeight: 'bold',
                    color: value.color,
                    fontSize: 'clamp(12px, 3vw, 14px)'
                  }}>
                    {key === 'Must' ? 'Обязательно' : 
                     key === 'Should' ? 'Важно' : 
                     key === 'Could' ? 'Можно' : 'Не сейчас'}
                  </div>
                  <div style={{ flex: 1, fontSize: 'clamp(11px, 3vw, 13px)' }}>{value.desc}</div>
                  <div style={{
                    width: '150px',
                    background: 'rgba(255,255,255,0.1)',
                    borderRadius: '8px',
                    height: '8px',
                    overflow: 'hidden'
                  }}>
                    <div style={{
                      width: `${key === 'Must' ? 40 : key === 'Should' ? 30 : key === 'Could' ? 20 : 10}%`,
                      height: '100%',
                      background: value.color
                    }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
      
      {/* Лучшие практики */}
      <div style={{
        marginTop: 'clamp(24px, 6vw, 32px)',
        background: 'linear-gradient(135deg, rgba(102,126,234,0.1), rgba(118,75,162,0.1))',
        borderRadius: '16px',
        padding: 'clamp(16px, 4vw, 20px)',
        fontSize: 'clamp(11px, 3vw, 13px)'
      }}>
        <div style={{ fontWeight: 'bold', marginBottom: '12px', color: '#667eea', fontSize: 'clamp(13px, 3.5vw, 15px)' }}>
          Лучшие практики анализа требований:
        </div>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 250px), 1fr))', 
          gap: '12px' 
        }}>
          <div>✓ Вовлекайте стейкхолдеров на ранних этапах и постоянно</div>
          <div>✓ Используйте SMART критерии для валидации</div>
          <div>✓ Ведите матрицу трассировки</div>
          <div>✓ Приоритизируйте методом MoSCoW</div>
          <div>✓ Документируйте допущения и ограничения</div>
          <div>✓ Регулярно проводите ревью требований</div>
        </div>
      </div>
      
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @media (max-width: 768px) {
          .mobile-menu-button {
            display: block !important;
          }
          
          .mobile-menu {
            display: ${isMobileMenuOpen ? 'flex' : 'none'} !important;
          }
        }
        
        /* Плавные переходы для всех элементов */
        * {
          transition: all 0.2s ease;
        }
        
        /* Улучшенная читаемость на мобильных */
        @media (max-width: 480px) {
          button, input, select, textarea {
            font-size: 16px !important; /* Предотвращает масштабирование на iOS */
          }
        }
        
        /* Стили для скролла на мобильных */
        ::-webkit-scrollbar {
          width: 8px;
          height: 8px;
        }
        
        ::-webkit-scrollbar-track {
          background: rgba(255,255,255,0.1);
          border-radius: 10px;
        }
        
        ::-webkit-scrollbar-thumb {
          background: rgba(102,126,234,0.5);
          border-radius: 10px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: rgba(102,126,234,0.8);
        }
      `}</style>
    </div>
  );
};

export default RequirementsAnalysisDemo;