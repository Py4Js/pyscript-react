import propTypes from "prop-types";
import { forwardRef, type ForwardedRef } from "react";
import type { PyTitleProperties, PyTitleTag } from "./py-title.types";

/**
 * @param root0
 * @param root0.children
 * @deprecated
 */
const PyTitle: PyTitleTag = forwardRef(
  <OptionalProperties extends object>(
    { children, ...rest }: PyTitleProperties<OptionalProperties>,
    reference: ForwardedRef<HTMLElement> | undefined,
    // eslint-disable-next-line max-params
  ): JSX.Element => {
    return (
      <py-title ref={reference} {...rest}>
        {children}
      </py-title>
    );
  },
) as PyTitleTag;

PyTitle.displayName = "PyTitle";

PyTitle.propTypes = {
  children: propTypes.string.isRequired,
};

export default PyTitle;
