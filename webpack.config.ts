import { join } from "path";
import { Configuration } from "webpack";
import nodeExternals from "webpack-node-externals";

type WebpackArguments = {
  mode: "production" | "development";
};

type SetupConfig = (
  environmentArguments: Record<string, unknown>,
  webpackArguments: WebpackArguments,
) => Configuration;

const setupConfig: SetupConfig = (): Configuration => {
  return {
    output: {
      path: join(process.cwd(), "destination"),
      library: "pyanalize_react",
    },
    resolve: {
      extensions: [".js", ".ts", ".tsx", ".jsx", ".mjs", ".wasm", ".json"],
      alias: {
        "~root": process.cwd(),
        "~components": join(process.cwd(), "source", "components"),
        "~types": join(process.cwd(), "source", "types"),
        "~utils": join(process.cwd(), "source", "utils"),
      },
    },
    externals: [nodeExternals()],
    entry: "./source/index.tsx",
    mode: "production",
    devtool: "source-map",
    module: {
      rules: [
        {
          test: /\.(ts|tsx|js|jsx)$/,
          exclude: /(node_modules)/,
          use: [
            {
              loader: "babel-loader",
              options: {
                presets: [
                  [
                    "@babel/env",
                    {
                      bugfixes: true,
                      useBuiltIns: "usage",
                      corejs: "3",
                    },
                  ],
                  "@babel/preset-typescript",
                  [
                    "@babel/preset-react",
                    {
                      runtime: "automatic",
                    },
                  ],
                ],
              },
            },
          ],
        },
      ],
    },
  };
};

export default setupConfig;
