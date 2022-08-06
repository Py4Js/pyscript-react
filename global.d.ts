import { DetailedHTMLProps, HTMLAttributes } from "react";
import ReactElementProps from "~root/source/types/ReactElementProps/ReactElementProps";

declare global {
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
    }
  }
}
