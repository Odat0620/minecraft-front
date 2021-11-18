import { VFC } from "react";
import Link from "next/link";
import Router from "next/router";
import { Tooltip } from "@chakra-ui/react";
import { Flex, Heading, Stack, LinkBox, LinkOverlay } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";
import { FaPowerOff } from "react-icons/fa";

import { client } from "@/api/axiosClient";
import { useMessage } from "@/hooks/useMessage";

const HeaderLink = (props: { text: string; link: string }) => {
  const { text, link } = props;

  return (
    <Heading
      fontSize="xl"
      transition="all 0.3s"
      _hover={{ cursor: "pointer", textShadow: "0px 0px 10px #aaa" }}
    >
      <Link href={link}>{text}</Link>
    </Heading>
  );
};

const headerLinks = [
  { text: "投稿", link: "/" },
  { text: "ユーザー", link: "/users" },
  { text: "コメント", link: "/comments" },
  { text: "お知らせ", link: "/notices" },
];

export const Header: VFC = () => {
  const { showMessage } = useMessage();

  const onClickLogout = () => {
    client
      .post("/logout")
      .then((res) => {
        console.log(res.data);
        Router.push("/");
        showMessage({ title: "ログアウトしました。", status: "success" });
      })
      .catch((err) => {
        console.log(err);
        showMessage({ title: "ログアウトに失敗しました。", status: "error" });
      });
  };

  return (
    <>
      <Flex
        as="nav"
        bg="#888F00"
        color="gray.50"
        align="center"
        justify="space-between"
        padding={{ base: 2, md: 2 }}
        shadow="md"
        pos="sticky"
        top="0"
        zIndex="1000"
        w="100%"
        h="50px"
      >
        <LinkBox>
          <Flex
            ml="30px"
            align="flex-end"
            transition="all 0.3s"
            _hover={{ cursor: "pointer", textShadow: "0px 0px 10px #aaa" }}
          >
            <Heading as="h1" fontSize={{ base: "2xl", md: 30 }}>
              <Link href="/" passHref>
                <LinkOverlay>クラデザ</LinkOverlay>
              </Link>
            </Heading>
          </Flex>
        </LinkBox>
        <Flex>
          <Stack alignItems="center" spacing="30px" direction="row">
            {headerLinks.map((l) => (
              <HeaderLink key={l.text} {...l} />
            ))}
            <Tooltip label="ログアウト">
              <Button
                fontSize="lg"
                transition="all 0.3s"
                bg="red.500"
                borderRadius="full"
                border="2px solid lightGray"
                _hover={{ opacity: 0.8 }}
                onClick={onClickLogout}
              >
                <FaPowerOff />
              </Button>
            </Tooltip>
          </Stack>
        </Flex>
      </Flex>
    </>
  );
};
