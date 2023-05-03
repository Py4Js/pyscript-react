import type {
  DetailedHTMLProps,
  HTMLAttributes,
  WeakValidationMap,
} from "react";
import type ReactElementProps from "~root/source/library/types/react-element-properties/react-element-properties";

export type PyRegisterWidgetPropertiesBase = Omit<
  ReactElementProps<
    DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>
  >,
  "children"
> & {
  name?: string;
  src: string;
  pythonClass?: string;
};

export type PyRegisterWidgetProperties<T> = T extends infer T
  ? T & PyRegisterWidgetPropertiesBase
  : PyRegisterWidgetPropertiesBase;

export type PyRegisterWidgetTag = {
  <T extends object>(properties: PyRegisterWidgetProperties<T>): JSX.Element;
  propTypes: WeakValidationMap<PyRegisterWidgetPropertiesBase>;
};
