import { FC } from "react";

export type PyReplProperties = {
  autoGenerate?: boolean;
  children?: string;
};

const PyRepl: FC<PyReplProperties> = ({
  autoGenerate = false,
  children,
}: PyReplProperties) => {
  return <py-repl auto-generate={autoGenerate}>{children}</py-repl>;
};

export default PyRepl;
