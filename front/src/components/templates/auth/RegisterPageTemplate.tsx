import { VFC, ChangeEvent } from "react";
import { Box, Flex, Stack, Heading, Divider } from "@chakra-ui/react";

import { PrimaryButton } from "@/components/atoms/button/PrimaryButton";
import { FontSize } from "@/theme/FontSize";
import { LabelAndInputBox } from "@/components/molecules/LabelAndInputBox";

type Props = {
  nameValue: string;
  nameOnChange: (e: ChangeEvent<HTMLInputElement>) => void;
  emailValue: string;
  emailOnChange: (e: ChangeEvent<HTMLInputElement>) => void;
  passwordValue: string;
  passwordOnChange: (e: ChangeEvent<HTMLInputElement>) => void;
  confirmPasswordValue: string;
  confirmPasswordOnChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onClickRegister: () => void;
  loading: boolean;
};

export const RegisterPageTemplate: VFC<Props> = (props) => {
  const {
    nameValue,
    nameOnChange,
    emailValue,
    emailOnChange,
    passwordValue,
    passwordOnChange,
    confirmPasswordValue,
    confirmPasswordOnChange,
    onClickRegister,
    loading,
  } = props;

  return (
    <Flex justify="center" align="center" px={{ base: "2%", md: "none" }}>
      <Box
        mt={{ base: "2em", md: "3em" }}
        mx="auto"
        w={{ base: "100%", md: "40em" }}
        h="fit-content"
        py="40px"
        px={{ base: "3%", md: "5%" }}
        bg="#ffe7d4"
        borderRadius={{ base: "6px", md: "8px" }}
        shadow="md"
      >
        <Heading as="h1" fontSize={FontSize.h1} textAlign="center" mb="40px" fontWeight="bold">
          ユーザー登録
        </Heading>

        <Stack spacing="40px" align="center">
          <LabelAndInputBox type="text" value={nameValue} onChange={nameOnChange}>
            名前
          </LabelAndInputBox>
          <LabelAndInputBox type="email" value={emailValue} onChange={emailOnChange}>
            メールアドレス
          </LabelAndInputBox>
          <LabelAndInputBox
            type="password"
            placeholder="○○文字以上"
            value={passwordValue}
            onChange={passwordOnChange}
          >
            パスワード
          </LabelAndInputBox>
          <LabelAndInputBox
            type="password"
            placeholder="パスワードをもう一度入力してください。"
            value={confirmPasswordValue}
            onChange={confirmPasswordOnChange}
          >
            パスワード確認
          </LabelAndInputBox>
          <Divider borderColor={{ base: "#ffe7d4", md: "#AC9386" }} />
          <PrimaryButton
            size="lg"
            w={{ base: "100%", md: "" }}
            isLoading={loading}
            disabled={loading}
            onClick={onClickRegister}
          >
            登録
          </PrimaryButton>
        </Stack>
      </Box>
    </Flex>
  );
};
