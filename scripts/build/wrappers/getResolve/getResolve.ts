import { join } from "path";

const getResolve = () => {
  return {
    extensions: [".js", ".ts", ".tsx", ".jsx", ".mjs", ".wasm", ".json"],
    alias: {
      "~root": join(process.cwd(), "source"),
      "~preload": join(process.cwd(), "source", "preload"),
      "~main": join(process.cwd(), "source", "main"),
      "~renderer": join(process.cwd(), "source", "renderer"),
      "~shared": join(process.cwd(), "source", "shared"),
      "~public": join(process.cwd(), "source", "public"),
    },
  };
};

export default getResolve;
