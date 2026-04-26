import React, { useState, useEffect } from 'react';
import BrowserOnly from './BrowserOnly';

const DataStructureLinear = () => {
  const [activeTab, setActiveTab] = useState('js');
  const [structureType, setStructureType] = useState('linked');
  const [windowWidth, setWindowWidth] = useState(0); 
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    
    setWindowWidth(window.innerWidth);
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobile = windowWidth < 768;
  const isTablet = windowWidth >= 768 && windowWidth < 1024;

  const codeExamples = {
    js: {
      array: `// Создание массива (непрерывная область памяти)
const list = ['Первый', 'Второй', 'Третий', 'Четвертый'];

// Доступ по индексу (O(1)) - мгновенный
console.log(list[2]); // "Третий"

// Добавление в конец
list.push('Пятый');

// Удаление элемента (сдвиг всех последующих)
list.splice(1, 1); // Удаляет "Второй", все сдвигаются`,

      linked: `// Реализация узла связного списка
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// Создание списка
const head = new Node('Первый');
head.next = new Node('Второй');
head.next.next = new Node('Третий');

// Обход списка (O(n)) - последовательный
let current = head;
while (current !== null) {
  console.log(current.value);
  current = current.next;
}

// Вставка нового узла после текущего
const newNode = new Node('Новый');
newNode.next = head.next;
head.next = newNode;`
    },
    py: {
      array: `# Создание списка (динамический массив)
my_list = ['Первый', 'Второй', 'Третий', 'Четвертый']

# Доступ по индексу (O(1))
print(my_list[2])  # "Третий"

# Добавление в конец
my_list.append('Пятый')

# Удаление элемента
del my_list[1]  # Удаляет "Второй", остальные сдвигаются`,

      linked: `# Узел связного списка
class Node:
    def __init__(self, value):
        self.value = value
        self.next = None

# Создание списка
head = Node('Первый')
head.next = Node('Второй')
head.next.next = Node('Третий')

# Обход списка
current = head
while current:
    print(current.value)
    current = current.next

# Вставка нового узла
new_node = Node('Новый')
new_node.next = head.next
head.next = new_node`
    },
    cs: {
      array: `// Создание массива (List<T> в .NET)
var list = new List<string> { "Первый", "Второй", "Третий", "Четвертый" };

// Доступ по индексу (O(1))
Console.WriteLine(list[2]); // "Третий"

// Добавление в конец
list.Add("Пятый");

// Удаление элемента (сдвиг остальных)
list.RemoveAt(1); // Удаляет "Второй", индексы пересчитываются`,

      linked: `// Класс узла связного списка
public class Node
{
    public string Value { get; set; }
    public Node Next { get; set; }
    
    public Node(string value)
    {
        Value = value;
        Next = null;
    }
}

// Создание списка
Node head = new Node("Первый");
head.Next = new Node("Второй");
head.Next.Next = new Node("Третий");

// Обход списка
Node current = head;
while (current != null)
{
    Console.WriteLine(current.Value);
    current = current.Next;
}

// Вставка нового узла
var newNode = new Node("Новый");
newNode.Next = head.Next;
head.Next = newNode;`
    }
  };

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const renderVisualization = () => {
    const getAdaptiveSizes = () => {
      if (isMobile) {
        return { startX: 30, cellWidth: 55, svgWidth: 350, startY: 70 };
      } else if (isTablet) {
        return { startX: 40, cellWidth: 70, svgWidth: 420, startY: 85 };
      } else {
        return { startX: 50, cellWidth: 80, svgWidth: 500, startY: 100 };
      }
    };

    if (structureType === 'array') {
      const data = ['A', 'B', 'C', 'D'];
      const { startX, cellWidth, svgWidth, startY } = getAdaptiveSizes();
      
      return (
        <svg 
          viewBox={`0 0 ${svgWidth} 150`} 
          style={{
            width: '100%',
            maxWidth: isMobile ? '100%' : '600px',
            height: isMobile ? '150px' : '200px',
            border: '1px dashed #ddd',
            backgroundColor: '#fff',
            borderRadius: '4px',
            display: 'block',
          }}
          preserveAspectRatio="xMidYMid meet"
        >
          <defs>
            <linearGradient id="arrayGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#eff6ff" />
              <stop offset="100%" stopColor="#dbeafe" />
            </linearGradient>
          </defs>

          {data.map((item, index) => {
            const x = startX + index * cellWidth;
            const isVisible = x + cellWidth - 10 <= svgWidth - 20;
            if (!isVisible && index > 0) return null;
            
            return (
              <g key={index}>
                <rect 
                  x={x} y={startY - 20} width={cellWidth - 10} height={40} 
                  fill="url(#arrayGradient)"
                  stroke="#3b82f6"
                  strokeWidth="2"
                  rx="4"
                  ry="4"
                />
                <text 
                  x={x - 5} y={startY - 30} 
                  fill="#6b7280"
                  fontSize={isMobile ? '8px' : '10px'}
                  fontWeight="500"
                >
                  [{index}]
                </text>
                <text 
                  x={x + (cellWidth - 10)/2} y={startY} 
                  fill="#1f2937"
                  fontSize={isMobile ? '11px' : '13px'}
                  fontWeight="600"
                  textAnchor="middle"
                  dominantBaseline="middle"
                >
                  {item}
                </text>
              </g>
            );
          })}
          
          <text 
            x={svgWidth/2} y="140" 
            textAnchor="middle" 
            fill="#6b7280" 
            fontSize={isMobile ? '10px' : '12px'}
          >
            🗂️ Непрерывная область памяти
          </text>
        </svg>
      );
    } else {
      const getNodePositions = () => {
        if (isMobile) {
          return [
            { id: 1, val: 'A', x: 60, y: 70 },
            { id: 2, val: 'B', x: 140, y: 70 },
            { id: 3, val: 'C', x: 220, y: 70 },
            { id: 4, val: 'D', x: 300, y: 70 }
          ];
        } else if (isTablet) {
          return [
            { id: 1, val: 'A', x: 80, y: 85 },
            { id: 2, val: 'B', x: 180, y: 85 },
            { id: 3, val: 'C', x: 280, y: 85 },
            { id: 4, val: 'D', x: 380, y: 85 }
          ];
        } else {
          return [
            { id: 1, val: 'A', x: 100, y: 100 },
            { id: 2, val: 'B', x: 200, y: 100 },
            { id: 3, val: 'C', x: 300, y: 100 },
            { id: 4, val: 'D', x: 400, y: 100 }
          ];
        }
      };

      const nodes = getNodePositions();
      const svgWidth = isMobile ? 380 : (isTablet ? 480 : 550);
      const nodeWidth = isMobile ? 50 : 60;

      return (
        <svg 
          viewBox={`0 0 ${svgWidth} 150`} 
          style={{
            width: '100%',
            maxWidth: isMobile ? '100%' : '600px',
            height: isMobile ? '150px' : '200px',
            border: '1px dashed #ddd',
            backgroundColor: '#fff',
            borderRadius: '4px',
            display: 'block',
          }}
          preserveAspectRatio="xMidYMid meet"
        >
          <defs>
            <linearGradient id="linkedGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fef3c7" />
              <stop offset="100%" stopColor="#fde68a" />
            </linearGradient>
            
            <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
              <polygon points="0 0, 10 3.5, 0 7" fill="#f59e0b" />
            </marker>
            
            <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="2" dy="2" stdDeviation="3" floodOpacity="0.15" />
            </filter>
          </defs>
          
          {nodes.slice(0, -1).map((node, idx) => (
            <line 
              key={`line-${idx}`}
              x1={node.x + nodeWidth/2} 
              y1={node.y} 
              x2={nodes[idx + 1].x - nodeWidth/2} 
              y2={nodes[idx + 1].y} 
              stroke="#f59e0b"
              strokeWidth="2.5"
              strokeDasharray={isMobile ? "none" : "5,3"}
              markerEnd="url(#arrowhead)"
            />
          ))}
          
          {nodes.map(node => (
            <g key={node.id} filter="url(#shadow)">
              <rect 
                x={node.x - nodeWidth/2} y={node.y - 20} 
                width={nodeWidth} height={40} 
                fill="url(#linkedGradient)"
                stroke="#f59e0b"
                strokeWidth="2"
                rx="8"
                ry="8"
              />
              <text 
                x={node.x} y={node.y} 
                fill="#78350f"
                fontSize={isMobile ? '12px' : '14px'}
                fontWeight="700"
                textAnchor="middle"
                dominantBaseline="middle"
              >
                {node.val}
              </text>
            </g>
          ))}
          
          <text 
            x={svgWidth/2} y="140" 
            textAnchor="middle" 
            fill="#6b7280" 
            fontSize={isMobile ? '10px' : '12px'}
          >
            Логическая цепочка через указатели
          </text>
        </svg>
      );
    }
  };

  return (
    <div style={{
      fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
      border: '1px solid #e0e0e0',
      borderRadius: '8px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
      backgroundColor: '#ffffff',
      overflow: 'hidden',
      margin: isMobile ? '12px 0' : '20px 0',
    }}>
      <div style={{
        backgroundColor: '#f5f7fa',
        padding: isMobile ? '12px 16px' : '16px 20px',
        borderBottom: '1px solid #e0e0e0',
      }}>
        <h3 style={{
          fontSize: isMobile ? '16px' : '18px',
          fontWeight: '600',
          color: '#1a1a1a',
          margin: 0,
        }}>
          Линейные структуры данных
        </h3>
        <p style={{
          fontSize: isMobile ? '12px' : '14px',
          color: '#555',
          marginTop: isMobile ? '6px' : '8px',
          lineHeight: isMobile ? '1.4' : '1.5',
        }}>
          {isMobile 
            ? "Элементы расположены последовательно. Каждый элемент имеет предыдущий и следующий."
            : "Структуры данных, где элементы расположены последовательно друг за другом. Каждый элемент имеет только одного предшественника и одного последователя, кроме первого и последнего."}
        </p>
      </div>
      
      <div style={{
        display: 'flex',
        borderBottom: '1px solid #e0e0e0',
        backgroundColor: '#fafafa',
        padding: isMobile ? '8px 12px' : '10px 20px',
        gap: isMobile ? '8px' : '10px',
        flexWrap: 'wrap',
      }}>
        <button 
          style={{
            padding: isMobile ? '6px 12px' : '8px 16px',
            cursor: 'pointer',
            fontSize: isMobile ? '12px' : '13px',
            fontWeight: '500',
            color: structureType === 'array' ? '#fff' : '#666',
            border: '1px solid #ccc',
            borderRadius: '4px',
            background: structureType === 'array' ? '#2563eb' : '#fff',
            transition: 'all 0.2s ease',
            flex: isMobile ? '1' : 'auto',
            whiteSpace: 'nowrap',
          }}
          onClick={() => setStructureType('array')}
        >
          Массив
        </button>
        <button 
          style={{
            padding: isMobile ? '6px 12px' : '8px 16px',
            cursor: 'pointer',
            fontSize: isMobile ? '12px' : '13px',
            fontWeight: '500',
            color: structureType === 'linked' ? '#fff' : '#666',
            border: '1px solid #ccc',
            borderRadius: '4px',
            background: structureType === 'linked' ? '#2563eb' : '#fff',
            transition: 'all 0.2s ease',
            flex: isMobile ? '1' : 'auto',
            whiteSpace: 'nowrap',
          }}
          onClick={() => setStructureType('linked')}
        >
          Связный список
        </button>
      </div>

      <div style={{
        display: 'flex',
        borderBottom: '1px solid #e0e0e0',
        backgroundColor: '#fafafa',
        overflowX: 'auto',
        WebkitOverflowScrolling: 'touch',
      }}>
        {['js', 'py', 'cs'].map((lang) => (
          <button 
            key={lang}
            style={{
              padding: isMobile ? '10px 16px' : '12px 24px',
              cursor: 'pointer',
              fontSize: isMobile ? '13px' : '14px',
              fontWeight: '500',
              color: activeTab === lang ? '#2563eb' : '#666',
              border: 'none',
              background: 'transparent',
              transition: 'all 0.2s ease',
              borderBottom: activeTab === lang ? '2px solid #2563eb' : '2px solid transparent',
              whiteSpace: 'nowrap',
            }}
            onClick={() => setActiveTab(lang)}
          >
            {lang === 'js' ? 'JavaScript' : lang === 'py' ? 'Python' : 'C#'}
          </button>
        ))}
      </div>

      <div style={{ position: 'relative' }}>
        <pre style={{
          backgroundColor: '#1e1e1e',
          color: '#d4d4d4',
          padding: isMobile ? '16px' : '20px',
          margin: 0,
          overflowX: 'auto',
          fontSize: isMobile ? '11px' : '13px',
          lineHeight: isMobile ? '1.5' : '1.6',
          fontFamily: '"Fira Code", "Consolas", "Monaco", monospace',
          whiteSpace: 'pre-wrap',
          wordBreak: 'break-word',
          position: 'relative',
        }}>
          <code>{codeExamples[activeTab][structureType]}</code>
          <button 
            style={{
              position: 'absolute',
              top: '10px',
              right: '10px',
              backgroundColor: copied ? '#2e7d32' : '#333',
              color: '#fff',
              border: 'none',
              borderRadius: '4px',
              padding: isMobile ? '4px 10px' : '6px 12px',
              fontSize: isMobile ? '11px' : '12px',
              cursor: 'pointer',
              opacity: 0.9,
              transition: 'all 0.2s',
              zIndex: 10,
            }}
            onClick={() => handleCopy(codeExamples[activeTab][structureType])}
            title="Копировать код"
          >
            {copied ? '✓ Скопировано!' : '📋 Копировать'}
          </button>
        </pre>
        
        {/* Обертка BrowserOnly для визуализации */}
        <div style={{
          padding: isMobile ? '16px' : '20px',
          borderTop: '1px solid #e0e0e0',
          backgroundColor: '#fcfcfc',
          minHeight: isMobile ? '200px' : '250px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '20px',
          overflowX: 'auto',
        }}>
          <BrowserOnly>
            {renderVisualization()}
          </BrowserOnly>
        </div>

        <div style={{
          padding: isMobile ? '12px 16px' : '15px 20px',
          backgroundColor: '#e8f5e9',
          borderLeft: '4px solid #2e7d32',
          margin: isMobile ? '12px' : '10px 20px',
          borderRadius: '0 4px 4px 0',
        }}>
          <div style={{
            fontSize: isMobile ? '12px' : '13px',
            fontWeight: 'bold',
            color: '#1b5e20',
            marginBottom: '5px',
          }}>
            {structureType === 'array' ? 'Преимущества массива:' : 'Особенности связного списка:'}
          </div>
          <div style={{
            fontSize: isMobile ? '11px' : '12px',
            color: '#2e7d32',
            lineHeight: isMobile ? '1.4' : '1.5',
            whiteSpace: 'pre-line',
          }}>
            {structureType === 'array' 
              ? "Мгновенный доступ по индексу O(1)\nЭкономия памяти\nХорошая локальность данных\nМедленная вставка/удаление O(n)\nФиксированный размер (в статическом массиве)"
              : "Быстрая вставка/удаление O(1) в начале\nДинамический размер\nЭффективное использование памяти\nНет прямого доступа по индексу O(n)\nДополнительная память на указатели"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataStructureLinear;