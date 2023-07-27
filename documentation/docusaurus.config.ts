import { Options, ThemeConfig } from "@docusaurus/preset-classic";
import { Config } from "@docusaurus/types";
import "prism-react-renderer";
import darkCodeTheme from "prism-react-renderer/themes/dracula";
import lightCodeTheme from "prism-react-renderer/themes/github";

const organizationName = "Py4Js";
const githubLink = "https://github.com/Py4Js/pyscript-react";

const config: Config = {
  title: `${organizationName} Documentation`,
  tagline: `${organizationName} Documentation`,
  url: "https://py4js.github.io/",
  baseUrl: "/pyscript-react/",
  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",
  organizationName,
  projectName: organizationName,
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },
  plugins: [
    require.resolve("@cmfcmf/docusaurus-search-local"),
    require.resolve("plugin-image-zoom"),
  ],
  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.ts"),
          editUrl: githubLink,
        },
      } as Options,
    ],
  ],
  themeConfig: {
    navbar: {
      title: organizationName,
      items: [
        {
          type: "doc",
          docId: "intro",
          position: "left",
          label: "Documentation",
        },
        {
          href: githubLink,
          label: "GitHub",
          position: "right",
        },
      ],
    } as ThemeConfig,
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
};

export default config;
