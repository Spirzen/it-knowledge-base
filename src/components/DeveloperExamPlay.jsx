import React, {useEffect, useMemo, useState} from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';
import ExternalPlayEmbed from './ExternalPlayEmbed';
import {extractExamQuestions, getArticleElement} from './shared/articleExtract';
import {demoLoadingFallback} from './shared/demoFallback';

const LEVEL_TITLES = {
  junior: 'Junior',
  middle: 'Middle',
  senior: 'Senior',
};

function DeveloperExamPlayInner({level = 'junior'}) {
  const [embedData, setEmbedData] = useState(null);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      const article = getArticleElement();
      const {sections, questions} = extractExamQuestions(article);
      setEmbedData({sections, questions});
    }, 320);
    return () => window.clearTimeout(timer);
  }, []);

  const title = useMemo(
    () => `Экзамен · ${LEVEL_TITLES[level] ?? level}`,
    [level],
  );

  return (
    <ExternalPlayEmbed
      example="lab/developer-exam-play"
      title={title}
      minHeight={480}
      playProps={{level}}
      embedData={embedData ?? undefined}
    />
  );
}

export default function DeveloperExamPlay(props) {
  return (
    <BrowserOnly fallback={demoLoadingFallback('Загрузка экзамена…')}>
      {() => <DeveloperExamPlayInner {...props} />}
    </BrowserOnly>
  );
}
