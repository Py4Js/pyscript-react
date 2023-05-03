import { Configuration } from "webpack";
import Mode from "~scripts/build/types/mode/mode";
import getExternals from "~scripts/build/wrappers/get-externals/get-externals";
import getLoaders from "~scripts/build/wrappers/get-loaders/get-loaders";
import getPlugins from "~scripts/build/wrappers/get-plugins/get-plugins";
import getResolve from "~scripts/build/wrappers/get-resolve/get-resolve";
import getEntrypoints from "../../wrappers/get-entrypoints/get-entrypoints";
import getExperiments from "../../wrappers/get-experiments/get-experiments";
import getOutput from "../../wrappers/get-output/get-output";
import type { GetConfig, GetConfigArguments } from "./get-config.types";

const getConfig: GetConfig = async ({
  mode,
  target,
}: GetConfigArguments): Promise<Configuration> => {
  return {
    mode: mode === Mode.Development ? mode : Mode.Production,
    entry: getEntrypoints(),
    //devtool: "inline-source-map",
    module: {
      rules: getLoaders({ mode }),
    },
    experiments: getExperiments({ target }),
    externals: getExternals(),
    output: getOutput({ target }),
    plugins: getPlugins({ target }),
    resolve: getResolve(),
  };
};

export default getConfig;
