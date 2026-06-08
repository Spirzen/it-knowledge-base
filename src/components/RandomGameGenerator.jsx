import React, {useEffect, useState} from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';
import ExternalPlayEmbed from './ExternalPlayEmbed';
import {extractGameEntries} from './shared/articleExtract';
import {demoLoadingFallback} from './shared/demoFallback';

function RandomGameGeneratorInner() {
  const [embedData, setEmbedData] = useState(null);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setEmbedData({games: extractGameEntries()});
    }, 200);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <ExternalPlayEmbed
      example="tools-games/random-game-generator"
      title="Генератор случайной игры"
      minHeight={420}
      embedData={embedData ?? undefined}
    />
  );
}

export default function RandomGameGenerator() {
  return (
    <BrowserOnly fallback={demoLoadingFallback('Загрузка генератора…')}>
      {() => <RandomGameGeneratorInner />}
    </BrowserOnly>
  );
}
