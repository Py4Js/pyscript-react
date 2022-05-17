import {
  createElement,
  DetailedHTMLProps,
  FC,
  HTMLAttributes,
  ReactHTML,
} from "react";
import ReactElementProps from "~types/ReactElementProps/ReactElementProps";
import PyEnv, { PyEnvProperties } from "~components/base/PyEnv/PyEnv";

type PyScriptPropertiesBase = Omit<
  ReactElementProps<
    DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>
  >,
  "children"
> & {
  children: string;
};

type PyScriptPropertiesWitOutput = {
  output: string;
  generateOutputTag?: boolean | keyof ReactHTML;
};

type PyScriptPropertiesWitoutOutput = {
  output?: never;
  generateOutputTag?: never;
};

type PyScriptPropertiesWithPyEnv = {
  pyEnvContent: PyEnvProperties["children"];
  pyEnvProps?: Omit<PyEnvProperties, "children">;
};

type PyScriptPropertiesWithWithoutPyEnv = {
  pyEnvContent?: never;
  pyEnvProps?: never;
};

export type PyScriptProperties =
  | PyScriptPropertiesBase &
      (PyScriptPropertiesWithPyEnv | PyScriptPropertiesWithWithoutPyEnv) &
      (PyScriptPropertiesWitOutput | PyScriptPropertiesWitoutOutput);

const PyScript: FC<PyScriptProperties> = ({
  children,
  output,
  generateOutputTag,
  pyEnvContent,
  pyEnvProps,
  ...rest
}: PyScriptProperties): JSX.Element => {
  return (
    <>
      {pyEnvContent && <PyEnv {...pyEnvProps}>{pyEnvContent}</PyEnv>}
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
