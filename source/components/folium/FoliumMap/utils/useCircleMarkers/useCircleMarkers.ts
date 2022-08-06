import { FoliumMapProperties } from "~components/folium/FoliumMap/FoliumMap";
import Circle from "~components/folium/FoliumMap/types/Circle/Circle";

type UseCircleMarkersArguments = {
  mapName?: FoliumMapProperties["mapName"];
  circleMarkers?: FoliumMapProperties["circleMarkers"];
};

type UseCircleMarkers = (argument: UseCircleMarkersArguments) => string;

const useCircleMarkers: UseCircleMarkers = ({
  mapName,
  circleMarkers,
}: UseCircleMarkersArguments): string => {
  return circleMarkers && mapName && Array.isArray(circleMarkers)
    ? circleMarkers
        .map(({ location, popup, tooltip, radius }: Circle): string => {
          return `folium.CircleMarker(location=[${location[0]}, ${
            location[1]
          }]${popup ? `popup="${popup}"` : ""}${
            tooltip ? `tooltip="${tooltip}"` : ""
            // eslint-disable-next-line sonarjs/no-nested-template-literals
          }${radius ? `radius=${radius}` : ""}).add_to(${mapName})`;
        })
        .join("\n")
    : "";
};

export default useCircleMarkers;
