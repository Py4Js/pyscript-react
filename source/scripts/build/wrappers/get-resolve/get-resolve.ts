import { join } from "path";

const getResolve = () => {
  return {
    extensions: [".js", ".ts", ".jsx", ".tsx", ".mjs", ".wasm", ".json"],
    alias: {
      "~root": join(process.cwd()),
      "~components": join(process.cwd(), "source", "library", "components"),
      "~types": join(process.cwd(), "source", "library", "types"),
      "~utils": join(process.cwd(), "source", "library", "utils"),
      "~hooks": join(process.cwd(), "source", "library", "hooks"),
      "~scripts": join(process.cwd(), "source", "scripts"),
    },
  };
};

export default getResolve;
