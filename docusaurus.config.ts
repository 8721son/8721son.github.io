import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: '차단기 시스템',
  tagline: '노마드랩 차단기 시스템 문서',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://8721son.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',
  deploymentBranch: 'docs',


  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: '8721son', // Usually your GitHub org/user name.
  projectName: 'hmk-doc', // Usually your repo name
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/8721son/hmk-doc/tree/master/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/8721son/hmk-doc/tree/master/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: '노마드랩',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: '문서',
        },
        {to: '/blog', label: '블로그', position: 'left'},
        {
          href: 'https://github.com/8721son/hmk-doc.git',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: '문서',
          items: [
            {
              label: '메뉴',
              to: '/docs/menu',
            },
          ],
        },
        {
          title: '사이트',
          items: [
            {
              label: '노마드랩',
              href: 'https://www.nomadlab.co.kr/',
            },
            {
              label: '유니메이커',
              href: 'https://unimaker.co.kr/',
            },
          ],
        },
        {
          title: '기타',
          items: [
            {
              label: '블로그',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/8721son',
            },
          ],
        },
      ],
      copyright: `Copyright © 2024 차단기 시스템, Inc. 노마드랩.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
