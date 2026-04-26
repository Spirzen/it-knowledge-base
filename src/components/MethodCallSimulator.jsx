import React, { useState, useEffect } from 'react';
import BrowserOnly from './BrowserOnly';

const MethodCallSimulator = () => (
  <BrowserOnly>
    {() => {
      const [step, setStep] = useState(0);
      const [isAnimating, setIsAnimating] = useState(false);
      const [logs, setLogs] = useState([]);
      
      const [callStack, setCallStack] = useState([]);
      const [heapObjects, setHeapObjects] = useState([]);
      const [registers, setRegisters] = useState({ 
        RIP: '0x0000',
        RSP: '0xF000',
        RAX: '0x0000'
      });
      const [activeFrame, setActiveFrame] = useState(null);
      const [exceptionMode, setExceptionMode] = useState(false);

      const stepsData = [
        { id: 0, title: "Инициализация", desc: "Готовность среды выполнения." },
        { id: 1, title: "Вызов метода (синтаксис)", desc: "Программист пишет obj.method(arg). Компилятор проверяет сигнатуру." },
        { id: 2, title: "Разрешение имени метода", desc: "Определяется адрес метода через VTable или статический указатель." },
        { id: 3, title: "Подготовка аргументов", desc: "Аргументы и ссылка 'this' помещаются в стек или регистры." },
        { id: 4, title: "Выделение фрейма стека", desc: "Указатель стека (RSP) сдвигается. Создается новый фрейм для локальных переменных." },
        { id: 5, title: "Сохранение контекста", desc: "Регистры сохраняются для корректного возврата." },
        { id: 6, title: "Переход по адресу (CALL)", desc: "Адрес возврата записывается в стек. RIP указывает на начало метода." },
        { id: 7, title: "Декодирование инструкций", desc: "CPU декодирует байт-код в микрооперации." },
        { id: 8, title: "Выполнение операций (ALU)", desc: "Арифметические и логические операции в регистрах." },
        { id: 9, title: "Работа с памятью (load/store)", desc: "Доступ к полям объекта через вычисление адреса base + offset." },
        { id: 10, title: "Контроль зависимостей", desc: "Анализ зависимостей между инструкциями." },
        { id: 11, title: "Спекулятивное выполнение", desc: "Предсказание ветвлений и оптимистичное выполнение." },
        { id: 12, title: "Обработка исключений", desc: "При ошибке управление передается обработчику." },
        { id: 13, title: "Возврат из метода (return)", desc: "Результат помещается в регистр RAX." },
        { id: 14, title: "Восстановление контекста", desc: "Восстанавливаются сохраненные регистры." },
        { id: 15, title: "Оптимизация (JIT/AOT)", desc: "Часто вызываемые методы компилируются в нативный код." },
        { id: 16, title: "Escape Analysis", desc: "Анализ выхода объекта за пределы метода." },
        { id: 17, title: "Thread-local execution", desc: "Выполнение в контексте потока." },
        { id: 18, title: "Memory Barriers", desc: "Барьеры памяти для многопоточности." },
        { id: 19, title: "Сигналы и прерывания", desc: "Прерывание внешними событиями." },
        { id: 20, title: "Power Management", desc: "Динамическое изменение частоты CPU." }
      ];

      const addLog = (text) => {
        setLogs(prev => [...prev, `[${new Date().toLocaleTimeString()}] ${text}`]);
      };

      const handleNext = () => {
        if (isAnimating) return;
        
        let nextId = step + 1;
        if (nextId > 20) {
          resetSimulation();
          return;
        }

        setIsAnimating(true);
        const currentStep = stepsData.find(s => s.id === nextId);

        switch (currentStep.id) {
          case 1:
            addLog("Найдена запись в коде: obj.calculateSum(10, 20)");
            break;
          case 2:
            addLog("Поиск метода calculateSum в таблице виртуальных функций (VTable)... Найден.");
            break;
          case 3:
            setCallStack(prev => [...prev, { args: ['obj_ref', 10, 20], status: 'prepared' }]);
            addLog("Аргументы [obj_ref, 10, 20] подготовлены.");
            break;
          case 4:
            setCallStack(prev => [...prev, { locals: [], status: 'allocating' }]);
            setRegisters(prev => ({ ...prev, RSP: (parseInt(prev.RSP, 16) - 16).toString(16).toUpperCase() }));
            addLog("Выделен новый фрейм стека. RSP уменьшен.");
            break;
          case 5:
            addLog("Контекст сохранен. Регистры помечены как защищенные.");
            break;
          case 6:
            setActiveFrame('frame_1');
            setRegisters(prev => ({ ...prev, RIP: '0x2000' }));
            addLog("Команда CALL выполнена. Адрес возврата сохранен. Управление передано методу.");
            break;
          case 7:
            addLog("Инструкции декодируются. Конвейер процессора активен.");
            break;
          case 8:
            addLog("ALU выполняет сложение: 10 + 20 = 30.");
            setRegisters(prev => ({ ...prev, RAX: '0x001E' }));
            break;
          case 9:
            addLog("Доступ к полю объекта 'value'. Чтение из кэша L1.");
            break;
          case 12:
            setExceptionMode(true);
            addLog("Ошибка: Деление на ноль! Генерация прерывания.");
            break;
          case 13:
            if (!exceptionMode) {
              addLog("Метод завершил работу. Результат 30 записан в регистр RAX.");
            } else {
               addLog("Переход к обработчику исключений...");
            }
            break;
          case 14:
            setRegisters(prev => ({ ...prev, RSP: (parseInt(prev.RSP, 16) + 16).toString(16).toUpperCase() }));
            addLog("Фрейм стека освобожден. Возврат в вызывающий код.");
            break;
          case 15:
            addLog("JIT-компилятор заметил частый вызов и оптимизировал его.");
            break;
          default:
            addLog(currentStep.desc);
        }

        setTimeout(() => {
          setStep(nextId);
          setIsAnimating(false);
        }, 800);
      };

      const resetSimulation = () => {
        setStep(0);
        setCallStack([]);
        setRegisters({ RIP: '0x0000', RSP: '0xF000', RAX: '0x0000' });
        setActiveFrame(null);
        setExceptionMode(false);
        setLogs(["Симуляция сброшена. Готов к новому вызову."]);
      };

      const baseFrameItem = {
        background: '#fff',
        padding: 'clamp(6px, 2vw, 8px)',
        marginBottom: '4px',
        borderRadius: '4px',
        border: '1px solid #bbdefb',
        fontSize: 'clamp(10px, 3vw, 12px)',
        boxShadow: '0 1px 2px rgba(0,0,0,0.1)',
        wordBreak: 'break-word'
      };

      const styles = {
        container: {
          fontFamily: 'Segoe UI, Tahoma, sans-serif',
          border: '1px solid #dcdcdc',
          borderRadius: '8px',
          padding: 'clamp(12px, 4vw, 20px)',
          backgroundColor: '#f9f9f9',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
          margin: 'clamp(10px, 3vw, 20px) 0',
          position: 'relative',
          maxWidth: '1400px',
          marginLeft: 'auto',
          marginRight: 'auto'
        },
        header: {
          textAlign: 'center',
          marginBottom: 'clamp(15px, 4vw, 20px)',
          color: '#333',
          fontSize: 'clamp(18px, 5vw, 24px)'
        },
        stageArea: {
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
          gap: 'clamp(15px, 3vw, 20px)',
          alignItems: 'stretch',
          marginBottom: 'clamp(15px, 4vw, 20px)'
        },
        memoryBlock: {
          border: '2px dashed #ccc',
          borderRadius: '8px',
          padding: 'clamp(10px, 3vw, 15px)',
          backgroundColor: '#fff',
          position: 'relative',
          transition: 'all 0.3s ease',
          minWidth: 0
        },
        stackBlock: {
          borderColor: '#2196F3',
          backgroundColor: '#e3f2fd'
        },
        heapBlock: {
          borderColor: '#FF9800',
          backgroundColor: '#fff3e0'
        },
        cpuBlock: {
          borderColor: '#9C27B0',
          backgroundColor: '#f3e5f5'
        },
        blockTitle: {
          fontWeight: 'bold',
          marginBottom: '10px',
          fontSize: 'clamp(12px, 3.5vw, 14px)',
          textTransform: 'uppercase',
          letterSpacing: '0.5px'
        },
        frameItem: baseFrameItem,
        activeFrame: {
          border: '2px solid #2196F3',
          backgroundColor: '#e3f2fd',
          animation: 'pulse 1.5s infinite'
        },
        registerBox: {
          background: '#fff',
          padding: 'clamp(8px, 2.5vw, 10px)',
          marginBottom: '5px',
          borderRadius: '4px',
          border: '1px solid #ce93d8',
          display: 'flex',
          justifyContent: 'space-between',
          fontSize: 'clamp(11px, 3vw, 13px)',
          flexWrap: 'wrap',
          gap: '5px'
        },
        controls: {
          display: 'flex',
          justifyContent: 'center',
          gap: 'clamp(10px, 4vw, 20px)',
          marginBottom: '20px',
          flexWrap: 'wrap'
        },
        button: {
          padding: 'clamp(8px, 3vw, 10px) clamp(15px, 5vw, 20px)',
          fontSize: 'clamp(12px, 3.5vw, 14px)',
          cursor: 'pointer',
          border: 'none',
          borderRadius: '4px',
          backgroundColor: '#2196F3',
          color: 'white',
          fontWeight: 'bold',
          transition: 'background 0.2s, transform 0.1s',
          WebkitTapHighlightColor: 'transparent'
        },
        resetButton: {
          backgroundColor: '#f44336'
        },
        logArea: {
          height: 'clamp(100px, 25vh, 120px)',
          overflowY: 'auto',
          backgroundColor: '#263238',
          color: '#aed581',
          padding: 'clamp(8px, 2vw, 10px)',
          borderRadius: '4px',
          fontFamily: 'Consolas, monospace',
          fontSize: 'clamp(10px, 3vw, 12px)',
          border: '1px solid #546e7a',
          WebkitOverflowScrolling: 'touch'
        },
        progressLine: {
          height: '4px',
          backgroundColor: '#eee',
          borderRadius: '2px',
          marginTop: '10px',
          overflow: 'hidden'
        },
        progressBar: {
          height: '100%',
          backgroundColor: '#4CAF50',
          transition: 'width 0.3s ease'
        },
        currentStep: {
          background: '#fff', 
          padding: 'clamp(12px, 3vw, 15px)', 
          borderRadius: '4px', 
          border: '1px solid #e0e0e0',
          marginBottom: 'clamp(15px, 4vw, 20px)'
        },
        stepTitle: {
          color: '#333',
          fontSize: 'clamp(14px, 4vw, 16px)'
        },
        stepDesc: {
          margin: '5px 0 0 0', 
          color: '#666', 
          lineHeight: '1.5',
          fontSize: 'clamp(12px, 3.5vw, 14px)'
        },
        footerNote: {
          fontSize: 'clamp(10px, 2.5vw, 11px)', 
          color: '#999', 
          textAlign: 'center',
          marginTop: '10px'
        },
        progressInfo: {
          textAlign: 'right', 
          fontSize: 'clamp(10px, 3vw, 12px)', 
          color: '#666', 
          marginTop: '4px'
        },
        scrollContainer: {
          maxHeight: 'clamp(150px, 40vh, 200px)',
          overflowY: 'auto',
          WebkitOverflowScrolling: 'touch'
        },
        emptyMessage: {
          color: '#90caf9', 
          fontStyle: 'italic', 
          fontSize: 'clamp(10px, 3vw, 12px)',
          textAlign: 'center',
          padding: '20px 0'
        },
        statusBadge: {
          marginTop: '15px', 
          padding: '5px', 
          background: '#f3e5f5', 
          borderRadius: '4px', 
          fontSize: 'clamp(10px, 3vw, 11px)'
        },
        exceptionBadge: {
          marginTop: '5px', 
          padding: '5px', 
          background: '#ffcdd2', 
          borderRadius: '4px', 
          fontSize: 'clamp(10px, 3vw, 11px)', 
          color: '#c62828'
        },
        objItem: {
          ...baseFrameItem,
          borderLeft: '4px solid #FF9800'
        }
      };

      useEffect(() => {
        const style = document.createElement('style');
        style.textContent = `
          @keyframes pulse {
            0% { opacity: 1; }
            50% { opacity: 0.7; }
            100% { opacity: 1; }
          }
          @media (max-width: 768px) {
            .no-tap-highlight {
              -webkit-tap-highlight-color: transparent;
            }
          }
        `;
        document.head.appendChild(style);
        return () => {
          document.head.removeChild(style);
        };
      }, []);

      const currentStepData = stepsData.find(s => s.id === step) || stepsData[0];

      return (
        <div style={styles.container}>
          <h3 style={styles.header}>Визуализатор Вызова Метода</h3>
          
          <div style={styles.progressLine}>
            <div style={{...styles.progressBar, width: `${(step / 20) * 100}%`}}></div>
          </div>
          <div style={styles.progressInfo}>
            Шаг {step} из 20
          </div>

          <div style={styles.stageArea}>
            <div style={{...styles.memoryBlock, ...styles.stackBlock}}>
              <div style={styles.blockTitle}>Стек (Stack)</div>
              <div style={{fontSize: 'clamp(10px, 3vw, 12px)', color: '#555'}}>
                Хранит фреймы вызовов, аргументы и локальные переменные.
              </div>
              <hr style={{border: '0', borderTop: '1px solid #bbdefb', margin: '10px 0'}} />
              
              <div style={{display: 'flex', flexDirection: 'column-reverse', flexGrow: 1}}>
                {callStack.map((frame, idx) => (
                  <div key={idx} style={{
                    ...styles.frameItem,
                    ...(activeFrame && idx === callStack.length - 1 ? styles.activeFrame : {})
                  }}>
                    <div><strong>Frame #{idx + 1}</strong></div>
                    <div style={{fontSize: 'clamp(9px, 2.5vw, 11px)', color: '#555', wordBreak: 'break-all'}}>
                      Аргументы: {frame.args?.join(', ') || '-'}<br/>
                      Локальные: {frame.locals?.length || 0}
                    </div>
                    {idx === callStack.length - 1 && <div style={{color: '#1976D2', fontWeight: 'bold', fontSize: 'clamp(9px, 2.5vw, 10px)'}}>← Активен</div>}
                  </div>
                ))}
                {callStack.length === 0 && <div style={styles.emptyMessage}>Стек пуст</div>}
              </div>
            </div>

            <div style={{...styles.memoryBlock, ...styles.cpuBlock}}>
              <div style={styles.blockTitle}>Центральный Процессор (CPU)</div>
              <div style={{fontSize: 'clamp(10px, 3vw, 12px)', color: '#555'}}>
                Выполнение инструкций, регистры, кэш.
              </div>
              <hr style={{border: '0', borderTop: '1px solid #e1bee7', margin: '10px 0'}} />
              
              <div style={{marginTop: '10px'}}>
                <div style={styles.registerBox}>
                  <span>RIP (Инструкция):</span>
                  <code style={{fontSize: 'inherit'}}>{registers.RIP}</code>
                </div>
                <div style={styles.registerBox}>
                  <span>RSP (Стек):</span>
                  <code style={{fontSize: 'inherit'}}>{registers.RSP}</code>
                </div>
                <div style={styles.registerBox}>
                  <span>RAX (Результат):</span>
                  <code style={{fontSize: 'inherit', color: registers.RAX !== '0x0000' ? '#4CAF50' : 'inherit'}}>{registers.RAX}</code>
                </div>
                
                <div style={styles.statusBadge}>
                  <strong>Статус:</strong> {activeFrame ? 'Выполнение метода...' : 'Ожидание'}
                </div>
                 {exceptionMode && (
                  <div style={styles.exceptionBadge}>
                    ⚠️ Обработка исключения!
                  </div>
                )}
              </div>
            </div>

            <div style={{...styles.memoryBlock, ...styles.heapBlock}}>
              <div style={styles.blockTitle}>Куча (Heap)</div>
              <div style={{fontSize: 'clamp(10px, 3vw, 12px)', color: '#555'}}>
                Объекты программы. Доступны по ссылкам.
              </div>
              <hr style={{border: '0', borderTop: '1px solid #ffe0b2', margin: '10px 0'}} />
              
              <div style={styles.scrollContainer}>
                {heapObjects.length === 0 ? (
                   <div style={styles.emptyMessage}>Нет активных объектов</div>
                ) : (
                  heapObjects.map((obj, i) => (
                    <div key={i} style={styles.objItem}>
                       <strong>Obj #{i+1}</strong><br/>
                       <small>Addr: {obj.addr}</small>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>

          <div style={styles.controls}>
            <button 
              style={styles.button} 
              onClick={handleNext} 
              disabled={step >= 20 || isAnimating}
              className="no-tap-highlight"
            >
              {step >= 20 ? 'Завершено' : 'Следующий шаг'}
            </button>
            
            <button 
              style={{...styles.button, ...styles.resetButton}} 
              onClick={resetSimulation}
              disabled={isAnimating}
              className="no-tap-highlight"
            >
              Сброс
            </button>
          </div>

          <div style={styles.currentStep}>
            <strong style={styles.stepTitle}>{currentStepData.title}</strong>
            <p style={styles.stepDesc}>
              {currentStepData.desc}
            </p>
          </div>

          <div style={styles.logArea}>
            {logs.map((log, idx) => (
              <div key={idx} style={{fontSize: 'inherit'}}>{log}</div>
            ))}
          </div>
          
          <div style={styles.footerNote}>
            Нажмите «Следующий шаг», чтобы пройти путь от вызова до возврата.
          </div>
        </div>
      );
    }}
  </BrowserOnly>
);

export default MethodCallSimulator;