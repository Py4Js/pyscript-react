import type {
  DetailedHTMLProps,
  ForwardedRef,
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

export type PyTitleProperties<OptionalProperties> =
  OptionalProperties extends infer OptionalProperties
    ? OptionalProperties & PyTitlePropertiesBase
    : PyTitlePropertiesBase;

export type PyTitleProps<OptionalProperties> =
  PyTitleProperties<OptionalProperties>;

export type PyTitleTag = {
  <OptionalProperties extends object>(
    properties: PyTitleProperties<OptionalProperties>,
    reference?: ForwardedRef<HTMLElement>,
  ): JSX.Element;
  displayName?: string;
  defaultProps?: Partial<PyTitlePropertiesBase>;
  propTypes?: WeakValidationMap<PyTitlePropertiesBase>;
};
