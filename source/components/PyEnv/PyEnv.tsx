import propTypes from "prop-types";
import {
  DetailedHTMLProps,
  HTMLAttributes,
  useMemo,
  WeakValidationMap,
} from "react";
import ReactElementProps from "~types/ReactElementProps/ReactElementProps";

type ChildrenAsObject =
  | ChildrenAsObjectWithPaths
  | ChildrenAsObjectWithoutPaths;

type ChildrenAsObjectWithPaths = {
  paths: string[];
  items?: string[];
};

type ChildrenAsObjectWithoutPaths = {
  paths?: string[];
  items: string[];
};

export type PyEnvPropertiesBase = Omit<
  ReactElementProps<
    DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>
  >,
  "children"
> & {
  children: string | string[] | ChildrenAsObject;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export type PyEnvProperties<T> = T extends infer T
  ? T & PyEnvPropertiesBase
  : PyEnvPropertiesBase;

export type PyEnvTag = {
  <T extends object>(properties: PyEnvProperties<T>): JSX.Element;
  propTypes: WeakValidationMap<PyEnvPropertiesBase>;
};

const PyEnv: PyEnvTag = <T extends object>({
  children,
  ...rest
}: PyEnvProperties<T>): JSX.Element => {
  const fixedChildren: string = useMemo((): string => {
    const { paths, items }: ChildrenAsObject = Object(children);
    if (paths || items) {
      const fixedItems: string =
        items
          ?.map((element: string): string => {
            return `- ${element}`;
          })
          .join("\n") || "";
      const fixedPaths: string =
        paths
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
