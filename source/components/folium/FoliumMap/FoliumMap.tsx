import { FC } from "react";
import PyScript from "../../base/PyScript/PyScript";
import useMap from "./utils/useMap/useMap";
import useMarkers from "./utils/useMarkers/useMarkers";
import useScript from "./utils/useScript/useScript";
import useRectangles from "./utils/useRectangle/useRectangles";

export type Marker = {
  location: [number, number];
  popup?: string;
  toolTip?: string;
  draggable?: boolean;
};

export type Rectangle = {
  bounds: [[number, number], [number, number]];
  color?: string;
  weight?: number;
  fill?: boolean;
  fillColor?: string;
  fillOpacity?: number;
  dashArray?: string;
};

export type FoliumMapProperties = {
  x: number;
  y: number;
  tiles?: "Stamen Terrain" | "OpenStreetMap";
  zoomStart?: number;
  mapName?: string;
  markers?: Marker[];
  rectangles?: Rectangle[];
};

const FoliumMap: FC<FoliumMapProperties> = ({
  x,
  y,
  zoomStart,
  tiles,
  mapName,
  markers,
  rectangles,
}: FoliumMapProperties) => {
  const pythonArguments = [
    typeof zoomStart === "number" && !isNaN(zoomStart)
      ? `zoom_start=${zoomStart}`
      : "",
    tiles ? `tiles=\"${tiles}\"` : "",
  ].filter((argument) => {
    return argument !== "";
  });
  const mapString = useMap({ mapName, x, y, pythonArguments });
  const rectanglesString = useRectangles({ mapName, rectangles });
  const markersString = useMarkers({ mapName, markers });
  const scriptString = useScript({
    mapName,
    mapString,
    markersString,
    rectanglesString,
  });

  return (
    <PyScript output="folium" generateOutputTag pyEnvContent={["folium"]}>
      {scriptString}
    </PyScript>
  );
};

export default FoliumMap;
