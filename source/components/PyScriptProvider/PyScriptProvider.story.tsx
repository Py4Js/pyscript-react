import { ComponentMeta, ComponentStory } from "@storybook/react";
import PyScriptProvider, {
  PyScriptProviderProperties,
} from "./PyScriptProvider";
import { FunctionComponent } from "react";

export default {
  title: "PyScriptProvider",
  component: PyScriptProvider,
} as ComponentMeta<typeof PyScriptProvider>;

const Template: ComponentStory<FunctionComponent<PyScriptProviderProperties>> =
  ({ ...rest }: PyScriptProviderProperties): JSX.Element => {
    return (
      <PyScriptProvider {...rest}>
        <py-script>print("Hello World!")</py-script>
      </PyScriptProvider>
    );
  };

export const PyScriptProviderExample: ComponentStory<typeof PyScriptProvider> =
  Template.bind({});

PyScriptProviderExample.args = {
  cssSource: "https://pyscript.net/alpha/pyscript.css",
  jsSource: "https://pyscript.net/alpha/pyscript.js",
};
