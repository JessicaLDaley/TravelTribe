import { extendTheme } from "@chakra-ui/react";

const colors = {
  primary: {
    100: "#f1f1f1",
    200: "#1b2735",
    300: "#090a0f",
    400: "#7289da",
    500: "#36393f",
    600: "dddddd"
  }
};

const customTheme = extendTheme({ colors });

export default customTheme;

