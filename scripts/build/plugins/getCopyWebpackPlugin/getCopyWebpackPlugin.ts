import CopyWebpackPlugin, { Pattern } from "copy-webpack-plugin";

type GetCopyWebpackPlugin = () => CopyWebpackPlugin;

const getCopyWebpackPlugin: GetCopyWebpackPlugin = (): CopyWebpackPlugin => {
  return new CopyWebpackPlugin({
    patterns: [{}].filter(Boolean) as Pattern[],
    options: {
      concurrency: 100,
    },
  });
};

export default getCopyWebpackPlugin;
