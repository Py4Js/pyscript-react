import propTypes from "prop-types";
import {
  createElement,
  DetailedHTMLProps,
  HTMLAttributes,
  ReactHTML,
  WeakValidationMap,
} from "react";
import PyEnv, { PyEnvPropertiesBase } from "~components/PyEnv/PyEnv";
import ReactElementProps from "~types/ReactElementProps/ReactElementProps";

export type PyScriptPropertiesBase = Omit<
  ReactElementProps<
    DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>
  >,
  "children"
>;

export type PyScriptPropertiesWithChildren = {
  src?: never;
  children: string;
  source?: never;
};

export type PyScriptPropertiesWithSourceFullName = {
  src?: never;
  children?: never;
  source: string;
};

export type PyScriptPropertiesWithSource = {
  src: string;
  children?: never;
  source?: never;
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
  (
    | PyScriptPropertiesWithSource
    | PyScriptPropertiesWithChildren
    | PyScriptPropertiesWithSourceFullName
  );

// eslint-disable-next-line @typescript-eslint/no-unused-vars
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
  src,
  source,
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
      <py-script {...rest} src={source || src} output={output}>
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
  source: propTypes.string,
} as WeakValidationMap<PyScriptPropertiesWithoutGeneric>;

export default PyScript;
