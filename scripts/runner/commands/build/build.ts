import { Command } from "commander";
import { sync } from "glob";
import { platform } from "os";
import { basename } from "path";
import { $ } from "zx";

const moveFiles = async (extension: string): Promise<void> => {
  const brotliFiles: string[] = await sync(
    `./library/${extension}/**.*.${extension}`,
  );
  brotliFiles.forEach(async (file: string): Promise<void> => {
    const filename: string = basename(file);
    await $`mv ${file} ./library/${filename}`;
  });
  setTimeout(async (): Promise<void> => {
    await $`rimraf ./library/${extension}`;
  }, 5000);
};

(async (): Promise<void> => {
  const program: Command = new Command();
  program.requiredOption("-t, --target <target>", "Target");
  program.parse(process.argv);
  const { target } = program.opts();
  const os: NodeJS.Platform = platform();
  if (os === "win32") {
    $.shell = "cmd";
    $.prefix = "";
  }
  await $`cross-env rimraf library && cross-env TS_NODE_PROJECT=tsconfig.node.json webpack --env target=${target}`;
  await moveFiles("br");
  await moveFiles("gz");
})();
