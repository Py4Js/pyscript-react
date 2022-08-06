import propTypes from "prop-types";
import { DetailedHTMLProps, HTMLAttributes, WeakValidationMap } from "react";
import ReactElementProps from "~types/ReactElementProps/ReactElementProps";

export type PyReplPropertiesBase = Omit<
  ReactElementProps<
    DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>
  >,
  "children"
> & {
  autoGenerate?: boolean;
  children?: string;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export type PyReplProperties<T> = T extends infer T
  ? T & PyReplPropertiesBase
  : PyReplPropertiesBase;

export type PyReplTag = {
  <T extends object>(properties: PyReplProperties<T>): JSX.Element;
  propTypes: WeakValidationMap<PyReplPropertiesBase>;
};

const PyRepl: PyReplTag = <T extends object>({
  autoGenerate = false,
  children,
  ...rest
}: PyReplProperties<T>): JSX.Element => {
  return (
    <py-repl {...rest} auto-generate={autoGenerate}>
      {children}
    </py-repl>
  );
};

PyRepl.propTypes = {
  children: propTypes.string,
  autoGenerate: propTypes.bool,
};

export default PyRepl;
