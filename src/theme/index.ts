import { DefaultTheme } from "styled-components";

export const fontWeights = {
  regular: 400,
  medium: 500,
  semiBold: 600,
  bold: 700,
};

export const primaryColors = {
  grey1: "#121212",
  grey2: "#8A8C8E",
  grey3: "#636669",
  grey4: "#3C4043",
  grey5: "#EBECEC",
  grey6: " #242628",
  white: "#fff",
  terraCotta: "#E26559",
  terraCotta1: "#B55147",
  terraCotta2: "#883D35",
};

export const media = {
  sm: "only screen and (min-width: 600px)",
  md: "only screen and (min-width: 768px)",
  lg: "only screen and (min-width: 992px)",
  xl: "only screen and (min-width: 1200px)",
};

export const theme: DefaultTheme = {
  colors: {
    primary: primaryColors,
  },
  fontWeights,
  media,
};
