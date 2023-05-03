import type { DetailedHTMLProps, HTMLAttributes } from "react";
import type PyScriptWindowObject from "~types/pyscript-window-object/pyscript-window-object";
import type ReactElementProps from "~types/react-element-properties/react-element-properties";

declare global {
  interface Window {
    pyscript: PyScriptWindowObject;
  }
  namespace JSX {
    export interface IntrinsicElements {
      ["py-script"]: Omit<
        ReactElementProps<
          DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>
        >,
        "children"
      > & {
        children: string;
        output?: string;
      };
      ["py-loader"]: Omit<
        ReactElementProps<
          DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>
        >,
        "children"
      >;
      ["py-env"]: Omit<
        ReactElementProps<
          DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>
        >,
        "children"
      > & {
        children: string;
      };
      ["py-repl"]: ReactElementProps<
        DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>
      > & {
        children?: string;
        "auto-generate"?: boolean;
      };
      ["py-config"]: ReactElementProps<
        DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>
      > & {
        children?: string;
      };
      ["py-inputbox"]: ReactElementProps<
        DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>
      > & {
        children: string;
      };
      ["py-box"]: ReactElementProps<
        DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>
      >;
      ["py-register-widget"]: ReactElementProps<
        DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>
      > & {
        src: string;
        name?: string;
        klass?: string;
      };
      ["py-button"]: ReactElementProps<
        DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>
      > & {
        children: string;
        label: string;
      };
      ["py-title"]: ReactElementProps<
        DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>
      > & {
        children: string;
      };
      ["py-terminal"]: ReactElementProps<
        DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>
      > & {
        auto?: boolean;
      };
      ["py-splashscreen"]: ReactElementProps<
        DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>
      > & {
        autoclose?: boolean;
        enabled?: boolean;
      };
    }
  }
}
