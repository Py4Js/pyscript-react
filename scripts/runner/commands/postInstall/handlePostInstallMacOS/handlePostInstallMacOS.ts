import commandExists from "command-exists";
import { $ } from "zx";
import Programs from "~scripts/runner/types/programs/programs";

const handlePostInstallMacOS = async () => {
  try {
    await commandExists(Programs.Brew);
  } catch {
    await $`Set-/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"`;
    await $`echo "export PATH=/opt/homebrew/bin:$PATH" >> ~/.bash_profile && source ~/.bash_profile`;
  }
  try {
    await commandExists(Programs.Python);
  } catch {
    await $`brew install python`;
  }
  await $`${Programs.Pip} install -r requirements.txt`;
};

export default handlePostInstallMacOS;
