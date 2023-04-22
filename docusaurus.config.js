// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const title = 'SIMPO'
const urlConsole = 'http://111.230.245.215/dashboard/home'

// let aa = localStorage.getItem('login') === 'true'

const fs = require('fs');
// const resourcesHTML = fs.readFileSync('./src/snippets/resources.html', 'utf-8');

/** @type {import('@docusaurus/types').Config} */



const config = {
  title: title,
  // tagline: 'A Scientific Computing SaaS Platform',
  // tagline: 'A Simulation SaaS Platform for Water and Wastewater Treatment Process Modeling',
  tagline: 'A Scientific Computing SaaS Platform for Water and Wastewater Treatment Process Modeling',
  // tagline: 'A SaaS platform for wastewater treatment modeling',

  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  // url: 'https://your-docusaurus-test-site.com',
  url: 'https://jakkwj.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  // organizationName: title, // Usually your GitHub org/user name.
  // projectName: 'Sludge', // Usually your repo name.
  organizationName: 'Jakkwj', // Usually your GitHub org/user name.
  projectName: 'jakkwj.github.io', // Usually your repo name.
  trailingSlash: false,
  deploymentBranch: 'gh-pages',

  onBrokenLinks: 'throw', // 检测到无效链接时的行为, 抛出错误
  onBrokenMarkdownLinks: 'warn', // 检测到无效 Markdown 链接时的行为 警告



  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      // 'classic',
      '@docusaurus/preset-classic',
      // '@docusaurus/preset-live-codeblock',

      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: false,
        // blog: {
          // showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        // },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
          // customCss: require.resolve('./src/css/custom.scss'),
        },
      }),
    ],
  ],

  plugins: [
    // '@docusaurus/theme-live-codeblock',
    // 'docusaurus-plugin-sass'
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({

      colorMode: {
        disableSwitch: true,
        defaultMode: 'light',
        // respectPrefersColorScheme: true,
      },


      liveCodeBlock: {
        /**
         * 实时效果显示的位置，在编辑器上方还是下方。
         * 可为："top" | "bottom"
         */
        playgroundPosition: 'bottom',
      },

      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      // algolia: {
      //   // If Algolia did not provide you any appId, use 'BH4D9OD16A'
      //   appId: 'NS6GBGYACO',
      //   // Public API key: it is safe to commit it
      //   apiKey: '8f0f11e3241b59574c5dd32af09acdc8',
      //   indexName: 'hasura-graphql',
      //   // Optional: see doc section below
      //   // contextualSearch: true,
      //   // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
      //   // externalUrlRegex: 'external\\.com|domain\\.com',
      //   // Optional: Algolia search parameters
      //   // searchParameters: {},
      // },
      navbar: {
        hideOnScroll: true,
        title: title,
        logo: {
          alt: 'Logo',
          // src: 'img/logo.svg',
          // src: 'img/logo.png',
          src: 'img/logo3.png',
        },
        items: [
          // {
          //   type: 'docsVersionDropdown',
          //   dropdownItemsAfter: [
          //     {
          //       type: 'html',
          //       value: '<hr style="margin: .5em 0;" />',
          //     },
          //     { to: '/versions', label: 'All Versions' },
          //     { to: '/supported-releases', label: 'Supported Releases' },
          //   ],
          // },

          {
            type: 'localeDropdown',
            position: 'right',
          },
          {
            label: 'Tutorials',
            type: 'doc',
            docId: 'intro',
            position: 'left',
            // label: 'Guides',

          },
          // {
          //   label: 'Client',
          //   type: 'dropdown',
          //   position: 'left',
          //   items: [
          //     {
          //       type: 'html',
          //       value: resourcesHTML,
          //       className: 'dyte-dropdown',
          //     },
          //   ],
          // },

          // {
          //   // to: 'https://hasura.io/changelog',
          //   to: '/docs/changelog/intro',
          //   label: "ChangeLog",
          //   position: 'left',
          // },
          // {
          //   label: 'Support',
          //   to: 'https://dyte.io/contact',
          // },
          {
            type: 'search',
            position: 'right',
          },


          // {to: '/blog', label: 'Blog', position: 'left'},
          // {
          //   href: 'https://github.com/jakkwj/sludge',
          //   position: 'right',
          //   className: 'header-github-link',
          //   'aria-label': 'GitHub repository',
          // },

          { href: `${urlConsole}`, label: true ? 'Dashboard' : 'Login', position: 'right'},
          // {
          //   href: 'https://github.com/facebook/docusaurus',
          //   label: 'GitHub',
          //   position: 'right',
          // },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          // {
          //   title: 'Docs',
          //   items: [
          //     {
          //       label: 'Tutorial',
          //       to: '/docs/intro',
          //     },

          //   ],
          // },
          // {
          //   title: 'Community',
          //   items: [
          //     {
          //       label: 'Stack Overflow',
          //       href: 'https://stackoverflow.com/questions/tagged/docusaurus',
          //     },
          //     {
          //       label: 'Discord',
          //       href: 'https://discordapp.com/invite/docusaurus',
          //     },
          //     {
          //       label: 'Twitter',
          //       href: 'https://twitter.com/docusaurus',
          //     },
          //   ],
          // },
          // {
          //   title: 'More',
          //   items: [
          //     {
          //       label: 'Blog',
          //       to: '/blog',
          //     },
          //     {
          //       label: 'GitHub',
          //       href: 'https://github.com/facebook/docusaurus',
          //     },
          //   ],
          // },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} ${title}, Inc. All rights reserved.`,
        // Built with Docusaurus.
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
