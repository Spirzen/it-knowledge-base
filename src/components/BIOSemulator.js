import React, { useState, useEffect } from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';

const BIOSemulator = () => {
  // --- КОНФИГУРАЦИЯ СИСТЕМЫ ---
  const SYSTEM = {
    cpu: "Intel Core i9-9900K @ 3.60GHz",
    ram: "32768 MB DDR4",
    gpu: "NVIDIA GeForce RTX 3080",
    drives: [
      { id: "IDE-0", name: "SSD Samsung 970 EVO (Windows)", type: "HDD", bootable: true },
      { id: "IDE-1", name: "HDD WD Blue 1TB", type: "HDD", bootable: false },
      { id: "USB-0", name: "USB Flash Drive (Win10 Installer)", type: "USB", bootable: true }
    ],
    peripherals: ["Keyboard", "Mouse", "Monitor"]
  };

  const STATE = { OFF: 0, POST: 1, BOOT_MENU: 2, BIOS_SETUP: 3, LOADING_OS: 4, OS_LOADED: 5 };
  
  const [currentState, setCurrentState] = useState(STATE.OFF);
  const [isRunning, setIsRunning] = useState(false);
  
  // Навигация
  const [currentMenuIndex, setCurrentMenuIndex] = useState(0);
  const [currentSetupTab, setCurrentSetupTab] = useState(0); 
  const [setupSelection, setSetupSelection] = useState(0);
  
  // Подменю (Popups)
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [popupList, setPopupList] = useState([]);
  const [popupSelection, setPopupSelection] = useState(0);
  const [popupCallback, setPopupCallback] = useState(null);

  // Для POST: храним список строк, которые нужно вывести
  const [postLines, setPostLines] = useState([]);
  const [postBarActive, setPostBarActive] = useState(false);

  // --- УТИЛИТЫ ---
  const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms));

  // --- ЛОГИКА СОСТОЯНИЙ ---

  const startPost = async () => {
    setCurrentState(STATE.POST);
    setIsRunning(true);
    setPostLines([]); // Очистка экрана через состояние
    setPostBarActive(false);

    const lines = [
      { t: 0, text: "PhoenixBIOS v6.00 (c) 2026 Phoenix Technologies Ltd." },
      { t: 1000, text: `CPU: ${SYSTEM.cpu}`, ok: true },
      { t: 1500, text: "Memory Test: Checking...", bar: true },
      { t: 3000, text: `Memory Test: ${SYSTEM.ram} OK`, ok: true },
      { t: 3500, text: `Video Adapter: ${SYSTEM.gpu}`, ok: true },
      { t: 4000, text: `Primary Master: ${SYSTEM.drives[0].name}`, ok: true },
      { t: 4500, text: "Secondary Master: None", fail: true },
      { t: 5000, text: "USB Devices Detected: Keyboard, Mouse", ok: true },
      { t: 6000, text: "" },
      { t: 6500, text: "Press DEL to enter SETUP", yellow: true },
      { t: 6500, text: "Press F12 for Boot Menu", yellow: true }
    ];

    let lastT = 0;
    for (let line of lines) {
      await wait(line.t - lastT);
      lastT = line.t;

      if (line.bar) {
        setPostBarActive(true);
        // Имитация заполнения бара через таймер
        let w = 0;
        const interval = setInterval(() => {
          w += 5;
          if (w >= 100) {
            clearInterval(interval);
            setPostBarActive(false);
          }
        }, 50);
      } else {
        setPostLines(prev => [...prev, { ...line, id: Date.now() + Math.random() }]);
      }
    }
    
    // Ждем ввода пользователя
    while(isRunning && currentState === STATE.POST) await wait(100);
  };

  const togglePower = () => {
    if (currentState === STATE.OFF) {
      startPost();
    } else {
      setCurrentState(STATE.OFF);
      setIsRunning(false);
      setPostLines([]);
      setPostBarActive(false);
      setCurrentMenuIndex(0);
      setCurrentSetupTab(0);
      setSetupSelection(0);
      setIsPopupOpen(false);
    }
  };

  // --- ПОМОЩНЫЕ ФУНКЦИИ ДЛЯ ДАННЫХ ---
  
  const getSetupRows = (tab) => {
    // Создаем копию объектов, чтобы изменения не ломали исходные данные при ре-рендеринге
    if (tab === 0) return [
      { name: "System Time", value: "12:00:00", type: "time" },
      { name: "System Date", value: "Sat May 16 2026", type: "date" },
      { name: "Processor Type", value: SYSTEM.cpu.split(' ')[0], type: "text" },
      { name: "Total Memory", value: SYSTEM.ram, type: "text" }
    ];
    if (tab === 1) return [
      { name: "SATA Controller", value: "Enabled", type: "bool" },
      { name: "USB Legacy Support", value: "Enabled", type: "bool" },
      { name: "Virtualization", value: "Disabled", type: "bool" },
      { name: "Boot Option #1", value: SYSTEM.drives[0].id, type: "device" },
      { name: "Boot Option #2", value: SYSTEM.drives[1].id, type: "device" }
    ];
    return [
      { name: "Administrator Password", value: "Not Set", type: "pass" },
      { name: "User Password", value: "Not Set", type: "pass" },
      { name: "Secure Boot", value: "Disabled", type: "bool" }
    ];
  };

  const handleSetupEntry = () => {
    const rows = getSetupRows(currentSetupTab);
    const row = rows[setupSelection];
    
    if (row.type === 'device') {
      setPopupList(SYSTEM.drives);
      setPopupSelection(0);
      setIsPopupOpen(true);
      setPopupCallback((selectedDevice) => {
        if (selectedDevice) {
          // В реальном приложении здесь нужно было бы обновить глобальное состояние системы
          // Но так как мы передаем строки каждый раз, просто меняем локальное отображение
          // Для демо просто покажем alert, так как изменение строки в массиве getSetupRows
          // не сохранится в следующем рендере без внешнего стейта.
          // Однако, мы можем сымитировать изменение, если бы у нас был стейт для текущих настроек.
          // Для простоты оставим как есть, но логика вызова поп-апа работает.
          alert(`Выбрано: ${selectedDevice.name}`);
        }
      });
    } else if (row.type === 'bool') {
      // Здесь тоже нужна логика обновления стейта, если хотим видеть результат
      // Для демо просто меняем визуально в момент выбора
      const newValue = (row.value === "Enabled") ? "Disabled" : "Enabled";
      // Примечание: Без отдельного стейта для таблицы, это значение вернется к старому при следующем рендере
      // Но для демонстрации интерфейса это допустимо.
      alert(`Переключено на: ${newValue}`);
    } else if (row.type === 'time' || row.type === 'date') {
      alert("Эмуляция смены времени");
    } else {
      alert("Ввод пароля не реализован");
    }
  };

  const closePopup = (result) => {
    setIsPopupOpen(false);
    if (popupCallback) {
      popupCallback(result);
      setPopupCallback(null);
    }
  };

  // --- ОБРАБОТЧИКИ ВВОДА ---

  const handleInput = (key) => {
    if (currentState === STATE.OFF) return;

    if (isPopupOpen) {
      if (key === 'UP') {
        if (popupSelection > 0) setPopupSelection(p => p - 1);
      } else if (key === 'DOWN') {
        if (popupSelection < popupList.length - 1) setPopupSelection(p => p + 1);
      } else if (key === 'ENTER') {
        closePopup(popupList[popupSelection]);
      } else if (key === 'ESC') {
        closePopup(null);
      }
      return;
    }

    switch (currentState) {
      case STATE.POST:
        if (key === 'DEL') {
          setCurrentState(STATE.BIOS_SETUP);
          setCurrentSetupTab(0); setSetupSelection(0);
        } else if (key === 'F12') {
          setCurrentState(STATE.BOOT_MENU);
          setCurrentMenuIndex(0);
        }
        break;

      case STATE.BOOT_MENU:
        if (key === 'UP') { if (currentMenuIndex > 0) setCurrentMenuIndex(p => p - 1); }
        else if (key === 'DOWN') { if (currentMenuIndex < SYSTEM.drives.length - 1) setCurrentMenuIndex(p => p + 1); }
        else if (key === 'ENTER') {
          const selectedDrive = SYSTEM.drives[currentMenuIndex];
          console.log(`Booting from ${selectedDrive.name}...`);
          setCurrentState(STATE.LOADING_OS);
        } else if (key === 'ESC') {
          startPost();
        }
        break;

      case STATE.BIOS_SETUP:
        if (key === 'LEFT' || key === 'RIGHT') {
          setCurrentSetupTab(p => (p + (key === 'RIGHT' ? 1 : -1) + 3) % 3);
          setSetupSelection(0);
        } else if (key === 'UP') {
          const rows = getSetupRows(currentSetupTab);
          if (setupSelection > 0) setSetupSelection(p => p - 1);
        } else if (key === 'DOWN') {
          const rows = getSetupRows(currentSetupTab);
          if (setupSelection < rows.length - 1) setSetupSelection(p => p + 1);
        } else if (key === 'ENTER') {
          handleSetupEntry();
        } else if (key === 'ESC') {
          console.log("Discarding changes and exiting...");
          setTimeout(startPost, 1500);
        }
        break;
      
      case STATE.LOADING_OS:
      case STATE.OS_LOADED:
        if (key === 'ESC') startPost();
        break;
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (currentState === STATE.OFF) return;
      let key = e.key.toUpperCase();
      if (key === 'ARROWUP') key = 'UP';
      if (key === 'ARROWDOWN') key = 'DOWN';
      if (key === 'ARROWLEFT') key = 'LEFT';
      if (key === 'ARROWRIGHT') key = 'RIGHT';
      handleInput(key);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentState, isRunning, currentMenuIndex, currentSetupTab, setupSelection, isPopupOpen, popupSelection, popupList]);

  // --- РЕНДЕРИНГ (JSX) ---

  const renderScreenContent = () => {
    if (currentState === STATE.OFF) {
      return <div style={{color: '#555', textAlign: 'center', marginTop: '40%', fontSize: '14px'}}>Нажмите "⏻ ВКЛ/ВЫКЛ" для запуска</div>;
    }

    if (isPopupOpen) {
      const currentRowName = getSetupRows(currentSetupTab)[setupSelection].name;
      return (
        <>
          <div className="popup-overlay">
            <div className="popup-title">Select Device for: {currentRowName}</div>
            <div className="popup-list">
              {popupList.map((item, idx) => (
                <div 
                  key={idx} 
                  className={`popup-item${idx === popupSelection ? " selected" : ""}`}
                  onClick={() => setPopupSelection(idx)}
                >
                  {item.name}
                </div>
              ))}
            </div>
            <div className="popup-footer">[↑↓] Select | [Enter] Confirm | [Esc] Cancel</div>
          </div>
        </>
      );
    }

    switch (currentState) {
      case STATE.POST:
        return (
          <>
            {postLines.map((line, i) => (
              <div key={i} className={`post-line ${line.ok ? "post-ok" : (line.fail ? "post-fail" : "")} ${line.yellow ? "yellow-text" : ""}`}>
                {line.text}
              </div>
            ))}
            {postBarActive && (
              <div className="progress-bar-container" style={{width: '100%', backgroundColor: '#333', height: '4px', marginTop: '5px'}}>
                <div className="win-progress" style={{width: '100%', backgroundColor: '#0f0', height: '100%'}}></div>
              </div>
            )}
          </>
        );

      case STATE.BOOT_MENU:
        return (
          <>
            <div style={{color: "#fff", borderBottom: "1px solid #fff", marginBottom: "10px"}}>=== Boot Priority Order ===</div>
            {SYSTEM.drives.map((drive, index) => (
              <div 
                key={index} 
                className={`boot-menu-item${index === currentMenuIndex ? " active" : ""}`}
                onClick={() => setCurrentMenuIndex(index)}
              >
                {index + 1}. {drive.name}
              </div>
            ))}
            <div style={{marginTop: "20px"}}><i>[↑↓] Select | [Enter] Boot | [ESC] Skip</i></div>
          </>
        );

      case STATE.BIOS_SETUP:
        const rows = getSetupRows(currentSetupTab);
        return (
          <>
            <div className="bios-header">BIOS Setup Utility - PhoenixBIOS</div>
            <div className="tabs-container">
              {["Main", "Advanced", "Security"].map((tab, i) => (
                <span 
                  key={i} 
                  className={`tab-item${i === currentSetupTab ? " active" : ""}`}
                  onClick={() => { setCurrentSetupTab(i); setSetupSelection(0); }}
                >
                  {tab}
                </span>
              ))}
            </div>
            <div className="bios-content">
              <table>
                <tbody>
                  {rows.map((row, i) => (
                    <tr key={i} className={i === setupSelection ? "selected-row" : ""}>
                      <td>{row.name}</td>
                      <td>{row.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="footer-hint">[←→] Tab | [↑↓] Item | [Enter] Select | [Esc] Exit</div>
          </>
        );

      case STATE.LOADING_OS:
        return (
          <>
            <div className="win-logo">Microsoft Windows</div>
            <div>Starting Windows...</div>
            <div className="win-loader">
              <div className="win-progress" style={{width: '100%'}}></div>
            </div>
          </>
        );

      case STATE.OS_LOADED:
        return (
          <div style={{color: "white", textAlign: "center", marginTop: "50%"}}>
            Windows Desktop (Simulated)<br/>
            <small>Press ESC to restart</small>
          </div>
        );

      default:
        return null;
    }
  };

  // --- СТИЛИ (CSS-in-JS) ---
  const styles = `
    :root {
      --bg-color: #000;
      --blue-bg: #0000AA;
      --white-text: #ffffff;
      --yellow-text: #FFFF00;
      --green-text: #00FF00;
    }

    .monitor-case {
      background: #2b2b2b;
      padding: 20px;
      border-radius: 15px;
      box-shadow: 0 0 30px rgba(0,0,0,0.8);
      border: 2px solid #444;
      width: 100%;
      max-width: 900px;
      display: flex;
      flex-direction: column;
      gap: 15px;
      font-family: 'Courier New', Courier, monospace;
      user-select: none;
    }

    #screen {
      background-color: var(--bg-color);
      color: var(--white-text);
      height: 450px;
      width: 100%;
      padding: 20px;
      box-sizing: border-box;
      position: relative;
      overflow: hidden;
      border: 2px solid #555;
      font-size: 16px;
      line-height: 1.4;
      display: flex;
      flex-direction: column;
    }

    .controls {
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      gap: 10px;
      background: #1e1e1e;
      padding: 15px;
      border-radius: 8px;
      border: 1px solid #444;
    }

    button.key {
      background: #333;
      color: #ddd;
      border: 1px solid #555;
      border-radius: 4px;
      padding: 8px 12px;
      cursor: pointer;
      font-weight: bold;
      font-family: inherit;
      transition: all 0.1s;
      box-shadow: 0 4px 0 #111;
    }

    button.key:active {
      transform: translateY(4px);
      box-shadow: 0 0 0 #111;
      background: #444;
    }

    button.power-btn {
      background: #d32f2f;
      color: white;
      grid-column: span 1;
      width: 100%;
    }

    /* BIOS Styles */
    .bios-header {
      background: var(--blue-bg);
      color: var(--white-text);
      padding: 5px;
      text-align: center;
      font-weight: bold;
    }

    .tabs-container {
      background: var(--blue-bg);
      padding: 5px 10px;
      color: var(--white-text);
      display: flex;
      gap: 20px;
      font-weight: bold;
    }

    .tab-item {
      cursor: pointer;
    }
    .tab-item.active {
      color: var(--yellow-text);
    }

    .bios-content {
      flex-grow: 1;
      overflow-y: auto;
      color: var(--white-text);
      padding: 10px;
      display: flex;
      flex-direction: column;
    }

    table { width: 100%; border-collapse: collapse; }
    td { padding: 4px 10px; }
    
    .selected-row { 
      background: var(--white-text); 
      color: var(--blue-bg); 
      cursor: pointer;
    }

    .footer-hint {
      background: var(--blue-bg);
      color: var(--white-text);
      padding: 5px;
      text-align: center;
      font-size: 14px;
      margin-top: auto;
    }

    /* POST & Boot Menu Styles */
    .post-line { margin-bottom: 2px; }
    .post-ok { color: var(--green-text); }
    .post-fail { color: red; }
    
    .boot-menu-item {
      padding: 2px 10px;
      cursor: pointer;
    }
    .boot-menu-item:hover, .boot-menu-item.active {
      background: var(--white-text);
      color: var(--blue-bg);
    }

    /* Windows loading */
    .win-logo { color: #00A4EF; font-size: 24px; font-weight: bold; margin-bottom: 20px; }
    .win-loader { width: 100%; height: 4px; background: #333; margin-top: 20px; position: relative; }
    .win-progress { height: 100%; background: #00A4EF; width: 0%; transition: width 0.2s; }

    /* Подменю (Popups) */
    .popup-overlay {
      position: absolute;
      top: 0; left: 0; right: 0; bottom: 0;
      background: rgba(0, 0, 170, 0.95);
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      z-index: 10;
    }
    .popup-title {
      color: #fff;
      font-size: 18px;
      margin-bottom: 20px;
      text-align: center;
    }
    .popup-list {
      display: flex;
      flex-direction: column;
      gap: 10px;
      width: 80%;
    }
    .popup-item {
      color: #fff;
      padding: 5px;
      cursor: pointer;
      border: 1px solid transparent;
    }
    .popup-item.selected {
      background: #fff;
      color: #000;
      border: 1px solid #fff;
    }
    .popup-footer {
      position: absolute;
      bottom: 10px;
      color: #aaa;
      font-size: 12px;
    }
  `;

  return (
    <>
      <style>{styles}</style>
      <div className="monitor-case">
        <div id="screen">
          {renderScreenContent()}
        </div>

        <div className="controls">
          <div className="control-group">
            <button className="key power-btn" onClick={togglePower}>⏻ ВКЛ/ВЫКЛ</button>
          </div>
          <div className="control-group">
            <button className="key" onClick={() => handleInput('ESC')}>Esc</button>
            <button className="key" onClick={() => handleInput('F12')}>F12</button>
            <button className="key" onClick={() => handleInput('DEL')}>Del</button>
          </div>
          <div className="control-group">
            <button className="key" onClick={() => handleInput('UP')}>▲</button>
            <button className="key" onClick={() => handleInput('DOWN')}>▼</button>
            <button className="key" onClick={() => handleInput('LEFT')}>◀</button>
            <button className="key" onClick={() => handleInput('RIGHT')}>▶</button>
          </div>
          <div className="control-group">
            <button className="key" onClick={() => handleInput('ENTER')}>Enter</button>
          </div>
          <div className="control-group" style={{display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px', color: '#888'}}>
            Управление: Стрелки / Enter / Esc
          </div>
        </div>
      </div>
    </>
  );
};

const BIOSemulatorWrapper = () => (
  <BrowserOnly fallback={<div style={{padding: '20px', textAlign: 'center'}}>Загрузка эмулятора...</div>}>
    {() => <BIOSemulator />}
  </BrowserOnly>
);

export default BIOSemulatorWrapper;