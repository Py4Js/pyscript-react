import propTypes from "prop-types";
import {
  forwardRef,
  useEffect,
  useMemo,
  type ForwardedRef,
  type WeakValidationMap,
} from "react";
import type {
  PyConfigFetch,
  PyConfigFetchItem,
  PyConfigInterpreters,
  PyConfigProperties,
  PyConfigPropertiesBase,
  PyConfigSplashscreen,
  PyConfigTag,
} from "./py-config.types";

const checkForAnyKey = (
  transformedObject: Record<string, unknown>,
): boolean => {
  return Boolean(
    Object.entries(transformedObject).filter(
      ([, value]: [string, unknown]): boolean => {
        return value !== undefined;
      },
    ).length,
  );
};

/**
 * Py config.
 * @type {PyConfigTag}
 * @returns {JSX.Element}
 * @param {string | (Record<string, any> & PyConfigSharedJsonProperties)} properties.children - py-config content
 * @param {string} properties.source - Path to Python config-file.
 * @param {"toml" | "json"} properties.type - Type of Python config (TOML or json, default TOML).
 * @param {PyConfigSplashscreen} properties.splashscreen - This is one of the core plugins in PyScript, which is active by default. The splashscreen is the first thing you see when you open a page with Pyscript while it is loading itself and all the necessary resources.
 * @param {PyConfigInterpreters} properties.interpreters - ?
 * @param {PyConfigFetch} properties.fetch - ?
 * @param {string[] | Set<string>} properties.packages - List of needed Python packages.
 * @param {string[] | Set<string>} properties.plugins - Pyscript plugins
 * @see {@link https://docs.pyscript.net/latest/reference/elements/py-config.html} Original py-config element documentation.
 * @see {@link https://pyscript-react.github.io/} Pyscript-react element documentation.
 */
const PyConfig: PyConfigTag = forwardRef(
  <T extends object>(
    {
      children,
      source,
      type,
      splashscreen,
      interpreters,
      fetch,
      packages,
      plugins,
      ...rest
    }: PyConfigProperties<T>,
    reference: ForwardedRef<HTMLElement> | undefined,
    // eslint-disable-next-line max-params, sonarjs/cognitive-complexity
  ): JSX.Element => {
    const config: string = useMemo((): string => {
      if (type === "json") {
        const transformedPlugins: string[] = [
          ...(plugins ?? []),
          ...(children?.plugins ?? []),
        ];
        const transformedPackages: string[] = [
          ...(packages ?? []),
          ...(children?.packages ?? []),
        ];
        const transformedFetch: PyConfigFetch = [
          ...(fetch ?? []),
          ...(children?.fetch ?? []),
        ].map(
          ({ files, ...restItem }: PyConfigFetchItem): PyConfigFetchItem => {
            const transformedFiles: string[] = [...(files ?? [])];
            return {
              files: transformedFiles.length ? transformedFiles : undefined,
              ...restItem,
            };
          },
        );
        const transformedInterpreters: Omit<PyConfigInterpreters, "source"> & {
          src?: string;
        } = {
          src: interpreters?.source,
          name: interpreters?.name,
          language: interpreters?.language,
          ...children?.interpreters,
        };
        const transformedSplashscreen: PyConfigSplashscreen = {
          autoclose: splashscreen?.autoclose,
          ...children?.splashscreen,
        };
        const config: string = JSON.stringify({
          splashscreen: checkForAnyKey(transformedSplashscreen)
            ? transformedSplashscreen
            : undefined,
          interpreters: checkForAnyKey(transformedInterpreters)
            ? transformedInterpreters
            : undefined,
          fetch: transformedFetch.length ? transformedFetch : undefined,
          packages: transformedPackages.length
            ? transformedPackages
            : undefined,
          plugins: transformedPlugins.length ? transformedPlugins : undefined,
          ...children,
        });
        return config;
      }
      return `${children ?? ""}`;
    }, [children, splashscreen, interpreters, fetch, packages, plugins]);
    useEffect((): void => {
      source &&
        children &&
        // eslint-disable-next-line no-console
        console.warn(
          "Children is passed with source. It may create undefined behavior. Remove one of these properties.",
        );
    }, [source, children]);
    return (
      <py-config ref={reference} {...rest} type={type} src={source}>
        {!source ? config : undefined}
      </py-config>
    );
  },
) as PyConfigTag;

PyConfig.displayName = "PyConfig";

PyConfig.propTypes = {
  children: propTypes.oneOfType([
    propTypes.string.isRequired,
    propTypes.object,
  ]),
  type: propTypes.oneOf(["toml", "json"]),
  source: propTypes.string,
  splashscreen: propTypes.shape({
    autoclose: propTypes.bool,
  }),
  interpreters: propTypes.shape({
    source: propTypes.string,
    name: propTypes.string,
    language: propTypes.string,
  }),
  fetch: propTypes.arrayOf(
    propTypes.shape({
      files: propTypes.oneOfType([
        propTypes.arrayOf(propTypes.string),
        propTypes.instanceOf(Set),
      ]),
    }),
  ),
  packages: propTypes.oneOfType([
    propTypes.arrayOf(propTypes.string),
    propTypes.instanceOf(Set),
  ]),
  plugins: propTypes.arrayOf(propTypes.string),
} as WeakValidationMap<PyConfigPropertiesBase>;

export default PyConfig;
