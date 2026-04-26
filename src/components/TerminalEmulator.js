import React, { useState, useEffect, useRef } from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';

// Вся логика компонента с хуками
const TerminalEmulatorLogic = () => {
  const [history, setHistory] = useState([
    { type: 'output', text: 'Добро пожаловать в интерактивный терминал.' },
    { type: 'output', text: 'Введите "help" для списка доступных команд.' },
    { type: 'output', text: '---' },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [commandHistory, setCommandHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  
  const inputRef = useRef(null);
  const endOfListRef = useRef(null);

  // Добавляем динамические стили через useEffect
  useEffect(() => {
    const styleSheet = document.createElement("style");
    styleSheet.textContent = `
      @media (max-width: 768px) {
        .terminal-container {
          margin: 0.5rem auto !important;
        }
        .terminal-body {
          padding: 12px !important;
        }
        .terminal-input {
          font-size: 14px !important;
        }
      }
      
      @media (max-width: 480px) {
        .terminal-body {
          padding: 8px !important;
        }
        .terminal-prompt {
          font-size: 12px !important;
        }
      }
      
      @media (hover: hover) and (pointer: fine) {
        .terminal-input:hover {
          background-color: rgba(255, 255, 255, 0.05);
        }
      }
      
      @media (pointer: coarse) {
        .terminal-input {
          font-size: 16px !important;
          padding: 8px 4px !important;
        }
      }
      
      @media (max-width: 768px) and (orientation: landscape) {
        .terminal-body {
          max-height: 70vh !important;
        }
      }
    `;
    document.head.appendChild(styleSheet);
    return () => {
      document.head.removeChild(styleSheet);
    };
  }, []);

  useEffect(() => {
    if (endOfListRef.current) {
      endOfListRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [history]);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      processCommand(inputValue.trim());
      setInputValue('');
      setHistoryIndex(-1);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length > 0) {
        const newIndex = historyIndex < commandHistory.length - 1 ? historyIndex + 1 : historyIndex;
        setHistoryIndex(newIndex);
        setInputValue(commandHistory[commandHistory.length - 1 - newIndex]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1;
        setHistoryIndex(newIndex);
        setInputValue(commandHistory[commandHistory.length - 1 - newIndex]);
      } else {
        setHistoryIndex(-1);
        setInputValue('');
      }
    }
  };

  const processCommand = (cmd) => {
    const lowerCmd = cmd.toLowerCase().trim();
    let outputText = '';
    let newHistoryItem = null;

    switch (lowerCmd) {
      case 'help':
        outputText = (
          <>
            Доступные команды:<br />
            - <strong>help</strong>: Показать этот список<br />
            - <strong>clear</strong>: Очистить экран<br />
            - <strong>echo [текст]</strong>: Вывести текст<br />
            - <strong>date</strong>: Текущая дата и время<br />
            - <strong>whoami</strong>: Имя пользователя<br />
            - <strong>exit</strong>: Закрыть симуляцию (перезагрузка)<br />
            - Любое другое слово будет выведено как есть.
          </>
        );
        break;
      
      case 'clear':
        setHistory([
          { type: 'output', text: 'Экран очищен.' },
          { type: 'output', text: '---' },
        ]);
        return; 

      case 'exit':
        setHistory([
          { type: 'output', text: 'Сессия завершена. Перезагрузка...' },
          { type: 'output', text: '---' },
        ]);
        setTimeout(() => {
          setHistory([
            { type: 'output', text: 'Перезапуск терминала...' },
            { type: 'output', text: 'Введите "help" для списка команд.' },
            { type: 'output', text: '---' },
          ]);
        }, 1000);
        return;

      case 'date':
        outputText = new Date().toLocaleString('ru-RU');
        break;

      case 'whoami':
        outputText = 'guest_user';
        break;

      default:
        if (lowerCmd.startsWith('echo ')) {
          outputText = cmd.substring(5);
        } else {
          outputText = `Команда "${cmd}" не найдена. Введите "help".`;
        }
    }

    const newCommandHistory = [...commandHistory, cmd];
    setCommandHistory(newCommandHistory);

    const newOutput = {
      type: 'output',
      text: (
        <>
          <span className="terminal-prompt">guest@universe-it:~$</span> {cmd}<br />
          {outputText}
        </>
      ),
    };

    setHistory((prev) => [...prev, newOutput]);
  };

  const styles = {
    container: {
      width: '100%',
      maxWidth: 'min(900px, 95%)',
      margin: 'clamp(0.5rem, 5vw, 2rem) auto',
      borderRadius: 'clamp(6px, 2vw, 8px)',
      overflow: 'hidden',
      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
      fontFamily: "'Consolas', 'Monaco', 'Courier New', monospace",
      backgroundColor: '#1e1e1e',
      color: '#d4d4d4',
      border: '1px solid #333',
      fontSize: 'clamp(12px, 4vw, 16px)',
    },
    header: {
      display: 'flex',
      alignItems: 'center',
      padding: 'clamp(6px, 2vw, 12px) clamp(8px, 3vw, 16px)',
      backgroundColor: '#2d2d2d',
      borderBottom: '1px solid #333',
      gap: 'clamp(8px, 2vw, 12px)',
    },
    buttons: {
      display: 'flex',
      gap: 'clamp(4px, 1.5vw, 8px)',
      flexShrink: 0,
    },
    button: {
      width: 'clamp(10px, 3vw, 14px)',
      height: 'clamp(10px, 3vw, 14px)',
      borderRadius: '50%',
    },
    buttonRed: { backgroundColor: '#ff5f56' },
    buttonYellow: { backgroundColor: '#ffbd2e' },
    buttonGreen: { backgroundColor: '#27c93f' },
    title: {
      fontSize: 'clamp(11px, 3.5vw, 14px)',
      color: '#a0a0a0',
      fontWeight: 500,
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
    },
    body: {
      padding: 'clamp(12px, 3vw, 20px)',
      minHeight: 'clamp(150px, 40vh, 200px)',
      maxHeight: 'clamp(300px, 60vh, 500px)',
      overflowY: 'auto',
      whiteSpace: 'pre-wrap',
      wordBreak: 'break-word',
      WebkitOverflowScrolling: 'touch',
    },
    line: {
      marginBottom: 'clamp(4px, 1.5vw, 8px)',
      lineHeight: '1.5',
      fontSize: 'inherit',
    },
    prompt: {
      color: '#50fa7b',
      fontWeight: 'bold',
      marginRight: 'clamp(6px, 2vw, 10px)',
      fontSize: 'inherit',
      flexShrink: 0,
    },
    inputLine: {
      display: 'flex',
      alignItems: 'center',
      marginTop: 'clamp(8px, 2vw, 12px)',
      flexWrap: 'wrap',
      gap: '4px',
    },
    input: {
      background: 'transparent',
      border: 'none',
      color: '#d4d4d4',
      fontFamily: 'inherit',
      fontSize: 'inherit',
      flex: 1,
      outline: 'none',
      caretColor: '#d4d4d4',
      minWidth: '120px',
      padding: '4px 0',
    },
  };

  return (
    <div style={styles.container} className="terminal-container">
      <div style={styles.header}>
        <div style={styles.buttons}>
          <span style={{ ...styles.button, ...styles.buttonRed }}></span>
          <span style={{ ...styles.button, ...styles.buttonYellow }}></span>
          <span style={{ ...styles.button, ...styles.buttonGreen }}></span>
        </div>
        <div style={styles.title}>bash — 80x24</div>
      </div>
      <div style={styles.body} className="terminal-body">
        {history.map((item, index) => (
          <div key={index} style={styles.line}>
            {item.text}
          </div>
        ))}
        <div style={styles.inputLine}>
          <span style={styles.prompt} className="terminal-prompt">guest@universe-it:~$</span>
          <input
            ref={inputRef}
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
            style={styles.input}
            className="terminal-input"
            autoFocus
            autoComplete="off"
            spellCheck="false"
          />
        </div>
        <div ref={endOfListRef} />
      </div>
    </div>
  );
};

// Экспорт компонента, обернутого в BrowserOnly
export default function TerminalEmulator() {
  return (
    <BrowserOnly fallback={<div>Загрузка терминала...</div>}>
      {() => <TerminalEmulatorLogic />}
    </BrowserOnly>
  );
}