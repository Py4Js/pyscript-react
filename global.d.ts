import {
  DOMAttributes,
  PropsWithChildren,
  HTMLAttributes,
  DetailedHTMLProps,
} from "react";
import ReactElementProps from "~root/source/types/ReactElementProps/ReactElementProps";

declare global {
  namespace JSX {
    export interface IntrinsicElements {
      ["py-script"]: ReactElementProps<
        DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>
      > & {
        children: string;
        output?: string;
      };
      ["py-env"]: ReactElementProps<
        DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>
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
        children: string;
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
        DetailedHTMLProps<HTMLAttributes<HTMElement>, HTMLElement>
      > & {
        children: string;
        label: string;
      };
      ["py-title"]: ReactElementProps<
        DetailedHTMLProps<HTMLAttributes<HTMElement>, HTMLElement>
      > & {
        children: string;
      };
    }
  }
}
