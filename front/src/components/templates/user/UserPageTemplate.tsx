import { VFC } from "react";
import { Avatar } from "@chakra-ui/avatar";
import { Box, Flex, Heading, Stack, Text, Divider } from "@chakra-ui/layout";
import { TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/tabs";

import { PrimaryButton } from "@/components/atoms/button/PrimaryButton";
import { GreenTab } from "@/components/atoms/GreenTab";
import { UserType } from "@/types/user";
import { useCurrentUser } from "@/stores/user";

export const UserPageTemplate: VFC<{ user: UserType }> = ({ user }) => {
  const { data: currentUser } = useCurrentUser();

  return (
    <>
      <Flex justify="center" align="center" px={{ base: "2%", md: "none" }}>
        <Box
          mt={{ base: "2em", md: "3em" }}
          mx="auto"
          w={{ base: "100%", md: "40em" }}
          h="fit-content"
          py="40px"
          bg="#ffe7d4"
          borderRadius={{ base: "6px", md: "8px" }}
          shadow="md"
        >
          <Stack px={{ base: "1em", md: "5%" }} mb="30px" spacing="20px" align="center">
            <Avatar src={user.avatar} h="100px" w="100px" showBorder borderColor="gray.100" />
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
              <PrimaryButton w="128px" borderRadius="full" shadow="md">
                編集
              </PrimaryButton>
            ) : (
              <PrimaryButton w="128px" borderRadius="full" shadow="md">
                フォロー
              </PrimaryButton>
            )}
          </Stack>

          <Tabs isFitted variant="enclosed">
            <TabList borderBottom="2px solid" borderColor="#6F574B" bg="#AC9386" borderTopRadius="8px">
              <GreenTab>投稿</GreenTab>
              <GreenTab>いいね</GreenTab>
              <GreenTab>コメント</GreenTab>
            </TabList>

            <TabPanels>
              <TabPanel>投稿</TabPanel>
              <TabPanel>いいね</TabPanel>
              <TabPanel>コメント</TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </Flex>
    </>
  );
};
