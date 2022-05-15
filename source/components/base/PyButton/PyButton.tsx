import { FC } from "react";

export type PyButtonProperties = {
  children: string;
  label: string;
};

const PyButton: FC<PyButtonProperties> = ({
  children,
  label,
}: PyButtonProperties): JSX.Element => {
  return <py-button label={label}>{children}</py-button>;
};

export default PyButton;
