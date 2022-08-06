import CopyWebpackPlugin from "copy-webpack-plugin";
import { join } from "path";

const getCopyWebpackPlugin = (): CopyWebpackPlugin => {
  return new CopyWebpackPlugin({
    patterns: [
      {
        from: join(process.cwd(), "tsconfig.library.json"),
        to: join(process.cwd(), "library", "tsconfig.json"),
        noErrorOnMissing: true,
      },
    ],
    options: {
      concurrency: 100,
    },
  });
};

export default getCopyWebpackPlugin;
