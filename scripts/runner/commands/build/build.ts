import { platform } from "os";
import { $ } from "zx";

(async (): Promise<void> => {
  const os: NodeJS.Platform = platform();
  if (os === "win32") {
    $.shell = "cmd";
    $.prefix = "";
  }
  await $`cross-env rimraf destination && cross-env tsc --project tsconfig.node.json && cross-env TS_NODE_PROJECT=tsconfig.node.json webpack`;
})();
