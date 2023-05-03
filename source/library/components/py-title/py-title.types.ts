import type {
  DetailedHTMLProps,
  HTMLAttributes,
  WeakValidationMap,
} from "react";
import type ReactElementProps from "~types/react-element-properties/react-element-properties";

export type PyTitlePropertiesBase = Omit<
  ReactElementProps<
    DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>
  >,
  "children"
> & {
  children: string;
};

export type PyTitleProperties<T> = T extends infer T
  ? T & PyTitlePropertiesBase
  : PyTitlePropertiesBase;

export type PyTitleProps<T> = PyTitleProperties<T>;

export type PyTitleTag = {
  <T extends object>(properties: PyTitleProperties<T>): JSX.Element;
  propTypes: WeakValidationMap<PyTitlePropertiesBase>;
};
