import { FoliumMapProperties } from "~components/folium/FoliumMap/FoliumMap";

type UseCircleArguments = {
  mapName?: FoliumMapProperties["mapName"];
  circles?: FoliumMapProperties["circles"];
};

const useCircle = ({ mapName, circles }: UseCircleArguments): string => {
  return circles && mapName && Array.isArray(circles)
    ? circles
        .map(({ location, popup, tooltip, radius }) => {
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
