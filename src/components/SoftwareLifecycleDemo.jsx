import React, { useState, useCallback, useEffect } from 'react';
import BrowserOnly from './BrowserOnly';

const SoftwareLifecycleDemo = () => {
  const [activePhase, setActivePhase] = useState(null);
  const [currentPhase, setCurrentPhase] = useState(null);
  const [projectProgress, setProjectProgress] = useState(0);
  const [phaseDetails, setPhaseDetails] = useState({});
  const [showMetrics, setShowMetrics] = useState(true);
  const [selectedModel, setSelectedModel] = useState('waterfall');
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const phases = [
    {
      id: 1,
      name: 'Планирование и инициация',
      shortName: 'Планирование',
      icon: '📋',
      color: '#3b82f6',
      duration: '2-4 недели',
      team: 'PM, Sponsor, Stakeholders',
      deliverables: 'Устав проекта, Business Case, Plan',
      activities: [
        'Определение целей и scope проекта',
        'Оценка ресурсов и бюджета',
        'Формирование команды',
        'Создание roadmap'
      ],
      tools: 'Jira, MS Project, Trello, Miro',
      risk: 'Низкий',
      cost: '5-10% от бюджета'
    },
    {
      id: 2,
      name: 'Анализ и сбор требований',
      shortName: 'Анализ',
      icon: '🔍',
      color: '#8b5cf6',
      duration: '3-6 недель',
      team: 'BA, Product Owner, Stakeholders',
      deliverables: 'SRS, User Stories, Use Cases',
      activities: [
        'Интервью с заказчиком',
        'Создание user stories',
        'Прототипирование интерфейсов',
        'Согласование требований'
      ],
      tools: 'Confluence, Jira, Figma, Draw.io',
      risk: 'Средний',
      cost: '10-15% от бюджета'
    },
    {
      id: 3,
      name: 'Проектирование архитектуры',
      shortName: 'Архитектура',
      icon: '🏗️',
      color: '#ec489a',
      duration: '4-8 недель',
      team: 'Architect, Tech Lead, Senior Devs',
      deliverables: 'Architecture Design, UML, ERD',
      activities: [
        'Выбор технологического стека',
        'Проектирование БД',
        'Создание API спецификаций',
        'Определение паттернов'
      ],
      tools: 'Draw.io, Lucidchart, PlantUML, Swagger',
      risk: 'Высокий',
      cost: '10-15% от бюджета'
    },
    {
      id: 4,
      name: 'Реализация (разработка)',
      shortName: 'Разработка',
      icon: '💻',
      color: '#10b981',
      duration: '8-24 недели',
      team: 'Devs, QA (preparation)',
      deliverables: 'Source Code, Unit Tests, API',
      activities: [
        'Написание кода',
        'Code review',
        'Unit тестирование',
        'Интеграция компонентов'
      ],
      tools: 'VS Code, Git, Docker, Jira, CI/CD',
      risk: 'Высокий',
      cost: '40-50% от бюджета'
    },
    {
      id: 5,
      name: 'Тестирование и верификация',
      shortName: 'Тестирование',
      icon: '🧪',
      color: '#f59e0b',
      duration: '4-8 недель',
      team: 'QA, Devs (fixes)',
      deliverables: 'Test Reports, Bug Reports',
      activities: [
        'Функциональное тестирование',
        'Нагрузочное тестирование',
        'Тестирование безопасности',
        'Regression testing'
      ],
      tools: 'Jest, Selenium, Postman, JMeter',
      risk: 'Средний',
      cost: '15-20% от бюджета'
    },
    {
      id: 6,
      name: 'Внедрение (деплой)',
      shortName: 'Деплой',
      icon: '🚀',
      color: '#ef4444',
      duration: '1-2 недели',
      team: 'DevOps, Devs, QA',
      deliverables: 'Deployed App, Migration Scripts',
      activities: [
        'Подготовка production окружения',
        'Миграция данных',
        'Deployment приложения',
        'Rollback план'
      ],
      tools: 'K8s, Docker, Jenkins, Terraform',
      risk: 'Очень высокий',
      cost: '5-10% от бюджета'
    },
    {
      id: 7,
      name: 'Эксплуатация и поддержка',
      shortName: 'Поддержка',
      icon: '🔄',
      color: '#06b6d4',
      duration: 'months-years',
      team: 'Support, DevOps, Devs (on-call)',
      deliverables: 'SLA, Monitoring, Patches',
      activities: [
        '7/7 мониторинг',
        'Исправление багов',
        'Performance optimization',
        'Customer support'
      ],
      tools: 'Grafana, Sentry, PagerDuty, Zendesk',
      risk: 'Низкий',
      cost: '10-15% годовых'
    },
    {
      id: 8,
      name: 'Модернизация/Вывод из эксплуатации',
      shortName: 'Модернизация',
      icon: '♻️',
      color: '#6b7280',
      duration: '4-12 недель',
      team: 'Architect, PM, DBA',
      deliverables: 'Migration Plan, Archive, Documentation',
      activities: [
        'Анализ устаревших компонентов',
        'Миграция на новую версию',
        'Архивация данных',
        'Отключение сервисов'
      ],
      tools: 'Migration tools, Backup solutions',
      risk: 'Высокий',
      cost: '5-10% от бюджета'
    }
  ];

  const models = {
    waterfall: {
      name: 'Waterfall (Каскадная)',
      description: 'Последовательное выполнение фаз, каждая следующая начинается после завершения предыдущей',
      pros: ['Простота управления', 'Четкие этапы', 'Хорошая документация'],
      cons: ['Сложно вносить изменения', 'Позднее тестирование', 'Долгий цикл']
    },
    agile: {
      name: 'Agile (Гибкая)',
      description: 'Итеративная разработка с постоянной обратной связью и адаптацией',
      pros: ['Быстрая реакция на изменения', 'Постоянная обратная связь', 'Ранний релиз MVP'],
      cons: ['Меньше документации', 'Требует дисциплины', 'Сложность в оценке']
    },
    vmodel: {
      name: 'V-Model',
      description: 'Расширение waterfall с акцентом на верификацию и валидацию на каждом этапе',
      pros: ['Высокое качество', 'Раннее тестирование', 'Четкие критерии'],
      cons: ['Дорого', 'Негибкий', 'Подходит не для всех проектов']
    }
  };

  const simulateProject = useCallback(() => {
    let progress = 0;
    const totalPhases = phases.length;
    
    const interval = setInterval(() => {
      if (progress < totalPhases) {
        setCurrentPhase(progress);
        setActivePhase(progress);
        setProjectProgress(((progress + 1) / totalPhases) * 100);
        
        const phase = phases[progress];
        setPhaseDetails(prev => ({
          ...prev,
          [progress]: {
            startDate: new Date().toLocaleDateString(),
            status: 'completed',
            completionTime: `${Math.floor(Math.random() * 10) + 1} дней`
          }
        }));
        
        progress++;
      } else {
        clearInterval(interval);
        setCurrentPhase(null);
        setActivePhase(null);
      }
    }, 1500);
    
    return () => clearInterval(interval);
  }, [phases]);

  const resetProject = () => {
    setCurrentPhase(null);
    setActivePhase(null);
    setProjectProgress(0);
    setPhaseDetails({});
  };

  const renderContent = () => (
    <div style={{
      fontFamily: 'system-ui, -apple-system, "Segoe UI", Roboto, sans-serif',
      maxWidth: '1400px',
      margin: '1rem auto',
      background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
      borderRadius: '24px',
      padding: 'clamp(16px, 4vw, 24px)',
      boxShadow: '0 25px 50px rgba(0,0,0,0.3)',
      color: '#e2e8f0'
    }}>
      
      {/* Заголовок */}
      <div style={{ textAlign: 'center', marginBottom: 'clamp(24px, 5vw, 32px)' }}>
        <h1 style={{ 
          fontSize: 'clamp(1.5rem, 5vw, 2.5rem)', 
          margin: 0,
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text'
        }}>
          SDLC: Жизненный цикл ПО
        </h1>
        <p style={{ color: '#94a3b8', marginTop: '8px', fontSize: 'clamp(12px, 4vw, 16px)' }}>
          Software Development Life Cycle - от идеи до вывода из эксплуатации
        </p>
      </div>

      {/* Модели разработки */}
      <div style={{
        display: 'flex',
        gap: 'clamp(8px, 2vw, 12px)',
        marginBottom: '24px',
        justifyContent: 'center',
        flexWrap: 'wrap'
      }}>
        {Object.entries(models).map(([key, model]) => (
          <button
            key={key}
            onClick={() => setSelectedModel(key)}
            style={{
              padding: 'clamp(8px, 2vw, 10px) clamp(12px, 3vw, 20px)',
              background: selectedModel === key 
                ? 'linear-gradient(135deg, #667eea, #764ba2)'
                : 'rgba(255,255,255,0.1)',
              border: `1px solid ${selectedModel === key ? '#667eea' : 'rgba(255,255,255,0.2)'}`,
              borderRadius: '12px',
              color: 'white',
              fontFamily: 'inherit',
              fontSize: 'clamp(11px, 3vw, 14px)',
              fontWeight: selectedModel === key ? 'bold' : 'normal',
              cursor: 'pointer',
              transition: 'all 0.3s',
              whiteSpace: 'nowrap'
            }}
          >
            {isMobile && key !== selectedModel ? model.name.split(' ')[0] : model.name}
          </button>
        ))}
        
        <button
          onClick={simulateProject}
          disabled={currentPhase !== null}
          style={{
            padding: 'clamp(8px, 2vw, 10px) clamp(16px, 4vw, 24px)',
            background: 'linear-gradient(135deg, #10b981, #059669)',
            border: 'none',
            borderRadius: '12px',
            color: 'white',
            fontFamily: 'inherit',
            fontSize: 'clamp(12px, 3vw, 14px)',
            fontWeight: 'bold',
            cursor: currentPhase !== null ? 'not-allowed' : 'pointer',
            opacity: currentPhase !== null ? 0.5 : 1,
            whiteSpace: 'nowrap'
          }}
        >
          {isMobile ? 'Симуляция' : 'Симулировать проект'}
        </button>
        
        <button
          onClick={resetProject}
          style={{
            padding: 'clamp(8px, 2vw, 10px) clamp(16px, 4vw, 24px)',
            background: 'rgba(239,68,68,0.2)',
            border: '1px solid #ef4444',
            borderRadius: '12px',
            color: '#f87171',
            fontFamily: 'inherit',
            fontSize: 'clamp(12px, 3vw, 14px)',
            fontWeight: 'bold',
            cursor: 'pointer',
            whiteSpace: 'nowrap'
          }}
        >
          {isMobile ? '🔄 Сброс' : '🔄 Сброс'}
        </button>
      </div>

      {/* Прогресс проекта */}
      {projectProgress > 0 && (
        <div style={{
          marginBottom: '32px',
          background: 'rgba(0,0,0,0.3)',
          borderRadius: '12px',
          padding: 'clamp(12px, 3vw, 16px)'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', flexWrap: 'wrap', gap: '8px' }}>
            <span style={{ fontSize: 'clamp(12px, 3vw, 14px)' }}>Прогресс проекта</span>
            <span style={{ fontSize: 'clamp(12px, 3vw, 14px)', fontWeight: 'bold', color: '#10b981' }}>
              {Math.floor(projectProgress)}%
            </span>
          </div>
          <div style={{
            width: '100%',
            height: '8px',
            background: 'rgba(255,255,255,0.1)',
            borderRadius: '4px',
            overflow: 'hidden'
          }}>
            <div style={{
              width: `${projectProgress}%`,
              height: '100%',
              background: 'linear-gradient(90deg, #3b82f6, #10b981)',
              transition: 'width 0.5s ease'
            }} />
          </div>
        </div>
      )}

      {/* Модель описания */}
      <div style={{
        background: 'rgba(102,126,234,0.1)',
        borderRadius: '16px',
        padding: 'clamp(12px, 3vw, 16px)',
        marginBottom: '32px',
        borderLeft: `4px solid #667eea`
      }}>
        <div style={{ fontWeight: 'bold', marginBottom: '8px', fontSize: 'clamp(14px, 4vw, 16px)' }}>
          {models[selectedModel].name}
        </div>
        <div style={{ fontSize: 'clamp(12px, 3vw, 14px)', marginBottom: '12px', color: '#cbd5e1' }}>
          {models[selectedModel].description}
        </div>
        <div style={{ 
          display: 'flex', 
          flexDirection: isMobile ? 'column' : 'row', 
          gap: isMobile ? '12px' : '20px', 
          fontSize: 'clamp(11px, 3vw, 12px)' 
        }}>
          <div>
            <span style={{ color: '#10b981' }}>✓ Плюсы: </span>
            {models[selectedModel].pros.join(', ')}
          </div>
          <div>
            <span style={{ color: '#ef4444' }}>✗ Минусы: </span>
            {models[selectedModel].cons.join(', ')}
          </div>
        </div>
      </div>

      {/* Timeline фаз */}
      <div style={{
        display: 'flex',
        overflowX: 'auto',
        gap: 'clamp(8px, 2vw, 16px)',
        padding: 'clamp(12px, 3vw, 20px)',
        marginBottom: '32px',
        background: 'rgba(0,0,0,0.2)',
        borderRadius: '20px',
        WebkitOverflowScrolling: 'touch',
        scrollbarWidth: 'thin'
      }}>
        {phases.map((phase, idx) => (
          <div
            key={phase.id}
            onClick={() => setActivePhase(activePhase === idx ? null : idx)}
            style={{
              minWidth: isMobile ? '80px' : '120px',
              textAlign: 'center',
              cursor: 'pointer',
              transition: 'all 0.3s',
              opacity: currentPhase !== null && idx > currentPhase ? 0.5 : 1,
              flexShrink: 0
            }}
          >
            <div style={{
              width: isMobile ? '60px' : '80px',
              height: isMobile ? '60px' : '80px',
              margin: '0 auto 12px',
              background: activePhase === idx 
                ? `linear-gradient(135deg, ${phase.color}, ${phase.color}dd)`
                : `rgba(255,255,255,0.1)`,
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: isMobile ? '28px' : '36px',
              border: activePhase === idx ? `3px solid ${phase.color}` : 'none',
              transform: activePhase === idx ? 'scale(1.1)' : 'scale(1)',
              transition: 'all 0.3s',
              boxShadow: activePhase === idx ? `0 0 20px ${phase.color}` : 'none'
            }}>
              {phase.icon}
            </div>
            <div style={{ 
              fontSize: isMobile ? '10px' : '12px', 
              fontWeight: activePhase === idx ? 'bold' : 'normal',
              color: activePhase === idx ? phase.color : '#94a3b8'
            }}>
              {isMobile ? phase.shortName : phase.name.split(' ')[0]}
            </div>
            {phaseDetails[idx] && (
              <div style={{
                fontSize: '10px',
                color: '#10b981',
                marginTop: '4px'
              }}>
                ✓
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Детальная информация о фазе */}
      {activePhase !== null && (
        <div style={{
          background: 'rgba(0,0,0,0.4)',
          borderRadius: '20px',
          padding: 'clamp(16px, 4vw, 24px)',
          marginBottom: '32px',
          animation: 'fadeIn 0.5s ease'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: 'clamp(8px, 3vw, 12px)',
            marginBottom: '20px',
            flexWrap: 'wrap'
          }}>
            <div style={{
              fontSize: isMobile ? '36px' : '48px',
              background: `linear-gradient(135deg, ${phases[activePhase].color}, ${phases[activePhase].color}dd)`,
              borderRadius: '50%',
              width: isMobile ? '50px' : '70px',
              height: isMobile ? '50px' : '70px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              {phases[activePhase].icon}
            </div>
            <div>
              <h2 style={{ margin: 0, fontSize: 'clamp(18px, 5vw, 24px)' }}>
                {phases[activePhase].name}
              </h2>
              <div style={{ color: '#94a3b8', fontSize: 'clamp(12px, 3vw, 14px)' }}>
                Фаза {activePhase + 1} из {phases.length}
              </div>
            </div>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '20px'
          }}>
            <div>
              <div style={{ fontWeight: 'bold', color: '#667eea', marginBottom: '8px' }}>
                Длительность
              </div>
              <div style={{ fontSize: 'clamp(12px, 3vw, 14px)' }}>{phases[activePhase].duration}</div>
              
              <div style={{ fontWeight: 'bold', color: '#667eea', marginTop: '16px', marginBottom: '8px' }}>
                Команда
              </div>
              <div style={{ fontSize: 'clamp(12px, 3vw, 14px)' }}>{phases[activePhase].team}</div>
              
              <div style={{ fontWeight: 'bold', color: '#667eea', marginTop: '16px', marginBottom: '8px' }}>
                Результаты
              </div>
              <div style={{ fontSize: 'clamp(12px, 3vw, 14px)' }}>{phases[activePhase].deliverables}</div>
            </div>

            <div>
              <div style={{ fontWeight: 'bold', color: '#667eea', marginBottom: '8px' }}>
                Инструменты
              </div>
              <div style={{ fontSize: 'clamp(12px, 3vw, 14px)' }}>{phases[activePhase].tools}</div>
              
              <div style={{ fontWeight: 'bold', color: '#667eea', marginTop: '16px', marginBottom: '8px' }}>
                Риск
              </div>
              <div style={{ 
                fontSize: 'clamp(12px, 3vw, 14px)',
                color: phases[activePhase].risk === 'Высокий' ? '#f87171' : 
                       phases[activePhase].risk === 'Средний' ? '#fbbf24' : '#10b981'
              }}>
                {phases[activePhase].risk}
              </div>
              
              <div style={{ fontWeight: 'bold', color: '#667eea', marginTop: '16px', marginBottom: '8px' }}>
                Затраты
              </div>
              <div style={{ fontSize: 'clamp(12px, 3vw, 14px)' }}>{phases[activePhase].cost}</div>
            </div>

            <div>
              <div style={{ fontWeight: 'bold', color: '#667eea', marginBottom: '8px' }}>
                Ключевые активности
              </div>
              <ul style={{ margin: 0, paddingLeft: '20px' }}>
                {phases[activePhase].activities.map((activity, idx) => (
                  <li key={idx} style={{ fontSize: 'clamp(12px, 3vw, 14px)', marginBottom: '4px' }}>{activity}</li>
                ))}
              </ul>
            </div>
          </div>

          {phaseDetails[activePhase] && (
            <div style={{
              marginTop: '20px',
              padding: '12px',
              background: 'rgba(16,185,129,0.1)',
              borderRadius: '12px',
              fontSize: 'clamp(11px, 3vw, 12px)'
            }}>
              Фаза завершена за {phaseDetails[activePhase].completionTime}
            </div>
          )}
        </div>
      )}

      {/* Метрики и KPI */}
      {showMetrics && (
        <div style={{
          background: 'rgba(0,0,0,0.3)',
          borderRadius: '16px',
          padding: 'clamp(16px, 4vw, 20px)',
          marginBottom: '24px'
        }}>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '16px',
            flexWrap: 'wrap',
            gap: '8px'
          }}>
            <div style={{ fontWeight: 'bold', color: '#667eea', fontSize: 'clamp(14px, 4vw, 16px)' }}>
              Метрики эффективности
            </div>
            <button
              onClick={() => setShowMetrics(false)}
              style={{
                background: 'none',
                border: 'none',
                color: '#94a3b8',
                cursor: 'pointer',
                fontSize: 'clamp(11px, 3vw, 12px)'
              }}
            >
              Скрыть
            </button>
          </div>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr 1fr' : 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: 'clamp(12px, 3vw, 16px)'
          }}>
            <div>
              <div style={{ fontSize: 'clamp(11px, 3vw, 12px)', color: '#94a3b8' }}>CPI</div>
              <div style={{ fontSize: 'clamp(20px, 5vw, 24px)', fontWeight: 'bold', color: '#10b981' }}>1.02</div>
            </div>
            <div>
              <div style={{ fontSize: 'clamp(11px, 3vw, 12px)', color: '#94a3b8' }}>SPI</div>
              <div style={{ fontSize: 'clamp(20px, 5vw, 24px)', fontWeight: 'bold', color: '#fbbf24' }}>0.95</div>
            </div>
            <div>
              <div style={{ fontSize: 'clamp(11px, 3vw, 12px)', color: '#94a3b8' }}>Defect Density</div>
              <div style={{ fontSize: 'clamp(20px, 5vw, 24px)', fontWeight: 'bold', color: '#f87171' }}>2.3/KLOC</div>
            </div>
            <div>
              <div style={{ fontSize: 'clamp(11px, 3vw, 12px)', color: '#94a3b8' }}>Code Coverage</div>
              <div style={{ fontSize: 'clamp(20px, 5vw, 24px)', fontWeight: 'bold', color: '#8b5cf6' }}>87%</div>
            </div>
          </div>
        </div>
      )}

      {/* Best practices */}
      <div style={{
        background: 'linear-gradient(135deg, rgba(102,126,234,0.1), rgba(118,75,162,0.1))',
        borderRadius: '16px',
        padding: 'clamp(16px, 4vw, 20px)',
        fontSize: 'clamp(12px, 3vw, 14px)'
      }}>
        <div style={{ fontWeight: 'bold', marginBottom: '12px', color: '#667eea', fontSize: 'clamp(14px, 4vw, 16px)' }}>
          Лучшие практики для успешного проекта:
        </div>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(250px, 1fr))', 
          gap: 'clamp(8px, 2vw, 12px)' 
        }}>
          <div>✓ Четкое определение требований на старте</div>
          <div>✓ Регулярные встречи с командой (Daily stand-ups)</div>
          <div>✓ Автоматизация CI/CD pipelines</div>
          <div>✓ Непрерывное тестирование (Shift-left testing)</div>
          <div>✓ Ведение технической документации</div>
          <div>✓ Пост-мортем анализ после инцидентов</div>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @media (max-width: 480px) {
          div {
            word-break: break-word;
          }
        }
      `}</style>
    </div>
  );

  return (
    <BrowserOnly fallback={<div style={{padding: '20px', textAlign: 'center'}}>Загрузка интерактивного компонента...</div>}>
      {() => renderContent()}
    </BrowserOnly>
  );
};

export default SoftwareLifecycleDemo;