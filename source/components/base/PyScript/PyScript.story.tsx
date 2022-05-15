import { ComponentMeta, ComponentStory } from "@storybook/react";
import PyScript, { PyScriptProperties } from "./PyScript";
import { FunctionComponent } from "react";
import PyScriptProvider from "../PyScriptProvider/PyScriptProvider";

export default {
  title: "PyScript",
  component: PyScript,
} as ComponentMeta<typeof PyScript>;

const Template: ComponentStory<FunctionComponent<PyScriptProperties>> = ({
  ...rest
}: PyScriptProperties): JSX.Element => {
  return (
    <PyScriptProvider>
      <PyScript {...rest} />
    </PyScriptProvider>
  );
};

export const PyScriptExample: ComponentStory<typeof PyScript> = Template.bind(
  {},
);

PyScriptExample.args = {
  children: 'print("hello")',
  output: "folium",
  generateOutputTag: true,
  pyEnvContent: ["folium"],
};
