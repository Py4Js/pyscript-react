import propTypes from "prop-types";
import {
  memo,
  useEffect,
  useRef,
  type FC,
  type WeakValidationMap,
} from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import type { PyScriptProviderProperties } from "./py-script-provider.types";

const PyScriptProvider: FC<PyScriptProviderProperties> = ({
  cssSrc = "https://pyscript.net/latest/pyscript.css",
  cssSource,
  jsSrc = "https://pyscript.net/latest/pyscript.js",
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
  setPyScript,
}: PyScriptProviderProperties): JSX.Element => {
  const timer = useRef<NodeJS.Timer | null>(null);
  useEffect(() => {
    if (setPyScript) {
      timer.current = setInterval(() => {
        if (window.pyscript) {
          setPyScript(window.pyscript);
          timer.current && clearInterval(timer.current);
        }
      }, 10);
    }
    return () => {
      timer.current && clearInterval(timer.current);
    };
  }, [setPyScript]);
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
  helmetProps: propTypes.object,
  helmetProperties: propTypes.object,
  helmetProviderProps: propTypes.object,
  helmetProviderProperties: propTypes.object,
  setPyScript: propTypes.func,
} as WeakValidationMap<PyScriptProviderProperties>;

export default memo(PyScriptProvider);
