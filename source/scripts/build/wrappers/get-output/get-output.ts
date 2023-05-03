import { join } from "path";
import foldersNamesToTargetMapper from "../../constants/folders-names-to-target-mapper/folders-names-to-target-mapper";

export type GetOutputArguments = {
  target: "umd" | "esm" | "cjs" | "cjs2" | "amd" | "system" | "cjs-esm";
};

const getOutput = ({ target }: GetOutputArguments) => {
  return {
    path: join(process.cwd(), "library", target),
    publicPath: "/",
    filename: "[name].js",
    chunkFilename: "[id].js",
    library: target !== "esm" ? "pyscript-react" : undefined,
    libraryTarget: foldersNamesToTargetMapper[target] || target,
    globalObject: "this",
  };
};

export default getOutput;
