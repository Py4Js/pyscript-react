import type { Linter } from "eslint";

const config: Linter.Config = {
  env: {
    browser: true,
    es2021: true,
    "jest/globals": true,
    node: true,
  },
  extends: [
    "plugin:testing-library/react",
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:jsdoc/recommended",
    "plugin:react-hooks/recommended",
    "plugin:jsx-a11y/recommended",
    "prettier",
    "plugin:sonarjs/recommended",
    "plugin:node/recommended",
    "plugin:markdown/recommended",
    "plugin:json/recommended",
    "plugin:yml/recommended",
    "plugin:toml/recommended",
    "plugin:lodash/recommended",
    "plugin:xss/recommended",
    "plugin:no-unsanitized/DOM",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    tsconfigRootDir: __dirname,
    ecmaVersion: "latest",
    project: "./tsconfig.json",
    sourceType: "module",
  },
  plugins: [
    "testing-library",
    "react",
    "@typescript-eslint",
    "eslint-plugin-tsdoc",
    "jsdoc",
    "jest",
    "prettier",
    "sonarjs",
    "@emotion",
    "deprecation",
    "html",
    "markdown",
    "@html-eslint",
    "json",
    "yml",
    "toml",
    "lodash",
    "xss",
    "no-loops",
    "no-unsanitized",
  ],
  settings: {
    react: {
      version: "detect",
    },
  },
  rules: {
    "no-loops/no-loops": "error",
    "lodash/prefer-lodash-method": "off",
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
      },
    ],
    "jsx-a11y/aria-role": [
      2,
      {
        ignoreNonDOM: true,
      },
    ],
    "no-restricted-imports": [
      "error",
      {
        paths: [
          {
            name: "react",
            importNames: ["useState"],
            message: "Please import 'useState' from hooks folder instead.",
          },
        ],
      },
    ],
    "max-params": ["error", 1],
    "@typescript-eslint/no-inferrable-types": "off",
    "no-invalid-this": "error",
    "react/react-in-jsx-scope": "off",
    "no-console": "warn",
    "react-hooks/exhaustive-deps": "off",
    "no-nested-ternary": "off",
    "deprecation/deprecation": "warn",
    "node/no-unsupported-features/es-syntax": "off",
    "node/no-missing-require": "off",
    "node/no-missing-import": "off",
    "node/no-extraneous-import": "off",
    "node/no-unsupported-features/es-builtins": "off",
  },
  overrides: [
    {
      files: ["*.yaml", "*.yml"],
      parser: "yaml-eslint-parser",
    },
    {
      files: ["*.json", "*.js"],
      parserOptions: {
        project: null,
      },
      rules: {
        "deprecation/deprecation": "off",
      },
    },
    {
      files: ["*.js"],
      rules: {
        "@typescript-eslint/no-var-requires": "off",
      },
    },
    {
      files: ["*.json"],
      rules: {
        "sonarjs/no-duplicate-string": "off",
      },
    },
    {
      files: ["*.html", "*.htm"],
      parser: "@html-eslint/parser",
      extends: ["plugin:@html-eslint/recommended"],
    },
    {
      files: ["*.toml"],
      parser: "toml-eslint-parser",
    },
  ],
};

export default config;
