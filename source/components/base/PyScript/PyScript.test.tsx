import { cleanup, render } from "@testing-library/react";
import { FC } from "react";
import { expectType } from "tsd";
import PyScript, {
  PyScriptProperties,
} from "~components/base/PyScript/PyScript";
import PyScriptProvider from "~components/base/PyScriptProvider/PyScriptProvider";

afterEach(cleanup);

describe("PyScript", () => {
  it("Renders component properly", async (): Promise<void> => {
    const { container } = render(
      <PyScriptProvider>
        <PyScript>print("Hello world!")</PyScript>
      </PyScriptProvider>,
    );
    expect(container).toMatchSnapshot();
  });
  it("Renders component properly with PyEnv", async (): Promise<void> => {
    const { container } = render(
      <PyScriptProvider>
        <PyScript pyEnvContent={["numba"]}>
          {`
from numba import jit
@jit(nopython=True) 
def example():
  print("Hello world!")
`}
        </PyScript>
      </PyScriptProvider>,
    );
    expect(container).toMatchSnapshot();
  });
  it("Has correct type", () => {
    expectType<FC<PyScriptProperties>>(PyScript);
  });
});
