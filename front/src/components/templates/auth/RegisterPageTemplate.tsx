import { VFC, ChangeEvent } from "react";
import { Box, Flex, Stack, Heading } from "@chakra-ui/react";

import { PrimaryButton } from "@/components/atoms/PrimaryButton";
import { FontSize } from "@/theme/FontSize";
import { AuthInputBox } from "@/components/molecules/AuthInputBox";

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
    <Flex justify="center" align="center">
      <Box
        mt={{ md: "6.25em" }}
        mr="auto"
        ml="auto"
        maxW="80em"
        h={{ base: "100vh", md: "fit-content" }}
        w="100%"
        py="30px"
        px={{ base: "none", md: "15%" }}
        bg="#ffe7d4"
        borderRadius={{ base: "none", md: "8px" }}
        shadow="md"
      >
        <Heading as="h1" fontSize={FontSize.h1} textAlign="center" mb="80px" fontWeight="bold">
          ユーザー登録
        </Heading>

        <Stack spacing="60px" align="center">
          <AuthInputBox type="text" value={nameValue} onChange={nameOnChange}>
            名前
          </AuthInputBox>
          <AuthInputBox type="email" value={emailValue} onChange={emailOnChange}>
            メールアドレス
          </AuthInputBox>
          <AuthInputBox type="password" value={passwordValue} onChange={passwordOnChange}>
            パスワード
          </AuthInputBox>
          <AuthInputBox
            type="password"
            placeholder="パスワードをもう一度入力してください。"
            value={confirmPasswordValue}
            onChange={confirmPasswordOnChange}
          >
            パスワード確認
          </AuthInputBox>
          <PrimaryButton
            size="lg"
            w={{ base: "100%", md: "20%" }}
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
