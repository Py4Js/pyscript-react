import generate from "generate-file-webpack-plugin";
import { version } from "../../../../../package.json";
import packageJsonTemplate from "../../../../../package.template.json";

const { main, ...rest } = packageJsonTemplate;

const getGenerateMainPackageJsonWebpackPlugin = () => {
  return generate({
    file: "../package.json",
    content: JSON.stringify({
      ...rest,
      version,
      main: "./umd/index.js",
    }),
  });
};

export default getGenerateMainPackageJsonWebpackPlugin;
