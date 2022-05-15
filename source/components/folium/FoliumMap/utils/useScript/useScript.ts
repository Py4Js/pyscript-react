import { FoliumMapProperties } from "../../FoliumMap";

type UseScriptArguments = {
  mapName: FoliumMapProperties["mapName"];
  mapString: string;
  markersString: string;
};

const useScript = ({
  mapString,
  markersString,
  mapName = "",
}: UseScriptArguments) => {
  return `
    ${mapString}
    ${markersString}
    ${mapName}
  `;
};

export default useScript;
