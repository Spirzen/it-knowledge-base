import React, { useState, useCallback } from 'react';

const TestingBasicsDemo = () => {
  const [activeTab, setActiveTab] = useState('levels');
  const [testResults, setTestResults] = useState([]);
  const [isRunningTests, setIsRunningTests] = useState(false);
  const [selectedTestCase, setSelectedTestCase] = useState(null);
  const [bugTracking, setBugTracking] = useState([
    { id: 1, title: 'Ошибка авторизации при пустом пароле', severity: 'Critical', status: 'Open', priority: 'High' },
    { id: 2, title: 'Некорректное отображение на мобильных устройствах', severity: 'Medium', status: 'In Progress', priority: 'Medium' },
    { id: 3, title: 'Медленная загрузка страницы с отчетами', severity: 'Low', status: 'Fixed', priority: 'Low' }
  ]);
  
  const testCases = [
    {
      id: 1,
      name: 'TC-001: Авторизация с валидными данными',
      type: 'Функциональное',
      steps: [
        'Открыть страницу логина',
        'Ввести корректный email: user@example.com',
        'Ввести корректный пароль: 123456',
        'Нажать кнопку "Войти"'
      ],
      expectedResult: 'Пользователь перенаправляется на главную страницу',
      actualResult: '',
      status: 'pending',
      automation: true
    },
    {
      id: 2,
      name: 'TC-002: Авторизация с невалидным паролем',
      type: 'Функциональное',
      steps: [
        'Открыть страницу логина',
        'Ввести корректный email: user@example.com',
        'Ввести неверный пароль: wrongpass',
        'Нажать кнопку "Войти"'
      ],
      expectedResult: 'Отображается сообщение об ошибке "Неверный пароль"',
      actualResult: '',
      status: 'pending',
      automation: true
    },
    {
      id: 3,
      name: 'TC-003: Поиск товаров (нагрузочный тест)',
      type: 'Нагрузочное',
      steps: [
        'Выполнить 1000 поисковых запросов параллельно',
        'Измерить время отклика',
        'Проверить точность результатов'
      ],
      expectedResult: 'Время отклика < 200 мс, 100% точность',
      actualResult: '',
      status: 'pending',
      automation: true
    }
  ];
  
  const testLevels = [
    {
      level: 'Unit testing',
      icon: '🧪',
      description: 'Тестирование отдельных модулей/функций изолированно',
      tools: 'Jest, JUnit, PyTest, NUnit',
      who: 'Разработчики',
      when: 'Во время разработки',
      example: 'Проверка функции сложения чисел: 2+2=4'
    },
    {
      level: 'Integration testing',
      icon: '🔗',
      description: 'Проверка взаимодействия между компонентами',
      tools: 'Postman, SoapUI, TestContainers',
      who: 'Разработчики, QA',
      when: 'После unit-тестов',
      example: 'Проверка API: запрос → база данных → ответ'
    },
    {
      level: 'System testing',
      icon: '🖥️',
      description: 'Тестирование всей системы в целом',
      tools: 'Selenium, Cypress, Playwright',
      who: 'QA команда',
      when: 'После интеграции всех компонентов',
      example: 'E2E тест: регистрация → покупка → оплата'
    },
    {
      level: 'Acceptance testing',
      icon: '✅',
      description: 'Проверка соответствия требованиям заказчика',
      tools: 'Cucumber, FitNesse',
      who: 'Заказчик, QA, BA',
      when: 'Перед релизом',
      example: 'UAT: пользователь выполняет бизнес-сценарии'
    }
  ];
  
  const testTypes = [
    { name: 'Функциональное', icon: '⚙️', desc: 'Проверка соответствия функциональным требованиям' },
    { name: 'Нагрузочное', icon: '📊', desc: 'Проверка производительности под нагрузкой' },
    { name: 'UI/UX', icon: '🎨', desc: 'Проверка интерфейса и удобства использования' },
    { name: 'Безопасности', icon: '🔒', desc: 'Поиск уязвимостей и проверка защиты' },
    { name: 'Совместимости', icon: '🌐', desc: 'Проверка работы в разных браузерах/ОС' },
    { name: 'Регрессионное', icon: '🔄', desc: 'Проверка, что новый код не сломал старый' }
  ];
  
  const testDesignTech = [
    {
      name: 'Эквивалентное разделение',
      desc: 'Разделение входных данных на классы эквивалентности',
      example: 'Возраст 0-120: тестируем 30, 60, 90 вместо всех значений'
    },
    {
      name: 'Анализ граничных значений',
      desc: 'Тестирование границ допустимых диапазонов',
      example: 'Пароль 6-20 символов: тестируем 5, 6, 20, 21 символ'
    },
    {
      name: 'Попарное тестирование',
      desc: 'Тестирование комбинаций параметров',
      example: 'ОС (Win/Mac) × Браузер (Chrome/Firefox) = 4 комбинации'
    },
    {
      name: 'State transition',
      desc: 'Тестирование переходов между состояниями',
      example: 'Заказ: Новый → Оплачен → Отправлен → Доставлен'
    }
  ];
  
  const [testMetrics, setTestMetrics] = useState({
    total: 120,
    passed: 95,
    failed: 15,
    blocked: 5,
    automationRate: 65
  });
  
  const runTest = useCallback((testCase) => {
    setIsRunningTests(true);
    setSelectedTestCase(testCase.id);
    
    setTimeout(() => {
      const randomResult = Math.random() > 0.3;
      const result = {
        ...testCase,
        actualResult: randomResult ? testCase.expectedResult : 'Ошибка: ожидаемый результат не достигнут',
        status: randomResult ? 'passed' : 'failed'
      };
      
      setTestResults(prev => [...prev, result]);
      setTestCases(prev => prev.map(tc => 
        tc.id === testCase.id ? result : tc
      ));
      
      setIsRunningTests(false);
      
      if (!randomResult) {
        setBugTracking(prev => [...prev, {
          id: prev.length + 1,
          title: `Баг в тесте: ${testCase.name}`,
          severity: 'Medium',
          status: 'Open',
          priority: 'High'
        }]);
      }
    }, 2000);
  }, []);
  
  const [testCasesState, setTestCases] = useState(testCases);
  
  const testPyramid = [
    { name: 'Unit тесты', percent: 70, color: '#10b981', width: '70%' },
    { name: 'Интеграционные тесты', percent: 20, color: '#3b82f6', width: '50%' },
    { name: 'E2E тесты', percent: 10, color: '#ef4444', width: '30%' }
  ];
  
  return (
    <div style={{
      fontFamily: 'system-ui, -apple-system, "Segoe UI", Roboto, sans-serif',
      maxWidth: '1400px',
      margin: '0 auto',
      padding: '16px 12px',
      background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
      borderRadius: '0',
      boxShadow: 'none',
      color: '#e2e8f0',
      boxSizing: 'border-box'
    }}>
      
      {/* Заголовок */}
      <div style={{ textAlign: 'center', marginBottom: '24px' }}>
        <h1 style={{ 
          fontSize: 'clamp(1.8rem, 5vw, 2.5rem)',
          margin: 0,
          background: 'linear-gradient(135deg, #10b981 0%, #3b82f6 50%, #8b5cf6 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          lineHeight: '1.2'
        }}>
          Основы тестирования ПО
        </h1>
        <p style={{ color: '#94a3b8', marginTop: '8px', fontSize: 'clamp(0.9rem, 2.5vw, 1rem)' }}>
          Обеспечение качества: от unit-тестов до acceptance testing
        </p>
      </div>
      
      {/* Навигация */}
      <div style={{
        display: 'flex',
        gap: '8px',
        marginBottom: '20px',
        borderBottom: '2px solid rgba(255,255,255,0.1)',
        paddingBottom: '12px',
        flexWrap: 'wrap',
        justifyContent: 'center'
      }}>
        {[
          { id: 'levels', name: 'Уровни' },
          { id: 'types', name: 'Типы' },
          { id: 'testcases', name: 'Test Cases' },
          { id: 'bugs', name: 'Баги' },
          { id: 'metrics', name: 'Метрики' }
        ].map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            style={{
              padding: '8px 16px',
              background: activeTab === tab.id ? 'linear-gradient(135deg, #10b981, #059669)' : 'rgba(255,255,255,0.05)',
              border: 'none',
              borderRadius: '8px',
              color: 'white',
              fontFamily: 'inherit',
              fontSize: '13px',
              cursor: 'pointer',
              transition: 'all 0.3s',
              whiteSpace: 'nowrap'
            }}
          >
            {tab.name}
          </button>
        ))}
      </div>
      
      {/* Уровни тестирования */}
      {activeTab === 'levels' && (
        <div style={{ animation: 'fadeIn 0.3s ease' }}>
          {/* Пирамида тестирования */}
          <div style={{
            background: 'rgba(0,0,0,0.3)',
            borderRadius: '16px',
            padding: '20px 16px',
            marginBottom: '24px',
            overflowX: 'auto'
          }}>
            <div style={{ fontWeight: 'bold', marginBottom: '20px', textAlign: 'center', fontSize: '1.1rem' }}>
              Пирамида тестирования
            </div>
            <div style={{ position: 'relative', height: '220px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              {/* Unit тесты */}
              <div style={{ 
                width: '90%', maxWidth: '500px', marginBottom: '12px', zIndex: 3 
              }}>
                <div style={{
                  width: '100%',
                  background: '#10b981',
                  padding: '12px',
                  borderRadius: '8px',
                  textAlign: 'center',
                  fontWeight: 'bold',
                  fontSize: 'clamp(12px, 3vw, 15px)',
                  boxShadow: '0 4px 6px rgba(0,0,0,0.2)'
                }}>
                  Unit тесты (70%)
                </div>
              </div>
              
              {/* Интеграционные тесты */}
              <div style={{ 
                width: '70%', maxWidth: '400px', marginBottom: '12px', zIndex: 2 
              }}>
                <div style={{
                  width: '100%',
                  background: '#3b82f6',
                  padding: '10px',
                  borderRadius: '8px',
                  textAlign: 'center',
                  fontWeight: 'bold',
                  fontSize: 'clamp(12px, 3vw, 15px)',
                  boxShadow: '0 4px 6px rgba(0,0,0,0.2)'
                }}>
                  Интеграционные тесты (20%)
                </div>
              </div>
              
              {/* E2E тесты */}
              <div style={{ 
                width: '50%', maxWidth: '300px', marginBottom: '12px', zIndex: 1 
              }}>
                <div style={{
                  width: '100%',
                  background: '#ef4444',
                  padding: '8px',
                  borderRadius: '8px',
                  textAlign: 'center',
                  fontWeight: 'bold',
                  fontSize: 'clamp(12px, 3vw, 15px)',
                  boxShadow: '0 4px 6px rgba(0,0,0,0.2)'
                }}>
                  E2E тесты (10%)
                </div>
              </div>
            </div>
            <div style={{ fontSize: '12px', textAlign: 'center', marginTop: '16px', color: '#94a3b8' }}>
              💡 Чем выше уровень, тем меньше тестов, но выше стоимость их поддержки
            </div>
          </div>
          
          {/* Уровни детально */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', // Снижен минимальный размер
            gap: '16px'
          }}>
            {testLevels.map(level => (
              <div key={level.level} style={{
                background: 'rgba(0,0,0,0.3)',
                borderRadius: '16px',
                padding: '16px',
                transition: 'transform 0.3s'
              }}>
                <div style={{ fontSize: '32px', marginBottom: '12px', textAlign: 'center' }}>{level.icon}</div>
                <div style={{ fontSize: '1.1rem', fontWeight: 'bold', marginBottom: '8px', color: '#10b981', textAlign: 'center' }}>
                  {level.level}
                </div>
                <div style={{ fontSize: '0.9rem', marginBottom: '12px', color: '#94a3b8', textAlign: 'center' }}>
                  {level.description}
                </div>
                <div style={{ fontSize: '0.85rem', marginBottom: '4px' }}>
                  <strong>Инструменты:</strong> {level.tools}
                </div>
                <div style={{ fontSize: '0.85rem', marginBottom: '4px' }}>
                  <strong>Кто:</strong> {level.who}
                </div>
                <div style={{ fontSize: '0.85rem', marginBottom: '4px' }}>
                  <strong>Когда:</strong> {level.when}
                </div>
                <div style={{ fontSize: '0.8rem', marginTop: '8px', padding: '8px', background: 'rgba(16,185,129,0.1)', borderRadius: '8px' }}>
                  Пример: {level.example}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      
      {/* Типы тестирования */}
      {activeTab === 'types' && (
        <div style={{ animation: 'fadeIn 0.3s ease' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '16px',
            marginBottom: '24px'
          }}>
            {testTypes.map(type => (
              <div key={type.name} style={{
                background: 'rgba(0,0,0,0.3)',
                borderRadius: '12px',
                padding: '16px',
                border: '1px solid rgba(16,185,129,0.2)',
                textAlign: 'center'
              }}>
                <div style={{ fontSize: '24px', marginBottom: '8px' }}>{type.icon}</div>
                <div style={{ fontWeight: 'bold', marginBottom: '4px', fontSize: '1rem' }}>{type.name}</div>
                <div style={{ fontSize: '0.85rem', color: '#94a3b8' }}>{type.desc}</div>
              </div>
            ))}
          </div>
          
          {/* Техники тест-дизайна */}
          <div style={{
            background: 'rgba(0,0,0,0.3)',
            borderRadius: '16px',
            padding: '20px 16px'
          }}>
            <div style={{ fontWeight: 'bold', marginBottom: '16px', fontSize: '1.2rem' }}>
              Техники тест-дизайна
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '16px' }}>
              {testDesignTech.map(tech => (
                <div key={tech.name} style={{
                  background: 'rgba(59,130,246,0.1)',
                  borderRadius: '12px',
                  padding: '16px'
                }}>
                  <div style={{ fontWeight: 'bold', marginBottom: '8px', color: '#3b82f6', fontSize: '1rem' }}>{tech.name}</div>
                  <div style={{ fontSize: '0.9rem', marginBottom: '8px' }}>{tech.desc}</div>
                  <div style={{ fontSize: '0.8rem', color: '#94a3b8' }}>Пример: {tech.example}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
      
      {/* Test Cases */}
      {activeTab === 'testcases' && (
        <div style={{ animation: 'fadeIn 0.3s ease' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '20px'
          }}>
            {testCasesState.map(testCase => (
              <div key={testCase.id} style={{
                background: 'rgba(0,0,0,0.3)',
                borderRadius: '16px',
                padding: '20px',
                border: `2px solid ${
                  testCase.status === 'passed' ? '#10b981' :
                  testCase.status === 'failed' ? '#ef4444' : 'rgba(255,255,255,0.1)'
                }`
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
                  <div style={{ fontWeight: 'bold', fontSize: '1.1rem', flex: 1, paddingRight: '8px' }}>{testCase.name}</div>
                  <div style={{
                    padding: '4px 8px',
                    background: testCase.type === 'Функциональное' ? 'rgba(59,130,246,0.2)' : 'rgba(245,158,11,0.2)',
                    borderRadius: '6px',
                    fontSize: '11px',
                    alignSelf: 'flex-start'
                  }}>
                    {testCase.type}
                  </div>
                </div>
                
                <div style={{ marginBottom: '12px' }}>
                  <div style={{ fontSize: '0.85rem', fontWeight: 'bold', marginBottom: '4px' }}>Шаги:</div>
                  <ol style={{ margin: 0, paddingLeft: '20px', fontSize: '0.85rem', lineHeight: '1.4' }}>
                    {testCase.steps.map((step, idx) => (
                      <li key={idx} style={{ marginBottom: '4px' }}>{step}</li>
                    ))}
                  </ol>
                </div>
                
                <div style={{ fontSize: '0.85rem', marginBottom: '8px' }}>
                  <span style={{ fontWeight: 'bold' }}>Ожидаемый:</span> {testCase.expectedResult}
                </div>
                
                {testCase.actualResult && (
                  <div style={{ fontSize: '0.85rem', marginBottom: '8px', padding: '8px', background: 'rgba(0,0,0,0.2)', borderRadius: '8px' }}>
                    <span style={{ fontWeight: 'bold' }}>Фактический:</span> {testCase.actualResult}
                  </div>
                )}
                
                <div style={{ display: 'flex', gap: '8px', marginTop: '16px', alignItems: 'center' }}>
                  <button
                    onClick={() => runTest(testCase)}
                    disabled={isRunningTests && selectedTestCase === testCase.id}
                    style={{
                      flex: 1,
                      padding: '10px',
                      background: testCase.status === 'passed' ? '#10b981' : 
                                 testCase.status === 'failed' ? '#ef4444' :
                                 'linear-gradient(135deg, #3b82f6, #2563eb)',
                      border: 'none',
                      borderRadius: '8px',
                      color: 'white',
                      cursor: isRunningTests ? 'not-allowed' : 'pointer',
                      fontSize: '0.9rem',
                      fontWeight: 'bold'
                    }}
                  >
                    {isRunningTests && selectedTestCase === testCase.id ? 'Запуск...' :
                     testCase.status === 'passed' ? '✓ Пройден' :
                     testCase.status === 'failed' ? '✗ Провален' : '▶ Запустить'}
                  </button>
                  
                  {testCase.automation && (
                    <div style={{
                      padding: '4px 8px',
                      background: 'rgba(16,185,129,0.2)',
                      borderRadius: '6px',
                      fontSize: '11px',
                      alignSelf: 'center'
                    }}>
                      Автотест
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      
      {/* Баг-трекинг */}
      {activeTab === 'bugs' && (
        <div style={{ animation: 'fadeIn 0.3s ease' }}>
          <div style={{
            background: 'rgba(0,0,0,0.3)',
            borderRadius: '16px',
            padding: '20px 16px'
          }}>
            <div style={{ fontWeight: 'bold', marginBottom: '16px', fontSize: '1.2rem' }}>
              Жизненный цикл бага
            </div>
            
            {/* Жизненный цикл бага */}
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              marginBottom: '32px',
              gap: '8px'
            }}>
              {['Open', 'In Progress', 'Fixed', 'Verified', 'Closed'].map((stage, idx) => (
                <React.Fragment key={stage}>
                  <div style={{
                    textAlign: 'center',
                    padding: '8px 12px',
                    background: 'rgba(59,130,246,0.2)',
                    borderRadius: '8px',
                    minWidth: '70px',
                    fontSize: '0.85rem'
                  }}>
                    <div style={{ fontWeight: 'bold' }}>{stage}</div>
                  </div>
                  {idx < 4 && <div style={{ color: '#3b82f6', fontSize: '1.2rem' }}>→</div>}
                </React.Fragment>
              ))}
            </div>
            
            {/* Список багов */}
            <div style={{ fontWeight: 'bold', marginBottom: '12px' }}>Текущие баги:</div>
            <div style={{ display: 'grid', gap: '12px' }}>
              {bugTracking.map(bug => (
                <div key={bug.id} style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-start',
                  alignItems: 'stretch',
                  padding: '12px',
                  background: 'rgba(0,0,0,0.2)',
                  borderRadius: '8px',
                  gap: '8px'
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '8px' }}>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ fontWeight: 'bold', fontSize: '1rem', wordBreak: 'break-word' }}>{bug.title}</div>
                      <div style={{ fontSize: '0.8rem', color: '#94a3b8' }}>ID: BUG-{bug.id}</div>
                    </div>
                    <div style={{
                      padding: '4px 8px',
                      background: bug.severity === 'Critical' ? 'rgba(239,68,68,0.2)' :
                                 bug.severity === 'Medium' ? 'rgba(245,158,11,0.2)' : 'rgba(16,185,129,0.2)',
                      borderRadius: '6px',
                      fontSize: '0.75rem',
                      whiteSpace: 'nowrap'
                    }}>
                      {bug.severity}
                    </div>
                  </div>
                  
                  <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                    <div style={{
                      padding: '4px 8px',
                      background: bug.status === 'Open' ? 'rgba(239,68,68,0.2)' :
                                 bug.status === 'In Progress' ? 'rgba(245,158,11,0.2)' :
                                 bug.status === 'Fixed' ? 'rgba(16,185,129,0.2)' : 'rgba(107,114,128,0.2)',
                      borderRadius: '6px',
                      fontSize: '0.75rem',
                      whiteSpace: 'nowrap'
                    }}>
                      {bug.status}
                    </div>
                    <div style={{
                      padding: '4px 8px',
                      background: bug.priority === 'High' ? 'rgba(239,68,68,0.2)' : 'rgba(107,114,128,0.2)',
                      borderRadius: '6px',
                      fontSize: '0.75rem',
                      whiteSpace: 'nowrap'
                    }}>
                      Приоритет: {bug.priority}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
      
      {/* Метрики */}
      {activeTab === 'metrics' && (
        <div style={{ animation: 'fadeIn 0.3s ease' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '16px',
            marginBottom: '24px'
          }}>
            <div style={{
              background: 'rgba(0,0,0,0.3)',
              borderRadius: '16px',
              padding: '20px 16px',
              textAlign: 'center'
            }}>
              <div style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 'bold', color: '#10b981' }}>
                {testMetrics.passed}/{testMetrics.total}
              </div>
              <div style={{ fontSize: '0.9rem', marginTop: '8px' }}>Пройдено тестов</div>
              <div style={{ width: '100%', height: '6px', background: 'rgba(255,255,255,0.1)', borderRadius: '3px', marginTop: '12px', overflow: 'hidden' }}>
                <div style={{
                  width: `${(testMetrics.passed / testMetrics.total) * 100}%`,
                  height: '100%',
                  background: '#10b981'
                }} />
              </div>
            </div>
            
            <div style={{
              background: 'rgba(0,0,0,0.3)',
              borderRadius: '16px',
              padding: '20px 16px',
              textAlign: 'center'
            }}>
              <div style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 'bold', color: '#ef4444' }}>
                {testMetrics.failed}
              </div>
              <div style={{ fontSize: '0.9rem', marginTop: '8px' }}>Провалено</div>
            </div>
            
            <div style={{
              background: 'rgba(0,0,0,0.3)',
              borderRadius: '16px',
              padding: '20px 16px',
              textAlign: 'center'
            }}>
              <div style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 'bold', color: '#f59e0b' }}>
                {testMetrics.automationRate}%
              </div>
              <div style={{ fontSize: '0.9rem', marginTop: '8px' }}>Автоматизация</div>
            </div>
          </div>
          
          {/* Метрики качества */}
          <div style={{
            background: 'rgba(0,0,0,0.3)',
            borderRadius: '16px',
            padding: '20px 16px'
          }}>
            <div style={{ fontWeight: 'bold', marginBottom: '16px', fontSize: '1.2rem' }}>
              Ключевые метрики качества
            </div>
            <div style={{ display: 'grid', gap: '12px' }}>
              {[
                { name: 'Плотность дефектов', value: '2.3', unit: 'бага/KLOC', desc: 'Количество багов на 1000 строк кода' },
                { name: 'Эффективность тестов', value: '85', unit: '%', desc: 'Процент найденных багов' },
                { name: 'Покрытие кода', value: '78', unit: '%', desc: 'Процент кода, покрытого тестами' },
                { name: 'MTTF', value: '120', unit: 'часов', desc: 'Среднее время до отказа' }
              ].map(metric => (
                <div key={metric.name} style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  padding: '12px',
                  background: 'rgba(255,255,255,0.05)',
                  borderRadius: '8px',
                  gap: '8px'
                }}>
                  <div style={{ fontWeight: 'bold', fontSize: '1rem' }}>{metric.name}</div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', flexWrap: 'wrap', gap: '8px' }}>
                    <div style={{ fontSize: 'clamp(1.2rem, 4vw, 1.5rem)', fontWeight: 'bold', color: '#10b981' }}>
                      {metric.value}{metric.unit}
                    </div>
                    <div style={{ fontSize: '0.8rem', color: '#94a3b8', flex: 1 }}>{metric.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
      
      {/* Лучшие практики */}
      <div style={{
        marginTop: '24px',
        background: 'linear-gradient(135deg, rgba(16,185,129,0.1), rgba(59,130,246,0.1))',
        borderRadius: '16px',
        padding: '20px 16px',
        fontSize: '0.9rem'
      }}>
        <div style={{ fontWeight: 'bold', marginBottom: '12px', color: '#10b981' }}>
          Лучшие практики тестирования:
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '12px' }}>
          <div>✓ Пишите тесты рано (Shift-left testing)</div>
          <div>✓ Автоматизируйте регрессионные тесты</div>
          <div>✓ Используйте тест-дизайн техники</div>
          <div>✓ Поддерживайте тесты в актуальном состоянии</div>
          <div>✓ Анализируйте покрытие кода</div>
          <div>✓ Проводите code review тестов</div>
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
        
        /* Дополнительная настройка для очень маленьких экранов */
        @media (max-width: 480px) {
          h1 {
            font-size: 1.8rem !important;
          }
          button {
            padding: 8px 12px !important;
            font-size: 12px !important;
          }
        }
      `}</style>
    </div>
  );
};

export default TestingBasicsDemo;