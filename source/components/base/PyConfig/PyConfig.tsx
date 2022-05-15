import { FC } from "react";

type PyConfigProperties = {
  children: string;
};

const PyConfig: FC<PyConfigProperties> = ({
  children,
}: PyConfigProperties): JSX.Element => {
  return <py-config>{children}</py-config>;
};

export default PyConfig;
