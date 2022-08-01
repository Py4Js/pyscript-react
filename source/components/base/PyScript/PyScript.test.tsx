import { cleanup, render, RenderResult } from "@testing-library/react";
import { FC } from "react";
import { expectType } from "tsd";
import PyScript, { PyScriptTag } from "~components/base/PyScript/PyScript";
import PyScriptProvider from "~components/base/PyScriptProvider/PyScriptProvider";

afterEach(cleanup);

const PyScriptHelloWorldComponent: FC = (): JSX.Element => {
  return (
    <PyScriptProvider>
      {/* eslint-disable-next-line react/no-unescaped-entities*/}
      <PyScript data-testid="py-script">print("Hello world!")</PyScript>
    </PyScriptProvider>
  );
};
const PyScriptFoliumMapComponent: FC = (): JSX.Element => {
  return (
    <PyScriptProvider>
      <PyScript
        output="folium"
        generateOutputTag
        pyEnvContent={["folium"]}
        src="./test_data/folium_map.py"
      />
    </PyScriptProvider>
  );
};

describe("PyScript", (): void => {
  it("Renders component properly", async (): Promise<void> => {
    const { container }: RenderResult = render(<PyScriptHelloWorldComponent />);
    expect(container).toMatchSnapshot();
  });
  it("Compile component with Python properly", (): void => {
    const { getByTestId }: RenderResult = render(
      <PyScriptHelloWorldComponent />,
    );
    // eslint-disable-next-line testing-library/prefer-screen-queries
    const pyScript: HTMLElement = getByTestId("py-script");
    setTimeout((): void => {
      expect(pyScript).toContainEqual("Hello world!");
    }, 5_000);
  });
  it("Renders component properly with output, src, pyEnvContent and generateOutputTag", async (): Promise<void> => {
    const { container }: RenderResult = render(<PyScriptFoliumMapComponent />);
    expect(container).toMatchSnapshot();
  });
  it("Has correct type", (): void => {
    expectType<PyScriptTag>(PyScript);
  });
});
