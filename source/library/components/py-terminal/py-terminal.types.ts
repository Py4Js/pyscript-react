import { DetailedHTMLProps, HTMLAttributes, WeakValidationMap } from "react";
import ReactElementProps from "~types/react-element-properties/react-element-properties";

export type PyTerminalPropertiesBase = Omit<
  ReactElementProps<
    DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>
  >,
  "children"
> & {
  auto?: boolean;
};

export type PyTerminalProperties<T> = T extends infer T
  ? T & PyTerminalPropertiesBase
  : PyTerminalPropertiesBase;

export type PyTerminalProps<T> = PyTerminalProperties<T>;

export type PyTerminalTag = {
  <T extends object>(properties: PyTerminalProperties<T>): JSX.Element;
  propTypes: WeakValidationMap<PyTerminalPropertiesBase>;
};
