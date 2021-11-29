import { useState } from "react";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { Center } from "@chakra-ui/layout";
import { Spinner } from "@chakra-ui/spinner";

import { useCurrentUser } from "@/stores/user";
import { UserEditPageTemplate } from "@/components/templates/user/UserEditPageTemplate";
import { useMessage } from "@/hooks/useMessage";
import { useInput } from "@/hooks/useInput";
import { useTextarea } from "@/hooks/useTextarea";

const UserEdit: NextPage = () => {
  const { data: currentUser, isValidating } = useCurrentUser();
  const router = useRouter();
  const { showMessage } = useMessage();

  const [avatar, setAvatar] = useState<File>();
  const name = useInput(currentUser?.name || "");
  const profile = useTextarea(currentUser?.profile || "");

  const onClickBack = () => router.back();
  const onClickUpdate = () => console.log("update");

  if (isValidating) {
    return (
      <Center>
        <Spinner />
      </Center>
    );
  } else if (!currentUser) {
    showMessage({ title: "ログインしてください。", status: "error" });
    router.push("/");
  }

  if (currentUser) {
    return (
      <UserEditPageTemplate
        name={name}
        profile={profile}
        avatar={avatar}
        setAvatar={setAvatar}
        onClickBack={onClickBack}
        onClickUpdate={onClickUpdate}
      />
    );
  }
  return (
    <Center>
      <Spinner />
    </Center>
  );
};

export default UserEdit;
