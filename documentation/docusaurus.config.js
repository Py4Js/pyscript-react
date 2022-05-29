const tsconfig = require("./tsconfig.json");
require("ts-node").register(tsconfig);
const { default: config } = require("./docusaurus.config.ts");

module.exports = config;
