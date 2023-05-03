import GeneratePackageJsonPlugin from "generate-package-json-webpack-plugin";
import { GetOutputArguments } from "~root/source/scripts/build/wrappers/get-output/get-output";
import { version } from "../../../../../package.json";
import forOutputPackageJson from "../../../../../package.template.json";

const { name, ...rest } = forOutputPackageJson;

type GetGeneratePackageJsonWebpackPluginArguments = {
  target: GetOutputArguments["target"];
};

const getGeneratePackageJsonWebpackPlugin = ({
  target,
}: GetGeneratePackageJsonWebpackPluginArguments) => {
  return new GeneratePackageJsonPlugin(
    {
      ...rest,
      name: `${name}-${target}`,
      version,
    },
    {
      excludeDependencies: ["react", "react-helmet-async", "zustand"],
    },
  );
};

export default getGeneratePackageJsonWebpackPlugin;
