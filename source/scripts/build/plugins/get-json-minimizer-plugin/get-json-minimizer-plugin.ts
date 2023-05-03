import JsonMinimizerPlugin from "json-minimizer-webpack-plugin";

const getJsonMinimizerPlugin = () => {
  return new JsonMinimizerPlugin();
};

export default getJsonMinimizerPlugin;
