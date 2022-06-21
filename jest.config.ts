import { Config } from "@jest/types";
import { join } from "path";
import { pathsToModuleNameMapper } from "ts-jest";
import { compilerOptions } from "~root/tsconfig.json";

const config: Config.InitialOptions = {
  preset: "ts-jest",
  testTimeout: 100_000_000,
  setupFilesAfterEnv: [
    "jest-extended",
    join(process.cwd(), "source", "setupTests.ts"),
  ],
  testEnvironment: "jsdom",
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
    prefix: join(process.cwd(), "."),
  }),
  modulePathIgnorePatterns: ["destination"],
};

export default config;
