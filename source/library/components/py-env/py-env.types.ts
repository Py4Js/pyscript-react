import type {
  DetailedHTMLProps,
  HTMLAttributes,
  WeakValidationMap,
} from "react";
import type ReactElementProps from "~types/react-element-properties/react-element-properties";

export type PyEnvChildrenAsObject =
  | PyEnvChildrenAsObjectWithPaths
  | PyEnvChildrenAsObjectWithoutPaths;

export type PyEnvChildrenAsObjectWithPaths = {
  paths: string[] | Set<string>;
  items?: string[] | Set<string>;
};

export type PyEnvChildrenAsObjectWithoutPaths = {
  paths?: string[] | Set<string>;
  items: string[] | Set<string>;
};

export type PyEnvPropertiesBase = Omit<
  ReactElementProps<
    DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>
  >,
  "children"
> & {
  children: string | string[] | Set<string> | PyEnvChildrenAsObject;
};

export type PyEnvProperties<T> = T extends infer T
  ? T & PyEnvPropertiesBase
  : PyEnvPropertiesBase;

export type PyEnvTag = {
  <T extends object>(properties: PyEnvProperties<T>): JSX.Element;
  propTypes: WeakValidationMap<PyEnvPropertiesBase>;
};
