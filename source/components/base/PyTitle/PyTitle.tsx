import propTypes from "prop-types";
import { DetailedHTMLProps, HTMLAttributes, WeakValidationMap } from "react";
import ReactElementProps from "~types/ReactElementProps/ReactElementProps";

export type PyTitlePropertiesBase = Omit<
  ReactElementProps<
    DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>
  >,
  "children"
> & {
  children: string;
};

export type PyTitleProperties<T> = T extends infer T
  ? T & PyTitlePropertiesBase
  : PyTitlePropertiesBase;

export type PyTitleTag = {
  <T extends object>(properties: PyTitleProperties<T>): JSX.Element;
  propTypes: WeakValidationMap<PyTitlePropertiesBase>;
};

const PyTitle: PyTitleTag = <T extends object>({
  children,
  ...rest
}: PyTitleProperties<T>): JSX.Element => {
  return <py-title {...rest}>{children}</py-title>;
};

PyTitle.propTypes = {
  children: propTypes.string.isRequired,
};

export default PyTitle;
