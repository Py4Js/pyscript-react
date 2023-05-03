import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";
import { GetOutputArguments } from "~scripts/build/wrappers/get-output/get-output";

type GetBundleAnalyzerPluginArguments = {
  target: GetOutputArguments["target"];
};

const getBundleAnalyzerPlugin = ({
  target,
}: GetBundleAnalyzerPluginArguments) => {
  return new BundleAnalyzerPlugin({
    openAnalyzer: false,
    analyzerMode: "static",
    reportFilename: `../../bundle-analyzes/${target}-analyzer-report.html`,
  });
};

export default getBundleAnalyzerPlugin;
