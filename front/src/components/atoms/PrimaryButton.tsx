import { Button, ButtonProps } from "@chakra-ui/button";
import { VFC } from "react";

export const PrimaryButton: VFC<ButtonProps> = (props) => {
  return (
    <Button
      color="white"
      bg="#EDA464"
      boxShadow="0px 2px 6px 2px rgba(56, 36, 35, 0.3)"
      borderRadius="8px"
      _hover={{ opacity: 0.8 }}
      _focus={{ outlineColor: "#E78123" }}
      _active={{ shadow: "none" }}
      {...props}
    />
  );
};
