import propTypes from "prop-types";
import { forwardRef, type ForwardedRef } from "react";

import type {
  PyRegisterWidgetProperties,
  PyRegisterWidgetTag,
} from "./py-register-widget.types";

/**
 * @param root0
 * @param root0.name
 * @param root0.src
 * @param root0.pythonClass
 * @deprecated
 */
const PyRegisterWidget: PyRegisterWidgetTag = forwardRef(
  <OptionalProperties extends object>(
    {
      name,
      src,
      pythonClass,
      ...rest
    }: PyRegisterWidgetProperties<OptionalProperties>,
    reference: ForwardedRef<HTMLElement> | undefined,
    // eslint-disable-next-line max-params
  ): JSX.Element => {
    return (
      <py-register-widget
        ref={reference}
        {...rest}
        src={src}
        name={name}
        klass={pythonClass}
      />
    );
  },
) as PyRegisterWidgetTag;

PyRegisterWidget.displayName = "PyRegisterWidget";

PyRegisterWidget.propTypes = {
  name: propTypes.string,
  src: propTypes.string.isRequired,
  pythonClass: propTypes.string,
};

export default PyRegisterWidget;
