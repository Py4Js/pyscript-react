import propTypes from "prop-types";
import { forwardRef, type ForwardedRef } from "react";
import type { PyButtonProperties, PyButtonTag } from "./py-button.types";

/**
 * @param root0
 * @param root0.children
 * @param root0.label
 * @deprecated
 */
const PyButton: PyButtonTag = forwardRef(
  <OptionalProperties extends object>(
    { children, label, ...rest }: PyButtonProperties<OptionalProperties>,
    reference: ForwardedRef<HTMLElement> | undefined,
    // eslint-disable-next-line max-params
  ): JSX.Element => {
    return (
      <py-button ref={reference} {...rest} label={label}>
        {children}
      </py-button>
    );
  },
) as PyButtonTag;

PyButton.displayName = "PyButton";

PyButton.propTypes = {
  children: propTypes.string.isRequired,
  label: propTypes.string.isRequired,
};

export default PyButton;
