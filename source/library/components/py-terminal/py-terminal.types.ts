import type {
  DetailedHTMLProps,
  HTMLAttributes,
  WeakValidationMap,
} from "react";
import type ReactElementProps from "~types/react-element-properties/react-element-properties";

export type PyTerminalPropertiesBase = Omit<
  ReactElementProps<
    DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>
  >,
  "children"
> & {
  auto?: boolean;
};

export type PyTerminalProperties<OptionalProperties> =
  OptionalProperties extends infer OptionalProperties
    ? OptionalProperties & PyTerminalPropertiesBase
    : PyTerminalPropertiesBase;

export type PyTerminalProps<OptionalProperties> =
  PyTerminalProperties<OptionalProperties>;

export type PyTerminalTag = {
  <OptionalProperties extends object>(
    properties: PyTerminalProperties<OptionalProperties>,
  ): JSX.Element;
  displayName?: string;
  defaultProps?: Partial<PyTerminalPropertiesBase>;
  propTypes?: WeakValidationMap<PyTerminalPropertiesBase>;
};
