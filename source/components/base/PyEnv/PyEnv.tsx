import { FC, useMemo } from "react";

export type PyEnvProperties = {
  children: string | string[];
};

const PyEnv: FC<PyEnvProperties> = ({
  children,
}: PyEnvProperties): JSX.Element => {
  const fixedChildren = useMemo(() => {
    return Array.isArray(children)
      ? children
          .map((element) => {
            return `- ${element}`;
          })
          .join("\n")
      : children;
  }, [children]);
  return <py-env>{fixedChildren}</py-env>;
};

export default PyEnv;
