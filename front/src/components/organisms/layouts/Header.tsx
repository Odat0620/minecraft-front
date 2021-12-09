import { VFC } from "react";
import Link from "next/link";
import Router, { useRouter } from "next/router";
import { Flex, Heading, Stack, LinkBox, LinkOverlay } from "@chakra-ui/layout";

import { Create } from "@/api/axiosClient";
import { useMessage } from "@/hooks/useMessage";
import { MainMenuButton } from "@/components/organisms/layouts/MainMenuButton";
import { useCurrentUser } from "@/stores/user";
import { SearchButton } from "@/components/atoms/button/SearchButton";

export const Header: VFC = () => {
  const { data: currentUser } = useCurrentUser();
  const { showMessage } = useMessage();
  const router = useRouter();

  const onClickMypage = () => {
    router.push(`/users/${currentUser?.id}`);
  };
  const onClickSetting = () => {
    router.push("/users/edit");
  };

  const onClickLogout = () => {
    Create("/logout")
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
        bg="linear-gradient(-20deg,#e69216, #fa6f2e)"
        color="white"
        align="center"
        justify="space-between"
        borderBottom="4px solid #888f00"
        px={{ base: "10px", md: "30px" }}
        shadow="md"
        pos="sticky"
        top="0"
        zIndex="1000"
        w="100%"
        h="46px"
      >
        <SearchButton display={{ base: "block", md: "none" }} />

        <LinkBox>
          <Flex
            align="flex-end"
            transition="all 0.3s"
            _hover={{ cursor: "pointer", textShadow: "0px 0px 10px #aaa" }}
          >
            <Heading as="h1" fontSize={{ base: "xl", md: 30 }}>
              <Link href="/" passHref>
                <LinkOverlay>クラデザ</LinkOverlay>
              </Link>
            </Heading>
          </Flex>
        </LinkBox>

        <Flex>
          <Stack alignItems="center" spacing={{ base: "none", md: "30px" }} direction="row">
            <Heading
              fontSize="xl"
              transition="all 0.3s"
              _hover={{ cursor: "pointer", color: "#F2BF91" }}
              display={{ base: "none", md: "block" }}
            >
              <Link href="/">投稿一覧</Link>
            </Heading>

            <SearchButton display={{ base: "none", md: "block" }} />

            <MainMenuButton
              currentUser={currentUser}
              onClickMypage={onClickMypage}
              onClickSetting={onClickSetting}
              onClickLogout={onClickLogout}
            />
          </Stack>
        </Flex>
      </Flex>
    </>
  );
};
