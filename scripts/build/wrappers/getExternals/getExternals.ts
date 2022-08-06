import nodeExternals from "webpack-node-externals";

const getExternals = () => {
  return [nodeExternals()];
};

export default getExternals;
