import { FC } from "react";
import PyScript from "../../base/PyScript/PyScript";
import useCircleMarkers from "./utils/useCircleMarkers/useCircleMarkers";
import useMap from "./utils/useMap/useMap";
import useMarkers from "./utils/useMarkers/useMarkers";
import useScript from "./utils/useScript/useScript";
import useRectangles from "./utils/useRectangle/useRectangles";
import useCircle from "./utils/useCircle/useCircle";
import Marker from "./types/Marker/Marker";

export type Circle = {
  location: [number, number];
  popup?: string;
  tooltip?: string;
  radius?: number;
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
  circles?: Circle[];
  circleMarkers?: Circle[];
};

const FoliumMap: FC<FoliumMapProperties> = ({
  x,
  y,
  zoomStart,
  tiles,
  mapName,
  markers,
  rectangles,
  circleMarkers,
  circles,
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
  const circleMarkersString = useCircleMarkers({ mapName, circleMarkers });
  const circleString = useCircle({ mapName, circles });
  const scriptString = useScript({
    mapName,
    mapString,
    markersString,
    rectanglesString,
    circleMarkersString,
    circleString,
  });
  return (
    <PyScript output="folium" generateOutputTag pyEnvContent={["folium"]}>
      {scriptString}
    </PyScript>
  );
};

export default FoliumMap;
