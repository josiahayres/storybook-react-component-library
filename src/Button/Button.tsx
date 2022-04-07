import { Button as MuiButton, ButtonProps } from "@mui/material";

const Button = ({ children, ...otherProps }: ButtonProps) => {
  return <MuiButton {...otherProps}>{children}</MuiButton>;
};

export { Button };
export type { ButtonProps };
