import {
  DetailedHTMLProps,
  FC,
  HTMLAttributes,
  PropsWithChildren,
} from "react";
import ReactElementProps from "~types/ReactElementProps/ReactElementProps";

type PyBoxProperties = Omit<
  ReactElementProps<
    DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>
  >,
  "children"
>;

const PyBox: FC<PyBoxProperties> = ({
  children,
  ...rest
}: PropsWithChildren<PyBoxProperties>) => {
  return <py-box {...rest}>{children}</py-box>;
};

export default PyBox;
