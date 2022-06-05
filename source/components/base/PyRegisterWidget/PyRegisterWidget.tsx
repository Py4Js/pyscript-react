import propTypes from "prop-types";
import { DetailedHTMLProps, HTMLAttributes, WeakValidationMap } from "react";
import ReactElementProps from "~types/ReactElementProps/ReactElementProps";

export type PyRegisterWidgetPropertiesBase = Omit<
  ReactElementProps<
    DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>
  >,
  "children"
> & {
  name?: string;
  src: string;
  pythonClass?: string;
};

export type PyRegisterWidgetProperties<T> = T extends infer T
  ? T & PyRegisterWidgetPropertiesBase
  : PyRegisterWidgetPropertiesBase;

export type PyRegisterWidgetTag = {
  <T extends object>(properties: PyRegisterWidgetProperties<T>): JSX.Element;
  propTypes: WeakValidationMap<PyRegisterWidgetPropertiesBase>;
};

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
