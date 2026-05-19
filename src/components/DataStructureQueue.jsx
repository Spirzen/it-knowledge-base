import React, {useState} from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';
import clsx from 'clsx';
import {demoLoadingFallback} from './shared/demoFallback';
import {
  DataStructureLayout,
  LangTabs,
  CodeBlock,
  VizSection,
  InfoNote,
  ControlRow,
  useCopyToClipboard,
} from './shared/dataStructureDemo';
import styles from './shared/dataStructureDemo.module.css';

const CODE = {
  js: `const queue = ['Заявка #1', 'Заявка #2'];

queue.push('Новая заявка');     // ENQUEUE
const first = queue.shift();    // DEQUEUE
const head = queue[0];          // PEEK`,
  py: `from collections import deque
my_queue = deque(['Заявка #1', 'Заявка #2'])

my_queue.append('Новая заявка')
first_item = my_queue.popleft()
head = my_queue[0] if my_queue else None`,
  cs: `var queue = new Queue<string> { "Заявка #1", "Заявка #2" };

queue.Enqueue("Новая заявка");
string first = queue.Dequeue();
string head = queue.Peek();`,
};

function QueueLogic() {
  const [activeTab, setActiveTab] = useState('js');
  const [queue, setQueue] = useState(['Заявка #1', 'Заявка #2', 'Заявка #3']);
  const [tempValue, setTempValue] = useState('');
  const [leaving, setLeaving] = useState(false);
  const [log, setLog] = useState([]);
  const {copied, copy} = useCopyToClipboard();

  const addLog = (message) => setLog((prev) => [message, ...prev].slice(0, 5));

  const handleEnqueue = () => {
    if (!tempValue.trim()) return;
    const item = tempValue.trim();
    setQueue((q) => [...q, item]);
    setTempValue('');
    addLog(`ENQUEUE: «${item}» добавлен в конец.`);
  };

  const handleDequeue = () => {
    if (!queue.length || leaving) return;
    const removed = queue[0];
    setLeaving(true);
    window.setTimeout(() => {
      setQueue((q) => q.slice(1));
      setLeaving(false);
      addLog(`DEQUEUE: «${removed}» обслужен из начала.`);
    }, 350);
  };

  return (
    <DataStructureLayout
      title="Очередь (Queue)"
      subtitle="Структура FIFO (First In, First Out): первым обслуживается тот, кто пришёл раньше. Добавление — в конец (enqueue), извлечение — из начала (dequeue)."
    >
      <LangTabs active={activeTab} onChange={setActiveTab} />
      <CodeBlock code={CODE[activeTab]} copied={copied} onCopy={copy} />

      <VizSection label="Очередь заявок">
        <div className={styles.queueTrack}>
          {queue.length > 0 && <span className={clsx(styles.queueBadge, styles.queueBadgeFront)}>FRONT</span>}
          {queue.length > 0 && <span className={clsx(styles.queueBadge, styles.queueBadgeRear)}>REAR</span>}

          <span className={clsx(styles.queueArrow, styles.queueArrowIn)} title="Enqueue">→</span>

          {queue.length === 0 && <span style={{color: 'var(--demo-muted)', fontStyle: 'italic'}}>Пусто</span>}

          {queue.map((item, index) => (
            <div
              key={`${item}-${index}`}
              className={clsx(
                styles.queueItem,
                index === 0 && styles.queueItemFront,
                leaving && index === 0 && styles.queueItemLeaving,
              )}
            >
              {item}
            </div>
          ))}

          <span className={clsx(styles.queueArrow, styles.queueArrowOut)} title="Dequeue">←</span>
        </div>

        <ControlRow>
          <input
            type="text"
            className="it-demo__input"
            value={tempValue}
            onChange={(e) => setTempValue(e.target.value)}
            placeholder="Название заявки..."
            onKeyDown={(e) => e.key === 'Enter' && handleEnqueue()}
            style={{flex: 1, minWidth: 140}}
          />
          <button type="button" className="it-demo__btn it-demo__btn--primary" onClick={handleEnqueue} disabled={!tempValue.trim()}>
            Enqueue
          </button>
          <button type="button" className="it-demo__btn it-demo__btn--danger" onClick={handleDequeue} disabled={!queue.length || leaving}>
            Dequeue
          </button>
        </ControlRow>

        {log.length > 0 && (
          <div className="it-demo__log" style={{width: '100%', maxWidth: 520, marginTop: '0.75rem'}}>
            <div style={{fontWeight: 600, marginBottom: '0.35rem'}}>Журнал операций</div>
            {log.map((entry, idx) => (
              <div key={idx} className="it-demo__log-entry">
                {entry}
              </div>
            ))}
          </div>
        )}
      </VizSection>

      <InfoNote title="Аналогия:">
        Линия в кассе: новые встают в конец, обслуживают с начала. Так же работают планировщики задач и буферы запросов.
      </InfoNote>
    </DataStructureLayout>
  );
}

export default function DataStructureQueue() {
  return (
    <BrowserOnly fallback={demoLoadingFallback('Загрузка очереди…')}>
      {() => <QueueLogic />}
    </BrowserOnly>
  );
}
