import { DetailedHTMLProps, HTMLAttributes, WeakValidationMap } from "react";
import ReactElementProps from "~types/react-element-properties/react-element-properties";

export type PyReplPropertiesBase = Omit<
  ReactElementProps<
    DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>
  >,
  "children"
> & {
  autoGenerate?: boolean;
  children?: string;
};

export type PyReplProperties<T> = T extends infer T
  ? T & PyReplPropertiesBase
  : PyReplPropertiesBase;

export type PyReplTag = {
  <T extends object>(properties: PyReplProperties<T>): JSX.Element;
  propTypes: WeakValidationMap<PyReplPropertiesBase>;
};
