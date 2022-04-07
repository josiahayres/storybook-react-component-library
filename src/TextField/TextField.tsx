import { Fragment } from "react";
import {
  TextField as MuiTextField,
  FormLabel,
  FormHelperText,
  OutlinedTextFieldProps,
  Stack,
  StackProps,
} from "@mui/material";

export type TextFieldProps = Omit<
  OutlinedTextFieldProps,
  "margin" | "variant"
> & {
  stackProps?: StackProps;
};

const TextField = ({
  label,
  helperText,
  FormHelperTextProps,
  stackProps,
  ...otherTextFieldProps
}: TextFieldProps) => {
  return (
    <Stack direction="column" {...stackProps}>
      <FormLabel>{label}</FormLabel>
      <MuiTextField {...otherTextFieldProps} />
      {helperText && (
        <FormHelperText {...FormHelperTextProps}>{helperText}</FormHelperText>
      )}
    </Stack>
  );
};

export { TextField };
