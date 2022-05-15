import { FC } from "react";
import PyScript from "../../base/PyScript/PyScript";

export type FoliumMapProperties = {
  x: number;
  y: number;
  tiles?: "Stamen Terrain" | "OpenStreetMap";
  zoomStart?: number;
  mapName: string;
  markers?: { x: number; y: number; value: string }[];
};

const FoliumMap: FC<FoliumMapProperties> = ({
  x,
  y,
  zoomStart,
  tiles,
  mapName,
  markers,
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
    ${mapName} = folium.Map(location=[${x}, ${y}]${
    pythonArguments ? `,${pythonArguments.join(",")}` : ""
  })
    ${
      markers && Array.isArray(markers)
        ? markers.map(({ x: markerX, y: markerY, value }) => {
            return `folium.Marker(location=[${markerX}, ${markerY}], popup=\"${value}\").add_to(${mapName})`;
          })
        : ""
    }
    ${mapName}
  `;
  return (
    <PyScript output="folium" generateOutputTag pyEnvContent={["folium"]}>
      {script}
    </PyScript>
  );
};

export default FoliumMap;
