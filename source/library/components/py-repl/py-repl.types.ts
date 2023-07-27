import type {
  DetailedHTMLProps,
  ForwardedRef,
  HTMLAttributes,
  WeakValidationMap,
} from "react";
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

export type PyReplProperties<OptionalProperties> =
  OptionalProperties extends infer OptionalProperties
    ? OptionalProperties & PyReplPropertiesBase
    : PyReplPropertiesBase;

export type PyReplTag = {
  <OptionalProperties extends object>(
    properties: PyReplProperties<OptionalProperties>,
    reference?: ForwardedRef<HTMLElement>,
  ): JSX.Element;
  displayName?: string;
  defaultProps?: Partial<PyReplPropertiesBase>;
  propTypes?: WeakValidationMap<PyReplPropertiesBase>;
};
