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

export type PyBoxProperties<T> = T extends infer T
  ? T & PyBoxPropertiesBase
  : PyBoxPropertiesBase;

export type PyBoxTag = {
  <T extends object>(
    properties: PyBoxProperties<T>,
    reference: LegacyRef<HTMLElement> | undefined,
  ): JSX.Element;
  displayName?: string;
  defaultProps?: Partial<PyBoxPropertiesBase>;
  propTypes?: WeakValidationMap<PyBoxPropertiesBase>;
};
