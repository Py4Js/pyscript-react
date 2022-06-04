import propTypes from "prop-types";
import {
  createElement,
  DetailedHTMLProps,
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
  pyEnvContent: PyEnvProperties["children"];
  pyEnvProps?: Omit<PyEnvProperties, "children">;
};

export type PyScriptPropertiesWithWithoutPyEnvPart = {
  pyEnvContent?: never;
  pyEnvProps?: never;
};

export type PyScriptPropertiesWithoutGeneric = PyScriptPropertiesBase &
  (PyScriptPropertiesWithPyEnvPart | PyScriptPropertiesWithWithoutPyEnvPart) &
  (PyScriptPropertiesWitOutputPart | PyScriptPropertiesWitoutOutputPart) &
  (PyScriptPropertiesWithSource | PyScriptPropertiesWithoutSource);

export type PyScriptProperties<T extends Record<string, unknown>> =
  T extends infer T
    ? T & PyScriptPropertiesWithoutGeneric
    : PyScriptPropertiesWithoutGeneric;

export type PyScriptTag = {
  <T extends Record<string, unknown>>(
    properties: PyScriptProperties<T>,
  ): JSX.Element;
  propTypes?: WeakValidationMap<PyScriptProperties<{}>>;
};

const PyScript: PyScriptTag = <T extends Record<string, unknown>>({
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
} as WeakValidationMap<PyScriptProperties<{}>>;

export default PyScript;
