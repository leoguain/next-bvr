import { extendTheme, ThemeOverride } from "@chakra-ui/react";
import { lighten, darken } from "polished";
import { Lato } from "@next/font/google";

const lato = Lato({
  weight: ["300", "400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

const colorPrimary = "#fff";
const colorSecondary = "#149b49";

export const config: ThemeOverride = {
  initialColorMode: "light",
  useSystemColorMode: false,
  fonts: {
    heading: lato.style.fontFamily,
    body: lato.style.fontFamily,
  },
  styles: {
    global: {
      html: {
        scrollBehavior: "smooth",
      },
      body: {
        backgroundColor: "#181818",
      },
    },
  },
  colors: {
    primary: {
      50: lighten(0.25, colorPrimary),
      100: lighten(0.2, colorPrimary),
      200: lighten(0.15, colorPrimary),
      300: lighten(0.1, colorPrimary),
      400: lighten(0.05, colorPrimary),
      500: colorPrimary,
      600: darken(0.05, colorPrimary),
      700: darken(0.1, colorPrimary),
      800: darken(0.15, colorPrimary),
      900: darken(0.2, colorPrimary),
    },
    secondary: {
      50: lighten(0.25, colorSecondary),
      100: lighten(0.2, colorSecondary),
      200: lighten(0.15, colorSecondary),
      300: lighten(0.1, colorSecondary),
      400: lighten(0.05, colorSecondary),
      500: colorSecondary,
      600: darken(0.05, colorSecondary),
      700: darken(0.1, colorSecondary),
      800: darken(0.15, colorSecondary),
      900: darken(0.2, colorSecondary),
    },
  },
  components: {
    Text: {
      baseStyle: {
        color: "#fff",
      },
    },
    Heading: {
      baseStyle: {
        color: "primary.500",
        fontWeight: "normal",
      },
    },
  },
};

export const theme = extendTheme(config);
