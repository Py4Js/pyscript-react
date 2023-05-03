import propTypes from "prop-types";
import type { PyInputBoxProperties, PyInputBoxTag } from "./py-input-box.types";

/**
 * @param root0
 * @param root0.children
 * @deprecated
 */
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
