import { RuleSetRule } from "webpack";
import getJavaScriptModuleLoader from "../../loaders/getJavaScriptModuleLoader/getJavaScriptModuleLoader";
import getSourceMapLoader from "../../loaders/getSourceMapLoader/getSourceMapLoader";
import getTypeScriptLoader from "../../loaders/getTypeScriptLoader/getTypeScriptLoader";
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
