import { snakeCase } from "lodash";
import { customAlphabet } from "nanoid";

export type GeneratePythonVariableName = () => string;

type NanoId = (size?: number) => string;

const generatePythonVariableName: GeneratePythonVariableName = (): string => {
  const nanoId: NanoId = customAlphabet("abcdefghijklmnoprsquwxyz", 16);
  return snakeCase(nanoId());
};

export default generatePythonVariableName;
