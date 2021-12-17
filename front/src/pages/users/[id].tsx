import type { NextPage } from "next";
import { useRouter } from "next/router";
import Link from "next/link";

import { UserPageTemplate } from "@/components/templates/user/UserPageTemplate";
import { useUserById } from "@/stores/user";
import { Box, Center, Text } from "@chakra-ui/layout";
import { Spinner } from "@chakra-ui/spinner";

const User: NextPage = () => {
  const router = useRouter();
  const { data: user, isValidating } = useUserById({ userId: router.query.id as string });
  const onClickPost = (id: number) => router.push(`/posts/${id}`);
  const onClickSetting = () => {
    router.push("/users/edit");
  };

  if (isValidating) {
    return (
      <Center>
        <Spinner />
      </Center>
    );
  }

  return user ? (
    <UserPageTemplate user={user} onClickPost={onClickPost} onClickSetting={onClickSetting} />
  ) : (
    <Box>
      <Text>ユーザーが見つかりませんでした。</Text>
      <Link href="/">トップへ戻る</Link>
    </Box>
  );
};

export default User;
