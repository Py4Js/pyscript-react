import type { Meta, StoryFn } from "@storybook/react";
import PyScriptProvider from "~root/source/library/components/py-script-provider/py-script-provider";
import PyEnv from "./py-env";
import type { PyEnvProperties, PyEnvTag } from "./py-env.types";

export default {
  component: PyEnv,
} as Meta<typeof PyEnv>;

const Template: StoryFn<PyEnvTag> = <T extends object>({
  ...rest
}: PyEnvProperties<T>): JSX.Element => {
  return (
    <PyScriptProvider
      jsSource="https://pyscript.net/alpha/pyscript.js"
      cssSource="https://pyscript.net/alpha/pyscript.css"
    >
      <PyEnv {...rest} />
    </PyScriptProvider>
  );
};

export const PyEnvExample: StoryFn<typeof PyEnv> = Template.bind({});

PyEnvExample.args = {
  children: ["folium", "numpy"],
};
