import React, { useState, useCallback } from 'react';

const NeuralNetworkDemo = () => {
  const [inputValues, setInputValues] = useState([0.5, 0.3, 0.8]);
  const [weights, setWeights] = useState({
    hidden: [
      [0.2, -0.5, 0.3],
      [0.4, 0.1, -0.2],
      [-0.1, 0.6, 0.4]
    ],
    output: [0.3, -0.4, 0.5]
  });
  
  const [hiddenOutputs, setHiddenOutputs] = useState([0, 0, 0]);
  const [finalOutput, setFinalOutput] = useState(0);
  const [activeNeuron, setActiveNeuron] = useState(null);
  const [signalFlow, setSignalFlow] = useState([]);
  const [isProcessing, setIsProcessing] = useState(false);
  const [bias, setBias] = useState({ hidden: 0.1, output: -0.2 });
  const [activationType, setActivationType] = useState('sigmoid');
  
  const sigmoid = (x) => 1 / (1 + Math.exp(-x));
  
  const relu = (x) => Math.max(0, x);
  
  const activation = useCallback((x) => {
    return activationType === 'sigmoid' ? sigmoid(x) : relu(x);
  }, [activationType]);
  
  const forwardPass = useCallback(async () => {
    setIsProcessing(true);
    setSignalFlow([]);
    
    setSignalFlow(prev => [...prev, {
      type: 'input',
      message: 'Входные данные поступают в сеть',
      data: inputValues.map((v, i) => `x${i+1} = ${v.toFixed(3)}`)
    }]);
    
    await delay(800);
    
    const hiddenResults = [];
    
    for (let i = 0; i < weights.hidden.length; i++) {
      setActiveNeuron(`h${i}`);
      
      let sum = bias.hidden;
      const calculations = [];
      
      for (let j = 0; j < inputValues.length; j++) {
        const weighted = inputValues[j] * weights.hidden[i][j];
        sum += weighted;
        calculations.push(`${inputValues[j].toFixed(3)} × ${weights.hidden[i][j].toFixed(2)} = ${weighted.toFixed(3)}`);
      }
      
      setSignalFlow(prev => [...prev, {
        type: 'hidden',
        message: `Нейрон H${i+1} вычисляет взвешенную сумму`,
        data: calculations,
        neuron: `h${i}`
      }]);
      
      await delay(600);
      
      const activated = activation(sum);
      hiddenResults.push(activated);
      
      setSignalFlow(prev => [...prev, {
        type: 'activation',
        message: `Применение ${activationType.toUpperCase()} к сумме ${sum.toFixed(3)} → ${activated.toFixed(3)}`,
        neuron: `h${i}`
      }]);
      
      await delay(500);
    }
    
    setHiddenOutputs(hiddenResults);
    setActiveNeuron(null);
    
    setSignalFlow(prev => [...prev, {
      type: 'hidden-output',
      message: 'Сигналы от скрытого слоя передаются дальше',
      data: hiddenResults.map((v, i) => `H${i+1} = ${v.toFixed(3)}`)
    }]);
    
    await delay(800);
    
    setActiveNeuron('output');
    
    let outputSum = bias.output;
    const outputCalculations = [];
    
    for (let i = 0; i < hiddenResults.length; i++) {
      const weighted = hiddenResults[i] * weights.output[i];
      outputSum += weighted;
      outputCalculations.push(`${hiddenResults[i].toFixed(3)} × ${weights.output[i].toFixed(2)} = ${weighted.toFixed(3)}`);
    }
    
    setSignalFlow(prev => [...prev, {
      type: 'output-sum',
      message: 'Выходной нейрон вычисляет взвешенную сумму',
      data: outputCalculations
    }]);
    
    await delay(600);
    
    const finalActivated = activation(outputSum);
    setFinalOutput(finalActivated);
    
    setSignalFlow(prev => [...prev, {
      type: 'output',
      message: `Финальный результат после активации: ${finalActivated.toFixed(4)}`,
      data: [`Сумма: ${outputSum.toFixed(3)} → ${activationType.toUpperCase()}: ${finalActivated.toFixed(4)}`]
    }]);
    
    await delay(500);
    setActiveNeuron(null);
    setIsProcessing(false);
    
  }, [inputValues, weights, bias, activation, activationType]);
  
  const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));
  
  const updateWeight = (type, i, j, value) => {
    if (isProcessing) return;
    
    setWeights(prev => {
      if (type === 'hidden') {
        const newHidden = [...prev.hidden];
        newHidden[i][j] = value;
        return { ...prev, hidden: newHidden };
      } else {
        const newOutput = [...prev.output];
        newOutput[i] = value;
        return { ...prev, output: newOutput };
      }
    });
  };
  
  const updateInput = (index, value) => {
    if (isProcessing) return;
    const newInputs = [...inputValues];
    newInputs[index] = value;
    setInputValues(newInputs);
  };
  
  const randomize = () => {
    if (isProcessing) return;
    
    setInputValues([Math.random(), Math.random(), Math.random()]);
    setWeights({
      hidden: [
        [(Math.random() - 0.5) * 2, (Math.random() - 0.5) * 2, (Math.random() - 0.5) * 2],
        [(Math.random() - 0.5) * 2, (Math.random() - 0.5) * 2, (Math.random() - 0.5) * 2],
        [(Math.random() - 0.5) * 2, (Math.random() - 0.5) * 2, (Math.random() - 0.5) * 2]
      ],
      output: [(Math.random() - 0.5) * 2, (Math.random() - 0.5) * 2, (Math.random() - 0.5) * 2]
    });
    setBias({
      hidden: (Math.random() - 0.5) * 2,
      output: (Math.random() - 0.5) * 2
    });
  };
  
  return (
    <div style={{
      fontFamily: 'system-ui, -apple-system, "Segoe UI", Roboto, sans-serif',
      maxWidth: '1400px',
      margin: '1rem auto',
      background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
      borderRadius: '20px',
      padding: 'clamp(16px, 4vw, 24px)',
      boxShadow: '0 20px 60px rgba(0,0,0,0.4)',
      color: '#e0e0e0'
    }}>
      
      {/* Заголовок */}
      <div style={{ textAlign: 'center', marginBottom: 'clamp(20px, 5vw, 30px)' }}>
        <h1 style={{ 
          fontSize: 'clamp(1.4rem, 5vw, 2.2rem)', 
          margin: 0,
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text'
        }}>
          Нейронная сеть: Forward Propagation
        </h1>
        <p style={{ color: '#aaa', marginTop: '8px', fontSize: 'clamp(12px, 3vw, 14px)' }}>
          От входных данных → взвешенная сумма → активация → передача следующему слою
        </p>
      </div>
      
      {/* Панель управления */}
      <div style={{
        display: 'flex',
        gap: 'clamp(8px, 2vw, 12px)',
        marginBottom: 'clamp(16px, 4vw, 24px)',
        flexWrap: 'wrap',
        justifyContent: 'center'
      }}>
        <button
          onClick={forwardPass}
          disabled={isProcessing}
          style={{
            padding: 'clamp(8px, 2vw, 12px) clamp(16px, 4vw, 24px)',
            background: 'linear-gradient(135deg, #00b4db, #0083b0)',
            border: 'none',
            borderRadius: '10px',
            color: 'white',
            fontFamily: 'inherit',
            fontSize: 'clamp(12px, 3.5vw, 16px)',
            fontWeight: 'bold',
            cursor: isProcessing ? 'not-allowed' : 'pointer',
            transition: 'transform 0.2s',
            flex: '0 0 auto'
          }}
          onMouseEnter={(e) => !isProcessing && (e.currentTarget.style.transform = 'scale(1.05)')}
          onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
        >
          Запустить прямое распространение
        </button>
        
        <button
          onClick={randomize}
          disabled={isProcessing}
          style={{
            padding: 'clamp(8px, 2vw, 12px) clamp(16px, 4vw, 24px)',
            background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
            border: 'none',
            borderRadius: '10px',
            color: 'white',
            fontFamily: 'inherit',
            fontSize: 'clamp(12px, 3.5vw, 16px)',
            fontWeight: 'bold',
            cursor: isProcessing ? 'not-allowed' : 'pointer',
            transition: 'transform 0.2s',
            flex: '0 0 auto'
          }}
        >
          Случайные веса
        </button>
        
        <select
          value={activationType}
          onChange={(e) => setActivationType(e.target.value)}
          disabled={isProcessing}
          style={{
            padding: 'clamp(8px, 2vw, 12px) clamp(16px, 4vw, 24px)',
            background: 'rgba(255,255,255,0.1)',
            border: '1px solid #667eea',
            borderRadius: '10px',
            color: 'white',
            fontFamily: 'inherit',
            fontSize: 'clamp(12px, 3.5vw, 14px)',
            cursor: isProcessing ? 'not-allowed' : 'pointer',
            flex: '0 0 auto'
          }}
        >
          <option value="sigmoid">Sigmoid (0 to 1)</option>
          <option value="relu">ReLU (max 0)</option>
        </select>
      </div>
      
      {/* Схема сети - Адаптивная */}
      <div style={{
        background: 'rgba(0,0,0,0.3)',
        borderRadius: '20px',
        padding: 'clamp(16px, 4vw, 30px)',
        marginBottom: 'clamp(16px, 4vw, 24px)',
        position: 'relative',
        overflowX: 'auto'
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: 'clamp(16px, 4vw, 40px)',
          minWidth: '280px'
        }}>
          
          {/* Входной слой */}
          <div style={{ textAlign: 'center', flex: '1 1 auto', minWidth: '120px' }}>
            <div style={{ fontSize: 'clamp(11px, 3vw, 14px)', color: '#aaa', marginBottom: '12px' }}>Входной слой</div>
            {inputValues.map((val, idx) => (
              <div
                key={`input-${idx}`}
                style={{
                  background: activeNeuron === `i${idx}` ? 'linear-gradient(135deg, #fbbf24, #f59e0b)' : 'linear-gradient(135deg, #3b82f6, #2563eb)',
                  borderRadius: '12px',
                  padding: 'clamp(8px, 2vw, 12px) clamp(12px, 3vw, 20px)',
                  margin: '8px 0',
                  textAlign: 'center',
                  transition: 'all 0.3s',
                  boxShadow: activeNeuron === `i${idx}` ? '0 0 20px rgba(251,191,36,0.5)' : 'none'
                }}
              >
                <div style={{ fontSize: 'clamp(10px, 2.5vw, 12px)', opacity: 0.8 }}>x{idx + 1}</div>
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.01"
                  value={val}
                  onChange={(e) => updateInput(idx, parseFloat(e.target.value))}
                  disabled={isProcessing}
                  style={{ width: 'clamp(80px, 15vw, 100px)', marginTop: '8px' }}
                />
                <div style={{ fontWeight: 'bold', fontSize: 'clamp(11px, 3vw, 14px)' }}>{val.toFixed(3)}</div>
              </div>
            ))}
          </div>
          
          {/* Стрелка - скрывается на маленьких экранах */}
          <div style={{ 
            fontSize: 'clamp(20px, 5vw, 30px)', 
            color: '#667eea',
            display: 'flex',
            alignItems: 'center'
          }}>
            <span className="arrow">→</span>
          </div>
          
          {/* Скрытый слой */}
          <div style={{ textAlign: 'center', flex: '1 1 auto', minWidth: '120px' }}>
            <div style={{ fontSize: 'clamp(11px, 3vw, 14px)', color: '#aaa', marginBottom: '12px' }}>Скрытый слой</div>
            {hiddenOutputs.map((val, idx) => (
              <div
                key={`hidden-${idx}`}
                style={{
                  background: activeNeuron === `h${idx}` ? 'linear-gradient(135deg, #fbbf24, #f59e0b)' : 'linear-gradient(135deg, #8b5cf6, #7c3aed)',
                  borderRadius: '12px',
                  padding: 'clamp(8px, 2vw, 12px) clamp(12px, 3vw, 20px)',
                  margin: '8px 0',
                  textAlign: 'center',
                  transition: 'all 0.3s',
                  boxShadow: activeNeuron === `h${idx}` ? '0 0 20px rgba(251,191,36,0.5)' : 'none'
                }}
              >
                <div style={{ fontSize: 'clamp(10px, 2.5vw, 12px)', opacity: 0.8 }}>H{idx + 1}</div>
                <div style={{ fontWeight: 'bold', fontSize: 'clamp(11px, 3vw, 14px)' }}>{val.toFixed(3)}</div>
              </div>
            ))}
          </div>
          
          {/* Стрелка - скрывается на маленьких экранах */}
          <div style={{ 
            fontSize: 'clamp(20px, 5vw, 30px)', 
            color: '#667eea',
            display: 'flex',
            alignItems: 'center'
          }}>
            <span className="arrow">→</span>
          </div>
          
          {/* Выходной слой */}
          <div style={{ textAlign: 'center', flex: '1 1 auto', minWidth: '120px' }}>
            <div style={{ fontSize: 'clamp(11px, 3vw, 14px)', color: '#aaa', marginBottom: '12px' }}>Выходной слой</div>
            <div
              style={{
                background: activeNeuron === 'output' ? 'linear-gradient(135deg, #fbbf24, #f59e0b)' : 'linear-gradient(135deg, #10b981, #059669)',
                borderRadius: '12px',
                padding: 'clamp(12px, 3vw, 20px) clamp(16px, 4vw, 30px)',
                textAlign: 'center',
                transition: 'all 0.3s',
                boxShadow: activeNeuron === 'output' ? '0 0 20px rgba(251,191,36,0.5)' : 'none'
              }}
            >
              <div style={{ fontSize: 'clamp(10px, 2.5vw, 12px)', opacity: 0.8 }}>OUTPUT</div>
              <div style={{ fontWeight: 'bold', fontSize: 'clamp(16px, 4vw, 20px)' }}>{finalOutput.toFixed(4)}</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Веса нейронов - Адаптивная сетка */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
        gap: 'clamp(16px, 3vw, 20px)',
        marginBottom: 'clamp(16px, 4vw, 24px)'
      }}>
        <div style={{
          background: 'rgba(0,0,0,0.3)',
          borderRadius: '16px',
          padding: 'clamp(12px, 3vw, 16px)'
        }}>
          <div style={{ fontSize: 'clamp(12px, 3vw, 14px)', fontWeight: 'bold', marginBottom: '12px', color: '#8b5cf6' }}>
            Веса скрытого слоя (W₁ - W₃)
          </div>
          {weights.hidden.map((neuron, i) => (
            <div key={`w-hidden-${i}`} style={{ marginBottom: 'clamp(10px, 2.5vw, 12px)' }}>
              <div style={{ fontSize: 'clamp(10px, 2.5vw, 12px)', marginBottom: '4px' }}>Нейрон H{i+1}:</div>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                {neuron.map((w, j) => (
                  <input
                    key={`w-${i}-${j}`}
                    type="range"
                    min="-1"
                    max="1"
                    step="0.01"
                    value={w}
                    onChange={(e) => updateWeight('hidden', i, j, parseFloat(e.target.value))}
                    disabled={isProcessing}
                    style={{ flex: 1, minWidth: '60px' }}
                  />
                ))}
              </div>
              <div style={{ fontSize: 'clamp(9px, 2vw, 10px)', marginTop: '4px' }}>
                w₁={neuron[0].toFixed(2)} | w₂={neuron[1].toFixed(2)} | w₃={neuron[2].toFixed(2)}
              </div>
            </div>
          ))}
        </div>
        
        <div style={{
          background: 'rgba(0,0,0,0.3)',
          borderRadius: '16px',
          padding: 'clamp(12px, 3vw, 16px)'
        }}>
          <div style={{ fontSize: 'clamp(12px, 3vw, 14px)', fontWeight: 'bold', marginBottom: '12px', color: '#10b981' }}>
            Веса выходного слоя (W₄)
          </div>
          <div style={{ marginBottom: '12px' }}>
            <div style={{ fontSize: 'clamp(10px, 2.5vw, 12px)', marginBottom: '4px' }}>Выходной нейрон:</div>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              {weights.output.map((w, i) => (
                <input
                  key={`w-out-${i}`}
                  type="range"
                  min="-1"
                  max="1"
                  step="0.01"
                  value={w}
                  onChange={(e) => updateWeight('output', i, 0, parseFloat(e.target.value))}
                  disabled={isProcessing}
                  style={{ flex: 1, minWidth: '60px' }}
                />
              ))}
            </div>
            <div style={{ fontSize: 'clamp(9px, 2vw, 10px)', marginTop: '4px' }}>
              w₁={weights.output[0].toFixed(2)} | w₂={weights.output[1].toFixed(2)} | w₃={weights.output[2].toFixed(2)}
            </div>
          </div>
          
          <div style={{ marginTop: 'clamp(12px, 3vw, 16px)' }}>
            <div style={{ fontSize: 'clamp(12px, 3vw, 14px)', fontWeight: 'bold', marginBottom: '8px', color: '#f59e0b' }}>
              Bias (смещение)
            </div>
            <div style={{ display: 'flex', gap: 'clamp(12px, 3vw, 16px)', flexWrap: 'wrap' }}>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 'clamp(10px, 2.5vw, 12px)' }}>Скрытый слой</div>
                <input
                  type="range"
                  min="-1"
                  max="1"
                  step="0.01"
                  value={bias.hidden}
                  onChange={(e) => setBias(prev => ({ ...prev, hidden: parseFloat(e.target.value) }))}
                  disabled={isProcessing}
                  style={{ width: '100%' }}
                />
                <div style={{ fontSize: 'clamp(10px, 2.5vw, 12px)' }}>{bias.hidden.toFixed(2)}</div>
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 'clamp(10px, 2.5vw, 12px)' }}>Выходной слой</div>
                <input
                  type="range"
                  min="-1"
                  max="1"
                  step="0.01"
                  value={bias.output}
                  onChange={(e) => setBias(prev => ({ ...prev, output: parseFloat(e.target.value) }))}
                  disabled={isProcessing}
                  style={{ width: '100%' }}
                />
                <div style={{ fontSize: 'clamp(10px, 2.5vw, 12px)' }}>{bias.output.toFixed(2)}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Поток сигналов */}
      <div style={{
        background: 'rgba(0,0,0,0.4)',
        borderRadius: '16px',
        padding: 'clamp(12px, 3vw, 16px)',
        maxHeight: '300px',
        overflowY: 'auto'
      }}>
        <div style={{ marginBottom: '12px', fontWeight: 'bold', color: '#667eea', fontSize: 'clamp(12px, 3vw, 14px)' }}>
          Поток данных (Forward Propagation)
        </div>
        {signalFlow.length === 0 ? (
          <div style={{ textAlign: 'center', padding: 'clamp(20px, 8vw, 40px)', color: '#666', fontSize: 'clamp(11px, 3vw, 13px)' }}>
            Нажмите "Запустить прямое распространение" чтобы увидеть, как данные проходят через сеть
          </div>
        ) : (
          signalFlow.map((signal, idx) => (
            <div
              key={idx}
              style={{
                padding: 'clamp(8px, 2vw, 10px)',
                marginBottom: '8px',
                background: `rgba(${signal.type === 'input' ? '59,130,246' : 
                           signal.type === 'hidden' ? '139,92,246' : 
                           signal.type === 'activation' ? '245,158,11' : 
                           signal.type === 'output' ? '16,185,129' : '100,116,139'}, 0.2)`,
                borderRadius: '8px',
                borderLeft: `3px solid ${signal.type === 'input' ? '#3b82f6' : 
                           signal.type === 'hidden' ? '#8b5cf6' : 
                           signal.type === 'activation' ? '#f59e0b' : 
                           signal.type === 'output' ? '#10b981' : '#667eea'}`,
                animation: 'slideIn 0.3s ease-out'
              }}
            >
              <div style={{ fontSize: 'clamp(11px, 3vw, 13px)', fontWeight: 'bold' }}>{signal.message}</div>
              {signal.data && (
                <div style={{ fontSize: 'clamp(9px, 2.5vw, 11px)', marginTop: '4px', fontFamily: 'monospace' }}>
                  {signal.data.map((d, i) => <div key={i}>{d}</div>)}
                </div>
              )}
            </div>
          ))
        )}
      </div>
      
      {/* Объяснение - Адаптивная сетка */}
      <div style={{
        marginTop: 'clamp(16px, 4vw, 24px)',
        background: 'rgba(0,0,0,0.3)',
        borderRadius: '16px',
        padding: 'clamp(12px, 3vw, 16px)',
        fontSize: 'clamp(11px, 2.5vw, 13px)',
        lineHeight: '1.6'
      }}>
        <div style={{ fontWeight: 'bold', marginBottom: '12px', color: '#667eea', fontSize: 'clamp(12px, 3vw, 14px)' }}>
          Как работает нейронная сеть (Forward Propagation):
        </div>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 200px), 1fr))', 
          gap: 'clamp(12px, 3vw, 16px)' 
        }}>
          <div>
            <strong style={{ color: '#3b82f6' }}>1. Входные данные (x₁, x₂, x₃)</strong>
            <div style={{ fontSize: 'clamp(10px, 2.5vw, 12px)', marginTop: '4px' }}>Числовые значения, которые подаются на вход сети</div>
          </div>
          <div>
            <strong style={{ color: '#8b5cf6' }}>2. Взвешенная сумма (Σ w·x)</strong>
            <div style={{ fontSize: 'clamp(10px, 2.5vw, 12px)', marginTop: '4px' }}>Каждый вход умножается на свой вес, результаты складываются + bias</div>
          </div>
          <div>
            <strong style={{ color: '#f59e0b' }}>3. Функция активации (σ)</strong>
            <div style={{ fontSize: 'clamp(10px, 2.5vw, 12px)', marginTop: '4px' }}>Преобразует сумму в выходной сигнал нейрона (Sigmoid: 0-1 или ReLU: max 0)</div>
          </div>
          <div>
            <strong style={{ color: '#10b981' }}>4. Передача дальше</strong>
            <div style={{ fontSize: 'clamp(10px, 2.5vw, 12px)', marginTop: '4px' }}>Выход нейрона становится входом для следующего слоя</div>
          </div>
        </div>
        <div style={{ 
          marginTop: '12px', 
          padding: '8px', 
          background: 'rgba(102,126,234,0.1)', 
          borderRadius: '8px', 
          fontSize: 'clamp(10px, 2.5vw, 12px)' 
        }}>
          <strong>Интерактивность:</strong> Вращайте ползунки весов и входных значений, затем запустите forward pass, чтобы увидеть, как меняется результат!
        </div>
      </div>
      
      <style>{`
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
        
        /* Адаптивные стили для стрелок */
        @media (max-width: 768px) {
          .arrow {
            transform: rotate(90deg);
            display: inline-block;
          }
        }
        
        @media (max-width: 640px) {
          .arrow {
            transform: rotate(90deg);
          }
        }
        
        /* Улучшенная читаемость на мобильных устройствах */
        @media (max-width: 480px) {
          input[type="range"] {
            min-width: 50px;
          }
        }
        
        /* Оптимизация для touch-устройств */
        @media (hover: none) and (pointer: coarse) {
          button, select, input[type="range"] {
            opacity: 0.9;
          }
          
          button:active {
            transform: scale(0.98) !important;
          }
        }
        
        /* Плавная прокрутка для мобильных */
        @media (max-width: 768px) {
          div[style*="overflowX: auto"] {
            -webkit-overflow-scrolling: touch;
          }
        }
      `}</style>
    </div>
  );
};

export default NeuralNetworkDemo;