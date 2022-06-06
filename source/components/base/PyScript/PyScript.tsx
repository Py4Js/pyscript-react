import propTypes from "prop-types";
import {
  createElement,
  DetailedHTMLProps,
  HTMLAttributes,
  ReactHTML,
  WeakValidationMap,
} from "react";
import PyEnv, { PyEnvPropertiesBase } from "~components/base/PyEnv/PyEnv";
import ReactElementProps from "~types/ReactElementProps/ReactElementProps";

export type PyScriptPropertiesBase = Omit<
  ReactElementProps<
    DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>
  >,
  "children"
>;

export type PyScriptPropertiesWithSource = {
  src: string;
  children?: never;
};

export type PyScriptPropertiesWithoutSource = {
  src?: never;
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
  pyEnvContent: PyEnvPropertiesBase["children"];
  pyEnvProps?: Omit<PyEnvPropertiesBase, "children">;
};

export type PyScriptPropertiesWithWithoutPyEnvPart = {
  pyEnvContent?: never;
  pyEnvProps?: never;
};

export type PyScriptPropertiesWithoutGeneric = PyScriptPropertiesBase &
  (PyScriptPropertiesWithPyEnvPart | PyScriptPropertiesWithWithoutPyEnvPart) &
  (PyScriptPropertiesWitOutputPart | PyScriptPropertiesWitoutOutputPart) &
  (PyScriptPropertiesWithSource | PyScriptPropertiesWithoutSource);

export type PyScriptProperties<T> = T extends infer T
  ? T & PyScriptPropertiesWithoutGeneric
  : PyScriptPropertiesWithoutGeneric;

export type PyScriptTag = {
  <T extends object>(properties: PyScriptProperties<T>): JSX.Element;
  propTypes: WeakValidationMap<PyScriptPropertiesWithoutGeneric>;
};

const PyScript: PyScriptTag = <T extends object>({
  children,
  output,
  generateOutputTag,
  pyEnvContent,
  pyEnvProps,
  ...rest
}: PyScriptProperties<T>): JSX.Element => {
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
        {children || ""}
      </py-script>
    </>
  );
};

PyScript.propTypes = {
  children: propTypes.string,
  output: propTypes.string,
  generateOutputTag: propTypes.oneOfType([propTypes.string, propTypes.bool]),
  pyEnvContent: propTypes.oneOfType([propTypes.string, propTypes.array]),
  pyEnvProps: propTypes.object,
  src: propTypes.string,
} as WeakValidationMap<PyScriptPropertiesWithoutGeneric>;

export default PyScript;
