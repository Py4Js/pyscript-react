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

export type PySplashscreenProperties<T> = T extends infer T
  ? T & PySplashscreenPropertiesBase
  : PySplashscreenPropertiesBase;

export type PySplashscreenProps<T> = PySplashscreenProperties<T>;

export type PySplashscreenTag = {
  <T extends object>(properties: PySplashscreenProperties<T>): JSX.Element;
  propTypes: WeakValidationMap<PySplashscreenPropertiesBase>;
};
