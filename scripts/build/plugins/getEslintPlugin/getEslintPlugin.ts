import ESLintPlugin from "eslint-webpack-plugin";

type GetESLintPlugin = () => ESLintPlugin;

const getESLintPlugin: GetESLintPlugin = (): ESLintPlugin => {
  return new ESLintPlugin({
    extensions: ["ts", "tsx", "js", "jsx"],
  });
};

export default getESLintPlugin;
