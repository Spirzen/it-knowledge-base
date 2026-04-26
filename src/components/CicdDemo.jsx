import React, { useState, useEffect } from 'react';

const CicdDemo = () => {
  const [activeTab, setActiveTab] = useState('pipeline');
  const [pipelineStatus, setPipelineStatus] = useState('idle');
  const [currentStep, setCurrentStep] = useState(null);
  const [logMessages, setLogMessages] = useState([]);
  const [deployments, setDeployments] = useState([]);
  const [testResults, setTestResults] = useState({ passed: 0, failed: 0, total: 0 });
  const [buildNumber, setBuildNumber] = useState(1);
  const [selectedEnv, setSelectedEnv] = useState('staging');
  const [autoDeploy, setAutoDeploy] = useState(false);
  
  const [environments, setEnvironments] = useState({
    development: {
      version: 'v1.0.0',
      status: 'stable',
      lastDeploy: '2024-01-15 10:30:00',
      url: 'dev.myapp.com'
    },
    staging: {
      version: 'v1.1.0-beta',
      status: 'testing',
      lastDeploy: '2024-01-20 14:20:00',
      url: 'staging.myapp.com'
    },
    production: {
      version: 'v1.0.5',
      status: 'live',
      lastDeploy: '2024-01-18 09:15:00',
      url: 'myapp.com'
    }
  });

  const runTests = async () => {
    addLogMessage('🧪 Запуск тестов...', 'info');
    await delay(800);
    
    const tests = [
      { name: 'Unit тесты', passed: Math.random() > 0.2, time: '0.5s' },
      { name: 'Интеграционные тесты', passed: Math.random() > 0.3, time: '1.2s' },
      { name: 'E2E тесты', passed: Math.random() > 0.1, time: '3.5s' },
      { name: 'Тесты производительности', passed: Math.random() > 0.4, time: '2.1s' },
      { name: 'Тесты безопасности', passed: Math.random() > 0.15, time: '1.8s' }
    ];
    
    const passed = tests.filter(t => t.passed).length;
    const failed = tests.length - passed;
    
    setTestResults({ passed, failed, total: tests.length });
    
    tests.forEach(test => {
      addLogMessage(
        `${test.passed ? '✅' : '❌'} ${test.name} - ${test.passed ? 'Пройден' : 'Провален'} (${test.time})`,
        test.passed ? 'success' : 'error'
      );
    });
    
    addLogMessage(`Результаты: ${passed} пройдено, ${failed} провалено из ${tests.length}`, 
                  failed === 0 ? 'success' : 'warning');
    
    return failed === 0;
  };

  const runBuild = async () => {
    addLogMessage('Начало сборки проекта...', 'info');
    await delay(500);
    
    const steps = [
      'Установка зависимостей (npm install)',
      'Линтинг кода (ESLint)',
      'Транспиляция TypeScript',
      'Минификация кода (Webpack)',
      'Оптимизация ассетов',
      'Генерация source maps',
      'Создание Docker образа'
    ];
    
    for (let step of steps) {
      addLogMessage(`  → ${step}...`, 'info');
      await delay(300);
      addLogMessage(`  ✓ ${step} завершен`, 'success');
    }
    
    const newBuildNumber = buildNumber + 1;
    setBuildNumber(newBuildNumber);
    addLogMessage(`✅ Сборка #${newBuildNumber} успешно завершена!`, 'success');
    return true;
  };

  const deployToEnvironment = async (environment) => {
    addLogMessage(`Начало деплоя на ${environment.toUpperCase()}...`, 'info');
    await delay(400);
    
    const deploySteps = [
      `Подключение к ${environment} серверу`,
      'Загрузка артефактов',
      'Остановка текущего сервиса',
      'Распаковка архива',
      'Применение миграций БД',
      'Обновление конфигураций',
      'Запуск сервиса',
      'Проверка health-check'
    ];
    
    for (let step of deploySteps) {
      addLogMessage(`  → ${step}...`, 'info');
      await delay(250);
      addLogMessage(`  ✓ ${step}`, 'success');
    }
    
    const now = new Date().toLocaleString('ru-RU');
    const newDeployment = {
      id: Date.now(),
      environment,
      version: `v${buildNumber}.${Date.now() % 1000}`,
      timestamp: now,
      status: 'success',
      buildNumber
    };
    
    setDeployments(prev => [newDeployment, ...prev]);
    
    setEnvironments(prev => ({
      ...prev,
      [environment]: {
        ...prev[environment],
        version: newDeployment.version,
        lastDeploy: now,
        status: environment === 'production' ? 'live' : 'deployed'
      }
    }));
    
    addLogMessage(`✅ Деплой на ${environment.toUpperCase()} успешно завершен! Версия: ${newDeployment.version}`, 'success');
    return true;
  };

  const runFullPipeline = async () => {
    if (pipelineStatus === 'running') return;
    
    setPipelineStatus('running');
    setLogMessages([]);
    addLogMessage('ЗАПУСК CI/CD ПАЙПЛАЙНА', 'info');
    addLogMessage('═'.repeat(50), 'info');
    
    addLogMessage('Step 1: Checkout кода из репозитория', 'info');
    await delay(500);
    addLogMessage('  → Клонирование репозитория...', 'info');
    await delay(300);
    addLogMessage('  ✓ Ветка: main, коммит: a7f3e8d', 'success');
    
    addLogMessage('Step 2: Установка зависимостей', 'info');
    await delay(600);
    addLogMessage('  → npm ci', 'info');
    await delay(300);
    addLogMessage('  ✓ Установлено 847 пакетов за 12.3s', 'success');
    
    addLogMessage('Step 3: Линтинг кода', 'info');
    await delay(400);
    addLogMessage('  → ESLint проверка...', 'info');
    await delay(300);
    addLogMessage('  ✓ 0 errors, 2 warnings', 'success');
    
    addLogMessage('Step 4: Запуск тестов', 'info');
    const testsPassed = await runTests();
    
    if (!testsPassed) {
      addLogMessage('❌ ПАЙПЛАЙН ОСТАНОВЛЕН: Тесты не пройдены!', 'error');
      setPipelineStatus('failed');
      return;
    }
    
    addLogMessage('Step 5: Сборка приложения', 'info');
    const buildSuccess = await runBuild();
    
    if (!buildSuccess) {
      addLogMessage('❌ ПАЙПЛАЙН ОСТАНОВЛЕН: Ошибка сборки!', 'error');
      setPipelineStatus('failed');
      return;
    }
    
    addLogMessage('Step 6: Сканирование безопасности', 'info');
    await delay(600);
    addLogMessage('  → Snyk security scan', 'info');
    await delay(400);
    addLogMessage('  ✓ Уязвимостей не найдено', 'success');
    
    addLogMessage('Step 7: Деплой на STAGING', 'info');
    await deployToEnvironment('staging');
    
    addLogMessage('Step 8: Smoke-тесты на staging', 'info');
    await delay(800);
    addLogMessage('  → Проверка доступности сервиса...', 'info');
    await delay(300);
    addLogMessage('  → Проверка API эндпоинтов...', 'info');
    await delay(300);
    addLogMessage('  ✓ Все smoke-тесты пройдены', 'success');
    
    if (autoDeploy) {
      addLogMessage('Step 9: Деплой на PRODUCTION (автоматический)', 'info');
      await delay(500);
      await deployToEnvironment('production');
    } else {
      addLogMessage('⏸️ Остановлено перед продакшеном (ручное подтверждение)', 'warning');
    }
    
    addLogMessage('═'.repeat(50), 'info');
    addLogMessage('CI/CD ПАЙПЛАЙН УСПЕШНО ЗАВЕРШЕН!', 'success');
    setPipelineStatus('success');
  };

  const addLogMessage = (message, type = 'info') => {
    const timestamp = new Date().toLocaleTimeString();
    setLogMessages(prev => [...prev, { timestamp, message, type }]);
  };
  
  const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));
  
  const clearLogs = () => {
    setLogMessages([]);
    addLogMessage('Логи очищены', 'info');
  };
  
  const demoCommits = [
    { hash: 'a7f3e8d', message: 'Fix: исправление бага с авторизацией', author: 'ivanov', time: '5 мин назад' },
    { hash: 'b9c2d4f', message: 'Feat: добавлен новый API эндпоинт', author: 'petrov', time: '2 часа назад' },
    { hash: 'e5f6g7h', message: 'Docs: обновление документации', author: 'sidorov', time: 'вчера' },
    { hash: 'i8j9k0l', message: 'Test: добавлены unit-тесты', author: 'ivanov', time: '2 дня назад' }
  ];

  const styles = {
    container: {
      maxWidth: '1400px',
      margin: '0 auto',
      padding: '20px',
      fontFamily: 'Arial, sans-serif',
      boxSizing: 'border-box'
    },
    header: {
      textAlign: 'center',
      marginBottom: '30px'
    },
    title: {
      color: '#2c3e50',
      fontSize: 'clamp(24px, 5vw, 28px)',
      marginBottom: '10px'
    },
    subtitle: {
      color: '#7f8c8d',
      fontSize: 'clamp(14px, 3vw, 16px)'
    },
    pipelineStatus: {
      display: 'inline-block',
      padding: '5px 15px',
      borderRadius: '20px',
      fontSize: 'clamp(12px, 3vw, 14px)',
      fontWeight: 'bold',
      marginTop: '10px'
    },
    statusIdle: { backgroundColor: '#95a5a6', color: 'white' },
    statusRunning: { backgroundColor: '#f39c12', color: 'white', animation: 'pulse 1s infinite' },
    statusSuccess: { backgroundColor: '#27ae60', color: 'white' },
    statusFailed: { backgroundColor: '#e74c3c', color: 'white' },
    tabs: {
      display: 'flex',
      gap: '10px',
      marginBottom: '20px',
      borderBottom: '2px solid #ecf0f1',
      flexWrap: 'wrap'
    },
    tab: {
      padding: '10px 20px',
      cursor: 'pointer',
      border: 'none',
      background: 'none',
      fontSize: 'clamp(14px, 4vw, 16px)',
      fontWeight: 'bold',
      transition: 'all 0.3s',
      whiteSpace: 'nowrap'
    },
    activeTab: {
      color: '#3498db',
      borderBottom: '2px solid #3498db'
    },
    mainContent: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '20px',
      marginBottom: '20px'
    },
    panel: {
      backgroundColor: '#f8f9fa',
      borderRadius: '8px',
      padding: '20px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
    },
    panelTitle: {
      fontSize: 'clamp(16px, 4vw, 18px)',
      fontWeight: 'bold',
      marginBottom: '15px',
      color: '#2c3e50',
      borderBottom: '2px solid #ecf0f1',
      paddingBottom: '8px'
    },
    controls: {
      display: 'flex',
      gap: '10px',
      marginBottom: '20px',
      flexWrap: 'wrap'
    },
    button: {
      padding: '10px 20px',
      backgroundColor: '#3498db',
      color: 'white',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
      fontSize: 'clamp(12px, 3vw, 14px)',
      transition: 'background 0.2s',
      whiteSpace: 'nowrap'
    },
    buttonSuccess: { backgroundColor: '#27ae60' },
    buttonDanger: { backgroundColor: '#e74c3c' },
    buttonWarning: { backgroundColor: '#f39c12' },
    buttonSecondary: { backgroundColor: '#95a5a6' },
    logsContainer: {
      backgroundColor: '#2c3e50',
      color: '#ecf0f1',
      padding: '15px',
      borderRadius: '8px',
      height: '400px',
      maxHeight: '60vh',
      overflowY: 'auto',
      fontFamily: 'monospace',
      fontSize: 'clamp(10px, 2.5vw, 12px)',
      lineHeight: '1.4'
    },
    logEntry: {
      marginBottom: '4px',
      padding: '2px 0'
    },
    logInfo: { color: '#ecf0f1' },
    logSuccess: { color: '#27ae60' },
    logError: { color: '#e74c3c' },
    logWarning: { color: '#f39c12' },
    timestamp: {
      color: '#7f8c8d',
      marginRight: '10px',
      fontSize: '0.9em'
    },
    pipelineSteps: {
      marginTop: '20px'
    },
    stepItem: {
      padding: '10px',
      marginBottom: '10px',
      backgroundColor: 'white',
      borderRadius: '6px',
      borderLeft: '4px solid #bdc3c7',
      transition: 'all 0.3s',
      fontSize: 'clamp(13px, 3vw, 14px)'
    },
    stepActive: {
      borderLeftColor: '#f39c12',
      backgroundColor: '#fffef5'
    },
    stepCompleted: {
      borderLeftColor: '#27ae60'
    },
    deploymentsList: {
      maxHeight: '300px',
      overflowY: 'auto'
    },
    deploymentItem: {
      padding: '10px',
      backgroundColor: 'white',
      marginBottom: '10px',
      borderRadius: '6px',
      fontSize: '13px'
    },
    environmentBadge: {
      display: 'inline-block',
      padding: '2px 8px',
      borderRadius: '4px',
      fontSize: 'clamp(9px, 2.5vw, 11px)',
      fontWeight: 'bold',
      marginRight: '10px'
    },
    envDev: { backgroundColor: '#3498db', color: 'white' },
    envStaging: { backgroundColor: '#f39c12', color: 'white' },
    envProd: { backgroundColor: '#e74c3c', color: 'white' },
    testResults: {
      display: 'flex',
      justifyContent: 'space-around',
      marginTop: '15px',
      padding: '15px',
      backgroundColor: 'white',
      borderRadius: '8px',
      flexWrap: 'wrap'
    },
    testStat: {
      textAlign: 'center',
      minWidth: '80px'
    },
    testValue: {
      fontSize: 'clamp(18px, 5vw, 24px)',
      fontWeight: 'bold'
    },
    testPassed: { color: '#27ae60' },
    testFailed: { color: '#e74c3c' },
    environmentInfo: {
      display: 'grid',
      gap: '10px',
      marginTop: '15px'
    },
    envCard: {
      padding: '15px',
      backgroundColor: 'white',
      borderRadius: '8px',
      border: '1px solid #ddd'
    },
    envHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '10px',
      flexWrap: 'wrap',
      gap: '5px'
    },
    envVersion: {
      fontFamily: 'monospace',
      fontWeight: 'bold',
      color: '#3498db',
      wordBreak: 'break-all'
    },
    infoBox: {
      marginTop: '20px',
      padding: '15px',
      backgroundColor: '#e8f4f8',
      borderRadius: '8px',
      borderLeft: '4px solid #3498db',
      fontSize: 'clamp(13px, 3vw, 14px)'
    },
    codeBlock: {
      backgroundColor: '#f4f4f4',
      padding: '15px',
      borderRadius: '8px',
      overflowX: 'auto',
      fontSize: 'clamp(11px, 2.5vw, 13px)',
      fontFamily: 'monospace',
      whiteSpace: 'pre'
    }
  };

  return (
    <div style={styles.container}>
      <style>
        {`
          @keyframes pulse {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.6; }
          }
          
          /* Адаптивность для очень маленьких экранов */
          @media (max-width: 480px) {
            .panel { padding: 15px; }
            .controls { flex-direction: column; }
            .button { width: 100%; text-align: center; }
            .envCard { padding: 10px; }
          }
        `}
      </style>

      <div style={styles.header}>
        <h1 style={styles.title}>🔄 CI/CD Pipeline</h1>
        <p style={styles.subtitle}>Continuous Integration & Continuous Deployment демонстрация</p>
        <div style={{
          ...styles.pipelineStatus,
          ...(pipelineStatus === 'idle' ? styles.statusIdle :
             pipelineStatus === 'running' ? styles.statusRunning :
             pipelineStatus === 'success' ? styles.statusSuccess : styles.statusFailed)
        }}>
          {pipelineStatus === 'idle' ? '⏸️ Готов к запуску' :
           pipelineStatus === 'running' ? '🔄 Выполняется...' :
           pipelineStatus === 'success' ? '✅ Успешно' : '❌ Ошибка'}
        </div>
      </div>

      <div style={styles.tabs}>
        <button
          style={{ ...styles.tab, ...(activeTab === 'pipeline' ? styles.activeTab : {}) }}
          onClick={() => setActiveTab('pipeline')}
        >
          CI/CD Pipeline
        </button>
        <button
          style={{ ...styles.tab, ...(activeTab === 'environments' ? styles.activeTab : {}) }}
          onClick={() => setActiveTab('environments')}
        >
          Deployments & Environments
        </button>
        <button
          style={{ ...styles.tab, ...(activeTab === 'guide' ? styles.activeTab : {}) }}
          onClick={() => setActiveTab('guide')}
        >
          Guide & Best Practices
        </button>
      </div>

      {activeTab === 'pipeline' && (
        <>
          <div style={styles.mainContent}>
            <div style={styles.panel}>
              <div style={styles.panelTitle}>Управление пайплайном</div>
              <div style={styles.controls}>
                <button
                  style={{ ...styles.button, ...styles.buttonSuccess }}
                  onClick={runFullPipeline}
                  disabled={pipelineStatus === 'running'}
                >
                  Запустить полный пайплайн
                </button>
                <button
                  style={{ ...styles.button, ...styles.buttonSecondary }}
                  onClick={clearLogs}
                >
                  Очистить логи
                </button>
              </div>
              
              <label style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '15px', fontSize: 'clamp(13px, 3vw, 14px)' }}>
                <input
                  type="checkbox"
                  checked={autoDeploy}
                  onChange={(e) => setAutoDeploy(e.target.checked)}
                />
                Автоматический деплой на production после успешного тестирования
              </label>

              <div style={styles.pipelineSteps}>
                <div style={styles.panelTitle}>📋 Шаги пайплайна</div>
                <div style={{ ...styles.stepItem, ...(pipelineStatus === 'running' ? styles.stepActive : {}) }}>
                  <strong>1. Checkout</strong> - Получение кода из репозитория
                </div>
                <div style={{ ...styles.stepItem, ...(pipelineStatus === 'running' ? styles.stepActive : {}) }}>
                  <strong>2. Install Dependencies</strong> - Установка зависимостей
                </div>
                <div style={{ ...styles.stepItem, ...(pipelineStatus === 'running' ? styles.stepActive : {}) }}>
                  <strong>3. Lint</strong> - Проверка качества кода
                </div>
                <div style={{ ...styles.stepItem, ...(pipelineStatus === 'running' ? styles.stepActive : {}) }}>
                  <strong>4. Test</strong> - Запуск всех видов тестов
                </div>
                <div style={{ ...styles.stepItem, ...(pipelineStatus === 'running' ? styles.stepActive : {}) }}>
                  <strong>5. Build</strong> - Сборка приложения
                </div>
                <div style={{ ...styles.stepItem, ...(pipelineStatus === 'running' ? styles.stepActive : {}) }}>
                  <strong>6. Security Scan</strong> - Сканирование уязвимостей
                </div>
                <div style={{ ...styles.stepItem, ...(pipelineStatus === 'running' ? styles.stepActive : {}) }}>
                  <strong>7. Deploy to Staging</strong> - Деплой на тестовое окружение
                </div>
                <div style={{ ...styles.stepItem, ...(pipelineStatus === 'running' ? styles.stepActive : {}) }}>
                  <strong>8. Smoke Tests</strong> - Быстрая проверка работоспособности
                </div>
                <div style={{ ...styles.stepItem, ...(pipelineStatus === 'running' ? styles.stepActive : {}) }}>
                  <strong>9. Deploy to Production</strong> - Деплой на продакшен
                </div>
              </div>
            </div>

            <div style={styles.panel}>
              <div style={styles.panelTitle}>📝 Логи выполнения</div>
              <div style={styles.logsContainer}>
                {logMessages.map((log, idx) => (
                  <div key={idx} style={styles.logEntry}>
                    <span style={styles.timestamp}>[{log.timestamp}]</span>
                    <span style={{
                      ...styles.logInfo,
                      ...(log.type === 'success' ? styles.logSuccess : {}),
                      ...(log.type === 'error' ? styles.logError : {}),
                      ...(log.type === 'warning' ? styles.logWarning : {})
                    }}>
                      {log.message}
                    </span>
                  </div>
                ))}
                {logMessages.length === 0 && (
                  <div style={{ color: '#7f8c8d', textAlign: 'center', padding: '20px' }}>
                    Нажмите "Запустить пайплайн" для начала
                  </div>
                )}
              </div>
            </div>
          </div>

          <div style={styles.mainContent}>
            <div style={styles.panel}>
              <div style={styles.panelTitle}>Последние коммиты</div>
              {demoCommits.map(commit => (
                <div key={commit.hash} style={{ padding: '8px', borderBottom: '1px solid #ddd' }}>
                  <span style={{ fontFamily: 'monospace', fontWeight: 'bold', fontSize: '12px' }}>{commit.hash.substring(0, 7)}</span>
                  <span style={{ marginLeft: '10px', fontSize: '13px' }}>{commit.message}</span>
                  <div style={{ fontSize: '11px', color: '#7f8c8d', marginTop: '4px' }}>
                    {commit.author} • {commit.time}
                  </div>
                </div>
              ))}
            </div>

            <div style={styles.panel}>
              <div style={styles.panelTitle}>Последние результаты тестов</div>
              <div style={styles.testResults}>
                <div style={styles.testStat}>
                  <div style={{ ...styles.testValue, ...styles.testPassed }}>{testResults.passed}</div>
                  <div>Пройдено</div>
                </div>
                <div style={styles.testStat}>
                  <div style={{ ...styles.testValue, ...styles.testFailed }}>{testResults.failed}</div>
                  <div>Провалено</div>
                </div>
                <div style={styles.testStat}>
                  <div style={styles.testValue}>{testResults.total}</div>
                  <div>Всего</div>
                </div>
              </div>
              <div style={{ fontSize: 'clamp(11px, 3vw, 13px)', marginTop: '10px', color: '#7f8c8d', textAlign: 'center' }}>
                {testResults.total > 0 && 
                  `Успешность: ${Math.round((testResults.passed / testResults.total) * 100)}%`}
              </div>
            </div>
          </div>
        </>
      )}

      {activeTab === 'environments' && (
        <>
          <div style={styles.mainContent}>
            <div style={styles.panel}>
              <div style={styles.panelTitle}>Окружения</div>
              <div style={styles.environmentInfo}>
                {Object.entries(environments).map(([env, data]) => (
                  <div key={env} style={styles.envCard}>
                    <div style={styles.envHeader}>
                      <strong style={{ fontSize: 'clamp(14px, 4vw, 16px)' }}>
                        {env === 'development' ? 'Development' :
                         env === 'staging' ? 'Staging' : 'Production'}
                      </strong>
                      <span style={{
                        ...styles.environmentBadge,
                        ...(env === 'development' ? styles.envDev :
                           env === 'staging' ? styles.envStaging : styles.envProd)
                      }}>
                        {env}
                      </span>
                    </div>
                    <div>Версия: <span style={styles.envVersion}>{data.version}</span></div>
                    <div>Статус: {data.status === 'live' ? '🟢 Live' : 
                                 data.status === 'testing' ? '🟡 Тестирование' : '🔵 Стабильно'}</div>
                    <div>Последний деплой: {data.lastDeploy}</div>
                    <div>URL: <a href={`https://${data.url}`} target="_blank" rel="noreferrer">{data.url}</a></div>
                    <button
                      style={{ ...styles.button, marginTop: '10px', ...styles.buttonWarning, fontSize: 'clamp(10px, 3vw, 12px)' }}
                      onClick={() => {
                        if (window.confirm(`Деплоить на ${env}?`)) {
                          deployToEnvironment(env);
                        }
                      }}
                    >
                      Деплой на {env}
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <div style={styles.panel}>
              <div style={styles.panelTitle}>История деплоев</div>
              <div style={styles.deploymentsList}>
                {deployments.length === 0 ? (
                  <div style={{ textAlign: 'center', padding: '20px', color: '#7f8c8d' }}>
                    Пока нет деплоев. Запустите CI/CD пайплайн!
                  </div>
                ) : (
                  deployments.map(deploy => (
                    <div key={deploy.id} style={styles.deploymentItem}>
                      <div>
                        <span style={{
                          ...styles.environmentBadge,
                          ...(deploy.environment === 'development' ? styles.envDev :
                             deploy.environment === 'staging' ? styles.envStaging : styles.envProd)
                        }}>
                          {deploy.environment}
                        </span>
                        <strong>{deploy.version}</strong>
                        <span style={{ marginLeft: '10px', fontSize: '12px', color: '#7f8c8d' }}>
                          Build #{deploy.buildNumber}
                        </span>
                      </div>
                      <div style={{ fontSize: '12px', marginTop: '5px' }}>
                        {deploy.timestamp}
                      </div>
                      <div style={{ fontSize: '12px', color: '#27ae60', marginTop: '5px' }}>
                        Статус: {deploy.status}
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>

          <div style={styles.infoBox}>
            <strong>Что такое окружения?</strong><br/>
            • <strong>Development</strong> — для разработки и локального тестирования<br/>
            • <strong>Staging</strong> — тестовое окружение, идентичное продакшену<br/>
            • <strong>Production</strong> — живое окружение с реальными пользователями<br/>
            <br/>
            <strong>Best Practice:</strong> Всегда сначала деплойте на Staging, проводите тестирование, и только потом на Production!
          </div>
        </>
      )}

      {activeTab === 'guide' && (
        <>
          <div style={styles.mainContent}>
            <div style={styles.panel}>
              <div style={styles.panelTitle}>Что такое CI/CD?</div>
              <p style={{ fontSize: 'clamp(13px, 3vw, 14px)'}}>
                <strong>Continuous Integration (CI)</strong> — практика регулярного объединения изменений кода в общий репозиторий с автоматической сборкой и тестированием.
              </p>
              <p style={{ fontSize: 'clamp(13px, 3vw, 14px)'}}>
                <strong>Continuous Delivery (CD)</strong> — расширение CI, автоматически подготавливающее код к релизу в production.
              </p>
              <p style={{ fontSize: 'clamp(13px, 3vw, 14px)'}}>
                <strong>Continuous Deployment</strong> — каждый успешный коммит автоматически деплоится на production.
              </p>
              
              <div style={{ marginTop: '20px' }}>
                <strong>Преимущества CI/CD:</strong>
                <ul style={{ paddingLeft: '20px', fontSize: 'clamp(13px, 3vw, 14px)' }}>
                  <li>Быстрая обратная связь об ошибках</li>
                  <li>Раннее обнаружение багов интеграции</li>
                  <li>Автоматизированные релизы</li>
                  <li>Повышение качества кода через автотесты</li>
                  <li>Сокращение time-to-market</li>
                </ul>
              </div>
            </div>

            <div style={styles.panel}>
              <div style={styles.panelTitle}>Популярные инструменты</div>
              <ul style={{ paddingLeft: '20px', fontSize: 'clamp(13px, 3vw, 14px)' }}>
                <li><strong>Jenkins</strong> — самый популярный CI/CD сервер</li>
                <li><strong>GitLab CI/CD</strong> — встроенный CI/CD в GitLab</li>
                <li><strong>GitHub Actions</strong> — CI/CD от GitHub</li>
                <li><strong>CircleCI</strong> — облачный CI/CD сервис</li>
                <li><strong>Travis CI</strong> — простой в настройке</li>
                <li><strong>Azure DevOps</strong> — от Microsoft</li>
              </ul>
            </div>
          </div>

          <div style={styles.panel}>
            <div style={styles.panelTitle}>Пример .gitlab-ci.yml</div>
            <div style={styles.codeBlock}>
              {`# .gitlab-ci.yml
stages:
  - build
  - test
  - deploy

variables:
  NODE_VERSION: "18"

before_script:
  - apt-get update -qq
  - npm ci

build:
  stage: build
  script:
    - npm run build
  artifacts:
    paths:
      - dist/

test:
  stage: test
  script:
    - npm run test:unit
    - npm run test:e2e

deploy_staging:
  stage: deploy
  script:
    - npm run deploy:staging
  only:
    - develop

deploy_production:
  stage: deploy
  script:
    - npm run deploy:production
  only:
    - main
  when: manual`}
            </div>
          </div>

          <div style={styles.panel}>
            <div style={styles.panelTitle}>GitHub Actions Пример</div>
            <div style={styles.codeBlock}>
              {`# .github/workflows/ci.yml
name: CI/CD Pipeline

on:
  push:
    branches: [ main, develop ]
  pull_request:
    branches: [ main ]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v3
    - uses: actions/setup-node@v3
      with:
        node-version: '18'
    - run: npm ci
    - run: npm test
    - run: npm run build

  deploy:
    needs: test
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main'
    steps:
    - name: Deploy to Production
      run: |
        npm run deploy:prod`}
            </div>
          </div>

          <div style={styles.infoBox}>
            <strong>Метрики CI/CD:</strong><br/>
            • <strong>Lead Time</strong> — время от коммита до деплоя в прод<br/>
            • <strong>Deployment Frequency</strong> — частота деплоев<br/>
            • <strong>Mean Time to Recovery (MTTR)</strong> — среднее время восстановления<br/>
            • <strong>Change Failure Rate</strong> — процент неудачных деплоев<br/>
            <br/>
            <strong>DORA метрики elite компаний:</strong><br/>
            • Множество деплоев в день<br/>
            • Время восстановления &lt; 1 часа<br/>
            • Процент неудач &lt; 15%
          </div>
        </>
      )}
    </div>
  );
};

export default CicdDemo;