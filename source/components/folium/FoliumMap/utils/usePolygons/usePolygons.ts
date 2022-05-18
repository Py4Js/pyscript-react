import { FoliumMapProperties } from "~components/folium/FoliumMap/FoliumMap";

type UsePolygonsArguments = {
  mapName: FoliumMapProperties["mapName"];
  polygons?: FoliumMapProperties["polygons"];
};

const usePolygons = ({ mapName, polygons }: UsePolygonsArguments): string => {
  return polygons && mapName && Array.isArray(polygons)
    ? polygons
        .map(({ locations, popup, tooltip }) => {
          return `folium.Polygon(locations=[${locations
            .map((location) => {
              return `[${location[0]}, ${location[1]}]`;
            })
            .join(", ")}]${popup ? `, popup="${popup}"` : ""}${
            tooltip ? `, tooltip="${tooltip}"` : ""
          }).add_to(${mapName})`;
        })
        .join("\n")
    : "";
};

export default usePolygons;
