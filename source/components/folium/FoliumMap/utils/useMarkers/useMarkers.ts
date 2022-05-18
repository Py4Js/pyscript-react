import { FoliumMapProperties } from "~components/folium/FoliumMap/FoliumMap";

type UseMarkersArguments = {
  mapName?: FoliumMapProperties["mapName"];
  markers?: FoliumMapProperties["markers"];
};

const useMarkers = ({ mapName, markers }: UseMarkersArguments) => {
  return markers && mapName && Array.isArray(markers)
    ? markers
        .map(({ location, popup, tooltip, draggable }) => {
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
