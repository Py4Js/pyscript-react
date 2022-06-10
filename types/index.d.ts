declare module "pyscript-react" {
  export type PyScriptPropertiesBase = Omit<
    ReactElementProps<
      DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>
    >,
    "children"
  >;

  export type PyScriptPropsBase = PyScriptPropertiesBase;

  export type PyScriptPropertiesWithChildren = {
    src?: never;
    children: string;
    source?: never;
  };

  export type PyScriptPropsWithChildren = PyScriptPropertiesWithChildren;

  export type PyScriptPropertiesWithSourceFullName = {
    src?: never;
    children?: never;
    source: string;
  };

  export type PyScriptPropsWithSourceFullName =
    PyScriptPropertiesWithSourceFullName;

  export type PyScriptPropertiesWithSource = {
    src: string;
    children?: never;
    source?: never;
  };

  export type PyScriptPropsWithSource = PyScriptPropertiesWithSource;

  export type PyScriptPropertiesWitOutputPart = {
    output: string;
    generateOutputTag?: boolean | keyof ReactHTML;
  };

  export type PyScriptPropsWitOutputPart = PyScriptPropertiesWitOutputPart;

  export type PyScriptPropertiesWitoutOutputPart = {
    output?: never;
    generateOutputTag?: never;
  };

  export type PyScriptPropsWitoutOutputPart =
    PyScriptPropertiesWitoutOutputPart;

  export type PyScriptPropertiesWithPyEnvPart = {
    pyEnvContent: PyEnvPropertiesBase["children"];
    pyEnvProps?: Omit<PyEnvPropertiesBase, "children">;
  };

  export type PyScriptPropsWithPyEnvPart = PyScriptPropertiesWithPyEnvPart;

  export type PyScriptPropertiesWithWithoutPyEnvPart = {
    pyEnvContent?: never;
    pyEnvProps?: never;
  };

  export type PyScriptPropsWithWithoutPyEnvPart =
    PyScriptPropertiesWithWithoutPyEnvPart;

  export type PyScriptPropertiesWithoutGeneric = PyScriptPropertiesBase &
    (PyScriptPropertiesWithPyEnvPart | PyScriptPropertiesWithWithoutPyEnvPart) &
    (PyScriptPropertiesWitOutputPart | PyScriptPropertiesWitoutOutputPart) &
    (
      | PyScriptPropertiesWithSource
      | PyScriptPropertiesWithChildren
      | PyScriptPropertiesWithSourceFullName
    );

  export type PyScriptProperties<T> = T extends infer T
    ? T & PyScriptPropertiesWithoutGeneric
    : PyScriptPropertiesWithoutGeneric;

  export type PyScriptTag = {
    <T extends object>(properties: PyScriptProperties<T>): JSX.Element;
    propTypes: WeakValidationMap<PyScriptPropertiesWithoutGeneric>;
  };

  export const PyScript: PyScriptTag;
  export const PyTitle: PyTitleTag;
  export const PyScriptProvider;
  export const PyRepl;
  export const PyRegisterWidget;
  export const PyInputBox;
  export const PyEnv;
  export const PyConfig;
  export const PyButton;
  export const PyBox;

  export default PyScript;
}
