import { VFC } from "react";
import { Box, BoxProps } from "@chakra-ui/layout";

export const ContentBox: VFC<BoxProps> = (props) => {
  return (
    <Box
      my={{ base: "1em", md: "2em" }}
      mx="auto"
      w={{ base: "100%", lg: "900px" }}
      h="fit-content"
      py={{ base: "20px", md: "30px" }}
      bg="#ffe7d4"
      borderRadius={{ base: "6px", md: "8px" }}
      shadow="md"
      {...props}
    />
  );
};
