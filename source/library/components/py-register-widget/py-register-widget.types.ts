import type {
  DetailedHTMLProps,
  ForwardedRef,
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

export type PyRegisterWidgetProperties<OptionalProperties> =
  OptionalProperties extends infer OptionalProperties
    ? OptionalProperties & PyRegisterWidgetPropertiesBase
    : PyRegisterWidgetPropertiesBase;

export type PyRegisterWidgetTag = {
  <OptionalProperties extends object>(
    properties: PyRegisterWidgetProperties<OptionalProperties>,
    reference?: ForwardedRef<HTMLElement>,
  ): JSX.Element;
  displayName?: string;
  defaultProps?: Partial<PyRegisterWidgetPropertiesBase>;
  propTypes?: WeakValidationMap<PyRegisterWidgetPropertiesBase>;
};
