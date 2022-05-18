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
}: PyRegisterWidgetProperties) => {
  return (
    <py-register-widget
      src={src}
      name={name}
      klass={pythonClass}
    ></py-register-widget>
  );
};

export default PyRegisterWidget;
