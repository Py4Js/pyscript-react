import { FoliumMapProperties } from "~components/folium/FoliumMap/FoliumMap";

type UseScriptArguments = {
  mapName?: FoliumMapProperties["mapName"];
  mapString: string;
  markersString: string;
  rectanglesString: string;
  circleMarkersString: string;
  circlesString: string;
  polygonsString: string;
};

type UseScript = (argument: UseScriptArguments) => string;

const useScript: UseScript = ({
  mapString,
  markersString,
  circleMarkersString,
  rectanglesString,
  circlesString,
  polygonsString,
  mapName,
}: UseScriptArguments): string => {
  return `
${mapString}
${markersString}
${rectanglesString}
${circleMarkersString}
${circlesString}
${polygonsString}
${mapName}
  `;
};

export default useScript;
