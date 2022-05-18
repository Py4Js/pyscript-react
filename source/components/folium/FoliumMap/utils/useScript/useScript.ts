import { FoliumMapProperties } from "~components/folium/FoliumMap/FoliumMap";

type UseScriptArguments = {
  mapName?: FoliumMapProperties["mapName"];
  mapString: string;
  markersString: string;
  rectanglesString: string;
  circleMarkersString: string;
  circleString: string;
};

const useScript = ({
  mapString,
  markersString,
  circleMarkersString,
  rectanglesString,
  circleString,
  mapName = "",
}: UseScriptArguments) => {
  return `
${mapString}
${markersString}
${rectanglesString}
${circleMarkersString}
${circleString}
${mapName}
  `;
};

export default useScript;
