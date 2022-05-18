import { useMemo } from "react";
import { FoliumMapProperties } from "~components/folium/FoliumMap/FoliumMap";

type UseMapArguments = {
  mapName?: FoliumMapProperties["mapName"];
  latitude: FoliumMapProperties["latitude"];
  longitude: FoliumMapProperties["longitude"];
  pythonArguments: string[];
};

const useMap = ({
  mapName,
  latitude,
  longitude,
  pythonArguments,
}: UseMapArguments) => {
  return useMemo(() => {
    return `
import folium;
${
  mapName ? `${mapName} = ` : ""
}folium.Map(location=[${latitude}, ${longitude}]${
      pythonArguments ? `,${pythonArguments.join(",")}` : ""
    })
    `;
  }, [mapName, pythonArguments, latitude, longitude]);
};

export default useMap;
