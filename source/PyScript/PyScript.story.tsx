import { ComponentMeta, ComponentStory } from "@storybook/react";
import PyScript, { PyScriptProperties } from "./PyScript";
import { FunctionComponent } from "react";

export default {
  title: "PyScript",
  component: PyScript,
} as ComponentMeta<typeof PyScript>;

const Template: ComponentStory<FunctionComponent<PyScriptProperties>> = ({
  ...rest
}: PyScriptProperties): JSX.Element => {
  return <PyScript {...rest} />;
};

export const PyScriptExample: ComponentStory<typeof PyScript> = Template.bind(
  {},
);

PyScriptExample.args = {
  cssSource: "https://pyscript.net/alpha/pyscript.css",
  jsSource: "https://pyscript.net/alpha/pyscript.js",
};
