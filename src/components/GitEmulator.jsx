import React, { useState, useEffect } from 'react';

const GitEmulator = () => {
  const [files, setFiles] = useState({
    'index.html': '<!DOCTYPE html>\n<html>\n  <head>\n    <title>My Project</title>\n  </head>\n  <body>\n    <h1>Hello World!</h1>\n  </body>\n</html>',
    'style.css': 'body {\n  font-family: Arial, sans-serif;\n  margin: 0;\n  padding: 20px;\n}\n\nh1 {\n  color: blue;\n}',
    'script.js': 'console.log("Hello from JavaScript!");\n\nfunction greet() {\n  alert("Welcome to my project!");\n}',
  });
  
  const [stagedFiles, setStagedFiles] = useState({});
  const [commits, setCommits] = useState([]);
  const [currentBranch, setCurrentBranch] = useState('main');
  const [branches, setBranches] = useState(['main']);
  const [selectedFile, setSelectedFile] = useState('index.html');
  const [commitMessage, setCommitMessage] = useState('');
  const [newBranchName, setNewBranchName] = useState('');
  const [logMessage, setLogMessage] = useState('');
  const [showLog, setShowLog] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [activeTab, setActiveTab] = useState('working');

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const addLog = (message) => {
    setLogMessage(prev => prev + '\n> ' + message);
  };

  const handleFileChange = (filename, content) => {
    setFiles(prev => ({ ...prev, [filename]: content }));
    addLog(`Изменён файл: ${filename}`);
  };

  const addFile = () => {
    const newFilename = prompt('Введите имя файла (например: readme.md):');
    if (newFilename && !files[newFilename]) {
      setFiles(prev => ({ ...prev, [newFilename]: '# Новый файл\n\nСодержимое файла.' }));
      setSelectedFile(newFilename);
      addLog(`Создан файл: ${newFilename}`);
    } else if (newFilename) {
      alert('Файл с таким именем уже существует!');
    }
  };

  const stageFile = (filename) => {
    setStagedFiles(prev => ({ ...prev, [filename]: files[filename] }));
    addLog(`✅ Файл добавлен в индекс (staged): ${filename}`);
  };

  const unstageFile = (filename) => {
    const newStaged = { ...stagedFiles };
    delete newStaged[filename];
    setStagedFiles(newStaged);
    addLog(`⏪ Файл убран из индекса: ${filename}`);
  };

  const commit = () => {
    if (Object.keys(stagedFiles).length === 0) {
      alert('Нет файлов в индексе! Сначала добавьте файлы через git add');
      return;
    }
    
    if (!commitMessage.trim()) {
      alert('Введите сообщение коммита!');
      return;
    }
    
    const commitId = Math.random().toString(36).substring(2, 8);
    const newCommit = {
      id: commitId,
      message: commitMessage,
      branch: currentBranch,
      files: { ...stagedFiles },
      timestamp: new Date().toLocaleString(),
      parent: commits.filter(c => c.branch === currentBranch).length > 0 
        ? commits.filter(c => c.branch === currentBranch)[commits.filter(c => c.branch === currentBranch).length - 1].id 
        : null
    };
    
    setCommits(prev => [...prev, newCommit]);
    
    setFiles(prev => ({ ...prev, ...stagedFiles }));
    setStagedFiles({});
    setCommitMessage('');
    addLog(`Создан коммит ${commitId}: "${commitMessage}" на ветке ${currentBranch}`);
  };

  const createBranch = () => {
    if (!newBranchName.trim()) {
      alert('Введите имя ветки!');
      return;
    }
    
    if (branches.includes(newBranchName)) {
      alert('Ветка с таким именем уже существует!');
      return;
    }
    
    setBranches(prev => [...prev, newBranchName]);
    addLog(`Создана ветка: ${newBranchName}`);
    setNewBranchName('');
  };

  const switchBranch = (branch) => {
    if (branch === currentBranch) return;
    
    if (Object.keys(stagedFiles).length > 0) {
      if (!confirm('У вас есть незакоммиченные изменения. Переключиться без сохранения? Они будут потеряны.')) {
        return;
      }
      setStagedFiles({});
    }
    
    setCurrentBranch(branch);
    addLog(`🔀 Переключились на ветку: ${branch}`);
    
    const lastCommit = [...commits].reverse().find(c => c.branch === branch);
    if (lastCommit) {
      setFiles({ ...lastCommit.files });
    } else {
      setFiles({
        'index.html': '<!DOCTYPE html>\n<html>\n  <head>\n    <title>New Branch</title>\n  </head>\n  <body>\n    <h1>New Branch</h1>\n  </body>\n</html>'
      });
      setSelectedFile('index.html');
    }
  };

  const getFileContent = (filename) => {
    return files[filename] || '';
  };

  const styles = {
    container: {
      margin: '1rem',
      padding: isMobile ? '12px' : '20px',
      backgroundColor: '#f6f8fa',
      borderRadius: '12px',
      fontFamily: 'system-ui, -apple-system, sans-serif',
      border: '1px solid #d0d7de',
      maxWidth: '1400px',
      marginLeft: 'auto',
      marginRight: 'auto',
    },
    header: {
      marginBottom: '20px',
      padding: isMobile ? '12px' : '15px',
      backgroundColor: '#24292e',
      color: 'white',
      borderRadius: '8px',
    },
    title: {
      margin: 0,
      fontSize: isMobile ? '20px' : '24px',
      fontWeight: '600',
    },
    subtitle: {
      margin: '5px 0 0',
      fontSize: isMobile ? '12px' : '14px',
      opacity: 0.8,
    },
    layout: {
      display: 'grid',
      gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
      gap: '20px',
      marginBottom: '20px',
    },
    panel: {
      backgroundColor: 'white',
      borderRadius: '8px',
      padding: isMobile ? '12px' : '15px',
      border: '1px solid #d0d7de',
    },
    panelTitle: {
      margin: '0 0 15px 0',
      fontSize: isMobile ? '16px' : '18px',
      fontWeight: '600',
      color: '#24292e',
      borderBottom: '2px solid #e1e4e8',
      paddingBottom: '8px',
    },
    fileList: {
      maxHeight: isMobile ? '200px' : '300px',
      overflowY: 'auto',
    },
    fileItem: {
      padding: '8px',
      margin: '4px 0',
      cursor: 'pointer',
      borderRadius: '4px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: '8px',
    },
    fileName: {
      flex: 1,
      fontSize: isMobile ? '13px' : '14px',
      wordBreak: 'break-word',
    },
    fileActions: {
      display: 'flex',
      gap: '8px',
    },
    button: {
      padding: isMobile ? '6px 10px' : '4px 12px',
      fontSize: isMobile ? '11px' : '12px',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
      transition: 'all 0.2s',
      fontWeight: '500',
      minHeight: isMobile ? '36px' : 'auto',
    },
    buttonPrimary: {
      backgroundColor: '#2c974b',
      color: 'white',
    },
    buttonSecondary: {
      backgroundColor: '#e1e4e8',
      color: '#24292e',
    },
    buttonDanger: {
      backgroundColor: '#d73a49',
      color: 'white',
    },
    buttonWarning: {
      backgroundColor: '#f0ad4e',
      color: 'white',
    },
    editor: {
      width: '100%',
      height: isMobile ? '250px' : '300px',
      padding: '10px',
      fontFamily: 'monospace',
      fontSize: isMobile ? '12px' : '14px',
      border: '1px solid #d0d7de',
      borderRadius: '4px',
      resize: 'vertical',
    },
    commitArea: {
      marginTop: '15px',
    },
    input: {
      width: '100%',
      padding: isMobile ? '8px' : '10px',
      marginBottom: '10px',
      border: '1px solid #d0d7de',
      borderRadius: '4px',
      fontSize: isMobile ? '13px' : '14px',
      boxSizing: 'border-box',
    },
    branchInfo: {
      display: 'flex',
      flexDirection: isMobile ? 'column' : 'row',
      justifyContent: 'space-between',
      alignItems: isMobile ? 'stretch' : 'center',
      gap: isMobile ? '12px' : '0',
      padding: '10px',
      backgroundColor: '#f1f8ff',
      borderRadius: '4px',
      marginBottom: '15px',
    },
    branchBadge: {
      backgroundColor: '#e1e4e8',
      padding: '4px 12px',
      borderRadius: '20px',
      fontSize: isMobile ? '12px' : '12px',
      fontWeight: '600',
      marginLeft: isMobile ? '0' : '8px',
    },
    branchList: {
      display: 'flex',
      gap: '8px',
      flexWrap: 'wrap',
      marginBottom: '20px',
    },
    branchItem: {
      padding: '6px 12px',
      borderRadius: '20px',
      fontSize: isMobile ? '12px' : '12px',
      cursor: 'pointer',
      backgroundColor: '#e1e4e8',
      transition: 'all 0.2s',
      flex: isMobile ? '0 0 auto' : 'auto',
    },
    activeBranch: {
      backgroundColor: '#2c974b',
      color: 'white',
    },
    logArea: {
      marginTop: '15px',
      padding: '10px',
      backgroundColor: '#f6f8fa',
      border: '1px solid #d0d7de',
      borderRadius: '4px',
      maxHeight: '150px',
      overflowY: 'auto',
      fontFamily: 'monospace',
      fontSize: isMobile ? '11px' : '12px',
    },
    historyList: {
      maxHeight: '200px',
      overflowY: 'auto',
    },
    commitItem: {
      padding: '8px',
      borderBottom: '1px solid #e1e4e8',
      fontSize: isMobile ? '11px' : '12px',
    },
    tabContainer: {
      display: 'flex',
      gap: '4px',
      marginBottom: '16px',
      borderBottom: '2px solid #e1e4e8',
    },
    tab: {
      flex: 1,
      padding: '10px',
      backgroundColor: 'transparent',
      border: 'none',
      fontSize: '14px',
      fontWeight: '500',
      cursor: 'pointer',
      color: '#57606a',
      transition: 'all 0.2s',
    },
    activeTab: {
      color: '#2c974b',
      borderBottom: '2px solid #2c974b',
      marginBottom: '-2px',
    },
    infoBox: {
      marginTop: '15px',
      padding: '12px',
      backgroundColor: '#fff3cd',
      borderRadius: '4px',
      fontSize: isMobile ? '12px' : '14px',
    },
    createBranchContainer: {
      display: 'flex',
      flexDirection: isMobile ? 'column' : 'row',
      gap: '8px',
      alignItems: isMobile ? 'stretch' : 'center',
    },
  };

  const renderWorkingDirectory = () => (
    <div style={styles.panel}>
      <h4 style={styles.panelTitle}>📁 Рабочая директория</h4>
      <div style={styles.fileList}>
        {Object.keys(files).map(filename => (
          <div
            key={filename}
            style={{
              ...styles.fileItem,
              backgroundColor: selectedFile === filename ? '#f1f8ff' : 'transparent'
            }}
          >
            <div
              style={styles.fileName}
              onClick={() => setSelectedFile(filename)}
            >
              📄 {filename}
            </div>
            <div style={styles.fileActions}>
              <button
                onClick={() => stageFile(filename)}
                style={{ ...styles.button, ...styles.buttonPrimary }}
              >
                git add
              </button>
            </div>
          </div>
        ))}
        <button
          onClick={addFile}
          style={{ ...styles.button, ...styles.buttonSecondary, marginTop: '10px', width: '100%' }}
        >
          + Новый файл
        </button>
      </div>
    </div>
  );

  const renderStagingArea = () => (
    <div style={styles.panel}>
      <h4 style={styles.panelTitle}>✅ Индекс (Staging Area)</h4>
      <div style={styles.fileList}>
        {Object.keys(stagedFiles).length === 0 ? (
          <p style={{ color: '#6a737d', textAlign: 'center', padding: '20px' }}>
            Нет файлов в индексе
          </p>
        ) : (
          Object.keys(stagedFiles).map(filename => (
            <div key={filename} style={styles.fileItem}>
              <div style={styles.fileName}>✅ {filename}</div>
              <button
                onClick={() => unstageFile(filename)}
                style={{ ...styles.button, ...styles.buttonWarning }}
              >
                git reset
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );

  const renderEditor = () => (
    <div style={styles.panel}>
      <h4 style={styles.panelTitle}>Редактор файлов</h4>
      <select
        value={selectedFile}
        onChange={(e) => setSelectedFile(e.target.value)}
        style={styles.input}
      >
        {Object.keys(files).map(filename => (
          <option key={filename} value={filename}>{filename}</option>
        ))}
      </select>
      <textarea
        style={styles.editor}
        value={getFileContent(selectedFile)}
        onChange={(e) => handleFileChange(selectedFile, e.target.value)}
      />
    </div>
  );

  const renderCommitPanel = () => (
    <div style={styles.panel}>
      <h4 style={styles.panelTitle}>Коммит</h4>
      <div style={styles.commitArea}>
        <input
          type="text"
          placeholder="Сообщение коммита (например: fix: исправлена ошибка)"
          value={commitMessage}
          onChange={(e) => setCommitMessage(e.target.value)}
          style={styles.input}
        />
        <button
          onClick={commit}
          style={{ ...styles.button, ...styles.buttonPrimary, width: '100%' }}
        >
          git commit -m "..."
        </button>
      </div>
      
      <div style={{ marginTop: '20px' }}>
        <button
          onClick={() => setShowLog(!showLog)}
          style={{ ...styles.button, ...styles.buttonSecondary, width: '100%', marginBottom: '10px' }}
        >
          {showLog ? 'Скрыть историю' : 'Показать историю коммитов'}
        </button>
        
        {showLog && (
          <div style={styles.historyList}>
            <strong>История коммитов ({currentBranch}):</strong>
            {commits.filter(c => c.branch === currentBranch).length === 0 ? (
              <p style={{ color: '#6a737d', textAlign: 'center', padding: '10px' }}>
                Нет коммитов
              </p>
            ) : (
              commits.filter(c => c.branch === currentBranch).map(commit => (
                <div key={commit.id} style={styles.commitItem}>
                  <strong>{commit.id}</strong> - {commit.message}
                  <br />
                  <small>{commit.timestamp}</small>
                  <br />
                  <small>Файлов: {Object.keys(commit.files).length}</small>
                </div>
              ))
            )}
          </div>
        )}
      </div>
    </div>
  );

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h2 style={styles.title}>Git Эмулятор</h2>
        <p style={styles.subtitle}>Интерактивная демонстрация основных команд Git</p>
      </div>

      <div style={styles.branchInfo}>
        <div>
          <strong>Текущая ветка:</strong>
          <span style={styles.branchBadge}>{currentBranch}</span>
        </div>
        <div style={styles.createBranchContainer}>
          <input
            type="text"
            value={newBranchName}
            onChange={(e) => setNewBranchName(e.target.value)}
            placeholder="имя ветки"
            style={{ ...styles.input, marginBottom: isMobile ? '8px' : 0, marginRight: isMobile ? 0 : '8px' }}
          />
          <button onClick={createBranch} style={{ ...styles.button, ...styles.buttonPrimary }}>
            Создать ветку
          </button>
        </div>
      </div>

      <div style={styles.branchList}>
        <strong>Ветки:</strong>
        {branches.map(branch => (
          <div
            key={branch}
            style={{
              ...styles.branchItem,
              ...(currentBranch === branch ? styles.activeBranch : {})
            }}
            onClick={() => switchBranch(branch)}
          >
            {branch}
          </div>
        ))}
      </div>

      {isMobile ? (
        <>
          <div style={styles.tabContainer}>
            <button
              style={{ ...styles.tab, ...(activeTab === 'working' ? styles.activeTab : {}) }}
              onClick={() => setActiveTab('working')}
            >
              Файлы
            </button>
            <button
              style={{ ...styles.tab, ...(activeTab === 'staging' ? styles.activeTab : {}) }}
              onClick={() => setActiveTab('staging')}
            >
              Индекс
            </button>
            <button
              style={{ ...styles.tab, ...(activeTab === 'editor' ? styles.activeTab : {}) }}
              onClick={() => setActiveTab('editor')}
            >
              Редактор
            </button>
            <button
              style={{ ...styles.tab, ...(activeTab === 'commit' ? styles.activeTab : {}) }}
              onClick={() => setActiveTab('commit')}
            >
              Коммит
            </button>
          </div>
          
          {activeTab === 'working' && renderWorkingDirectory()}
          {activeTab === 'staging' && renderStagingArea()}
          {activeTab === 'editor' && renderEditor()}
          {activeTab === 'commit' && renderCommitPanel()}
        </>
      ) : (
        <>
          <div style={styles.layout}>
            {renderWorkingDirectory()}
            {renderStagingArea()}
          </div>

          <div style={styles.layout}>
            {renderEditor()}
            {renderCommitPanel()}
          </div>
        </>
      )}

      <div style={styles.logArea}>
        <strong>📋 Лог операций:</strong>
        <div style={{ whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}>
          {logMessage || '> Готов к работе. Начните добавлять файлы через git add'}
        </div>
      </div>

      <div style={styles.infoBox}>
        <strong>Как работает Git:</strong>
        <ol style={{ margin: '8px 0 0 20px', paddingLeft: isMobile ? '0' : '20px' }}>
          <li><strong>Рабочая директория</strong> - файлы над которыми вы работаете</li>
          <li><strong>git add</strong> - добавляет файлы в индекс (staging area)</li>
          <li><strong>git commit</strong> - сохраняет состояние индекса в репозиторий</li>
          <li><strong>Ветки</strong> - позволяют работать над разными версиями параллельно</li>
        </ol>
      </div>
    </div>
  );
};

export default GitEmulator;