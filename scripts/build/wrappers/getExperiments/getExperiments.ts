import { Configuration } from "webpack";

const getExperiments = (): Configuration["experiments"] => {
  return {
    syncWebAssembly: true,
    futureDefaults: true,
    asyncWebAssembly: true,
    topLevelAwait: true,
  };
};

export default getExperiments;
