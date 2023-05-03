import type { Meta, StoryFn } from "@storybook/react";
import PyScriptProvider from "~root/source/library/components/py-script-provider/py-script-provider";
import PyRepl from "./py-repl";
import type { PyReplProperties, PyReplTag } from "./py-repl.types";

export default {
  component: PyRepl,
} as Meta<typeof PyRepl>;

const Template: StoryFn<PyReplTag> = <T extends object>({
  ...rest
}: PyReplProperties<T>): JSX.Element => {
  return (
    <PyScriptProvider>
      <PyRepl {...rest} />
    </PyScriptProvider>
  );
};

export const PyReplExample: StoryFn<typeof PyRepl> = Template.bind({});

PyReplExample.args = {};
