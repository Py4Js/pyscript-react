import commandExists from "command-exists";
import { $ } from "zx";
import Programs from "~scripts/runner/types/programs/programs";

const handlePostInstallWindows = async () => {
  $.prefix = "";
  try {
    await commandExists(Programs.Choco);
  } catch {
    $.shell = "powershell";
    await $`Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))`;
  }
  try {
    await commandExists(Programs.Python);
  } catch {
    $.shell = "powershell";
    await $`start-process -filepath ${Programs.Choco} "install ${Programs.Python} -y" -verb runas`;
  }
  $.shell = "cmd";
  await $`${Programs.Pip} install -r requirements.txt`;
};

export default handlePostInstallWindows;
