import propTypes from "prop-types";
import { PyTitleProperties, PyTitleTag } from "./py-title.types";

/**
 * @param root0
 * @param root0.children
 * @deprecated
 */
const PyTitle: PyTitleTag = <T extends object>({
  children,
  ...rest
}: PyTitleProperties<T>): JSX.Element => {
  return <py-title {...rest}>{children}</py-title>;
};

PyTitle.propTypes = {
  children: propTypes.string.isRequired,
};

export default PyTitle;
