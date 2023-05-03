import type { Meta, StoryFn } from "@storybook/react";
import PyScriptProvider from "~root/source/library/components/py-script-provider/py-script-provider";
import PyInputBox from "./py-input-box";
import type { PyInputBoxProperties, PyInputBoxTag } from "./py-input-box.types";

export default {
  component: PyInputBox,
} as Meta<typeof PyInputBox>;

const Template: StoryFn<PyInputBoxTag> = <T extends object>({
  ...rest
}: PyInputBoxProperties<T>): JSX.Element => {
  return (
    <PyScriptProvider
      jsSource="https://pyscript.net/alpha/pyscript.js"
      cssSource="https://pyscript.net/alpha/pyscript.css"
    >
      <PyInputBox {...rest} />
    </PyScriptProvider>
  );
};

export const PyInputBoxExample: StoryFn<typeof PyInputBox> = Template.bind({});

PyInputBoxExample.args = {
  children: "Example title",
};
