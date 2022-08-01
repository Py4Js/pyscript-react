import { sync } from "glob";
import Target from "../../types/target/target";

type GetEntryPointArguments = {
  target: Target;
};

const getEntryPoint = ({
  target,
}: GetEntryPointArguments): string | { [key: string]: string } => {
  return target === Target.Npm
    ? sync("./source/**/*.{ts,tsx}").reduce(
        (
          accumulator: { [key: string]: string },
          file: string,
        ): { [key: string]: string } => {
          accumulator[
            file
              .replace(/^\.\/source\//, "")
              .replace(".tsx", "")
              .replace(".ts", "")
          ] = file;
          return accumulator;
        },
        {} as { [key: string]: string },
      )
    : "./source/index.tsx";
};

export default getEntryPoint;
