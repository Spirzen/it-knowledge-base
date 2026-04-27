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
        gtag: undefined,
      },
    ],
  ],

  plugins: [
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      {
        hashed: 'filename',
        language: ['ru'],
        indexDocs: true,
        indexPages: false,
        docsRouteBasePath: '/',
        searchContextByPaths: [
          { label: 'О проекте', path: 'about' },
          { label: 'Энциклопедия — Введение', path: 'encyclopedia/intro' },
          { label: 'Энциклопедия — Основы', path: 'encyclopedia/Основы' },
          { label: 'Энциклопедия — Система и сеть', path: 'encyclopedia/Система и сеть' },
          { label: 'Энциклопедия — Данные и разметка', path: 'encyclopedia/Данные и разметка' },
          { label: 'Энциклопедия — Код и разработка', path: 'encyclopedia/Код и разработка' },
          { label: 'Энциклопедия — Языки', path: 'encyclopedia/Языки' },
          { label: 'Энциклопедия — Искусственный интеллект', path: 'encyclopedia/Искусственный интеллект' },
          { label: 'Энциклопедия — Проект', path: 'encyclopedia/Проект' },
          { label: 'Энциклопедия — Инфраструктура и безопасность', path: 'encyclopedia/Инфраструктура и безопасность' },
          { label: 'Энциклопедия — Спин-офф', path: 'encyclopedia/Спин-офф' },

          { label: 'Инструменты', path: 'tools' },
          { label: 'Глоссарий', path: 'glossary' },
          { label: 'Лаборатория', path: 'lab' },
          { label: 'Контекст', path: 'context' },
          { label: 'Философия', path: 'philosophy' },
          { label: 'Разделы', path: 'section' },
        ],
        highlightSearchTermsOnTargetPage: true,
        explicitSearchResultPath: true,
        ignoreCssSelectors: [
          '.theme-doc-sidebar-container',
          '.theme-doc-sidebar-menu',
          '.theme-doc-toc-desktop',
          '.theme-doc-toc-mobile',
          'nav.navbar',
          'footer.footer',
          '.navbar',
          '.footer',
        ],
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
        'http',
        'markup',
        'php',
        'ini',
        'git',
        'docker'
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

  staticDirectories: ['static'],
  future: {
    v4: true,
    faster: true,
  },
};