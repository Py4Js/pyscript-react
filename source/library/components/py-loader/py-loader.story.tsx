import type { Meta, StoryFn } from "@storybook/react";
import PyScriptProvider from "~root/source/library/components/py-script-provider/py-script-provider";
import PyLoader from "./py-loader";
import type { PyLoaderProperties, PyLoaderTag } from "./py-loader.types";

export default {
  component: PyLoader,
} as Meta<typeof PyLoader>;

const Template: StoryFn<PyLoaderTag> = <T extends object>({
  ...rest
}: PyLoaderProperties<T>): JSX.Element => {
  return (
    <PyScriptProvider
      jsSource="https://pyscript.net/alpha/pyscript.js"
      cssSource="https://pyscript.net/alpha/pyscript.css"
    >
      <PyLoader {...rest} />
    </PyScriptProvider>
  );
};

export const PyLoaderExample: StoryFn<typeof PyLoader> = Template.bind({});

PyLoaderExample.args = {};
