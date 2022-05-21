import { DetailedHTMLProps, FC, HTMLAttributes } from "react";
import ReactElementProps from "~types/ReactElementProps/ReactElementProps";

export type PyReplProperties = Omit<
  ReactElementProps<
    DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>
  >,
  "children"
> & {
  autoGenerate?: boolean;
  children?: string;
};

const PyRepl: FC<PyReplProperties> = ({
  autoGenerate = false,
  children,
  ...rest
}: PyReplProperties): JSX.Element => {
  return (
    <py-repl {...rest} auto-generate={autoGenerate}>
      {children}
    </py-repl>
  );
};

export default PyRepl;
