import { platform } from "os";

(async () => {
  const os: NodeJS.Platform = platform();
  if (os === "win32") {
    //await handlePostInstallWindows();
  } else if (os === "darwin") {
    //await handlePostInstallMacOS();
  }
})();
