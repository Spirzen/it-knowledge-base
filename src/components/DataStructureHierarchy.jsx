import React, { useState } from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';

// Основной компонент с логикой
const DataStructureHierarchyLogic = () => {
  const [activeTab, setActiveTab] = useState('xml');

  const content = {
    xml: {
      title: "XML (Extensible Markup Language)",
      desc: "Текстовый формат хранения данных с использованием тегов. Структура строится на паре открывающих и закрывающих тегов. Элементы могут иметь атрибуты и текстовое содержимое. Иерархия формируется путем вложения элементов друг в друга.",
      code: `<library>
  <book id="101">
    <title lang="ru">Введение в программирование</title>
    <author>Иван Иванов</author>
    <year>2024</year>
    <price currency="RUB">1500</price>
  </book>
  <book id="102">
    <title lang="en">Advanced Algorithms</title>
    <author>Jane Doe</author>
    <year>2023</year>
    <price currency="USD">45</price>
  </book>
</library>`,
      tree: [
        { name: "library", children: [
          { 
            name: "book (id=101)", children: [
              { name: "title (lang=ru)", text: "Введение в программирование" },
              { name: "author", text: "Иван Иванов" },
              { name: "year", text: "2024" },
              { name: "price (currency=RUB)", text: "1500" }
            ] 
          },
          { 
            name: "book (id=102)", children: [
              { name: "title (lang=en)", text: "Advanced Algorithms" },
              { name: "author", text: "Jane Doe" },
              { name: "year", text: "2023" },
              { name: "price (currency=USD)", text: "45" }
            ] 
          }
        ]}
      ]
    },
    json: {
      title: "JSON (JavaScript Object Notation)",
      desc: "Текстовый формат обмена данными, основанный на объектах JavaScript. Данные представлены в виде пар ключ-значение. Вложенные объекты и массивы создают естественную иерархию. Формат легкий, читаемый человеком и машиной.",
      code: `{
  "library": {
    "books": [
      {
        "id": "101",
        "title": "Введение в программирование",
        "author": "Иван Иванов",
        "year": 2024,
        "price": {
          "amount": 1500,
          "currency": "RUB"
        }
      },
      {
        "id": "102",
        "title": "Advanced Algorithms",
        "author": "Jane Doe",
        "year": 2023,
        "price": {
          "amount": 45,
          "currency": "USD"
        }
      }
    ]
  }
}`,
      tree: [
        { name: "root", children: [
          { 
            name: "library", children: [
              { 
                name: "books []", children: [
                  { 
                    name: "{object}", children: [
                      { name: "id", value: "\"101\"" },
                      { name: "title", value: "\"Введение в программирование\"" },
                      { name: "author", value: "\"Иван Иванов\"" },
                      { name: "year", value: "2024" },
                      { 
                        name: "price {object}", children: [
                          { name: "amount", value: "1500" },
                          { name: "currency", value: "\"RUB\"" }
                        ] 
                      }
                    ] 
                  },
                  { 
                    name: "{object}", children: [
                      { name: "id", value: "\"102\"" },
                      { name: "title", value: "\"Advanced Algorithms\"" },
                      { name: "author", value: "\"Jane Doe\"" },
                      { name: "year", value: "2023" },
                      { 
                        name: "price {object}", children: [
                          { name: "amount", value: "45" },
                          { name: "currency", value: "\"USD\"" }
                        ] 
                      }
                    ] 
                  }
                ] 
              }
            ] 
          }
        ]}
      ]
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
      margin: '16px',
      '@media (minWidth: 768px)': { margin: '20px 0' },
    },
    header: {
      backgroundColor: '#f5f7fa',
      padding: '16px',
      borderBottom: '1px solid #e0e0e0',
      '@media (minWidth: 768px)': { padding: '16px 20px' },
    },
    title: {
      fontSize: '18px',
      fontWeight: '600',
      color: '#1a1a1a',
      margin: 0,
      '@media (maxWidth: 480px)': { fontSize: '16px' },
    },
    description: {
      fontSize: '13px',
      color: '#555',
      marginTop: '6px',
      lineHeight: '1.4',
      '@media (minWidth: 768px)': { fontSize: '14px', marginTop: '8px', lineHeight: '1.5' },
    },
    tabs: {
      display: 'flex',
      borderBottom: '1px solid #e0e0e0',
      backgroundColor: '#fafafa',
      flexWrap: 'wrap',
    },
    tab: {
      flex: '1 0 auto',
      padding: '10px 16px',
      cursor: 'pointer',
      fontSize: '13px',
      fontWeight: '500',
      color: '#666',
      border: 'none',
      background: 'transparent',
      transition: 'all 0.2s ease',
      borderBottom: '2px solid transparent',
      textAlign: 'center',
      whiteSpace: 'nowrap',
      '@media (maxWidth: 480px)': { padding: '8px 12px', fontSize: '12px', whiteSpace: 'normal', wordBreak: 'keep-all' },
      '@media (minWidth: 768px)': { padding: '12px 24px', fontSize: '14px' },
    },
    activeTab: {
      color: '#2563eb',
      borderBottomColor: '#2563eb',
      backgroundColor: '#fff',
    },
    content: { position: 'relative' },
    codeBlock: {
      backgroundColor: '#1e1e1e',
      color: '#d4d4d4',
      padding: '16px',
      margin: 0,
      overflowX: 'auto', // Горизонтальная прокрутка
      fontSize: '11px',
      lineHeight: '1.5',
      fontFamily: '"Fira Code", "Consolas", "Monaco", monospace',
      whiteSpace: 'pre', // Сохраняем пробелы и переносы строк, но НЕ переносим по словам
      wordBreak: 'normal', // Отключаем перенос слов
      maxHeight: '300px',
      overflowY: 'auto',
      '@media (minWidth: 768px)': { padding: '20px', fontSize: '13px', lineHeight: '1.6', maxHeight: 'none', overflowY: 'visible' },
    },
    copyButton: {
      position: 'fixed',
      bottom: '16px',
      right: '16px',
      backgroundColor: '#333',
      color: '#fff',
      border: 'none',
      borderRadius: '20px',
      padding: '8px 16px',
      fontSize: '12px',
      cursor: 'pointer',
      opacity: 0.9,
      transition: 'all 0.2s',
      zIndex: 10,
      boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
      '@media (minWidth: 768px)': { position: 'absolute', top: '10px', right: '10px', bottom: 'auto', borderRadius: '4px', padding: '6px 12px', boxShadow: 'none' },
    },
    hierarchyPreview: {
      padding: '16px',
      borderTop: '1px solid #e0e0e0',
      backgroundColor: '#fcfcfc',
      minHeight: '250px',
      '@media (minWidth: 768px)': { padding: '20px', minHeight: '300px' },
    },
    previewTitle: {
      fontSize: '13px',
      fontWeight: '600',
      color: '#333',
      marginBottom: '12px',
      '@media (minWidth: 768px)': { fontSize: '14px', marginBottom: '15px' },
    },
    treeContainer: {
      paddingLeft: '12px',
      overflowX: 'auto',
      '@media (minWidth: 768px)': { paddingLeft: '20px' },
    },
    treeNode: {
      marginBottom: '6px',
      position: 'relative',
      '@media (minWidth: 768px)': { marginBottom: '4px' },
    },
    nodeLabel: {
      display: 'inline-block',
      padding: '2px 6px',
      backgroundColor: '#fff',
      border: '1px solid #e0e0e0',
      borderRadius: '4px',
      fontSize: '11px',
      color: '#333',
      marginRight: '6px',
      verticalAlign: 'middle',
      wordBreak: 'break-word',
      maxWidth: 'calc(100% - 80px)',
      '@media (minWidth: 768px)': { fontSize: '13px', padding: '2px 8px', marginRight: '10px', maxWidth: 'none' },
    },
    nodeValue: {
      display: 'inline-block',
      padding: '2px 6px',
      backgroundColor: '#e8f5e9',
      border: '1px solid #c8e6c9',
      borderRadius: '4px',
      fontSize: '10px',
      color: '#2e7d32',
      fontStyle: 'italic',
      wordBreak: 'break-word',
      '@media (minWidth: 768px)': { fontSize: '12px', padding: '2px 6px' },
    },
    footnote: {
      fontSize: '11px',
      color: '#888',
      marginTop: '12px',
      lineHeight: '1.4',
      '@media (minWidth: 768px)': { fontSize: '12px', marginTop: '15px' },
    },
  };

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    alert('Код скопирован в буфер обмена');
  };

  const renderTree = (nodes, level = 0) => {
    return nodes.map((node, index) => (
      <div key={index} style={styles.treeNode}>
        <span style={styles.nodeLabel}>
          {node.name}
          {node.value && ` = ${node.value}`}
          {node.text && ` → ${node.text.length > 30 ? node.text.slice(0, 27) + '...' : node.text}`}
        </span>
        {node.children && (
          <div style={{ marginLeft: '8px' }}>
            {renderTree(node.children, level + 1)}
          </div>
        )}
      </div>
    ));
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h3 style={styles.title}>{content[activeTab].title}</h3>
        <p style={styles.description}>{content[activeTab].desc}</p>
      </div>
      
      <div style={styles.tabs}>
        <button 
          style={{...styles.tab, ...(activeTab === 'xml' ? styles.activeTab : {})}}
          onClick={() => setActiveTab('xml')}
        >
          XML
        </button>
        <button 
          style={{...styles.tab, ...(activeTab === 'json' ? styles.activeTab : {})}}
          onClick={() => setActiveTab('json')}
        >
          JSON
        </button>
      </div>

      <div style={styles.content}>
        <div style={{ position: 'relative' }}>
          <pre style={styles.codeBlock}>
            <code>{content[activeTab].code}</code>
            <button 
              style={styles.copyButton}
              onClick={() => handleCopy(content[activeTab].code)}
              title="Копировать код"
            >
              📋 Копировать
            </button>
          </pre>
        </div>
        
        <div style={styles.hierarchyPreview}>
          <div style={styles.previewTitle}>Древовидная структура данных:</div>
          <div style={styles.treeContainer}>
            {renderTree(content[activeTab].tree)}
          </div>
          <p style={styles.footnote}>
            Древовидная структура представляет данные в виде родительских и дочерних узлов. 
            Корневой элемент содержит другие элементы, которые могут содержать свои подэлементы.
            Такая организация позволяет эффективно хранить вложенные данные и легко навигировать по ним.
          </p>
        </div>
      </div>
    </div>
  );
};

// Экспорт компонента, обернутого в BrowserOnly
export default function DataStructureHierarchy() {
  return (
    <BrowserOnly fallback={<div>Загрузка интерфейса структуры данных...</div>}>
      {() => <DataStructureHierarchyLogic />}
    </BrowserOnly>
  );
}