
/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'K3s',
  tagline: '',
  url: 'https://k3s-io.github.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'k3s-io', // Usually your GitHub org/user name.
  projectName: 'k3s-io.github.io', // Usually your repo name.
  trailingSlash: false,
  themeConfig: {
    colorMode: {
      // "light" | "dark"
      defaultMode: "light",

      // Hides the switch in the navbar
      // Useful if you want to support a single color mode
      disableSwitch: false,
    },
    navbar: {
      title: "",
      logo: {
        alt: 'logo',
        src: 'img/k3s-logo-light.svg',
        srcDark: 'img/k3s-logo-dark.svg',
      },
      items: [
        {
          to:  'https://k3s-io.github.io/docs',
          position: 'right',
          label: 'Docs',
          className: 'navbar__icon navbar__docs',
        },
        {
          to: 'https://github.com/k3s-io/k3s/',
          label: 'GitHub',
          position: 'right',
          className: 'navbar__icon navbar__github',
        },
        {
          type: 'dropdown',
          label: 'More From SUSE',
          position: 'right',
          className: 'navbar__dropdown',
          items: [
            {
              label: 'Rancher',
              to: 'https://www.rancher.com',
              className: 'navbar__icon navbar__rancher',
            },
            {
              label: 'Rancher Desktop',
              to: "https://rancherdesktop.io",
              className: 'navbar__icon navbar__rd',
            },
            {
              label: 'Longhorn',
              to: "https://longhorn.io",
              className: 'navbar__icon navbar__longhorn',
            },
            {
              type: 'html',
              value: '<hr style="margin: 0.3rem 0;">',
            },
            {
              label: 'More Projects...',
              to: "https://opensource.suse.com",
              className: 'navbar__icon navbar__suse',
            },
          ],
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [],
      copyright: `Copyright © ${new Date().getFullYear()} K3s Project Authors. All rights reserved. <br>The Linux Foundation has registered trademarks
      and uses trademarks. For a list of trademarks of The Linux Foundation, 
      please see our <a href="https://www.linuxfoundation.org/trademark-usage"> Trademark Usage</a> page.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: false,
        blog: false, // Optional: disable the blog plugin
        // ...
        theme: {
          customCss: [require.resolve("./src/css/custom.css")],
        },
      },
    ],
  ], 
};
