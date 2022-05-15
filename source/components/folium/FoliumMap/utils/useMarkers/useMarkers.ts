import { Marker } from "../../FoliumMap";

type UseMarkersArguments = {
  mapName?: string;
  markers?: Marker[];
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
