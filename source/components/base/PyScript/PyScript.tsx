import propTypes from "prop-types";
import {
  createElement,
  DetailedHTMLProps,
  FC,
  HTMLAttributes,
  ReactHTML,
  WeakValidationMap,
} from "react";
import PyEnv, { PyEnvProperties } from "~components/base/PyEnv/PyEnv";
import ReactElementProps from "~types/ReactElementProps/ReactElementProps";

export type PyScriptPropertiesBase = Omit<
  ReactElementProps<
    DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>
  >,
  "children"
> & {
  children: string;
};

export type PyScriptPropertiesWitOutputPart = {
  output: string;
  generateOutputTag?: boolean | keyof ReactHTML;
};

export type PyScriptPropertiesWitoutOutputPart = {
  output?: never;
  generateOutputTag?: never;
};

export type PyScriptPropertiesWithPyEnvPart = {
  pyEnvContent: PyEnvProperties["children"];
  pyEnvProps?: Omit<PyEnvProperties, "children">;
};

export type PyScriptPropertiesWithWithoutPyEnvPart = {
  pyEnvContent?: never;
  pyEnvProps?: never;
};

export type PyScriptProperties =
  | PyScriptPropertiesBase &
      (
        | PyScriptPropertiesWithPyEnvPart
        | PyScriptPropertiesWithWithoutPyEnvPart
      ) &
      (PyScriptPropertiesWitOutputPart | PyScriptPropertiesWitoutOutputPart);

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
      {output &&
        generateOutputTag &&
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

PyScript.propTypes = {
  children: propTypes.string.isRequired,
  output: propTypes.string,
  generateOutputTag: propTypes.oneOfType([propTypes.string, propTypes.bool]),
  pyEnvContent: propTypes.oneOfType([propTypes.string, propTypes.array]),
  pyEnvProps: propTypes.object,
} as WeakValidationMap<PyScriptProperties>;

export default PyScript;
