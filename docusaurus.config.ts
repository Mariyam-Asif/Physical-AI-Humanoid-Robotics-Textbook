import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'AI Robotics Textbook',
  tagline: 'A comprehensive guide to Physical AI and Humanoid Robotics',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://mariyam-asif.github.io',
  baseUrl: '/Physical-AI-Humanoid-Robotics-Textbook/',


  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'mariyam-asif', // Usually your GitHub org/user name.
  projectName: 'physical-ai-humanoid-robotics-hextbook', // Usually your repo name.

  onBrokenLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

    plugins: [
  './plugins/docusaurus-plugin-frontmatter-validation',
  [
    'docusaurus-plugin-search-local',
    {
      hashed: true,
      docsRouteBasePath: '/',
      indexDocs: true,
      indexBlog: true,
      indexPages: false,
      highlightSearchTermsOnTargetPage: true,
    },
  ],
],

  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/mariyam-asif/physical-ai-humanoid-robotics-textbook/tree/main/packages/create-docusaurus/templates/shared/',
          remarkPlugins: [require('remark-docusaurus-tabs')],
          rehypePlugins: [],
          beforeDefaultRemarkPlugins: [],
          beforeDefaultRehypePlugins: [],
          recmaPlugins: [],
        },
        blog: {
          showReadingTime: false,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/mariyam-asif/physical-ai-humanoid-robotics-textbook/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'AI Robotics Textbook',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
        href: '/',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Modules',
        },
        {
          href: 'https://github.com/Mariyam-Asif',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Modules',
              to: '/docs/introduction',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'X',
              href: 'https://x.com/docusaurus',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/Mariyam-Asif',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} AI Robotics Textbook, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['python', 'bash'],
      showLineNumbers: true,
      magicComments: [
    // optional for line highlighting
        { className: 'highlight-line', line: 'highlight-next-line' },
      ],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
