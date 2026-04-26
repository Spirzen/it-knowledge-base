import React, { useState, useEffect } from 'react';
import BrowserOnly from './BrowserOnly';

const DockerEmulator = () => {
  const [images, setImages] = useState([
    { 
      id: 'sha256:a1b2c3d4e5f6', 
      repository: 'ubuntu', 
      tag: 'latest', 
      size: '72.8MB',
      created: '2 weeks ago',
      layers: 4
    },
    { 
      id: 'sha256:f6e5d4c3b2a1', 
      repository: 'node', 
      tag: '18-alpine', 
      size: '178MB',
      created: '5 days ago',
      layers: 6
    },
    { 
      id: 'sha256:123456789abc', 
      repository: 'nginx', 
      tag: '1.25', 
      size: '187MB',
      created: '3 days ago',
      layers: 5
    }
  ]);

  const [containers, setContainers] = useState([
    {
      id: 'abc123def456',
      name: 'web-app-1',
      image: 'nginx:1.25',
      status: 'running',
      ports: '0.0.0.0:8080->80/tcp',
      created: '2 hours ago',
      command: 'nginx -g "daemon off;"'
    },
    {
      id: 'def456ghi789',
      name: 'api-server',
      image: 'node:18-alpine',
      status: 'exited',
      ports: '0.0.0.0:3000->3000/tcp',
      created: '1 day ago',
      command: 'npm start'
    }
  ]);

  const [logs, setLogs] = useState([
    { time: new Date().toLocaleTimeString(), command: 'system', message: '🐳 Docker Emulator готов к работе', type: 'info' }
  ]);

  const [currentCommand, setCurrentCommand] = useState('');
  const [buildContext, setBuildContext] = useState('');
  const [selectedImage, setSelectedImage] = useState('');
  const [pullImageName, setPullImageName] = useState('');
  const [pushImageName, setPushImageName] = useState('');
  const [newContainerName, setNewContainerName] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const addLog = (message, type = 'info', command = '') => {
    setLogs(prev => [...prev, {
      time: new Date().toLocaleTimeString(),
      command: command || 'cli',
      message,
      type
    }]);
  };

  const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

  const dockerPull = async () => {
    if (!pullImageName) {
      addLog('❌ Ошибка: укажите имя образа для pull', 'error', 'pull');
      return;
    }

    setIsLoading(true);
    addLog(`🔍 Pulling ${pullImageName}...`, 'info', 'pull');
    
    await sleep(1500);
    
    const [repo, tag = 'latest'] = pullImageName.split(':');
    const newImage = {
      id: `sha256:${Math.random().toString(36).substring(2, 15)}`,
      repository: repo,
      tag: tag,
      size: `${Math.floor(Math.random() * 500 + 50)}MB`,
      created: 'just now',
      layers: Math.floor(Math.random() * 10 + 3)
    };
    
    setImages(prev => [...prev, newImage]);
    addLog(`✅ Successfully pulled ${pullImageName}`, 'success', 'pull');
    addLog(`   Digest: ${newImage.id}`, 'info', 'pull');
    addLog(`   Status: Downloaded newer image for ${pullImageName}`, 'info', 'pull');
    setPullImageName('');
    setIsLoading(false);
  };

  const dockerBuild = async () => {
    if (!buildContext) {
      addLog('❌ Ошибка: укажите путь к Dockerfile или контекст сборки', 'error', 'build');
      return;
    }

    setIsLoading(true);
    addLog(`🏗️ Building Docker image from ${buildContext}...`, 'info', 'build');
    await sleep(2000);
    
    const steps = [
      "Step 1/5 : FROM alpine:latest",
      "Step 2/5 : RUN apk add --no-cache nodejs npm",
      "Step 3/5 : WORKDIR /app",
      "Step 4/5 : COPY . .",
      "Step 5/5 : CMD [\"node\", \"index.js\"]"
    ];
    
    steps.forEach(step => addLog(step, 'info', 'build'));
    await sleep(1000);
    
    const newImage = {
      id: `sha256:${Math.random().toString(36).substring(2, 15)}`,
      repository: `custom-app`,
      tag: 'latest',
      size: `${Math.floor(Math.random() * 300 + 100)}MB`,
      created: 'just now',
      layers: 5
    };
    
    setImages(prev => [...prev, newImage]);
    addLog(`✅ Successfully built ${newImage.repository}:${newImage.tag}`, 'success', 'build');
    addLog(`   Image ID: ${newImage.id}`, 'info', 'build');
    setBuildContext('');
    setIsLoading(false);
  };

  const dockerRun = async () => {
    if (!selectedImage || !newContainerName) {
      addLog('❌ Ошибка: укажите образ и имя контейнера', 'error', 'run');
      return;
    }

    const imageExists = images.find(img => `${img.repository}:${img.tag}` === selectedImage);
    if (!imageExists) {
      addLog(`❌ Ошибка: образ ${selectedImage} не найден`, 'error', 'run');
      return;
    }

    setIsLoading(true);
    addLog(`🚀 Creating and starting container ${newContainerName}...`, 'info', 'run');
    await sleep(1500);
    
    const newContainer = {
      id: Math.random().toString(36).substring(2, 12),
      name: newContainerName,
      image: selectedImage,
      status: 'running',
      ports: `0.0.0.0:${Math.floor(Math.random() * 9000 + 1000)}->${Math.floor(Math.random() * 9000 + 1000)}/tcp`,
      created: 'just now',
      command: imageExists.repository === 'node' ? 'npm start' : 
               imageExists.repository === 'nginx' ? 'nginx -g "daemon off;"' :
               '/bin/sh -c "while true; do echo running; sleep 10; done"'
    };
    
    setContainers(prev => [...prev, newContainer]);
    addLog(`✅ Container ${newContainerName} created and started`, 'success', 'run');
    addLog(`   Container ID: ${newContainer.id}`, 'info', 'run');
    addLog(`   Port mapping: ${newContainer.ports}`, 'info', 'run');
    setSelectedImage('');
    setNewContainerName('');
    setIsLoading(false);
  };

  const dockerPush = async () => {
    if (!pushImageName) {
      addLog('❌ Ошибка: укажите имя образа для push', 'error', 'push');
      return;
    }

    const imageExists = images.find(img => `${img.repository}:${img.tag}` === pushImageName);
    if (!imageExists) {
      addLog(`❌ Ошибка: образ ${pushImageName} не найден локально`, 'error', 'push');
      return;
    }

    setIsLoading(true);
    addLog(`Pushing ${pushImageName} to registry...`, 'info', 'push');
    await sleep(2000);
    
    addLog(`   Preparing to push`, 'info', 'push');
    await sleep(500);
    addLog(`   Layer 1: Pushing [=====>] 24.5MB/24.5MB`, 'info', 'push');
    await sleep(500);
    addLog(`   Layer 2: Pushing [=====>] 12.3MB/12.3MB`, 'info', 'push');
    await sleep(500);
    addLog(`   Layer 3: Pushing [=====>] 8.7MB/8.7MB`, 'info', 'push');
    
    addLog(`✅ Successfully pushed ${pushImageName} to registry`, 'success', 'push');
    addLog(`   Digest: sha256:${Math.random().toString(36).substring(2, 15)}`, 'info', 'push');
    setPushImageName('');
    setIsLoading(false);
  };

  const dockerStop = (containerId) => {
    setContainers(prev => prev.map(c => 
      c.id === containerId ? { ...c, status: 'exited' } : c
    ));
    addLog(`🛑 Stopped container ${containerId}`, 'warning', 'stop');
  };

  const dockerStart = (containerId) => {
    setContainers(prev => prev.map(c => 
      c.id === containerId ? { ...c, status: 'running' } : c
    ));
    addLog(`▶️ Started container ${containerId}`, 'success', 'start');
  };

  const dockerRm = (containerId) => {
    const container = containers.find(c => c.id === containerId);
    if (container.status === 'running') {
      addLog(`❌ Cannot remove running container ${containerId}. Stop it first.`, 'error', 'rm');
      return;
    }
    setContainers(prev => prev.filter(c => c.id !== containerId));
    addLog(`Removed container ${containerId}`, 'success', 'rm');
  };

  const dockerRmi = (imageId) => {
    const image = images.find(i => i.id === imageId);
    const isUsed = containers.some(c => c.image === `${image.repository}:${image.tag}`);
    
    if (isUsed) {
      addLog(`❌ Cannot remove ${image.repository}:${image.tag} (used by containers)`, 'error', 'rmi');
      return;
    }
    
    setImages(prev => prev.filter(i => i.id !== imageId));
    addLog(`Removed image ${image.repository}:${image.tag}`, 'success', 'rmi');
  };

  const dockerPs = () => {
    const running = containers.filter(c => c.status === 'running');
    addLog(`Listing running containers (${running.length} total):`, 'info', 'ps');
    running.forEach(c => {
      addLog(`   ${c.id.substring(0,12)}  ${c.name}  ${c.image}  ${c.status}  ${c.ports}`, 'info', 'ps');
    });
  };

  const dockerImages = () => {
    addLog(`Listing local images (${images.length} total):`, 'info', 'images');
    images.forEach(i => {
      addLog(`   ${i.repository}:${i.tag}  ${i.id.substring(0,12)}  ${i.size}  ${i.created}`, 'info', 'images');
    });
  };

  const clearLogs = () => {
    setLogs([{ time: new Date().toLocaleTimeString(), command: 'system', message: 'Logs cleared', type: 'info' }]);
  };

  const executeCommand = (command) => {
    const cmd = command.toLowerCase().trim();
    
    if (cmd === 'docker ps') dockerPs();
    else if (cmd === 'docker images') dockerImages();
    else if (cmd === 'clear') clearLogs();
    else if (cmd === 'help') showHelp();
    else addLog(`❌ Unknown command: ${command}. Type 'help' for available commands`, 'error', 'unknown');
    
    setCurrentCommand('');
  };

  const showHelp = () => {
    addLog('Доступные Docker команды:', 'info', 'help');
    addLog('   docker ps          - показать запущенные контейнеры', 'info', 'help');
    addLog('   docker images      - показать локальные образы', 'info', 'help');
    addLog('   clear              - очистить лог', 'info', 'help');
    addLog('💡 Используйте формы выше для pull, build, run, push', 'info', 'help');
  };

  return (
    <BrowserOnly>
      {() => (
        <div style={{
          fontFamily: 'system-ui, -apple-system, "Segoe UI", monospace',
          maxWidth: '1400px',
          margin: '0 auto',
          padding: 'clamp(10px, 3vw, 20px)',
          backgroundColor: '#1e1e1e',
          borderRadius: '12px',
          color: '#d4d4d4',
          minHeight: '100vh'
        }}>
          <style>{`
            @keyframes blink {
              0%, 50% { opacity: 1; }
              51%, 100% { opacity: 0; }
            }
            .cursor-blink {
              animation: blink 1s step-end infinite;
            }
            .log-enter {
              animation: slideIn 0.2s ease-out;
            }
            @keyframes slideIn {
              from {
                opacity: 0;
                transform: translateX(-20px);
              }
              to {
                opacity: 1;
                transform: translateX(0);
              }
            }
            button:active {
              transform: scale(0.98);
            }
            
            @media (max-width: 768px) {
              .command-panel {
                grid-template-columns: 1fr !important;
              }
              .containers-grid {
                grid-template-columns: 1fr !important;
              }
              .image-item, .container-item {
                flex-direction: column;
                align-items: flex-start !important;
              }
              .action-buttons {
                margin-top: 10px;
                width: 100%;
                justify-content: flex-start !important;
              }
              .table-header {
                display: none !important;
              }
              .card-view {
                display: block !important;
              }
            }
            
            @media (max-width: 480px) {
              .command-input-group {
                flex-direction: column;
              }
              .command-input-group input,
              .command-input-group select,
              .command-input-group button {
                width: 100%;
                margin-bottom: 8px;
              }
              button {
                width: 100%;
              }
              .terminal-input {
                font-size: 10px;
              }
            }
            
            ::-webkit-scrollbar {
              width: 8px;
              height: 8px;
            }
            
            ::-webkit-scrollbar-track {
              background: #252526;
              border-radius: 4px;
            }
            
            ::-webkit-scrollbar-thumb {
              background: #0e639c;
              border-radius: 4px;
            }
            
            ::-webkit-scrollbar-thumb:hover {
              background: #1177bb;
            }
            
            .card-view {
              display: none;
            }
            
            @media (max-width: 768px) {
              .card-view {
                display: block;
              }
              .table-view {
                display: none;
              }
            }
          `}</style>

          <div style={{
            borderBottom: '2px solid #0e639c',
            paddingBottom: 'clamp(10px, 2vw, 15px)',
            marginBottom: 'clamp(15px, 3vw, 20px)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '10px'
          }}>
            <div>
              <h1 style={{ 
                margin: 0, 
                color: '#0e639c', 
                fontSize: 'clamp(20px, 5vw, 28px)' 
              }}>
                Docker Emulator CLI
              </h1>
              <p style={{ 
                margin: '5px 0 0', 
                color: '#858585', 
                fontSize: 'clamp(11px, 3vw, 14px)' 
              }}>
                Интерактивный эмулятор Docker командной строки
              </p>
            </div>
            
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              style={{
                display: 'none',
                padding: '10px',
                backgroundColor: '#0e639c',
                border: 'none',
                borderRadius: '4px',
                color: 'white',
                cursor: 'pointer',
                '@media (max-width: 768px)': {
                  display: 'block'
                }
              }}
              className="mobile-menu-toggle"
            >
              {isMobileMenuOpen ? '✕' : '☰'} Меню
            </button>
          </div>

          <div className="command-panel" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 'clamp(10px, 2vw, 15px)',
            marginBottom: 'clamp(15px, 3vw, 20px)'
          }}>
            <div style={{
              backgroundColor: '#252526',
              padding: 'clamp(10px, 2vw, 15px)',
              borderRadius: '8px',
              borderLeft: `3px solid ${isLoading ? '#ff9800' : '#4caf50'}`
            }}>
              <h3 style={{ margin: '0 0 10px 0', fontSize: 'clamp(14px, 3vw, 16px)' }}>docker pull</h3>
              <div className="command-input-group" style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                <input
                  type="text"
                  value={pullImageName}
                  onChange={(e) => setPullImageName(e.target.value)}
                  placeholder="ubuntu:22.04"
                  disabled={isLoading}
                  style={{
                    flex: 1,
                    minWidth: '150px',
                    padding: 'clamp(6px, 2vw, 8px)',
                    backgroundColor: '#3c3c3c',
                    border: '1px solid #0e639c',
                    borderRadius: '4px',
                    color: '#d4d4d4',
                    fontFamily: 'monospace',
                    fontSize: 'clamp(11px, 2.5vw, 13px)'
                  }}
                />
                <button
                  onClick={dockerPull}
                  disabled={isLoading}
                  style={{
                    padding: 'clamp(6px, 2vw, 8px) clamp(12px, 3vw, 16px)',
                    backgroundColor: '#0e639c',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: isLoading ? 'not-allowed' : 'pointer',
                    opacity: isLoading ? 0.6 : 1,
                    fontSize: 'clamp(12px, 2.5vw, 14px)'
                  }}
                >
                  Pull
                </button>
              </div>
            </div>

            <div style={{
              backgroundColor: '#252526',
              padding: 'clamp(10px, 2vw, 15px)',
              borderRadius: '8px',
              borderLeft: '3px solid #2196f3'
            }}>
              <h3 style={{ margin: '0 0 10px 0', fontSize: 'clamp(14px, 3vw, 16px)' }}>docker build</h3>
              <div className="command-input-group" style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                <input
                  type="text"
                  value={buildContext}
                  onChange={(e) => setBuildContext(e.target.value)}
                  placeholder="./path/to/Dockerfile"
                  disabled={isLoading}
                  style={{
                    flex: 1,
                    minWidth: '150px',
                    padding: 'clamp(6px, 2vw, 8px)',
                    backgroundColor: '#3c3c3c',
                    border: '1px solid #2196f3',
                    borderRadius: '4px',
                    color: '#d4d4d4',
                    fontFamily: 'monospace',
                    fontSize: 'clamp(11px, 2.5vw, 13px)'
                  }}
                />
                <button
                  onClick={dockerBuild}
                  disabled={isLoading}
                  style={{
                    padding: 'clamp(6px, 2vw, 8px) clamp(12px, 3vw, 16px)',
                    backgroundColor: '#2196f3',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: isLoading ? 'not-allowed' : 'pointer',
                    fontSize: 'clamp(12px, 2.5vw, 14px)'
                  }}
                >
                  Build
                </button>
              </div>
            </div>

            <div style={{
              backgroundColor: '#252526',
              padding: 'clamp(10px, 2vw, 15px)',
              borderRadius: '8px',
              borderLeft: '3px solid #ff9800'
            }}>
              <h3 style={{ margin: '0 0 10px 0', fontSize: 'clamp(14px, 3vw, 16px)' }}>docker run</h3>
              <div style={{ display: 'flex', gap: '8px', flexDirection: 'column' }}>
                <select
                  value={selectedImage}
                  onChange={(e) => setSelectedImage(e.target.value)}
                  disabled={isLoading}
                  style={{
                    padding: 'clamp(6px, 2vw, 8px)',
                    backgroundColor: '#3c3c3c',
                    border: '1px solid #ff9800',
                    borderRadius: '4px',
                    color: '#d4d4d4',
                    fontSize: 'clamp(11px, 2.5vw, 13px)'
                  }}
                >
                  <option value="">Выберите образ</option>
                  {images.map(img => (
                    <option key={img.id} value={`${img.repository}:${img.tag}`}>
                      {img.repository}:{img.tag}
                    </option>
                  ))}
                </select>
                <input
                  type="text"
                  value={newContainerName}
                  onChange={(e) => setNewContainerName(e.target.value)}
                  placeholder="container-name"
                  disabled={isLoading}
                  style={{
                    padding: 'clamp(6px, 2vw, 8px)',
                    backgroundColor: '#3c3c3c',
                    border: '1px solid #ff9800',
                    borderRadius: '4px',
                    color: '#d4d4d4',
                    fontSize: 'clamp(11px, 2.5vw, 13px)'
                  }}
                />
                <button
                  onClick={dockerRun}
                  disabled={isLoading || !selectedImage || !newContainerName}
                  style={{
                    padding: 'clamp(6px, 2vw, 8px) clamp(12px, 3vw, 16px)',
                    backgroundColor: '#ff9800',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: (isLoading || !selectedImage || !newContainerName) ? 'not-allowed' : 'pointer',
                    fontSize: 'clamp(12px, 2.5vw, 14px)'
                  }}
                >
                  Run
                </button>
              </div>
            </div>

            <div style={{
              backgroundColor: '#252526',
              padding: 'clamp(10px, 2vw, 15px)',
              borderRadius: '8px',
              borderLeft: '3px solid #9c27b0'
            }}>
              <h3 style={{ margin: '0 0 10px 0', fontSize: 'clamp(14px, 3vw, 16px)' }}>docker push</h3>
              <div className="command-input-group" style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                <input
                  type="text"
                  value={pushImageName}
                  onChange={(e) => setPushImageName(e.target.value)}
                  placeholder="username/repo:tag"
                  disabled={isLoading}
                  style={{
                    flex: 1,
                    minWidth: '150px',
                    padding: 'clamp(6px, 2vw, 8px)',
                    backgroundColor: '#3c3c3c',
                    border: '1px solid #9c27b0',
                    borderRadius: '4px',
                    color: '#d4d4d4',
                    fontSize: 'clamp(11px, 2.5vw, 13px)'
                  }}
                />
                <button
                  onClick={dockerPush}
                  disabled={isLoading}
                  style={{
                    padding: 'clamp(6px, 2vw, 8px) clamp(12px, 3vw, 16px)',
                    backgroundColor: '#9c27b0',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: isLoading ? 'not-allowed' : 'pointer',
                    fontSize: 'clamp(12px, 2.5vw, 14px)'
                  }}
                >
                  Push
                </button>
              </div>
            </div>
          </div>

          <div className="containers-grid" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 'clamp(15px, 3vw, 20px)',
            marginBottom: 'clamp(15px, 3vw, 20px)'
          }}>
            <div style={{
              backgroundColor: '#252526',
              borderRadius: '8px',
              padding: 'clamp(10px, 2vw, 15px)'
            }}>
              <h3 style={{ 
                margin: '0 0 10px 0', 
                fontSize: 'clamp(14px, 3vw, 16px)',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '10px'
              }}>
                <span>Local Images ({images.length})</span>
                <button
                  onClick={dockerImages}
                  style={{
                    padding: '4px 8px',
                    fontSize: 'clamp(10px, 2vw, 11px)',
                    backgroundColor: '#0e639c',
                    border: 'none',
                    borderRadius: '4px',
                    color: 'white',
                    cursor: 'pointer'
                  }}
                >
                  docker images
                </button>
              </h3>
              
              <div className="table-view" style={{ maxHeight: '400px', overflowY: 'auto', fontSize: 'clamp(10px, 2.5vw, 12px)' }}>
                <div style={{ 
                  display: 'grid', 
                  gridTemplateColumns: 'minmax(120px, 3fr) minmax(80px, 2fr) minmax(60px, 1fr) minmax(60px, 1fr)', 
                  gap: '8px', 
                  padding: '8px 0', 
                  borderBottom: '1px solid #3c3c3c', 
                  fontWeight: 'bold' 
                }}>
                  <span>REPOSITORY:TAG</span>
                  <span>IMAGE ID</span>
                  <span>SIZE</span>
                  <span>ACTIONS</span>
                </div>
                {images.map(img => (
                  <div key={img.id} style={{ 
                    display: 'grid', 
                    gridTemplateColumns: 'minmax(120px, 3fr) minmax(80px, 2fr) minmax(60px, 1fr) minmax(60px, 1fr)', 
                    gap: '8px', 
                    padding: '8px 0', 
                    borderBottom: '1px solid #3c3c3c',
                    alignItems: 'center'
                  }}>
                    <span style={{ wordBreak: 'break-word' }}>{img.repository}:{img.tag}</span>
                    <span style={{ fontFamily: 'monospace', fontSize: 'clamp(9px, 2vw, 11px)', wordBreak: 'break-word' }}>{img.id.substring(0, 12)}</span>
                    <span>{img.size}</span>
                    <button
                      onClick={() => dockerRmi(img.id)}
                      style={{
                        padding: '4px 8px',
                        fontSize: 'clamp(10px, 2vw, 11px)',
                        backgroundColor: '#f44336',
                        border: 'none',
                        borderRadius: '4px',
                        color: 'white',
                        cursor: 'pointer',
                        width: 'fit-content'
                      }}
                    >
                      rmi
                    </button>
                  </div>
                ))}
              </div>
              
              <div className="card-view" style={{ maxHeight: '400px', overflowY: 'auto' }}>
                {images.map(img => (
                  <div key={img.id} style={{
                    backgroundColor: '#2d2d2d',
                    padding: '10px',
                    marginBottom: '8px',
                    borderRadius: '6px',
                    borderLeft: '3px solid #4caf50'
                  }}>
                    <div style={{ fontWeight: 'bold', marginBottom: '5px' }}>
                      {img.repository}:{img.tag}
                    </div>
                    <div style={{ fontSize: '11px', color: '#858585', marginBottom: '5px' }}>
                      ID: {img.id.substring(0, 12)} | Size: {img.size}
                    </div>
                    <button
                      onClick={() => dockerRmi(img.id)}
                      style={{
                        padding: '4px 12px',
                        fontSize: '11px',
                        backgroundColor: '#f44336',
                        border: 'none',
                        borderRadius: '4px',
                        color: 'white',
                        cursor: 'pointer',
                        width: '100%'
                      }}
                    >
                      Remove Image
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <div style={{
              backgroundColor: '#252526',
              borderRadius: '8px',
              padding: 'clamp(10px, 2vw, 15px)'
            }}>
              <h3 style={{ 
                margin: '0 0 10px 0', 
                fontSize: 'clamp(14px, 3vw, 16px)',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '10px'
              }}>
                <span>Containers ({containers.length})</span>
                <button
                  onClick={dockerPs}
                  style={{
                    padding: '4px 8px',
                    fontSize: 'clamp(10px, 2vw, 11px)',
                    backgroundColor: '#0e639c',
                    border: 'none',
                    borderRadius: '4px',
                    color: 'white',
                    cursor: 'pointer'
                  }}
                >
                  docker ps
                </button>
              </h3>
              <div style={{ maxHeight: '400px', overflowY: 'auto' }}>
                {containers.map(c => (
                  <div key={c.id} style={{
                    borderLeft: `3px solid ${c.status === 'running' ? '#4caf50' : '#f44336'}`,
                    padding: 'clamp(8px, 2vw, 10px)',
                    marginBottom: '10px',
                    backgroundColor: '#2d2d2d',
                    borderRadius: '4px'
                  }}>
                    <div style={{ 
                      display: 'flex', 
                      justifyContent: 'space-between', 
                      alignItems: 'flex-start',
                      flexWrap: 'wrap',
                      gap: '10px'
                    }}>
                      <div style={{ flex: 1, minWidth: '150px' }}>
                        <strong style={{ fontSize: 'clamp(12px, 3vw, 14px)' }}>{c.name}</strong>
                        <span style={{ color: '#858585', fontSize: 'clamp(9px, 2vw, 10px)', marginLeft: '8px', display: 'inline-block' }}>
                          {c.id}
                        </span>
                        <div style={{ fontSize: 'clamp(10px, 2.5vw, 11px)', color: '#858585', marginTop: '4px' }}>
                          {c.image} | {c.ports}
                        </div>
                      </div>
                      <div className="action-buttons" style={{ display: 'flex', gap: '5px', flexWrap: 'wrap' }}>
                        {c.status === 'exited' && (
                          <button onClick={() => dockerStart(c.id)} style={{ 
                            padding: '4px 8px', 
                            fontSize: 'clamp(10px, 2vw, 11px)', 
                            backgroundColor: '#4caf50', 
                            border: 'none', 
                            borderRadius: '4px', 
                            color: 'white', 
                            cursor: 'pointer' 
                          }}>
                            start
                          </button>
                        )}
                        {c.status === 'running' && (
                          <button onClick={() => dockerStop(c.id)} style={{ 
                            padding: '4px 8px', 
                            fontSize: 'clamp(10px, 2vw, 11px)', 
                            backgroundColor: '#ff9800', 
                            border: 'none', 
                            borderRadius: '4px', 
                            color: 'white', 
                            cursor: 'pointer' 
                          }}>
                            stop
                          </button>
                        )}
                        <button onClick={() => dockerRm(c.id)} style={{ 
                          padding: '4px 8px', 
                          fontSize: 'clamp(10px, 2vw, 11px)', 
                          backgroundColor: '#f44336', 
                          border: 'none', 
                          borderRadius: '4px', 
                          color: 'white', 
                          cursor: 'pointer' 
                        }}>
                          rm
                        </button>
                      </div>
                    </div>
                    <div style={{ fontSize: 'clamp(9px, 2vw, 10px)', color: '#858585', marginTop: '8px' }}>
                      Status: {c.status} | Created: {c.created}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div style={{
            backgroundColor: '#1e1e1e',
            border: '1px solid #0e639c',
            borderRadius: '8px',
            overflow: 'hidden'
          }}>
            <div style={{
              backgroundColor: '#252526',
              padding: 'clamp(8px, 2vw, 10px)',
              borderBottom: '1px solid #0e639c',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '10px'
            }}>
              <span style={{ fontSize: 'clamp(12px, 3vw, 14px)', fontWeight: 'bold' }}>Terminal</span>
              <button onClick={clearLogs} style={{ 
                padding: '4px 12px', 
                fontSize: 'clamp(10px, 2vw, 11px)', 
                backgroundColor: '#0e639c', 
                border: 'none', 
                borderRadius: '4px', 
                color: 'white', 
                cursor: 'pointer' 
              }}>
                clear
              </button>
            </div>
            
            <div style={{
              height: 'clamp(250px, 40vh, 300px)',
              overflowY: 'auto',
              padding: 'clamp(8px, 2vw, 10px)',
              fontFamily: 'monospace',
              fontSize: 'clamp(10px, 2.5vw, 12px)',
              backgroundColor: '#1e1e1e'
            }}>
              {logs.map((log, idx) => (
                <div key={idx} className="log-enter" style={{
                  marginBottom: '4px',
                  color: log.type === 'error' ? '#f44336' : 
                         log.type === 'success' ? '#4caf50' : 
                         log.type === 'warning' ? '#ff9800' : '#d4d4d4',
                  wordBreak: 'break-word'
                }}>
                  <span style={{ color: '#858585' }}>[{log.time}]</span>
                  {log.command !== 'system' && <span style={{ color: '#0e639c' }}> [{log.command}]</span>}
                  <span> {log.message}</span>
                </div>
              ))}
              <div style={{ display: 'flex', alignItems: 'center', marginTop: '8px', flexWrap: 'wrap' }}>
                <span style={{ color: '#0e639c' }}>$ </span>
                <input
                  type="text"
                  value={currentCommand}
                  onChange={(e) => setCurrentCommand(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && executeCommand(currentCommand)}
                  placeholder="Введите Docker команду..."
                  className="terminal-input"
                  style={{
                    flex: 1,
                    minWidth: '150px',
                    backgroundColor: 'transparent',
                    border: 'none',
                    color: '#d4d4d4',
                    fontFamily: 'monospace',
                    fontSize: 'clamp(10px, 2.5vw, 12px)',
                    outline: 'none',
                    marginLeft: '5px'
                  }}
                />
                <span className="cursor-blink" style={{ width: '8px', height: '14px', backgroundColor: '#d4d4d4' }}></span>
              </div>
            </div>
          </div>

          {isLoading && (
            <div style={{
              position: 'fixed',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              backgroundColor: 'rgba(0,0,0,0.9)',
              padding: 'clamp(15px, 4vw, 20px)',
              borderRadius: '8px',
              color: 'white',
              zIndex: 1000,
              textAlign: 'center',
              minWidth: 'clamp(200px, 50vw, 300px)'
            }}>
              Выполнение Docker операции...
            </div>
          )}
        </div>
      )}
    </BrowserOnly>
  );
};

export default DockerEmulator;