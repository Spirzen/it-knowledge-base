import React, { useState } from 'react';
import BrowserOnly from './BrowserOnly';

const AuthenticationFlow = () => {
  const [step, setStep] = useState(0);
  
  const stepsData = [
    {
      id: 0,
      title: "Начало",
      subtitle: "Запрос к ресурсу",
      description: "Клиент отправляет запрос на защищённую страницу. Сервер обнаруживает отсутствие подтверждённой сессии.",
      action: "Нажмите кнопку для начала процесса входа",
      userAction: "Отправка запроса",
      serverAction: "Проверка наличия сессии",
      isComplete: false,
      icon: "🚪"
    },
    {
      id: 1,
      title: "Идентификация",
      subtitle: "Заявление личности",
      description: "Пользователь сообщает системе своё имя (логин, email). Система получает идентификатор субъекта.",
      action: "Система принимает заявленный логин.",
      userAction: "Сообщение: «Я — Timur»",
      serverAction: "Получение имени пользователя",
      isComplete: true,
      icon: "🆔"
    },
    {
      id: 2,
      title: "Верификация",
      subtitle: "Проверка статуса аккаунта",
      description: "Система проверяет существование учётной записи, её активность и соответствие политикам безопасности. Если аккаунт заблокирован или удалён, процесс останавливается здесь.",
      action: "Система сверяет статус учётной записи.",
      userAction: "Ожидание проверки статуса",
      serverAction: "Поиск записи и проверка флагов (активен/заблокирован)",
      isComplete: true,
      icon: "🛡️"
    },
    {
      id: 3,
      title: "Аутентификация",
      subtitle: "Подтверждение подлинности",
      description: "Только после успешной верификации система запрашивает секретные данные (пароль, токен) для подтверждения того, что пользователь действительно является владельцем аккаунта.",
      action: "Сервер запрашивает пароль.",
      userAction: "Отправка пароля",
      serverAction: "Сравнение хешей пароля",
      isComplete: true,
      icon: "✅"
    },
    {
      id: 4,
      title: "Авторизация",
      subtitle: "Назначение прав",
      description: "После подтверждения личности система определяет набор разрешений для данного пользователя. Назначаются роли и конкретные действия.",
      action: "Генерация токена с правами.",
      userAction: "Получение списка действий",
      serverAction: "Формирование JWT-токена",
      isComplete: true,
      icon: "🔑"
    },
    {
      id: 5,
      title: "Доступ получен",
      subtitle: "Работа в системе",
      description: "Пользователь видит контент. Последующие запросы сопровождаются токеном без повторного ввода пароля.",
      action: "Успешный вход.",
      userAction: "Выполнение задач",
      serverAction: "Обработка запросов",
      isComplete: true,
      icon: "🎉"
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

  const FlowDiagram = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    const [isTablet, setIsTablet] = useState(window.innerWidth <= 1024 && window.innerWidth > 768);

    React.useEffect(() => {
      const handleResize = () => {
        setIsMobile(window.innerWidth <= 768);
        setIsTablet(window.innerWidth <= 1024 && window.innerWidth > 768);
      };
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);

    if (isMobile) {
      return (
        <div style={styles.mobileFlow}>
          <div style={styles.mobileNode}>
            <div style={styles.mobileNodeIcon}>💻</div>
            <div style={styles.mobileNodeContent}>
              <strong>Клиент</strong>
              <div style={styles.mobileNodeStatus}>
                {step >= 0 && '✓ Активен'}
              </div>
            </div>
          </div>
          
          {[1, 2, 3, 4, 5].map((stepIndex) => (
            <React.Fragment key={stepIndex}>
              <div style={styles.mobileArrow}>↓</div>
              <div style={{
                ...styles.mobileNode,
                ...(step >= stepIndex ? styles.mobileNodeActive : {})
              }}>
                <div style={styles.mobileNodeIcon}>{stepsData[stepIndex].icon}</div>
                <div style={styles.mobileNodeContent}>
                  <strong>{stepsData[stepIndex].title}</strong>
                  <div style={styles.mobileNodeSub}>{stepsData[stepIndex].subtitle}</div>
                  {step >= stepIndex && <div style={styles.mobileCheck}>✓</div>}
                  {step === stepIndex && <div style={styles.mobileCurrent}>📍</div>}
                </div>
              </div>
            </React.Fragment>
          ))}
        </div>
      );
    }

    if (isTablet) {
      return (
        <div style={styles.tabletFlow}>
          <div style={styles.tabletNodeClient}>
            <strong>Клиент</strong>
          </div>
          
          {[1, 2, 3, 4].map((stepIndex) => (
            <React.Fragment key={stepIndex}>
              <div style={styles.tabletArrow}>→</div>
              <div style={{
                ...styles.tabletNode,
                ...(step >= stepIndex ? styles.tabletNodeActive : {}),
                ...(step === stepIndex ? styles.tabletNodeHighlight : {})
              }}>
                <div>{stepsData[stepIndex].icon}</div>
                <div style={styles.tabletNodeTitle}>{stepsData[stepIndex].title}</div>
              </div>
            </React.Fragment>
          ))}
          
          <div style={styles.tabletArrow}>→</div>
          <div style={{
            ...styles.tabletNodeResult,
            ...(step >= 5 ? styles.tabletNodeActive : {})
          }}>
            <div>🎉</div>
            <div>Результат</div>
          </div>
        </div>
      );
    }

    return (
      <div style={styles.desktopFlow}>
        <div style={{...styles.node, ...styles.clientNode}}>
          <strong>Клиент</strong>
          <div style={styles.nodeSubtext}>💻</div>
        </div>

        {[1, 2, 3, 4].map((stepIndex) => (
          <React.Fragment key={stepIndex}>
            <div style={styles.arrowRight}></div>
            <div style={{
              ...styles.node, 
              ...(step >= stepIndex ? styles.activeNode : {}),
              ...(step === stepIndex ? styles.highlightedNode : {})
            }}>
              <strong>{stepsData[stepIndex].title}</strong>
              <div style={styles.nodeSubtext}>{stepsData[stepIndex].subtitle}</div>
              {step > stepIndex && <div style={styles.checkmark}>✔ Выполнено</div>}
              {step === stepIndex && <div style={styles.currentIndicator}>Текущий этап</div>}
            </div>
          </React.Fragment>
        ))}

        <div style={styles.arrowRight}></div>

        <div style={{
          ...styles.node, 
          ...(step >= 5 ? styles.activeNode : {}),
          ...(step === 5 ? styles.highlightedNode : {})
        }}>
          <strong>Результат</strong>
          <div style={styles.nodeSubtext}>Доступ открыт</div>
          {step === 5 && <div style={styles.checkmark}>✔ Доступ разрешён</div>}
        </div>
      </div>
    );
  };

  return (
    <BrowserOnly>
      {() => (
        <div style={styles.container}>
          <h2 style={styles.header}>🔐 Путь пользователя</h2>
          
          <FlowDiagram />

          <div style={styles.infoPanel}>
            <div style={styles.stepBadge}>
              Этап {step + 1} из {stepsData.length}
            </div>
            
            <h3 style={styles.stageTitle}>{currentStepData.title}</h3>
            <p style={styles.stageSubtitle}>{currentStepData.subtitle}</p>
            
            <div style={styles.descriptionBox}>
              <strong>Что происходит:</strong><br />
              {currentStepData.description}
            </div>

            <div style={styles.actionsRow}>
              <div style={styles.actionItem}>
                <strong>Действие пользователя:</strong><br />
                {currentStepData.userAction}
              </div>
              <div style={styles.actionItem}>
                <strong>Действие сервера:</strong><br />
                {currentStepData.serverAction}
              </div>
            </div>

            <div style={styles.controls}>
              {canReset && (
                <button 
                  onClick={handleReset} 
                  style={styles.buttonSecondary}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#f3f4f6';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#ffffff';
                  }}
                >
                  🔄 Начать заново
                </button>
              )}
              
              <button 
                onClick={handleNext} 
                disabled={!canNext}
                style={{
                  ...styles.buttonPrimary,
                  opacity: canNext ? 1 : 0.5,
                  cursor: canNext ? 'pointer' : 'default'
                }}
                onMouseEnter={(e) => {
                  if (canNext) {
                    e.currentTarget.style.backgroundColor = '#1d4ed8';
                  }
                }}
                onMouseLeave={(e) => {
                  if (canNext) {
                    e.currentTarget.style.backgroundColor = '#2563eb';
                  }
                }}
              >
                {canNext ? "➡️ Перейти к следующему этапу" : "✅ Завершить"}
              </button>
            </div>
          </div>
        </div>
      )}
    </BrowserOnly>
  );
};

const styles = {
  container: {
    fontFamily: 'system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    backgroundColor: '#f9fafb',
    border: '1px solid #e5e7eb',
    borderRadius: '12px',
    padding: 'clamp(16px, 4vw, 24px)',
    margin: 'clamp(10px, 3vw, 20px) 0',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
    maxWidth: '1400px',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  header: {
    fontSize: 'clamp(18px, 5vw, 24px)',
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 'clamp(16px, 4vw, 24px)',
    textAlign: 'center',
  },
  
  desktopFlow: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '24px',
    flexWrap: 'wrap',
    gap: '8px',
    overflowX: 'auto',
    padding: '8px 0',
  },
  node: {
    minWidth: '110px',
    padding: '10px 8px',
    borderRadius: '8px',
    textAlign: 'center',
    border: '2px solid #d1d5db',
    backgroundColor: '#ffffff',
    transition: 'all 0.3s ease',
    position: 'relative',
    flex: '0 0 auto',
  },
  clientNode: {
    borderColor: '#3b82f6',
    backgroundColor: '#eff6ff',
  },
  activeNode: {
    borderColor: '#2e7d32',
    backgroundColor: '#ecfdf5',
    transform: 'scale(1.02)',
    boxShadow: '0 0 0 3px rgba(46, 125, 50, 0.2)',
  },
  highlightedNode: {
    borderColor: '#f59e0b',
    backgroundColor: '#fffbeb',
    transform: 'scale(1.05)',
    boxShadow: '0 0 0 3px rgba(245, 158, 11, 0.3)',
  },
  nodeSubtext: {
    fontSize: '11px',
    color: '#6b7280',
    marginTop: '4px',
  },
  checkmark: {
    fontSize: '10px',
    color: '#2e7d32',
    fontWeight: 'bold',
    marginTop: '4px',
  },
  currentIndicator: {
    fontSize: '10px',
    color: '#d97706',
    fontWeight: 'bold',
    marginTop: '4px',
    fontStyle: 'italic',
  },
  arrowRight: {
    width: '30px',
    height: '2px',
    backgroundColor: '#d1d5db',
    flex: '0 0 auto',
  },
  
  tabletFlow: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '20px',
    flexWrap: 'wrap',
    gap: '4px',
    padding: '8px',
    overflowX: 'auto',
  },
  tabletNode: {
    padding: '8px 12px',
    borderRadius: '8px',
    textAlign: 'center',
    border: '2px solid #d1d5db',
    backgroundColor: '#ffffff',
    transition: 'all 0.3s ease',
    minWidth: '70px',
    fontSize: '12px',
  },
  tabletNodeClient: {
    padding: '8px 12px',
    borderRadius: '8px',
    textAlign: 'center',
    border: '2px solid #3b82f6',
    backgroundColor: '#eff6ff',
    minWidth: '70px',
    fontSize: '12px',
  },
  tabletNodeResult: {
    padding: '8px 12px',
    borderRadius: '8px',
    textAlign: 'center',
    border: '2px solid #d1d5db',
    backgroundColor: '#ffffff',
    minWidth: '70px',
    fontSize: '12px',
  },
  tabletNodeActive: {
    borderColor: '#2e7d32',
    backgroundColor: '#ecfdf5',
  },
  tabletNodeHighlight: {
    borderColor: '#f59e0b',
    backgroundColor: '#fffbeb',
    transform: 'scale(1.03)',
  },
  tabletNodeTitle: {
    fontSize: '10px',
    marginTop: '4px',
  },
  tabletArrow: {
    fontSize: '18px',
    color: '#d1d5db',
  },
  
  mobileFlow: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: '20px',
    gap: '8px',
  },
  mobileNode: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    width: '100%',
    maxWidth: '300px',
    padding: '12px',
    borderRadius: '8px',
    border: '2px solid #d1d5db',
    backgroundColor: '#ffffff',
    transition: 'all 0.3s ease',
  },
  mobileNodeActive: {
    borderColor: '#2e7d32',
    backgroundColor: '#ecfdf5',
  },
  mobileNodeIcon: {
    fontSize: '28px',
    minWidth: '40px',
    textAlign: 'center',
  },
  mobileNodeContent: {
    flex: 1,
    position: 'relative',
  },
  mobileNodeSub: {
    fontSize: '11px',
    color: '#6b7280',
    marginTop: '2px',
  },
  mobileCheck: {
    position: 'absolute',
    right: '-20px',
    top: '50%',
    transform: 'translateY(-50%)',
    fontSize: '16px',
    color: '#2e7d32',
  },
  mobileCurrent: {
    position: 'absolute',
    right: '-20px',
    top: '50%',
    transform: 'translateY(-50%)',
    fontSize: '16px',
  },
  mobileNodeStatus: {
    fontSize: '10px',
    color: '#3b82f6',
    marginTop: '2px',
  },
  mobileArrow: {
    fontSize: '20px',
    color: '#d1d5db',
  },
  
  infoPanel: {
    backgroundColor: '#ffffff',
    border: '1px solid #e5e7eb',
    borderRadius: '12px',
    padding: 'clamp(16px, 4vw, 24px)',
  },
  stepBadge: {
    display: 'inline-block',
    padding: '4px 12px',
    backgroundColor: '#dbeafe',
    color: '#1e40af',
    borderRadius: '20px',
    fontSize: 'clamp(11px, 3vw, 12px)',
    fontWeight: 'bold',
    marginBottom: '12px',
  },
  stageTitle: {
    fontSize: 'clamp(18px, 5vw, 24px)',
    fontWeight: 'bold',
    color: '#111827',
    margin: '0 0 4px 0',
    wordBreak: 'break-word',
  },
  stageSubtitle: {
    fontSize: 'clamp(13px, 4vw, 16px)',
    color: '#6b7280',
    margin: '0 0 16px 0',
  },
  descriptionBox: {
    backgroundColor: '#f3f4f6',
    padding: 'clamp(12px, 3vw, 16px)',
    borderRadius: '8px',
    marginBottom: '16px',
    lineHeight: '1.5',
    color: '#374151',
    fontSize: 'clamp(13px, 3.5vw, 14px)',
  },
  actionsRow: {
    display: 'flex',
    gap: 'clamp(12px, 3vw, 16px)',
    marginBottom: 'clamp(16px, 4vw, 24px)',
    flexWrap: 'wrap',
  },
  actionItem: {
    flex: 1,
    minWidth: 'clamp(200px, 40vw, 250px)',
    padding: 'clamp(10px, 3vw, 14px)',
    backgroundColor: '#f9fafb',
    border: '1px solid #e5e7eb',
    borderRadius: '8px',
    fontSize: 'clamp(13px, 3.5vw, 14px)',
    lineHeight: '1.5',
    wordBreak: 'break-word',
  },
  controls: {
    display: 'flex',
    justifyContent: 'flex-end',
    gap: 'clamp(8px, 3vw, 12px)',
    flexWrap: 'wrap',
  },
  buttonPrimary: {
    padding: 'clamp(8px, 3vw, 10px) clamp(16px, 4vw, 24px)',
    backgroundColor: '#2563eb',
    color: '#ffffff',
    border: 'none',
    borderRadius: '8px',
    fontSize: 'clamp(14px, 4vw, 15px)',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    whiteSpace: 'nowrap',
  },
  buttonSecondary: {
    padding: 'clamp(8px, 3vw, 10px) clamp(16px, 4vw, 24px)',
    backgroundColor: '#ffffff',
    color: '#374151',
    border: '1px solid #d1d5db',
    borderRadius: '8px',
    fontSize: 'clamp(14px, 4vw, 15px)',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    whiteSpace: 'nowrap',
  }
};

// Убираем динамическое добавление стилей в head, так как это может вызвать проблемы с SSR
// Вместо этого добавляем медиа-запросы непосредственно в компонент через style тег внутри BrowserOnly

export default AuthenticationFlow;