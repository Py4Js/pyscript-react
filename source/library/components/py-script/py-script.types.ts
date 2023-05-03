import type {
  DetailedHTMLProps,
  HTMLAttributes,
  WeakValidationMap,
} from "react";
import type { PyEnvPropertiesBase } from "~components/py-env/py-env.types";
import { PyConfigPropertiesWithoutChildren } from "~root/source/library/components/py-config/py-config.types";
import type ReactElementProps from "~types/react-element-properties/react-element-properties";
import type {
  PyConfigPropertiesWithJsonType,
  PyConfigPropertiesWithTomlType,
} from "../py-config/py-config.types";

export type PyScriptPropertiesBase = Omit<
  ReactElementProps<
    DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>
  >,
  "children"
>;

export type PyScriptPropertiesWithChildren = {
  src?: never;
  children: string;
  source?: never;
};

export type PyScriptPropertiesWithSourceFullName = {
  src?: never;
  children?: never;
  source: string;
};

export type PyScriptPropertiesWithSource = {
  /**
   * Alias to source property
   * @alias
   */
  src: string;
  children?: never;
  source?: never;
};

export type PyScriptPropertiesWitOutputPart = {
  /**
   * Specify id of element where output should be displayed. Works only with legacy version of PyScript
   * @deprecated
   */
  output: string;
  /**
   * If the value is true, generates a `div` element. In the case when provided value is a string, it will generate an element based on this value. If we want to limit ourselves only to real tags in HTML, we can check if the value meets the assumptions of the `keyof ReactHTML` type. It can be done like this:
   *
   * ```ts
   * "img" satisfies keyof ReactHTML // image tag element satisfies keyof ReactHTML
   * "test" satisfies keyof ReactHTML // test tag doesn't satisfies keyof ReactHTML
   * ```
   *
   */
  generateOutputTag?: boolean | string;
};

export type PyScriptPropertiesWithoutOutputPart = {
  output?: never;
  generateOutputTag?: never;
};

/**
 * @deprecated
 */
export type PyScriptPropertiesWithPyEnvPart = {
  /**
   * Allow to pass children to PyEnv component. Should be only with legacy version of PyScript
   * @deprecated
   */
  pyEnvContent: PyEnvPropertiesBase["children"];
  /**
   * @deprecated
   */
  pyEnvProps?: Omit<PyEnvPropertiesBase, "children">;
};

/**
 * @deprecated
 */
export type PyScriptPropertiesWithWithoutPyEnvPart = {
  /**
   * @deprecated
   */
  pyEnvContent?: never;
  /**
   * @deprecated
   */
  pyEnvProps?: never;
};

export type PyScriptPropertiesWithPyConfigPartAsJson = {
  pyConfigContent?: PyConfigPropertiesWithJsonType["children"];
  pyConfigProps?: Omit<
    ReactElementProps<
      DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>
    >,
    "children"
  > &
    Omit<PyConfigPropertiesWithJsonType, "children">;
};

export type PyScriptPropertiesWithPyConfigPartAsToml = {
  pyConfigContent: PyConfigPropertiesWithTomlType["children"];
  pyConfigProps?: Omit<
    ReactElementProps<
      DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>
    >,
    "children"
  > &
    Omit<PyConfigPropertiesWithTomlType, "children">;
};

export type PyScriptPropertiesWithPyConfigPartAsExternal = {
  pyConfigContent?: never;
  pyConfigProps?: Omit<
    ReactElementProps<
      DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>
    >,
    "children"
  > &
    PyConfigPropertiesWithoutChildren;
};

export type PyScriptPropertiesWithWithoutPyConfigPart = {
  pyConfigContent?: never;
  pyConfigProps?: never;
};

export type PyScriptPropertiesWithoutGeneric = PyScriptPropertiesBase &
  (
    | PyScriptPropertiesWithPyConfigPartAsJson
    | PyScriptPropertiesWithPyConfigPartAsToml
    | PyScriptPropertiesWithPyConfigPartAsExternal
    | PyScriptPropertiesWithWithoutPyConfigPart
  ) &
  (PyScriptPropertiesWithPyEnvPart | PyScriptPropertiesWithWithoutPyEnvPart) &
  (PyScriptPropertiesWitOutputPart | PyScriptPropertiesWithoutOutputPart) &
  (
    | PyScriptPropertiesWithSource
    | PyScriptPropertiesWithChildren
    | PyScriptPropertiesWithSourceFullName
  );

export type PyScriptProperties<T> = T extends infer T
  ? T & PyScriptPropertiesWithoutGeneric
  : PyScriptPropertiesWithoutGeneric;

export type PyScriptProps<T> = PyScriptProperties<T>;

export type PyScriptTag = {
  <T extends object>(properties: PyScriptProperties<T>): JSX.Element;
  propTypes: WeakValidationMap<PyScriptPropertiesWithoutGeneric>;
};
