import { FoliumMapProperties } from "../../FoliumMap";

type UseScriptArguments = {
  mapName: FoliumMapProperties["mapName"];
  mapString: string;
  markersString: string;
  rectanglesString: string;
};

const useScript = ({
  mapString,
  markersString,
  rectanglesString,
  mapName = "",
}: UseScriptArguments) => {
  return `
    ${mapString}
    ${markersString}
    ${rectanglesString}
    ${mapName}
  `;
};

export default useScript;
