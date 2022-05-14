import { FC } from "react";
import { Helmet } from "react-helmet-async";

const PyScript: FC = () => {
  return (
    <Helmet>
      <link rel="stylesheet" href="https://pyscript.net/alpha/pyscript.css" />
      <script defer src="https://pyscript.net/alpha/pyscript.js"></script>
    </Helmet>
  );
};

export default PyScript;
