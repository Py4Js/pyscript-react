const getSourceMapLoader = () => {
  return {
    test: /\.(js)$/,
    enforce: "pre" as "pre",
    exclude: /(node_modules)/,
    use: ["source-map-loader"],
  };
};

export default getSourceMapLoader;
