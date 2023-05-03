import {
  DetailedHTMLProps,
  LinkHTMLAttributes,
  PropsWithChildren,
  ScriptHTMLAttributes,
} from "react";
import type { HelmetProps, ProviderProps } from "react-helmet-async";
import type { PyScriptWindowObject } from "~types/pyscript-window-object/pyscript-window-object";

export type PyScriptProviderPropertiesBase = {
  setPyScript?: (pyscript: PyScriptWindowObject) => void;
};

export type PyScriptProviderPropertiesWithCSSSourceFullname = {
  cssSource?: string;
  cssSrc?: never;
};

export type PyScriptProviderPropertiesWithoutCSSSourceFullname = {
  cssSource?: never;
  cssSrc?: string;
};

export type PyScriptProviderPropertiesWithJSourceFullname = {
  jsSrc?: never;
  jsSource?: string;
};

export type PyScriptProviderPropertiesWithoutJSourceFullname = {
  jsSrc?: string;
  jsSource?: never;
};

export type PyScriptProviderPropertiesWithoutCSSPropertiesFullname = {
  cssProps?: Omit<
    DetailedHTMLProps<LinkHTMLAttributes<HTMLLinkElement>, HTMLLinkElement>,
    "href"
  >;
  cssProperties?: never;
};

export type PyScriptProviderPropertiesWithCSSPropertiesFullname = {
  cssProps?: never;
  cssProperties?: Omit<
    DetailedHTMLProps<LinkHTMLAttributes<HTMLLinkElement>, HTMLLinkElement>,
    "href"
  >;
};

export type PyScriptProviderPropertiesWithJSPropertiesFullname = {
  jsProps?: never;
  jsProperties?: Omit<
    DetailedHTMLProps<
      ScriptHTMLAttributes<HTMLScriptElement>,
      HTMLScriptElement
    >,
    "src"
  >;
};

export type PyScriptProviderPropertiesWithoutJSPropertiesFullname = {
  jsProps?: Omit<
    DetailedHTMLProps<
      ScriptHTMLAttributes<HTMLScriptElement>,
      HTMLScriptElement
    >,
    "src"
  >;
  jsProperties?: never;
};

export type PyScriptProviderPropertiesWithoutHelmetPropertiesFullname = {
  helmetProps?: HelmetProps;
  helmetProperties?: never;
};

export type PyScriptProviderPropertiesWithHelmetPropertiesFullname = {
  helmetProps?: never;
  helmetProperties?: HelmetProps;
};

export type PyScriptProviderPropertiesWithHelmetProviderPropertiesFullname = {
  helmetProviderProps?: never;
  helmetProviderProperties?: ProviderProps;
};

export type PyScriptProviderPropertiesWithoutHelmetProviderPropertiesFullname =
  {
    helmetProviderProps?: ProviderProps;
    helmetProviderProperties?: never;
  };

export type PyScriptProviderProperties = PropsWithChildren<
  PyScriptProviderPropertiesBase &
    (
      | PyScriptProviderPropertiesWithCSSSourceFullname
      | PyScriptProviderPropertiesWithoutCSSSourceFullname
    ) &
    (
      | PyScriptProviderPropertiesWithJSourceFullname
      | PyScriptProviderPropertiesWithoutJSourceFullname
    ) &
    (
      | PyScriptProviderPropertiesWithCSSPropertiesFullname
      | PyScriptProviderPropertiesWithoutCSSPropertiesFullname
    ) &
    (
      | PyScriptProviderPropertiesWithJSPropertiesFullname
      | PyScriptProviderPropertiesWithoutJSPropertiesFullname
    ) &
    (
      | PyScriptProviderPropertiesWithHelmetPropertiesFullname
      | PyScriptProviderPropertiesWithoutHelmetPropertiesFullname
    ) &
    (
      | PyScriptProviderPropertiesWithHelmetProviderPropertiesFullname
      | PyScriptProviderPropertiesWithoutHelmetProviderPropertiesFullname
    )
>;
