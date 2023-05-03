const tsconfig = require("./tsconfig.node.json");
require("ts-node").register(tsconfig);
const { default: config } = require("./eslintrc.ts");

module.exports = config;
