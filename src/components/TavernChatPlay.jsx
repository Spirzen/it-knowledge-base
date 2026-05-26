import React, {useEffect, useRef, useState} from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';
import clsx from 'clsx';
import DemoShell, {DemoCard} from './shared/DemoShell';
import {demoLoadingFallback} from './shared/demoFallback';
import {
  LANGUAGE_LABELS,
  ROOMS,
  parseMessage,
  randomBotMessage,
} from './shared/tavernChatEngine';
import styles from './LangPracticeSpecial.module.css';

function formatMsg(msg) {
  if (msg.type === 'whisper') {
    return (
      <div key={msg.id} className={styles.msgWhisper}>
        <span className={styles.msgFrom}>шёпот → {msg.to}:</span>
        {msg.text}
      </div>
    );
  }
  if (msg.type === 'system') {
    return (
      <div key={msg.id} className={styles.msgSystem}>
        {msg.text}
      </div>
    );
  }
  return (
    <div key={msg.id} className={styles.msgChat}>
      <span className={styles.msgFrom}>{msg.from}:</span>
      {msg.text}
    </div>
  );
}

function TavernChatPlayInner({theme = 'python', nickname: defaultNick = 'Вы'}) {
  const [roomId, setRoomId] = useState('tavern');
  const [nickname, setNickname] = useState(defaultNick);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    {id: '0', type: 'system', text: 'Добро пожаловать в таверну. Команды: /roll /who /w имя текст'},
  ]);
  const listRef = useRef(null);
  const room = ROOMS.find((r) => r.id === roomId) ?? ROOMS[0];

  useEffect(() => {
    listRef.current?.scrollTo({top: listRef.current.scrollHeight, behavior: 'smooth'});
  }, [messages]);

  const pushMessage = (msg) => {
    if (!msg) return;
    if (msg.type === 'clear') {
      setMessages([{id: String(Date.now()), type: 'system', text: 'Чат очищен.'}]);
      return;
    }
    setMessages((prev) => [...prev, {...msg, id: String(Date.now()) + Math.random()}]);
  };

  const send = () => {
    const parsed = parseMessage(input, room, nickname);
    pushMessage(parsed);
    setInput('');
    if (parsed?.type === 'chat') {
      window.setTimeout(() => pushMessage(randomBotMessage(roomId)), 600 + Math.random() * 800);
    }
  };

  const switchRoom = (id) => {
    setRoomId(id);
    const r = ROOMS.find((x) => x.id === id);
    setMessages((prev) => [
      ...prev,
      {id: String(Date.now()), type: 'system', text: `Вы вошли в канал: ${r?.label}`},
    ]);
  };

  const modelHint = LANGUAGE_LABELS[theme] ?? LANGUAGE_LABELS.python;

  return (
    <DemoShell>
      <DemoCard title="Таверна-чат" subtitle={`${modelHint} · комнаты и команды`}>
        <div className={styles.row}>
          <label className={styles.hint}>
            Ник:
            <input
              className="it-demo__input"
              style={{marginLeft: '0.35rem', width: '8rem'}}
              value={nickname}
              onChange={(e) => setNickname(e.target.value.slice(0, 16) || 'Вы')}
            />
          </label>
        </div>

        <div className={styles.chatLayout}>
          <div className={styles.roomList}>
            {ROOMS.map((r) => (
              <button
                key={r.id}
                type="button"
                className={clsx(styles.roomBtn, roomId === r.id && styles.roomBtnActive)}
                onClick={() => switchRoom(r.id)}
              >
                {r.emoji} {r.label}
              </button>
            ))}
          </div>

          <div className={styles.chatMain}>
            <div className={styles.chatHeader}>
              #{room.label} · симуляция клиент ↔ сервер (в памяти браузера)
            </div>
            <div className={styles.messages} ref={listRef}>
              {messages.map((m) => formatMsg(m))}
            </div>
            <div className={styles.chatInput}>
              <input
                className="it-demo__input"
                placeholder="Сообщение или /roll"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && send()}
              />
              <button type="button" className="it-demo__btn it-demo__btn--primary" onClick={send}>
                Отправить
              </button>
            </div>
          </div>
        </div>

        <p className={styles.hint}>
          В реальном проекте то же самое: сокет/WebSocket, поток сообщений, команды как отдельные
          обработчики.
        </p>
      </DemoCard>
    </DemoShell>
  );
}

export default function TavernChatPlay(props) {
  return (
    <BrowserOnly fallback={demoLoadingFallback('Загрузка чата…')}>
      {() => <TavernChatPlayInner {...props} />}
    </BrowserOnly>
  );
}
