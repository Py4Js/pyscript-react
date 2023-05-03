import propTypes from "prop-types";
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
const PyRegisterWidget: PyRegisterWidgetTag = <T extends object>({
  name,
  src,
  pythonClass,
  ...rest
}: PyRegisterWidgetProperties<T>): JSX.Element => {
  return (
    <py-register-widget {...rest} src={src} name={name} klass={pythonClass} />
  );
};

PyRegisterWidget.propTypes = {
  name: propTypes.string,
  src: propTypes.string.isRequired,
  pythonClass: propTypes.string,
};

export default PyRegisterWidget;
