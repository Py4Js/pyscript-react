import { ComponentMeta, ComponentStory } from "@storybook/react";
import { FunctionComponent } from "react";
import PyScriptProvider from "../PyScriptProvider/PyScriptProvider";
import PyScript, { PyScriptProperties } from "./PyScript";

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
  src: "/folium_map.py",
  output: "folium",
  generateOutputTag: true,
  pyEnvContent: ["folium"],
};

export const PyScriptExampleFibonacci: ComponentStory<typeof PyScript> =
  Template.bind({});

PyScriptExampleFibonacci.args = {
  children: `
class Fibonacci:
  def __init__(self):
      self.fibonacci_cache = {}
  def sequence(self, n) -> int:
      if n in self.fibonacci_cache:
          return self.fibonacci_cache[n]
      if n == 1:
          return 1
      elif n == 2:
          return 1
      elif n > 2:
          self.fibonacci_cache[n] = self.sequence(n-1) + self.sequence(n-2)
          return self.fibonacci_cache[n]

fibonacci = Fibonacci()
for x in range(100):
  print(fibonacci.sequence(x))
`,
};
