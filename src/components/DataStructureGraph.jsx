import React, { useState, useEffect } from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';

// Вся логика компонента с хуками
const DataStructureGraphLogic = () => {
  const [activeTab, setActiveTab] = useState('js');
  const [graphType, setGraphType] = useState('directed');
  const [isMobile, setIsMobile] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const graphData = {
    directed: {
      title: "Ориентированный граф",
      desc: "Структура данных, состоящая из вершин и направленных рёбер. Каждое ребро имеет направление от одной вершины к другой. Используется для моделирования зависимостей, потоков данных, маршрутов с односторонним движением.",
      nodes: [
        { id: 'A', x: 50, y: 10 },
        { id: 'B', x: 20, y: 50 },
        { id: 'C', x: 80, y: 50 },
        { id: 'D', x: 50, y: 90 }
      ],
      edges: [
        { from: 'A', to: 'B' },
        { from: 'A', to: 'C' },
        { from: 'B', to: 'D' },
        { from: 'C', to: 'D' },
        { from: 'D', to: 'A' }
      ]
    },
    undirected: {
      title: "Неориентированный граф",
      desc: "Структура данных, где связи между вершинами двусторонние. Рёбра не имеют направления, что означает возможность перемещения в любую сторону. Применяется для моделирования социальных сетей, карт дорог без одностороннего движения.",
      nodes: [
        { id: 'X', x: 30, y: 30 },
        { id: 'Y', x: 70, y: 30 },
        { id: 'Z', x: 50, y: 80 }
      ],
      edges: [
        { from: 'X', to: 'Y' },
        { from: 'X', to: 'Z' },
        { from: 'Y', to: 'Z' }
      ]
    },
    weighted: {
      title: "Взвешенный граф",
      desc: "Граф, где каждое ребро имеет числовое значение (вес). Вес может обозначать расстояние, стоимость, время или пропускную способность. Критически важен для алгоритмов поиска кратчайшего пути.",
      nodes: [
        { id: 'P', x: 40, y: 20 },
        { id: 'Q', x: 60, y: 20 },
        { id: 'R', x: 50, y: 70 }
      ],
      edges: [
        { from: 'P', to: 'Q', weight: 5 },
        { from: 'P', to: 'R', weight: 10 },
        { from: 'Q', to: 'R', weight: 3 }
      ]
    }
  };

  const codeExamples = {
    js: {
      directed: `// Создание ориентированного графа (Список смежности)
const graph = {
  A: ['B', 'C'],
  B: ['D'],
  C: ['D'],
  D: ['A']
};

// Обход в глубину (DFS)
function dfs(node, visited = new Set()) {
  if (visited.has(node)) return;
  console.log("Посещаем:", node);
  visited.add(node);
  
  for (let neighbor of graph[node]) {
    dfs(neighbor, visited);
  }
}

dfs('A');`,
      undirected: `// Создание неориентированного графа
const graph = {
  X: ['Y', 'Z'],
  Y: ['X', 'Z'],
  Z: ['X', 'Y']
};

// Добавление ребра (двунаправленное)
function addEdge(u, v) {
  if (!graph[u]) graph[u] = [];
  if (!graph[v]) graph[v] = [];
  graph[u].push(v);
  graph[v].push(u);
}`,
      weighted: `// Создание взвешенного графа
const graph = {
  P: { Q: 5, R: 10 },
  Q: { P: 5, R: 3 },
  R: { P: 10, Q: 3 }
};

// Алгоритм Дейкстры (упрощенно)
// Поиск кратчайшего пути от P до R
// Путь P -> Q -> R имеет общую стоимость 5 + 3 = 8
// Прямой путь P -> R стоит 10
// Оптимальный путь: P -> Q -> R`
    },
    py: {
      directed: `# Создание ориентированного графа
graph = {
    'A': ['B', 'C'],
    'B': ['D'],
    'C': ['D'],
    'D': ['A']
}

# Обход в ширину (BFS)
from collections import deque

def bfs(start):
    queue = deque([start])
    visited = set()
    
    while queue:
        node = queue.popleft()
        if node not in visited:
            print(f"Посещаем: {node}")
            visited.add(node)
            for neighbor in graph.get(node, []):
                if neighbor not in visited:
                    queue.append(neighbor)

bfs('A')`,
      undirected: `# Создание неориентированного графа
graph = {
    'X': ['Y', 'Z'],
    'Y': ['X', 'Z'],
    'Z': ['X', 'Y']
}

# Добавление ребра
def add_edge(u, v):
    if u not in graph: graph[u] = []
    if v not in graph: graph[v] = []
    graph[u].append(v)
    graph[v].append(u)`,
      weighted: `# Взвешенный граф
graph = {
    'P': {'Q': 5, 'R': 10},
    'Q': {'P': 5, 'R': 3},
    'R': {'P': 10, 'Q': 3}
}

# Веса позволяют вычислять минимальные расстояния
# Использование библиотеки NetworkX для сложных расчетов
# import networkx as nx
# G = nx.DiGraph(graph)`
    },
    cs: {
      directed: `// Создание ориентированного графа (Dictionary в C#)
var graph = new Dictionary<string, List<string>>
{
    { "A", new List<string> { "B", "C" } },
    { "B", new List<string> { "D" } },
    { "C", new List<string> { "D" } },
    { "D", new List<string> { "A" } }
};

// Метод обхода
void Traverse(string startNode, HashSet<string> visited)
{
    if (visited.Contains(startNode)) return;
    
    Console.WriteLine($"Посещаем: {startNode}");
    visited.Add(startNode);
    
    foreach (var neighbor in graph[startNode])
    {
        Traverse(neighbor, visited);
    }
}

Traverse("A", new HashSet<string>());`,
      undirected: `// Неориентированный граф
var graph = new Dictionary<string, List<string>>
{
    { "X", new List<string> { "Y", "Z" } },
    { "Y", new List<string> { "X", "Z" } },
    { "Z", new List<string> { "X", "Y" } }
};

// Добавление двунаправленного ребра
void AddEdge(string u, string v)
{
    if (!graph.ContainsKey(u)) graph[u] = new List<string>();
    if (!graph.ContainsKey(v)) graph[v] = new List<string>();
    
    graph[u].Add(v);
    graph[v].Add(u);
}`,
      weighted: `// Взвешенный граф
var graph = new Dictionary<string, Dictionary<string, int>>
{
    { "P", new Dictionary<string, int> { { "Q", 5 }, { "R", 10 } } },
    { "Q", new Dictionary<string, int> { { "P", 5 }, { "R", 3 } } },
    { "R", new Dictionary<string, int> { { "P", 10 }, { "Q", 3 } } }
};

// Вес ребра используется для вычисления стоимости пути
// Алгоритм Дейкстры находит путь P->Q->R (стоимость 8) как оптимальный`
    }
  };

  const styles = {
    container: {
      fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
      border: '1px solid #e0e0e0',
      borderRadius: '8px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
      backgroundColor: '#ffffff',
      overflow: 'hidden',
      margin: '20px 0',
      maxWidth: '100%',
    },
    header: {
      backgroundColor: '#f5f7fa',
      padding: isMobile ? '12px 16px' : '16px 20px',
      borderBottom: '1px solid #e0e0e0',
    },
    title: {
      fontSize: isMobile ? '16px' : '18px',
      fontWeight: '600',
      color: '#1a1a1a',
      margin: 0,
    },
    description: {
      fontSize: isMobile ? '13px' : '14px',
      color: '#555',
      marginTop: '8px',
      lineHeight: '1.5',
    },
    tabs: {
      display: 'flex',
      borderBottom: '1px solid #e0e0e0',
      backgroundColor: '#fafafa',
      overflowX: 'auto',
      WebkitOverflowScrolling: 'touch',
      scrollbarWidth: 'thin',
    },
    tab: {
      padding: isMobile ? '10px 16px' : '12px 24px',
      cursor: 'pointer',
      fontSize: isMobile ? '13px' : '14px',
      fontWeight: '500',
      color: '#666',
      border: 'none',
      background: 'transparent',
      transition: 'all 0.2s ease',
      borderBottom: '2px solid transparent',
      whiteSpace: 'nowrap',
      flexShrink: 0,
    },
    activeTab: {
      color: '#2563eb',
      borderBottomColor: '#2563eb',
      backgroundColor: '#fff',
    },
    content: {
      padding: 0,
      position: 'relative',
    },
    codeBlock: {
      backgroundColor: '#1e1e1e',
      color: '#d4d4d4',
      padding: isMobile ? '16px' : '20px',
      margin: 0,
      overflowX: 'auto',
      fontSize: isMobile ? '11px' : '13px',
      lineHeight: '1.6',
      fontFamily: '"Fira Code", "Consolas", "Monaco", monospace',
      whiteSpace: 'pre-wrap',      // Включаем перенос строк
      wordBreak: 'break-word',      // Перенос длинных слов
      wordWrap: 'break-word',       // Дополнительный перенос
      position: 'relative',
    },
    copyButton: {
      position: 'absolute',
      top: '10px',
      right: '10px',
      backgroundColor: '#333',
      color: '#fff',
      border: 'none',
      borderRadius: '4px',
      padding: isMobile ? '4px 8px' : '6px 12px',
      fontSize: isMobile ? '10px' : '12px',
      cursor: 'pointer',
      opacity: 0.8,
      transition: 'opacity 0.2s',
      zIndex: 1,
    },
    graphContainer: {
      padding: isMobile ? '16px' : '20px',
      borderTop: '1px solid #e0e0e0',
      backgroundColor: '#fcfcfc',
      minHeight: isMobile ? 'auto' : '300px',
      position: 'relative',
      display: 'flex',
      flexDirection: isMobile ? 'column' : 'row',
      justifyContent: 'center',
      alignItems: 'center',
      gap: isMobile ? '16px' : '0',
    },
    svgCanvas: {
      width: '100%',
      height: 'auto',
      maxWidth: isMobile ? '300px' : '500px',
      minHeight: isMobile ? '200px' : '250px',
      border: '1px dashed #ddd',
      backgroundColor: '#fff',
      borderRadius: '4px',
      display: 'block',
    },
    nodeCircle: {
      fill: '#fff',
      stroke: '#2563eb',
      strokeWidth: '2',
      cursor: 'pointer',
      transition: 'all 0.2s',
    },
    nodeText: {
      fill: '#333',
      fontSize: isMobile ? '12px' : '14px',
      fontWeight: 'bold',
      textAnchor: 'middle',
      dominantBaseline: 'middle',
      pointerEvents: 'none',
    },
    edgeLine: {
      stroke: '#999',
      strokeWidth: '2',
      fill: 'none',
    },
    arrowHead: {
      fill: '#999',
    },
    weightLabel: {
      fill: '#555',
      fontSize: isMobile ? '10px' : '12px',
      textAnchor: 'middle',
      dominantBaseline: 'middle',
    },
    typeSelector: {
      padding: isMobile ? '10px 16px' : '10px 20px',
      borderBottom: '1px solid #e0e0e0',
      display: 'flex',
      gap: '8px',
      justifyContent: 'center',
      backgroundColor: '#f9f9f9',
      flexWrap: 'wrap',
    },
    typeBtn: {
      padding: isMobile ? '6px 10px' : '6px 12px',
      border: '1px solid #ccc',
      borderRadius: '4px',
      backgroundColor: '#fff',
      cursor: 'pointer',
      fontSize: isMobile ? '11px' : '12px',
      transition: 'all 0.2s',
      whiteSpace: 'nowrap',
    },
    activeTypeBtn: {
      backgroundColor: '#2563eb',
      color: '#fff',
      borderColor: '#2563eb',
    },
    infoBox: {
      padding: isMobile ? '12px 16px' : '15px 20px',
      backgroundColor: '#e8f5e9',
      borderLeft: '4px solid #2e7d32',
      borderRadius: '0 4px 4px 0',
      maxWidth: isMobile ? '100%' : '300px',
      marginTop: isMobile ? '0' : '0',
      marginLeft: isMobile ? '0' : '20px',
    },
    infoTitle: {
      fontSize: isMobile ? '12px' : '13px',
      fontWeight: 'bold',
      color: '#1b5e20',
      marginBottom: '5px',
    },
    infoText: {
      fontSize: isMobile ? '11px' : '12px',
      color: '#2e7d32',
      lineHeight: '1.4',
    }
  };

  const handleCopy = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Ошибка копирования:', err);
    }
  };

  const renderGraph = () => {
    const currentData = graphData[graphType];
    const nodes = currentData.nodes;
    const edges = currentData.edges;

    const padding = 20;
    const width = isMobile ? 300 : 400;
    const height = isMobile ? 200 : 250;

    const mapX = (val) => padding + (val / 100) * (width - padding * 2);
    const mapY = (val) => padding + (val / 100) * (height - padding * 2);

    return (
      <svg viewBox={`0 0 ${width} ${height}`} style={styles.svgCanvas}>
        {edges.map((edge, index) => {
          const fromNode = nodes.find(n => n.id === edge.from);
          const toNode = nodes.find(n => n.id === edge.to);
          
          if (!fromNode || !toNode) return null;

          const x1 = mapX(fromNode.x);
          const y1 = mapY(fromNode.y);
          const x2 = mapX(toNode.x);
          const y2 = mapY(toNode.y);

          if (graphType === 'undirected') {
            return (
              <line 
                key={`edge-${index}`} 
                x1={x1} y1={y1} x2={x2} y2={y2} 
                style={styles.edgeLine} 
              />
            );
          }

          const angle = Math.atan2(y2 - y1, x2 - x1);
          const headLength = isMobile ? 6 : 10;
          const ax = x2 - headLength * Math.cos(angle - Math.PI / 6);
          const ay = y2 - headLength * Math.sin(angle - Math.PI / 6);
          const bx = x2 - headLength * Math.cos(angle + Math.PI / 6);
          const by = y2 - headLength * Math.sin(angle + Math.PI / 6);

          if (graphType === 'weighted') {
            const midX = (x1 + x2) / 2;
            const midY = (y1 + y2) / 2;
            const offsetX = (y2 - y1) > 0 ? 5 : -5;
            const offsetY = (x2 - x1) > 0 ? 5 : -5;
             
            return (
              <g key={`edge-${index}`}>
                <path d={`M${x1},${y1} L${x2},${y2}`} style={styles.edgeLine} />
                <polygon points={`${ax},${ay} ${x2},${y2} ${bx},${by}`} style={styles.arrowHead} />
                <text x={midX + offsetX} y={midY + offsetY} style={styles.weightLabel}>
                  {edge.weight}
                </text>
              </g>
            );
          } else {
            return (
              <g key={`edge-${index}`}>
                <line x1={x1} y1={y1} x2={x2} y2={y2} style={styles.edgeLine} />
                <polygon points={`${ax},${ay} ${x2},${y2} ${bx},${by}`} style={styles.arrowHead} />
              </g>
            );
          }
        })}

        {nodes.map((node) => {
          const radius = isMobile ? 16 : 20;
          return (
            <g key={node.id}>
              <circle 
                cx={mapX(node.x)} 
                cy={mapY(node.y)} 
                r={radius} 
                style={styles.nodeCircle} 
              />
              <text 
                x={mapX(node.x)} 
                y={mapY(node.y)} 
                style={styles.nodeText}
              >
                {node.id}
              </text>
            </g>
          );
        })}
      </svg>
    );
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h3 style={styles.title}>{graphData[graphType].title}</h3>
        <p style={styles.description}>{graphData[graphType].desc}</p>
      </div>
      
      <div style={styles.typeSelector}>
        <button 
          style={{...styles.typeBtn, ...(graphType === 'directed' ? styles.activeTypeBtn : {})}}
          onClick={() => setGraphType('directed')}
        >
          Ориентированный
        </button>
        <button 
          style={{...styles.typeBtn, ...(graphType === 'undirected' ? styles.activeTypeBtn : {})}}
          onClick={() => setGraphType('undirected')}
        >
          Неориентированный
        </button>
        <button 
          style={{...styles.typeBtn, ...(graphType === 'weighted' ? styles.activeTypeBtn : {})}}
          onClick={() => setGraphType('weighted')}
        >
          Взвешенный
        </button>
      </div>

      <div style={styles.tabs}>
        <button 
          style={{...styles.tab, ...(activeTab === 'js' ? styles.activeTab : {})}}
          onClick={() => setActiveTab('js')}
        >
          JavaScript
        </button>
        <button 
          style={{...styles.tab, ...(activeTab === 'py' ? styles.activeTab : {})}}
          onClick={() => setActiveTab('py')}
        >
          Python
        </button>
        <button 
          style={{...styles.tab, ...(activeTab === 'cs' ? styles.activeTab : {})}}
          onClick={() => setActiveTab('cs')}
        >
          C#
        </button>
      </div>

      <div style={styles.content}>
        <div style={{position: 'relative'}}>
          <pre style={styles.codeBlock}>
            <code style={{whiteSpace: 'pre-wrap', wordBreak: 'break-word'}}>
              {codeExamples[activeTab][graphType]}
            </code>
          </pre>
          <button 
            style={styles.copyButton}
            onClick={() => handleCopy(codeExamples[activeTab][graphType])}
            title="Копировать код"
          >
            {copied ? (isMobile ? '✅' : 'Скопировано!') : (isMobile ? '📋' : 'Копировать')}
          </button>
        </div>
        
        <div style={styles.graphContainer}>
          {renderGraph()}
          <div style={styles.infoBox}>
            <div style={styles.infoTitle}>Как читать граф:</div>
            <div style={styles.infoText}>
              {graphType === 'directed' && "Круги — это вершины (узлы). Стрелки показывают направление связи. Вы можете двигаться только по стрелкам."}
              {graphType === 'undirected' && "Круги — это вершины. Линии соединяют их без направления. Перемещение возможно в обе стороны между любыми связанными вершинами."}
              {graphType === 'weighted' && "Цифры рядом со стрелками — это веса рёбер. Они определяют «цену» перехода между вершинами. Алгоритмы используют эти числа для поиска оптимальных путей."}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Экспорт компонента, обернутого в BrowserOnly
export default function DataStructureGraph() {
  return (
    <BrowserOnly fallback={<div>Загрузка графа...</div>}>
      {() => <DataStructureGraphLogic />}
    </BrowserOnly>
  );
};