import type { RuleSetRule } from "webpack";
import type { GetJavaScriptModuleLoader } from "~scripts/build/loaders/get-javascript-module-loader/get-javascript-module-loader.types";

const getJavaScriptModuleLoader: GetJavaScriptModuleLoader =
  (): RuleSetRule => {
    return {
      test: /\.m?js/,
      resolve: {
        fullySpecified: false,
      },
    };
  };

export default getJavaScriptModuleLoader;
