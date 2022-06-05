import propTypes from "prop-types";
import {
  DetailedHTMLProps,
  FC,
  LinkHTMLAttributes,
  memo,
  PropsWithChildren,
  ScriptHTMLAttributes,
} from "react";
import {
  Helmet,
  HelmetProps,
  HelmetProvider,
  ProviderProps,
} from "react-helmet-async";

export type PyScriptProviderProperties = PropsWithChildren<{
  cssSrc?: string;
  cssSource?: PyScriptProviderProperties["cssSrc"];
  jsSrc?: string;
  jsSource?: PyScriptProviderProperties["jsSrc"];
  cssProps?: Omit<
    DetailedHTMLProps<LinkHTMLAttributes<HTMLLinkElement>, HTMLLinkElement>,
    "href"
  >;
  cssProperties?: PyScriptProviderProperties["cssProps"];
  jsProps?: Omit<
    DetailedHTMLProps<
      ScriptHTMLAttributes<HTMLScriptElement>,
      HTMLScriptElement
    >,
    "src"
  >;
  jsProperties?: PyScriptProviderProperties["jsProps"];
  helmetProps?: HelmetProps;
  helmetProviderProps?: ProviderProps;
}>;

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
  helmetProviderProps,
}: PyScriptProviderProperties): JSX.Element => {
  return (
    <HelmetProvider {...helmetProviderProps}>
      <Helmet {...helmetProps}>
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
  children: propTypes.oneOfType([
    propTypes.arrayOf(propTypes.node),
    propTypes.node,
  ]).isRequired,
};

export default memo(PyScriptProvider);
