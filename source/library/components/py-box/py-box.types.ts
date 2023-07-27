import type {
  DetailedHTMLProps,
  HTMLAttributes,
  LegacyRef,
  PropsWithChildren,
  WeakValidationMap,
} from "react";
import type ReactElementProps from "~types/react-element-properties/react-element-properties";

export type PyBoxPropertiesBase = PropsWithChildren<
  ReactElementProps<
    DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>
  > & {
    widths?: string;
  }
>;

export type PyBoxProperties<OptionalProperties> =
  OptionalProperties extends infer OptionalProperties
    ? OptionalProperties & PyBoxPropertiesBase
    : PyBoxPropertiesBase;

export type PyBoxTag = {
  <OptionalProperties extends object>(
    properties: PyBoxProperties<OptionalProperties>,
    reference?: LegacyRef<HTMLElement>,
  ): JSX.Element;
  displayName?: string;
  defaultProps?: Partial<PyBoxPropertiesBase>;
  propTypes?: WeakValidationMap<PyBoxPropertiesBase>;
};
