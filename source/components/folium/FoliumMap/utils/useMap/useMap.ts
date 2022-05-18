import { useMemo } from "react";
import { FoliumMapProperties } from "~components/folium/FoliumMap/FoliumMap";

type UseMapArguments = {
  mapName?: FoliumMapProperties["mapName"];
  x: FoliumMapProperties["x"];
  y: FoliumMapProperties["y"];
  pythonArguments: string[];
};

const useMap = ({ mapName, x, y, pythonArguments }: UseMapArguments) => {
  return useMemo(() => {
    return `
import folium;
${mapName ? `${mapName} = ` : ""}folium.Map(location=[${x}, ${y}]${
      pythonArguments ? `,${pythonArguments.join(",")}` : ""
    })
    `;
  }, [mapName, pythonArguments, x, y]);
};

export default useMap;
