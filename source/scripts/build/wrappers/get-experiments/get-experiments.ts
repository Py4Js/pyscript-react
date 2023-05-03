import { GetOutputArguments } from "~scripts/build/wrappers/get-output/get-output";

type GetExperimentsArguments = {
  target: GetOutputArguments["target"];
};

const getExperiments = ({ target }: GetExperimentsArguments) => {
  return {
    outputModule: target === "esm" ? true : undefined,
  };
};

export default getExperiments;
