import { FoldersNamesToTargetMapper } from "./folders-names-to-target-mapper.types";

const foldersNamesToTargetMapper: FoldersNamesToTargetMapper = {
  esm: "module",
  cjs: "commonjs",
  cjs2: "commonjs2",
  "cjs-esm": "commonjs-module",
};

export default foldersNamesToTargetMapper;
