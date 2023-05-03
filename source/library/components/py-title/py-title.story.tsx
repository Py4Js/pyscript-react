import type { Meta, StoryFn } from "@storybook/react";
import PyScriptProvider from "~root/source/library/components/py-script-provider/py-script-provider";
import PyTitle from "./py-title";
import type { PyTitleProperties, PyTitleTag } from "./py-title.types";

export default {
  component: PyTitle,
} as Meta<typeof PyTitle>;

const Template: StoryFn<PyTitleTag> = <T extends object>({
  ...rest
}: PyTitleProperties<T>): JSX.Element => {
  return (
    <PyScriptProvider
      jsSource="https://pyscript.net/alpha/pyscript.js"
      cssSource="https://pyscript.net/alpha/pyscript.css"
    >
      <PyTitle {...rest} />
    </PyScriptProvider>
  );
};

export const PyTitleExample: StoryFn<typeof PyTitle> = Template.bind({});

PyTitleExample.args = {
  children: "Example title",
};
