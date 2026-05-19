// docusaurus.config.js

/** Old slug segment -> new folder name (encyclopedia subsection). */
const ENCYCLOPEDIA_FOLDER_RENAMES = [
  ['5-languages/5-04-platforma-dotnet', '5-languages/5.04. Platforma .NET'],
  ['5-languages/5-15-lua-i-luau', '5-languages/5.15. Lua и Luau'],
  ['5-languages/5-16-starye-yazyki', '5-languages/5.16. Старые языки'],
  ['5-languages/5-27-1s', '5-languages/5.27. 1С'],
  ['8-infra-security/8-01-oblachnye-tehnologii', '8-infra-security/8.01. Облачные технологии'],
  ['8-infra-security/8-03-zabota-o-kode-i-dannyh', '8-infra-security/8.03. Забота о коде и данных'],
  [
    '8-infra-security/8-05-mikroservisy-i-integratsiya',
    '8-infra-security/8.05. Микросервисы и интеграция',
  ],
  [
    '8-infra-security/8-06-konteynerizatsiya-i-orkestratsiya',
    '8-infra-security/8.06. Контейнеризация и оркестрация',
  ],
  [
    '8-infra-security/8-07-informatsionnaya-bezopasnost',
    '8-infra-security/8.07. Информационная безопасность',
  ],
  [
    '3-data-markup/3-01-prodvinutye-operatsii-s-dannymi',
    '3-data-markup/3.01. Продвинутые операции с данными',
  ],
  ['3-data-markup/3-02-struktury-dannyh', '3-data-markup/3.02. Структуры данных'],
  ['3-data-markup/3-03-myslitelnaya-baza', '3-data-markup/3.03. Мыслительная база'],
  ['3-data-markup/3-04-konfiguratsii-i-dannye', '3-data-markup/3.04. Конфигурации и данные'],
  ['3-data-markup/3-05-osnovy-baz-dannyh', '3-data-markup/3.05. Основы баз данных'],
  ['3-data-markup/3-08-upravlenie-rsubd', '3-data-markup/3.08. Управление реляционными СУБД'],
  ['3-data-markup/3-11-analiz-dannyh', '3-data-markup/3.11. Анализ данных'],
];

function createEncyclopediaFolderRedirects(existingPath) {
  const redirects = [];
  for (const [oldSegment, newSegment] of ENCYCLOPEDIA_FOLDER_RENAMES) {
    const newPrefix = `/encyclopedia/${newSegment}/`;
    const newExact = `/encyclopedia/${newSegment}`;
    if (existingPath.includes(newPrefix)) {
      redirects.push(
        existingPath.replace(`/encyclopedia/${newSegment}/`, `/encyclopedia/${oldSegment}/`),
      );
    } else if (existingPath === newExact || existingPath.endsWith(newExact)) {
      redirects.push(existingPath.replace(newExact, `/encyclopedia/${oldSegment}`));
    }
  }
  return redirects.length > 0 ? redirects : undefined;
}

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
          showLastUpdateTime: true,
          routeBasePath: '/',
          numberPrefixParser: false,
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
      '@docusaurus/plugin-client-redirects',
      {
        createRedirects: createEncyclopediaFolderRedirects,
      },
    ],
    () => ({
      name: 'demo-chunk-splitting',
      configureWebpack(_config, isServer) {
        if (isServer) {
          return {};
        }
        return {
          optimization: {
            splitChunks: {
              cacheGroups: {
                demoWidgets: {
                  test: /[\\/]src[\\/]components[\\/]/,
                  name: 'demo-widgets',
                  chunks: 'all',
                  minSize: 20000,
                  priority: 25,
                  reuseExistingChunk: true,
                },
              },
            },
          },
        };
      },
    }),
  ],

  themeConfig: {
    prism: {
      additionalLanguages: [
        'bash',
        'cobol',
        'cpp',
        'csharp',
        'docker',
        'fortran',
        'fsharp',
        'git',
        'go',
        'graphql',
        'http',
        'ini',
        'java',
        'kotlin',
        'latex',
        'lisp',
        'lua',
        'markup',
        'perl',
        'php',
        'rust',
        'scala',
        'sql',
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