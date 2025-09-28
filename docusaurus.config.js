// docusaurus.config.js

module.exports = {
  title: 'Вселенная IT',
  tagline: 'Единый и ультимативный гайд по IT',
  favicon: 'img/favicon.ico',

  url: 'https://spirzen.github.io', // твой GitHub Pages
  baseUrl: '/it-knowledge-base/', // имя репозитория

  organizationName: 'spirzen',
  projectName: 'it-knowledge-base',

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.js',
          editUrl: 'https://github.com/spirzen/it-knowledge-base/edit/main/', // ссылка "Edit this page"
        },
        blog: false, // отключаем блог
        theme: {
          customCss: './src/css/custom.css',
        },
      },
    ],
  ],

  themeConfig:
    ({
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
            label: 'Книга',
          },
          {to: '/docs/toc', label: 'Содержание', position: 'left'},
          {to: '/docs/about/contact', label: 'Контакты', position: 'left'},
          {
            href: 'https://github.com/spirzen/it-knowledge-base',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        copyright: `Copyright © ${new Date().getFullYear()} Тагиров Тимур Владиславович. Все права защищены.`,
      },
    }),
    markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid'],
};