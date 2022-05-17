import {
  createElement,
  DetailedHTMLProps,
  FC,
  HTMLAttributes,
  ReactHTML,
} from "react";
import PyEnv, { PyEnvProperties } from "../PyEnv/PyEnv";

export type PyScriptProperties = DetailedHTMLProps<
  HTMLAttributes<HTMLElement>,
  HTMLElement
> & {
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
      <py-script output={output}>{children}</py-script>
    </>
  );
};

export default PyScript;
