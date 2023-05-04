import Link from "next/link";
import BorderInput from "../../commons/input/Input";
import * as S from "./SignIn.styles";
import GoogleSignIn from "./GoogleSignIn";
import { login } from "../../../commons/api/signup";
import { ChangeEvent, useState } from "react";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../commons/store/atoms";
import { useRouter } from "next/router";

export default function SignIn() {
  const router = useRouter();
  const [inputs, setInputs] = useState({ email: "", password: "" });
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);

  const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const handleLoginButton = async () => {
    event?.preventDefault();
    await login(inputs.email, inputs.password).then((data) => {
      // 페이지 새로고침시 state가 초기화되는 현상을 막기위헤,  로컬 스토리지에 담아준다!
      if (typeof window !== "undefined") {
        localStorage.setItem("accessToken", data);
      }
      // Recoil state 업데이트
      setAccessToken(data);

      const page = localStorage.getItem("prevPage");

      if (page) {
        router.push(String(page));
      } else {
        router.push("/");
      }
    });
  };

  return (
    <S.Wrapper>
      <S.SignInWindow>
        <S.Logo>
          <S.LogoImage src="img/logo/INR_logo.png" alt="로필 로고" />
          지금 당신의 연애고민은 무엇인가요?
        </S.Logo>
        <S.SignInForm>
          <S.InputWrapper>
            <BorderInput
              name="email"
              label="Email"
              onChange={handleInput}
              style={{ marginBottom: "25px" }}
            />
          </S.InputWrapper>
          <S.InputWrapper>
            <BorderInput
              type="password"
              name="password"
              label="Password"
              onChange={handleInput}
            />
          </S.InputWrapper>
          <S.ButtonWrapper>
            <S.SignInButton onClick={handleLoginButton}>SignIn</S.SignInButton>
          </S.ButtonWrapper>
        </S.SignInForm>
        <S.BottomWrapper>
          <S.FindID>
            <Link href="/findpw">
              <a>아이디/비밀번호</a>
            </Link>
            를 잊으셨나요?
          </S.FindID>
          <S.Line />
          <div>
            <GoogleSignIn />
          </div>
          <S.SignUpLink>
            <Link href="/signup">
              <a>회원가입</a>
            </Link>
          </S.SignUpLink>
        </S.BottomWrapper>
      </S.SignInWindow>
    </S.Wrapper>
  );
}
