import propTypes from "prop-types";
import { forwardRef, type ForwardedRef } from "react";
import type { PyInputBoxProperties, PyInputBoxTag } from "./py-input-box.types";

/**
 * @param root0
 * @param root0.children
 * @deprecated
 */
const PyInputBox: PyInputBoxTag = forwardRef(
  <OptionalProperties extends object>(
    { children, ...rest }: PyInputBoxProperties<OptionalProperties>,
    reference: ForwardedRef<HTMLElement> | undefined,
    // eslint-disable-next-line max-params
  ): JSX.Element => {
    return (
      <py-inputbox ref={reference} {...rest}>
        {children}
      </py-inputbox>
    );
  },
) as PyInputBoxTag;

PyInputBox.displayName = "PyInputBox";

PyInputBox.propTypes = {
  children: propTypes.string.isRequired,
};

export default PyInputBox;
