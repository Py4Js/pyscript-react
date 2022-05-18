const { join } = require("path");

module.exports = {
  stories: ["../**/*.story.@(js|jsx|ts|tsx|mdx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: "@storybook/react",
  core: {
    builder: "webpack5",
  },
  webpackFinal: async (config) => {
    config.resolve = {
      extensions: [".js", ".ts", ".tsx", ".jsx", ".mjs", ".wasm", ".json"],
      alias: {
        "~root": process.cwd(),
        "~components": join(process.cwd(), "source", "components"),
        "~types": join(process.cwd(), "source", "types"),
      },
    };
    return config;
  },
};
