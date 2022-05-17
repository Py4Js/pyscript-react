import { GeoJson, FoliumMapProperties } from "../../FoliumMap";

type UseGeoJsonsArguments = {
  mapName: FoliumMapProperties["mapName"];
  geoJSON?: GeoJson[];
};

const useGeoJson = ({ mapName, geoJSON }: UseGeoJsonsArguments) => {
  return geoJSON && mapName && Array.isArray(geoJSON)
    ? geoJSON
        .map(({ jsonPath, name }) => {
          return `

from json import loads;

data = loads()
folium.GeoJson(data${
            name ? `, name="${name}"` : `,name="geojson"`
          }).add_to(${mapName})`;
        })
        .join("\n")
    : "";
};

export default useGeoJson;
