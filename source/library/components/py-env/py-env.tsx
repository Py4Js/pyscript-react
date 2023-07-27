import propTypes from "prop-types";
import {
  forwardRef,
  useMemo,
  type ForwardedRef,
  type WeakValidationMap,
} from "react";
import type {
  PyEnvChildrenAsObject,
  PyEnvProperties,
  PyEnvPropertiesBase,
  PyEnvTag,
} from "./py-env.types";

/**
 * @param root0
 * @param root0.children
 * @deprecated
 */
const PyEnv: PyEnvTag = forwardRef(
  <OptionalProperties extends object>(
    { children, ...rest }: PyEnvProperties<OptionalProperties>,
    reference: ForwardedRef<HTMLElement> | undefined,
    // eslint-disable-next-line max-params
  ): JSX.Element => {
    const fixedChildren: string = useMemo((): string => {
      const { paths, items }: PyEnvChildrenAsObject = Object(children);
      if (paths || items) {
        const fixedItems: string =
          [...(items || [])]
            ?.map((element: string): string => {
              return `- ${element}`;
            })
            .join("\n") || "";
        const fixedPaths: string =
          [...(paths || [])]
            ?.map((element: string): string => {
              return `\t- ${element}`;
            })
            .join("\n") || "";
        const fixedPathsWithCondition: string = fixedPaths
          ? `\n- paths:\n${fixedPaths}`
          : "";
        return `${fixedItems}${fixedPathsWithCondition}`;
      } else {
        return Array.isArray(children)
          ? children
              .map((element: string): string => {
                return `- ${element}`;
              })
              .join("\n")
          : (children as string);
      }
    }, [children]);
    return (
      <py-env ref={reference} {...rest}>
        {fixedChildren}
      </py-env>
    );
  },
) as PyEnvTag;

PyEnv.displayName = "PyEnv";

PyEnv.propTypes = {
  children: propTypes.oneOfType([
    propTypes.string,
    propTypes.array,
    propTypes.exact({
      items: propTypes.arrayOf(propTypes.string),
      paths: propTypes.arrayOf(propTypes.string),
    }),
  ]).isRequired,
} as WeakValidationMap<PyEnvPropertiesBase>;

export default PyEnv;
