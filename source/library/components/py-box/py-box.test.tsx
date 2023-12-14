import { render } from "@testing-library/react";
import PyScriptProvider from "../py-script-provider";
import PyBox from "./py-box";

const children = [
  <div data-testid="first-element" key="first-element">
    first
  </div>,
  <div data-testid="second-element" key="second-element">
    second
  </div>,
  <div data-testid="third-element" key="third-element">
    third
  </div>,
];
describe("PyBox", () => {
  it("check if match snapshots without pyscript provider", () => {
    const { container } = render(<PyBox />);
    expect(container).toMatchSnapshot();
  });
  it("check if match snapshots with alpha pyscript provider", () => {
    const { container } = render(
      <PyScriptProvider
        jsSource="https://pyscript.net/alpha/pyscript.js"
        cssSource="https://pyscript.net/alpha/pyscript.css"
      >
        <PyBox widths="2/3;1/6;1/6" children={children} />
      </PyScriptProvider>,
    );
    expect(container).toMatchSnapshot();
  });
  it("ensure that PyBox doesn't work with latest pyscript provider ", () => {
    const { container } = render(
      <PyScriptProvider>
        <PyBox children={children} />
      </PyScriptProvider>,
    );
    expect(container).toMatchSnapshot();
  });
});
