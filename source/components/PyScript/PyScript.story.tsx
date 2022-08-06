import { ComponentMeta, ComponentStory } from "@storybook/react";
import PyScriptProvider from "../PyScriptProvider/PyScriptProvider";
import PyScript, { PyScriptProperties, PyScriptTag } from "./PyScript";

export default {
  title: "PyScript",
  component: PyScript,
} as ComponentMeta<typeof PyScript>;

const Template: ComponentStory<PyScriptTag> = <T extends object>({
  ...rest
}: PyScriptProperties<T>): JSX.Element => {
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
  src: "/folium_map.py",
  output: "folium",
  generateOutputTag: true,
  pyEnvContent: ["folium"],
};

export const PyScriptExampleFibonacci: ComponentStory<typeof PyScript> =
  Template.bind({});

PyScriptExampleFibonacci.args = {
  src: "/fibonacci.py",
};
