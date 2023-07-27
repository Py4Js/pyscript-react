import {
  DetailedHTMLProps,
  ForwardedRef,
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

export type PyInputBoxProperties<OptionalProperties> =
  OptionalProperties extends infer OptionalProperties
    ? OptionalProperties & PyInputBoxPropertiesBase
    : PyInputBoxPropertiesBase;

export type PyInputBoxTag = {
  <OptionalProperties extends object>(
    properties: PyInputBoxProperties<OptionalProperties>,
    reference?: ForwardedRef<HTMLElement>,
  ): JSX.Element;
  displayName?: string;
  defaultProps?: Partial<PyInputBoxPropertiesBase>;
  propTypes?: WeakValidationMap<PyInputBoxPropertiesBase>;
};
