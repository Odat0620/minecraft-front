import { Tab, TabProps } from "@chakra-ui/tabs";
import { VFC } from "react";

export const GreenTab: VFC<TabProps> = (props) => {
  return (
    <Tab
      mb="-2px"
      color="white"
      _selected={{ bg: "#888f00", border: "2px solid #626800", borderBottom: "none" }}
      _focus={{ boxShadow: "none" }}
      fontWeight="bold"
      {...props}
    />
  );
};
