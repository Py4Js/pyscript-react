import type { Configuration } from "webpack";
import Mode from "~root/source/scripts/build/types/mode/mode";
import type { GetOutputArguments } from "~scripts/build/wrappers/get-output/get-output";

export type GetConfigArguments = {
  mode: Mode;
} & Pick<GetOutputArguments, "target">;

export type GetConfig = (
  argument: GetConfigArguments,
) => Promise<Configuration>;
