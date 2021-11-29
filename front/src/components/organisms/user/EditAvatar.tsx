import { VFC, useRef, ChangeEvent, useState } from "react";
import { Avatar } from "@chakra-ui/avatar";
import { Input } from "@chakra-ui/input";
import { Flex, Text } from "@chakra-ui/layout";

type Props = {
  setAvatar: (file: File) => void;
};

export const EditAvatar: VFC<Props> = (props) => {
  const { setAvatar } = props;
  const [preview, setPreview] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null);

  const fileUpload = () => {
    inputRef.current?.click();
  };

  const handleFile = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files === null) return;
    const file = e.target.files[0];
    e.target.value = "";
    setAvatar(file);
    setPreview(window.URL.createObjectURL(file));
  };

  return (
    <>
      <Flex
        direction="column"
        align="center"
        h="100px"
        cursor="pointer"
        transition="all 0.3s"
        _hover={{ opacity: 0.8 }}
        onClick={fileUpload}
      >
        <Avatar src={preview} h="100px" w="100px" showBorder borderColor="gray.100" />
        <Text
          mt="-35px"
          px="10px"
          color="white"
          bg="rgba(0,0,0,0.5)"
          borderRadius="full"
          zIndex="1"
        >
          編集
        </Text>
        <Input hidden ref={inputRef} accept="image/*" type="file" onChange={handleFile} />
      </Flex>
    </>
  );
};
