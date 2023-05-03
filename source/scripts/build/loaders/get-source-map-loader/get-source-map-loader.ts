import { resolve } from "path";
import type { RuleSetRule } from "webpack";
import type { GetSourceMapLoader } from "~scripts/build/loaders/get-source-map-loader/get-source-map-loader.types";

const getSourceMapLoader: GetSourceMapLoader = (): RuleSetRule => {
  return {
    test: /\.(js)$/,
    enforce: "pre",
    exclude: /(node_modules)/,
    use: [
      {
        loader: "cache-loader",
        options: {
          cacheDirectory: resolve(".webpackCache"),
        },
      },
      "source-map-loader",
    ],
  };
};

export default getSourceMapLoader;
