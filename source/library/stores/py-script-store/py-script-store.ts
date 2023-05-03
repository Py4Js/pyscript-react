import { create } from "zustand";
import type {
  PyScriptStore,
  UsePyScriptStore,
} from "~stores/py-script-store/py-script-store.types";
import type { PyScriptWindowObject } from "~types/pyscript-window-object/pyscript-window-object";

const usePyScriptStore: UsePyScriptStore = create<PyScriptStore>(
  // tslint:disable-next-line: typedef
  (set): PyScriptStore => {
    return {
      pyScript: null,
      setPyScript: (pyScript: PyScriptWindowObject): void => {
        set((oldState: PyScriptStore): PyScriptStore => {
          return {
            ...oldState,
            pyScript,
          };
        });
      },
    };
  },
);

export default usePyScriptStore;
