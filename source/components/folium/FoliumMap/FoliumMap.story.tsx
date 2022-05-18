import { ComponentMeta, ComponentStory } from "@storybook/react";
import PyScriptProvider from "../../base/PyScriptProvider/PyScriptProvider";
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
    <PyScriptProvider>
      <FoliumMap {...rest} />
    </PyScriptProvider>
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
  mapName: "test",
  markers: [
    {
      location: [50.25637753089188, 18.971101614473774],
      popup: "Random location",
      draggable: false,
    },
    {
      location: [50.286317, 19.104359],
      popup: "Another random location",
      draggable: true,
      toolTip: "Sosnowiec",
    },
  ],
  rectangles: [
    {
      bounds: [
        [50.121754, 18.51261],
        [50.079657, 18.595915],
      ],
      color: "#1D59A1",
      fill: true,
      fillColor: "#2696CE",
      fillOpacity: 0.2,
      dashArray: "5,10",
      weight: 2,
    },
  ],
  circles: [
    {
      location: [50.25637753089188, 18.971101614473774],
      popup: "Random location",
      toolTip: "Sosnowiec",
      radius: 1000,
    },
  ],
};
