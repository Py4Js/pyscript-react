import propTypes from "prop-types";
import { DetailedHTMLProps, HTMLAttributes, WeakValidationMap } from "react";
import ReactElementProps from "~types/ReactElementProps/ReactElementProps";

export type PyButtonPropertiesBase = Omit<
  ReactElementProps<
    DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>
  >,
  "children"
> & {
  children: string;
  label: string;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export type PyButtonProperties<T> = T extends infer T
  ? T & PyButtonPropertiesBase
  : PyButtonPropertiesBase;

export type PyButtonTag = {
  <T extends object>(properties: PyButtonProperties<T>): JSX.Element;
  propTypes: WeakValidationMap<PyButtonPropertiesBase>;
};

const PyButton: PyButtonTag = <T extends object>({
  children,
  label,
  ...rest
}: PyButtonProperties<T>): JSX.Element => {
  return (
    <py-button {...rest} label={label}>
      {children}
    </py-button>
  );
};

PyButton.propTypes = {
  children: propTypes.string.isRequired,
  label: propTypes.string.isRequired,
};

export default PyButton;
