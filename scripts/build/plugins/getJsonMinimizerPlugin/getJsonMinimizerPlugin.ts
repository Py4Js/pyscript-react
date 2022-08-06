import JsonMinimizerPlugin from "json-minimizer-webpack-plugin";

const getJsonMinimizerPlugin = () => {
  new JsonMinimizerPlugin();
};

export default getJsonMinimizerPlugin;
