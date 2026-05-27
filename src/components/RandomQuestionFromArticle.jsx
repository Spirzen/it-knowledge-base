import React from 'react';
import ArticleQuestionPicker from './shared/ArticleQuestionPicker';

export default function RandomQuestionFromArticle() {
  return (
    <ArticleQuestionPicker
      mode="article"
      title="Случайный вопрос"
      subtitle="Вопрос из блоков &quot;Вопрос&quot; в тексте лабораторной работы."
      emptyMessage="Вопросы не найдены в этой статье."
      errorHint='Компонент ищет заголовки "#### Вопрос" и берёт ближайший текстовый блок сразу после них.'
    />
  );
}
