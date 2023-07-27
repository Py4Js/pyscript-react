import propTypes from "prop-types";
import { forwardRef, type ForwardedRef } from "react";
import type { PyBoxProperties, PyBoxTag } from "./py-box.types";

/**
 * Container element that can arrange children using the CSS Flexbox layout model in the horizontal direction. It uses Tailwind CSS width classes to define the column widths
 * @param root0
 * @param root0.children
 * @deprecated
 */
const PyBox: PyBoxTag = forwardRef(
  <T extends object>(
    { children, ...rest }: PyBoxProperties<T>,
    reference: ForwardedRef<HTMLElement> | undefined,
    // eslint-disable-next-line max-params
  ): JSX.Element => {
    return (
      <py-box ref={reference} {...rest}>
        {children}
      </py-box>
    );
  },
) as PyBoxTag;

PyBox.displayName = "PyBox";

PyBox.propTypes = {
  children: propTypes.oneOfType([
    propTypes.arrayOf(propTypes.node),
    propTypes.node,
  ]),
  widths: propTypes.string,
};

export default PyBox;
