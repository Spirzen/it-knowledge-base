import React, { useState, useRef } from 'react';
import BrowserOnly from './BrowserOnly';

const DebuggerEmulator = () => {
  const initialCode = `1  function calculateSum(a, b) {
2    let result = a + b;
3    console.log("Сумма:", result);
4    return result;
5  }
6  
7  function multiplyByTwo(x) {
8    let multiplied = x * 2;
9    console.log("Умножено:", multiplied);
10   return multiplied;
11 }
12 
13 function main() {
14   let number = 5;
15   let sum = calculateSum(number, 3);
16   let final = multiplyByTwo(sum);
17   console.log("Финальный результат:", final);
18   return final;
19 }
20 
21 // Запуск программы
22 let output = main();
23 console.log("Программа завершена");`;

  const codeLines = initialCode.split('\n');
  
  const [breakpoints, setBreakpoints] = useState(new Set([14, 15, 16]));
  const [currentLine, setCurrentLine] = useState(null);
  const [isRunning, setIsRunning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [variables, setVariables] = useState({});
  const [output, setOutput] = useState([]);
  const [callStack, setCallStack] = useState([]);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const executionStateRef = useRef({
    programCounter: 13,
    callStack: [],
    localVars: {},
    isProgramFinished: false
  });

  const addOutput = (text, type = 'info') => {
    setOutput(prev => [...prev, { 
      text, 
      timestamp: new Date().toLocaleTimeString(),
      type 
    }]);
  };

  const executeSingleLine = (line, context) => {
    const lineContent = codeLines[line - 1]?.trim();
    const result = { nextLine: null, shouldStop: false, updateVars: null, updateStack: null };

    if (lineContent.includes('function calculateSum') || 
        lineContent.includes('function multiplyByTwo') ||
        lineContent.includes('function main')) {
      result.nextLine = line + 1;
      return result;
    }

    if (lineContent.includes('let number = 5')) {
      context.localVars['number'] = 5;
      addOutput(`→ number = 5`, 'exec');
      result.nextLine = line + 1;
      return result;
    }

    if (lineContent.includes('let sum = calculateSum(number, 3)')) {
      context.callStack.push({
        functionName: 'main',
        returnLine: line + 1,
        vars: { ...context.localVars }
      });
      
      const calculateSumStart = codeLines.findIndex(l => l.includes('function calculateSum')) + 2;
      context.localVars = { a: context.localVars['number'], b: 3 };
      context.currentFunction = 'calculateSum';
      
      addOutput(`→ вызов calculateSum(${context.localVars['a']}, ${context.localVars['b']})`, 'call');
      result.nextLine = calculateSumStart;
      return result;
    }
    
    if (lineContent.includes('let result = a + b')) {
      const sum = (context.localVars['a'] || 0) + (context.localVars['b'] || 0);
      context.localVars['result'] = sum;
      addOutput(`→ result = ${sum}`, 'exec');
      result.nextLine = line + 1;
      return result;
    }

    if (lineContent.includes('console.log("Сумма:")')) {
      const sum = context.localVars['result'];
      addOutput(`📝 Сумма: ${sum}`, 'output');
      result.nextLine = line + 1;
      return result;
    }

    if (lineContent.includes('return result') && context.currentFunction === 'calculateSum') {
      const returnValue = context.localVars['result'];
      const returnContext = context.callStack.pop();
      if (returnContext) {
        context.localVars = returnContext.vars;
        context.localVars['sum'] = returnValue;
        context.currentFunction = 'main';
        addOutput(`← calculateSum вернула ${returnValue}`, 'return');
        result.nextLine = returnContext.returnLine;
      }
      return result;
    }
    
    if (lineContent.includes('let final = multiplyByTwo(sum)')) {
      context.callStack.push({
        functionName: 'main',
        returnLine: line + 1,
        vars: { ...context.localVars }
      });
      
      const multiplyStart = codeLines.findIndex(l => l.includes('function multiplyByTwo')) + 2;
      context.localVars = { x: context.localVars['sum'] };
      context.currentFunction = 'multiplyByTwo';
      
      addOutput(`→ вызов multiplyByTwo(${context.localVars['x']})`, 'call');
      result.nextLine = multiplyStart;
      return result;
    }
    
    if (lineContent.includes('let multiplied = x * 2')) {
      const multiplied = (context.localVars['x'] || 0) * 2;
      context.localVars['multiplied'] = multiplied;
      addOutput(`→ multiplied = ${multiplied}`, 'exec');
      result.nextLine = line + 1;
      return result;
    }
    
    if (lineContent.includes('console.log("Умножено:")')) {
      const multiplied = context.localVars['multiplied'];
      addOutput(`Умножено: ${multiplied}`, 'output');
      result.nextLine = line + 1;
      return result;
    }
    
    if (lineContent.includes('return multiplied') && context.currentFunction === 'multiplyByTwo') {
      const returnValue = context.localVars['multiplied'];
      const returnContext = context.callStack.pop();
      if (returnContext) {
        context.localVars = returnContext.vars;
        context.localVars['final'] = returnValue;
        context.currentFunction = 'main';
        addOutput(`← multiplyByTwo вернула ${returnValue}`, 'return');
        result.nextLine = returnContext.returnLine;
      }
      return result;
    }
    
    if (lineContent.includes('console.log("Финальный результат:")')) {
      const final = context.localVars['final'];
      addOutput(`Финальный результат: ${final}`, 'output');
      result.nextLine = line + 1;
      return result;
    }
    
    if (lineContent.includes('return final')) {
      const final = context.localVars['final'];
      addOutput(`→ main вернула ${final}`, 'return');
      result.nextLine = line + 1;
      return result;
    }
    
    if (lineContent.includes('let output = main()')) {
      result.nextLine = line + 1;
      return result;
    }
    
    if (lineContent.includes('console.log("Программа завершена")')) {
      addOutput(`✅ Программа завершена`, 'success');
      result.shouldStop = true;
      result.nextLine = null;
      return result;
    }
    
    result.nextLine = line + 1;
    return result;
  };

  const updateUI = (context) => {
    setCurrentLine(context.programCounter);
    setVariables({ ...context.localVars });
    setCallStack([...context.callStack.map(cs => ({ 
      function: cs.functionName, 
      line: cs.returnLine - 1 
    })), { 
      function: context.currentFunction || 'global', 
      line: context.programCounter 
    }]);
  };

  const step = (stepType = 'into') => {
    if (!isPaused && !isRunning) {
      startDebug();
      return;
    }
    
    if (!isPaused) return;
    
    const context = executionStateRef.current;
    
    if (context.isProgramFinished) {
      addOutput('Программа уже завершена. Нажмите Restart', 'warning');
      return;
    }
    
    const result = executeSingleLine(context.programCounter, context);
    
    if (result.nextLine) {
      context.programCounter = result.nextLine;
      
      if (breakpoints.has(context.programCounter) && stepType !== 'special') {
        setIsPaused(true);
        updateUI(context);
        addOutput(`⏸ Остановлено на строке ${context.programCounter} (точка останова)`, 'breakpoint');
        return;
      }

      if (stepType === 'over' && context.callStack.length > 0) {
        const currentDepth = context.callStack.length;
        let tempPC = context.programCounter;
        let tempContext = JSON.parse(JSON.stringify(context));
        
        while (tempPC && tempContext.callStack.length >= currentDepth) {
          const tempResult = executeSingleLine(tempPC, tempContext);
          if (!tempResult.nextLine) break;
          tempPC = tempResult.nextLine;
        }
        
        context.programCounter = tempPC;
        context.callStack = tempContext.callStack;
        context.localVars = tempContext.localVars;
        context.currentFunction = tempContext.currentFunction;
        
        updateUI(context);
        setIsPaused(true);
        addOutput(`⏸ Step Over - остановлено на строке ${context.programCounter}`, 'step');
      } 
      else if (stepType === 'out' && context.callStack.length > 0) {
        const targetDepth = context.callStack.length - 1;
        let tempPC = context.programCounter;
        let tempContext = JSON.parse(JSON.stringify(context));
        
        while (tempPC && tempContext.callStack.length > targetDepth) {
          const tempResult = executeSingleLine(tempPC, tempContext);
          if (!tempResult.nextLine) break;
          tempPC = tempResult.nextLine;
        }
        
        context.programCounter = tempPC;
        context.callStack = tempContext.callStack;
        context.localVars = tempContext.localVars;
        context.currentFunction = tempContext.currentFunction;
        
        updateUI(context);
        setIsPaused(true);
        addOutput(`⏸ Step Out - остановлено на строке ${context.programCounter}`, 'step');
      }
      else {
        updateUI(context);

        if (context.programCounter > codeLines.length || !context.programCounter) {
          context.isProgramFinished = true;
          setIsRunning(false);
          setIsPaused(false);
          addOutput('🏁 Выполнение программы завершено', 'success');
        } else {
          setIsPaused(true);
        }
      }
    } else {
      context.isProgramFinished = true;
      setIsRunning(false);
      setIsPaused(false);
      setCurrentLine(null);
      addOutput('🏁 Выполнение программы завершено', 'success');
    }
  };

  const startDebug = () => {
    executionStateRef.current = {
      programCounter: 13,
      callStack: [],
      localVars: {},
      currentFunction: 'main',
      isProgramFinished: false
    };
    
    setCurrentLine(13);
    setVariables({});
    setCallStack([{ function: 'main', line: 13 }]);
    setOutput([]);
    setIsRunning(true);
    setIsPaused(true);
    
    addOutput('Отладка запущена. Остановлено на entry point (строка 13)', 'start');
    addOutput('💡 Используйте Step Into/F10 для пошагового выполнения', 'info');
  };

  const continueExecution = () => {
    if (!isPaused) return;
    
    const context = executionStateRef.current;
    let tempPC = context.programCounter;
    let tempContext = JSON.parse(JSON.stringify(context));
    
    while (tempPC && !tempContext.isProgramFinished) {
      if (breakpoints.has(tempPC) && tempPC !== context.programCounter) {
        context.programCounter = tempPC;
        context.callStack = tempContext.callStack;
        context.localVars = tempContext.localVars;
        context.currentFunction = tempContext.currentFunction;
        updateUI(context);
        addOutput(`⏸ Остановлено на строке ${tempPC} (точка останова)`, 'breakpoint');
        return;
      }
      
      const result = executeSingleLine(tempPC, tempContext);
      
      if (!result.nextLine || result.shouldStop) {
        if (result.shouldStop) {
          tempContext.isProgramFinished = true;
        }
        break;
      }
      
      tempPC = result.nextLine;
    }
    
    if (tempContext.isProgramFinished) {
      context.isProgramFinished = true;
      setIsRunning(false);
      setIsPaused(false);
      setCurrentLine(null);
      addOutput('🏁 Выполнение программы завершено', 'success');
    } else {
      context.programCounter = tempPC;
      context.callStack = tempContext.callStack;
      context.localVars = tempContext.localVars;
      context.currentFunction = tempContext.currentFunction;
      updateUI(context);
      setIsPaused(true);
      addOutput(`⏸ Продолжение выполнения - остановлено на строке ${context.programCounter}`, 'step');
    }
  };

  const restartDebug = () => {
    startDebug();
  };

  const toggleBreakpoint = (lineNumber) => {
    const newBreakpoints = new Set(breakpoints);
    if (newBreakpoints.has(lineNumber)) {
      newBreakpoints.delete(lineNumber);
      addOutput(`🔴 Точка останова убрана со строки ${lineNumber}`, 'breakpoint');
    } else {
      newBreakpoints.add(lineNumber);
      addOutput(`🔴 Точка останова установлена на строке ${lineNumber}`, 'breakpoint');
    }
    setBreakpoints(newBreakpoints);
  };

  const styles = {
    container: {
      margin: '1rem',
      backgroundColor: '#1e1e1e',
      borderRadius: '12px',
      overflow: 'hidden',
      fontFamily: 'Consolas, Monaco, "Courier New", monospace',
      boxShadow: '0 8px 16px rgba(0,0,0,0.3)',
      maxWidth: '100%',
      '@media (minWidth: 768px)': {
        margin: '2rem 0',
      },
    },
    toolbar: {
      backgroundColor: '#2d2d2d',
      padding: '8px 12px',
      display: 'flex',
      gap: '6px',
      borderBottom: '1px solid #3e3e3e',
      flexWrap: 'wrap',
      justifyContent: 'center',
      '@media (minWidth: 640px)': {
        padding: '12px 16px',
        gap: '8px',
        justifyContent: 'flex-start',
      },
    },
    button: {
      padding: '6px 10px',
      fontSize: '11px',
      fontWeight: '500',
      border: 'none',
      borderRadius: '6px',
      cursor: 'pointer',
      transition: 'all 0.2s',
      fontFamily: 'system-ui, sans-serif',
      whiteSpace: 'nowrap',
      '@media (minWidth: 640px)': {
        padding: '6px 14px',
        fontSize: '13px',
      },
    },
    buttonPrimary: {
      backgroundColor: '#0e639c',
      color: 'white',
    },
    buttonSuccess: {
      backgroundColor: '#2ea043',
      color: 'white',
    },
    buttonWarning: {
      backgroundColor: '#d29922',
      color: 'white',
    },
    buttonDanger: {
      backgroundColor: '#da3633',
      color: 'white',
    },
    buttonSecondary: {
      backgroundColor: '#3e3e3e',
      color: 'white',
    },
    mainLayout: {
      display: 'flex',
      flexDirection: 'column',
      minHeight: '500px',
      '@media (minWidth: 768px)': {
        display: 'grid',
        gridTemplateColumns: '1fr 300px',
        flexDirection: 'row',
      },
    },
    codeArea: {
      backgroundColor: '#1e1e1e',
      padding: '12px',
      overflowX: 'auto',
      flex: '1',
      '@media (minWidth: 768px)': {
        padding: '16px',
      },
    },
    codeLine: {
      fontFamily: 'Consolas, Monaco, monospace',
      fontSize: '11px',
      lineHeight: '1.5',
      whiteSpace: 'pre',
      padding: '2px 4px',
      margin: '0',
      cursor: 'pointer',
      position: 'relative',
      '@media (minWidth: 640px)': {
        fontSize: '13px',
        lineHeight: '1.6',
        padding: '2px 8px',
      },
    },
    sidebar: {
      backgroundColor: '#252526',
      borderLeft: 'none',
      borderTop: '1px solid #3e3e3e',
      padding: '12px',
      '@media (minWidth: 768px)': {
        borderLeft: '1px solid #3e3e3e',
        borderTop: 'none',
        padding: '16px',
      },
    },
    section: {
      marginBottom: '16px',
      '@media (minWidth: 768px)': {
        marginBottom: '20px',
      },
    },
    sectionTitle: {
      color: '#cccccc',
      fontSize: '11px',
      fontWeight: '600',
      textTransform: 'uppercase',
      letterSpacing: '1px',
      marginBottom: '8px',
      borderBottom: '1px solid #3e3e3e',
      paddingBottom: '4px',
      '@media (minWidth: 768px)': {
        fontSize: '12px',
        marginBottom: '12px',
        paddingBottom: '6px',
      },
    },
    variableItem: {
      fontSize: '11px',
      padding: '3px 0',
      color: '#9cdcfe',
      fontFamily: 'monospace',
      '@media (minWidth: 768px)': {
        fontSize: '12px',
        padding: '4px 0',
      },
    },
    variableName: {
      color: '#9cdcfe',
    },
    variableValue: {
      color: '#ce9178',
    },
    callStackItem: {
      fontSize: '11px',
      padding: '4px 0',
      color: '#d4d4d4',
      fontFamily: 'monospace',
      borderBottom: '1px solid #3e3e3e',
      '@media (minWidth: 768px)': {
        fontSize: '12px',
        padding: '6px 0',
      },
    },
    outputArea: {
      backgroundColor: '#1e1e1e',
      borderTop: '1px solid #3e3e3e',
      padding: '8px 12px',
      maxHeight: '120px',
      overflowY: 'auto',
      '@media (minWidth: 768px)': {
        padding: '12px 16px',
        maxHeight: '150px',
      },
    },
    outputLine: {
      fontSize: '11px',
      fontFamily: 'monospace',
      padding: '2px 0',
      wordBreak: 'break-word',
      '@media (minWidth: 768px)': {
        fontSize: '12px',
      },
    },
    breakpoint: {
      position: 'absolute',
      left: '-16px',
      top: '2px',
      color: '#f48771',
      fontSize: '12px',
      '@media (minWidth: 640px)': {
        left: '-20px',
        fontSize: '14px',
      },
    },
    currentLineIndicator: {
      backgroundColor: '#264f78',
      margin: '0 -4px',
      padding: '0 4px',
      borderRadius: '4px',
      '@media (minWidth: 768px)': {
        margin: '0 -8px',
        padding: '0 8px',
      },
    },
    mobileMenuButton: {
      display: 'block',
      backgroundColor: '#0e639c',
      color: 'white',
      border: 'none',
      borderRadius: '6px',
      padding: '8px 12px',
      fontSize: '12px',
      cursor: 'pointer',
      width: '100%',
      marginBottom: '12px',
      '@media (minWidth: 768px)': {
        display: 'none',
      },
    },
    sidebarContent: {
      display: 'block',
      '@media (maxWidth: 767px)': {
        display: mobileMenuOpen ? 'block' : 'none',
      },
    },
    tip: {
      padding: '10px 12px',
      backgroundColor: '#2d2d2d',
      borderTop: '1px solid #3e3e3e',
      fontSize: '10px',
      color: '#b5cea8',
      '@media (minWidth: 768px)': {
        padding: '12px 16px',
        fontSize: '12px',
      },
    },
  };

  const getOutputColor = (type) => {
    switch(type) {
      case 'error': return '#f48771';
      case 'success': return '#6a9955';
      case 'warning': return '#dcdcaa';
      case 'call': return '#9cdcfe';
      case 'return': return '#ce9178';
      case 'breakpoint': return '#f48771';
      case 'step': return '#4ec9b0';
      case 'start': return '#6a9955';
      default: return '#d4d4d4';
    }
  };

  const applyMediaStyles = (baseStyles, mediaStyles) => {
    return baseStyles;
  };

  return (
    <BrowserOnly>
      {() => (
        <div style={styles.container}>
          <div style={styles.toolbar}>
            <button 
              onClick={startDebug} 
              style={{ ...styles.button, ...styles.buttonPrimary }}
              onTouchStart={(e) => e.preventDefault()}
            >
              ▶ Start
            </button>
            <button 
              onClick={() => step('into')} 
              disabled={!isPaused && isRunning} 
              style={{ ...styles.button, ...styles.buttonSecondary }}
            >
              ⬇ Step
            </button>
            <button 
              onClick={() => step('over')} 
              disabled={!isPaused && isRunning} 
              style={{ ...styles.button, ...styles.buttonSecondary }}
            >
              ➡ Over
            </button>
            <button 
              onClick={() => step('out')} 
              disabled={!isPaused && isRunning} 
              style={{ ...styles.button, ...styles.buttonSecondary }}
            >
              ⬆ Out
            </button>
            <button 
              onClick={continueExecution} 
              disabled={!isPaused && isRunning} 
              style={{ ...styles.button, ...styles.buttonSuccess }}
            >
              ▶ Cont
            </button>
            <button 
              onClick={restartDebug} 
              style={{ ...styles.button, ...styles.buttonWarning }}
            >
              🔄 Restart
            </button>
          </div>
          
          <div style={styles.mainLayout}>
            <div style={styles.codeArea}>
              <div style={{ overflowX: 'auto', WebkitOverflowScrolling: 'touch' }}>
                {codeLines.map((line, index) => {
                  const lineNumber = index + 1;
                  const hasBreakpoint = breakpoints.has(lineNumber);
                  const isCurrentLine = currentLine === lineNumber;
                  
                  return (
                    <div
                      key={lineNumber}
                      style={{
                        ...styles.codeLine,
                        ...(isCurrentLine ? styles.currentLineIndicator : {}),
                      }}
                      onClick={() => toggleBreakpoint(lineNumber)}
                      onTouchEnd={() => toggleBreakpoint(lineNumber)}
                    >
                      {hasBreakpoint && <span style={styles.breakpoint}>🔴</span>}
                      <span style={{ color: '#858585', userSelect: 'none' }}>{lineNumber.toString().padStart(3, ' ')} </span>
                      <span style={{ color: '#d4d4d4' }}>{line}</span>
                    </div>
                  );
                })}
              </div>
            </div>
            
            <div style={styles.sidebar}>
              <button 
                style={styles.mobileMenuButton}
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? '▼ Скрыть информацию' : '▲ Показать информацию'}
              </button>
              
              <div style={styles.sidebarContent}>
                <div style={styles.section}>
                  <div style={styles.sectionTitle}>🔧 Переменные</div>
                  {Object.keys(variables).length === 0 ? (
                    <div style={{ color: '#858585', fontSize: '11px' }}>Нет активных переменных</div>
                  ) : (
                    Object.entries(variables).map(([name, value]) => (
                      <div key={name} style={styles.variableItem}>
                        <span style={styles.variableName}>{name}</span> = <span style={styles.variableValue}>{JSON.stringify(value)}</span>
                      </div>
                    ))
                  )}
                </div>
                
                <div style={styles.section}>
                  <div style={styles.sectionTitle}>📞 Стек вызовов</div>
                  {callStack.length === 0 ? (
                    <div style={{ color: '#858585', fontSize: '11px' }}>Стек пуст</div>
                  ) : (
                    callStack.map((frame, idx) => (
                      <div key={idx} style={{ ...styles.callStackItem, ...(idx === callStack.length - 1 ? { color: '#4ec9b0', fontWeight: 'bold' } : {}) }}>
                        {frame.function} {idx === callStack.length - 1 && '◀'}
                      </div>
                    ))
                  )}
                </div>
                
                <div style={styles.section}>
                  <div style={styles.sectionTitle}>Статус</div>
                  <div style={{ fontSize: '11px', color: isPaused ? '#4ec9b0' : '#858585' }}>
                    {isRunning ? (isPaused ? '⏸ Приостановлено' : '▶ Выполняется') : '⏹ Остановлено'}
                  </div>
                  {currentLine && (
                    <div style={{ fontSize: '10px', color: '#858585', marginTop: '6px' }}>
                      Строка: {currentLine}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          
          <div style={styles.outputArea}>
            <div style={styles.sectionTitle}>Вывод программы</div>
            {output.length === 0 ? (
              <div style={{ color: '#858585', fontSize: '11px' }}>Нажмите Start для начала отладки</div>
            ) : (
              output.map((item, idx) => (
                <div key={idx} style={{ ...styles.outputLine, color: getOutputColor(item.type) }}>
                  [{item.timestamp}] {item.text}
                </div>
              ))
            )}
          </div>
          
          <div style={styles.tip}>
            💡 <strong>Подсказка:</strong> Кликните по номеру строки, чтобы установить/снять точку останова (🔴). 
            Точки останова уже установлены на строках 14, 15, 16 для демонстрации.
          </div>
        </div>
      )}
    </BrowserOnly>
  );
};

export default DebuggerEmulator;