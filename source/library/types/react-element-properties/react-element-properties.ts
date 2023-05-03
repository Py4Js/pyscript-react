import type { DOMAttributes, PropsWithChildren } from "react";

type ReactElementProperties<T> = PropsWithChildren<T> & DOMAttributes<T>;

export type ReactElementProps<T> = ReactElementProperties<T>;

export default ReactElementProperties;
