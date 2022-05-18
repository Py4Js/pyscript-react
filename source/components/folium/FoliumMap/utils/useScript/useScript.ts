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

const useScript = ({
  mapString,
  markersString,
  circleMarkersString,
  rectanglesString,
  circlesString,
  polygonsString,
  mapName,
}: UseScriptArguments) => {
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
