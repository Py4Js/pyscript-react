import { FoliumMapProperties } from "~components/folium/FoliumMap/FoliumMap";
import Rectangle, {
  Bound,
} from "~components/folium/FoliumMap/types/Rectangle/Rectangle";

type UseRectangleArguments = {
  mapName?: FoliumMapProperties["mapName"];
  rectangles?: FoliumMapProperties["rectangles"];
};

type UseRectangles = (argument: UseRectangleArguments) => string;

const useRectangles: UseRectangles = ({
  mapName,
  rectangles,
}: // eslint-disable-next-line sonarjs/cognitive-complexity
UseRectangleArguments): string => {
  return rectangles && mapName && Array.isArray(rectangles)
    ? rectangles
        .map(
          ({
            bounds,
            color,
            weight,
            fill,
            fillColor,
            fillOpacity,
            dashArray,
          }: Rectangle): string => {
            return `folium.Rectangle([${bounds
              .map((bound: Bound): string => {
                return `(${bound[0]}, ${bound[1]})`;
              })
              .join(",")}]${color ? `, color="${color}"` : ""}${
              weight ? `, weight=${weight}` : ""
            }${fill ? ", fill=True" : ""}${
              fillColor ? `, fill_color="${fillColor}"` : ""
            }${fillOpacity ? `, fill_opacity=${fillOpacity}` : ""}${
              dashArray ? `, dash_array="${dashArray}"` : ""
            }).add_to(${mapName})`;
          },
        )
        .join("\n")
    : "";
};

export default useRectangles;
