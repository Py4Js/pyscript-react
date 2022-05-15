import { FoliumMapProperties } from "../../FoliumMap";

type UseMarkersArguments = {
  mapName?: FoliumMapProperties["mapName"];
  markers?: FoliumMapProperties["markers"];
};

const useMarkers = ({ mapName, markers }: UseMarkersArguments) => {
  return markers && mapName && Array.isArray(markers)
    ? markers
        .map(({ x: markerX, y: markerY, value }) => {
          return `folium.Marker(location=[${markerX}, ${markerY}], popup=\"${value}\").add_to(${mapName})`;
        })
        .join("\n")
    : "";
};

export default useMarkers;
