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
  ],
  settings: {
    react: {
      version: "detect",
    },
  },
  rules: {
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
      },
    ],
    "max-params": ["error", 1],
    "@typescript-eslint/no-inferrable-types": "off",
    "no-invalid-this": "error",
    "react/react-in-jsx-scope": "off",
    "no-console": "warn",
    "react-hooks/exhaustive-deps": "off",
    "no-nested-ternary": "off",
  },
  overrides: [
    {
      files: ["*.js"],
      rules: {
        "@typescript-eslint/no-var-requires": "off",
      },
    },
    {
      files: ["*.ts", "*.tsx"],
      rules: {
        "@typescript-eslint/no-unused-vars": "off",
      },
    },
  ],
};

export default config;
