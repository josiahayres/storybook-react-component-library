import { createTheme, ThemeOptions } from "@mui/material/styles";

import { TOKENS } from "../tokens/design_tokens";

const PRIMARY_COLOUR_TOKEN = "#373A82";

export const get = (object: { [key: string]: any }, path: string) => {
  if (typeof path === "string") {
    let pieces: string[] = path.split(".").filter((key) => key.length);
    return pieces.reduce((dive, key) => dive && dive[key], object);
  }
  return null;
};

export const llamaTheme = createTheme({
  shape: { borderRadius: 48 },
  typography: { fontFamily: "Cabin", fontSize: 16 },

  palette: {
    mode: "light",
    primary: { main: PRIMARY_COLOUR_TOKEN },
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          fontWeight: "500",
          textTransform: "capitalize",
          paddingLeft: 40,
          paddingRight: 40,
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          ":focus": {
            borderWidth: "8px",
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          ":focus": {
            borderWidth: "4px",
          },
        },
        input: {
          borderWidth: "4px",
        },
      },
    },
  },
});
