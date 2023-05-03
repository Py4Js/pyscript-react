import type { StorybookConfig } from "@storybook/core-common";

type Config = StorybookConfig & {
  docs: {
    autodocs: boolean;
  };
};

const config: Config = {
  stories: ["../**/*.story.@(js|jsx|ts|tsx|mdx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-mdx-gfm",
  ],
  core: {
    builder: "@storybook/builder-vite",
  },
  staticDirs: ["../source/tests_data"],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  features: {
    storyStoreV7: true,
  },
  docs: {
    autodocs: true,
  },
};

export default config;
