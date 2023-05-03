import propTypes from "prop-types";
import type { PyReplProperties, PyReplTag } from "./py-repl.types";

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
