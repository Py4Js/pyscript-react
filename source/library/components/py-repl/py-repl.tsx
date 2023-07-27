import propTypes from "prop-types";
import { forwardRef, type ForwardedRef } from "react";
import type { PyReplProperties, PyReplTag } from "./py-repl.types";

const PyRepl: PyReplTag = forwardRef(
  <OptionalProperties extends object>(
    {
      autoGenerate = false,
      children,
      ...rest
    }: PyReplProperties<OptionalProperties>,
    reference: ForwardedRef<HTMLElement> | undefined,
    // eslint-disable-next-line max-params
  ): JSX.Element => {
    return (
      <py-repl ref={reference} {...rest} auto-generate={autoGenerate}>
        {children}
      </py-repl>
    );
  },
) as PyReplTag;

PyRepl.displayName = "PyRepl";

PyRepl.propTypes = {
  children: propTypes.string,
  autoGenerate: propTypes.bool,
};

export default PyRepl;
