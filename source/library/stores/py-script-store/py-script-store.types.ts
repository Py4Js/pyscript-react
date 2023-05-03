import type { StoreApi, UseBoundStore } from "zustand";
import type { PyScriptWindowObject } from "~types/pyscript-window-object/pyscript-window-object";

export type PyScriptStore = {
  pyScript: PyScriptWindowObject | null;
  setPyScript: (pyscript: PyScriptWindowObject) => void;
};

export type UsePyScriptStore = UseBoundStore<StoreApi<PyScriptStore>>;
