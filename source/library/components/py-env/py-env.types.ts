import type {
  DetailedHTMLProps,
  ForwardedRef,
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

export type PyEnvProperties<OptionalProperties> =
  OptionalProperties extends infer OptionalProperties
    ? OptionalProperties & PyEnvPropertiesBase
    : PyEnvPropertiesBase;

export type PyEnvTag = {
  <OptionalProperties extends object>(
    properties: PyEnvProperties<OptionalProperties>,
    reference?: ForwardedRef<HTMLElement>,
  ): JSX.Element;
  displayName?: string;
  defaultProps?: Partial<PyEnvPropertiesBase>;
  propTypes?: WeakValidationMap<PyEnvPropertiesBase>;
};
