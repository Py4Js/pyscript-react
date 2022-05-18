import { FoliumMapProperties } from "~components/folium/FoliumMap/FoliumMap";
import Circle from "~components/folium/FoliumMap/types/Circle/Circle";

type UseCircleArguments = {
  mapName?: FoliumMapProperties["mapName"];
  circles?: FoliumMapProperties["circles"];
};

type UseCircle = (argument: UseCircleArguments) => string;

const useCircle: UseCircle = ({
  mapName,
  circles,
}: UseCircleArguments): string => {
  return circles && mapName && Array.isArray(circles)
    ? circles
        .map(({ location, popup, tooltip, radius }: Circle): string => {
          return `folium.Circle(location=[${location[0]}, ${location[1]}]${
            popup ? `, popup="${popup}"` : ""
          }${tooltip ? `, tooltip="${tooltip}"` : ""}${
            radius ? `, radius=${radius}` : ""
          }).add_to(${mapName})`;
        })
        .join("\n")
    : "";
};

export default useCircle;
