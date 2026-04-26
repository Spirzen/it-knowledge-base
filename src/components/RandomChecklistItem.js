import React, { useState, useEffect } from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';

export default function RandomChecklistItem() {
  return (
    <BrowserOnly>
      {() => {
        const [questions, setQuestions] = useState([]);
        const [currentQuestion, setCurrentQuestion] = useState('');
        const [generated, setGenerated] = useState(false);

        const extractQuestionsFromArticle = () => {
          const articleElement = document.querySelector('main article');
          
          if (!articleElement) {
            console.warn('Элемент статьи не найден.');
            return [];
          }

          const foundQuestions = [];

          const orderedLists = articleElement.querySelectorAll('ol');
          
          orderedLists.forEach(ol => {
            const listItems = ol.querySelectorAll('li');
            
            listItems.forEach(li => {
              let text = li.textContent.trim();
            
              if (text.length > 5 && text.includes('?')) {
                foundQuestions.push(text);
              }
            });
          });

          return [...new Set(foundQuestions)];
        };

        useEffect(() => {
          const timer = setTimeout(() => {
            const extracted = extractQuestionsFromArticle();
            
            if (extracted.length === 0) {
              setQuestions(['В этой статье пока нет вопросов для самопроверки.']);
              setCurrentQuestion('В этой статье пока нет вопросов для самопроверки.');
              setGenerated(true);
              return;
            }

            setQuestions(extracted);
            
            const randomIndex = Math.floor(Math.random() * extracted.length);
            setCurrentQuestion(extracted[randomIndex]);
            setGenerated(true);
          }, 300);

          return () => clearTimeout(timer);
        }, []);

        const handleGenerate = () => {
          if (questions.length === 0) return;

          let newIndex;
          do {
            newIndex = Math.floor(Math.random() * questions.length);
          } while (newIndex === questions.indexOf(currentQuestion) && questions.length > 1);

          setCurrentQuestion(questions[newIndex]);
          setGenerated(true);
        };

        if (questions.length === 0) {
          return null;
        }

        const isMobile = typeof window !== 'undefined' && window.innerWidth <= 640;
        
        const containerStyle = {
          backgroundColor: '#f0f4f8',
          borderLeft: '5px solid #3b82f6',
          padding: 'clamp(0.8rem, 4vw, 1.5rem)',
          borderRadius: '8px',
          marginBottom: 'clamp(1rem, 3vw, 1.5rem)',
          fontFamily: 'inherit',
          boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
          lineHeight: '1.6',
          transition: 'all 0.3s ease'
        };

        const titleStyle = {
          marginTop: 0,
          color: '#1e40af',
          fontSize: 'clamp(1rem, 4vw, 1.2rem)',
          marginBlockEnd: 'clamp(0.6rem, 3vw, 0.8rem)',
          fontWeight: '600',
          wordBreak: 'break-word'
        };

        const questionStyle = {
          fontSize: 'clamp(1rem, 4.5vw, 1.2rem)',
          fontWeight: '500',
          color: '#1f2937',
          marginBottom: 'clamp(1rem, 4vw, 1.5rem)',
          minHeight: 'clamp(60px, 15vw, 80px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          wordBreak: 'break-word',
          whiteSpace: 'normal',
          lineHeight: '1.5',
          padding: '0 clamp(0.5rem, 2vw, 1rem)'
        };

        const buttonStyle = {
          backgroundColor: '#3b82f6',
          color: 'white',
          border: 'none',
          padding: 'clamp(0.6rem, 2.5vw, 0.8rem) clamp(1rem, 5vw, 1.5rem)',
          borderRadius: '8px',
          cursor: 'pointer',
          fontSize: 'clamp(0.875rem, 3.5vw, 1rem)',
          fontWeight: '600',
          transition: 'all 0.2s ease',
          fontFamily: 'inherit',
          width: '100%',
          maxWidth: 'min(280px, 90%)',
          display: 'block',
          margin: '0 auto',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
          WebkitTapHighlightColor: 'transparent'
        };

        const footnoteStyle = {
          fontSize: 'clamp(0.7rem, 2.5vw, 0.8rem)',
          color: '#6b7280',
          textAlign: 'center',
          marginTop: 'clamp(0.8rem, 3vw, 1rem)',
          fontStyle: 'italic',
          padding: '0 clamp(0.5rem, 2vw, 1rem)',
          wordBreak: 'break-word'
        };

        const handleButtonHover = (e) => {
          e.target.style.backgroundColor = '#2563eb';
          e.target.style.transform = 'translateY(-1px)';
          e.target.style.boxShadow = '0 4px 8px rgba(0,0,0,0.15)';
        };

        const handleButtonLeave = (e) => {
          e.target.style.backgroundColor = '#3b82f6';
          e.target.style.transform = 'translateY(0)';
          e.target.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)';
        };

        const handleButtonTouch = (e) => {
          e.target.style.backgroundColor = '#2563eb';
          setTimeout(() => {
            e.target.style.backgroundColor = '#3b82f6';
          }, 150);
        };

        return (
          <div style={containerStyle}>
            <h3 style={titleStyle}>
              {isMobile ? 'Вопрос' : 'Вопрос для самопроверки'}
            </h3>
            
            <div style={questionStyle}>
              {currentQuestion}
            </div>

            <button
              onClick={handleGenerate}
              style={buttonStyle}
              onMouseOver={handleButtonHover}
              onMouseOut={handleButtonLeave}
              onTouchStart={handleButtonTouch}
              onTouchEnd={() => {}}
              aria-label="Сгенерировать другой вопрос"
            >
              🔄 Сгенерировать другой вопрос
            </button>
            
            <p style={footnoteStyle}>
              {isMobile ? '*Вопросы из этой статьи' : '*Выбор происходит динамически из списка вопросов в этой статье'}
            </p>
          </div>
        );
      }}
    </BrowserOnly>
  );
}