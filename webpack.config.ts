import { Configuration } from "webpack";
import getConfig from "./scripts/build/root/getConfig/getConfig";
import Mode from "./scripts/build/types/mode/mode";
import Target from "./scripts/build/types/target/target";

type WebpackArguments = {
  mode: Mode;
};

interface EnvironmentArguments {
  target: Target;
}

type SetupConfig = (
  environmentArguments: EnvironmentArguments,
  webpackArguments: WebpackArguments,
) => Configuration;

const setupConfig: SetupConfig = (
  { target }: EnvironmentArguments,
  { mode }: WebpackArguments,
): Configuration => {
  return getConfig({ target, mode });
};

export default setupConfig;
