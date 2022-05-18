import { FoliumMapProperties } from "~components/folium/FoliumMap/FoliumMap";

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
        .map(({ location, popup, tooltip, radius }) => {
          return `folium.CircleMarker(location=[${location[0]}, ${
            location[1]
          }]${popup ? `popup="${popup}"` : ""}${
            tooltip ? `tooltip="${tooltip}"` : ""
          }${radius ? `radius=${radius}` : ""}).add_to(${mapName})`;
        })
        .join("\n")
    : "";
};

export default useCircleMarkers;
