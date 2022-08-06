import { join } from "path";

const getResolve = () => {
  return {
    extensions: [".js", ".ts", ".tsx", ".jsx", ".mjs", ".wasm", ".json"],
    alias: {
      "~root": join(process.cwd(), "source"),
      "~scripts": join(process.cwd(), "scripts"),
      "~components": join(process.cwd(), "source", "components"),
      "~utils": join(process.cwd(), "source", "utils"),
    },
  };
};

export default getResolve;
