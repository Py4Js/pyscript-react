import propTypes from "prop-types";
import type { PyButtonProperties, PyButtonTag } from "./py-button.types";

/**
 * @param root0
 * @param root0.children
 * @param root0.label
 * @deprecated
 */
const PyButton: PyButtonTag = <T extends object>({
  children,
  label,
  ...rest
}: PyButtonProperties<T>): JSX.Element => {
  return (
    <py-button {...rest} label={label}>
      {children}
    </py-button>
  );
};

PyButton.propTypes = {
  children: propTypes.string.isRequired,
  label: propTypes.string.isRequired,
};

export default PyButton;
