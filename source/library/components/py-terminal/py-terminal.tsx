import propTypes from "prop-types";
import { forwardRef } from "react";
import type { PyTerminalProperties, PyTerminalTag } from "./py-terminal.types";

const PyTerminal: PyTerminalTag = forwardRef(
  <OptionalProperties extends object>(
    properties: PyTerminalProperties<OptionalProperties>,
  ): JSX.Element => {
    return <py-terminal {...properties} />;
  },
) as PyTerminalTag;

PyTerminal.displayName = "PyTerminal";

PyTerminal.propTypes = {
  auto: propTypes.bool,
};

export default PyTerminal;
