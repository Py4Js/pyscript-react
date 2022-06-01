import { FC, PropsWithChildren } from "react";

declare module "@theme/Layout" {
  export type LayoutProperties = PropsWithChildren<{
    title?: string;
  }>;

  const Layout: FC<LayoutProperties>;

  export default Layout;
}
