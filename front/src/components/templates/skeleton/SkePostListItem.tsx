import { VFC } from "react";
import { AspectRatio, Skeleton, SkeletonText, SkeletonCircle } from "@chakra-ui/react";
import { Box, Flex, Stack } from "@chakra-ui/layout";

export const SkePostListItem: VFC = () => {
  return (
    <Box w={{ base: "full", md: "428px" }} position="relative" boxShadow="md">
      <AspectRatio ratio={16 / 9}>
        <Skeleton borderTopRadius="6px" border="1px solid #AC9386" borderBottom="0" />
      </AspectRatio>
      <Stack
        p="0.5em"
        spacing="0.75em"
        bg="#FFE7D4"
        border="1px solid #AC9386"
        borderTop="0"
        borderBottomRadius="6px"
      >
        <Skeleton h="1.25rem" w="90%" />
        <SkeletonText w="full" py="0.5rem" spacing="2" />
        <Flex pb="0.5rem" align="center">
          <SkeletonCircle mr="6px" size="30px" />
          <Skeleton w="60px" h="0.75rem" />
        </Flex>
        <Flex align="center" justify="space-between" fontSize="sm">
          <Skeleton w="130px" h="0.75rem" />
          <Skeleton w="70px" h="0.75rem" />
        </Flex>
      </Stack>
    </Box>
  );
};
