import getConfig from "~scripts/build/root/get-config/get-config";
import Mode from "~scripts/build/types/mode/mode";

const getConfigs = () => {
  return [
    getConfig({
      target: "umd",
      mode: Mode.Production,
    }),
    getConfig({
      target: "esm",
      mode: Mode.Production,
    }),
    getConfig({
      target: "cjs",
      mode: Mode.Production,
    }),
    getConfig({
      target: "cjs2",
      mode: Mode.Production,
    }),
    getConfig({
      target: "amd",
      mode: Mode.Production,
    }),
    getConfig({
      target: "system",
      mode: Mode.Production,
    }),
    getConfig({
      target: "cjs-esm",
      mode: Mode.Production,
    }),
  ];
};

export default getConfigs;
