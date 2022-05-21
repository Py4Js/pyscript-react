import {
  DetailedHTMLProps,
  FC,
  HTMLAttributes,
  PropsWithChildren,
} from "react";
import ReactElementProps from "~types/ReactElementProps/ReactElementProps";

type PyBoxProperties = ReactElementProps<
  DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>
>;

const PyBox: FC<PyBoxProperties> = ({
  children,
  ...rest
}: PropsWithChildren<PyBoxProperties>): JSX.Element => {
  return <py-box {...rest}>{children}</py-box>;
};

export default PyBox;
