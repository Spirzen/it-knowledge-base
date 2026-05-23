import React, {useCallback, useEffect, useRef, useState} from 'react';
import clsx from 'clsx';
import terminalStyles from '../TerminalEmulator.module.css';

const LINE_CLASS = {
  banner: terminalStyles.banner,
  system: terminalStyles.system,
  muted: terminalStyles.muted,
  success: terminalStyles.success,
  error: terminalStyles.error,
  output: terminalStyles.output,
  command: terminalStyles.commandLine,
};

function TerminalLine({item, prompt}) {
  if (item.type === 'command') {
    return (
      <div className={terminalStyles.line}>
        <span className={terminalStyles.commandLine}>
          <span className={terminalStyles.prompt}>{prompt}</span> {item.command}
        </span>
      </div>
    );
  }
  return (
    <div className={clsx(terminalStyles.line, LINE_CLASS[item.type] ?? terminalStyles.output)}>
      {item.text}
    </div>
  );
}

export default function MiniDbTerminal({
  prompt,
  welcomeLines,
  execute,
  hints = [],
  minHeight = 220,
}) {
  const [lines, setLines] = useState(welcomeLines);
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([]);
  const [histIdx, setHistIdx] = useState(-1);
  const endRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({behavior: 'smooth'});
  }, [lines]);

  const run = useCallback(
    (raw) => {
      const cmd = raw.trim();
      if (!cmd) return;
      setLines((prev) => [...prev, {type: 'command', command: cmd}]);
      setHistory((h) => [...h, cmd]);

      if (cmd === 'clear') {
        setLines(welcomeLines);
        return;
      }

      const result = execute(cmd);
      if (result.lines?.length) {
        setLines((prev) => [...prev, ...result.lines]);
      }
    },
    [execute, welcomeLines],
  );

  const onKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      run(input);
      setInput('');
      setHistIdx(-1);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (!history.length) return;
      const i = histIdx < history.length - 1 ? histIdx + 1 : histIdx;
      setHistIdx(i);
      setInput(history[history.length - 1 - i]);
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (histIdx > 0) {
        const i = histIdx - 1;
        setHistIdx(i);
        setInput(history[history.length - 1 - i]);
      } else {
        setHistIdx(-1);
        setInput('');
      }
    }
  };

  return (
    <div>
      <div
        className={terminalStyles.terminal}
        style={{minHeight}}
        onClick={() => inputRef.current?.focus()}
        role="presentation"
      >
        {lines.map((item, i) => (
          <TerminalLine key={`${item.type}-${i}`} item={item} prompt={prompt} />
        ))}
        <div className={terminalStyles.inputRow}>
          <span className={terminalStyles.prompt}>{prompt}</span>
          <input
            ref={inputRef}
            className={terminalStyles.input}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={onKeyDown}
            spellCheck={false}
            autoComplete="off"
            aria-label="Команда"
          />
        </div>
        <div ref={endRef} />
      </div>
      {hints.length > 0 && (
        <p className="it-demo__hint" style={{marginTop: '0.5rem'}}>
          {hints.join(' · ')}
        </p>
      )}
    </div>
  );
}
