import { Configuration } from "webpack";
import Mode from "~scripts/build/types/mode/mode";
import getEntryPoint from "~scripts/build/utils/getEntryPoint/getEntryPoint";
import getExperiments from "~scripts/build/wrappers/getExperiments/getExperiments";
import getExternals from "~scripts/build/wrappers/getExternals/getExternals";
import getLoaders from "~scripts/build/wrappers/getLoaders/getLoaders";
import getOptimization from "~scripts/build/wrappers/getOptimization/getOptimization";
import getOutput from "~scripts/build/wrappers/getOutput/getOutput";
import getPlugins from "~scripts/build/wrappers/getPlugins/getPlugins";
import getResolve from "~scripts/build/wrappers/getResolve/getResolve";
import Target from "../../types/target/target";

type GetConfigArguments = {
  target: Target;
  mode: Mode;
};

type GetConfig = (argument: GetConfigArguments) => Configuration;

const getConfig: GetConfig = ({
  mode,
  target,
}: GetConfigArguments): Configuration => {
  return {
    mode: mode === Mode.Development ? mode : Mode.Production,
    entry: getEntryPoint({ target }),
    devtool: "source-map",
    optimization: getOptimization({ mode }),
    module: {
      rules: getLoaders({ target }),
    },
    externals: getExternals(),
    plugins: getPlugins(),
    resolve: getResolve(),
    output: getOutput(),
    experiments: getExperiments(),
  };
};

export default getConfig;
