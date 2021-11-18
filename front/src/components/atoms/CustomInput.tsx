import { VFC } from "react";
import { Input, InputProps } from "@chakra-ui/input";

export const CustomInput: VFC<InputProps> = (props) => {
  return (
    <Input
      bg="gray.50"
      borderColor="#AC9386"
      focusBorderColor="#EDA464"
      _placeholder={{ color: "#6F574B", opacity: 0.5 }}
      _hover={{ borderColor: "#6F574B" }}
      {...props}
    />
  );
};
