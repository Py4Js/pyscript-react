import { FC, memo, PropsWithChildren } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

export type PyScriptProviderProperties = {
  cssSource?: string;
  jsSource?: string;
};

const PyScriptProvider: FC<PropsWithChildren<PyScriptProviderProperties>> = ({
  cssSource = "https://pyscript.net/alpha/pyscript.css",
  jsSource = "https://pyscript.net/alpha/pyscript.js",
  children,
}) => {
  return (
    <HelmetProvider>
      <Helmet>
        <link rel="stylesheet" href={cssSource} />
        <script defer src={jsSource}></script>
      </Helmet>
      <div></div>
      {children}
    </HelmetProvider>
  );
};

export default memo(PyScriptProvider);
