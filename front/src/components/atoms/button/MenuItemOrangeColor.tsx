import { MenuItem, MenuItemProps } from "@chakra-ui/menu";
import { VFC } from "react";

export const MenuItemOrangeColor: VFC<MenuItemProps> = (props) => {
  return (
    <MenuItem
      pl={{ base: "26px", md: "20px" }}
      pr={{ base: "inherit", md: "40px" }}
      color="#6F574B"
      _hover={{ bg: "#F2BF91" }}
      _focus={{ bg: "#F2BF91" }}
      {...props}
    />
  );
};
