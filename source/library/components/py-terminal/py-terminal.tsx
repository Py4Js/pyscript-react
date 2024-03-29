import propTypes from "prop-types";
import { ForwardedRef, forwardRef } from "react";

import type { PyTerminalProperties, PyTerminalTag } from "./py-terminal.types";

const PyTerminal: PyTerminalTag = forwardRef(
  <OptionalProperties extends object>(
    properties: PyTerminalProperties<OptionalProperties>,
    reference: ForwardedRef<HTMLElement> | undefined,
    // eslint-disable-next-line max-params
  ): JSX.Element => {
    return <py-terminal ref={reference} {...properties} />;
  },
) as PyTerminalTag;

PyTerminal.displayName = "PyTerminal";

PyTerminal.propTypes = {
  auto: propTypes.bool,
};

export default PyTerminal;
