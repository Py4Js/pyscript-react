import { WebpackPluginInstance } from "webpack";
import getBrotliCompressionPlugin from "~scripts/build/plugins/getBrotliCompressionPlugin/getBrotliCompressionPlugin";
import getBundleAnalyzerPlugin from "~scripts/build/plugins/getBundleAnalyzerPlugin/getBundleAnalyzerPlugin";
import getCleanWebpackPlugin from "~scripts/build/plugins/getCleanWebpackPlugin/getCleanWebpackPlugin";
import getCopyWebpackPlugin from "~scripts/build/plugins/getCopyWebpackPlugin/getCopyWebpackPlugin";
import getDuplicatePackageCheckerPlugin from "~scripts/build/plugins/getDuplicatePackageCheckerPlugin/getDuplicatePackageCheckerPlugin";
import getESLintPlugin from "~scripts/build/plugins/getEslintPlugin/getEslintPlugin";
import getGzipCompressionPlugin from "~scripts/build/plugins/getGzipCompressionPlugin/getGzipCompressionPlugin";
import getJsonMinimizerPlugin from "~scripts/build/plugins/getJsonMinimizerPlugin/getJsonMinimizerPlugin";
import getUnusedWebpackPlugin from "~scripts/build/plugins/getUnusedWebpackPlugin/getUnusedWebpackPlugin";

const getPlugins = (): WebpackPluginInstance[] => {
  return [
    getUnusedWebpackPlugin(),
    getDuplicatePackageCheckerPlugin(),
    getCleanWebpackPlugin(),
    getBrotliCompressionPlugin(),
    getGzipCompressionPlugin(),
    getESLintPlugin(),
    getJsonMinimizerPlugin(),
    getBundleAnalyzerPlugin(),
    getCopyWebpackPlugin(),
  ].filter(Boolean) as WebpackPluginInstance[];
};

export default getPlugins;
