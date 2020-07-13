import { rem, darken, lighten } from "polished";

const typeScaleBase = 16;
const primaryColor = "#5b49a5";
const secondaryColor = "#e841af";

export const theme = {
  colors: {
    primary: primaryColor,
    secondary: secondaryColor,
    accent: "#5cff5c",
    dark: darken(0.3, primaryColor),
    light: lighten(0.3, primaryColor),
    lighter: lighten(0.45, primaryColor),

    modded: {
      light_t_90: "rgba(182,172,219,0.1)",
      light_t_50: "rgba(182,172,219,0.5)",
    },
  },

  fonts: {
    primary: "'Nunito Sans', sans-serif",
  },

  fontScale: {
    h1: rem(49, typeScaleBase),
    h2: rem(39, typeScaleBase),
    h3: rem(31, typeScaleBase),
    h4: rem(25, typeScaleBase),
    h5: rem(20, typeScaleBase),
    paragraph: rem(typeScaleBase),
    label: rem(13, typeScaleBase),
  },
};
