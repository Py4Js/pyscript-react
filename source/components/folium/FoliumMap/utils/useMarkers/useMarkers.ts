import { FoliumMapProperties } from "~components/folium/FoliumMap/FoliumMap";
import Marker from "~components/folium/FoliumMap/types/Marker/Marker";

type UseMarkersArguments = {
  mapName?: FoliumMapProperties["mapName"];
  markers?: FoliumMapProperties["markers"];
};

type UseMarkers = (argument: UseMarkersArguments) => string;

const useMarkers: UseMarkers = ({
  mapName,
  markers,
}: UseMarkersArguments): string => {
  return markers && mapName && Array.isArray(markers)
    ? markers
        .map(({ location, popup, tooltip, draggable }: Marker): string => {
          return `folium.Marker(location=[${location[0]}, ${location[1]}]${
            popup ? `, popup="${popup}"` : ""
          }${tooltip ? `, tooltip="${tooltip}"` : ""}${
            draggable ? ", draggable=True" : ""
          }).add_to(${mapName})`;
        })
        .join("\n")
    : "";
};

export default useMarkers;
