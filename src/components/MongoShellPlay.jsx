import React, {useCallback} from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';
import DemoShell, {DemoCard} from './shared/DemoShell';
import {demoLoadingFallback} from './shared/demoFallback';
import MiniDbTerminal from './shared/MiniDbTerminal';
import {MONGO_HELP, executeMongoCommand, getMongoWelcome} from './shared/mongoShellEngine';

function MongoShellPlayInner() {
  const execute = useCallback((cmd) => {
    if (cmd === 'help') {
      return {lines: [{type: 'output', text: MONGO_HELP}]};
    }
    return executeMongoCommand(cmd);
  }, []);

  return (
    <DemoShell>
      <DemoCard
        title="mongosh: первые команды MongoDB"
        subtitle="Переключение БД, вставка документа и выборка из коллекции — без установки сервера"
      >
        <MiniDbTerminal
          title="mongosh"
          prompt="test> "
          welcomeLines={getMongoWelcome()}
          execute={execute}
          hints={['use company_db', 'db.employees.find()', 'help']}
        />
      </DemoCard>
    </DemoShell>
  );
}

export default function MongoShellPlay() {
  return (
    <BrowserOnly fallback={demoLoadingFallback()}>{() => <MongoShellPlayInner />}</BrowserOnly>
  );
}
