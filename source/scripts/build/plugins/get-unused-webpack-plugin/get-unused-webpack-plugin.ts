import { join } from "path";
import UnusedWebpackPlugin from "unused-webpack-plugin";

const getUnusedWebpackPlugin = () => {
  return new UnusedWebpackPlugin({
    directories: [join(process.cwd(), "source", "library")],
    exclude: [
      "*.test.ts",
      "*.test.ts.snap",
      "*.test.tsx",
      "*.test.tsx.snap",
      "*.story.ts",
      "*.story.tsx",
    ],
    root: process.cwd(),
  });
};

export default getUnusedWebpackPlugin;
