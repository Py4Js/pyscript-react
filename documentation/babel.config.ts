const newConfig = {
  presets: [
    require.resolve("@docusaurus/core/lib/babel/preset"),
    [
      "@babel/preset-react",
      {
        runtime: "automatic",
      },
    ],
  ],
  plugins: ["inline-react-svg", "@emotion"],
};

export default newConfig;
