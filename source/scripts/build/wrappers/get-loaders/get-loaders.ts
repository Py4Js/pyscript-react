import { RuleSetRule } from "webpack";
import getJavaScriptModuleLoader from "~scripts/build/loaders/get-javascript-module-loader/get-javascript-module-loader";
import getSourceMapLoader from "~scripts/build/loaders/get-source-map-loader/get-source-map-loader";
import getTypeScriptLoader from "~scripts/build/loaders/get-typescript-loader/get-typescript-loader";
import Mode from "~scripts/build/types/mode/mode";

type GetLoaderArguments = {
  mode: Mode;
};

type GetLoader = (argument: GetLoaderArguments) => RuleSetRule[];

const getLoaders: GetLoader = ({ mode }: GetLoaderArguments): RuleSetRule[] => {
  return [
    getSourceMapLoader() as RuleSetRule,
    getTypeScriptLoader({ mode, withESBuild: false }),
    getJavaScriptModuleLoader(),
  ];
};

export default getLoaders;
