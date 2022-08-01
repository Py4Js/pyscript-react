const getJavaScriptModuleLoader = () => {
  return {
    test: /\.m?js/,
    resolve: {
      fullySpecified: false,
    },
  };
};

export default getJavaScriptModuleLoader;
