import LoginForm from "@/components/component/LoginForm";
import { NextPage } from "next";
import { useRouter } from "next/router";

const Login: NextPage = () => {
  const router = useRouter();
  const loginHandler = async (enteredLoginData: any) => {
    const response = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(enteredLoginData),
    });

    if (!response.ok) {
      alert("로그인에 실패하셨습니다.");
    } else {
      alert("로그인에 성공하셨습니다.");
      router.push("/");
    }
  };

  return (
    <>
      <LoginForm loginHandler={loginHandler} />
    </>
  );
};

export default Login;
