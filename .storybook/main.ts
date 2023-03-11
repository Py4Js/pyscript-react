import { resolve } from "path";

export default {
  stories: ["../**/*.story.@(js|jsx|ts|tsx|mdx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-mdx-gfm",
  ],
  staticDirs: ["../tests_data"],
  framework: {
    name: "@storybook/react-vite",
    options: {
      define: {
        global: "window",
      },
      resolve: {
        alias: {
          "~frontend": resolve("..", __dirname),
        },
      },
    },
  },
  features: {
    storyStoreV7: true,
  },
  docs: {
    autodocs: true,
  },
};
