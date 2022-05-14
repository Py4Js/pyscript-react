import { FC } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

export type PyScriptProperties = {
  cssSource?: string;
  jsSource?: string;
};

const PyScript: FC<PyScriptProperties> = ({
  cssSource = "https://pyscript.net/alpha/pyscript.css",
  jsSource = "https://pyscript.net/alpha/pyscript.js",
}) => {
  return (
    <HelmetProvider>
      <Helmet>
        <link rel="stylesheet" href={cssSource} />
        <script defer src={jsSource}></script>
      </Helmet>
    </HelmetProvider>
  );
};

export default PyScript;
