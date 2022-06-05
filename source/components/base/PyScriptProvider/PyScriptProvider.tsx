import propTypes from "prop-types";
import {
  DetailedHTMLProps,
  FC,
  LinkHTMLAttributes,
  memo,
  PropsWithChildren,
  ScriptHTMLAttributes,
  WeakValidationMap,
} from "react";
import {
  Helmet,
  HelmetProps,
  HelmetProvider,
  ProviderProps,
} from "react-helmet-async";

export type PyScriptProviderProperties = PropsWithChildren<
  | {
      jsProps?: Omit<
        DetailedHTMLProps<
          ScriptHTMLAttributes<HTMLScriptElement>,
          HTMLScriptElement
        >,
        "src"
      >;
      jsProperties?: PyScriptProviderProperties["jsProps"];
      helmetProps?: HelmetProps;
      helmetProperties?: PyScriptProviderProperties["helmetProps"];
      helmetProviderProps?: ProviderProps;
      helmetProviderProperties?: PyScriptProviderProperties["helmetProviderProps"];
    } & (
      | PyScriptProviderPropertiesWithCSSSourceFullname
      | PyScriptProviderPropertiesWithoutCSSSourceFullname
    ) &
      (
        | PyScriptProviderPropertiesWithJSourceFullname
        | PyScriptProviderPropertiesWithoutJSourceFullname
      ) &
      (
        | PyScriptProviderPropertiesWithCSSPropertiesFullname
        | PyScriptProviderPropertiesWithoutCSSPropertiesFullname
      )
>;

export type PyScriptProviderPropertiesWithCSSSourceFullname = {
  cssSource?: string;
  cssSrc?: never;
};

export type PyScriptProviderPropertiesWithoutCSSSourceFullname = {
  cssSource?: never;
  cssSrc?: string;
};

export type PyScriptProviderPropertiesWithJSourceFullname = {
  jsSrc?: never;
  jsSource?: string;
};

export type PyScriptProviderPropertiesWithoutJSourceFullname = {
  jsSrc?: string;
  jsSource?: never;
};

export type PyScriptProviderPropertiesWithCSSPropertiesFullname = {
  cssProps?: never;
  cssProperties?: Omit<
    DetailedHTMLProps<LinkHTMLAttributes<HTMLLinkElement>, HTMLLinkElement>,
    "href"
  >;
};

export type PyScriptProviderPropertiesWithoutCSSPropertiesFullname = {
  cssProps?: Omit<
    DetailedHTMLProps<LinkHTMLAttributes<HTMLLinkElement>, HTMLLinkElement>,
    "href"
  >;
  cssProperties?: never;
};

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
