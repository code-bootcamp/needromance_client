import Link from "next/link";
import BorderInput from "../../commons/input/Input";
import * as S from "./SignIn.styles";
import GoogleSignIn from "./GoogleSignIn";
import { useSession, signIn, signOut } from "next-auth/react";

export default function SignIn() {
  const { data: session } = useSession();

  console.log(session);
  return (
    <S.Wrapper>
      <S.SignInWindow>
        <S.Logo>
          <S.LogoImage src="img/logo/INR_logo.png" alt="로필 로고" />
          지금 당신의 연애고민은 무엇인가요?
        </S.Logo>
        <S.SignInForm>
          <S.InputWrapper>
            <BorderInput label="Email" style={{ marginBottom: "25px" }} />
          </S.InputWrapper>
          <S.InputWrapper>
            <BorderInput label="Password" />
          </S.InputWrapper>
          <S.ButtonWrapper>
            <S.SignInButton>SignIn</S.SignInButton>
          </S.ButtonWrapper>
        </S.SignInForm>
        <S.BottomWrapper>
          <S.FindID>
            <Link href="/findid">
              <a>아이디</a>
            </Link>
            /
            <Link href="/findpw">
              <a>비밀번호</a>
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
        <button onClick={() => signIn("google")}>구글 로그인</button>
        <button onClick={() => signIn("kakao", { callbackUrl: "/" })}>
          카카오톡 Sign in
        </button>
        <button onClick={() => signIn("github")}>깃허브 로그인</button>
        <button onClick={() => signIn("naver")}>네이버 로그인</button>
        {session && <button onClick={() => signOut()}>로그아웃</button>}
      </S.SignInWindow>
    </S.Wrapper>
  );
}
