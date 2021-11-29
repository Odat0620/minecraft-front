import { useState } from "react";
import type { NextPage } from "next";
import Router from "next/router";

import { useInput } from "@/hooks/useInput";
import { client } from "@/api/axiosClient";
import { useMessage } from "@/hooks/useMessage";
import { LoginPageTemplate } from "@/components/templates/auth/LoginPageTemplate";

const Login: NextPage = () => {
  const email = useInput("");
  const password = useInput("");
  const { showMessage } = useMessage();
  const [loading, setLoading] = useState<boolean>(false);

  const onClickLogin = async () => {
    setLoading(true);
    if (!email.value || !password.value) {
      showMessage({ title: "入力されていない項目があります。", status: "error" });
      setLoading(false);
      return;
    }
    const loginParams = {
      email: email.value,
      password: password.value,
    };

    await client
      .get("/sanctum/csrf-cookie")
      .then(() => {
        client
          .post("/login", loginParams)
          .then((res) => {
            console.log(res.data);
            Router.push("/");
            showMessage({ title: "ログインしました。", status: "success" });
          })
          .catch((err) => {
            console.log(err);
            showMessage({ title: "ログインに失敗しました。", status: "error" });
          });
      })
      .catch((err) => {
        console.log(err);
        showMessage({ title: "ログインに失敗しました。", status: "error" });
      });
    setLoading(false);
  };

  return (
    <LoginPageTemplate
      emailValue={email.value}
      emailOnChange={email.onChange}
      passwordValue={password.value}
      passwordOnChange={password.onChange}
      onClickLogin={onClickLogin}
      loading={loading}
    />
  );
};

export const getServerSideProps = async () => ({
  props: {
    layout: "login",
  },
});

export default Login;
