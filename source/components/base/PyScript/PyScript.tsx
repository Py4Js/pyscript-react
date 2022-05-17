import {
  createElement,
  DetailedHTMLProps,
  FC,
  HTMLAttributes,
  ReactHTML,
} from "react";
import ReactElementProps from "~types/ReactElementProps/ReactElementProps";
import PyEnv, { PyEnvProperties } from "~components/base/PyEnv/PyEnv";

export type PyScriptProperties = ReactElementProps<
  DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>
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
