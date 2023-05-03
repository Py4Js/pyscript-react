import propTypes from "prop-types";
import type {
  PySplashscreenProperties,
  PySplashscreenTag,
} from "./py-splashscreen.types";

const PySplashscreen: PySplashscreenTag = <T extends object>({
  ...rest
}: PySplashscreenProperties<T>): JSX.Element => {
  return <py-splashscreen {...rest} />;
};

PySplashscreen.propTypes = {
  enabled: propTypes.bool,
  autoclose: propTypes.bool,
};

export default PySplashscreen;
