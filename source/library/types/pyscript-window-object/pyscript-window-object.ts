export type PyScriptWindowObject =
  | {
      interpreter: {
        src: string;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        interface: Record<string, any>;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        globals: any;
        name?: string;
        lang?: string;
      };
      version: string;
    }
  | undefined;

export default PyScriptWindowObject;
