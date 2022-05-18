import { FoliumMapProperties } from "../../FoliumMap";

type UseScriptArguments = {
  mapName: FoliumMapProperties["mapName"];
  mapString: string;
  markersString: string;
  rectanglesString: string;
  circleMarkersString: string;
};

const useScript = ({
  mapString,
  markersString,
  circleMarkersString,
  rectanglesString,
  mapName = "",
}: UseScriptArguments) => {
  return `
${mapString}
${markersString}
${rectanglesString}
${circleMarkersString}
${mapName}
  `;
};

export default useScript;
