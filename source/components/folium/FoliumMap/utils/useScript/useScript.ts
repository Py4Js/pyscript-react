import { FoliumMapProperties } from "../../FoliumMap";

type UseScriptArguments = {
  mapName: FoliumMapProperties["mapName"];
  mapString: string;
  markersString: string;
  rectanglesString: string;
  geoJsonString: string;
};

const useScript = ({
  mapString,
  markersString,
  rectanglesString,
  geoJsonString,
  mapName = "",
}: UseScriptArguments) => {
  console.log(`
  ${mapString}
  ${markersString}
  ${rectanglesString}
  ${geoJsonString}
  ${mapName}
    `);
  return `
${mapString}
${markersString}
${rectanglesString}
${geoJsonString}
${mapName}
  `;
};

export default useScript;
