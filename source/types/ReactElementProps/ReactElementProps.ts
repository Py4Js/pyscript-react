import { DOMAttributes, PropsWithChildren } from "react";

type ReactElementProps<T> = PropsWithChildren<T> & DOMAttributes<T>;

export default ReactElementProps;
