import { Marker } from "../../FoliumMap";

type UseMarkersArguments = {
  mapName?: string;
  markers?: Marker[];
};

const useMarkers = ({ mapName, markers }: UseMarkersArguments) => {
  return markers && mapName && Array.isArray(markers)
    ? markers
        .map(({ location, popup, toolTip, draggable }) => {
          return `folium.Marker(location=[${location[0]}, ${location[1]}]${
            popup ? `, popup="${popup}"` : ""
          }${toolTip ? `, tooltip="${toolTip}"` : ""}${
            draggable ? ", draggable=True" : ""
          }).add_to(${mapName})`;
        })
        .join("\n")
    : "";
};

export default useMarkers;
