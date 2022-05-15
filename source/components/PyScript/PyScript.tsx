import { createElement, FC, ReactHTML, useMemo } from "react";

export type PyScriptProperties = {
  children: string;
  output?: string;
  generateOutputTag?: boolean | keyof ReactHTML;
  pyEnvContent?: string | string[];
};

const PyScript: FC<PyScriptProperties> = ({
  children,
  output,
  generateOutputTag,
  pyEnvContent,
}: PyScriptProperties): JSX.Element => {
  const pyEnvFixedContent = useMemo(() => {
    return Array.isArray(pyEnvContent)
      ? pyEnvContent
          .map((element) => {
            return `- ${element}`;
          })
          .join("\n")
      : pyEnvContent;
  }, [pyEnvContent]);
  return (
    <>
      {pyEnvFixedContent && <py-env>{pyEnvFixedContent}</py-env>}
      {generateOutputTag &&
        createElement(
          typeof generateOutputTag === "string" ? generateOutputTag : "div",
          {
            id: output,
          },
        )}
      <py-script output={output}>{children}</py-script>
    </>
  );
};

export default PyScript;
