import type {
  DetailedHTMLProps,
  ForwardedRef,
  HTMLAttributes,
  WeakValidationMap,
} from "react";
import type ReactElementProps from "~types/react-element-properties/react-element-properties";

export type PyLoaderPropertiesBase = Omit<
  ReactElementProps<
    DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>
  >,
  "children"
>;

export type PyLoaderProperties<OptionalProperties> =
  OptionalProperties extends infer OptionalProperties
    ? OptionalProperties & PyLoaderPropertiesBase
    : PyLoaderPropertiesBase;

export type PyLoaderProps<OptionalProperties> =
  PyLoaderProperties<OptionalProperties>;

export type PyLoaderTag = {
  <OptionalProperties extends object>(
    properties: PyLoaderProperties<OptionalProperties>,
    reference?: ForwardedRef<HTMLElement>,
  ): JSX.Element;
  displayName?: string;
  defaultProps?: Partial<PyLoaderPropertiesBase>;
  propTypes?: WeakValidationMap<PyLoaderPropertiesBase>;
};
