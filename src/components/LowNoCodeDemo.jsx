import React, { useState, useEffect } from 'react';

const LowNoCodeDemo = () => {
  const [activeTab, setActiveTab] = useState('nocode');
  const [inputCode, setInputCode] = useState('');
  const [parsedResult, setParsedResult] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const [components, setComponents] = useState([
    { id: 1, type: 'button', label: 'Кнопка', x: 50, y: 50 },
    { id: 2, type: 'text', label: 'Текстовый блок', x: 50, y: 150 },
    { id: 3, type: 'input', label: 'Поле ввода', x: 50, y: 250 },
  ]);
  const [selectedComponent, setSelectedComponent] = useState(null);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const lowCodeExamples = {
    simpleButton: {
      name: 'Простая кнопка',
      code: `{
  type: "button",
  props: {
    text: "Нажми меня",
    onClick: () => alert("Привет из Low-Code!"),
    style: { backgroundColor: "#4CAF50", color: "white" }
  }
}`,
      result: 'Кнопка с зеленым фоном и всплывающим сообщением'
    },
    dataTable: {
      name: 'Таблица данных',
      code: `{
  type: "table",
  props: {
    data: [
      { name: "Анна", age: 25, city: "Москва" },
      { name: "Иван", age: 30, city: "СПб" },
      { name: "Мария", age: 28, city: "Казань" }
    ],
    columns: ["name", "age", "city"]
  }
}`,
      result: 'Таблица с тремя строками данных, автоматическая сортировка по клику'
    },
    chart: {
      name: 'График продаж',
      code: `{
  type: "chart",
  props: {
    data: [120, 200, 150, 80, 70, 110, 130],
    labels: ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"],
    type: "line"
  }
}`,
      result: 'Линейный график продаж по дням недели'
    }
  };

  const availableComponents = [
    { id: 'btn', type: 'button', icon: '🔘', name: 'Кнопка', defaultLabel: 'Новая кнопка' },
    { id: 'text', type: 'text', icon: '📝', name: 'Текст', defaultLabel: 'Текстовый блок' },
    { id: 'input', type: 'input', icon: '⌨️', name: 'Поле ввода', defaultLabel: 'Введите текст' },
    { id: 'card', type: 'card', icon: '🃏', name: 'Карточка', defaultLabel: 'Карточка' },
  ];

  const parseLowCode = () => {
    try {
      if (inputCode.includes('button') && inputCode.includes('alert')) {
        setParsedResult({
          success: true,
          component: 'button',
          message: '✅ Создана кнопка: Нажми меня → показывает "Hello World!"'
        });
      } else if (inputCode.includes('table') && inputCode.includes('data')) {
        setParsedResult({
          success: true,
          component: 'table',
          message: '✅ Создана таблица с 3 строками данных, поддержка сортировки'
        });
      } else if (inputCode.includes('chart') && inputCode.includes('data')) {
        setParsedResult({
          success: true,
          component: 'chart',
          message: '✅ Создан график продаж: максимальное значение 200 (среда)'
        });
      } else if (inputCode.trim()) {
        setParsedResult({
          success: false,
          message: '❌ Не удалось распознать конфигурацию. Попробуйте примеры выше.'
        });
      }
    } catch (error) {
      setParsedResult({
        success: false,
        message: '❌ Ошибка парсинга: ' + error.message
      });
    }
  };

  const handleDragStart = (e, component) => {
    e.dataTransfer.setData('componentType', component.type);
    e.dataTransfer.setData('componentLabel', component.defaultLabel);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const type = e.dataTransfer.getData('componentType');
    const label = e.dataTransfer.getData('componentLabel');
    
    const rect = e.currentTarget.getBoundingClientRect();
    let x = e.clientX - rect.left - 50;
    let y = e.clientY - rect.top - 20;

    const maxWidth = isMobile ? rect.width : 600;
    const maxHeight = isMobile ? rect.height : 400;

    x = Math.max(10, Math.min(x, maxWidth - 100));
    y = Math.max(10, Math.min(y, maxHeight - 40));
    
    const newComponent = {
      id: Date.now(),
      type: type,
      label: label,
      x: x,
      y: y
    };
    
    setComponents([...components, newComponent]);
  };

  const handleComponentMouseDown = (e, component) => {
    e.preventDefault(); 
    e.stopPropagation();
    setSelectedComponent(component.id);
    const offsetX = e.clientX - component.x;
    const offsetY = e.clientY - component.y;
    setDragOffset({ x: offsetX, y: offsetY });
  };

  const handleMouseMove = (e) => {
    if (selectedComponent !== null) {
      const newX = e.clientX - dragOffset.x;
      const newY = e.clientY - dragOffset.y;
      
      setComponents(components.map(comp => {
        if (comp.id === selectedComponent) {
          const container = document.getElementById('canvas-container');
          const width = container ? container.clientWidth : 600;
          const height = container ? container.clientHeight : 400;

          return { 
            ...comp, 
            x: Math.max(0, Math.min(newX, width - 100)), 
            y: Math.max(0, Math.min(newY, height - 40)) 
          };
        }
        return comp;
      }));
    }
  };

  const handleMouseUp = () => {
    setSelectedComponent(null);
  };

  useEffect(() => {
    if (selectedComponent !== null) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, [selectedComponent, dragOffset]);

  const renderComponent = (comp) => {
    switch (comp.type) {
      case 'button':
        return (
          <button
            style={{
              padding: '8px 16px',
              backgroundColor: '#4CAF50',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '12px',
              whiteSpace: 'nowrap'
            }}
            onClick={() => alert(`Нажата кнопка: ${comp.label}`)}
          >
            {comp.label}
          </button>
        );
      case 'text':
        return <div style={{ padding: '8px', backgroundColor: '#f0f0f0', borderRadius: '4px', wordBreak: 'break-word' }}>{comp.label}</div>;
      case 'input':
        return <input type="text" placeholder={comp.label} style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc', width: '100%', boxSizing: 'border-box' }} />;
      case 'card':
        return (
          <div style={{ padding: '12px', backgroundColor: '#fff', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', border: '1px solid #ddd' }}>
            <strong>{comp.label}</strong>
            <p style={{ fontSize: '12px', marginTop: '8px' }}>Содержимое карточки</p>
          </div>
        );
      default:
        return <div>{comp.label}</div>;
    }
  };

  const styles = {
    container: {
      maxWidth: '100%',
      margin: '0 auto',
      padding: '20px',
      fontFamily: 'Arial, sans-serif',
      boxSizing: 'border-box'
    },
    header: {
      textAlign: 'center',
      marginBottom: '30px',
      padding: '0 10px'
    },
    title: {
      color: '#2c3e50',
      fontSize: 'clamp(24px, 5vw, 28px)',
      marginBottom: '10px'
    },
    subtitle: {
      color: '#7f8c8d',
      fontSize: '16px',
      lineHeight: '1.4'
    },
    tabs: {
      display: 'flex',
      gap: '10px',
      marginBottom: '20px',
      borderBottom: '2px solid #ecf0f1',
      flexWrap: 'wrap',
      justifyContent: 'center'
    },
    tab: {
      padding: '10px 20px',
      cursor: 'pointer',
      border: 'none',
      background: 'none',
      fontSize: '16px',
      fontWeight: 'bold',
      transition: 'all 0.3s',
      flex: '1 1 auto',
      minWidth: '150px'
    },
    activeTab: {
      color: '#3498db',
      borderBottom: '2px solid #3498db'
    },
    demoContainer: {
      padding: '20px',
      backgroundColor: '#f8f9fa',
      borderRadius: '8px',
      marginBottom: '20px',
      overflow: 'hidden'
    },
    lowCodeSection: {
      display: 'flex',
      gap: '20px',
      flexWrap: 'wrap',
      alignItems: 'flex-start'
    },
    examplesPanel: {
      flex: '1 1 300px',
      minWidth: '250px'
    },
    editorPanel: {
      flex: '1 1 300px',
      minWidth: '300px'
    },
    exampleCard: {
      backgroundColor: 'white',
      padding: '15px',
      marginBottom: '15px',
      borderRadius: '8px',
      cursor: 'pointer',
      transition: 'transform 0.2s',
      border: '1px solid #ddd',
      flex: '1 1 100%'
    },
    exampleCardHover: {
      transform: 'translateX(5px)',
      borderColor: '#3498db'
    },
    exampleTitle: {
      fontWeight: 'bold',
      marginBottom: '8px',
      color: '#2c3e50'
    },
    exampleCode: {
      backgroundColor: '#f4f4f4',
      padding: '10px',
      borderRadius: '4px',
      fontSize: '12px',
      fontFamily: 'monospace',
      overflowX: 'auto'
    },
    textarea: {
      width: '100%',
      height: '150px',
      padding: '10px',
      fontFamily: 'monospace',
      fontSize: '12px',
      border: '1px solid #ddd',
      borderRadius: '4px',
      marginBottom: '10px',
      boxSizing: 'border-box'
    },
    button: {
      padding: '10px 20px',
      backgroundColor: '#3498db',
      color: 'white',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
      fontSize: '14px',
      width: '100%',
      marginTop: '5px'
    },
    result: {
      marginTop: '15px',
      padding: '15px',
      borderRadius: '8px',
      backgroundColor: '#fff3cd',
      border: '1px solid #ffeaa7'
    },
    resultSuccess: {
      backgroundColor: '#d4edda',
      borderColor: '#c3e6cb',
      color: '#155724'
    },
    resultError: {
      backgroundColor: '#f8d7da',
      borderColor: '#f5c6cb',
      color: '#721c24'
    },
    noCodeContainer: {
      minHeight: '400px',
      position: 'relative',
      width: '100%'
    },
    componentsPalette: {
      display: 'flex',
      gap: '10px',
      marginBottom: '20px',
      padding: '15px',
      backgroundColor: '#ecf0f1',
      borderRadius: '8px',
      flexWrap: 'wrap',
      justifyContent: 'center'
    },
    draggableComponent: {
      padding: '8px 15px',
      backgroundColor: '#3498db',
      color: 'white',
      borderRadius: '6px',
      cursor: 'move',
      display: 'inline-flex',
      alignItems: 'center',
      gap: '8px',
      fontSize: '14px',
      userSelect: 'none'
    },
    canvas: {
      backgroundColor: '#fff',
      border: `2px dashed ${isDragging ? '#3498db' : '#bdc3c7'}`,
      borderRadius: '8px',
      minHeight: '400px',
      position: 'relative',
      transition: 'all 0.3s',
      width: '100%',
      boxSizing: 'border-box'
    },
    canvasInner: {
      position: 'relative',
      minHeight: '400px',
      width: '100%'
    },
    floatingComponent: {
      position: 'absolute',
      cursor: 'move',
      userSelect: 'none',
      touchAction: 'none'
    },
    infoBox: {
      marginTop: '20px',
      padding: '15px',
      backgroundColor: '#e8f4f8',
      borderRadius: '8px',
      borderLeft: '4px solid #3498db',
      fontSize: '14px',
      lineHeight: '1.5'
    },
    infoTitle: {
      fontWeight: 'bold',
      marginBottom: '10px',
      color: '#2c3e50'
    },
    mobileWarning: {
      backgroundColor: '#fff3cd',
      color: '#856404',
      padding: '10px',
      borderRadius: '4px',
      marginBottom: '15px',
      textAlign: 'center',
      fontSize: '14px'
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.title}>🔧 Low-Code vs No-Code</h1>
        <p style={styles.subtitle}>Наглядная демонстрация концепций визуальной разработки</p>
      </div>

      <div style={styles.tabs}>
        <button
          style={{ ...styles.tab, ...(activeTab === 'lowcode' ? styles.activeTab : {}) }}
          onClick={() => setActiveTab('lowcode')}
        >
          Low-Code (минимум кода)
        </button>
        <button
          style={{ ...styles.tab, ...(activeTab === 'nocode' ? styles.activeTab : {}) }}
          onClick={() => setActiveTab('nocode')}
        >
          No-Code (визуальный конструктор)
        </button>
      </div>

      {activeTab === 'lowcode' && (
        <div style={styles.demoContainer}>
          <div style={styles.lowCodeSection}>
            <div style={styles.examplesPanel}>
              <h3 style={{fontSize: '18px'}}>Примеры конфигураций</h3>
              {Object.entries(lowCodeExamples).map(([key, example]) => (
                <div
                  key={key}
                  style={styles.exampleCard}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'translateX(5px)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'translateX(0)'}
                  onClick={() => {
                    setInputCode(example.code);
                    setParsedResult(null);
                  }}
                >
                  <div style={styles.exampleTitle}>{example.name}</div>
                  <div style={styles.exampleCode}>
                    <pre style={{ margin: 0, whiteSpace: 'pre-wrap' }}>{example.code.substring(0, 100)}...</pre>
                  </div>
                  <div style={{ fontSize: '12px', marginTop: '8px', color: '#7f8c8d' }}>
                    → {example.result}
                  </div>
                </div>
              ))}
            </div>

            <div style={styles.editorPanel}>
              <h3 style={{fontSize: '18px'}}>Редактор конфигурации</h3>
              <textarea
                style={styles.textarea}
                value={inputCode}
                onChange={(e) => setInputCode(e.target.value)}
                placeholder="Вставьте JSON-конфигурацию компонента..."
              />
              <button style={styles.button} onClick={parseLowCode}>
                Собрать компонент
              </button>

              {parsedResult && (
                <div style={{
                  ...styles.result,
                  ...(parsedResult.success ? styles.resultSuccess : styles.resultError)
                }}>
                  <strong>{parsedResult.success ? '✅ Готово!' : '⚠️ Ошибка'}</strong>
                  <p style={{ marginTop: '8px', marginBottom: 0 }}>{parsedResult.message}</p>
                </div>
              )}
            </div>
          </div>

          <div style={styles.infoBox}>
            <div style={styles.infoTitle}>💡 Что такое Low-Code?</div>
            <p>Low-Code платформы позволяют создавать приложения с минимальным количеством ручного кодирования. 
            Разработчик пишет небольшие конфигурации (JSON/YAML) или использует визуальные редакторы, 
            а платформа генерирует готовый код. Примеры: <strong>OutSystems, Mendix, Retool</strong>.</p>
            <p style={{ fontSize: '14px', marginTop: '10px' }}>
              Преимущества: скорость разработки в 5-10 раз выше, меньше ошибок, легче поддержка<br/>
              Идеально для: внутренних инструментов, админ-панелей, MVP
            </p>
          </div>
        </div>
      )}

      {activeTab === 'nocode' && (
        <div style={styles.demoContainer}>
          {isMobile && (
            <div style={styles.mobileWarning}>
              ⚠️ Перетаскивание элементов лучше всего работает на ПК или планшетах с мышью. На телефонах используйте кнопки ниже для добавления.
            </div>
          )}
          
          <div style={styles.noCodeContainer}>
            <div style={styles.componentsPalette}>
              {availableComponents.map(comp => (
                <div
                  key={comp.id}
                  draggable={!isMobile}
                  onDragStart={(e) => !isMobile && handleDragStart(e, comp)}
                  style={{...styles.draggableComponent, opacity: isMobile ? 0.7 : 1}}
                  onClick={() => {
                    if (isMobile) {
                      const container = document.getElementById('canvas-container');
                      const width = container ? container.clientWidth : 300;
                      const height = container ? container.clientHeight : 200;
                      
                      setComponents([...components, {
                        id: Date.now(),
                        type: comp.type,
                        label: comp.defaultLabel,
                        x: Math.random() * (width - 100),
                        y: Math.random() * (height - 40)
                      }]);
                    }
                  }}
                >
                  {!isMobile && <span>{comp.icon}</span>} {comp.name}
                </div>
              ))}
            </div>

            <div
              id="canvas-container"
              style={styles.canvas}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
            >
              <div style={styles.canvasInner}>
                {components.map(comp => (
                  <div
                    key={comp.id}
                    style={{
                      ...styles.floatingComponent,
                      left: `${comp.x}px`,
                      top: `${comp.y}px`
                    }}
                    onMouseDown={(e) => handleComponentMouseDown(e, comp)}
                  >
                    {renderComponent(comp)}
                  </div>
                ))}
                {components.length === 0 && (
                  <div style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    color: '#bdc3c7',
                    textAlign: 'center',
                    width: '100%',
                    pointerEvents: 'none'
                  }}>
                    Перетащите компоненты сюда
                  </div>
                )}
              </div>
            </div>

            <div style={{ marginTop: '15px', display: 'flex', gap: '10px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <button
                style={{ ...styles.button, backgroundColor: '#e74c3c', flex: '1 1 auto' }}
                onClick={() => setComponents([])}
              >
                Очистить всё
              </button>
              <button
                style={{ ...styles.button, backgroundColor: '#95a5a6', flex: '1 1 auto' }}
                onClick={() => {
                  setComponents([
                    { id: 1, type: 'button', label: 'Кнопка', x: 50, y: 50 },
                    { id: 2, type: 'text', label: 'Текстовый блок', x: 50, y: 150 },
                    { id: 3, type: 'input', label: 'Поле ввода', x: 50, y: 250 },
                  ]);
                }}
              >
                🔄 Сбросить пример
              </button>
            </div>
          </div>

          <div style={styles.infoBox}>
            <div style={styles.infoTitle}>Что такое No-Code?</div>
            <p>No-Code платформы позволяют создавать приложения полностью без написания кода, 
            используя визуальные интерфейсы: drag-and-drop, блочное программирование, готовые шаблоны.</p>
            <p style={{ fontSize: '14px', marginTop: '10px' }}>
              Примеры: <strong>Bubble, Webflow, Airtable, Tilda, Zapier</strong><br/>
              Целевая аудитория: бизнес-пользователи, маркетологи, дизайнеры, предприниматели<br/>
              Рынок No-Code растет на 40% ежегодно
            </p>
          </div>
        </div>
      )}

      <div style={{
        marginTop: '30px',
        padding: '15px',
        backgroundColor: '#f1c40f',
        borderRadius: '8px',
        textAlign: 'center',
        fontSize: '14px',
        lineHeight: '1.5'
      }}>
        <strong>Интересный факт:</strong> К 2025 году, по прогнозам Gartner, 70% новых приложений будут 
        создаваться с использованием Low-Code и No-Code технологий. Среднее время разработки сокращается с 3 месяцев до 2-3 недель!
      </div>
    </div>
  );
};

export default LowNoCodeDemo;