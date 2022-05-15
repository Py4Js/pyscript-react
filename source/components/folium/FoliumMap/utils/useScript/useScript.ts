import { FoliumMapProperties } from "../../FoliumMap";

type UseScriptArguments = {
  mapName: FoliumMapProperties["mapName"];
  mapString: string;
  markersString: string;
  circleMarkersString: string;
};

const useScript = ({
  mapString,
  markersString,
  circleMarkersString,
  mapName = "",
}: UseScriptArguments) => {
  return `
    ${mapString}
    ${markersString}
    ${circleMarkersString}
    ${mapName}
  `;
};

export default useScript;
