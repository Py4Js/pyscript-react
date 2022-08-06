import propTypes from "prop-types";
import {
  PyTitleProperties,
  PyTitleTag,
} from "~components/PyTitle/PyTitle.types";

const PyTitle: PyTitleTag = <T extends object>({
  children,
  ...rest
}: PyTitleProperties<T>): JSX.Element => {
  return <py-title {...rest}>{children}</py-title>;
};

PyTitle.propTypes = {
  children: propTypes.string.isRequired,
};

export default PyTitle;
