import React, { useState } from 'react';
import BrowserOnly from './BrowserOnly';

const DIDemo = () => {
  const [injectionType, setInjectionType] = useState('constructor');
  const [emailSent, setEmailSent] = useState(false);
  const [lastMessage, setLastMessage] = useState('');
  const [serviceStatus, setServiceStatus] = useState({
    hasEmailService: false,
    message: ''
  });

  const [container, setContainer] = useState({
    registered: false,
    emailImpl: null
  });

  class EmailService {
    send(msg) {
      throw new Error('Метод send должен быть реализован');
    }
  }

  class SmtpEmailService extends EmailService {
    send(msg) {
      setEmailSent(true);
      setLastMessage(msg);
      console.log(`📧 SMTP: ${msg}`);
      return true;
    }
  }

  class MockEmailService extends EmailService {
    send(msg) {
      setEmailSent(true);
      setLastMessage(`[MOCK] ${msg}`);
      console.log(`🎭 MOCK: ${msg}`);
      return true;
    }
  }

  class UserServiceConstructor {
    constructor(emailService) {
      if (!emailService) throw new Error('EmailService обязателен');
      this.emailService = emailService;
      this.injectedVia = 'constructor';
    }

    register(user) {
      const msg = `Welcome, ${user}! Your registration via Constructor DI is complete.`;
      this.emailService.send(msg);
      return msg;
    }

    hasDependency() { return !!this.emailService; }
  }

  class UserServiceSetter {
    constructor() {
      this.emailService = null;
      this.injectedVia = 'setter';
    }

    setEmailService(emailService) {
      this.emailService = emailService;
    }

    register(user) {
      if (!this.emailService) {
        throw new Error('EmailService не был внедрён через setter!');
      }
      const msg = `Welcome, ${user}! Your registration via Setter DI is complete.`;
      this.emailService.send(msg);
      return msg;
    }

    hasDependency() { return !!this.emailService; }
  }

  class UserServiceProperty {
    constructor() {
      this.emailService = null;
      this.injectedVia = 'property';
    }

    get EmailService() { return this.emailService; }
    set EmailService(value) {
      this.emailService = value;
    }

    register(user) {
      if (!this.emailService) {
        throw new Error('EmailService не был внедрён через property!');
      }
      const msg = `Welcome, ${user}! Your registration via Property DI is complete.`;
      this.emailService.send(msg);
      return msg;
    }

    hasDependency() { return !!this.emailService; }
  }

  class UserServiceField {
    constructor() {
      this.injectedVia = 'field';
    }
  }

  UserServiceField.prototype.emailService = null;
  UserServiceField.prototype.register = function(user) {
    if (!this.emailService) {
      throw new Error('EmailService не был внедрён в поле!');
    }
    const msg = `Welcome, ${user}! Your registration via Field DI (ANTI-PATTERN) is complete.`;
    this.emailService.send(msg);
    return msg;
  };
  UserServiceField.prototype.hasDependency = function() { return !!this.emailService; };

  class UserServiceMethod {
    constructor() {
      this.injectedVia = 'method';
    }

    register(user, emailService) {
      if (!emailService) {
        throw new Error('EmailService должен быть передан в метод!');
      }
      const msg = `Welcome, ${user}! Your registration via Method DI is complete.`;
      emailService.send(msg);
      return msg;
    }

    hasDependency() { return false; }
  }

  class DIContainer {
    constructor() {
      this.services = new Map();
      this.instances = new Map();
    }

    register(interfaceName, implementation, lifetime = 'transient') {
      this.services.set(interfaceName, { implementation, lifetime });
    }

    resolve(interfaceName) {
      const registration = this.services.get(interfaceName);
      if (!registration) {
        throw new Error(`Service ${interfaceName} not registered`);
      }

      if (registration.lifetime === 'singleton') {
        if (!this.instances.has(interfaceName)) {
          this.instances.set(interfaceName, new registration.implementation());
        }
        return this.instances.get(interfaceName);
      }

      return new registration.implementation();
    }
  }

  const getServiceInstance = (type, emailSvc = null) => {
    setEmailSent(false);
    setLastMessage('');

    try {
      let service;
      switch(type) {
        case 'constructor':
          if (!emailSvc) throw new Error('Constructor Injection требует EmailService');
          service = new UserServiceConstructor(emailSvc);
          break;
        case 'setter':
          service = new UserServiceSetter();
          if (emailSvc) service.setEmailService(emailSvc);
          break;
        case 'property':
          service = new UserServiceProperty();
          if (emailSvc) service.EmailService = emailSvc;
          break;
        case 'field':
          service = new UserServiceField();
          if (emailSvc) service.emailService = emailSvc;
          break;
        case 'method':
          service = new UserServiceMethod();
          break;
        default:
          service = new UserServiceConstructor(emailSvc);
      }
      
      setServiceStatus({
        hasEmailService: service.hasDependency ? service.hasDependency() : false,
        message: `✅ Сервис создан через ${type} injection`
      });
      return service;
    } catch (error) {
      setServiceStatus({
        hasEmailService: false,
        message: `❌ Ошибка: ${error.message}`
      });
      return null;
    }
  };

  const handleRegister = () => {
    const emailService = container.emailImpl === 'mock' 
      ? new MockEmailService() 
      : new SmtpEmailService();
    
    const service = getServiceInstance(injectionType, emailService);
    
    if (service) {
      try {
        if (injectionType === 'method') {
          service.register('DIP User', emailService);
        } else {
          service.register('DIP User');
        }
        setServiceStatus(prev => ({
          ...prev,
          message: `✅ ${prev.message} | Email отправлен!`
        }));
      } catch (error) {
        setServiceStatus(prev => ({
          ...prev,
          message: `❌ ${error.message}`
        }));
      }
    }
  };

  const handleRegisterContainer = () => {
    if (!container.registered) {
      setContainer({
        registered: true,
        emailImpl: container.emailImpl || 'smtp'
      });
    }

    const diContainer = new DIContainer();
    const emailImpl = container.emailImpl === 'mock' 
      ? MockEmailService 
      : SmtpEmailService;
    
    diContainer.register('IEmailService', emailImpl, 'singleton');
    
    try {
      const emailService = diContainer.resolve('IEmailService');
      const service = new UserServiceConstructor(emailService);
      const result = service.register('Container User');
      
      setServiceStatus({
        hasEmailService: true,
        message: `✅ DI-контейнер: создан singleton экземпляр | ${result}`
      });
      setLastMessage(result);
      setEmailSent(true);
    } catch (error) {
      setServiceStatus({
        hasEmailService: false,
        message: `❌ DI-контейнер ошибка: ${error.message}`
      });
    }
  };

  const styles = {
    container: {
      background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
      borderRadius: 'clamp(16px, 4vw, 24px)',
      padding: 'clamp(1rem, 4vw, 1.5rem)',
      margin: 'clamp(1rem, 3vw, 2rem) 0',
      color: '#e0e0e0',
      fontFamily: 'system-ui, -apple-system, sans-serif',
      boxShadow: '0 20px 35px -10px rgba(0, 0, 0, 0.3)',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      maxWidth: '100%',
      overflowX: 'hidden'
    },
    header: {
      margin: '0 0 0.5rem 0',
      fontSize: 'clamp(1.2rem, 5vw, 1.6rem)',
      color: '#fff',
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      flexWrap: 'wrap'
    },
    subtitle: {
      color: '#a0a0c0',
      fontSize: 'clamp(0.8rem, 3vw, 0.95rem)',
      marginBottom: 'clamp(1rem, 4vw, 1.8rem)',
      paddingBottom: 'clamp(0.5rem, 2vw, 1rem)',
      borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
    },
    comparisonNote: {
      background: 'rgba(102, 126, 234, 0.15)',
      borderLeft: '3px solid #667eea',
      padding: 'clamp(0.6rem, 2vw, 0.8rem) clamp(0.8rem, 3vw, 1rem)',
      borderRadius: '8px',
      marginBottom: 'clamp(1rem, 3vw, 1.5rem)',
      fontSize: 'clamp(0.8rem, 3vw, 0.9rem)'
    },
    layout: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
      gap: 'clamp(1rem, 3vw, 2rem)'
    },
    typesContainer: {
      background: 'rgba(0, 0, 0, 0.3)',
      borderRadius: 'clamp(12px, 3vw, 16px)',
      padding: 'clamp(0.8rem, 3vw, 1.2rem)'
    },
    typeTitle: {
      fontSize: 'clamp(1rem, 4vw, 1.2rem)',
      marginBottom: 'clamp(0.8rem, 2vw, 1rem)',
      color: '#8ec07c',
      borderBottom: '1px solid rgba(255,255,255,0.1)',
      paddingBottom: 'clamp(0.4rem, 1.5vw, 0.5rem)'
    },
    typeGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))',
      gap: 'clamp(0.6rem, 2vw, 0.8rem)',
      marginBottom: 'clamp(1rem, 3vw, 1.5rem)'
    },
    typeCard: (isActive, isAntiPattern = false) => ({
      background: isActive ? 'rgba(102, 126, 234, 0.25)' : 'rgba(255, 255, 255, 0.05)',
      border: `1px solid ${isActive ? '#667eea' : 'rgba(255, 255, 255, 0.1)'}`,
      borderRadius: '12px',
      padding: 'clamp(0.6rem, 2vw, 0.8rem)',
      cursor: 'pointer',
      transition: 'all 0.2s',
      opacity: isAntiPattern ? 0.7 : 1,
      borderLeft: isAntiPattern ? '3px solid #e74c3c' : 'none'
    }),
    typeName: {
      fontSize: 'clamp(0.85rem, 3vw, 1rem)',
      fontWeight: 'bold',
      display: 'block',
      marginBottom: '0.3rem',
      wordBreak: 'break-word'
    },
    typeDesc: {
      fontSize: 'clamp(0.65rem, 2.5vw, 0.75rem)',
      color: '#aaa',
      display: 'block'
    },
    antiPatternBadge: {
      background: '#e74c3c',
      color: 'white',
      fontSize: 'clamp(0.55rem, 2vw, 0.65rem)',
      padding: '0.2rem 0.4rem',
      borderRadius: '4px',
      marginLeft: '0.5rem',
      display: 'inline-block',
      whiteSpace: 'nowrap'
    },
    comparisonTable: {
      width: '100%',
      borderCollapse: 'collapse',
      fontSize: 'clamp(0.65rem, 2.5vw, 0.75rem)',
      marginTop: '1rem',
      display: 'block',
      overflowX: 'auto'
    },
    tableHeader: {
      background: 'rgba(0, 0, 0, 0.4)',
      padding: 'clamp(0.4rem, 1.5vw, 0.5rem)',
      textAlign: 'left',
      borderBottom: '1px solid rgba(255,255,255,0.2)'
    },
    tableCell: {
      padding: 'clamp(0.4rem, 1.5vw, 0.5rem)',
      borderBottom: '1px solid rgba(255,255,255,0.1)'
    },
    interactiveDemo: {
      background: 'rgba(0, 0, 0, 0.25)',
      borderRadius: 'clamp(12px, 3vw, 16px)',
      padding: 'clamp(0.8rem, 3vw, 1.2rem)'
    },
    selectorGroup: {
      marginBottom: 'clamp(1rem, 3vw, 1.5rem)'
    },
    label: {
      display: 'block',
      fontSize: 'clamp(0.8rem, 3vw, 0.85rem)',
      color: '#a0a0c0',
      marginBottom: '0.5rem'
    },
    buttonGroup: {
      display: 'flex',
      gap: 'clamp(0.4rem, 2vw, 0.6rem)',
      flexWrap: 'wrap'
    },
    button: (variant = 'primary') => ({
      background: variant === 'primary' 
        ? 'linear-gradient(135deg, #667eea, #764ba2)'
        : variant === 'danger'
        ? 'linear-gradient(135deg, #e74c3c, #c0392b)'
        : 'rgba(255, 255, 255, 0.1)',
      border: 'none',
      padding: 'clamp(0.5rem, 2vw, 0.6rem) clamp(0.8rem, 3vw, 1.2rem)',
      borderRadius: '40px',
      cursor: 'pointer',
      fontSize: 'clamp(0.75rem, 3vw, 0.85rem)',
      color: 'white',
      transition: 'all 0.2s',
      flex: '0 0 auto',
      whiteSpace: 'nowrap',
      '@media (max-width: 480px)': {
        whiteSpace: 'normal',
        flex: '1 1 auto'
      }
    }),
    statusCard: {
      background: 'rgba(0, 0, 0, 0.4)',
      borderRadius: '12px',
      padding: 'clamp(0.8rem, 3vw, 1rem)',
      marginTop: '1rem'
    },
    statusMessage: {
      color: serviceStatus.message.includes('✅') ? '#8ec07c' : '#e74c3c',
      fontSize: 'clamp(0.8rem, 3vw, 0.85rem)',
      marginBottom: '0.5rem',
      wordBreak: 'break-word'
    },
    emailPreview: {
      background: '#0d1117',
      padding: 'clamp(0.6rem, 2vw, 0.8rem)',
      borderRadius: '8px',
      fontSize: 'clamp(0.7rem, 2.5vw, 0.8rem)',
      marginTop: '0.5rem',
      wordBreak: 'break-word'
    },
    codeBlock: {
      background: '#0d1117',
      padding: 'clamp(0.6rem, 2vw, 0.8rem)',
      borderRadius: '8px',
      overflowX: 'auto',
      fontSize: 'clamp(0.6rem, 2vw, 0.7rem)',
      lineHeight: '1.4',
      color: '#e6e6e6',
      fontFamily: 'monospace',
      marginTop: '0.5rem',
      whiteSpace: 'pre-wrap',
      wordBreak: 'break-word'
    },
    containerDemo: {
      marginTop: 'clamp(1rem, 4vw, 1.5rem)',
      paddingTop: 'clamp(0.8rem, 2vw, 1rem)',
      borderTop: '1px solid rgba(255,255,255,0.1)'
    }
  };

  const injectionTypes = [
    { id: 'constructor', name: 'Constructor', desc: 'Через конструктор', antiPattern: false, recommended: true },
    { id: 'setter', name: 'Setter', desc: 'Через сеттер', antiPattern: false, recommended: false },
    { id: 'property', name: 'Property', desc: 'Через свойство', antiPattern: false, recommended: false },
    { id: 'field', name: 'Field', desc: 'Через поле', antiPattern: true, recommended: false },
    { id: 'method', name: 'Method', desc: 'Через метод', antiPattern: false, recommended: false }
  ];

  const InnerComponent = () => (
    <div style={styles.container}>
      <div>
        <h3 style={styles.header}>
          <span>💉</span> Dependency Injection (DI)
        </h3>
        <p style={styles.subtitle}>
          Паттерн проектирования для реализации DIP. Различные способы внедрения зависимостей
        </p>
      </div>

      <div style={styles.comparisonNote}>
        <strong>DIP vs DI:</strong> Dependency Inversion Principle (DIP) — «что делать» (зависеть от абстракций), 
        Dependency Injection (DI) — «как делать» (передавать зависимости извне).
      </div>

      <div style={styles.layout}>
        <div style={styles.typesContainer}>
          <div style={styles.typeTitle}>Типы внедрения зависимостей</div>
          <div style={styles.typeGrid}>
            {injectionTypes.map(type => (
              <div
                key={type.id}
                style={styles.typeCard(injectionType === type.id, type.antiPattern)}
                onClick={() => setInjectionType(type.id)}
                onTouchStart={(e) => {
                  if (injectionType !== type.id) {
                    e.currentTarget.style.background = 'rgba(102, 126, 234, 0.25)';
                  }
                }}
                onMouseEnter={(e) => {
                  if (injectionType !== type.id) {
                    e.currentTarget.style.background = 'rgba(102, 126, 234, 0.15)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (injectionType !== type.id) {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                  }
                }}
              >
                <span style={styles.typeName}>
                  {type.name}
                  {type.antiPattern && <span style={styles.antiPatternBadge}>ANTI-PATTERN</span>}
                  {type.recommended && <span style={{...styles.antiPatternBadge, background: '#27ae60', marginLeft: '0.5rem'}}>РЕКОМЕНДУЕТСЯ</span>}
                </span>
                <span style={styles.typeDesc}>{type.desc}</span>
              </div>
            ))}
          </div>

          <details>
            <summary style={{cursor: 'pointer', color: '#8ec07c', fontSize: 'clamp(0.8rem, 3vw, 0.85rem)', marginBottom: '0.5rem'}}>
              Сравнение методов инъекции
            </summary>
            <div style={{overflowX: 'auto'}}>
              <table style={styles.comparisonTable}>
                <thead>
                  <tr><th style={styles.tableHeader}>Критерий</th><th style={styles.tableHeader}>Constructor</th><th style={styles.tableHeader}>Setter/Property</th><th style={styles.tableHeader}>Field</th><th style={styles.tableHeader}>Method</th></tr>
                </thead>
                <tbody>
                  <tr><td style={styles.tableCell}>Обязательность</td><td style={styles.tableCell}>Обязательная</td><td style={styles.tableCell}>Опциональная</td><td style={styles.tableCell}>Неочевидна</td><td style={styles.tableCell}>На вызов</td></tr>
                  <tr><td style={styles.tableCell}>Изменяемость</td><td style={styles.tableCell}>Иммутабельная</td><td style={styles.tableCell}>Мутабельная</td><td style={styles.tableCell}>Мутабельная</td><td style={styles.tableCell}>Не хранится</td></tr>
                  <tr><td style={styles.tableCell}>Тестируемость</td><td style={styles.tableCell}>Легко</td><td style={styles.tableCell}>Требует доп.кода</td><td style={styles.tableCell}>Сложно</td><td style={styles.tableCell}>Легко</td></tr>
                  <tr><td style={styles.tableCell}>Рекомендация</td><td style={styles.tableCell}>ЛУЧШИЙ</td><td style={styles.tableCell}>Для опциональных</td><td style={styles.tableCell}>Избегать</td><td style={styles.tableCell}>Для одного вызова</td></tr>
                </tbody>
              </table>
            </div>
          </details>
        </div>

        <div style={styles.interactiveDemo}>
          <div style={styles.selectorGroup}>
            <label style={styles.label}>Выбери способ внедрения зависимости:</label>
            <div style={styles.buttonGroup}>
              <button 
                style={styles.button(injectionType === 'constructor' ? 'primary' : 'secondary')}
                onClick={() => setInjectionType('constructor')}
              >
                Constructor
              </button>
              <button 
                style={styles.button(injectionType === 'setter' ? 'primary' : 'secondary')}
                onClick={() => setInjectionType('setter')}
              >
                Setter
              </button>
              <button 
                style={styles.button(injectionType === 'property' ? 'primary' : 'secondary')}
                onClick={() => setInjectionType('property')}
              >
                Property
              </button>
              <button 
                style={styles.button(injectionType === 'field' ? 'danger' : 'secondary')}
                onClick={() => setInjectionType('field')}
              >
                Field
              </button>
              <button 
                style={styles.button(injectionType === 'method' ? 'primary' : 'secondary')}
                onClick={() => setInjectionType('method')}
              >
                Method
              </button>
            </div>
          </div>

          <div style={styles.selectorGroup}>
            <label style={styles.label}>🔧 Выбери реализацию EmailService (для тестирования):</label>
            <div style={styles.buttonGroup}>
              <button 
                style={styles.button(container.emailImpl === 'smtp' ? 'primary' : 'secondary')}
                onClick={() => setContainer({...container, emailImpl: 'smtp'})}
              >
                SMTP (реальный)
              </button>
              <button 
                style={styles.button(container.emailImpl === 'mock' ? 'primary' : 'secondary')}
                onClick={() => setContainer({...container, emailImpl: 'mock'})}
              >
                MOCK (для тестов)
              </button>
            </div>
          </div>

          <div style={styles.buttonGroup}>
            <button 
              style={styles.button('primary')}
              onClick={handleRegister}
            >
              Зарегистрировать пользователя
            </button>
            <button 
              style={styles.button('secondary')}
              onClick={() => {
                setEmailSent(false);
                setLastMessage('');
                setServiceStatus({ hasEmailService: false, message: '🔄 Сброшено' });
              }}
            >
              🔄 Сброс
            </button>
          </div>

          <div style={styles.statusCard}>
            <div style={styles.statusMessage}>{serviceStatus.message}</div>
            {emailSent && lastMessage && (
              <div style={styles.emailPreview}>
                <strong>📧 Email отправлен:</strong><br/>{lastMessage}
              </div>
            )}
          </div>

          <details>
            <summary style={{cursor: 'pointer', color: '#8ec07c', fontSize: 'clamp(0.8rem, 3vw, 0.85rem)'}}>
              Пример кода для {injectionTypes.find(t => t.id === injectionType)?.name}
            </summary>
            <pre style={styles.codeBlock}>
              {injectionType === 'constructor' && `// Constructor Injection (РЕКОМЕНДУЕТСЯ)
class UserService {
    private final EmailService emailService;
    
    public UserService(EmailService emailService) {
        this.emailService = emailService;
    }
}`}
              {injectionType === 'setter' && `// Setter Injection
class UserService {
    private EmailService emailService;
    
    public void setEmailService(EmailService emailService) {
        this.emailService = emailService;
    }
}`}
              {injectionType === 'property' && `// Property Injection
public class UserService {
    public IEmailService EmailService { get; set; }
}`}
              {injectionType === 'field' && `// Field Injection (ANTI-PATTERN!)
@Service
public class UserService {
    @Autowired
    private EmailService emailService;
}`}
              {injectionType === 'method' && `// Method Injection
class UserService {
    public void register(User user, EmailService emailService) {
        emailService.send("Welcome!");
    }
}`}
            </pre>
          </details>

          <div style={styles.containerDemo}>
            <div style={styles.typeTitle}>DI-контейнер (IoC Container)</div>
            <div style={styles.buttonGroup}>
              <button 
                style={styles.button('primary')}
                onClick={handleRegisterContainer}
              >
                Зарегистрировать и использовать DI-контейнер
              </button>
            </div>
            <pre style={styles.codeBlock}>
{`// DI-контейнер автоматически управляет зависимостями
container.register<IEmailService, SmtpEmailService>();
container.register<UserService>();

UserService userService = container.resolve<UserService>();`}
            </pre>
          </div>
        </div>
      </div>
    </div>
  );

  return <BrowserOnly>{() => <InnerComponent />}</BrowserOnly>;
};

export default DIDemo;