import { VFC } from "react";
import { Avatar } from "@chakra-ui/avatar";
import { Box, Flex, Heading, Stack, Text, Divider } from "@chakra-ui/layout";
import { TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/tabs";

import { PrimaryButton } from "@/components/atoms/button/PrimaryButton";
import { GreenTab } from "@/components/atoms/GreenTab";
import { UserType } from "@/types/user";
import { useCurrentUser } from "@/stores/user";
import { PostListItem } from "@/components/templates/post/PostListItem";

type Props = {
  user: UserType;
  onClickPost: (id: number) => void;
  onClickSetting: () => void;
};

export const UserPageTemplate: VFC<Props> = (props) => {
  const { user, onClickPost, onClickSetting } = props;
  const { data: currentUser } = useCurrentUser();

  const postUser = {
    id: user.id,
    name: user.name,
    avatar: user.avatar,
  };

  return (
    <>
      <Flex justify="center" align="center" px={{ base: "2%", md: "none" }}>
        <Box
          my={{ base: "2em", md: "3em" }}
          mx="auto"
          w={{ base: "100%", md: "40em" }}
          h="fit-content"
          pt="40px"
          bg="#ffe7d4"
          borderRadius={{ base: "6px", md: "8px" }}
          shadow="md"
        >
          <Stack px={{ base: "1em", md: "5%" }} mb="30px" spacing="20px" align="center">
            <Avatar
              src={user.avatar}
              h="100px"
              w="100px"
              bg="#6F574B"
              showBorder
              borderColor="#AC9386"
            />
            <Heading as="h1">{user.name}</Heading>
            <Text w="full" textAlign="left" whiteSpace="pre-wrap">
              {user.profile}
            </Text>

            <Flex align="center">
              <Box>
                <Text>0 フォロー</Text>
              </Box>
              <Divider h="1em" mx="10px" orientation="vertical" borderColor="#6F574B" />
              <Box>
                <Text>0 フォロワー</Text>
              </Box>
            </Flex>
            {user.id === currentUser?.id ? (
              <PrimaryButton w="128px" borderRadius="full" shadow="md" onClick={onClickSetting}>
                編集
              </PrimaryButton>
            ) : (
              <PrimaryButton w="128px" borderRadius="full" shadow="md">
                フォロー
              </PrimaryButton>
            )}
          </Stack>

          <Tabs isFitted variant="enclosed">
            <TabList
              borderBottom="2px solid"
              mb="0"
              borderColor="#6F574B"
              bg="#AC9386"
              borderTopRadius="8px"
            >
              <GreenTab>投稿</GreenTab>
              <GreenTab>いいね</GreenTab>
            </TabList>

            <TabPanels bg="#AC9386" pb="1rem" borderBottomRadius={{ base: "6px", md: "8px" }}>
              <TabPanel>
                <Stack spacing="1rem">
                  {user.posts.map((post) => (
                    <PostListItem
                      key={post.id}
                      post={post}
                      user={postUser}
                      onClick={() => onClickPost(post.id)}
                    />
                  ))}
                </Stack>
              </TabPanel>
              <TabPanel>いいねした投稿</TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </Flex>
    </>
  );
};
