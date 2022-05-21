import propTypes from "prop-types";
import { DetailedHTMLProps, FC, HTMLAttributes } from "react";
import ReactElementProps from "~types/ReactElementProps/ReactElementProps";

type PyRegisterWidgetProperties = Omit<
  ReactElementProps<
    DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>
  >,
  "children"
> & {
  name?: string;
  src: string;
  pythonClass?: string;
};

const PyRegisterWidget: FC<PyRegisterWidgetProperties> = ({
  name,
  src,
  pythonClass,
}: PyRegisterWidgetProperties): JSX.Element => {
  return (
    <py-register-widget
      src={src}
      name={name}
      klass={pythonClass}
    ></py-register-widget>
  );
};

PyRegisterWidget.propTypes = {
  name: propTypes.string,
  src: propTypes.string.isRequired,
  pythonClass: propTypes.string,
};

export default PyRegisterWidget;
