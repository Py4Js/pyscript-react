import { FC } from "react";
import PyScript from "../../base/PyScript/PyScript";
import useCircleMarkers from "./utils/useCircleMarkers/useCircleMarkers";
import useMap from "./utils/useMap/useMap";
import useMarkers from "./utils/useMarkers/useMarkers";
import useScript from "./utils/useScript/useScript";

export type Marker = { x: number; y: number; value: string };

export type FoliumMapProperties = {
  x: number;
  y: number;
  tiles?: "Stamen Terrain" | "OpenStreetMap";
  zoomStart?: number;
  mapName?: string;
  markers?: Marker[];
  circleMarkers?: Marker[];
};

const FoliumMap: FC<FoliumMapProperties> = ({
  x,
  y,
  zoomStart,
  tiles,
  mapName,
  markers,
  circleMarkers,
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
  const markersString = useMarkers({ mapName, markers });
  const circleMarkersString = useCircleMarkers({ mapName, circleMarkers });
  const scriptString = useScript({
    mapName,
    mapString,
    markersString,
    circleMarkersString,
  });
  return (
    <PyScript output="folium" generateOutputTag pyEnvContent={["folium"]}>
      {scriptString}
    </PyScript>
  );
};

export default FoliumMap;
