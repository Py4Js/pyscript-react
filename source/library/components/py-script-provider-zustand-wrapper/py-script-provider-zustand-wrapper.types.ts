import { PyScriptProviderProperties } from "~root/source/library/components/py-script-provider/py-script-provider.types";

export type PyScriptProviderZustandWrapperProperties = Omit<
  PyScriptProviderProperties,
  "setPyScript"
>;
