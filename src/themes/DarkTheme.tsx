import { createTheme } from "@mui/material/styles";

const darkTheme = createTheme({
  typography: { fontFamily: "Cabin" },
  palette: {
    mode: "dark",
    primary: { main: "#3d210a" },
  },
});

export { darkTheme };
