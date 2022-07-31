import GeneratePackageJsonPlugin from "generate-package-json-webpack-plugin";
import { sync } from "glob";
import { join } from "path";
import TsconfigPathsPlugin from "tsconfig-paths-webpack-plugin";
import {
  Configuration,
  ResolvePluginInstance,
  WebpackPluginInstance,
} from "webpack";
import nodeExternals from "webpack-node-externals";

type WebpackArguments = {
  mode: "production" | "development";
};

type SetupConfig = (
  environmentArguments: Record<string, unknown>,
  webpackArguments: WebpackArguments,
) => Configuration;

delete process.env.TS_NODE_PROJECT;

const setupConfig: SetupConfig = (): Configuration => {
  return {
    output: {
      path: join(process.cwd(), "library"),
      library: "pyscript_react",
      filename: "[name].js",
      sourceMapFilename: "[name].js.map",
      libraryTarget: "umd",
      globalObject: "this",
    },
    resolve: {
      extensions: [
        ".js",
        ".ts",
        ".tsx",
        ".jsx",
        ".mjs",
        ".wasm",
        ".json",
        ".d.ts",
      ],
      alias: {
        "~root": process.cwd(),
        "~components": join(process.cwd(), "source", "components"),
        "~types": join(process.cwd(), "source", "types"),
        "~utils": join(process.cwd(), "source", "utils"),
        "~scripts": join(process.cwd(), "scripts"),
      },
      plugins: [
        new TsconfigPathsPlugin({
          configFile: "./tsconfig.node.json",
        }) as unknown as ResolvePluginInstance,
      ],
    },
    externals: [nodeExternals()],
    entry: sync("./source/**/*.{ts,tsx}").reduce(
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
    ),
    mode: "production",
    devtool: "source-map",
    plugins: [
      new GeneratePackageJsonPlugin(
        {
          name: "pyscript-react",
          version: "1.0.0",
          main: "./index.js",
          types: "./index.d.ts",
        },
        {
          excludeDependencies: ["core-js"],
        },
      ) as WebpackPluginInstance,
    ],
    module: {
      rules: [
        {
          test: /\.(ts|tsx|js|jsx)$/,
          exclude: /(node_modules)/,
          use: [
            /*{
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
            },*/
            {
              loader: "ts-loader",
              options: {
                configFile: "tsconfig.node.json",
              },
            },
            {
              loader: "@stavalfi/babel-plugin-module-resolver-loader",
              options: {
                root: ["./source"],
                extensions: [".js", ".jsx", ".d.ts", ".ts", ".tsx"],
              },
            },
          ],
        },
      ],
    },
  };
};

export default setupConfig;
