import type { NextPage } from "next";
import { useRouter } from "next/router";
import { Box, Flex, Text, WrapItem } from "@chakra-ui/layout";

import { PostListItem } from "@/components/templates/post/PostListItem";
import { usePostListSWR } from "@/stores/post";
import { SkePostListItem } from "@/components/templates/skeleton/SkePostListItem";

const Home: NextPage = () => {
  const { data: posts, isValidating } = usePostListSWR();
  const router = useRouter();

  const onClickPost = (id: number) => router.push(`/posts/${id}`);

  if (isValidating) {
    return (
      <Flex justify="center" my="1em" mx={{ base: "3%", md: "1%" }}>
        <Flex flexWrap="wrap" w="100%" spacing="1rem" justify="">
          {[...Array(3)].map((_, i) => (
            <WrapItem key={i} w={{ base: "full", md: "50%", lg: "33.3333%" }}>
              <SkePostListItem key={i} />
            </WrapItem>
          ))}
        </Flex>
      </Flex>
    );
  }

  return posts?.length !== 0 ? (
    <Flex justify="center" my="1em" mx={{ base: "3%", md: "1%" }}>
      <Flex flexWrap="wrap" w="100%" spacing="1rem" justify="">
        {posts?.map((post) => (
          <WrapItem key={post.id} w={{ base: "full", md: "50%", lg: "33.3333%" }}>
            <PostListItem post={post} onClick={() => onClickPost(post.id)} />
          </WrapItem>
        ))}
      </Flex>
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
