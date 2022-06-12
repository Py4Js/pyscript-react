import { Options } from "@docusaurus/preset-classic";
import { Config } from "@docusaurus/types";

const config: Config = {
  title: "PyScript-React Docs",
  baseUrl: "/",
  url: "https://py4js.github.io/",
  organizationName: "Py4Js",
  projectName: "PyScript-React",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  i18n: {
    defaultLocale: "en",
    locales: ["en", "pl"],
  },

  customFields: {
    prism: {
      additionalLanguages: ["python", "typescript", "javascript"],
    },
  },

  themeConfig: {
    navbar: {
      title: "PyScript-React",
      items: [
        {
          type: "doc",
          docId: "Getting Started",
          position: "left",
        },
      ],
    },

    colorMode: {
      respectPrefersColorScheme: true,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./src/sidebars.ts"),
        },
      } as Options,
    ],
  ],
};

export default config;
