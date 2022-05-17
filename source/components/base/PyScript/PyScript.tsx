import {
  createElement,
  DetailedHTMLProps,
  DOMAttributes,
  FC,
  HTMLAttributes,
  ReactHTML,
} from "react";
import PyEnv, { PyEnvProperties } from "../PyEnv/PyEnv";

export type PyScriptProperties = DetailedHTMLProps<
  HTMLAttributes<HTMLElement>,
  HTMLElement
> &
  DOMAttributes<DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>> & {
    children: string;
    output?: string;
    generateOutputTag?: boolean | keyof ReactHTML;
    pyEnvContent?: PyEnvProperties["children"];
  };

const PyScript: FC<PyScriptProperties> = ({
  children,
  output,
  generateOutputTag,
  pyEnvContent,
  ...rest
}: PyScriptProperties): JSX.Element => {
  return (
    <>
      {pyEnvContent && <PyEnv>{pyEnvContent}</PyEnv>}
      {generateOutputTag &&
        createElement(
          typeof generateOutputTag === "string" ? generateOutputTag : "div",
          {
            id: output,
          },
        )}
      <py-script {...rest} output={output}>
        {children}
      </py-script>
    </>
  );
};

export default PyScript;
