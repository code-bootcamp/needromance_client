import Link from "next/link";
import * as S from "./FindPw.styles";

export default function FindPwSuc() {
  return (
    <S.Wrapper>
      <S.SignInWindow>
        <S.Logo>
          <S.LogoImage src="/img/logo/INR_logo.png" alt="로필 로고" />
        </S.Logo>
        <S.Menu> 비밀번호 재설정 완료</S.Menu>
        <S.ResetButton style={{ margin: "80px" }}>
          <Link href="/signin">
            <a style={{ color: "white" }}>로그인하러 가기</a>
          </Link>
        </S.ResetButton>
      </S.SignInWindow>
    </S.Wrapper>
  );
}
