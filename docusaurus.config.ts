import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Zoty',
  staticDirectories:['public','static'],
  tagline: 'Uživatelský manuál Zoty',
  favicon: 'img/favicon.png',

  // Set the production url of your site here
  //url: 'https://your-docusaurus-site.example.com',
  url: 'https://zoty.cz',


  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/doc/',

  

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Zoty', // Usually your GitHub org/user name.
  projectName: 'zoty-wiki', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'cs',
    locales: ['cs'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
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
/*
    //GA
    [
      '@docusaurus/preset-classic',
      {
        gtag: {
          trackingID: 'G-HN5C97YQ8Q',
          anonymizeIP: true,
        },
      },
    ],
*/

  ],


  

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Zoty',
      logo: {
        alt: 'Zoty Logo',
        src: 'img/zoty-logo.png',
        href: 'https://zoty.cz',
      },
      items: [
     /*   {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Tutorial',
        },*/

        {to: '/manual', label: 'Uživatelský manuál Zoty [v1.10]', position: 'left'},
        
        /*{to: '/blog', label: 'Blog', position: 'left'},*/
        {
          href: 'https://zoty.cz',
          label: 'zoty.cz',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Dokumenty',
          items: [
           /* {
              label: 'Tutorial',
              to: '/docs/intro',
            },*/
            {
              label: 'Uživatelský manuál Zoty [v1.10]',
              to: '/manual',
            },
          ],
        },
        /*{
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
              label: 'Twitter',
              href: 'https://twitter.com/docusaurus',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/facebook/docusaurus',
            },
          ],
        },*/
      ],


      
      copyright: `Copyright © ${new Date().getFullYear()} Zoty s.r.o.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },

    /*RV table of conte*/ 
    themeConfig: {
      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 5,
      },
    },

  } satisfies Preset.ThemeConfig,



};

plugins: [
  [
    '@docusaurus/plugin-ideal-image',
    {
      quality: 90,
      max: 1030, // max resized image's size.
      min: 640, // min resized image's size. if original is lower, use that size.
      steps: 2, // the max number of images generated between min and max (inclusive)
      disableInDev: false,
    },
  ],
]

export default config;

