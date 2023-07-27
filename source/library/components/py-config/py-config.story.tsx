import type { Meta, StoryFn } from "@storybook/react";
import PyScriptProvider from "~root/source/library/components/py-script-provider/py-script-provider";
import PyConfig from "./py-config";
import type { PyConfigProperties, PyConfigTag } from "./py-config.types";

export default {
  component: PyConfig,
} as Meta<typeof PyConfig>;

const pythonTestFile: string = "./test_file.py";

const Template: StoryFn<PyConfigTag> = <T extends object>({
  ...rest
}: PyConfigProperties<T>): JSX.Element => {
  return (
    <PyScriptProvider>
      <PyConfig {...rest} />
    </PyScriptProvider>
  );
};

export const PyConfigExample: StoryFn<typeof PyConfig> = Template.bind({});

PyConfigExample.args = {
  type: "json",
  packages: new Set(["matplotlib", "numpy", "folium"]),
  plugins: new Set(["https://pyscript.net/latest/plugins/python/py_tutor.py"]),
  fetch: [
    {
      files: new Set([pythonTestFile]),
    },
  ],
};

export const PyConfigExternalJsonConfigExample: StoryFn<typeof PyConfig> =
  Template.bind({});

PyConfigExternalJsonConfigExample.args = {
  type: "json",
  source: pythonTestFile,
};

export const PyConfigExternalTomlConfigExample: StoryFn<typeof PyConfig> =
  Template.bind({});

PyConfigExternalTomlConfigExample.args = {
  type: "toml",
  source: pythonTestFile,
};

export const PyConfigTomlConfigExample: StoryFn<typeof PyConfig> =
  Template.bind({});

PyConfigTomlConfigExample.args = {
  type: "toml",
  children: "",
};
