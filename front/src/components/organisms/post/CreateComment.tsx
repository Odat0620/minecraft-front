import { VFC } from "react";
import { Textarea } from "@chakra-ui/textarea";

import { CurrentUserType } from "@/types/user";
import { useTextarea } from "@/hooks/useTextarea";
import { PrimaryButton } from "@/components/atoms/button/PrimaryButton";
import { Create } from "@/api/axiosClient";
import { useMessage } from "@/hooks/useMessage";

type Props = {
  currentUser: CurrentUserType;
  postId: number;
};

export const CreateComment: VFC<Props> = (props) => {
  const { currentUser, postId } = props;
  const comment = useTextarea("");
  const { showMessage } = useMessage();

  const onClickCreateComment = async () => {
    if (comment.value === "") {
      showMessage({ title: "コメントを入力して下さい。", status: "error" });
      return;
    } else if (!currentUser.id) return;

    const commentData = {
      body: comment.value,
      userId: currentUser.id,
      postId: postId,
    };

    await Create("comments", commentData)
      .then((res) => {
        console.log(res);
        comment.setValue("");
        showMessage({ title: "コメントしました。", status: "success" });
      })
      .catch((error) => {
        console.log(error);
        showMessage({ title: "コメント出来ませんでした。", status: "error" });
      });
  };

  return (
    <>
      <Textarea
        rows={5}
        value={comment.value}
        onChange={comment.onChange}
        bg="white"
        borderColor="#AC9386"
        focusBorderColor="#EDA464"
        _placeholder={{ color: "#6F574B", opacity: 0.5 }}
        _hover={{ borderColor: "#6F574B" }}
      />
      <PrimaryButton onClick={onClickCreateComment}>コメント</PrimaryButton>
    </>
  );
};
