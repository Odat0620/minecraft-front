import type { NextPage } from "next";
import { useRouter } from "next/router";
import { Box, Center, Flex, Text, Link } from "@chakra-ui/layout";
import { Spinner } from "@chakra-ui/spinner";

import { usePostById } from "@/stores/post";
import { PostPageTemplate } from "@/components/templates/post/PostPageTemplate";

const Post: NextPage = () => {
  const router = useRouter();
  const { data: post, isValidating } = usePostById({ postId: router.query.id as string });
  const onClickUser = (id: number) => router.push(`/users/${id}`);

  if (isValidating) {
    return (
      <Center h="80vh" w="100%">
        <Spinner color="white" />
      </Center>
    );
  }

  return post ? (
    <PostPageTemplate post={post} onClickUser={onClickUser} />
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
        <Text mb="1em">ページが見つかりませんでした。</Text>
        <Link href="/" _hover={{ color: "blue", textDecoration: "underline" }}>
          トップへ戻る
        </Link>
      </Box>
    </Flex>
  );
};

export default Post;
