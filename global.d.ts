import {
  DOMAttributes,
  PropsWithChildren,
  HTMLAttributes,
  DetailedHTMLProps,
} from "react";

type CustomEvents<K extends string> = {
  [key in K]: (event: CustomEvent) => void;
};

type CustomElement<T> = Partial<PropsWithChildren<T> & DOMAttributes<T>>;

declare global {
  namespace JSX {
    export interface IntrinsicElements {
      ["py-script"]: CustomElement<
        DetailedHTMLProps<HTMLAttributes<HTMElement>, HTMLElement> & {
          children: string;
          output: string;
        }
      >;
      ["py-env"]: CustomElement<
        DetailedHTMLProps<HTMLAttributes<HTMElement>, HTMLElement> & {
          children: string;
        }
      >;
      ["py-repl"]: CustomElement<
        DetailedHTMLProps<HTMLAttributes<HTMElement>, HTMLElement> & {
          children: string;
          "auto-generate"?: boolean;
        }
      >;
      ["py-config"]: CustomElement<
        DetailedHTMLProps<HTMLAttributes<HTMElement>, HTMLElement> & {
          children: string;
        }
      >;
    }
  }
}
