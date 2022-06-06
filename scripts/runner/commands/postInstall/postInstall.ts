import { platform } from "os";
import handlePostInstallMacOS from "~scripts/runner/commands/postInstall/handlePostInstallMacOS/handlePostInstallMacOS";
import handlePostInstallWindows from "~scripts/runner/commands/postInstall/handlePostInstallWindows/handlePostInstallWindows";

(async () => {
  const os: NodeJS.Platform = platform();
  if (os === "win32") {
    await handlePostInstallWindows();
  } else if (os === "darwin") {
    await handlePostInstallMacOS();
  }
})();
