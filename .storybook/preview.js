import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import { ThemeProvider as Emotion10ThemeProvider } from "@emotion/react";

import { llamaTheme } from "../src/themes";

import "../src/index.css";

const withThemeProvider = (Story, context) => {
  return (
    <Emotion10ThemeProvider theme={llamaTheme}>
      <ThemeProvider theme={llamaTheme}>
        <Story {...context} />
      </ThemeProvider>
    </Emotion10ThemeProvider>
  );
};

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [withThemeProvider];
