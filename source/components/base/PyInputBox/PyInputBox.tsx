import propTypes from "prop-types";
import { DetailedHTMLProps, FC, HTMLAttributes } from "react";
import ReactElementProps from "~types/ReactElementProps/ReactElementProps";

type PyInputBoxProperties = Omit<
  ReactElementProps<
    DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>
  >,
  "children"
> & {
  children: string;
};

const PyInputBox: FC<PyInputBoxProperties> = ({
  children,
  ...rest
}: PyInputBoxProperties): JSX.Element => {
  return <py-inputbox {...rest}>{children}</py-inputbox>;
};

PyInputBox.propTypes = {
  children: propTypes.string.isRequired,
};

export default PyInputBox;
