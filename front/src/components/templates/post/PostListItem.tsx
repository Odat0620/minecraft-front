import { VFC } from "react";
import { AspectRatio, Icon } from "@chakra-ui/react";
import { Box, Flex, Heading, Text, Stack } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/image";
import { FaCommentDots, FaHeart } from "react-icons/fa";
import moment from "moment";

import { PostListType } from "@/types/post";
import { GameVersion } from "@/components/molecules/GameVersion";
import { UserNameAndAvatar } from "@/components/molecules/UserNameAndAvatar";

type Props = {
  post: PostListType;
  onClick: () => void;
};

export const PostListItem: VFC<Props> = (props) => {
  const { post, onClick } = props;

  return (
    <Box
      w={{ base: "full", md: "428px" }}
      position="relative"
      boxShadow="md"
      cursor="pointer"
      onClick={onClick}
    >
      <Flex
        top="1px"
        left="1px"
        px="0.3em"
        py="0.3em"
        zIndex="1"
        position="absolute"
        bg="#00000066"
        borderTopLeftRadius="6px"
        borderBottomRightRadius="6px"
      >
        <GameVersion version={post.version} />
      </Flex>
      <AspectRatio ratio={16 / 9}>
        <Image
          objectFit="cover"
          borderTopRadius="6px"
          border="1px solid #AC9386"
          borderBottom="0"
          alt="投稿画像"
          src={post.image}
          fallbackSrc="https://via.placeholder.com/500?text=image"
        />
      </AspectRatio>
      <Stack
        p="0.5em"
        spacing="0.75em"
        bg="#FFE7D4"
        border="1px solid #AC9386"
        borderTop="0"
        borderBottomRadius="6px"
      >
        <Heading w="full" as="h2" fontSize="xl">
          {post.title}
        </Heading>
        <Text w="full" py="0.25rem" fontSize="sm">
          {post.body.length > 50 ? `${post.body.substr(0, 50)}...` : post.body}
        </Text>
        <UserNameAndAvatar name={post.user.name} avatar={post.user.avatar} />
        <Flex align="center" justify="space-between" fontSize="sm">
          <Text>{moment(post.createdAt).format("YYYY.MM.DD  H:mm")}</Text>
          <Stack direction="row" spacing="1em">
            <Flex align="center" color="red.500">
              <Icon mr="0.25rem" fontSize="md" as={FaHeart} />
              <Text>{post.likeCounts}</Text>
            </Flex>
            <Flex align="center" color="#6F574B">
              <Icon mr="0.25rem" fontSize="md" as={FaCommentDots} />
              <Text>{post.commentCounts}</Text>
            </Flex>
          </Stack>
        </Flex>
      </Stack>
    </Box>
  );
};
