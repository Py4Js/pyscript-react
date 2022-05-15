import { FC } from "react";
import PyScript from "../../base/PyScript/PyScript";

export type FoliumMapProperties = {
  x: number;
  y: number;
  tiles?: "Stamen Terrain";
  zoomStart?: number;
};

const FoliumMap: FC<FoliumMapProperties> = ({
  x,
  y,
  zoomStart,
  tiles,
}: FoliumMapProperties) => {
  const pythonArguments = [
    typeof zoomStart === "number" && !isNaN(zoomStart)
      ? `zoom_start=${zoomStart}`
      : "",
    tiles ? `tiles=\"${tiles}\"` : "",
  ].filter((argument) => {
    return argument !== "";
  });
  const script = `
    import folium;
    folium.Map(location=[${x}, ${y}]${
    pythonArguments ? `,${pythonArguments.join(",")}` : ""
  })
  `;
  return (
    <>
      <PyScript output="folium" generateOutputTag pyEnvContent={["folium"]}>
        {script}
      </PyScript>
    </>
  );
};

export default FoliumMap;
