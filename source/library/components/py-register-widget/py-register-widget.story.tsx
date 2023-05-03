import type { Meta, StoryFn } from "@storybook/react";
import PyScriptProvider from "~root/source/library/components/py-script-provider/py-script-provider";
import PyRegisterWidget from "./py-register-widget";
import type {
  PyRegisterWidgetProperties,
  PyRegisterWidgetTag,
} from "./py-register-widget.types";

export default {
  component: PyRegisterWidget,
} as Meta<typeof PyRegisterWidget>;

const Template: StoryFn<PyRegisterWidgetTag> = <T extends object>({
  ...rest
}: PyRegisterWidgetProperties<T>): JSX.Element => {
  return (
    <PyScriptProvider
      jsSource="https://pyscript.net/alpha/pyscript.js"
      cssSource="https://pyscript.net/alpha/pyscript.css"
    >
      <PyRegisterWidget {...rest} />
    </PyScriptProvider>
  );
};

export const PyRegisterWidgetExample: StoryFn<typeof PyRegisterWidget> =
  Template.bind({});

PyRegisterWidgetExample.args = {
  src: "/folium_map.py",
};
