import { VFC } from "react";
import { LinkBox, LinkBoxProps, LinkOverlay } from "@chakra-ui/layout";
import { BiSearch } from "react-icons/bi";

export const SearchButton: VFC<LinkBoxProps> = (props) => {
  return (
    <LinkBox _hover={{ color: "#F2BF91" }} transition="all 0.2s" {...props}>
      <LinkOverlay href="/search">
        <BiSearch size="1.6em" />
      </LinkOverlay>
    </LinkBox>
  );
};
