import { DetailedHTMLProps, HTMLAttributes } from "react";
import ReactElementProps from "~types/ReactElementProps/ReactElementProps";

type PyInputBoxProperties = Omit<
  ReactElementProps<
    DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>
  >,
  "children"
> & {
  children: string;
};

const PyInputBox = ({ children, ...rest }: PyInputBoxProperties) => {
  return <py-inputbox {...rest}>{children}</py-inputbox>;
};

export default PyInputBox;
