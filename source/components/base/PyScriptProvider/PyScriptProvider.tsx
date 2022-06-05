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
  jsSrc?: string;
  cssProps?: Omit<
    DetailedHTMLProps<LinkHTMLAttributes<HTMLLinkElement>, HTMLLinkElement>,
    "href"
  >;
  jsProps?: Omit<
    DetailedHTMLProps<
      ScriptHTMLAttributes<HTMLScriptElement>,
      HTMLScriptElement
    >,
    "src"
  >;
  helmetProps?: HelmetProps;
  helmetProviderProps?: ProviderProps;
}>;

const PyScriptProvider: FC<PyScriptProviderProperties> = ({
  cssSrc = "https://pyscript.net/alpha/pyscript.css",
  jsSrc = "https://pyscript.net/alpha/pyscript.js",
  children,
  cssProps,
  jsProps,
  helmetProps,
}: PyScriptProviderProperties): JSX.Element => {
  return (
    <HelmetProvider {...helmetProps}>
      <Helmet {...helmetProps}>
        <link rel="stylesheet" {...cssProps} href={cssSrc} />
        <script defer {...jsProps} src={jsSrc} />
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
