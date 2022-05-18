import { FoliumMapProperties } from "~components/folium/FoliumMap/FoliumMap";

type UseRectangleArguments = {
  mapName?: FoliumMapProperties["mapName"];
  rectangles?: FoliumMapProperties["rectangles"];
};

const useRectangles = ({
  mapName,
  rectangles,
}: UseRectangleArguments): string => {
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
          }) => {
            return `folium.Rectangle([${bounds
              .map((bound) => {
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
