import CompressionPlugin from "compression-webpack-plugin";
import { WebpackPluginInstance } from "webpack";

type GetGzipCompressionPlugin = () => WebpackPluginInstance | void;

const getGzipCompressionPlugin: GetGzipCompressionPlugin =
  (): WebpackPluginInstance | void => {
    return new CompressionPlugin({
      filename: "[path]/gz/[base].gz",
      algorithm: "gzip",
      test: /\.(js|mjs)$/,
      threshold: 10240,
      minRatio: 0.8,
      deleteOriginalAssets: false,
    });
  };

export default getGzipCompressionPlugin;
