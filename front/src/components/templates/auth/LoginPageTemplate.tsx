import { VFC, ChangeEvent } from "react";
import { Box, Flex, Stack, Heading, Divider } from "@chakra-ui/react";

import { PrimaryButton } from "@/components/atoms/button/PrimaryButton";
import { FontSize } from "@/theme/FontSize";
import { LabelAndInputBox } from "@/components/molecules/LabelAndInputBox";

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
          ログイン
        </Heading>

        <Stack spacing="40px" align="center">
          <LabelAndInputBox type="email" value={emailValue} onChange={emailOnChange}>
            メールアドレス
          </LabelAndInputBox>
          <LabelAndInputBox type="password" value={passwordValue} onChange={passwordOnChange}>
            パスワード
          </LabelAndInputBox>
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
