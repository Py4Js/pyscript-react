import type { Meta, StoryFn } from "@storybook/react";
import type { FunctionComponent } from "react";
import PyScriptProvider from "./py-script-provider";
import type { PyScriptProviderProperties } from "./py-script-provider.types";

export default {
  component: PyScriptProvider,
} as Meta<typeof PyScriptProvider>;

const Template: StoryFn<FunctionComponent<PyScriptProviderProperties>> = ({
  ...rest
}: PyScriptProviderProperties): JSX.Element => {
  return <PyScriptProvider {...rest}>123</PyScriptProvider>;
};

export const PyScriptProviderExample: StoryFn<typeof PyScriptProvider> =
  Template.bind({});

PyScriptProviderExample.args = {};
