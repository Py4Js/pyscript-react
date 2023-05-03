import propTypes from "prop-types";
import type { PyBoxProperties, PyBoxTag } from "./py-box.types";

/**
 * Container element that can arrange children using the CSS Flexbox layout model in the horizontal direction. It uses Tailwind CSS width classes to define the column widths
 * @param root0
 * @param root0.children
 * @deprecated
 */
const PyBox: PyBoxTag = <T extends object>({
  children,
  ...rest
}: PyBoxProperties<T>): JSX.Element => {
  return <py-box {...rest}>{children}</py-box>;
};

PyBox.propTypes = {
  children: propTypes.oneOfType([
    propTypes.arrayOf(propTypes.node),
    propTypes.node,
  ]),
  widths: propTypes.string,
};

export default PyBox;
