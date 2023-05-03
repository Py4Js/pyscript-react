import type {
  PyConfigFetch,
  PyConfigInterpreters,
  PyConfigProperties,
  PyConfigPropertiesBase,
  PyConfigPropertiesWithChildren,
  PyConfigPropertiesWithJsonType,
  PyConfigPropertiesWithTomlType,
  PyConfigPropertiesWithoutChildren,
  PyConfigSharedJsonProperties,
  PyConfigSplashscreen,
  PyConfigTag,
} from "~components/py-config/py-config.types";
import PyConfig from "./py-config";

export type {
  PyConfigInterpreters,
  PyConfigFetch,
  PyConfigSplashscreen,
  PyConfigSharedJsonProperties,
  PyConfigPropertiesWithJsonType,
  PyConfigPropertiesWithTomlType,
  PyConfigPropertiesWithChildren,
  PyConfigPropertiesWithoutChildren,
  PyConfigPropertiesBase,
  PyConfigProperties,
  PyConfigTag,
};

export default PyConfig;
