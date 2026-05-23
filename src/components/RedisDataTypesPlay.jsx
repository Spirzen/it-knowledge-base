import React, {useCallback, useState} from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';
import DemoShell, {DemoCard} from './shared/DemoShell';
import {demoLoadingFallback} from './shared/demoFallback';
import MiniDbTerminal from './shared/MiniDbTerminal';
import {executeRedisCommand, getRedisWelcome} from './shared/redisCliEngine';

function RedisDataTypesPlayInner() {
  const [db, setDb] = useState(0);

  const execute = useCallback(
    (cmd) => {
      const r = executeRedisCommand(cmd);
      setDb(r.db);
      return r;
    },
    [],
  );

  return (
    <DemoShell>
      <DemoCard
        title="redis-cli: типы данных Redis"
        subtitle="Строки, хэши и списки в одной in-memory БД; логические базы SELECT 0–15"
      >
        <MiniDbTerminal
          prompt={`127.0.0.1:6379[${db}]> `}
          welcomeLines={getRedisWelcome(db)}
          execute={execute}
          hints={['SELECT 1', 'GET company_name', 'HGETALL employee:1001', 'KEYS *']}
        />
      </DemoCard>
    </DemoShell>
  );
}

export default function RedisDataTypesPlay() {
  return (
    <BrowserOnly fallback={demoLoadingFallback()}>{() => <RedisDataTypesPlayInner />}</BrowserOnly>
  );
}
