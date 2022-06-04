import { platform } from "os";
import handlePostInstallWindows from "~root/scripts/runner/commands/postInstall/handlePostInstallWindows/handlePostInstallWindows";

(async () => {
  const os: NodeJS.Platform = platform();
  if (os === "win32") {
    await handlePostInstallWindows();
  }
})();
