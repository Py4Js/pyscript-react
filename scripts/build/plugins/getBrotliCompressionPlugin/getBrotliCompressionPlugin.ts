import CompressionPlugin from "compression-webpack-plugin";
import { WebpackPluginInstance } from "webpack";

type GetBrotliCompressionPlugin = () => WebpackPluginInstance | void;

const getBrotliCompressionPlugin: GetBrotliCompressionPlugin =
  (): WebpackPluginInstance | void => {
    return new CompressionPlugin({
      filename: "[path]/br/[base].br",
      algorithm: "brotliCompress",
      test: /\.(js|mjs)$/,
      compressionOptions: {
        level: 11,
      },
      threshold: 10240,
      minRatio: 0.8,
      deleteOriginalAssets: false,
    });
  };

export default getBrotliCompressionPlugin;
