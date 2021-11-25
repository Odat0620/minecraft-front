import { VFC } from "react";
import { Box, Stack, Divider, Text } from "@chakra-ui/layout";
import { MenuDivider } from "@chakra-ui/menu";
import { useRouter } from "next/router";
import { CgProfile } from "react-icons/cg";
import { FiMail, FiSettings } from "react-icons/fi";
import { RiPagesLine } from "react-icons/ri";
import { BiLogOut } from "react-icons/bi";

import { MenuItemOrangeColor } from "@/components/atoms/button/MenuItemOrangeColor";
import { PrimaryButton } from "@/components/atoms/button/PrimaryButton";

type Props = {
  isLoggedIn: boolean;
  onClickMypage: () => void;
  onClickSetting: () => void;
  onClickLogout: () => void;
  onClose: () => void;
  isMobile?: boolean;
};

export const MainMenuItems: VFC<Props> = (props) => {
  const { isLoggedIn, onClickMypage, onClickSetting, onClickLogout, onClose, isMobile } = props;
  const router = useRouter();

  const onClickLogin = () => {
    onClose();
    router.push("/login");
  };
  const onClickRegister = () => {
    onClose();
    router.push("/register");
  };

  return (
    <>
      <Box fontSize={isMobile ? "xl" : "inherit"}>
        {isLoggedIn ? (
          <>
            <MenuItemOrangeColor
              h="3em"
              icon={<CgProfile fontSize="1.6em" />}
              onClick={onClickMypage}
            >
              マイページ
            </MenuItemOrangeColor>
            <MenuItemOrangeColor
              h="3em"
              icon={<FiSettings fontSize="1.6em" />}
              onClick={onClickSetting}
            >
              プロフィール設定
            </MenuItemOrangeColor>
            <MenuItemOrangeColor
              h="3em"
              icon={<RiPagesLine fontSize="1.6em" />}
              onClick={() => router.push("/guide")}
            >
              ガイドライン
            </MenuItemOrangeColor>
            <MenuItemOrangeColor
              h="3em"
              icon={<FiMail fontSize="1.6em" />}
              onClick={() => router.push("/contact")}
            >
              お問い合わせ
            </MenuItemOrangeColor>
            <MenuDivider borderColor="#AC9386" />
            <MenuItemOrangeColor
              h="3em"
              color="red"
              icon={<BiLogOut fontSize="1.6em" />}
              onClick={onClickLogout}
            >
              ログアウト
            </MenuItemOrangeColor>
          </>
        ) : (
          <>
            <MenuItemOrangeColor
              h="3em"
              icon={<RiPagesLine fontSize="1.6em" />}
              onClick={() => router.push("/guide")}
            >
              ガイドライン
            </MenuItemOrangeColor>
            <MenuItemOrangeColor
              h="3em"
              icon={<FiMail fontSize="1.6em" />}
              onClick={() => router.push("/contact")}
            >
              お問い合わせ
            </MenuItemOrangeColor>
            <Divider mb="10px" borderColor="#AC9386" />
            <Stack alignItems="center" px="20px" spacing="10px">
              <PrimaryButton w="full" shadow="md" onClick={onClickLogin}>
                ログイン
              </PrimaryButton>
              <Text color="#6F574B">または</Text>
              <PrimaryButton w="full" shadow="md" onClick={onClickRegister}>
                新規登録
              </PrimaryButton>
            </Stack>
          </>
        )}
      </Box>
    </>
  );
};
