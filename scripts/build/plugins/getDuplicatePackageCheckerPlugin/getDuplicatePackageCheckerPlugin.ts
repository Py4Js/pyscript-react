import DuplicatePackageCheckerPlugin from "duplicate-package-checker-webpack-plugin";

type GetDuplicatePackageCheckerPlugin = () => DuplicatePackageCheckerPlugin;

const getDuplicatePackageCheckerPlugin: GetDuplicatePackageCheckerPlugin =
  (): DuplicatePackageCheckerPlugin => {
    return new DuplicatePackageCheckerPlugin();
  };

export default getDuplicatePackageCheckerPlugin;
