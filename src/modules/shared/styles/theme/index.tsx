import { extendTheme } from "@chakra-ui/react";

const colors = {
  blue: {
    900: "#1a365d",
    800: "#153e75",
    700: "#3889E9",
  },
  gray: {
    900: "#363636",
    200: "#C4C4C4",
  },
  black: {
    900: "#000",
  },
  yellow: {
    400: "#E4C627",
  },
};

const ButtonDefault = {
  components: {
    Button: {
      variants: {
        link: {
          ":focus": {
            outline: "none",
            boxShadow: "none",
          },
        },
      },
    },
  },
};

export const theme = extendTheme({ colors, ButtonDefault });
