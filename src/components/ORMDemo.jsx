import React, { useState } from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';

const ORMDemo = () => {
  const [activeTab, setActiveTab] = useState('visual');
  const [selectedEntity, setSelectedEntity] = useState('user');
  const [showQuery, setShowQuery] = useState(false);
  const [queryResult, setQueryResult] = useState(null);

  const entities = {
    user: {
      name: 'User',
      table: 'users',
      fields: [
        { name: 'id', type: 'BIGINT', pk: true, auto: true, ormType: 'Long' },
        { name: 'username', type: 'VARCHAR(50)', nullable: false, ormType: 'String' },
        { name: 'email', type: 'VARCHAR(100)', nullable: false, unique: true, ormType: 'String' },
        { name: 'created_at', type: 'TIMESTAMP', default: 'CURRENT_TIMESTAMP', ormType: 'LocalDateTime' }
      ],
      relations: [
        { type: 'OneToMany', target: 'Post', mappedBy: 'author' },
        { type: 'ManyToMany', target: 'Role', joinTable: 'user_roles' }
      ]
    },
    post: {
      name: 'Post',
      table: 'posts',
      fields: [
        { name: 'id', type: 'BIGINT', pk: true, auto: true, ormType: 'Long' },
        { name: 'title', type: 'VARCHAR(200)', nullable: false, ormType: 'String' },
        { name: 'content', type: 'TEXT', ormType: 'String' },
        { name: 'author_id', type: 'BIGINT', fk: true, ormType: 'User' }
      ],
      relations: [
        { type: 'ManyToOne', target: 'User', field: 'author', joinColumn: 'author_id' }
      ]
    },
    role: {
      name: 'Role',
      table: 'roles',
      fields: [
        { name: 'id', type: 'BIGINT', pk: true, auto: true, ormType: 'Long' },
        { name: 'name', type: 'VARCHAR(50)', nullable: false, ormType: 'String' }
      ],
      relations: [
        { type: 'ManyToMany', target: 'User', mappedBy: 'roles' }
      ]
    }
  };

  const currentEntity = entities[selectedEntity];

  const ormQueries = {
    user: {
      find: `const user = await userRepository.findOne({
  where: { id: 1 },
  relations: ['posts', 'roles']
});`,
      create: `const user = new User();
user.username = "john_doe";
user.email = "john@example.com";
await userRepository.save(user);`,
      update: `await userRepository.update(
  { id: 1 },
  { email: "newemail@example.com" }
);`
    },
    post: {
      find: `const posts = await postRepository.find({
  where: { author: { id: 1 } },
  relations: ['author']
});`,
      create: `const post = new Post();
post.title = "ORM Tutorial";
post.content = "Content...";
post.author = user;
await postRepository.save(post);`,
      update: `await postRepository.update(
  { id: 1 },
  { title: "Updated Title" }
);`
    },
    role: {
      find: `const user = await userRepository.findOne({
  where: { id: 1 },
  relations: ['roles']
});`,
      create: `const role = new Role();
role.name = "ADMIN";
await roleRepository.save(role);`,
      update: `user.roles.push(adminRole);
await userRepository.save(user);`
    }
  };

  const handleExecuteQuery = (queryType) => {
    setShowQuery(true);
    setTimeout(() => {
      setQueryResult({
        success: true,
        message: `✅ ${queryType === 'find' ? 'Найдено 3 записи' : queryType === 'create' ? 'Создана новая запись (ID: 42)' : 'Обновлена 1 запись'}`
      });
    }, 300);
  };

  const styles = {
    container: {
      background: 'linear-gradient(135deg, #0f0c29, #302b63, #24243e)',
      borderRadius: 'clamp(12px, 4vw, 20px)',
      padding: 'clamp(0.8rem, 3vw, 1.2rem)',
      margin: 'clamp(1rem, 3vw, 1.5rem) 0',
      color: '#e0e0e0',
      fontFamily: 'system-ui, -apple-system, sans-serif',
      boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.3)',
      border: '1px solid rgba(255, 255, 255, 0.1)'
    },
    header: {
      margin: '0 0 0.3rem 0',
      fontSize: 'clamp(1.1rem, 4vw, 1.4rem)',
      color: '#fff',
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem'
    },
    subtitle: {
      color: '#a0a0c0',
      fontSize: 'clamp(0.75rem, 2.5vw, 0.85rem)',
      marginBottom: 'clamp(0.8rem, 3vw, 1.2rem)',
      paddingBottom: 'clamp(0.5rem, 2vw, 0.8rem)',
      borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
    },
    tabs: {
      display: 'flex',
      gap: 'clamp(0.3rem, 2vw, 0.5rem)',
      marginBottom: 'clamp(0.8rem, 3vw, 1.2rem)',
      borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
      paddingBottom: '0.5rem',
      flexWrap: 'wrap'
    },
    tab: (active) => ({
      background: active ? 'linear-gradient(135deg, #667eea, #764ba2)' : 'transparent',
      border: 'none',
      padding: 'clamp(0.3rem, 2vw, 0.4rem) clamp(0.6rem, 3vw, 1rem)',
      borderRadius: '6px',
      cursor: 'pointer',
      color: active ? 'white' : '#a0a0c0',
      fontSize: 'clamp(0.75rem, 2.5vw, 0.85rem)',
      transition: 'all 0.2s',
      whiteSpace: 'nowrap',
      '@media (max-width: 480px)': {
        whiteSpace: 'normal'
      }
    }),
    mappingRow: {
      display: 'flex',
      alignItems: 'stretch',
      gap: 'clamp(0.8rem, 3vw, 1rem)',
      marginBottom: '1rem',
      '@media (max-width: 768px)': {
        flexDirection: 'column'
      }
    },
    halfPanel: {
      flex: 1,
      background: 'rgba(0, 0, 0, 0.3)',
      borderRadius: '12px',
      padding: 'clamp(0.6rem, 2.5vw, 0.8rem)',
      backdropFilter: 'blur(10px)',
      minWidth: 0
    },
    panelTitle: {
      fontSize: 'clamp(0.85rem, 2.8vw, 0.95rem)',
      marginBottom: '0.8rem',
      color: '#8ec07c',
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      justifyContent: 'space-between',
      borderBottom: '1px solid rgba(255,255,255,0.1)',
      paddingBottom: '0.3rem',
      flexWrap: 'wrap'
    },
    tableVisual: {
      background: '#0d1117',
      borderRadius: '8px',
      overflow: 'auto',
      border: '1px solid #2d2d3d',
      fontSize: 'clamp(0.65rem, 2.2vw, 0.75rem)',
      maxWidth: '100%'
    },
    tableHeader: {
      background: 'rgba(102, 126, 234, 0.2)',
      padding: 'clamp(0.3rem, 1.5vw, 0.4rem) clamp(0.4rem, 2vw, 0.6rem)',
      fontWeight: 'bold',
      borderBottom: '1px solid #2d2d3d',
      display: 'grid',
      gridTemplateColumns: '1fr 1.2fr 0.8fr',
      gap: '0.5rem',
      minWidth: '280px'
    },
    tableRow: {
      display: 'grid',
      gridTemplateColumns: '1fr 1.2fr 0.8fr',
      padding: 'clamp(0.2rem, 1.2vw, 0.3rem) clamp(0.4rem, 2vw, 0.6rem)',
      borderBottom: '1px solid rgba(255,255,255,0.05)',
      gap: '0.5rem',
      minWidth: '280px'
    },
    classVisual: {
      background: '#0d1117',
      borderRadius: '8px',
      border: '1px solid #2d2d3d',
      overflow: 'auto',
      fontSize: 'clamp(0.65rem, 2.2vw, 0.75rem)',
      maxWidth: '100%'
    },
    className: {
      background: 'rgba(102, 126, 234, 0.2)',
      padding: 'clamp(0.3rem, 1.5vw, 0.4rem) clamp(0.4rem, 2vw, 0.6rem)',
      fontWeight: 'bold',
      textAlign: 'center',
      borderBottom: '1px solid #2d2d3d'
    },
    fieldRow: {
      display: 'grid',
      gridTemplateColumns: '0.8fr 1fr 0.8fr',
      padding: 'clamp(0.2rem, 1.2vw, 0.3rem) clamp(0.4rem, 2vw, 0.6rem)',
      borderBottom: '1px solid rgba(255,255,255,0.05)',
      gap: '0.5rem',
      minWidth: '240px'
    },
    annotationBadge: {
      background: '#8ec07c',
      color: '#0d1117',
      fontSize: 'clamp(0.55rem, 1.8vw, 0.6rem)',
      padding: '0.1rem 0.3rem',
      borderRadius: '3px'
    },
    entitySelector: {
      display: 'flex',
      gap: 'clamp(0.3rem, 2vw, 0.5rem)',
      marginBottom: '0.8rem',
      flexWrap: 'wrap'
    },
    entityButton: (active) => ({
      background: active ? 'rgba(102, 126, 234, 0.3)' : 'rgba(255, 255, 255, 0.05)',
      border: `1px solid ${active ? '#667eea' : 'rgba(255, 255, 255, 0.1)'}`,
      padding: 'clamp(0.25rem, 1.5vw, 0.3rem) clamp(0.6rem, 2.5vw, 0.8rem)',
      borderRadius: '16px',
      cursor: 'pointer',
      color: active ? '#fff' : '#a0a0c0',
      fontSize: 'clamp(0.7rem, 2.2vw, 0.75rem)',
      transition: 'all 0.2s',
      whiteSpace: 'nowrap',
      '@media (max-width: 480px)': {
        whiteSpace: 'normal'
      }
    }),
    codeBlock: {
      background: '#0d1117',
      padding: 'clamp(0.5rem, 2vw, 0.6rem)',
      borderRadius: '6px',
      overflowX: 'auto',
      fontSize: 'clamp(0.55rem, 1.8vw, 0.65rem)',
      lineHeight: '1.3',
      color: '#e6e6e6',
      fontFamily: 'monospace',
      marginTop: '0.4rem',
      whiteSpace: 'pre-wrap',
      wordBreak: 'break-word'
    },
    queryButton: {
      background: 'linear-gradient(135deg, #667eea, #764ba2)',
      border: 'none',
      padding: 'clamp(0.15rem, 1.2vw, 0.2rem) clamp(0.4rem, 2vw, 0.6rem)',
      borderRadius: '4px',
      cursor: 'pointer',
      color: 'white',
      fontSize: 'clamp(0.6rem, 2vw, 0.65rem)',
      marginLeft: '0.3rem',
      transition: 'opacity 0.2s',
      ':hover': {
        opacity: 0.8
      }
    },
    ormBadge: {
      background: 'rgba(142, 192, 124, 0.15)',
      padding: '0.2rem 0.5rem',
      borderRadius: '20px',
      fontSize: 'clamp(0.6rem, 2vw, 0.7rem)',
      display: 'inline-flex',
      alignItems: 'center',
      gap: '0.3rem'
    },
    detailsSummary: {
      cursor: 'pointer',
      color: '#8ec07c',
      fontSize: 'clamp(0.65rem, 2.2vw, 0.7rem)',
      marginTop: '0.3rem'
    },
    queryResult: {
      marginTop: '0.3rem',
      fontSize: 'clamp(0.65rem, 2.2vw, 0.7rem)',
      color: '#8ec07c'
    },
    relationContainer: {
      display: 'flex',
      flexDirection: 'column',
      gap: '0.8rem'
    },
    relationItem: (color) => ({
      background: color || 'rgba(102, 126, 234, 0.1)',
      borderRadius: '6px',
      padding: 'clamp(0.4rem, 2vw, 0.5rem)'
    }),
    relationText: {
      fontSize: 'clamp(0.6rem, 2vw, 0.65rem)'
    },
    relationBadgeContainer: {
      marginTop: '0.3rem',
      display: 'flex',
      flexWrap: 'wrap',
      gap: '0.3rem'
    }
  };

  const applyResponsiveStyles = (baseStyles) => {
    if (typeof window !== 'undefined' && window.matchMedia('(max-width: 768px)').matches) {
      if (baseStyles['@media (max-width: 768px)']) {
        return { ...baseStyles, ...baseStyles['@media (max-width: 768px)'] };
      }
    }
    if (typeof window !== 'undefined' && window.matchMedia('(max-width: 480px)').matches) {
      if (baseStyles['@media (max-width: 480px)']) {
        return { ...baseStyles, ...baseStyles['@media (max-width: 480px)'] };
      }
    }
    return baseStyles;
  };

  return (
    <BrowserOnly>
      {() => (
        <div style={styles.container}>
          <div>
            <h3 style={styles.header}>
              <span>🗺️</span> ORM (Object-Relational Mapping)
            </h3>
            <p style={styles.subtitle}>
              Преобразование между реляционной БД и объектно-ориентированными классами
            </p>
          </div>

          <div style={styles.tabs}>
            <button style={styles.tab(activeTab === 'visual')} onClick={() => setActiveTab('visual')}>Визуальное отображение</button>
            <button style={styles.tab(activeTab === 'code')} onClick={() => setActiveTab('code')}>Примеры кода</button>
            <button style={styles.tab(activeTab === 'relations')} onClick={() => setActiveTab('relations')}>Связи</button>
          </div>

          {activeTab === 'visual' && (
            <div>
              <div style={styles.entitySelector}>
                {Object.keys(entities).map(key => (
                  <button 
                    key={key} 
                    style={styles.entityButton(selectedEntity === key)} 
                    onClick={() => setSelectedEntity(key)}
                  >
                    {entities[key].name}
                  </button>
                ))}
              </div>

              <div style={styles.mappingRow}>
                <div style={styles.halfPanel}>
                  <div style={styles.panelTitle}>
                    <span>🗄️ SQL: {currentEntity.table}</span>
                    <span style={styles.ormBadge}>📦 → 🗄️</span>
                  </div>
                  <div style={styles.tableVisual}>
                    <div style={styles.tableHeader}>
                      <span>COLUMN</span>
                      <span>TYPE</span>
                      <span>PK/FK</span>
                    </div>
                    {currentEntity.fields.map(field => (
                      <div key={field.name} style={styles.tableRow}>
                        <span>{field.name}</span>
                        <span style={{color: '#e8bf6a'}}>{field.type}</span>
                        <span>{field.pk ? '🔑 PK' : field.fk ? '🔗 FK' : '-'}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div style={styles.halfPanel}>
                  <div style={styles.panelTitle}>
                    <span>📦 ORM: {currentEntity.name}</span>
                    <span style={styles.ormBadge}>🗄️ → 📦</span>
                  </div>
                  <div style={styles.classVisual}>
                    <div style={styles.className}>
                      <span style={{fontSize: 'clamp(0.6rem, 2vw, 0.7rem)'}}>@Entity()</span><br/>
                      <strong>class {currentEntity.name}</strong>
                    </div>
                    {currentEntity.fields.map(field => (
                      <div key={field.name} style={styles.fieldRow}>
                        <span><span style={styles.annotationBadge}>@Column</span></span>
                        <span style={{color: '#8ec07c'}}>{field.name}</span>
                        <span style={{color: '#e8bf6a'}}>{field.ormType}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'code' && (
            <div style={styles.mappingRow}>
              <div style={styles.halfPanel}>
                <div style={styles.panelTitle}>
                  <span>📝 Сущность (TypeORM)</span>
                </div>
                <pre style={styles.codeBlock}>
{`@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 50 })
  username: string;

  @Column({ unique: true })
  email: string;

  @CreateDateColumn()
  createdAt: Date;

  @OneToMany(() => Post, post => post.author)
  posts: Post[];
}`}
                </pre>
              </div>

              <div style={styles.halfPanel}>
                <div style={styles.panelTitle}>
                  <span>ORM Запросы</span>
                  <div style={{display: 'flex', flexWrap: 'wrap', gap: '0.3rem'}}>
                    {['find', 'create', 'update'].map(type => (
                      <button key={type} style={styles.queryButton} onClick={() => handleExecuteQuery(type)}>
                        ▶️ {type}
                      </button>
                    ))}
                  </div>
                </div>
                <div style={styles.entitySelector}>
                  {Object.keys(ormQueries).map(key => (
                    <button 
                      key={key} 
                      style={styles.entityButton(selectedEntity === key)} 
                      onClick={() => setSelectedEntity(key)}
                    >
                      {entities[key].name}
                    </button>
                  ))}
                </div>
                <pre style={styles.codeBlock}>
                  {ormQueries[selectedEntity].find}
                </pre>
                {showQuery && queryResult && (
                  <div style={styles.queryResult}>
                    {queryResult.message}
                  </div>
                )}
                <details>
                  <summary style={styles.detailsSummary}>
                    Другие операции
                  </summary>
                  <pre style={{...styles.codeBlock, marginTop: '0.3rem'}}>{ormQueries[selectedEntity].create}</pre>
                  <pre style={{...styles.codeBlock, marginTop: '0.3rem'}}>{ormQueries[selectedEntity].update}</pre>
                </details>
              </div>
            </div>
          )}

          {activeTab === 'relations' && (
            <div style={styles.mappingRow}>
              <div style={styles.halfPanel}>
                <div style={styles.panelTitle}>
                  <span>🔗 ER-диаграмма</span>
                </div>
                <div style={{...styles.tableVisual, padding: 'clamp(0.6rem, 2.5vw, 0.8rem)'}}>
                  <div style={styles.relationContainer}>
                    <div style={styles.relationItem('rgba(102, 126, 234, 0.1)')}>
                      <strong>users</strong>
                      <div style={styles.relationText}>id (PK) | username | email</div>
                      <div style={styles.relationBadgeContainer}>
                        <span style={styles.ormBadge}>↓ OneToMany → posts</span>
                        <span style={{...styles.ormBadge}}>↔ ManyToMany → roles</span>
                      </div>
                    </div>
                    <div style={{...styles.relationItem('rgba(142, 192, 124, 0.1)'), marginLeft: 'clamp(0.5rem, 3vw, 1rem)'}}>
                      <strong>posts</strong>
                      <div style={styles.relationText}>id (PK) | title | author_id (FK → users)</div>
                      <div style={styles.relationBadgeContainer}>
                        <span style={styles.ormBadge}>↑ ManyToOne → users</span>
                      </div>
                    </div>
                    <div style={styles.relationItem('rgba(232, 191, 106, 0.1)')}>
                      <strong>roles</strong>
                      <div style={styles.relationText}>id (PK) | name</div>
                      <div style={styles.relationBadgeContainer}>
                        <span style={styles.ormBadge}>↔ ManyToMany → users (через user_roles)</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div style={styles.halfPanel}>
                <div style={styles.panelTitle}>
                  <span>📦 Код связей</span>
                </div>
                <pre style={styles.codeBlock}>
{`// User ↔ Post (OneToMany)
@OneToMany(() => Post, post => post.author)
posts: Post[];

// Post ↔ User (ManyToOne)
@ManyToOne(() => User, user => user.posts)
@JoinColumn({ name: 'author_id' })
author: User;

// User ↔ Role (ManyToMany)
@ManyToMany(() => Role)
@JoinTable({ name: 'user_roles' })
roles: Role[];`}
                </pre>
              </div>
            </div>
          )}
        </div>
      )}
    </BrowserOnly>
  );
};

export default ORMDemo;