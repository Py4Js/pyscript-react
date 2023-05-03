import { platform } from "os";
import { $ } from "zx";

(async (): Promise<void> => {
  const os: NodeJS.Platform = platform();
  if (os === "win32") {
    $.shell = "cmd";
    $.prefix = "";
  }
  await $`eslint --fix -f unix "./**/*.{js,jsx,ts,tsx}" && prettier --write "./**/*.{js,jsx,ts,tsx,json}" && sort-package-json`;
})();
