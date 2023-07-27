import propTypes from "prop-types";
import {
  createElement,
  forwardRef,
  useMemo,
  type DetailedHTMLProps,
  type ForwardedRef,
  type HTMLAttributes,
  type WeakValidationMap,
} from "react";
import type {
  PyConfigPropertiesWithJsonType,
  PyConfigPropertiesWithTomlType,
  PyConfigPropertiesWithoutChildren,
} from "~components/py-config/py-config.types";
import type ReactElementProps from "~root/source/library/types/react-element-properties/react-element-properties";
import PyConfig from "../py-config/py-config";
import PyEnv from "../py-env/py-env";
import type {
  PyScriptProperties,
  PyScriptPropertiesWithoutGeneric,
  PyScriptTag,
} from "./py-script.types";

/**
 * Allow to embed python scripts.
 * @type {PyScriptTag}
 * @returns {JSX.Element}
 * @param {string} properties.children - Python script content.
 * @param {string} properties.output - Id of element where output should be displayed. Works only with legacy version of PyScript.
 * @param {string} properties.source - Path to python file.
 * @param {string} properties.src - Alias for source.
 * @param {string} properties.generateOutputTag - If the value is true, it generates a `div` element. When the provided value is a string, it generates an element based on this value. If we want to limit only to real tags in HTML, we can check if the value meets the assumptions of the `keyof ReactHTML` type.
 * @param {string | string[] | Set<string> | ChildrenAsObject} properties.pyEnvContent - py-env children (deprecated - works only with legacy pyscript).
 * @param {Omit<PyEnvPropertiesBase, "children">} properties.pyEnvProps - py-env properties (deprecated - works only with legacy pyscript).
 * @param {string | (Record<string, any> & PyConfigSharedJsonProperties)} properties.pyConfigContent - py-config children
 * @param {Omit<ReactElementProps<DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>>,"children"> & (Omit<PyConfigPropertiesWithJsonType, "children"> | Omit<PyConfigPropertiesWithTomlType, "children"> | PyConfigPropertiesWithoutChildren)} properties.pyConfigProps - py-config properties
 * @see {@link https://docs.pyscript.net/latest/reference/elements/py-script.html} Original py-script element documentation.
 * @see {@link https://pyscript-react.github.io/} Pyscript-react element documentation.
 */
const PyScript: PyScriptTag = forwardRef(
  <OptionalProperties extends object>(
    {
      children,
      output,
      generateOutputTag,
      pyEnvContent,
      pyEnvProps,
      pyConfigContent,
      pyConfigProps,
      src,
      source,
      ...rest
    }: PyScriptProperties<OptionalProperties>,
    reference: ForwardedRef<HTMLElement> | undefined,
    // eslint-disable-next-line max-params
  ): JSX.Element => {
    const pyConfigElement: "" | JSX.Element | undefined = useMemo(():
      | ""
      | JSX.Element
      | undefined => {
      const isPyConfigSource: boolean = Boolean(
        (pyConfigProps as Partial<PyConfigPropertiesWithoutChildren>)?.source,
      );
      const isPyConfigContentJsonType: boolean = pyConfigProps?.type === "json";
      const pyConfigElementWithContent: "" | JSX.Element | undefined =
        isPyConfigContentJsonType ? (
          <PyConfig
            {...(pyConfigProps as Omit<
              PyConfigPropertiesWithJsonType,
              "children"
            > &
              Omit<
                ReactElementProps<
                  DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>
                >,
                "children"
              >)}
          >
            {pyConfigContent as PyConfigPropertiesWithJsonType["children"]}
          </PyConfig>
        ) : (
          pyConfigContent && (
            <PyConfig
              {...(pyConfigProps as Omit<
                PyConfigPropertiesWithTomlType,
                "children"
              > &
                Omit<
                  ReactElementProps<
                    DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>
                  >,
                  "children"
                >)}
            >
              {pyConfigContent as PyConfigPropertiesWithTomlType["children"]}
            </PyConfig>
          )
        );
      return isPyConfigSource ? (
        <PyConfig {...(pyConfigProps as PyConfigPropertiesWithoutChildren)} />
      ) : (
        pyConfigElementWithContent
      );
    }, [pyConfigProps, pyConfigContent]);
    return (
      <>
        {pyConfigElement}
        {pyEnvContent && <PyEnv {...pyEnvProps}>{pyEnvContent}</PyEnv>}
        {output &&
          generateOutputTag &&
          createElement(
            typeof generateOutputTag === "string" ? generateOutputTag : "div",
            {
              id: output,
            },
          )}
        <py-script
          ref={reference}
          {...rest}
          src={source ?? src}
          output={output}
        >
          {children ?? ""}
        </py-script>
      </>
    );
  },
) as PyScriptTag;

PyScript.displayName = "PyScript";

PyScript.propTypes = {
  children: propTypes.string,
  output: propTypes.string,
  generateOutputTag: propTypes.oneOfType([propTypes.string, propTypes.bool]),
  pyEnvContent: propTypes.oneOfType([
    propTypes.string,
    propTypes.array,
    propTypes.exact({
      items: propTypes.arrayOf(propTypes.string),
      paths: propTypes.arrayOf(propTypes.string),
    }),
  ]),
  pyEnvProps: propTypes.object,
  pyConfigContent: propTypes.oneOfType([
    propTypes.string.isRequired,
    propTypes.object,
  ]),
  pyConfigProps: propTypes.object,
  src: propTypes.string,
  source: propTypes.string,
} as WeakValidationMap<PyScriptPropertiesWithoutGeneric>;

export default PyScript;
