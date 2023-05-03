import type { PyLoaderProperties, PyLoaderTag } from "./py-loader.types";

/**
 * @param root0
 * @deprecated
 */
const PyLoader: PyLoaderTag = <T extends object>({
  ...rest
}: PyLoaderProperties<T>): JSX.Element => {
  return <py-loader {...rest} />;
};

PyLoader.propTypes = {};

export default PyLoader;
