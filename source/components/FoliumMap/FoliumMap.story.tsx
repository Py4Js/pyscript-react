import { ComponentMeta, ComponentStory } from "@storybook/react";
import PyScriptProvider from "../PyScriptProvider/PyScriptProvider";
import { FunctionComponent } from "react";
import FoliumMap, { FoliumMapProperties } from "./FoliumMap";

export default {
  title: "FoliumMap",
  component: FoliumMap,
} as ComponentMeta<typeof FoliumMap>;

const Template: ComponentStory<FunctionComponent<FoliumMapProperties>> = ({
  ...rest
}: FoliumMapProperties): JSX.Element => {
  return (
    <>
      <PyScriptProvider>
        <FoliumMap {...rest} />
      </PyScriptProvider>
    </>
  );
};

export const FoliumMapExample: ComponentStory<typeof FoliumMap> = Template.bind(
  {},
);

FoliumMapExample.args = {
  x: 50.25637753089188,
  y: 18.971101614473774,
  zoomStart: 12,
  tiles: "Stamen Terrain",
};
