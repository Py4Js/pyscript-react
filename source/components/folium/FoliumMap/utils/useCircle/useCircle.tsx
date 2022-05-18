import { FoliumMapProperties, Circle } from "../../FoliumMap";

type UseCircleArguments = {
  mapName?: FoliumMapProperties["mapName"];
  circles?: Circle[];
};

const useCircle = ({ mapName, circles }: UseCircleArguments): string => {
  return circles && mapName && Array.isArray(circles)
    ? circles
        .map(({ location, popup, toolTip, radius }) => {
          return `folium.Circle(location=[${location[0]}, ${location[1]}]${
            popup ? `, popup="${popup}"` : ""
          }${toolTip ? `, tooltip="${toolTip}"` : ""}${
            radius ? `, radius=${radius}` : ""
          }).add_to(${mapName})`;
        })
        .join("\n")
    : "";
};

export default useCircle;
