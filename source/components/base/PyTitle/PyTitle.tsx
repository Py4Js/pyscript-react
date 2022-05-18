import { FC } from "react";

export type PyTitleProperties = {
  children: string;
};

const PyTitle: FC<PyTitleProperties> = ({ children }: PyTitleProperties) => {
  return <py-title>{children}</py-title>;
};

export default PyTitle;
