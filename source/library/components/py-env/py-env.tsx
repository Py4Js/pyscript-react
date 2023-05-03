import propTypes from "prop-types";
import { useMemo, type WeakValidationMap } from "react";
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
const PyEnv: PyEnvTag = <T extends object>({
  children,
  ...rest
}: PyEnvProperties<T>): JSX.Element => {
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
  return <py-env {...rest}>{fixedChildren}</py-env>;
};

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
