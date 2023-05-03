import CopyPlugin from "copy-webpack-plugin";
import { join } from "path";
import { GetOutputArguments } from "~scripts/build/wrappers/get-output/get-output";

type GetCopyWebpackPluginArguments = {
  target: GetOutputArguments["target"];
};

const getCopyWebpackPlugin = ({ target }: GetCopyWebpackPluginArguments) => {
  return new CopyPlugin({
    patterns: [
      {
        from: join(process.cwd(), "tsconfig.package.template.json"),
        to: join(process.cwd(), "library", target, "tsconfig.json"),
      },
      {
        from: join(process.cwd(), "global.d.ts"),
        to: join(process.cwd(), "library", target),
      },
      {
        from: join(process.cwd(), "README.md"),
        to: join(process.cwd(), "library", target),
      },
      target === "umd" && {
        from: join(process.cwd(), "README.md"),
        to: join(process.cwd(), "library"),
      },
    ].filter(Boolean),
  });
};

export default getCopyWebpackPlugin;
