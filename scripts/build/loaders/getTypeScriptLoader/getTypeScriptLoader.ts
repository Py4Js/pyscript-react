import { join } from "path";
import { RuleSetUseItem } from "webpack";
import Target from "../../types/target/target";

type GetTypeScriptLoaderArguments = {
  target: Target;
};

const getTypeScriptLoader = ({ target }: GetTypeScriptLoaderArguments) => {
  return {
    test: /\.(ts|tsx|js|jsx)$/,
    include: join(process.cwd(), "source"),
    exclude: /(node_modules)/,
    use: [
      target === Target.Cdn && {
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
      {
        loader: "ts-loader",
        options: {
          configFile: "tsconfig.node.json",
        },
      },
    ].filter(Boolean) as RuleSetUseItem[],
  };
};

export default getTypeScriptLoader;
