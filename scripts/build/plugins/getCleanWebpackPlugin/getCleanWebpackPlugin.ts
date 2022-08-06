import { CleanWebpackPlugin } from "clean-webpack-plugin";

type GetCleanWebpackPlugin = () => CleanWebpackPlugin;

const getCleanWebpackPlugin: GetCleanWebpackPlugin = (): CleanWebpackPlugin => {
  return new CleanWebpackPlugin({
    dry: true,
    dangerouslyAllowCleanPatternsOutsideProject: true,
  });
};

export default getCleanWebpackPlugin;
