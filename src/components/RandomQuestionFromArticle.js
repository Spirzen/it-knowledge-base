import React, { useState, useEffect } from 'react';
import BrowserOnly from './BrowserOnly';

export default function RandomQuestionFromArticle() {
  return (
    <BrowserOnly>
      {() => {
        const [questions, setQuestions] = useState([]);
        const [currentQuestion, setCurrentQuestion] = useState('');
        const [isLoading, setIsLoading] = useState(true);
        const [isClient, setIsClient] = useState(false);

        useEffect(() => {
          setIsClient(true);
        }, []);

        useEffect(() => {
          if (!isClient) return;

          const loadQuestions = () => {
            try {
              const articleElement = document.querySelector('main article') || 
                                    document.querySelector('.theme-doc-markdown') ||
                                    document.querySelector('article');
              
              if (!articleElement) {
                console.warn('Статья не найдена');
                setCurrentQuestion('⚠️ Статья не найдена');
                setIsLoading(false);
                return;
              }

              const foundQuestions = [];
              
              const questionAnchors = articleElement.querySelectorAll('h4.anchor[id^="вопрос"]');
              questionAnchors.forEach(anchor => {
                let nextElement = anchor.nextElementSibling;
                while (nextElement && nextElement.tagName !== 'P') {
                  nextElement = nextElement.nextElementSibling;
                }
                
                if (nextElement && nextElement.textContent) {
                  let questionText = nextElement.textContent.trim();
                  if (questionText.length > 5 && questionText.includes('?')) {
                    foundQuestions.push(questionText);
                  }
                }
              });
              
              if (foundQuestions.length === 0) {
                const allElements = articleElement.querySelectorAll('h1, h2, h3, h4, h5, h6, strong, b');
                const questionHeaders = Array.from(allElements).filter(el => 
                  el.textContent.trim() === 'Вопрос' || 
                  el.textContent.trim().startsWith('Вопрос')
                );
                
                questionHeaders.forEach(header => {
                  let nextElement = header.nextElementSibling;
                  let attempts = 0;
                  while (nextElement && nextElement.tagName !== 'P' && attempts < 5) {
                    nextElement = nextElement.nextElementSibling;
                    attempts++;
                  }
                  
                  if (nextElement && nextElement.tagName === 'P') {
                    let questionText = nextElement.textContent.trim();
                    if (questionText.length > 5 && questionText.includes('?')) {
                      foundQuestions.push(questionText);
                    }
                  }
                });
              }
              
              if (foundQuestions.length === 0) {
                const html = articleElement.innerHTML;
                const regex1 = /<h4[^>]*>Вопрос<\/h4>\s*<p[^>]*>([^<]+(?:<[^/][^>]*>[^<]*<\/[^>]+>)*[^<]*)<\/p>/gi;
                let match;
                while ((match = regex1.exec(html)) !== null) {
                  let questionText = match[1].replace(/<[^>]*>/g, '').trim();
                  if (questionText.includes('?')) {
                    foundQuestions.push(questionText);
                  }
                }
                
                if (foundQuestions.length === 0) {
                  const regex2 = /####\s*Вопрос\s*[\s\S]*?<p>(.*?)<\/p>/gi;
                  while ((match = regex2.exec(html)) !== null) {
                    let questionText = match[1].replace(/<[^>]*>/g, '').trim();
                    if (questionText.includes('?')) {
                      foundQuestions.push(questionText);
                    }
                  }
                }
              }
              
              if (foundQuestions.length === 0) {
                setCurrentQuestion('❓ Вопросы не найдены');
                console.log('HTML статьи для отладки:', articleElement.innerHTML.substring(0, 500));
              } else {
                setQuestions(foundQuestions);
                const randomIndex = Math.floor(Math.random() * foundQuestions.length);
                setCurrentQuestion(foundQuestions[randomIndex]);
              }
            } catch (err) {
              console.error('Ошибка:', err);
              setCurrentQuestion('❌ Ошибка при загрузке вопросов');
            } finally {
              setIsLoading(false);
            }
          };
          
          const timer = setTimeout(loadQuestions, 300);
          return () => clearTimeout(timer);
        }, [isClient]);

        const containerStyles = {
          backgroundColor: '#f0f4f8',
          borderLeft: '5px solid #3b82f6',
          padding: 'clamp(0.8rem, 4vw, 1.2rem)',
          borderRadius: '8px',
          marginBottom: 'clamp(1rem, 4vw, 1.5rem)',
          boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
          transition: 'all 0.3s ease'
        };

        const titleStyles = {
          marginTop: 0,
          color: '#1e40af',
          marginBottom: 'clamp(0.6rem, 3vw, 0.8rem)',
          fontSize: 'clamp(1.1rem, 5vw, 1.3rem)',
          fontWeight: 'bold'
        };

        const questionBoxStyles = {
          fontSize: 'clamp(0.95rem, 4vw, 1.1rem)',
          fontWeight: '500',
          marginBottom: 'clamp(1rem, 4vw, 1.2rem)',
          padding: 'clamp(0.75rem, 3vw, 1rem)',
          backgroundColor: '#ffffff',
          borderRadius: '8px',
          color: '#1f2937',
          lineHeight: '1.6',
          border: '1px solid #e5e7eb',
          wordBreak: 'break-word',
          overflowWrap: 'break-word'
        };

        const buttonStyles = {
          backgroundColor: '#3b82f6',
          color: 'white',
          border: 'none',
          padding: 'clamp(0.6rem, 3vw, 0.8rem) clamp(1rem, 5vw, 1.5rem)',
          borderRadius: '8px',
          cursor: 'pointer',
          fontSize: 'clamp(0.85rem, 4vw, 0.95rem)',
          fontWeight: 'bold',
          transition: 'all 0.2s ease',
          width: '100%',
          maxWidth: '280px',
          display: 'block',
          margin: '0 auto',
          boxShadow: '0 1px 2px rgba(0,0,0,0.1)'
        };

        const statsStyles = {
          fontSize: 'clamp(0.7rem, 3vw, 0.75rem)',
          color: '#6b7280',
          textAlign: 'center',
          marginTop: 'clamp(0.8rem, 3vw, 1rem)',
          fontStyle: 'italic'
        };

        const errorContainerStyles = {
          backgroundColor: '#fef2f2',
          borderLeft: '5px solid #ef4444',
          padding: 'clamp(0.8rem, 4vw, 1.2rem)',
          borderRadius: '8px',
          marginBottom: 'clamp(1rem, 4vw, 1.5rem)'
        };

        const errorTitleStyles = {
          marginTop: 0,
          color: '#dc2626',
          fontSize: 'clamp(1rem, 4.5vw, 1.2rem)',
          marginBottom: '0.5rem'
        };

        const loadingContainerStyles = {
          backgroundColor: '#f0f4f8',
          borderLeft: '5px solid #9ca3af',
          padding: 'clamp(1rem, 4vw, 1.2rem)',
          borderRadius: '8px',
          textAlign: 'center',
          fontSize: 'clamp(0.9rem, 4vw, 1rem)'
        };

        if (!isClient || isLoading) {
          return <div style={loadingContainerStyles}>⏳ Загрузка вопросов...</div>;
        }

        if (!currentQuestion || currentQuestion.includes('не найдены')) {
          return (
            <div style={errorContainerStyles}>
              <h3 style={errorTitleStyles}>⚠️ Ошибка</h3>
              <p style={{ fontSize: 'clamp(0.85rem, 4vw, 1rem)', lineHeight: '1.5' }}>
                {currentQuestion}
              </p>
              <details style={{ marginTop: '0.5rem', fontSize: 'clamp(0.8rem, 3.5vw, 0.9rem)' }}>
                <summary style={{ cursor: 'pointer', color: '#6b7280' }}>Техническая информация</summary>
                <p style={{ marginTop: '0.5rem', color: '#6b7280', lineHeight: '1.5' }}>
                  Компонент ищет заголовки "#### Вопрос" и следующий за ними параграф с текстом вопроса.
                  Убедитесь, что структура статьи соответствует этому формату.
                </p>
              </details>
            </div>
          );
        }

        return (
          <div style={containerStyles}>
            <h3 style={titleStyles}>
              Случайный вопрос
            </h3>
            
            <div style={questionBoxStyles}>
              {currentQuestion}
            </div>

            {questions.length > 1 && (
              <button
                onClick={() => {
                  let newIndex;
                  do {
                    newIndex = Math.floor(Math.random() * questions.length);
                  } while (questions.length > 1 && newIndex === questions.indexOf(currentQuestion));
                  setCurrentQuestion(questions[newIndex]);
                }}
                style={buttonStyles}
                onMouseOver={(e) => {
                  e.target.style.backgroundColor = '#2563eb';
                  e.target.style.transform = 'translateY(-1px)';
                }}
                onMouseOut={(e) => {
                  e.target.style.backgroundColor = '#3b82f6';
                  e.target.style.transform = 'translateY(0)';
                }}
                onTouchStart={(e) => {
                  e.target.style.backgroundColor = '#2563eb';
                }}
                onTouchEnd={(e) => {
                  e.target.style.backgroundColor = '#3b82f6';
                }}
              >
                🔄 Сгенерировать другой вопрос
              </button>
            )}
            
            <p style={statsStyles}>
              *Вопросы автоматически извлекаются из {questions.length} найденных в этой статье
            </p>
          </div>
        );
      }}
    </BrowserOnly>
  );
}