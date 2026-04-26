import React, { useState, useEffect } from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';

const DockerfileBuilder = () => (
  <BrowserOnly>
    {() => {
      const styles = {
        container: {
          fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"',
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '20px',
          boxSizing: 'border-box',
          backgroundColor: '#f5f5f5',
          minHeight: '100vh'
        },
        header: {
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          padding: '24px',
          borderRadius: '12px',
          marginBottom: '24px',
          color: 'white',
          textAlign: 'center'
        },
        toolbar: {
          display: 'flex',
          flexWrap: 'wrap',
          gap: '10px',
          marginBottom: '24px',
          justifyContent: 'center'
        },
        card: {
          backgroundColor: 'white',
          borderRadius: '8px',
          padding: '20px',
          marginBottom: '24px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
        },
        button: {
          padding: '10px 20px',
          border: 'none',
          borderRadius: '6px',
          cursor: 'pointer',
          fontWeight: '500',
          transition: 'transform 0.1s, opacity 0.2s',
          fontSize: '14px',
          color: 'white'
        },
        input: {
          padding: '10px',
          border: '1px solid #ddd',
          borderRadius: '6px',
          fontSize: '14px',
          fontFamily: 'monospace',
          width: '100%',
          boxSizing: 'border-box'
        },
        select: {
          padding: '10px',
          border: '1px solid #ddd',
          borderRadius: '6px',
          fontSize: '14px',
          backgroundColor: 'white',
          minWidth: '150px'
        },
        codeBlock: {
          backgroundColor: '#1e1e1e',
          color: '#d4d4d4',
          padding: '16px',
          borderRadius: '8px',
          overflowX: 'auto',
          fontFamily: 'Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace',
          fontSize: '14px',
          lineHeight: '1.5',
          whiteSpace: 'pre-wrap',
          wordBreak: 'break-word'
        },
        logBlock: {
          backgroundColor: '#1e1e1e',
          color: '#4caf50',
          padding: '16px',
          borderRadius: '8px',
          height: '300px',
          overflowY: 'auto',
          fontFamily: 'Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace',
          fontSize: '13px',
          lineHeight: '1.4'
        },
        actionButtons: {
          display: 'flex',
          gap: '5px',
          marginTop: '8px',
          justifyContent: 'flex-end'
        }
      };

      const [instructions, setInstructions] = useState([
        { id: '1', type: 'FROM', value: 'node:18-alpine', description: 'Базовый образ' },
        { id: '2', type: 'WORKDIR', value: '/app', description: 'Рабочая директория' },
        { id: '3', type: 'COPY', value: 'package*.json ./', description: 'Копирование файлов' },
        { id: '4', type: 'RUN', value: 'npm install', description: 'Установка зависимостей' },
        { id: '5', type: 'COPY', value: '. .', description: 'Копирование исходников' },
        { id: '6', type: 'ENV', value: 'NODE_ENV=production', description: 'Переменные окружения' },
        { id: '7', type: 'EXPOSE', value: '3000', description: 'Открытие порта' },
        { id: '8', type: 'CMD', value: '["node", "server.js"]', description: 'Команда запуска' }
      ]);

      const [selectedInstruction, setSelectedInstruction] = useState('FROM');
      const [instructionValue, setInstructionValue] = useState('');
      const [instructionDesc, setInstructionDesc] = useState('');
      const [validationErrors, setValidationErrors] = useState({});
      const [buildLogs, setBuildLogs] = useState([]);
      const [isBuilding, setIsBuilding] = useState(false);
      const [showPreview, setShowPreview] = useState(true);

      const instructionTemplates = {
        FROM: { syntax: 'FROM image[:tag] [AS name]', description: 'Устанавливает базовый образ', example: 'FROM ubuntu:22.04', validate: (v) => !v.trim() ? 'Укажите базовый образ' : null },
        WORKDIR: { syntax: 'WORKDIR <path>', description: 'Устанавливает рабочую директорию', example: 'WORKDIR /app/src', validate: (v) => !v.trim() ? 'Укажите путь' : null },
        COPY: { syntax: 'COPY <src> <dest>', description: 'Копирует файлы в образ', example: 'COPY . /app', validate: (v) => !v.trim() ? 'Укажите source и destination' : null },
        RUN: { syntax: 'RUN <command>', description: 'Выполняет команду в слое образа', example: 'RUN apt-get update', validate: (v) => !v.trim() ? 'Укажите команду' : null },
        EXPOSE: { syntax: 'EXPOSE <port>', description: 'Указывает порты контейнера', example: 'EXPOSE 80 443/tcp', validate: (v) => !v.trim() ? 'Укажите порт' : null },
        ENV: { syntax: 'ENV key=value', description: 'Устанавливает переменные окружения', example: 'ENV NODE_ENV=production', validate: (v) => !v.trim() ? 'Укажите key=value' : null },
        CMD: { syntax: 'CMD ["command", "param"]', description: 'Команда по умолчанию', example: 'CMD ["npm", "start"]', validate: (v) => !v.trim() ? 'Укажите команду' : null },
        ARG: { syntax: 'ARG name=default', description: 'Переменная времени сборки', example: 'ARG VERSION=latest', validate: (v) => !v.trim() ? 'Укажите аргумент' : null },
        LABEL: { syntax: 'LABEL key=value', description: 'Добавляет метаданные', example: 'LABEL version="1.0"', validate: (v) => !v.trim() ? 'Укажите метку' : null },
        USER: { syntax: 'USER user[:group]', description: 'Устанавливает пользователя', example: 'USER node', validate: (v) => !v.trim() ? 'Укажите пользователя' : null },
        HEALTHCHECK: { syntax: 'HEALTHCHECK CMD command', description: 'Проверка здоровья', example: 'HEALTHCHECK CMD curl -f http://localhost/', validate: (v) => !v.trim() ? 'Укажите команду' : null },
        ENTRYPOINT: { syntax: 'ENTRYPOINT ["command"]', description: 'Точка входа', example: 'ENTRYPOINT ["docker-entrypoint.sh"]', validate: (v) => !v.trim() ? 'Укажите точку входа' : null },
        VOLUME: { syntax: 'VOLUME ["/path"]', description: 'Создает том', example: 'VOLUME ["/data"]', validate: (v) => !v.trim() ? 'Укажите путь' : null }
      };

      const addInstruction = () => {
        const template = instructionTemplates[selectedInstruction];
        const error = template.validate(instructionValue);
        
        if (error) {
          setValidationErrors({ [selectedInstruction]: error });
          setTimeout(() => setValidationErrors({}), 3000);
          return;
        }

        const newInstruction = {
          id: Date.now().toString(),
          type: selectedInstruction,
          value: instructionValue,
          description: instructionDesc || template.description
        };
        
        setInstructions([...instructions, newInstruction]);
        setInstructionValue('');
        setInstructionDesc('');
      };

      const removeInstruction = (id) => {
        if (instructions.length <= 1) {
          alert('Dockerfile должен содержать хотя бы одну инструкцию');
          return;
        }
        setInstructions(instructions.filter(i => i.id !== id));
      };

      const moveInstruction = (id, direction) => {
        const index = instructions.findIndex(i => i.id === id);
        if ((direction === 'up' && index === 0) || (direction === 'down' && index === instructions.length - 1)) return;
        
        const newInstructions = [...instructions];
        const swapIndex = direction === 'up' ? index - 1 : index + 1;
        [newInstructions[index], newInstructions[swapIndex]] = [newInstructions[swapIndex], newInstructions[index]];
        setInstructions(newInstructions);
      };

      const generateDockerfile = () => {
        return instructions.map(inst => {
          let line = `${inst.type} ${inst.value}`;
          if (inst.description && inst.description !== instructionTemplates[inst.type]?.description) {
            line += ` # ${inst.description}`;
          }
          return line;
        }).join('\n');
      };

      const buildImage = async () => {
        setIsBuilding(true);
        setBuildLogs([]);
        
        const steps = [
          { message: 'Docker build started...', duration: 500 },
          { message: '✓ Context loaded', duration: 300 },
          { message: '✓ Dockerfile parsed successfully', duration: 400 }
        ];
        
        for (let i = 0; i < instructions.length; i++) {
          const inst = instructions[i];
          await new Promise(resolve => setTimeout(resolve, 600));
          steps.push({ message: `▶ Step ${i + 1}/${instructions.length} : ${inst.type} ${inst.value}`, duration: 0 });
          
          if (inst.type === 'RUN') {
            await new Promise(resolve => setTimeout(resolve, 800));
            steps.push({ message: `  → Executing: ${inst.value}`, duration: 0 });
            steps.push({ message: `  → ✓ Command completed`, duration: 0 });
          }
          
          if (inst.type === 'COPY') {
            await new Promise(resolve => setTimeout(resolve, 400));
            steps.push({ message: `  → Copying files...`, duration: 0 });
          }
        }
        
        await new Promise(resolve => setTimeout(resolve, 1000));
        steps.push(
          { message: '✓ Successfully built image', duration: 0 },
          { message: `Image ID: sha256:${Math.random().toString(36).substring(2, 15)}`, duration: 0 }
        );
        
        for (const step of steps) {
          if (step.duration) await new Promise(resolve => setTimeout(resolve, step.duration));
          setBuildLogs(prev => [...prev, step.message]);
        }
        
        setIsBuilding(false);
      };

      const loadExample = (example) => {
        const examples = {
          node: [
            { type: 'FROM', value: 'node:18-alpine', description: 'Базовый образ' },
            { type: 'WORKDIR', value: '/app', description: 'Рабочая директория' },
            { type: 'COPY', value: 'package*.json ./', description: 'Копируем package.json' },
            { type: 'RUN', value: 'npm ci --only=production', description: 'Установка зависимостей' },
            { type: 'COPY', value: '. .', description: 'Копируем исходники' },
            { type: 'ENV', value: 'NODE_ENV=production', description: 'Переменные окружения' },
            { type: 'EXPOSE', value: '3000', description: 'Порт приложения' },
            { type: 'CMD', value: '["node", "server.js"]', description: 'Запуск' }
          ],
          python: [
            { type: 'FROM', value: 'python:3.11-slim', description: 'Базовый образ' },
            { type: 'WORKDIR', value: '/app', description: 'Рабочая директория' },
            { type: 'COPY', value: 'requirements.txt .', description: 'Копируем зависимости' },
            { type: 'RUN', value: 'pip install -r requirements.txt', description: 'Установка пакетов' },
            { type: 'COPY', value: '. .', description: 'Копируем код' },
            { type: 'EXPOSE', value: '8000', description: 'Порт приложения' },
            { type: 'CMD', value: '["python", "app.py"]', description: 'Запуск' }
          ],
          nginx: [
            { type: 'FROM', value: 'nginx:alpine', description: 'Базовый образ' },
            { type: 'COPY', value: './html /usr/share/nginx/html', description: 'Копируем статику' },
            { type: 'EXPOSE', value: '80', description: 'HTTP порт' },
            { type: 'CMD', value: '["nginx", "-g", "daemon off;"]', description: 'Запуск' }
          ]
        };
        
        setInstructions(examples[example].map((inst, idx) => ({
          id: Date.now().toString() + idx,
          ...inst
        })));
      };

      const getInstructionColor = (type) => {
        const colors = {
          FROM: '#2196f3', WORKDIR: '#4caf50', COPY: '#ff9800',
          RUN: '#f44336', EXPOSE: '#9c27b0', ENV: '#00bcd4',
          CMD: '#e91e63', ARG: '#795548', LABEL: '#607d8b',
          USER: '#8bc34a', HEALTHCHECK: '#ff5722', ENTRYPOINT: '#673ab7', VOLUME: '#009688'
        };
        return colors[type] || '#757575';
      };

      const handleExport = () => {
        const blob = new Blob([generateDockerfile()], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'Dockerfile';
        a.click();
        URL.revokeObjectURL(url);
      };

      return (
        <>
          <style>{`
            @keyframes slideIn {
              from { opacity: 0; transform: translateY(-5px); }
              to { opacity: 1; transform: translateY(0); }
            }
            .instruction-item { animation: slideIn 0.3s ease-out; }
            .build-log { animation: slideIn 0.1s ease-out; }
            button { touch-action: manipulation; }
            
            /* Адаптивность через CSS */
            @media (max-width: 768px) {
              .toolbar-grid {
                grid-template-columns: 1fr !important;
                gap: 8px !important;
              }
              .input-row {
                flex-direction: column !important;
                gap: 8px !important;
              }
              .action-buttons-mobile {
                justify-content: center !important;
                margin-top: 8px;
              }
              .preview-section, .logs-section {
                width: 100% !important;
                margin-bottom: 20px !important;
              }
              h1 { font-size: 1.5rem !important; }
              h2 { font-size: 1.25rem !important; }
              pre { font-size: 12px !important; }
            }
          `}</style>

          <div style={styles.container}>
            {/* Header */}
            <header style={styles.header}>
              <h1 style={{ margin: 0, fontSize: '28px' }}>Dockerfile Constructor</h1>
              <p style={{ margin: '8px 0 0', opacity: 0.9, fontSize: '14px' }}>Интерактивный конструктор Dockerfile</p>
            </header>

            {/* Toolbar */}
            <div style={styles.toolbar}>
              <button onClick={() => loadExample('node')} style={{...styles.button, backgroundColor: '#4caf50'}}>Node.js</button>
              <button onClick={() => loadExample('python')} style={{...styles.button, backgroundColor: '#2196f3'}}>Python</button>
              <button onClick={() => loadExample('nginx')} style={{...styles.button, backgroundColor: '#ff9800'}}>Nginx</button>
              <button onClick={() => setShowPreview(!showPreview)} style={{...styles.button, backgroundColor: '#795548'}}>
                {showPreview ? 'Hide Preview' : 'Show Preview'}
              </button>
            </div>

            {/* Конструктор инструкций */}
            <div style={styles.card}>
              <h2 style={{ marginTop: 0, fontSize: '20px' }}>📝 Добавить инструкцию</h2>
              
              <div className="input-row" style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '15px' }}>
                <select
                  value={selectedInstruction}
                  onChange={(e) => setSelectedInstruction(e.target.value)}
                  style={{ ...styles.select, width: '100%' }}
                >
                  {Object.keys(instructionTemplates).map(key => (
                    <option key={key} value={key}>{key}</option>
                  ))}
                </select>
                
                <input
                  type="text"
                  value={instructionValue}
                  onChange={(e) => setInstructionValue(e.target.value)}
                  placeholder={instructionTemplates[selectedInstruction].example}
                  style={styles.input}
                />
                
                <input
                  type="text"
                  value={instructionDesc}
                  onChange={(e) => setInstructionDesc(e.target.value)}
                  placeholder="Описание (опционально)"
                  style={styles.input}
                />
                
                <button onClick={addInstruction} style={{ ...styles.button, backgroundColor: '#4caf50', width: '100%' }}>
                  ➕ Добавить
                </button>
              </div>
              
              {validationErrors[selectedInstruction] && (
                <div style={{ color: '#f44336', fontSize: '14px', marginBottom: '15px' }}>
                  ⚠️ {validationErrors[selectedInstruction]}
                </div>
              )}
              
              <div style={{ 
                fontSize: '14px', 
                padding: '12px', 
                backgroundColor: '#f0f7ff', 
                borderRadius: '6px', 
                marginBottom: '15px',
                borderLeft: `4px solid ${getInstructionColor(selectedInstruction)}`
              }}>
                <strong>{selectedInstruction}</strong>: {instructionTemplates[selectedInstruction].description}
              </div>

              {/* Список инструкций */}
              <div style={{ maxHeight: '500px', overflowY: 'auto' }}>
                <h3 style={{ fontSize: '16px', marginBottom: '10px' }}>📋 Инструкции ({instructions.length})</h3>
                {instructions.map((inst) => (
                  <div key={inst.id} className="instruction-item" style={{ borderLeftColor: getInstructionColor(inst.type) }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                      <div style={{ flex: 1 }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '5px', flexWrap: 'wrap' }}>
                          <strong style={{ color: getInstructionColor(inst.type), fontSize: '14px' }}>{inst.type}</strong>
                          <code style={{ backgroundColor: '#f0f0f0', padding: '2px 6px', borderRadius: '3px', fontSize: '12px', fontFamily: 'monospace' }}>
                            {inst.value}
                          </code>
                        </div>
                        {inst.description && (
                          <div style={{ fontSize: '12px', color: '#666' }}>💡 {inst.description}</div>
                        )}
                      </div>
                    </div>
                    
                    <div style={{ marginTop: '8px' }}>
                      <input
                        type="text"
                        value={inst.value}
                        onChange={(e) => setInstructions(instructions.map(i => i.id === inst.id ? { ...i, value: e.target.value } : i))}
                        style={{ ...styles.input, fontSize: '12px' }}
                      />
                    </div>

                    <div className="action-buttons-mobile" style={styles.actionButtons}>
                      <button onClick={() => moveInstruction(inst.id, 'up')} style={{...styles.button, padding: '4px 8px', fontSize: '12px', backgroundColor: '#e0e0e0', color: '#333'}}>↑</button>
                      <button onClick={() => moveInstruction(inst.id, 'down')} style={{...styles.button, padding: '4px 8px', fontSize: '12px', backgroundColor: '#e0e0e0', color: '#333'}}>↓</button>
                      <button onClick={() => removeInstruction(inst.id)} style={{...styles.button, padding: '4px 8px', fontSize: '12px', backgroundColor: '#f44336', color: 'white'}}>✖</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Preview & Logs - адаптивная сетка */}
            {showPreview && (
              <div className="preview-section">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                  <h2 style={{ margin: 0, fontSize: '20px', color: '#d4d4d4' }}>📄 Dockerfile Preview</h2>
                  <button onClick={handleExport} style={{...styles.button, backgroundColor: '#607d8b', fontSize: '14px'}}>
                    Export
                  </button>
                </div>
                <pre style={styles.codeBlock}>
                  {generateDockerfile()}
                </pre>
                <button 
                  onClick={buildImage} 
                  disabled={isBuilding} 
                  style={{ ...styles.button, backgroundColor: '#4caf50', width: '100%', marginTop: '10px' }}
                >
                  Build Image {isBuilding && '...'}
                </button>
              </div>
            )}

            <div className="logs-section">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                <h2 style={{ margin: 0, fontSize: '20px', color: '#d4d4d4' }}>📋 Build Logs</h2>
                <button onClick={() => setBuildLogs([])} style={{...styles.button, backgroundColor: '#607d8b', fontSize: '14px'}}>Clear</button>
              </div>
              <div style={styles.logBlock}>
                {buildLogs.length === 0 && (
                  <div style={{ color: '#858585', textAlign: 'center', paddingTop: '100px' }}>
                    Нажмите "Build Image" для сборки
                  </div>
                )}
                {buildLogs.map((log, idx) => (
                  <div key={idx} className="build-log" style={{ marginBottom: '4px' }}>
                    {log}
                  </div>
                ))}
              </div>
            </div>

            {/* Справочник (виден всегда, но адаптирован) */}
            <div style={{ ...styles.card, marginTop: '20px' }}>
              <h2 style={{ marginTop: 0, fontSize: '18px' }}>Справочник инструкций</h2>
              <div style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', 
                gap: '12px', 
                fontSize: '13px' 
              }}>
                {Object.entries(instructionTemplates).slice(0, 8).map(([key, template]) => (
                  <div key={key} style={{ padding: '10px', borderLeft: `3px solid ${getInstructionColor(key)}`, backgroundColor: '#fff' }}>
                    <strong style={{ color: getInstructionColor(key), fontSize: '14px' }}>{key}</strong>
                    <div style={{ fontSize: '11px', color: '#666', marginTop: '3px' }}>{template.description}</div>
                    <code style={{ display: 'block', marginTop: '3px', fontSize: '10px', backgroundColor: '#f5f5f5', padding: '2px 4px', borderRadius: '3px' }}>
                      {template.example}
                    </code>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </>
      );
    }}
  </BrowserOnly>
);

export default DockerfileBuilder;