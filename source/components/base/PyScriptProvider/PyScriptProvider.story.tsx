import { ComponentMeta, ComponentStory } from "@storybook/react";
import { FunctionComponent } from "react";
import PyScriptProvider, {
  PyScriptProviderProperties,
} from "./PyScriptProvider";

export default {
  title: "PyScriptProvider",
  component: PyScriptProvider,
} as ComponentMeta<typeof PyScriptProvider>;

const Template: ComponentStory<
  FunctionComponent<PyScriptProviderProperties>
> = ({ ...rest }: PyScriptProviderProperties): JSX.Element => {
  return (
    <PyScriptProvider {...rest}>
      <py-script>print("Hello World!")</py-script>
    </PyScriptProvider>
  );
};

export const PyScriptProviderExample: ComponentStory<typeof PyScriptProvider> =
  Template.bind({});

PyScriptProviderExample.args = {
  cssSrc: "https://pyscript.net/alpha/pyscript.css",
  jsSrc: "https://pyscript.net/alpha/pyscript.js",
};
