import type {
  DetailedHTMLProps,
  HTMLAttributes,
  WeakValidationMap,
} from "react";
import type ReactElementProps from "~types/react-element-properties/react-element-properties";

export type PySplashscreenPropertiesBase = Omit<
  ReactElementProps<
    DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>
  >,
  "children"
> & {
  enabled?: boolean;
  autoclose?: boolean;
};

export type PySplashscreenProperties<OptionalProperties> =
  OptionalProperties extends infer OptionalProperties
    ? OptionalProperties & PySplashscreenPropertiesBase
    : PySplashscreenPropertiesBase;

export type PySplashscreenProps<OptionalProperties> =
  PySplashscreenProperties<OptionalProperties>;

export type PySplashscreenTag = {
  <OptionalProperties extends object>(
    properties: PySplashscreenProperties<OptionalProperties>,
  ): JSX.Element;
  displayName?: string;
  defaultProps?: Partial<PySplashscreenPropertiesBase>;
  propTypes?: WeakValidationMap<PySplashscreenPropertiesBase>;
};
