import propTypes from "prop-types";
import { DetailedHTMLProps, HTMLAttributes, WeakValidationMap } from "react";
import ReactElementProps from "~types/ReactElementProps/ReactElementProps";

export type PyConfigPropertiesBase = Omit<
  ReactElementProps<
    DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>
  >,
  "children"
> & {
  children: string;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export type PyConfigProperties<T> = T extends infer T
  ? T & PyConfigPropertiesBase
  : PyConfigPropertiesBase;

export type PyConfigTag = {
  <T extends object>(properties: PyConfigProperties<T>): JSX.Element;
  propTypes: WeakValidationMap<PyConfigPropertiesBase>;
};

const PyConfig: PyConfigTag = <T extends object>({
  children,
  ...rest
}: PyConfigProperties<T>): JSX.Element => {
  return <py-config {...rest}>{children}</py-config>;
};

PyConfig.propTypes = {
  children: propTypes.string.isRequired,
};

export default PyConfig;
