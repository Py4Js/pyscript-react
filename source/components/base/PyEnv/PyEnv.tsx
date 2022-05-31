import propTypes from "prop-types";
import {
  DetailedHTMLProps,
  FC,
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

export type PyEnvProperties = Omit<
  ReactElementProps<
    DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>
  >,
  "children"
> & {
  children: string | string[] | ChildrenAsObject;
};

const PyEnv: FC<PyEnvProperties> = ({
  children,
  ...rest
}: PyEnvProperties): JSX.Element => {
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
} as WeakValidationMap<PyEnvProperties>;

export default PyEnv;
