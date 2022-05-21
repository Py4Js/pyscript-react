import { cleanup } from "@testing-library/react";
import { FC } from "react";
import { expectType } from "tsd";
import PyEnv, { PyEnvProperties } from "~components/base/PyEnv/PyEnv";

afterEach(cleanup);

describe("PyScript", (): void => {
  it("Has correct type", (): void => {
    expectType<FC<PyEnvProperties>>(PyEnv);
  });
});
