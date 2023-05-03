import type {
  DetailedHTMLProps,
  HTMLAttributes,
  WeakValidationMap,
} from "react";
import ReactElementProps from "~types/react-element-properties/react-element-properties";

export type PyButtonPropertiesBase = Omit<
  ReactElementProps<
    DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>
  >,
  "children"
> & {
  children: string;
  label: string;
};

export type PyButtonProperties<T> = T extends infer T
  ? T & PyButtonPropertiesBase
  : PyButtonPropertiesBase;

export type PyButtonTag = {
  <T extends object>(properties: PyButtonProperties<T>): JSX.Element;
  propTypes: WeakValidationMap<PyButtonPropertiesBase>;
};
