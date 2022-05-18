import { DetailedHTMLProps, FC, HTMLAttributes } from "react";
import ReactElementProps from "~types/ReactElementProps/ReactElementProps";

export type PyButtonProperties = Omit<
  ReactElementProps<
    DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>
  >,
  "children"
> & {
  children: string;
  label: string;
};

const PyButton: FC<PyButtonProperties> = ({
  children,
  label,
  ...rest
}: PyButtonProperties): JSX.Element => {
  return (
    <py-button {...rest} label={label}>
      {children}
    </py-button>
  );
};

export default PyButton;
