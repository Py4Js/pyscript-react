import { cleanup } from "@testing-library/react";
import { expectType } from "tsd";
import { FC } from "react";
import PyEnv, { PyEnvProperties } from "~components/base/PyEnv/PyEnv";

afterEach(cleanup);

describe("PyScript", () => {
  it("Has correct type", () => {
    expectType<FC<PyEnvProperties>>(PyEnv);
  });
});
