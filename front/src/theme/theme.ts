import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: {
      "html, body": {
        backgroundColor: "#6F574B",
        color: "#523f35",
        fontFamily: '"Noto Sans JP", Meiryo, sans-serif',
        fontWeight: "400",
      },
      p: {
        color: "#523f35",
      },
    },
  },
  components: {
    Checkbox: {
      baseStyle: {
        control: {
          borderColor: "#AC9386",
          _focus: {
            boxShadow: "0 0 0 3px #E7812390",
          },
        },
      },
    },
  },
});
export default theme;
