import React, {useCallback} from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';
import DemoShell, {DemoCard} from './shared/DemoShell';
import {demoLoadingFallback} from './shared/demoFallback';
import MiniDbTerminal from './shared/MiniDbTerminal';
import {executeMemcachedCommand, getMemcachedWelcome} from './shared/memcachedShellEngine';

function MemcachedShellPlayInner() {
  const execute = useCallback((cmd) => executeMemcachedCommand(cmd), []);

  return (
    <DemoShell>
      <DemoCard
        title="Протокол Memcached (порт 11211)"
        subtitle="Текстовые команды set / get / delete / stats — сервер не интерпретирует значения"
      >
        <MiniDbTerminal
          prompt="memcached> "
          welcomeLines={getMemcachedWelcome()}
          execute={execute}
          hints={['set page:home 0 300 5 hello', 'get page:home', 'stats']}
        />
      </DemoCard>
    </DemoShell>
  );
}

export default function MemcachedShellPlay() {
  return (
    <BrowserOnly fallback={demoLoadingFallback()}>{() => <MemcachedShellPlayInner />}</BrowserOnly>
  );
}
