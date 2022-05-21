import propTypes from "prop-types";
import { DetailedHTMLProps, FC, HTMLAttributes } from "react";
import ReactElementProps from "~types/ReactElementProps/ReactElementProps";

export type PyTitleProperties = Omit<
  ReactElementProps<
    DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>
  >,
  "children"
> & {
  children: string;
};

const PyTitle: FC<PyTitleProperties> = ({
  children,
  ...rest
}: PyTitleProperties): JSX.Element => {
  return <py-title {...rest}>{children}</py-title>;
};

PyTitle.propTypes = {
  children: propTypes.string.isRequired,
};

export default PyTitle;
