// docusaurus.config.js

module.exports = {
  title: 'Вселенная IT',
  tagline: 'Единый и ультимативный гайд по IT',
  favicon: 'img/favicon.ico',

  url: 'https://spirzen.ru',
  baseUrl: '/',

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
          editUrl: undefined,
          showLastUpdateAuthor: false,
          showLastUpdateTime: false,
          routeBasePath: '/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
        // Оптимизация сборки
        gtag: undefined, // Отключено, если не используется
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
        // Оптимизация индексации
        searchResultLimits: 8,
        searchResultContextMaxLength: 50,
      },
    ],
    [
      '@docusaurus/plugin-ideal-image',
      {
        quality: 85,
        maxWidth: 1200,
        sizes: [320, 640, 960, 1280, 1920],
        disableInDev: false,
        // Оптимизация загрузки изображений
        disable: false,
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
    // Настройки поиска (требует настройки Algolia, но увы - она недоступна в моей стране!)
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
          label: 'Энциклопедия',
        },
        { to: '/about/project', label: 'О проекте', position: 'left' },
        { to: '/about/manifest', label: 'Манифест', position: 'left' },
        {
          href: '/about/author#support',
          label: 'Поддержать',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Энциклопедия',
          items: [
            { label: 'Основы', to: '/section/basics' },
            { label: 'Система и сеть', to: '/section/system-network' },
            { label: 'Данные и разметка', to: '/section/data-markup' },
          ],
        },
        {
          title: 'Инструменты и практика',
          items: [
            { label: 'Код и разработка', to: '/section/code-dev' },
            { label: 'Инфраструктура и безопасность', to: '/section/infra-security' },
            { label: 'Лаборатория', to: '/lab/intro' },
          ],
        },
        {
          title: 'Контекст и рефлексия',
          items: [
            { label: 'Контекст', to: '/context/intro' },
            { label: 'Философия', to: '/philosophy/intro' },
            { label: 'Глоссарий', to: '/glossary/intro' },
          ],
        },
        {
          title: 'О проекте',
          items: [
            { label: 'Манифест и Правила', to: '/about/manifest' },
            { label: 'Об авторе', to: '/about/author' },
            { label: 'GitHub', href: 'https://github.com/spirzen/it-knowledge-base' },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Тагиров Тимур Владиславович. Все права защищены.`,
    },
  },

  markdown: {
    mermaid: true,
  },
  themes: [
    '@docusaurus/theme-mermaid',
    '@docusaurus/theme-live-codeblock',
  ],

  // Настройки для улучшения производительности
  staticDirectories: ['static'],
  
  // Примечание: experimental_faster требует флаги v4, поэтому отключен
  // Если нужны экспериментальные оптимизации, можно включить:
  // future: {
  //   v4: true, // Включает все флаги v4 включая experimental_faster
  // },
};