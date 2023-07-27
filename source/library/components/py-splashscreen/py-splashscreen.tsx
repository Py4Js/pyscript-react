import propTypes from "prop-types";
import { forwardRef, type ForwardedRef } from "react";
import type {
  PySplashscreenProperties,
  PySplashscreenTag,
} from "./py-splashscreen.types";

const PySplashscreen: PySplashscreenTag = forwardRef(
  <OptionalProperties extends object>(
    properties: PySplashscreenProperties<OptionalProperties>,
    reference: ForwardedRef<HTMLElement> | undefined,
    // eslint-disable-next-line max-params
  ): JSX.Element => {
    return <py-splashscreen ref={reference} {...properties} />;
  },
) as PySplashscreenTag;

PySplashscreen.displayName = "PySplashscreen";

PySplashscreen.propTypes = {
  enabled: propTypes.bool,
  autoclose: propTypes.bool,
};

export default PySplashscreen;
