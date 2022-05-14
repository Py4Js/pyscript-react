import { FC } from "react";
import { Helmet } from "react-helmet-async";

export type PyScriptProperties = {
  cssSource?: string;
  jsSource?: string;
};

const PyScript: FC<PyScriptProperties> = ({
  cssSource = "https://pyscript.net/alpha/pyscript.css",
  jsSource = "https://pyscript.net/alpha/pyscript.js",
}) => {
  return (
    <Helmet>
      <link rel="stylesheet" href={cssSource} />
      <script defer src={jsSource}></script>
    </Helmet>
  );
};

export default PyScript;
