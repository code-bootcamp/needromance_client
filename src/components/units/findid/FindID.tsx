import Link from "next/link";
import BorderInput from "../../commons/input/Input";
import * as S from "./FindID.styles";

export default function FindID() {
  return (
    <S.Wrapper>
      <S.SignInWindow>
        <S.Logo>
          <S.LogoImage src="img/logo/INR_logo.png" alt="로필 로고" />
        </S.Logo>
        <S.Menu> 아이디 찾기</S.Menu>
        <S.SignInForm>
          <S.InputWrapper>
            <BorderInput
              check={true}
              label="Email"
              style={{ marginBottom: "25px" }}
            />
          </S.InputWrapper>
          <S.ButtonWrapper>
            <S.SignInButton>비밀번호 찾기</S.SignInButton>
          </S.ButtonWrapper>
          <Link href="/signin">
            <a>로그인하러 가기</a>
          </Link>
        </S.SignInForm>
        <S.BottomWrapper></S.BottomWrapper>
      </S.SignInWindow>
    </S.Wrapper>
  );
}
