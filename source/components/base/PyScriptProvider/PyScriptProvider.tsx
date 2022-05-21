import propTypes from "prop-types";
import { FC, memo, PropsWithChildren } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

export type PyScriptProviderProperties = PropsWithChildren<{
  cssSource?: string;
  jsSource?: string;
}>;

const PyScriptProvider: FC<PyScriptProviderProperties> = ({
  cssSource = "https://pyscript.net/alpha/pyscript.css",
  jsSource = "https://pyscript.net/alpha/pyscript.js",
  children,
}: PyScriptProviderProperties): JSX.Element => {
  return (
    <HelmetProvider>
      <Helmet>
        <link rel="stylesheet" href={cssSource} />
        <script defer src={jsSource}></script>
      </Helmet>
      {children}
    </HelmetProvider>
  );
};

PyScriptProvider.propTypes = {
  cssSource: propTypes.string,
  jsSource: propTypes.string,
  children: propTypes.oneOfType([
    propTypes.arrayOf(propTypes.node),
    propTypes.node,
  ]).isRequired,
};

export default memo(PyScriptProvider);
