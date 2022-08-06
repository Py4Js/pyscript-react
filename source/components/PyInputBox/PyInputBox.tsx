import propTypes from "prop-types";
import { DetailedHTMLProps, HTMLAttributes, WeakValidationMap } from "react";
import ReactElementProps from "~types/ReactElementProps/ReactElementProps";

export type PyInputBoxPropertiesBase = Omit<
  ReactElementProps<
    DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>
  >,
  "children"
> & {
  children: string;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export type PyInputBoxProperties<T> = T extends infer T
  ? T & PyInputBoxPropertiesBase
  : PyInputBoxPropertiesBase;

export type PyInputBoxTag = {
  <T extends object>(properties: PyInputBoxProperties<T>): JSX.Element;
  propTypes: WeakValidationMap<PyInputBoxPropertiesBase>;
};

const PyInputBox: PyInputBoxTag = <T extends object>({
  children,
  ...rest
}: PyInputBoxProperties<T>): JSX.Element => {
  return <py-inputbox {...rest}>{children}</py-inputbox>;
};

PyInputBox.propTypes = {
  children: propTypes.string.isRequired,
};

export default PyInputBox;
