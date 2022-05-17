import {
  DetailedHTMLProps,
  DOMAttributes,
  FC,
  HTMLAttributes,
  useMemo,
} from "react";

export type PyEnvProperties = DetailedHTMLProps<
  HTMLAttributes<HTMLElement>,
  HTMLElement
> &
  DOMAttributes<DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>> & {
    children: string | string[];
  };

const PyEnv: FC<PyEnvProperties> = ({
  children,
  ...rest
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
  return <py-env {...rest}>{fixedChildren}</py-env>;
};

export default PyEnv;
