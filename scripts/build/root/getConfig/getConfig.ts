import { Configuration } from "webpack";
import Mode from "../../types/mode/mode";
import Target from "../../types/target/target";
import getEntryPoint from "../../utils/getEntryPoint/getEntryPoint";
import getExperiments from "../../wrappers/getExperiments/getExperiments";
import getExternals from "../../wrappers/getExternals/getExternals";
import getLoaders from "../../wrappers/getLoaders/getLoaders";
import getOptimization from "../../wrappers/getOptimization/getOptimization";
import getOutput from "../../wrappers/getOutput/getOutput";
import getPlugins from "../../wrappers/getPlugins/getPlugins";
import getResolve from "../../wrappers/getResolve/getResolve";

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
