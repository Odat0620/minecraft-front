import { VFC } from "react";
import { Flex, Text } from "@chakra-ui/layout";
import { Avatar } from "@chakra-ui/avatar";

type Props = {
  name: string;
  avatar?: string;
  cursor?: "" | "pointer";
  onClick?: () => void;
};

export const UserNameAndAvatar: VFC<Props> = (props) => {
  const { name, avatar, cursor, onClick } = props;

  return (
    <Flex
      w="fit-content"
      align="center"
      _hover={{ cursor: cursor, opacity: 0.6 }}
      onClick={onClick}
    >
      <Avatar src={avatar} h="30px" w="30px" mr="4px" bg="#6F574B" showBorder borderColor="#AC9386" />
      <Text fontSize="0.9em" isTruncated>
        {name}
      </Text>
    </Flex>
  );
};
