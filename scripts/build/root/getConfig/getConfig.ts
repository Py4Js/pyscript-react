import { Configuration } from "webpack";
import Mode from "~scripts/build/types/mode/mode";

type GetConfig = () => Configuration;

const getConfig: GetConfig = (): Configuration => {
  return {
    mode: Mode.Production,
  };
};

export default getConfig;
