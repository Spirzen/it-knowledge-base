import React, { useEffect } from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';

export default function RandomGameGenerator() {
  return (
    <BrowserOnly>
      {() => {
        useEffect(() => {
          function extractGameTitles() {
            const links = document.querySelectorAll('a[href*="store.steampowered.com"], a[href*="nintendo.com"], a[href*="animalcrossing.nintendo.com"]');
            const titles = [];
            
            links.forEach(link => {
              let title = link.innerText.trim();
              if (title && !title.includes('Ссылка') && !title.includes('Перейти')) {
                titles.push(title);
              }
            });
            
            return titles;
          }

          window.generateRandomGame = function() {
            const games = extractGameTitles();
            const resultElement = document.getElementById('game-result');
            
            if (games.length === 0) {
              resultElement.textContent = "Список игр не найден или пуст.";
              return;
            }

            const randomIndex = Math.floor(Math.random() * games.length);
            const selectedGame = games[randomIndex];

            resultElement.style.opacity = '0';
            
            setTimeout(() => {
              resultElement.textContent = selectedGame;
              resultElement.style.opacity = '1';
              resultElement.style.transition = 'opacity 0.3s ease-in-out';
            }, 200);
          };

          const style = document.createElement('style');
          style.innerHTML = `
            #game-result {
              transition: opacity 0.3s ease-in-out;
              word-wrap: break-word;
              overflow-wrap: break-word;
            }
            
            .random-game-btn {
              background-color: #2563eb;
              color: white;
              border: none;
              padding: 12px 24px;
              border-radius: 8px;
              cursor: pointer;
              font-size: 1rem;
              font-weight: 500;
              transition: all 0.2s ease;
              width: 100%;
              max-width: 260px;
              margin: 0 auto;
              display: block;
            }
            
            .random-game-btn:hover {
              background-color: #1d4ed8 !important;
              transform: translateY(-1px);
              box-shadow: 0 4px 12px rgba(37, 99, 235, 0.3);
            }
            
            .random-game-btn:active {
              transform: translateY(0);
            }
            
            @media (max-width: 640px) {
              .random-game-container {
                padding: 1rem !important;
                margin-bottom: 1rem !important;
              }
              
              .random-game-title {
                font-size: 1.25rem !important;
              }
              
              .game-result-text {
                font-size: 1rem !important;
              }
              
              .random-game-btn {
                padding: 10px 20px;
                font-size: 0.9rem;
                max-width: 220px;
              }
            }
            
            @media (max-width: 480px) {
              .game-result-text {
                font-size: 0.9rem !important;
              }
              
              .random-game-btn {
                padding: 8px 16px;
                font-size: 0.85rem;
                max-width: 200px;
              }
            }
            
            @media (prefers-color-scheme: dark) {
              .random-game-container {
                background-color: #1f2937 !important;
                border-left-color: #3b82f6 !important;
              }
              
              .random-game-title {
                color: #60a5fa !important;
              }
              
              .random-game-description {
                color: #9ca3af !important;
              }
              
              .game-result-text {
                color: #3b82f6 !important;
              }
              
              .random-game-note {
                color: #6b7280 !important;
              }
            }
          `;
          document.head.appendChild(style);
          
          return () => {
            style.remove();
          };
        }, []);

        return (
          <div 
            id="random-game-generator" 
            className="random-game-container"
            style={{ 
              marginBottom: '2rem', 
              padding: 'clamp(1rem, 4vw, 1.5rem)', 
              borderRadius: '12px', 
              backgroundColor: '#f0f4f8', 
              borderLeft: '5px solid #3b82f6',
              boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
            }}
          >
            <h3 
              className="random-game-title"
              style={{ 
                marginTop: 0, 
                marginBottom: '0.75rem',
                color: '#1e40af', 
                fontSize: 'clamp(1.25rem, 5vw, 1.5rem)',
                fontWeight: 600
              }}
            >
              Генератор случайной игры
            </h3>
            
            <p 
              className="random-game-description"
              style={{ 
                color: '#4b5563', 
                marginBottom: '1.25rem',
                fontSize: 'clamp(0.875rem, 3vw, 1rem)',
                lineHeight: 1.5
              }}
            >
              Нажмите кнопку ниже, чтобы получить случайную рекомендацию из списка на странице.
            </p>
            
            <div 
              id="result-container" 
              style={{ 
                textAlign: 'center', 
                margin: 'clamp(1rem, 4vw, 1.5rem) 0',
                padding: 'clamp(0.75rem, 3vw, 1rem)',
                backgroundColor: 'rgba(59, 130, 246, 0.1)',
                borderRadius: '12px',
                minHeight: '80px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <div 
                id="game-result" 
                className="game-result-text"
                style={{ 
                  fontSize: 'clamp(1rem, 4vw, 1.25rem)', 
                  fontWeight: 'bold', 
                  color: '#1d4ed8', 
                  minHeight: '1.5em',
                  wordBreak: 'break-word',
                  maxWidth: '100%',
                  padding: '0 0.5rem'
                }}
              >
                Нажмите "Случайная игра", чтобы начать
              </div>
            </div>

            <button 
              onClick={() => window.generateRandomGame()} 
              className="random-game-btn"
              aria-label="Получить случайную игру"
            >
              Случайная игра
            </button>
            
            <p 
              className="random-game-note"
              style={{ 
                fontSize: 'clamp(0.7rem, 3vw, 0.85rem)', 
                color: '#9ca3af', 
                textAlign: 'center', 
                marginTop: '0.75rem',
                marginBottom: 0
              }}
            >
              * Выбор происходит динамически из игр, упомянутых на этой странице
            </p>
          </div>
        );
      }}
    </BrowserOnly>
  );
}