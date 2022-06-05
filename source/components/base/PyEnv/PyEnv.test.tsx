import { cleanup } from "@testing-library/react";
import { expectType } from "tsd";
import PyEnv, { PyEnvTag } from "~components/base/PyEnv/PyEnv";

afterEach(cleanup);

describe("PyScript", (): void => {
  it("Has correct type", (): void => {
    expectType<PyEnvTag>(PyEnv);
  });
});
