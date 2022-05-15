import { FC, PropsWithChildren } from "react";

type PyBoxProperties = {};

const PyBox: FC<PropsWithChildren<PyBoxProperties>> = ({
  children,
}: PropsWithChildren<PyBoxProperties>) => {
  return <py-box>{children}</py-box>;
};

export default PyBox;
