import { FoliumMapProperties } from "~components/folium/FoliumMap/FoliumMap";
import Polygon, {
  Location,
} from "~components/folium/FoliumMap/types/Polygon/Polygon";

type UsePolygonsArguments = {
  mapName: FoliumMapProperties["mapName"];
  polygons?: FoliumMapProperties["polygons"];
};

type UsePolygons = (argument: UsePolygonsArguments) => string;

const usePolygons: UsePolygons = ({
  mapName,
  polygons,
}: UsePolygonsArguments): string => {
  return polygons && mapName && Array.isArray(polygons)
    ? polygons
        .map(({ locations, popup, tooltip }: Polygon): string => {
          return `folium.Polygon(locations=[${locations
            .map((location: Location): string => {
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
