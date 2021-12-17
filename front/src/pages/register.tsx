import { useState } from "react";
import type { NextPage } from "next";
import Router from "next/router";

import { useInput } from "@/hooks/useInput";
import { client, Create } from "@/api/axiosClient";
import { useMessage } from "@/hooks/useMessage";
import { RegisterPageTemplate } from "@/components/templates/auth/RegisterPageTemplate";

const Register: NextPage = () => {
  const name = useInput("");
  const email = useInput("");
  const password = useInput("");
  const confirmPassword = useInput("");
  const { showMessage } = useMessage();
  const [loading, setLoading] = useState<boolean>(false);

  const onClickRegister = async () => {
    setLoading(true);
    if (!name.value || !email.value || !password.value || !confirmPassword.value) {
      showMessage({ title: "入力されていない項目があります。", status: "error" });
      setLoading(false);
      return;
    } else if (password.value !== confirmPassword.value) {
      showMessage({ title: "パスワードとパスワード確認が違います。", status: "error" });
      setLoading(false);
      return;
    }
    const registerParams = {
      name: name.value,
      email: email.value,
      password: password.value,
      confirmPassword: confirmPassword.value,
    };

    await client("/sanctum/csrf-cookie")
      .then(() => {
        Create("/register", registerParams)
          .then((res) => {
            console.log(res.data);
            Router.push("/");
            showMessage({ title: "登録が完了しました。", status: "success" });
          })
          .catch((err) => {
            console.log(err);
            showMessage({ title: "登録に失敗しました。", status: "error" });
          });
      })
      .catch((err) => {
        console.log(err);
        showMessage({ title: "登録に失敗しました。", status: "error" });
      });
    setLoading(false);
  };

  return (
    <RegisterPageTemplate
      nameValue={name.value}
      nameOnChange={name.onChange}
      emailValue={email.value}
      emailOnChange={email.onChange}
      passwordValue={password.value}
      passwordOnChange={password.onChange}
      confirmPasswordValue={confirmPassword.value}
      confirmPasswordOnChange={confirmPassword.onChange}
      onClickRegister={onClickRegister}
      loading={loading}
    />
  );
};

export const getServerSideProps = async () => ({
  props: {
    layout: "register",
  },
});

export default Register;
