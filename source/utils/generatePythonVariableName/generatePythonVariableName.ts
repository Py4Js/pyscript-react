import { snakeCase } from "lodash";
import { customAlphabet } from "nanoid";

export type GeneratePythonVariableName = () => string;

const generatePythonVariableName: GeneratePythonVariableName = (): string => {
  const nanoid = customAlphabet("abcdefghijklmnoprsquwxyz", 16);
  return snakeCase(nanoid());
};
export default generatePythonVariableName;
