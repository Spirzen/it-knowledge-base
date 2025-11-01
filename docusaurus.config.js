// docusaurus.config.js

module.exports = {
  title: 'Вселенная IT',
  tagline: 'Единый и ультимативный гайд по IT',
  favicon: 'img/favicon.ico',

  url: 'https://spirzen.github.io',
  baseUrl: '/it-knowledge-base/',

  organizationName: 'Spirzen',
  projectName: 'it-knowledge-base',
  trailingSlash: false,

  onBrokenLinks: 'warn',

  i18n: {
    defaultLocale: 'ru',
    locales: ['ru'],
    localeConfigs: {
      ru: {
        label: 'Русский',
        direction: 'ltr',
      },
    },
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.js',
          // Отключаем редактирование для пользователей
          editUrl: undefined,
          showLastUpdateAuthor: false,
          showLastUpdateTime: false,
          routeBasePath: '/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      },
    ],
  ],

  plugins: [
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      {
        hashed: true,
        language: ['ru'],
        indexDocs: true,
        indexPages: false,
        highlightSearchTermsOnTargetPage: true,
        explicitSearchResultPath: true,
      },
    ],
    [
      '@docusaurus/plugin-ideal-image',
      {
        quality: 85,
        maxWidth: 1200,
        sizes: [320, 640, 960, 1280, 1920],
        disableInDev: false,
      },
    ],
  ],

  themeConfig: {
    prism: {
      additionalLanguages: [
        'csharp',
        'cpp',
        'java',
        'sql',
        'kotlin',
        'rust',
        'go',
        'fsharp',
        'scala',
        'clojure',
        'lua',
        'lisp',
        'perl',
        'bash',
        'cobol',
        'fortran',
        'latex',
        'graphql',
        'http'
      ],
    },
    // Настройки поиска (требует настройки Algolia)
    // algolia: {
    //   appId: 'YOUR_APP_ID',
    //   apiKey: 'YOUR_SEARCH_API_KEY',
    //   indexName: 'it-knowledge-base',
    //   contextualSearch: true,
    //   searchParameters: {},
    //   searchPagePath: 'search',
    // },

    navbar: {
      title: 'Вселенная IT',
      logo: {
        alt: 'IT Logo',
        src: 'img/docusaurus.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docsSidebar',
          position: 'left',
          label: '📖 База знаний',
        },
        { to: '/toc', label: '📋 Содержание', position: 'left' },
        { to: '/about/project', label: 'ℹ️ О проекте', position: 'left' },
        { to: '/about/author', label: '👨‍💻 Об авторе', position: 'left' },
        {
          href: 'https://github.com/spirzen/it-knowledge-base',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'База знаний',
          items: [
            { label: 'Основы', to: '/section/basics' },
            { label: 'Система и сеть', to: '/section/system-network' },
            { label: 'Данные и разметка', to: '/section/data-markup' },
          ],
        },
        {
          title: 'Разработка',
          items: [
            { label: 'Код и разработка', to: '/section/code-dev' },
            { label: 'Языки программирования', to: '/section/languages' },
            { label: 'Проект', to: '/section/project' },
          ],
        },
        {
          title: 'Дополнительно',
          items: [
            { label: 'Инфраструктура и безопасность', to: '/section/infra-security' },
            { label: 'Спин-офф', to: '/section/spinoff' },
            { label: 'О проекте', to: '/about/project' },
          ],
        },
        {
          title: 'Контакты',
          items: [
            {
              label: 'Об авторе',
              to: '/about/author',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/spirzen/it-knowledge-base',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Тагиров Тимур Владиславович. Все права защищены.`,
    },
  },

  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid'],
};