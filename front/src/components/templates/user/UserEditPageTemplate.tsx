import { VFC } from "react";
import { Box, Divider, Flex, Heading, Stack } from "@chakra-ui/layout";

import { PrimaryButton } from "@/components/atoms/button/PrimaryButton";
import { RedButton } from "@/components/atoms/button/RedButton";
import { useTextareaType } from "@/hooks/useTextarea";
import { useInputType } from "@/hooks/useInput";
import { EditAvatar } from "@/components/organisms/user/EditAvatar";
import { FontSize } from "@/theme/FontSize";
import { LabelAndInputBox } from "@/components/molecules/LabelAndInputBox";
import { LabelAndTextarea } from "@/components/molecules/LabelAndTextarea";

type Props = {
  name: useInputType;
  profile: useTextareaType;
  avatar: File | undefined;
  setAvatar: (file: File) => void;
  onClickBack: () => void;
  onClickUpdate: () => void;
};

export const UserEditPageTemplate: VFC<Props> = (props) => {
  const { name, profile, setAvatar, onClickBack, onClickUpdate } = props;

  return (
    <>
      <Flex justify="center" align="center" px={{ base: "2%", md: "none" }}>
        <Box
          mt={{ base: "2em", md: "3em" }}
          mx="auto"
          px={{ base: "1em", md: "5%" }}
          w={{ base: "100%", md: "40em" }}
          h="fit-content"
          py="40px"
          bg="#ffe7d4"
          borderRadius={{ base: "6px", md: "8px" }}
          shadow="md"
        >
          <Heading as="h1" fontSize={FontSize.h1} textAlign="center" mb="40px" fontWeight="bold">
            プロフィール編集
          </Heading>

          <Stack spacing="30px" align="center">
            <EditAvatar setAvatar={setAvatar} />
            <LabelAndInputBox value={name.value} onChange={name.onChange}>
              ユーザー名
            </LabelAndInputBox>
            <LabelAndTextarea rows={5} value={profile.value} onChange={profile.onChange}>
              プロフィール
            </LabelAndTextarea>
            <Divider borderColor="#ac9386" />

            <Stack
              spacing="50px"
              w="full"
              justify="center"
              direction={{ base: "column", md: "row" }}
            >
              <RedButton w={{ md: "100px" }} onClick={onClickBack}>
                戻る
              </RedButton>
              <PrimaryButton w={{ md: "100px" }} onClick={onClickUpdate}>
                保存
              </PrimaryButton>
            </Stack>
          </Stack>
        </Box>
      </Flex>
    </>
  );
};
