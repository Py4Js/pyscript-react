import TerserPlugin from "terser-webpack-plugin";
import { WebpackPluginInstance } from "webpack";
import Mode from "../../types/mode/mode";

type GetOptimizationArguments = {
  mode: Mode;
};

const getOptimization = ({ mode }: GetOptimizationArguments) => {
  return {
    minimize: mode !== Mode.Development,
    minimizer: [new TerserPlugin() as unknown as WebpackPluginInstance],
    usedExports: mode !== Mode.Development,
  };
};

export default getOptimization;
