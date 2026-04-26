import React, { useState, useEffect } from 'react';
import BrowserOnly from './BrowserOnly';

const BuildProcessFlowContent = () => {
  const [step, setStep] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  const stepsData = [
    {
      id: 0,
      title: "Написание исходного кода",
      subtitle: "Создание программы",
      description: "Разработчик пишет исходный код на языке высокого уровня (C, C++, Java, Go и др.). Код содержит инструкции, функции, классы и комментарии, понятные человеку, но неисполнимые напрямую компьютером.",
      action: "Сохранение файлов с расширениями .c, .cpp, .java, .go и т.д.",
      developerAction: "Написание кода в IDE или редакторе",
      systemAction: "Хранение исходных файлов на диске",
      isComplete: false,
      icon: "✍️",
      color: "#3b82f6"
    },
    {
      id: 1,
      title: "Запуск сборки",
      subtitle: "Инициализация процесса",
      description: "Разработчик нажимает команду сборки (Build) в IDE или вызывает компилятор из командной строки. Система запускает препроцессор и готовит окружение для обработки кода.",
      action: "Нажатие Ctrl+Shift+B или выполнение команды компиляции",
      developerAction: "Запуск процесса сборки",
      systemAction: "Активация препроцессора и компилятора",
      isComplete: false,
      icon: "▶️",
      color: "#8b5cf6"
    },
    {
      id: 2,
      title: "Препроцессинг",
      subtitle: "Предварительная обработка",
      description: "Препроцессор обрабатывает директивы: #include (вставка содержимого файлов), #define (макроподстановки), #ifdef (условная компиляция). Удаляются комментарии. Результат — чистый код, готовый для компиляции.",
      action: "Обработка всех директив препроцессора",
      developerAction: "Написание директив (#include, #define)",
      systemAction: "Подстановка кода, раскрытие макросов, удаление комментариев",
      isComplete: false,
      icon: "🔧",
      color: "#10b981"
    },
    {
      id: 3,
      title: "Компиляция",
      subtitle: "Трансляция в машинный код",
      description: "Компилятор анализирует синтаксис и семантику кода, проверяет типы данных, оптимизирует и преобразует исходный код в ассемблер, а затем в объектный код (машинные инструкции). Создаются объектные файлы (.obj или .o).",
      action: "Создание объектных файлов (.obj / .o)",
      developerAction: "Исправление синтаксических ошибок",
      systemAction: "Лексический, синтаксический и семантический анализ, генерация кода",
      isComplete: false,
      icon: "⚙️",
      color: "#f59e0b"
    },
    {
      id: 4,
      title: "Линковка",
      subtitle: "Объединение в исполняемый файл",
      description: "Линковщик собирает все объектные файлы и статические библиотеки, связывает вызовы функций с их реализациями, разрешает внешние символы и формирует единый исполняемый файл (.exe, .elf, .out).",
      action: "Генерация исполняемого файла",
      developerAction: "Настройка путей к библиотекам",
      systemAction: "Разрешение символов, объединение секций, перерасчёт адресов",
      isComplete: false,
      icon: "🔗",
      color: "#ef4444"
    },
    {
      id: 5,
      title: "Публикация",
      subtitle: "Развёртывание приложения",
      description: "Готовое приложение упаковывается и публикуется в целевом окружении: на сервер (Docker), в магазин приложений (Google Play, App Store) или распространяется как установщик (EXE, DMG, DEB).",
      action: "Приложение готово к использованию",
      developerAction: "Конфигурация окружения, установка зависимостей",
      systemAction: "Загрузка артефактов в целевые системы",
      isComplete: false,
      icon: "🚀",
      color: "#06b6d4"
    }
  ];

  const currentStepData = stepsData[step];
  const canNext = step < stepsData.length - 1;
  const canReset = step > 0;

  const handleNext = () => {
    if (canNext) {
      setStep(prev => prev + 1);
    }
  };

  const handleReset = () => {
    setStep(0);
  };

  const MobileFlowDiagram = () => (
    <div style={styles.mobileFlowContainer}>
      {/* Текущий активный этап крупно */}
      <div style={styles.mobileCurrentStage}>
        <div style={{
          ...styles.mobileStageIcon,
          backgroundColor: currentStepData.color + '15',
          borderColor: currentStepData.color
        }}>
          <span style={{fontSize: '32px'}}>{currentStepData.icon}</span>
        </div>
        <div style={styles.mobileStageInfo}>
          <div style={styles.mobileStageTitle}>{currentStepData.title}</div>
          <div style={styles.mobileStageSub}>{currentStepData.subtitle}</div>
        </div>
      </div>

      {/* Прогресс в виде точек */}
      <div style={styles.mobileProgressDots}>
        {stepsData.map((_, idx) => (
          <div
            key={idx}
            onClick={() => setStep(idx)}
            style={{
              ...styles.mobileDot,
              backgroundColor: idx <= step ? stepsData[idx].color : '#e2e8f0',
              width: idx === step ? '32px' : '8px',
              cursor: 'pointer'
            }}
          />
        ))}
      </div>

      {/* Список всех этапов */}
      <div style={styles.mobileStepsList}>
        {stepsData.map((stepData, idx) => (
          <div
            key={stepData.id}
            onClick={() => setStep(idx)}
            style={{
              ...styles.mobileStepItem,
              backgroundColor: idx === step ? stepData.color + '08' : 'transparent',
              borderLeftColor: idx <= step ? stepData.color : '#e2e8f0'
            }}
          >
            <div style={styles.mobileStepIcon}>{stepData.icon}</div>
            <div style={styles.mobileStepContent}>
              <div style={{
                ...styles.mobileStepName,
                fontWeight: idx === step ? '600' : '400'
              }}>
                {stepData.title}
              </div>
              {idx < step && (
                <div style={styles.mobileStepDone}>✓ Выполнено</div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const DesktopFlowDiagram = () => (
    <div style={styles.flowDiagram}>
      <div style={{...styles.node, ...styles.startNode}}>
        <div style={styles.nodeEmoji}>📝</div>
        <strong>Код</strong>
        <div style={styles.nodeSubtext}>Исходный</div>
      </div>

      {stepsData.slice(0, -1).map((stepData) => (
        <React.Fragment key={stepData.id}>
          <div style={styles.arrowRight}>
            <span style={styles.arrowSymbol}>→</span>
          </div>
          <div style={{
            ...styles.node, 
            ...styles.processNode,
            backgroundColor: step >= stepData.id ? stepData.color + '15' : '#ffffff',
            borderColor: step >= stepData.id ? stepData.color : '#d1d5db',
            transform: step === stepData.id ? 'scale(1.08)' : 'scale(1)',
            boxShadow: step === stepData.id ? `0 0 0 3px ${stepData.color}40` : 'none'
          }}>
            <div style={styles.nodeEmoji}>{stepData.icon}</div>
            <strong style={{fontSize: '11px'}}>{stepData.title.split(' ')[0]}</strong>
            <div style={styles.nodeSubtext}>{stepData.subtitle}</div>
            {step > stepData.id && (
              <div style={{...styles.checkmark, color: stepData.color}}>✓ Выполнено</div>
            )}
            {step === stepData.id && (
              <div style={{...styles.currentIndicator, color: stepData.color}}>
                ⏵ Текущий
              </div>
            )}
          </div>
        </React.Fragment>
      ))}

      <div style={styles.arrowRight}>
        <span style={styles.arrowSymbol}>→</span>
      </div>

      <div style={{
        ...styles.node, 
        ...styles.endNode,
        borderColor: step === stepsData.length - 1 ? '#06b6d4' : '#d1d5db',
        backgroundColor: step === stepsData.length - 1 ? '#06b6d415' : '#ffffff'
      }}>
        <div style={styles.nodeEmoji}>🎯</div>
        <strong>Готово</strong>
        <div style={styles.nodeSubtext}>Программа</div>
        {step === stepsData.length - 1 && (
          <div style={{...styles.checkmark, color: '#06b6d4'}}>✓ Опубликовано</div>
        )}
      </div>
    </div>
  );

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>🛠️ Процесс сборки приложения</h2>
      
      {isMobile ? <MobileFlowDiagram /> : <DesktopFlowDiagram />}

      {/* Индикатор прогресса (только для десктопа) */}
      {!isMobile && (
        <div style={styles.progressContainer}>
          <div style={styles.progressBar}>
            <div style={{
              ...styles.progressFill,
              width: `${((step + 1) / stepsData.length) * 100}%`
            }} />
          </div>
          <div style={styles.progressText}>
            Этап {step + 1} из {stepsData.length} — {currentStepData.title}
          </div>
        </div>
      )}

      {/* Детальная панель текущего этапа */}
      <div style={styles.infoPanel}>
        <div style={{...styles.stepBadge, backgroundColor: currentStepData.color + '20', color: currentStepData.color}}>
          {currentStepData.icon} {step + 1} / {stepsData.length}
        </div>
        <h3 style={styles.stageTitle}>{currentStepData.title}</h3>
        <p style={styles.stageSubtitle}>{currentStepData.subtitle}</p>
        
        <div style={styles.descriptionBox}>
          <strong>Что происходит:</strong><br />
          {currentStepData.description}
        </div>

        <div style={styles.actionsRow}>
          <div style={styles.actionItem}>
            <strong>Действие разработчика:</strong><br />
            {currentStepData.developerAction}
          </div>
          <div style={styles.actionItem}>
            <strong>Действие системы:</strong><br />
            {currentStepData.systemAction}
          </div>
        </div>

        <div style={styles.additionalInfo}>
          <strong>Команда/результат:</strong><br />
          <code style={styles.codeBlock}>{currentStepData.action}</code>
        </div>

        <div style={styles.controls}>
          {canReset && (
            <button onClick={handleReset} style={styles.buttonSecondary}>
              🔄 Начать заново
            </button>
          )}
          
          <button 
            onClick={handleNext} 
            disabled={!canNext}
            style={{
              ...styles.buttonPrimary,
              backgroundColor: currentStepData.color,
              opacity: canNext ? 1 : 0.6,
              cursor: canNext ? 'pointer' : 'default'
            }}
          >
            {canNext ? `➡️ Перейти к ${stepsData[step + 1].title}` : "✅ Завершить процесс"}
          </button>
        </div>
      </div>

      {/* Дополнительная информация о типах сборки */}
      {(step === 3 || step === 4) && (
        <div style={styles.buildTypesPanel}>
          <div style={styles.buildTypeRow}>
            <div style={styles.buildTypeDebug}>
              <strong>Debug-сборка</strong>
              <div style={styles.buildTypeDesc}>Содержит отладочную информацию, не оптимизирована, подходит для пошаговой отладки</div>
            </div>
            <div style={styles.buildTypeRelease}>
              <strong>Release-сборка</strong>
              <div style={styles.buildTypeDesc}>Оптимизирована по скорости и размеру, без отладочных символов</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    fontFamily: 'system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    backgroundColor: '#f9fafb',
    border: '1px solid #e5e7eb',
    borderRadius: '16px',
    padding: 'clamp(16px, 4vw, 24px)',
    margin: 'clamp(16px, 4vw, 24px) 0',
    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.05), 0 4px 6px -2px rgba(0, 0, 0, 0.025)',
    maxWidth: '100%',
    overflowX: 'hidden',
  },
  header: {
    fontSize: 'clamp(18px, 5vw, 20px)',
    fontWeight: '700',
    color: '#111827',
    marginBottom: 'clamp(16px, 4vw, 24px)',
    textAlign: 'center',
    letterSpacing: '-0.01em',
    padding: '0 8px',
  },
  flowDiagram: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '28px',
    flexWrap: 'wrap',
    gap: '6px',
    padding: '12px 8px',
    backgroundColor: '#ffffff',
    borderRadius: '12px',
    border: '1px solid #eef2f6',
    overflowX: 'auto',
    minWidth: 'min-content',
  },
  node: {
    width: '95px',
    padding: '8px 4px',
    borderRadius: '12px',
    textAlign: 'center',
    border: '2px solid #e2e8f0',
    backgroundColor: '#ffffff',
    transition: 'all 0.25s ease-in-out',
    position: 'relative',
    zIndex: 2,
    minHeight: '85px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '11px',
    fontWeight: '500',
    lineHeight: '1.3',
    backdropFilter: 'blur(0px)',
    flexShrink: 0,
  },
  startNode: {
    borderColor: '#3b82f6',
    backgroundColor: '#eff6ff',
  },
  endNode: {
    borderColor: '#06b6d4',
    backgroundColor: '#ecfeff',
  },
  processNode: {
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  },
  nodeEmoji: {
    fontSize: '24px',
    marginBottom: '4px',
  },
  nodeSubtext: {
    fontSize: '9px',
    color: '#6c757d',
    marginTop: '2px',
    fontWeight: '400',
  },
  checkmark: {
    fontSize: '8px',
    fontWeight: '600',
    marginTop: '4px',
  },
  currentIndicator: {
    fontSize: '8px',
    fontWeight: '600',
    marginTop: '4px',
  },
  arrowRight: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: '24px',
    color: '#94a3b8',
    flexShrink: 0,
  },
  arrowSymbol: {
    fontSize: '18px',
    fontWeight: 'bold',
  },
  progressContainer: {
    marginBottom: '20px',
  },
  progressBar: {
    backgroundColor: '#e2e8f0',
    borderRadius: '999px',
    height: '8px',
    overflow: 'hidden',
  },
  progressFill: {
    backgroundColor: '#3b82f6',
    borderRadius: '999px',
    height: '100%',
    transition: 'width 0.3s ease',
  },
  progressText: {
    fontSize: '12px',
    color: '#64748b',
    marginTop: '8px',
    textAlign: 'center',
    fontWeight: '500',
  },
  infoPanel: {
    backgroundColor: '#ffffff',
    border: '1px solid #eef2f6',
    borderRadius: '16px',
    padding: 'clamp(16px, 4vw, 20px)',
    marginTop: '4px',
  },
  stepBadge: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '4px',
    padding: '4px 12px',
    borderRadius: '999px',
    fontSize: '11px',
    fontWeight: '600',
    marginBottom: '12px',
  },
  stageTitle: {
    fontSize: 'clamp(18px, 5vw, 22px)',
    fontWeight: '700',
    color: '#0f172a',
    margin: '0 0 4px 0',
    letterSpacing: '-0.01em',
    wordBreak: 'break-word',
  },
  stageSubtitle: {
    fontSize: 'clamp(12px, 3.5vw, 14px)',
    color: '#64748b',
    margin: '0 0 16px 0',
  },
  descriptionBox: {
    backgroundColor: '#f8fafc',
    padding: 'clamp(12px, 3vw, 14px)',
    borderRadius: '12px',
    marginBottom: '16px',
    lineHeight: '1.5',
    color: '#1e293b',
    fontSize: 'clamp(13px, 3.5vw, 14px)',
    border: '1px solid #eef2f6',
  },
  actionsRow: {
    display: 'flex',
    gap: '12px',
    marginBottom: '16px',
    flexWrap: 'wrap',
    flexDirection: 'row',
    '@media (max-width: 640px)': {
      flexDirection: 'column',
    },
  },
  actionItem: {
    flex: 1,
    minWidth: 'min(100%, 200px)',
    padding: 'clamp(10px, 3vw, 12px)',
    backgroundColor: '#f8fafc',
    border: '1px solid #eef2f6',
    borderRadius: '12px',
    fontSize: 'clamp(12px, 3.5vw, 13px)',
    lineHeight: '1.45',
    wordBreak: 'break-word',
  },
  additionalInfo: {
    backgroundColor: '#f1f5f9',
    padding: 'clamp(10px, 3vw, 12px) 14px',
    borderRadius: '12px',
    marginBottom: '20px',
    fontSize: 'clamp(12px, 3.5vw, 13px)',
    border: '1px solid #e2e8f0',
    overflowX: 'auto',
  },
  codeBlock: {
    fontFamily: 'Monaco, "Courier New", monospace',
    fontSize: 'clamp(11px, 3vw, 12px)',
    backgroundColor: '#0f172a',
    color: '#e2e8f0',
    padding: '6px 10px',
    borderRadius: '8px',
    display: 'inline-block',
    marginTop: '6px',
    wordBreak: 'break-all',
    whiteSpace: 'pre-wrap',
  },
  controls: {
    display: 'flex',
    justifyContent: 'flex-end',
    gap: '12px',
    flexWrap: 'wrap',
    '@media (max-width: 480px)': {
      flexDirection: 'column',
      alignItems: 'stretch',
    },
  },
  buttonPrimary: {
    padding: '10px 20px',
    color: '#ffffff',
    border: 'none',
    borderRadius: '999px',
    fontSize: 'clamp(13px, 3.5vw, 14px)',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    boxShadow: '0 1px 2px rgba(0, 0, 0, 0.05)',
    whiteSpace: 'nowrap',
    '@media (max-width: 480px)': {
      whiteSpace: 'normal',
      width: '100%',
    },
  },
  buttonSecondary: {
    padding: '10px 20px',
    backgroundColor: '#ffffff',
    color: '#475569',
    border: '1px solid #cbd5e1',
    borderRadius: '999px',
    fontSize: 'clamp(13px, 3.5vw, 14px)',
    fontWeight: '500',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    whiteSpace: 'nowrap',
    '@media (max-width: 480px)': {
      whiteSpace: 'normal',
      width: '100%',
    },
  },
  buildTypesPanel: {
    marginTop: '16px',
    backgroundColor: '#fefce8',
    border: '1px solid #fef08a',
    borderRadius: '12px',
    padding: 'clamp(12px, 3vw, 14px)',
  },
  buildTypeRow: {
    display: 'flex',
    gap: '12px',
    flexWrap: 'wrap',
    flexDirection: 'row',
    '@media (max-width: 640px)': {
      flexDirection: 'column',
    },
  },
  buildTypeDebug: {
    flex: 1,
    padding: '10px',
    backgroundColor: '#f1f5f9',
    borderRadius: '10px',
    borderLeft: '4px solid #ef4444',
  },
  buildTypeRelease: {
    flex: 1,
    padding: '10px',
    backgroundColor: '#f1f5f9',
    borderRadius: '10px',
    borderLeft: '4px solid #10b981',
  },
  buildTypeDesc: {
    fontSize: 'clamp(10px, 3vw, 11px)',
    color: '#64748b',
    marginTop: '4px',
  },
  
  mobileFlowContainer: {
    marginBottom: '20px',
  },
  mobileCurrentStage: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    padding: '16px',
    backgroundColor: '#ffffff',
    borderRadius: '16px',
    border: '1px solid #eef2f6',
    marginBottom: '20px',
  },
  mobileStageIcon: {
    width: '70px',
    height: '70px',
    borderRadius: '16px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: '2px solid',
    flexShrink: 0,
  },
  mobileStageInfo: {
    flex: 1,
  },
  mobileStageTitle: {
    fontSize: '16px',
    fontWeight: '600',
    color: '#0f172a',
    marginBottom: '4px',
  },
  mobileStageSub: {
    fontSize: '12px',
    color: '#64748b',
  },
  mobileProgressDots: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '8px',
    marginBottom: '20px',
    padding: '8px',
  },
  mobileDot: {
    height: '8px',
    borderRadius: '4px',
    transition: 'all 0.3s ease',
  },
  mobileStepsList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
    maxHeight: '300px',
    overflowY: 'auto',
    padding: '4px',
  },
  mobileStepItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    padding: '12px',
    borderRadius: '12px',
    borderLeft: '3px solid',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    backgroundColor: '#ffffff',
  },
  mobileStepIcon: {
    fontSize: '24px',
    flexShrink: 0,
  },
  mobileStepContent: {
    flex: 1,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  mobileStepName: {
    fontSize: '13px',
    color: '#1e293b',
  },
  mobileStepDone: {
    fontSize: '11px',
    color: '#10b981',
    fontWeight: '500',
  },
};

const BuildProcessFlow = () => {
  return (
    <BrowserOnly fallback={<div>Loading...</div>}>
      {() => <BuildProcessFlowContent />}
    </BrowserOnly>
  );
};

export default BuildProcessFlow;