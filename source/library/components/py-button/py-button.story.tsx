import type { Meta, StoryFn } from "@storybook/react";
import PyScriptProvider from "~components/py-script-provider/py-script-provider";
import PyButton from "./py-button";
import type { PyButtonProperties, PyButtonTag } from "./py-button.types";

export default {
  component: PyButton,
} as Meta<typeof PyButton>;

const Template: StoryFn<PyButtonTag> = <T extends object>({
  ...rest
}: PyButtonProperties<T>): JSX.Element => {
  return (
    <PyScriptProvider
      jsSource="https://pyscript.net/alpha/pyscript.js"
      cssSource="https://pyscript.net/alpha/pyscript.css"
    >
      <PyButton {...rest} />
    </PyScriptProvider>
  );
};

export const PyButtonExample: StoryFn<typeof PyButton> = Template.bind({});

PyButtonExample.args = {
  label: "Example title",
};
