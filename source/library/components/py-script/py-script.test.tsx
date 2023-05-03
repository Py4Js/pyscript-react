import { cleanup, render, RenderResult } from "@testing-library/react";
import { FC } from "react";
import { expectType } from "tsd";
import PyScriptProvider from "~components/py-script-provider/py-script-provider";
import PyScript from "~components/py-script/py-script";
import { PyScriptTag } from "~components/py-script/py-script.types";

afterEach(cleanup);

const PyScriptHelloWorldComponent: FC = (): JSX.Element => {
  return (
    <PyScriptProvider>
      <PyScript
        aria-label="Hello World generated based on Python code"
        data-testid="py-script"
      >
        print("Hello world!")
      </PyScript>
    </PyScriptProvider>
  );
};

const PyScriptFoliumMapComponent: FC = (): JSX.Element => {
  return (
    <PyScriptProvider>
      <PyScript
        aria-label="Folium map generated based on Python code"
        data-testid="py-script"
        output="folium"
        generateOutputTag
        pyConfigProps={{
          type: "json",
        }}
        pyConfigContent={{
          packages: ["folium"],
        }}
        source="./test_data/folium_map.py"
      />
    </PyScriptProvider>
  );
};

const PyScriptFoliumMapWithExternalTomlConfigComponent: FC =
  (): JSX.Element => {
    return (
      <PyScriptProvider>
        <PyScript
          aria-label="Folium map generated based on Python code"
          data-testid="py-script"
          output="folium"
          generateOutputTag
          pyConfigProps={{
            source: "./test_data/folium_map_config.toml",
            type: "toml",
          }}
          source="./test_data/folium_map.py"
        />
      </PyScriptProvider>
    );
  };

const PyScriptLegacyFoliumMapComponent: FC = (): JSX.Element => {
  return (
    <PyScriptProvider>
      <PyScript
        aria-label="Folium map generated based on Python code"
        data-testid="py-script"
        output="folium"
        generateOutputTag
        pyEnvContent={["folium"]}
        source="./test_data/folium_map.py"
      />
    </PyScriptProvider>
  );
};

const PyScriptLegacyFoliumMapWithGenerateOutputTagWithStringValueComponent: FC =
  (): JSX.Element => {
    return (
      <PyScriptProvider>
        <PyScript
          aria-label="Folium map generated based on Python code"
          data-testid="py-script"
          output="folium"
          generateOutputTag="section"
          pyEnvContent={["folium"]}
          source="./test_data/folium_map.py"
        />
      </PyScriptProvider>
    );
  };

describe("PyScript", (): void => {
  it("Renders component properly", async (): Promise<void> => {
    const { container }: RenderResult = render(<PyScriptHelloWorldComponent />);
    expect(container).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
  it("Renders component properly with toml external config", async (): Promise<void> => {
    const { container }: RenderResult = render(
      <PyScriptFoliumMapWithExternalTomlConfigComponent />,
    );
    expect(container).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
  it("Compile component with Python properly", (): void => {
    const { getByTestId }: RenderResult = render(
      <PyScriptHelloWorldComponent />,
    );
    // eslint-disable-next-line testing-library/prefer-screen-queries
    const pyScript: HTMLElement = getByTestId("py-script");
    setTimeout((): void => {
      expect(pyScript).toBeInTheDocument();
      expect(pyScript).toContainEqual("Hello world!");
    }, 5_000);
  });
  it("Renders component properly with output, source, pyEnvContent and generateOutputTag", async (): Promise<void> => {
    const { container }: RenderResult = render(
      <PyScriptLegacyFoliumMapComponent />,
    );
    expect(container).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
  it("Compile component with Python folium example properly", (): void => {
    const { getByTestId }: RenderResult = render(
      <PyScriptLegacyFoliumMapComponent />,
    );
    // eslint-disable-next-line testing-library/prefer-screen-queries
    const pyScript: HTMLElement = getByTestId("py-script");
    setTimeout((): void => {
      expect(pyScript.getElementsByTagName("img").length).not.toBe(0);
    }, 5_000);
  });
  it('Generates a valid html tag on value: "true" for generateOutputTag', (): void => {
    const { container }: RenderResult = render(
      <PyScriptLegacyFoliumMapComponent />,
    );
    setTimeout((): void => {
      expect(container.getElementsByTagName("div")[0].id).toBe("folium");
    }, 5_000);
  });
  it('Generates a valid html tag on value: "keyof ReactHTML" for generateOutputTag', (): void => {
    const { container }: RenderResult = render(
      <PyScriptLegacyFoliumMapWithGenerateOutputTagWithStringValueComponent />,
    );
    setTimeout((): void => {
      expect(container.getElementsByTagName("section")[0].id).toBe("folium");
    }, 5_000);
  });
  it("Renders component properly with output, source, pyConfigContent and generateOutputTag", async (): Promise<void> => {
    const { container }: RenderResult = render(<PyScriptFoliumMapComponent />);
    expect(container).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
  it("Has correct type", (): void => {
    expectType<PyScriptTag>(PyScript);
  });
});
