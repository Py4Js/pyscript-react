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

export type PyScriptProviderPropertiesWithoutCSSPropertiesFullname = {
  cssProps?: Omit<
    DetailedHTMLProps<LinkHTMLAttributes<HTMLLinkElement>, HTMLLinkElement>,
    "href"
  >;
  cssProperties?: never;
};

export type PyScriptProviderPropertiesWithCSSPropertiesFullname = {
  cssProps?: never;
  cssProperties?: Omit<
    DetailedHTMLProps<LinkHTMLAttributes<HTMLLinkElement>, HTMLLinkElement>,
    "href"
  >;
};

export type PyScriptProviderPropertiesWithJSPropertiesFullname = {
  jsProps?: never;
  jsProperties?: Omit<
    DetailedHTMLProps<
      ScriptHTMLAttributes<HTMLScriptElement>,
      HTMLScriptElement
    >,
    "src"
  >;
};

export type PyScriptProviderPropertiesWithoutJSPropertiesFullname = {
  jsProps?: Omit<
    DetailedHTMLProps<
      ScriptHTMLAttributes<HTMLScriptElement>,
      HTMLScriptElement
    >,
    "src"
  >;
  jsProperties?: never;
};

export type PyScriptProviderPropertiesWithoutHelmetPropertiesFullname = {
  helmetProps?: HelmetProps;
  helmetProperties?: never;
};

export type PyScriptProviderPropertiesWithHelmetPropertiesFullname = {
  helmetProps?: never;
  helmetProperties?: HelmetProps;
};

export type PyScriptProviderPropertiesWithHelmetProviderPropertiesFullname = {
  helmetProviderProps?: never;
  helmetProviderProperties?: ProviderProps;
};

export type PyScriptProviderPropertiesWithoutHelmetProviderPropertiesFullname =
  {
    helmetProviderProps?: ProviderProps;
    helmetProviderProperties?: never;
  };

export type PyScriptProviderProperties = PropsWithChildren<
  (
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
    ) &
    (
      | PyScriptProviderPropertiesWithJSPropertiesFullname
      | PyScriptProviderPropertiesWithoutJSPropertiesFullname
    ) &
    (
      | PyScriptProviderPropertiesWithHelmetPropertiesFullname
      | PyScriptProviderPropertiesWithoutHelmetPropertiesFullname
    ) &
    (
      | PyScriptProviderPropertiesWithHelmetProviderPropertiesFullname
      | PyScriptProviderPropertiesWithoutHelmetProviderPropertiesFullname
    )
>;

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
