import { VFC, ChangeEvent } from "react";
import { Box, Flex, Stack, Heading, Divider } from "@chakra-ui/react";

import { PrimaryButton } from "@/components/atoms/PrimaryButton";
import { FontSize } from "@/theme/FontSize";
import { AuthInputBox } from "@/components/molecules/AuthInputBox";

type Props = {
  emailValue: string;
  emailOnChange: (e: ChangeEvent<HTMLInputElement>) => void;
  passwordValue: string;
  passwordOnChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onClickLogin: () => void;
  loading: boolean;
};

export const LoginPageTemplate: VFC<Props> = (props) => {
  const { emailValue, emailOnChange, passwordValue, passwordOnChange, onClickLogin, loading } =
    props;

  return (
    <Flex justify="center" align="center">
      <Box
        mt={{ base: "2em", md: "3em" }}
        mx="auto"
        w={{ base: "100%", md: "40em" }}
        h="fit-content"
        py="40px"
        px={{ base: "none", md: "5%" }}
        bg="#ffe7d4"
        borderRadius={{ base: "none", md: "8px" }}
        shadow="md"
      >
        <Heading as="h1" fontSize={FontSize.h1} textAlign="center" mb="40px" fontWeight="bold">
          ログイン
        </Heading>

        <Stack spacing="40px" align="center">
          <AuthInputBox type="email" value={emailValue} onChange={emailOnChange}>
            メールアドレス
          </AuthInputBox>
          <AuthInputBox type="password" value={passwordValue} onChange={passwordOnChange}>
            パスワード
          </AuthInputBox>
          <Divider borderColor={{ base: "#ffe7d4", md: "#AC9386" }} />

          <PrimaryButton
            size="lg"
            w="100%"
            isLoading={loading}
            disabled={loading}
            onClick={onClickLogin}
          >
            ログイン
          </PrimaryButton>
        </Stack>
      </Box>
    </Flex>
  );
};
