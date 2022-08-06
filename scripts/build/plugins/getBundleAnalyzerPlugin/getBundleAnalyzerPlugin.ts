import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";

type GetBundleAnalyzerPlugin = () => BundleAnalyzerPlugin;

const getBundleAnalyzerPlugin: GetBundleAnalyzerPlugin =
  (): BundleAnalyzerPlugin => {
    return new BundleAnalyzerPlugin({
      openAnalyzer: false,
      analyzerMode: "static",
      reportFilename: `../bundle-analyzes/analyzer-report.html`,
    });
  };

export default getBundleAnalyzerPlugin;
