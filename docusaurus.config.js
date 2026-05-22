// docusaurus.config.js

/** Old slug segment -> new folder name (encyclopedia subsection). */
const ENCYCLOPEDIA_FOLDER_RENAMES = [
  ['encyclopedia/3-data-markup/3.01. Продвинутые операции с данными', 'encyclopedia/3-data-markup/3-01-prodvinutye-operatsii-s-dannymi'],
  ['encyclopedia/3-data-markup/3.02. Структуры данных', 'encyclopedia/3-data-markup/3-02-struktury-dannyh'],
  ['encyclopedia/3-data-markup/3.03. Мыслительная база', 'encyclopedia/3-data-markup/3-03-myslitelnaya-baza'],
  ['encyclopedia/3-data-markup/3.04. Конфигурации и данные', 'encyclopedia/3-data-markup/3-04-konfiguratsii-i-dannye'],
  ['encyclopedia/3-data-markup/3.05. Основы баз данных', 'encyclopedia/3-data-markup/3-05-osnovy-baz-dannyh'],
  ['encyclopedia/3-data-markup/3.06. NoSQL', 'encyclopedia/3-data-markup/3-06-nosql'],
  ['encyclopedia/3-data-markup/3.07. SQL', 'encyclopedia/3-data-markup/3-07-sql'],
  ['encyclopedia/3-data-markup/3.08. Управление реляционными СУБД', 'encyclopedia/3-data-markup/3-08-upravlenie-rsubd'],
  ['encyclopedia/3-data-markup/3.09. HTML', 'encyclopedia/3-data-markup/3-09-html'],
  ['encyclopedia/3-data-markup/3.10. CSS', 'encyclopedia/3-data-markup/3-10-css'],
  ['encyclopedia/3-data-markup/3.11. Анализ данных', 'encyclopedia/3-data-markup/3-11-analiz-dannyh'],
  ['encyclopedia/5-languages/5.16. Старые языки/Visual Basic', 'encyclopedia/5-languages/5.16. Старые языки/visual-basic'],
  ['encyclopedia/5-languages/5.01. JavaScript', 'encyclopedia/5-languages/5-01-javascript'],
  ['encyclopedia/5-languages/5.02. Python', 'encyclopedia/5-languages/5-02-python'],
  ['encyclopedia/5-languages/5.03. Java', 'encyclopedia/5-languages/5-03-java'],
  ['encyclopedia/5-languages/5.04. Platforma .NET', 'encyclopedia/5-languages/5-04-platforma-dotnet'],
  ['encyclopedia/5-languages/5.05. CSharp', 'encyclopedia/5-languages/5-05-csharp'],
  ['encyclopedia/5-languages/5.06. C++', 'encyclopedia/5-languages/5-06-cpp'],
  ['encyclopedia/5-languages/5.07. PHP', 'encyclopedia/5-languages/5-07-php'],
  ['encyclopedia/5-languages/5.08. Smalltalk', 'encyclopedia/5-languages/5-08-smalltalk'],
  ['encyclopedia/5-languages/5.09. Kotlin', 'encyclopedia/5-languages/5-09-kotlin'],
  ['encyclopedia/5-languages/5.10. Go', 'encyclopedia/5-languages/5-10-go'],
  ['encyclopedia/5-languages/5.11. Ruby', 'encyclopedia/5-languages/5-11-ruby'],
  ['encyclopedia/5-languages/5.12. Groovy', 'encyclopedia/5-languages/5-12-groovy'],
  ['encyclopedia/5-languages/5.13. Rust', 'encyclopedia/5-languages/5-13-rust'],
  ['encyclopedia/5-languages/5.14. Swift', 'encyclopedia/5-languages/5-14-swift'],
  ['encyclopedia/5-languages/5.15. Lua и Luau', 'encyclopedia/5-languages/5-15-lua-i-luau'],
  ['encyclopedia/5-languages/5.16. Старые языки', 'encyclopedia/5-languages/5-16-starye-yazyki'],
  ['encyclopedia/5-languages/5.17. Haskell', 'encyclopedia/5-languages/5-17-haskell'],
  ['encyclopedia/5-languages/5.18. Scala', 'encyclopedia/5-languages/5-18-scala'],
  ['encyclopedia/5-languages/5.19. Elixir', 'encyclopedia/5-languages/5-19-elixir'],
  ['encyclopedia/5-languages/5.20. Zig', 'encyclopedia/5-languages/5-20-zig'],
  ['encyclopedia/5-languages/5.21. Nim', 'encyclopedia/5-languages/5-21-nim'],
  ['encyclopedia/5-languages/5.22. Dart', 'encyclopedia/5-languages/5-22-dart'],
  ['encyclopedia/5-languages/5.23. R', 'encyclopedia/5-languages/5-23-r'],
  ['encyclopedia/5-languages/5.24. Julia', 'encyclopedia/5-languages/5-24-julia'],
  ['encyclopedia/5-languages/5.25. Bash', 'encyclopedia/5-languages/5-25-bash'],
  ['encyclopedia/5-languages/5.26. PowerShell', 'encyclopedia/5-languages/5-26-powershell'],
  ['encyclopedia/5-languages/5.27. 1С', 'encyclopedia/5-languages/5-27-1s'],
  ['encyclopedia/8-infra-security/8.01. Облачные технологии', 'encyclopedia/8-infra-security/8-01-oblachnye-tehnologii'],
  ['encyclopedia/8-infra-security/8.02. Low-code, No-code', 'encyclopedia/8-infra-security/8-02-low-code-no-code'],
  ['encyclopedia/8-infra-security/8.03. Забота о коде и данных', 'encyclopedia/8-infra-security/8-03-zabota-o-kode-i-dannyh'],
  ['encyclopedia/8-infra-security/8.04. DevOps, CI-CD', 'encyclopedia/8-infra-security/8-04-devops-ci-cd'],
  ['encyclopedia/8-infra-security/8.05. Микросервисы и интеграция', 'encyclopedia/8-infra-security/8-05-mikroservisy-i-integratsiya'],
  ['encyclopedia/8-infra-security/8.06. Контейнеризация и оркестрация', 'encyclopedia/8-infra-security/8-06-konteynerizatsiya-i-orkestratsiya'],
  ['encyclopedia/8-infra-security/8.07. Информационная безопасность', 'encyclopedia/8-infra-security/8-07-informatsionnaya-bezopasnost'],
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
          remarkPlugins: [require('./src/remark/wikiLink.js')],
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
        createRedirects(existingPath) {
          const fromEncyclopedia = createEncyclopediaFolderRedirects(existingPath);
          const slugRedirects = {
            '/tools/testing/1': ['/tools/Тестирование/1'],
            '/tools/testing/2': ['/tools/Тестирование/2'],
            '/tools/testing/3': ['/tools/Тестирование/3'],
            '/tools/data/1': ['/tools/Данные/1'],
            '/tools/data/2': ['/tools/Данные/2'],
            '/tools/data/3': ['/tools/Данные/3'],
            '/tools/data/4': ['/tools/Данные/4'],
            '/tools/data/5': ['/tools/Данные/5'],
            '/tools/data/6': ['/tools/Данные/6'],
            '/encyclopedia/3-data-markup/data-markup': [
              '/encyclopedia/3-data-markup/Данные-markup',
            ],
            '/section/data-markup': ['/section/Данные-markup'],
          };
          if (slugRedirects[existingPath]) {
            return slugRedirects[existingPath];
          }
          return fromEncyclopedia;
        },
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