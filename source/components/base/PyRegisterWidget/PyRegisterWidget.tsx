import { FC } from "react";

type PyRegisterWidgetProperties = {
  name?: string;
  src: string;
  klass?: string;
};

const PyRegisterWidget: FC<PyRegisterWidgetProperties> = ({
  name,
  src,
  klass,
}: PyRegisterWidgetProperties) => {
  return (
    <py-register-widget
      src={src}
      name={name}
      klass={klass}
    ></py-register-widget>
  );
};

export default PyRegisterWidget;
