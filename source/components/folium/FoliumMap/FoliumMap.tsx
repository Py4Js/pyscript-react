import { FC } from "react";
import generatePythonVariableName from "~utils/generatePythonVariableName/generatePythonVariableName";
import PyScript from "../../base/PyScript/PyScript";
import Circle from "./types/Circle/Circle";
import Marker from "./types/Marker/Marker";
import Polygon from "./types/Polygon/Polygon";
import Rectangle from "./types/Rectangle/Rectangle";
import useCircleMarkers from "./utils/useCircleMarkers/useCircleMarkers";
import useCircles from "./utils/useCircles/useCircles";
import useMap from "./utils/useMap/useMap";
import useMarkers from "./utils/useMarkers/useMarkers";
import usePolygons from "./utils/usePolygons/usePolygons";
import useRectangles from "./utils/useRectangles/useRectangles";
import useScript from "./utils/useScript/useScript";

export type FoliumMapProperties = {
  latitude: number;
  longitude: number;
  tiles?: "Stamen Terrain" | "OpenStreetMap";
  zoomStart?: number;
  mapName?: string;
  markers?: Marker[];
  rectangles?: Rectangle[];
  circles?: Circle[];
  circleMarkers?: Circle[];
  polygons?: Polygon[];
};

const FoliumMap: FC<FoliumMapProperties> = ({
  latitude,
  longitude,
  zoomStart,
  tiles,
  mapName = generatePythonVariableName(),
  markers,
  rectangles,
  circleMarkers,
  circles,
  polygons,
}: FoliumMapProperties) => {
  const pythonArguments = [
    typeof zoomStart === "number" && !isNaN(zoomStart)
      ? `zoom_start=${zoomStart}`
      : "",
    tiles ? `tiles=\"${tiles}\"` : "",
  ].filter((argument) => {
    return argument !== "";
  });
  const mapString = useMap({ mapName, latitude, longitude, pythonArguments });
  const rectanglesString = useRectangles({ mapName, rectangles });
  const markersString = useMarkers({ mapName, markers });
  const circleMarkersString = useCircleMarkers({ mapName, circleMarkers });
  const circlesString = useCircles({ mapName, circles });
  const polygonsString = usePolygons({ mapName, polygons });
  const scriptString = useScript({
    mapName,
    mapString,
    markersString,
    rectanglesString,
    circleMarkersString,
    circlesString,
    polygonsString,
  });
  return (
    <PyScript output="folium" generateOutputTag pyEnvContent={["folium"]}>
      {scriptString}
    </PyScript>
  );
};

export default FoliumMap;
