type PyInputBoxProperties = {
  children: string;
};

const PyInputBox = ({ children }: PyInputBoxProperties) => {
  return <py-inputbox>{children}</py-inputbox>;
};

export default PyInputBox;
