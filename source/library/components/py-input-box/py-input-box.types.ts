import type {
  DetailedHTMLProps,
  HTMLAttributes,
  WeakValidationMap,
} from "react";
import type ReactElementProps from "~types/react-element-properties/react-element-properties";

export type PyInputBoxPropertiesBase = Omit<
  ReactElementProps<
    DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>
  >,
  "children"
> & {
  children: string;
};

export type PyInputBoxProperties<T> = T extends infer T
  ? T & PyInputBoxPropertiesBase
  : PyInputBoxPropertiesBase;

export type PyInputBoxTag = {
  <T extends object>(properties: PyInputBoxProperties<T>): JSX.Element;
  propTypes: WeakValidationMap<PyInputBoxPropertiesBase>;
};
