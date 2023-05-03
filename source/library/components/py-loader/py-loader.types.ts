import type {
  DetailedHTMLProps,
  HTMLAttributes,
  WeakValidationMap,
} from "react";
import type ReactElementProps from "~types/react-element-properties/react-element-properties";

export type PyLoaderPropertiesBase = Omit<
  ReactElementProps<
    DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>
  >,
  "children"
>;

export type PyLoaderProperties<T> = T extends infer T
  ? T & PyLoaderPropertiesBase
  : PyLoaderPropertiesBase;

export type PyLoaderProps<T> = PyLoaderProperties<T>;

export type PyLoaderTag = {
  <T extends object>(properties: PyLoaderProperties<T>): JSX.Element;
  propTypes: WeakValidationMap<PyLoaderPropertiesBase>;
};
