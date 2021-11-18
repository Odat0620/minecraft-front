import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: {
      "html, body": {
        backgroundColor: "#6F574B",
        color: "#6F574B",
        fontFamily: '"Noto Sans JP", Meiryo, sans-serif',
      },
    },
  },
});
export default theme;
