import React, {useMemo, useState} from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';
import clsx from 'clsx';
import DemoShell, {DemoCard} from './shared/DemoShell';
import {demoLoadingFallback} from './shared/demoFallback';
import {PROTOCOL_LAYERS, PROTOCOLS} from './shared/toolsNetworkData';
import NetworkStackExplorerPlay from './NetworkStackExplorerPlay';
import styles from './protocolCatalogPlay.module.css';

function ProtocolCatalogPlayInner() {
  const [picked, setPicked] = useState('http');
  const [showStack, setShowStack] = useState(false);

  const proto = PROTOCOLS.find((p) => p.id === picked) ?? PROTOCOLS[0];

  const layersHighlight = useMemo(
    () => PROTOCOL_LAYERS.map((l) => ({...l, active: l.n === proto.layer})),
    [proto.layer],
  );

  return (
    <DemoShell className={styles.root}>
      <DemoCard
        title="Справочник протоколов"
        subtitle="Уровень OSI, назначение и типичные утилиты — плюс анимация HTTP/DNS"
      >
        <div className={styles.layout}>
          <div className={styles.protoList} role="listbox" aria-label="Протоколы">
            {PROTOCOLS.map((p) => (
              <button
                key={p.id}
                type="button"
                role="option"
                aria-selected={picked === p.id}
                className={clsx(styles.protoBtn, picked === p.id && styles.protoBtnActive)}
                onClick={() => setPicked(p.id)}
              >
                {p.name}
              </button>
            ))}
          </div>
          <div className={styles.detail}>
            <h4>{proto.name}</h4>
            <p>
              <strong>Уровень модели:</strong> L{proto.layer} —{' '}
              {PROTOCOL_LAYERS.find((l) => l.n === proto.layer)?.name}
            </p>
            <p>{proto.role}</p>
            <p>
              <strong>Где встречается:</strong> {proto.tools}
            </p>
            <div className={styles.layerStack} aria-label="Стек OSI">
              {layersHighlight.map((l) => (
                <div
                  key={l.n}
                  className={clsx(styles.layerRow, l.active && styles.layerRowActive)}
                >
                  <span className={styles.layerNum}>L{l.n}</span>
                  <span>{l.name}</span>
                  <span className={styles.layerEx}>{l.examples.slice(0, 2).join(', ')}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div style={{marginTop: '0.75rem', textAlign: 'center'}}>
          <button
            type="button"
            className="it-demo__btn it-demo__btn--primary"
            onClick={() => setShowStack((v) => !v)}
          >
            {showStack ? 'Скрыть путь пакета' : 'Показать путь HTTP / DNS'}
          </button>
        </div>
        {showStack && (
          <div style={{marginTop: '0.85rem'}}>
            <NetworkStackExplorerPlay
              variant={proto.id === 'dns' ? 'dns' : proto.id === 'http' ? 'http' : 'basics'}
            />
          </div>
        )}
      </DemoCard>
    </DemoShell>
  );
}

export default function ProtocolCatalogPlay() {
  return (
    <BrowserOnly fallback={demoLoadingFallback('Загрузка справочника…')}>
      {() => <ProtocolCatalogPlayInner />}
    </BrowserOnly>
  );
}
