import { WebpackPluginInstance } from "webpack";
import getBrotliCompressionPlugin from "../../plugins/getBrotliCompressionPlugin/getBrotliCompressionPlugin";
import getBundleAnalyzerPlugin from "../../plugins/getBundleAnalyzerPlugin/getBundleAnalyzerPlugin";
import getCleanWebpackPlugin from "../../plugins/getCleanWebpackPlugin/getCleanWebpackPlugin";
import getCopyWebpackPlugin from "../../plugins/getCopyWebpackPlugin/getCopyWebpackPlugin";
import getDuplicatePackageCheckerPlugin from "../../plugins/getDuplicatePackageCheckerPlugin/getDuplicatePackageCheckerPlugin";
import getESLintPlugin from "../../plugins/getEslintPlugin/getEslintPlugin";
import getGzipCompressionPlugin from "../../plugins/getGzipCompressionPlugin/getGzipCompressionPlugin";
import getJsonMinimizerPlugin from "../../plugins/getJsonMinimizerPlugin/getJsonMinimizerPlugin";
import getUnusedWebpackPlugin from "../../plugins/getUnusedWebpackPlugin/getUnusedWebpackPlugin";

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
