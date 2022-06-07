import { ComponentMeta, ComponentStory } from "@storybook/react";
import PyScriptProvider from "../PyScriptProvider/PyScriptProvider";
import PyTitle from "./PyTitle";
import { PyTitleProperties, PyTitleTag } from "./PyTitle.types";

export default {
  title: "PyTitle",
  component: PyTitle,
} as ComponentMeta<typeof PyTitle>;

const Template: ComponentStory<PyTitleTag> = <T extends object>({
  ...rest
}: PyTitleProperties<T>): JSX.Element => {
  return (
    <PyScriptProvider>
      <py-title {...rest}>Example title</py-title>
    </PyScriptProvider>
  );
};

export const PyTitleExample: ComponentStory<typeof PyTitle> = Template.bind({});

PyTitleExample.args = {
  children: "Example title",
};
