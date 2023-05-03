import type {
  DetailedHTMLProps,
  HTMLAttributes,
  WeakValidationMap,
} from "react";
import type ReactElementProps from "~types/react-element-properties/react-element-properties";

export type PyConfigInterpreters = {
  source?: string;
  name?: string;
  language?: string;
};

export type PyConfigFetch = {
  files?: string[] | Set<string>;
};

export type PyConfigSplashscreen = {
  autoclose?: boolean;
};

export type PyConfigSharedJsonProperties = {
  splashscreen?: PyConfigSplashscreen;
  interpreters?: PyConfigInterpreters;
  fetch?: PyConfigFetch;
  packages?: string[] | Set<string>;
  plugins?: string[] | Set<string>;
};

export type PyConfigPropertiesWithJsonType = {
  children: Record<string, any> & PyConfigSharedJsonProperties;
  type: "json";
} & PyConfigSharedJsonProperties;

export type PyConfigPropertiesWithTomlType = {
  children: string;
  /**
   * @default toml
   */
  type?: "toml";
  splashscreen?: never;
  interpreters?: never;
  fetch?: never;
  packages?: never;
  plugins?: never;
};

export type PyConfigPropertiesWithChildren = (
  | PyConfigPropertiesWithJsonType
  | PyConfigPropertiesWithTomlType
) & {
  source?: never;
};

export type PyConfigPropertiesWithoutChildren = {
  source: string;
  /**
   * @default toml
   */
  type?: "toml" | "json";
  children?: never;
  splashscreen?: never;
  interpreters?: never;
  fetch?: never;
  packages?: never;
  plugins?: never;
};

export type PyConfigPropertiesBase = Omit<
  ReactElementProps<
    DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>
  >,
  "children"
> &
  (PyConfigPropertiesWithChildren | PyConfigPropertiesWithoutChildren);

export type PyConfigProperties<T> = T extends infer T
  ? T & PyConfigPropertiesBase
  : PyConfigPropertiesBase;

export type PyConfigTag = {
  <T extends object>(properties: PyConfigProperties<T>): JSX.Element;
  propTypes: WeakValidationMap<PyConfigPropertiesBase>;
};
