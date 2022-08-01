import { RuleSetRule } from "webpack";
import getJavaScriptModuleLoader from "~scripts/build/loaders/getJavaScriptModuleLoader/getJavaScriptModuleLoader";
import getSourceMapLoader from "~scripts/build/loaders/getSourceMapLoader/getSourceMapLoader";
import getTypeScriptLoader from "~scripts/build/loaders/getTypeScriptLoader/getTypeScriptLoader";
import Target from "../../types/target/target";

type GetLoaderArguments = {
  target: Target;
};

type GetLoader = (argument: GetLoaderArguments) => RuleSetRule[];

const getLoaders: GetLoader = ({
  target,
}: GetLoaderArguments): RuleSetRule[] => {
  return [
    getSourceMapLoader(),
    getTypeScriptLoader({ target }),
    getJavaScriptModuleLoader(),
  ];
};

export default getLoaders;
