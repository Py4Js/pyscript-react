import { forwardRef, type ForwardedRef } from "react";
import type { PyLoaderProperties, PyLoaderTag } from "./py-loader.types";

/**
 * @param root0
 * @deprecated
 */
const PyLoader: PyLoaderTag = forwardRef(
  <OptionalProperties extends object>(
    properties: PyLoaderProperties<OptionalProperties>,
    reference: ForwardedRef<HTMLElement> | undefined,
    // eslint-disable-next-line max-params
  ): JSX.Element => {
    return <py-loader ref={reference} {...properties} />;
  },
) as PyLoaderTag;

PyLoader.displayName = "PyLoader";

export default PyLoader;
