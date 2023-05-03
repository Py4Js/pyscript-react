import propTypes from "prop-types";
import { PyTerminalProperties, PyTerminalTag } from "./py-terminal.types";

const PyTerminal: PyTerminalTag = <T extends object>({
  ...rest
}: PyTerminalProperties<T>): JSX.Element => {
  return <py-terminal {...rest} />;
};

PyTerminal.propTypes = {
  auto: propTypes.bool,
};

export default PyTerminal;
