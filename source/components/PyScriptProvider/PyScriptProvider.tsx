import propTypes from "prop-types";
import { FC, memo, WeakValidationMap } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { PyScriptProviderProperties } from "~components/PyScriptProvider/PyScriptProvider.types";

const PyScriptProvider: FC<PyScriptProviderProperties> = ({
  cssSrc = "https://pyscript.net/alpha/pyscript.css",
  cssSource,
  jsSrc = "https://pyscript.net/alpha/pyscript.js",
  jsSource,
  children,
  cssProps,
  cssProperties,
  jsProperties,
  jsProps,
  helmetProps,
  helmetProperties,
  helmetProviderProps,
  helmetProviderProperties,
}: PyScriptProviderProperties): JSX.Element => {
  return (
    <HelmetProvider {...(helmetProviderProperties || helmetProviderProps)}>
      <Helmet {...(helmetProperties || helmetProps)}>
        <link
          rel="stylesheet"
          {...(cssProperties || cssProps)}
          href={cssSource || cssSrc}
        />
        <script defer {...(jsProperties || jsProps)} src={jsSource || jsSrc} />
      </Helmet>
      {children}
    </HelmetProvider>
  );
};

PyScriptProvider.propTypes = {
  cssSrc: propTypes.string,
  jsSrc: propTypes.string,
  cssSource: propTypes.string,
  jsSource: propTypes.string,
  children: propTypes.oneOfType([
    propTypes.arrayOf(propTypes.node),
    propTypes.node,
  ]).isRequired,
} as WeakValidationMap<PyScriptProviderProperties>;

export default memo(PyScriptProvider);
