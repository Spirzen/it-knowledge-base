import React, {useCallback} from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';
import DemoShell, {DemoCard} from './shared/DemoShell';
import {demoLoadingFallback} from './shared/demoFallback';
import MiniDbTerminal from './shared/MiniDbTerminal';
import {executeCql, getCqlWelcome} from './shared/cassandraCqlEngine';

function CassandraCqlPlayInner() {
  const execute = useCallback((cmd) => executeCql(cmd), []);

  return (
    <DemoShell>
      <DemoCard
        title="cqlsh: запросы к wide-column таблице"
        subtitle="SELECT по partition key (user_id) читает одну партицию; без него — дорогой обход"
      >
        <MiniDbTerminal
          prompt="cqlsh> "
          welcomeLines={getCqlWelcome()}
          execute={execute}
          hints={[
            "SELECT * FROM user_events WHERE user_id = 'u-1';",
            'DESCRIBE TABLE user_events',
          ]}
        />
      </DemoCard>
    </DemoShell>
  );
}

export default function CassandraCqlPlay() {
  return (
    <BrowserOnly fallback={demoLoadingFallback()}>{() => <CassandraCqlPlayInner />}</BrowserOnly>
  );
}
