import type { Meta, StoryFn } from "@storybook/react";
import PyScriptProvider from "../py-script-provider/py-script-provider";
import PyBox from "./py-box";
import type { PyBoxProperties, PyBoxTag } from "./py-box.types";

export default {
  component: PyBox,
} as Meta<typeof PyBox>;

const Template: StoryFn<PyBoxTag> = <T extends object>({
  ...rest
}: PyBoxProperties<T>): JSX.Element => {
  return (
    <PyScriptProvider
      jsSource="https://pyscript.net/alpha/pyscript.js"
      cssSource="https://pyscript.net/alpha/pyscript.css"
    >
      <PyBox {...rest} />
    </PyScriptProvider>
  );
};

export const PyBoxWithMultipleElementsExample: StoryFn<typeof PyBox> =
  Template.bind({});

PyBoxWithMultipleElementsExample.args = {
  children: [
    <div key="element-1">First element</div>,
    <div key="element-2">Second element</div>,
    <div key="element-3">Third element</div>,
  ],
};

export const PyBoxWithSingleElementExample: StoryFn<typeof PyBox> =
  Template.bind({});

PyBoxWithSingleElementExample.args = {
  children: <div>Single element</div>,
};
