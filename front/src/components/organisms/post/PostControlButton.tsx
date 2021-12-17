import { VFC } from "react";
import { Menu, MenuButton, MenuList, MenuDivider } from "@chakra-ui/menu";
import { IconButton } from "@chakra-ui/button";
import { BsThreeDots } from "react-icons/bs";
import { FaEdit, FaTrashAlt } from "react-icons/fa";

import { MenuItemOrangeColor } from "@/components/atoms/button/MenuItemOrangeColor";
import { useEditPostData } from "@/stores/contexts";
import { PostType } from "@/types/post";
import { CurrentUserType } from "@/types/user";
import { useRouter } from "next/router";

type Props = {
  post: PostType;
  currentUser: CurrentUserType;
};

export const PostControlButton: VFC<Props> = (props) => {
  const { post, currentUser } = props;
  const { mutate: mutateEditPost } = useEditPostData();
  const router = useRouter();

  const onClickToEditPostPage = async () => {
    if (currentUser.id !== post.userId) return;
    const postData = {
      id: post.id,
      title: post.title,
      userId: post.userId,
      version: post.version,
      image: post.image,
      body: post.body,
      material: post.material,
      recipe: post.recipe,
    };
    await mutateEditPost(postData);
    router.push("/posts/edit");
  };

  return (
    <Menu>
      <MenuButton
        minW="30px"
        h="30px"
        fontSize="lg"
        variant="outline"
        borderColor="#6F574B77"
        borderRadius="50%"
        bg="#FFE7D4"
        _active={{ bg: "#AC9386" }}
        _selected={{ bg: "#AC938666" }}
        _focus={{ bg: "#AC938666" }}
        _hover={{ bg: "#AC938644" }}
        as={IconButton}
        icon={<BsThreeDots />}
      />
      <MenuList minW={150} bg="#ffe7d4" borderColor="#6F574B">
        <MenuItemOrangeColor icon={<FaEdit fontSize="1.4em" />} onClick={onClickToEditPostPage}>
          編集
        </MenuItemOrangeColor>
        <MenuDivider />
        <MenuItemOrangeColor icon={<FaTrashAlt fontSize="1.4em" />} color="red.500">
          削除
        </MenuItemOrangeColor>
      </MenuList>
    </Menu>
  );
};
