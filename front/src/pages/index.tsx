import type { NextPage } from "next";
import { useRouter } from "next/router";
import { Box, Flex, Stack, Text } from "@chakra-ui/layout";

import { PostListItem } from "@/components/templates/post/PostListItem";
import { usePostListSWR } from "@/stores/post";
import { SkePostListItem } from "@/components/templates/skeleton/SkePostListItem";

const Home: NextPage = () => {
  const { data: posts, isValidating } = usePostListSWR();
  const router = useRouter();

  const onClickPost = (id: number) => router.push(`/posts/${id}`);

  if (isValidating) {
    return (
      <Flex justify="center" py="1em">
        <Stack px={{ base: "3%", md: "none" }} spacing="1em" justify="center" align="center">
          {[...Array(6)].map((_, i) => (
            <SkePostListItem key={i} />
          ))}
        </Stack>
      </Flex>
    );
  }

  return posts?.length !== 0 ? (
    <Flex justify="center" py="1em">
      <Stack px={{ base: "3%", md: "none" }} spacing="1em" justify="center" align="center">
        {posts?.map((post) => (
          <PostListItem key={post.id} post={post} onClick={() => onClickPost(post.id)} />
        ))}
      </Stack>
    </Flex>
  ) : (
    <Flex justify="center" align="center" px={{ base: "2%", md: "none" }}>
      <Box
        my={{ base: "1em", md: "2em" }}
        mx="auto"
        w={{ base: "100%", md: "40em" }}
        h="fit-content"
        py={{ base: "20px", md: "30px" }}
        bg="#ffe7d4"
        borderRadius={{ base: "6px", md: "8px" }}
        shadow="md"
        align="center"
      >
        <Text>投稿が見つかりませんでした。</Text>
      </Box>
    </Flex>
  );
};

export default Home;
