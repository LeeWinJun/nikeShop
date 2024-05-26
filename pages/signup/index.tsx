import SignupForm from "@/components/component/SignupForm";
import { NextPage } from "next";
import { useRouter } from "next/router";


const Signup: NextPage = () => {
  const router = useRouter();
  async function addSignUpHandler(enteredSignUpData: any) {
    const response = await fetch("/api/signup", {
      method: "POST",
      body: JSON.stringify(enteredSignUpData),
      headers: { "Content-Type": "application/json" },
    });

    const data = await response.json();

    console.log(data);
    if (!response.ok) {
      alert("회원가입에 실패하셨습니다.");
    } else {
      alert("회원가입 성공");
      router.push("/");
    }
  }

  return <SignupForm onAddSignUp={addSignUpHandler} />;
};

export default Signup;
