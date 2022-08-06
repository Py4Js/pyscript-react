import { join } from "path";

const getOutput = () => {
  return {
    path: join(process.cwd(), "library"),
    library: "pyscript_react",
    filename: "[name].js",
    sourceMapFilename: "[name].js.map",
    libraryTarget: "umd",
    globalObject: "this",
    chunkFilename: "[id].js",
  };
};

export default getOutput;
