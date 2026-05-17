import React, {useEffect, useState, useCallback} from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';
import DemoShell from './shared/DemoShell';
import {demoLoadingFallback} from './shared/demoFallback';

function TimerInner({seconds = 60, label = 'Таймер'}) {
  const [remaining, setRemaining] = useState(seconds);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    setRemaining(seconds);
    setRunning(false);
  }, [seconds]);

  useEffect(() => {
    if (!running || remaining <= 0) {
      return undefined;
    }
    const id = window.setInterval(() => {
      setRemaining((r) => {
        if (r <= 1) {
          setRunning(false);
          return 0;
        }
        return r - 1;
      });
    }, 1000);
    return () => window.clearInterval(id);
  }, [running, remaining]);

  const reset = useCallback(() => {
    setRemaining(seconds);
    setRunning(false);
  }, [seconds]);

  const pct = seconds > 0 ? Math.round((remaining / seconds) * 100) : 0;

  return (
    <DemoShell>
      <div className="it-demo__card">
        <div className="it-demo__header">
          <h4 className="it-demo__title">{label}</h4>
          <p className="it-demo__subtitle">
            {remaining > 0 ? `Осталось: ${remaining} сек.` : 'Время вышло'}
          </p>
        </div>
        <div className="it-demo__body">
          <div className="it-demo__progress" style={{marginBottom: '1rem'}}>
            <div className="it-demo__progress-bar" style={{width: `${pct}%`}} />
          </div>
          <div className="it-demo__row">
            <button
              type="button"
              className="it-demo__btn it-demo__btn--primary"
              onClick={() => setRunning((v) => !v)}
              disabled={remaining === 0}
            >
              {running ? 'Пауза' : 'Старт'}
            </button>
            <button
              type="button"
              className="it-demo__btn it-demo__btn--secondary"
              onClick={reset}
            >
              Сброс
            </button>
          </div>
        </div>
      </div>
    </DemoShell>
  );
}

export default function Timer(props) {
  return (
    <BrowserOnly fallback={demoLoadingFallback()}>
      {() => <TimerInner {...props} />}
    </BrowserOnly>
  );
}
