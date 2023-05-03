import { platform } from "os";
import { $ } from "zx";

(async () => {
  const os: NodeJS.Platform = platform();
  if (os === "win32") {
    $.shell = "cmd";
    $.prefix = "";
  }
  await $`yarn run rimraf library && cross-env NODE_OPTIONS='--max-old-space-size=8192' TS_NODE_PROJECT=tsconfig.node.json webpack --mode production`;
  const tscPromises = [
    "umd",
    "esm",
    "cjs",
    "cjs2",
    "cjs-esm",
    "system",
    "amd",
  ].map((target) => {
    $`tsc --project ./source/tsconfigs/tsconfig.${target}.json && tsc-alias --project ./source/tsconfigs/tsconfig.${target}.json`;
  });
  await Promise.all(tscPromises);
})();
