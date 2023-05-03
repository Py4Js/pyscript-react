import { WebpackPluginInstance } from "webpack";
import getBundleAnalyzerPlugin from "../../plugins/get-bundle-analyzer-plugin/get-bundle-analyzer-plugin";
import getCopyWebpackPlugin from "../../plugins/get-copy-webpack-plugin/get-copy-webpack-plugin";
import getESLintPlugin from "../../plugins/get-eslint-plugin/get-eslint-plugin";
import getGenerateMainPackageJsonWebpackPlugin from "../../plugins/get-generate-main-package-json-webpack-plugin/get-generate-main-package-json-webpack-plugin";
import getGeneratePackageJsonWebpackPlugin from "../../plugins/get-generate-package-json-webpack-plugin/get-generate-package-json-webpack-plugin";
import getJsonMinimizerPlugin from "../../plugins/get-json-minimizer-plugin/get-json-minimizer-plugin";
import getUnusedWebpackPlugin from "../../plugins/get-unused-webpack-plugin/get-unused-webpack-plugin";
import { GetOutputArguments } from "../get-output/get-output";

type GetPluginsArguments = {
  target: GetOutputArguments["target"];
};

const getPlugins = ({
  target,
}: GetPluginsArguments): WebpackPluginInstance[] => {
  return [
    getGeneratePackageJsonWebpackPlugin({ target }) as WebpackPluginInstance,
    getCopyWebpackPlugin({ target }),
    getJsonMinimizerPlugin(),
    getBundleAnalyzerPlugin({ target }),
    getESLintPlugin(),
    getUnusedWebpackPlugin(),
    target === "umd" && getGenerateMainPackageJsonWebpackPlugin(),
    //getUnusedWebpackPlugin(),
    /*getDuplicatePackageCheckerPlugin(),
    getDefinePlugin({
      mode,
    }),
    getCleanWebpackPlugin(),
    getBrotliCompressionPlugin(),
    getGzipCompressionPlugin(),
    getESLintPlugin(),
    getJsonMinimizerPlugin(),
    getBundleAnalyzerPlugin(),
    getLicensePlugin(),
    getCopyWebpackPlugin(),*/
  ].filter(Boolean);
};

export default getPlugins;
