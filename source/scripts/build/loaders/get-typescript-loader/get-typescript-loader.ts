import { join } from "path";

const getTypeScriptLoader = () => {
  return {
    test: /\.(ts|js|tsx|jsx)$/,
    exclude: /(node_module|destination)/,
    include: [join(process.cwd(), "source")],
    use: [
      /*{
        loader: "cache-loader",
        options: {
          cacheDirectory: resolve(".webpackCache"),
        },
      },*/
      {
        loader: "babel-loader",
        options: {
          cacheDirectory: true,
          presets: [
            [
              "@babel/env",
              {
                bugfixes: true,
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
  };
};

export default getTypeScriptLoader;
