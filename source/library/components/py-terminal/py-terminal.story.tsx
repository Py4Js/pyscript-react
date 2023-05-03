import type { Meta, StoryFn } from "@storybook/react";
import PyScriptProvider from "~root/source/library/components/py-script-provider/py-script-provider";
import PyScript from "../py-script/py-script";
import PyTerminal from "./py-terminal";
import type { PyTerminalProperties, PyTerminalTag } from "./py-terminal.types";

export default {
  component: PyTerminal,
} as Meta<typeof PyTerminal>;

const Template: StoryFn<PyTerminalTag> = <T extends object>({
  ...rest
}: PyTerminalProperties<T>): JSX.Element => {
  return (
    <PyScriptProvider>
      <PyTerminal {...rest} />
      <PyScript>print("Example terminal content")</PyScript>
    </PyScriptProvider>
  );
};

export const PyTerminalExample: StoryFn<typeof PyTerminal> = Template.bind({});

PyTerminalExample.args = {};
