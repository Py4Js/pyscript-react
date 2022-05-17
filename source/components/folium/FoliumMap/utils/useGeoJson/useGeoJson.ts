import { GeoJson, FoliumMapProperties } from "../../FoliumMap";

type UseGeoJsonsArguments = {
  mapName: FoliumMapProperties["mapName"];
  geoJSON?: GeoJson[];
};

const getJson = async (url: string): Promise<object> => {
  return await (await fetch(url)).json();
};

const useGeoJson = ({ mapName, geoJSON }: UseGeoJsonsArguments) => {
  return geoJSON && mapName && Array.isArray(geoJSON)
    ? geoJSON
        .map(({ jsonPath, name }) => {
          const data = getJson(jsonPath);
          return `
from json import loads;
data = loads(${data})
folium.GeoJson(data${
            name ? `, name="${name}"` : `,name="geojson"`
          }).add_to(${mapName})`;
        })
        .join("\n")
    : "";
};

export default useGeoJson;
