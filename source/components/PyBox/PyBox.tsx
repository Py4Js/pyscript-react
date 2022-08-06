import propTypes from "prop-types";
import {
  DetailedHTMLProps,
  HTMLAttributes,
  PropsWithChildren,
  WeakValidationMap,
} from "react";
import ReactElementProps from "~types/ReactElementProps/ReactElementProps";

export type PyBoxPropertiesBase = PropsWithChildren<
  ReactElementProps<DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>>
>;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export type PyBoxProperties<T> = T extends infer T
  ? T & PyBoxPropertiesBase
  : PyBoxPropertiesBase;

export type PyBoxTag = {
  <T extends object>(properties: PyBoxProperties<T>): JSX.Element;
  propTypes: WeakValidationMap<PyBoxPropertiesBase>;
};

const PyBox: PyBoxTag = <T extends object>({
  children,
  ...rest
}: PyBoxProperties<T>): JSX.Element => {
  return <py-box {...rest}>{children}</py-box>;
};

PyBox.propTypes = {
  children: propTypes.oneOfType([
    propTypes.arrayOf(propTypes.node),
    propTypes.node,
  ]).isRequired,
};

export default PyBox;
