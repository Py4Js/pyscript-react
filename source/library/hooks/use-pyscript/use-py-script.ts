import type { UsePyScript } from "~hooks/use-pyscript/use-py-script.types";
import type { PyScriptWindowObject } from "~types/pyscript-window-object/pyscript-window-object";
import type { PyScriptStore } from "../../stores/py-script-store";
import usePyScriptStore from "../../stores/py-script-store/py-script-store";

const usePyScript: UsePyScript = (): PyScriptWindowObject | null => {
  const { pyScript }: PyScriptStore = usePyScriptStore();
  return pyScript;
};

export default usePyScript;
