import propTypes from "prop-types";
import type { FC } from "react";
import type { PyScriptProviderZustandWrapperProperties } from "~components/py-script-provider-zustand-wrapper/py-script-provider-zustand-wrapper.types";
import { PyScriptProviderProperties } from "~components/py-script-provider/py-script-provider.types";
import usePyScriptStore from "../../stores/py-script-store/py-script-store";
import PyScriptProvider from "../py-script-provider/py-script-provider";

const PyScriptProviderZustandWrapper: FC<
  PyScriptProviderZustandWrapperProperties
> = ({
  children,
  ...rest
}: PyScriptProviderZustandWrapperProperties): JSX.Element => {
  const { setPyScript } = usePyScriptStore();
  return (
    <PyScriptProvider
      {...(rest as PyScriptProviderProperties)}
      setPyScript={setPyScript}
    >
      {children}
    </PyScriptProvider>
  );
};

PyScriptProviderZustandWrapper.propTypes = {
  cssSrc: propTypes.string,
  jsSrc: propTypes.string,
  cssSource: propTypes.string,
  jsSource: propTypes.string,
  children: propTypes.oneOfType([
    propTypes.arrayOf(propTypes.node),
    propTypes.node,
  ]).isRequired,
  helmetProps: propTypes.object,
  helmetProperties: propTypes.object,
  helmetProviderProps: propTypes.object,
  helmetProviderProperties: propTypes.object,
};

export default PyScriptProviderZustandWrapper;
