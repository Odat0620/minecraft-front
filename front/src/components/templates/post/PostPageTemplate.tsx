import { VFC } from "react";
import { Box, Divider, Flex, Heading, Stack, Text } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/react";
import { Icon } from "@chakra-ui/icon";
import { FaHeart } from "react-icons/fa";
import { GoBookmark } from "react-icons/go";
import moment from "moment";

import { PostType } from "@/types/post";
import { ContentBox } from "@/components/atoms/ContentBox";
import { useCurrentUser } from "@/stores/user";
import { CreateComment } from "@/components/organisms/post/CreateComment";
import { UserNameAndAvatar } from "@/components/molecules/UserNameAndAvatar";
import { RecipeContainer } from "@/components/organisms/post/RecipeContainer";
import { GameVersion } from "@/components/molecules/GameVersion";
import { PostControlButton } from "@/components/organisms/post/PostControlButton";
import { FontSize } from "@/theme/FontSize";

type Props = {
  post: PostType;
  onClickUser: (id: number) => void;
};

export const PostPageTemplate: VFC<Props> = (props) => {
  const { post, onClickUser } = props;
  const { data: currentUser } = useCurrentUser();

  return (
    <>
      <Box justify="center" align="center" px={{ base: "2%", md: "none" }}>
        <ContentBox>
          <Stack px={{ base: "1em", md: "5%" }} mb="30px" spacing="1.5em" align="center">
            <Stack w="full" align="center" spacing="1em">
              <Image borderRadius="8px" src={post.image} alt="main-image" />
              <Box w="full" lineHeight="2em">
                <Heading as="h1" fontSize={FontSize.h2} w="full" textAlign="left">
                  {post.title}
                </Heading>

                <Flex w="full" justify="space-between" align="center">
                  <Text
                    w="fit-content"
                    textAlign="left"
                    fontSize={{ base: "0.9em", md: "1rem" }}
                    whiteSpace="pre-wrap"
                  >
                    {moment(post.createdAt).format("YYYY.MM.DD  H:mm")}
                  </Text>

                  <GameVersion version={post.version} />
                </Flex>
              </Box>
              <Flex justify="space-between" w="full">
                <UserNameAndAvatar
                  name={post.user.name}
                  avatar={post.user.avatar}
                  cursor="pointer"
                  onClick={() => onClickUser(post.user.id)}
                />
                {post.userId === currentUser?.id && (
                  <PostControlButton post={post} currentUser={currentUser} />
                )}
              </Flex>
            </Stack>

            <Stack w="full" direction="row" spacing="20px">
              <Flex
                w="50%"
                px="1em"
                py="0.5em"
                align="center"
                border="1px solid #ac9386"
                borderRadius="6px"
                _hover={{ cursor: "pointer", opacity: 0.8 }}
              >
                <Icon mr="1em" as={FaHeart} color="red.400" />
                <Divider mr="1em" orientation="vertical" />
                <Flex w="full" align="center">
                  <Text w="full" textAlign="center">
                    {post.likeCounts}
                  </Text>
                </Flex>
              </Flex>

              <Flex
                w="50%"
                px="1em"
                py="0.5em"
                align="center"
                border="1px solid #ac9386"
                borderRadius="6px"
                _hover={{ cursor: "pointer", opacity: 0.8 }}
              >
                <Icon mr="1em" as={GoBookmark} color="green.600" />
                <Divider mr="1em" orientation="vertical" />
                <Flex w="full" align="center">
                  <Text w="full" textAlign="center">
                    0
                  </Text>
                </Flex>
              </Flex>
            </Stack>

            <Text w="full" pb="2em" textAlign="left" whiteSpace="pre-wrap">
              {post.body}
            </Text>

            <Stack w="full" spacing="4em">
              <Stack w="full" spacing="0.5em">
                <Box>
                  <Heading as="h2" fontSize="xl" textAlign="left">
                    材料
                  </Heading>
                  <Divider borderColor="#6F574B" />
                </Box>
                <Box w="full" h="200px" bg="gray" borderRadius="3px" />
                {/* <Image src={post.material} w="full" h="200px" borderRadius="3px" /> */}
              </Stack>

              {/* レシピ */}
              <Box w="full">
                <RecipeContainer recipe={post.recipe} />
              </Box>
            </Stack>
          </Stack>

          <Divider mb="1em" borderBottom="2px solid #6F574B" />

          <Heading mb="1rem" as="h2" fontSize="2xl">
            コメント
          </Heading>
          {post.comments.length > 1 ? (
            post.comments.map((comment, index) => (
              <Box key={comment.id} w="full" py="1em" bg={index % 2 === 0 ? "#f1d4bd" : "#FFE7D4"}>
                <Stack px={{ base: "1em", md: "5%" }} spacing="1.5em" align="center">
                  <Text w="full" textAlign="left">
                    {comment.body}
                  </Text>
                  <Flex w="full" align="end" justifyContent="space-between">
                    <UserNameAndAvatar
                      name={comment.user.name}
                      avatar={comment.user.avatar}
                      cursor="pointer"
                      onClick={() => onClickUser(comment.id)}
                    />
                    <Text fontSize="0.8em">
                      {moment(comment.createdAt).format("YYYY.MM.DD  H:mm")}
                    </Text>
                  </Flex>
                </Stack>
              </Box>
            ))
          ) : (
            <Text mb="1em" opacity="0.8">
              コメントはありません。
            </Text>
          )}

          {currentUser && (
            <>
              <Divider mb="1em" borderColor="#6F574B" />
              <Stack px={{ base: "1em", md: "5%" }} spacing="1em">
                <CreateComment currentUser={currentUser} postId={post.id} />
              </Stack>
            </>
          )}
        </ContentBox>
      </Box>
    </>
  );
};
