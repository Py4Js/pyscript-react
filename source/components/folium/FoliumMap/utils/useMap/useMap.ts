import { useMemo } from "react";
import { FoliumMapProperties } from "~components/folium/FoliumMap/FoliumMap";

type UseMapArguments = {
  mapName?: FoliumMapProperties["mapName"];
  latitude: FoliumMapProperties["latitude"];
  longitude: FoliumMapProperties["longitude"];
  pythonArguments: string[];
};

type UseMap = (argument: UseMapArguments) => string;

const useMap: UseMap = ({
  mapName,
  latitude,
  longitude,
  pythonArguments,
}: UseMapArguments): string => {
  return useMemo((): string => {
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
