import React, { useState, useRef, useEffect } from 'react';

const CompilerSimulator = () => {
  const [code, setCode] = useState(`let name = "Мир"
let greeting = "Привет, " + name
print(greeting)`);
  
  const [mode, setMode] = useState("interpret");
  const [status, setStatus] = useState("idle");
  const [currentLineIndex, setCurrentLineIndex] = useState(-1);
  const [logs, setLogs] = useState([]);
  const [errorDetails, setErrorDetails] = useState("");
  const [variables, setVariables] = useState({});
  const [output, setOutput] = useState([]);
  const [compiledBinary, setCompiledBinary] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  
  const textareaRef = useRef(null);
  const lineNumbersRef = useRef(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleScroll = () => {
    if (lineNumbersRef.current && textareaRef.current) {
      lineNumbersRef.current.scrollTop = textareaRef.current.scrollTop;
    }
  };

  const cleanLine = (line) => {
    let clean = line.split('//')[0];
    clean = clean.replace(/;+$/, '');
    return clean.trim();
  };

  const isDeclaration = (line) => {
    return line.startsWith('let ') || line.startsWith('const ') || line.startsWith('var ');
  };

  const getVariableName = (line) => {
    const match = line.match(/^(let|const|var)\s+([a-zA-Z_][a-zA-Z0-9_]*)/);
    return match ? match[2] : null;
  };

  const getDeclarationExpression = (line) => {
    const equalIndex = line.indexOf('=');
    if (equalIndex === -1) return null;
    return line.slice(equalIndex + 1).trim();
  };

  const evaluateExpression = (expr, vars) => {
    expr = expr.trim();
    
    if ((expr.startsWith('"') && expr.endsWith('"')) || (expr.startsWith("'") && expr.endsWith("'"))) {
      return expr.slice(1, -1);
    }
    
    if (expr.includes('+')) {
      const parts = expr.split('+').map(p => p.trim());
      let result = '';
      let isStringConcat = false;
      
      for (let part of parts) {
        let value;
        
        if ((part.startsWith('"') && part.endsWith('"')) || (part.startsWith("'") && part.endsWith("'"))) {
          value = part.slice(1, -1);
          isStringConcat = true;
        }
        else if (!isNaN(part)) {
          value = Number(part);
        }
        else if (vars.hasOwnProperty(part)) {
          value = vars[part];
          if (typeof value === 'string') isStringConcat = true;
        }
        else {
          throw new Error(`Переменная '${part}' не определена`);
        }
        
        if (isStringConcat) {
          result += String(value);
        } else {
          if (result === '') {
            result = value;
          } else {
            result += value;
          }
        }
      }
      
      return result;
    }
    
    if (!isNaN(expr)) {
      return Number(expr);
    }
    
    if (vars.hasOwnProperty(expr)) {
      return vars[expr];
    }

    try {
      let evaluableExpr = expr;
      for (const [name, value] of Object.entries(vars)) {
        const regex = new RegExp(`\\b${name}\\b`, 'g');
        evaluableExpr = evaluableExpr.replace(regex, value);
      }
      
      const varMatches = evaluableExpr.match(/[a-zA-Z_][a-zA-Z0-9_]*/g);
      if (varMatches) {
        for (const v of varMatches) {
          if (!isNaN(v)) continue;
          if (!vars.hasOwnProperty(v) && !['true', 'false', 'null', 'undefined'].includes(v)) {
            throw new Error(`Переменная '${v}' не определена`);
          }
        }
      }
      
      return Function(`"use strict"; return (${evaluableExpr})`)();
    } catch (err) {
      if (err.message.includes('is not defined')) {
        throw new Error(`Переменная не определена`);
      }
      throw new Error(`Ошибка в выражении: ${err.message}`);
    }
  };

  const interpretCode = async (lines) => {
    const vars = {};
    const outputLines = [];
    
    for (let i = 0; i < lines.length; i++) {
      const rawLine = lines[i];
      const line = cleanLine(rawLine);
      
      if (!line) continue;
      
      setCurrentLineIndex(i);
      setLogs(prev => [...prev, `Выполнение строки ${i + 1}: ${line.substring(0, 60)}${line.length > 60 ? '...' : ''}`]);
      await new Promise(r => setTimeout(r, isMobile ? 250 : 350));
      
      try {
        if (isDeclaration(line)) {
          const varName = getVariableName(line);
          if (!varName) {
            throw new Error(`Некорректное объявление переменной`);
          }
          
          const expr = getDeclarationExpression(line);
          let value;
          
          if (expr === null) {
            value = undefined;
          } else {
            value = evaluateExpression(expr, vars);
          }
          
          vars[varName] = value;
          setVariables({ ...vars });
          setLogs(prev => [...prev, `  ✅ ${varName} = ${value === undefined ? 'undefined' : (typeof value === 'string' ? `"${value}"` : value)}`]);
        }
        
        else if (line.includes('=') && !line.startsWith('print')) {
          const equalIndex = line.indexOf('=');
          const varName = line.slice(0, equalIndex).trim();
          const valueExpr = line.slice(equalIndex + 1).trim();
          
          if (!vars.hasOwnProperty(varName)) {
            throw new Error(`Переменная '${varName}' не объявлена. Используйте 'let ${varName} = ...'`);
          }
          
          const value = evaluateExpression(valueExpr, vars);
          vars[varName] = value;
          setVariables({ ...vars });
          setLogs(prev => [...prev, `  📝 ${varName} = ${typeof value === 'string' ? `"${value}"` : value}`]);
        }
        
        else if (line.startsWith('print')) {
          let expr;
          if (line.startsWith('print(') && line.endsWith(')')) {
            expr = line.slice(6, -1);
          } else if (line.startsWith('print ')) {
            expr = line.slice(6);
          } else {
            throw new Error(`Некорректный синтаксис print. Используйте: print(выражение) или print выражение`);
          }
          
          const value = evaluateExpression(expr, vars);
          outputLines.push(String(value));
          setOutput([...outputLines]);
          setLogs(prev => [...prev, `  Вывод: ${value}`]);
        }
        
        else {
          const result = evaluateExpression(line, vars);
          setLogs(prev => [...prev, `  Результат: ${result}`]);
        }
        
      } catch (err) {
        throw { index: i, message: err.message };
      }
    }
    
    return { vars, outputLines };
  };

  const compileCode = (lines) => {
    const errors = [];
    const warnings = [];
    const declaredVariables = new Set();
    
    for (let i = 0; i < lines.length; i++) {
      const rawLine = lines[i];
      const line = cleanLine(rawLine);
      
      if (!line) continue;
      
      if (isDeclaration(line)) {
        const varName = getVariableName(line);
        if (varName) {
          if (declaredVariables.has(varName)) {
            warnings.push({ index: i, message: `Переменная '${varName}' уже объявлена` });
          }
          declaredVariables.add(varName);
        } else {
          errors.push({ index: i, message: `Синтаксическая ошибка в объявлении переменной` });
        }
      }
      
      const varMatches = line.match(/[a-zA-Z_][a-zA-Z0-9_]*/g);
      if (varMatches && !isDeclaration(line)) {
        for (const v of varMatches) {
          if (!['print', 'let', 'const', 'var', 'true', 'false', 'null', 'undefined'].includes(v)) {
            if (!declaredVariables.has(v)) {
              errors.push({ index: i, message: `Переменная '${v}' не объявлена` });
            }
          }
        }
      }
    }
    
    return { errors, warnings, declaredVariables: Array.from(declaredVariables) };
  };

  const runSimulation = async () => {
    setStatus(mode === "compile" ? "compiling" : "running");
    setLogs([]);
    setErrorDetails("");
    setCurrentLineIndex(-1);
    setOutput([]);
    setVariables({});
    setCompiledBinary(null);
    
    const lines = code.split('\n');
    
    if (mode === "compile") {
      setLogs(prev => [...prev, "Запуск компилятора..."]);
      await new Promise(r => setTimeout(r, 400));
      
      setLogs(prev => [...prev, "Лексический анализ..."]);
      await new Promise(r => setTimeout(r, 300));
      
      setLogs(prev => [...prev, "Синтаксический анализ..."]);
      await new Promise(r => setTimeout(r, 300));
      
      const { errors, warnings, declaredVariables } = compileCode(lines);
      
      if (errors.length > 0) {
        setLogs(prev => [...prev, `❌ Найдено ${errors.length} ошибок компиляции:`]);
        for (const err of errors) {
          setLogs(prev => [...prev, `  • Строка ${err.index + 1}: ${err.message}`]);
        }
        setErrorDetails(errors[0].message);
        setCurrentLineIndex(errors[0].index);
        setStatus("error");
        return;
      }
      
      for (const warn of warnings) {
        setLogs(prev => [...prev, `⚠️  Строка ${warn.index + 1}: ${warn.message}`]);
      }
      
      setLogs(prev => [...prev, "Генерация объектного кода..."]);
      await new Promise(r => setTimeout(r, 400));
      
      setLogs(prev => [...prev, "Линковка..."]);
      await new Promise(r => setTimeout(r, 300));
      
      setLogs(prev => [...prev, "✅ Компиляция завершена успешно!"]);
      setLogs(prev => [...prev, `Объявлено переменных: ${declaredVariables.length}`]);
      if (declaredVariables.length > 0) {
        setLogs(prev => [...prev, `Таблица символов: ${declaredVariables.join(', ')}`]);
      }
      
      setCompiledBinary({ 
        size: Math.floor(Math.random() * 50 + 10) + " KB", 
        timestamp: new Date().toLocaleTimeString(),
        variables: declaredVariables.length
      });
      setStatus("success");
      setCurrentLineIndex(lines.length);
      
    } else {
      setLogs(prev => [...prev, "Запуск интерпретатора..."]);
      await new Promise(r => setTimeout(r, 250));
      
      setLogs(prev => [...prev, "Подготовка к выполнению..."]);
      await new Promise(r => setTimeout(r, 250));
      
      try {
        const result = await interpretCode(lines);
        setLogs(prev => [...prev, "✅ Программа выполнена успешно"]);
        if (Object.keys(result.vars).length > 0) {
          const varsStr = Object.entries(result.vars)
            .map(([k, v]) => `${k}=${typeof v === 'string' ? `"${v}"` : v}`)
            .join(', ');
          setLogs(prev => [...prev, `Финальное состояние: { ${varsStr} }`]);
        }
        setStatus("success");
        setCurrentLineIndex(lines.length);
      } catch (err) {
        setCurrentLineIndex(err.index);
        setLogs(prev => [...prev, `❌ Ошибка выполнения в строке ${err.index + 1}: ${err.message}`]);
        setErrorDetails(err.message);
        setStatus("error");
      }
    }
  };

  const reset = () => {
    setStatus("idle");
    setCurrentLineIndex(-1);
    setLogs([]);
    setErrorDetails("");
    setOutput([]);
    setVariables({});
    setCompiledBinary(null);
  };

  const exampleCode = {
    simple: `let x = 10
let y = 20
let z = x + y
print(z)`,
    error: `let x = 10
y = x + z
print(y)`,
    strings: `let name = "Мир"
let greeting = "Привет, " + name
print(greeting)`,
    calc: `let a = 5
let b = 3
let sum = a + b
let product = a * b
print("Сумма: " + sum)
print("Произведение: " + product)`
  };

  const loadExample = (name) => {
    setCode(exampleCode[name]);
    reset();
  };

  const getLineNumbers = () => {
    const lines = code.split('\n');
    return lines.map((_, i) => i + 1).join('\n');
  };

  const styles = {
    container: {
      border: '1px solid #e1e4e8',
      borderRadius: '12px',
      padding: isMobile ? '15px' : '20px',
      maxWidth: '100%',
      width: '100%',
      margin: isMobile ? '10px auto' : '20px auto',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif',
      boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
      backgroundColor: '#ffffff',
      boxSizing: 'border-box'
    },
    modeContainer: {
      marginBottom: '20px',
      display: 'flex',
      flexDirection: isMobile ? 'column' : 'row',
      gap: isMobile ? '15px' : '20px',
      alignItems: isMobile ? 'stretch' : 'center',
      padding: '12px',
      backgroundColor: '#f6f8fa',
      borderRadius: '8px',
      flexWrap: 'wrap'
    },
    modeButtons: {
      display: 'flex',
      gap: '10px',
      alignItems: 'center',
      flexWrap: 'wrap'
    },
    modeInfo: {
      fontSize: isMobile ? '12px' : '13px',
      color: '#586069',
      borderLeft: isMobile ? 'none' : '1px solid #e1e4e8',
      paddingLeft: isMobile ? '0' : '20px',
      paddingTop: isMobile ? '10px' : '0'
    },
    editorHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: isMobile ? 'flex-start' : 'center',
      marginBottom: '8px',
      flexDirection: isMobile ? 'column' : 'row',
      gap: isMobile ? '10px' : '0'
    },
    buttonGroup: {
      display: 'flex',
      gap: '8px',
      flexWrap: 'wrap'
    },
    editorContainer: {
      display: 'flex',
      border: '1px solid #d1d5da',
      borderRadius: '6px',
      overflow: 'hidden',
      backgroundColor: '#ffffff'
    },
    textarea: {
      flex: 1,
      fontFamily: 'Consolas, "Courier New", monospace',
      fontSize: isMobile ? '11px' : '13px',
      lineHeight: '20px',
      padding: '10px',
      border: 'none',
      resize: 'vertical',
      outline: 'none',
      minHeight: isMobile ? '150px' : '200px'
    },
    actionButtons: {
      marginBottom: '20px',
      display: 'flex',
      gap: '10px',
      flexWrap: 'wrap'
    },
    runButton: {
      padding: isMobile ? '10px 20px' : '8px 24px',
      fontSize: isMobile ? '13px' : '14px'
    },
    resetButton: {
      padding: isMobile ? '10px 20px' : '8px 24px',
      fontSize: isMobile ? '13px' : '14px'
    },
    resultsContainer: {
      border: '1px solid #e1e4e8',
      borderRadius: '8px',
      overflow: 'hidden'
    },
    resultsContent: {
      padding: '15px',
      minHeight: '200px',
      maxHeight: isMobile ? '250px' : '300px',
      overflowY: 'auto'
    },
    logText: {
      fontFamily: 'monospace',
      fontSize: isMobile ? '11px' : '12px',
      marginBottom: '4px',
      wordBreak: 'break-word'
    }
  };

  return (
    <div style={styles.container}>
      <h3 style={{ 
        marginTop: 0, 
        marginBottom: '8px', 
        color: '#24292e', 
        fontSize: isMobile ? '18px' : '20px' 
      }}>
        🔧 Компилятор и Интерпретатор
      </h3>
      <p style={{ 
        marginBottom: '20px', 
        color: '#586069', 
        fontSize: isMobile ? '12px' : '14px' 
      }}>
        Интерактивная демонстрация различий между компиляцией и интерпретацией кода
      </p>

      {/* Режим работы */}
      <div style={styles.modeContainer}>
        <div style={styles.modeButtons}>
          <span style={{ fontWeight: '600', fontSize: '14px' }}>Режим:</span>
          <button
            onClick={() => { setMode("interpret"); reset(); }}
            style={{
              padding: isMobile ? '8px 12px' : '6px 16px',
              borderRadius: '20px',
              border: mode === 'interpret' ? '2px solid #28a745' : '1px solid #d1d5da',
              backgroundColor: mode === 'interpret' ? '#e6ffed' : '#ffffff',
              color: mode === 'interpret' ? '#28a745' : '#586069',
              cursor: 'pointer',
              fontWeight: '500',
              fontSize: isMobile ? '12px' : '14px',
              transition: 'all 0.2s',
              flex: isMobile ? '1' : 'auto'
            }}
          >
            🐍 Интерпретация
          </button>
          <button
            onClick={() => { setMode("compile"); reset(); }}
            style={{
              padding: isMobile ? '8px 12px' : '6px 16px',
              borderRadius: '20px',
              border: mode === 'compile' ? '2px solid #cb2431' : '1px solid #d1d5da',
              backgroundColor: mode === 'compile' ? '#ffeef0' : '#ffffff',
              color: mode === 'compile' ? '#cb2431' : '#586069',
              cursor: 'pointer',
              fontWeight: '500',
              fontSize: isMobile ? '12px' : '14px',
              transition: 'all 0.2s',
              flex: isMobile ? '1' : 'auto'
            }}
          >
            ⚙️ Компиляция
          </button>
        </div>
        
        <div style={styles.modeInfo}>
          {mode === 'interpret' 
            ? '💡 Код выполняется построчно, переменные сохраняют значения'
            : '💡 Код проверяется целиком, все переменные должны быть объявлены'}
        </div>
      </div>

      {/* Редактор кода */}
      <div style={{ marginBottom: '15px' }}>
        <div style={styles.editorHeader}>
          <span style={{ fontWeight: '600', fontSize: '14px' }}>📝 Исходный код:</span>
          <div style={styles.buttonGroup}>
            <button
              onClick={() => loadExample('simple')}
              style={{
                padding: isMobile ? '6px 10px' : '4px 12px',
                fontSize: isMobile ? '11px' : '12px',
                backgroundColor: '#f1f3f4',
                border: '1px solid #dadce0',
                borderRadius: '16px',
                cursor: 'pointer',
                whiteSpace: 'nowrap'
              }}
            >
              Простой пример
            </button>
            <button
              onClick={() => loadExample('strings')}
              style={{
                padding: isMobile ? '6px 10px' : '4px 12px',
                fontSize: isMobile ? '11px' : '12px',
                backgroundColor: '#f1f3f4',
                border: '1px solid #dadce0',
                borderRadius: '16px',
                cursor: 'pointer',
                whiteSpace: 'nowrap'
              }}
            >
              Работа со строками
            </button>
            <button
              onClick={() => loadExample('calc')}
              style={{
                padding: isMobile ? '6px 10px' : '4px 12px',
                fontSize: isMobile ? '11px' : '12px',
                backgroundColor: '#f1f3f4',
                border: '1px solid #dadce0',
                borderRadius: '16px',
                cursor: 'pointer',
                whiteSpace: 'nowrap'
              }}
            >
              Калькулятор
            </button>
            <button
              onClick={() => loadExample('error')}
              style={{
                padding: isMobile ? '6px 10px' : '4px 12px',
                fontSize: isMobile ? '11px' : '12px',
                backgroundColor: '#fef2f2',
                border: '1px solid #fecaca',
                borderRadius: '16px',
                cursor: 'pointer',
                whiteSpace: 'nowrap'
              }}
            >
              Пример с ошибкой
            </button>
          </div>
        </div>
        
        <div style={styles.editorContainer}>
          <div
            ref={lineNumbersRef}
            style={{
              fontFamily: 'Consolas, "Courier New", monospace',
              fontSize: isMobile ? '11px' : '13px',
              lineHeight: '20px',
              padding: '10px 8px',
              backgroundColor: '#f6f8fa',
              color: '#6a737d',
              textAlign: 'right',
              userSelect: 'none',
              borderRight: '1px solid #e1e4e8',
              minWidth: isMobile ? '35px' : '45px',
              overflow: 'hidden'
            }}
          >
            {getLineNumbers().split('\n').map((num, idx) => (
              <div 
                key={idx}
                style={{
                  backgroundColor: currentLineIndex === idx ? '#fff5b0' : 'transparent',
                  fontWeight: currentLineIndex === idx ? 'bold' : 'normal'
                }}
              >
                {num}
              </div>
            ))}
          </div>
          
          <textarea
            ref={textareaRef}
            value={code}
            onChange={(e) => { setCode(e.target.value); reset(); }}
            onScroll={handleScroll}
            style={styles.textarea}
            spellCheck={false}
          />
        </div>
        <div style={{ 
          fontSize: isMobile ? '10px' : '12px', 
          color: '#586069', 
          marginTop: '8px' 
        }}>
          💡 Поддерживаемый синтаксис: <code>let имя = значение</code> | <code>переменная = значение</code> | <code>print(выражение)</code>
        </div>
      </div>

      {/* Кнопки управления */}
      <div style={styles.actionButtons}>
        <button 
          onClick={runSimulation} 
          disabled={status === 'compiling' || status === 'running'}
          style={{
            ...styles.runButton,
            backgroundColor: mode === 'compile' ? '#cb2431' : '#28a745',
            color: 'white',
            border: 'none',
            borderRadius: '6px',
            cursor: (status === 'compiling' || status === 'running') ? 'not-allowed' : 'pointer',
            fontWeight: '600',
            transition: 'all 0.2s',
            opacity: (status === 'compiling' || status === 'running') ? 0.7 : 1,
            flex: isMobile ? '1' : 'auto'
          }}
        >
          {status === 'compiling' && 'Компиляция...'}
          {status === 'running' && 'Выполнение...'}
          {status === 'idle' && (mode === 'compile' ? 'Компилировать' : 'Запустить')}
          {status === 'success' && (mode === 'compile' ? '✅ Скомпилировано' : '✅ Выполнено')}
          {status === 'error' && '❌ Ошибка'}
        </button>
        
        {(status !== 'idle') && (
          <button 
            onClick={reset}
            style={{
              ...styles.resetButton,
              backgroundColor: '#f6f8fa',
              color: '#24292e',
              border: '1px solid #d1d5da',
              borderRadius: '6px',
              cursor: 'pointer',
              flex: isMobile ? '1' : 'auto'
            }}
          >
            🔄 Сброс
          </button>
        )}
      </div>

      {/* Результаты */}
      <div style={styles.resultsContainer}>
        <div style={{ 
          backgroundColor: '#f6f8fa', 
          padding: '10px 15px', 
          borderBottom: '1px solid #e1e4e8',
          fontSize: isMobile ? '13px' : '14px',
          fontWeight: '600'
        }}>
          {mode === 'compile' ? 'Результат компиляции' : 'Выполнение программы'}
        </div>
        
        <div style={styles.resultsContent}>
          {logs.length > 0 && (
            <div>
              {logs.map((log, idx) => (
                <div key={idx} style={{
                  ...styles.logText,
                  color: log.includes('❌') ? '#cb2431' : 
                         log.includes('✅') ? '#28a745' : 
                         log.includes('⚠️') ? '#e36209' : 
                         log.includes('📤') ? '#6f42c1' : '#24292e'
                }}>
                  {log}
                </div>
              ))}
            </div>
          )}
          
          {output.length > 0 && mode === 'interpret' && (
            <div style={{ marginTop: '15px', paddingTop: '10px', borderTop: '1px solid #e1e4e8' }}>
              <div style={{ fontSize: isMobile ? '11px' : '12px', fontWeight: '600', color: '#6a737d', marginBottom: '8px' }}>
                📄 Вывод программы:
              </div>
              {output.map((out, idx) => (
                <div key={idx} style={{ 
                  fontFamily: 'monospace', 
                  fontSize: isMobile ? '12px' : '13px',
                  padding: '6px 10px',
                  backgroundColor: '#f1f8e9',
                  borderRadius: '4px',
                  marginBottom: '4px',
                  wordBreak: 'break-word'
                }}>
                  {out}
                </div>
              ))}
            </div>
          )}
          
          {compiledBinary && mode === 'compile' && status === 'success' && (
            <div style={{ 
              marginTop: '15px',
              padding: '12px',
              backgroundColor: '#f1f8e9',
              borderRadius: '6px',
              fontSize: isMobile ? '12px' : '13px'
            }}>
              <div><strong>✅ Исполняемый файл создан</strong></div>
              <div style={{ marginTop: '8px' }}>Размер: {compiledBinary.size}</div>
              <div>Время сборки: {compiledBinary.timestamp}</div>
              <div>Переменных: {compiledBinary.variables}</div>
            </div>
          )}
          
          {Object.keys(variables).length > 0 && mode === 'interpret' && status === 'success' && (
            <div style={{ 
              marginTop: '15px',
              padding: '12px',
              backgroundColor: '#e6f7ff',
              borderRadius: '6px',
              fontSize: isMobile ? '12px' : '13px'
            }}>
              <strong>Состояние переменных:</strong>
              <div style={{ marginTop: '8px', fontFamily: 'monospace' }}>
                {Object.entries(variables).map(([name, value]) => (
                  <div key={name} style={{ marginBottom: '4px', wordBreak: 'break-word' }}>
                    <span style={{ color: '#0066cc' }}>{name}</span> = <span style={{ color: '#d14' }}>{typeof value === 'string' ? `"${value}"` : String(value)}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {status === 'error' && errorDetails && (
            <div style={{ 
              marginTop: '10px', 
              padding: '12px', 
              backgroundColor: '#ffeef0', 
              borderLeft: '4px solid #cb2431',
              borderRadius: '4px'
            }}>
              <strong style={{ color: '#cb2431' }}>⛔ {mode === 'compile' ? 'Ошибка компиляции' : 'Ошибка выполнения'}:</strong>
              <div style={{ marginTop: '5px', fontFamily: 'monospace', fontSize: isMobile ? '12px' : '13px', color: '#24292e', wordBreak: 'break-word' }}>
                {errorDetails}
              </div>
            </div>
          )}
          
          {status === 'idle' && (
            <div style={{ color: '#6a737d', fontStyle: 'italic', textAlign: 'center', padding: '30px', fontSize: isMobile ? '13px' : '14px' }}>
              Нажмите «{mode === 'compile' ? 'Компилировать' : 'Запустить'}», чтобы начать
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CompilerSimulator;