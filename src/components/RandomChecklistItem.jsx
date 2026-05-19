import React from 'react';
import ArticleQuestionPicker from './shared/ArticleQuestionPicker';

export default function RandomChecklistItem() {
  return (
    <ArticleQuestionPicker
      mode="checklist"
      title="Вопрос для самопроверки"
      subtitle="Случайный вопрос из нумерованного списка в конце статьи."
      emptyMessage="В этой статье пока нет вопросов для самопроверки."
    />
  );
}
