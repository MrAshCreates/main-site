import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Asher\'s Site',
  tagline: 'Your favorite site to get the latest from Asher',
  favicon: 'img/favicon.ico',

  url: 'https://asherewinstead.dev/',

  baseUrl: '/',

  organizationName: 'MrAshCreates',
  projectName: 'main-site',

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

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
        },
        blog: {
          blogTitle: 'Asher\'s Blog',
          blogDescription: 'The best place to read blogs from Asher',
          routeBasePath: '/blog/',
          showReadingTime: true,
          feedOptions: {
              type: ['rss', 'atom'],
              xslt: true,
              copyright: `Copyright © ${new Date().getFullYear()} MrAshCreates`,
          },
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
    image: 'img/banner-2560x1440.jpg',
    navbar: {
      title: 'Asher\'s Site',
      logo: {
        alt: 'Asher\'s Logo',
        src: 'https://github.com/mrashcreates.png',
      },
      items: [
        { to: '/blog', label: 'Blog', position: 'left' },

        {
          href: 'https://github.com/MrAshCreates/blog-site',
          label: 'GitHub',
          position: 'right',
        },

        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Guides',
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
              label: 'Guides',
              to: '/docs/category/linux-guides',
            },
            {
              label: 'Sort Guides by tags',
              to: '/docs/tags',
            },
          ],
        },
        {
          title: 'Social',
          items: [
            {
              label: 'Linkedin',
              href: 'https://www.linkedin.com/in/asher-winstead-a89a8325b',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/SW3tAHvfBD',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/MrAshCreates',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Sort Blogs by tags',
              to: 'blog/tags/',
            },
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'Asher\'s Main Site',
              href: 'https://mrashcreates.xyz',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/MrAshCreates/blog-site',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Asher Winstead`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
