import { VFC, useRef } from "react";
import { Avatar, useDisclosure } from "@chakra-ui/react";
import { Divider, Heading } from "@chakra-ui/layout";
import { IconButton } from "@chakra-ui/button";
import { Menu, MenuButton, MenuDivider, MenuList } from "@chakra-ui/menu";
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/modal";
import { GiHamburgerMenu } from "react-icons/gi";

import { MainMenuItems } from "@/components/organisms/layouts/MainMenuItems";
import { CurrentUserType } from "@/types/user";

type Props = {
  currentUser: CurrentUserType | undefined;
  onClickLogout: () => void;
  onClickMypage: () => void;
  onClickSetting: () => void;
};

export const MainMenuButton: VFC<Props> = (props) => {
  const { currentUser, onClickMypage, onClickSetting, onClickLogout } = props;
  const { isOpen, onOpen, onClose: onCloseDrawer } = useDisclosure();
  const btnRef = useRef<HTMLElement>(null);

  return (
    <>
      <Menu>
        {({ onClose }) => (
          <>
            <MenuButton
              display={{ base: "none", md: "block" }}
              h="36px"
              w="36px"
              cursor="pointer"
              as={Avatar}
              icon={
                <Avatar
                  showBorder
                  transition="all 0.2s"
                  _hover={{ borderColor: "#F2BF91" }}
                  size="full"
                />
              }
              variant="outline"
            />
            <MenuList minW={200} bg="#ffe7d4" borderColor="#6F574B">
              {currentUser && (
                <Heading
                  as="h3"
                  fontSize="1em"
                  lineHeight="2em"
                  textAlign="center"
                  color="#6F574B"
                  isTruncated
                >
                  {currentUser.name}
                </Heading>
              )}
              <MenuDivider borderColor="#AC9386" />
              <MainMenuItems
                onClose={onClose}
                isLoggedIn={currentUser ? true : false}
                onClickMypage={onClickMypage}
                onClickSetting={onClickSetting}
                onClickLogout={onClickLogout}
              />
            </MenuList>

            <IconButton
              display={{ base: "flex", md: "none" }}
              aria-label="メニューアイコン"
              bg="inherit"
              color="inherit"
              icon={<GiHamburgerMenu fontSize="1.6em" />}
              _hover={{ bg: "inherit", color: "#F2BF91" }}
              _focus={{ outlineColor: "#F2BF91", color: "#F2BF91" }}
              _active={{ bg: "inherit", outlineColor: "none" }}
              onClick={onOpen}
            />
            <Drawer
              isOpen={isOpen}
              placement="right"
              onClose={onCloseDrawer}
              finalFocusRef={btnRef}
            >
              <DrawerOverlay />
              <DrawerContent bg="#ffe7d4">
                <DrawerCloseButton w="40px" h="40px" _focus={{ outlineColor: "#EDA464" }} />
                <DrawerHeader
                  display="flex"
                  alignItems="center"
                  pl="20px"
                  justifyContent={currentUser ? "start" : "center"}
                >
                  {currentUser ? (
                    <>
                      <Avatar h="40px" w="40px" mr="10px" showBorder size="full" />
                      {currentUser.name}
                    </>
                  ) : (
                    <>メニュー</>
                  )}
                </DrawerHeader>
                <Divider borderColor="#AC9386" />
                <DrawerBody px="0px">
                  <MainMenuItems
                    isLoggedIn={currentUser ? true : false}
                    onClickMypage={onClickMypage}
                    onClickSetting={onClickSetting}
                    onClickLogout={onClickLogout}
                    onClose={onCloseDrawer}
                    isMobile
                  />
                </DrawerBody>
              </DrawerContent>
            </Drawer>
          </>
        )}
      </Menu>
    </>
  );
};
