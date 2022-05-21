import propTypes from "prop-types";
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

PyBox.propTypes = {
  children: propTypes.oneOfType([
    propTypes.arrayOf(propTypes.node),
    propTypes.node,
  ]).isRequired,
};

export default PyBox;
