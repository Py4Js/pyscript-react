import type {
  DetailedHTMLProps,
  ForwardedRef,
  HTMLAttributes,
  WeakValidationMap,
} from "react";
import type ReactElementProps from "~types/react-element-properties/react-element-properties";

export type PyButtonPropertiesBase = Omit<
  ReactElementProps<
    DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>
  >,
  "children"
> & {
  children: string;
  label: string;
};

export type PyButtonProperties<OptionalProperties> =
  OptionalProperties extends infer OptionalProperties
    ? OptionalProperties & PyButtonPropertiesBase
    : PyButtonPropertiesBase;

export type PyButtonTag = {
  <OptionalProperties extends object>(
    properties: PyButtonProperties<OptionalProperties>,
    reference?: ForwardedRef<HTMLElement>,
  ): JSX.Element;
  displayName?: string;
  defaultProps?: Partial<PyButtonPropertiesBase>;
  propTypes?: WeakValidationMap<PyButtonPropertiesBase>;
};
