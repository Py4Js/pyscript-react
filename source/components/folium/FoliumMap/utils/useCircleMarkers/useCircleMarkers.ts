import { FoliumMapProperties } from "../../FoliumMap";

type UseCircleMarkersArguments = {
  mapName?: FoliumMapProperties["mapName"];
  circleMarkers?: FoliumMapProperties["circleMarkers"];
};

const useCircleMarkers = ({
  mapName,
  circleMarkers,
}: UseCircleMarkersArguments) => {
  return circleMarkers && mapName && Array.isArray(circleMarkers)
    ? circleMarkers
        .map(({ x: markerX, y: markerY, value }) => {
          return `folium.CircleMarker(location=[${markerX}, ${markerY}], popup=\"${value}\").add_to(${mapName})`;
        })
        .join("\n")
    : "";
};

export default useCircleMarkers;
