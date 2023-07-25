import type { Meta, StoryFn } from "@storybook/react";
import PyScriptProvider from "~components/py-script-provider/py-script-provider";
import PyScript from "./py-script";
import type { PyScriptProperties, PyScriptTag } from "./py-script.types";

export default {
  component: PyScript,
} as Meta<typeof PyScript>;

const Template: StoryFn<PyScriptTag> = <T extends object>({
  ...rest
}: PyScriptProperties<T>): JSX.Element => {
  return (
    <PyScriptProvider>
      <PyScript {...rest} />
    </PyScriptProvider>
  );
};

const LegacyTemplate: StoryFn<PyScriptTag> = <T extends object>({
  ...rest
}: PyScriptProperties<T>): JSX.Element => {
  return (
    <PyScriptProvider
      jsSource="https://pyscript.net/alpha/pyscript.js"
      cssSource="https://pyscript.net/alpha/pyscript.css"
    >
      <PyScript {...rest} />
    </PyScriptProvider>
  );
};

export const PyScriptLegacyHelloWorldExample: StoryFn<typeof PyScript> =
  LegacyTemplate.bind({});

PyScriptLegacyHelloWorldExample.args = {
  children: 'print("Hello world!")',
};

export const PyScriptHelloWorldExample: StoryFn<typeof PyScript> =
  Template.bind({});

PyScriptHelloWorldExample.args = {
  children: 'display("Hello world!")',
};

export const PyScriptFoliumExample: StoryFn<typeof PyScript> = Template.bind(
  {},
);

PyScriptFoliumExample.args = {
  source: "/folium_map.py",
  output: "folium",
  generateOutputTag: true,
  pyConfigProps: {
    type: "json",
    packages: new Set(["folium"]),
  },
};

export const PyScriptFoliumWithTomlConfigExample: StoryFn<typeof PyScript> =
  Template.bind({});

PyScriptFoliumWithTomlConfigExample.args = {
  source: "/folium_map.py",
  output: "folium",
  generateOutputTag: true,
  pyConfigProps: {
    type: "toml",
  },
  pyConfigContent: 'packages = ["folium"]',
};

export const PyScriptFoliumWithExternalTomlConfigExample: StoryFn<
  typeof PyScript
> = Template.bind({});

PyScriptFoliumWithExternalTomlConfigExample.args = {
  source: "/folium_map.py",
  output: "folium",
  generateOutputTag: true,
  pyConfigProps: {
    type: "toml",
    source: "./folium_map_config.toml",
  },
};

export const PyScriptMatplotlibExample: StoryFn<typeof PyScript> =
  Template.bind({});

PyScriptMatplotlibExample.args = {
  source: "/matplot_chart.py",
  output: "mpl",
  generateOutputTag: true,
  pyConfigProps: {
    type: "json",
    packages: new Set(["matplotlib", "numpy"]),
  },
};

export const PyScriptFoliumWithExternalJsonConfigExample: StoryFn<
  typeof PyScript
> = Template.bind({});

PyScriptFoliumWithExternalJsonConfigExample.args = {
  source: "/folium_map.py",
  output: "folium",
  generateOutputTag: true,
  pyConfigProps: {
    type: "json",
    source: "./folium_map_config.json",
  },
};

export const PyScriptLegacyFoliumExample: StoryFn<typeof PyScript> =
  LegacyTemplate.bind({});

PyScriptLegacyFoliumExample.args = {
  source: "/legacy_folium_map.py",
  output: "folium",
  generateOutputTag: true,
  pyEnvContent: new Set(["folium"]),
};

export const PyScriptLegacyFibonacciExample: StoryFn<typeof PyScript> =
  LegacyTemplate.bind({});

PyScriptLegacyFibonacciExample.args = {
  source: "/fibonacci.py",
};
