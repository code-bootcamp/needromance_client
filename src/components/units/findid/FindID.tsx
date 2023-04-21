import BorderInput from "../../commons/input/Input";
import * as S from "./FindID.styles";

export default function FindID() {
  return (
    <S.Wrapper>
      <S.SignInWindow>
        <S.Logo>
          <S.LogoImage src="img/logo/INR_logo.png" alt="로필 로고" />
        </S.Logo>
        <div> 아이디 찾기</div>
        <S.SignInForm>
          <S.InputWrapper>
            <BorderInput label="Email" style={{ marginBottom: "25px" }} />
            <S.Checker />
          </S.InputWrapper>

          <S.ButtonWrapper>
            <S.SignInButton>SignIn</S.SignInButton>
          </S.ButtonWrapper>
        </S.SignInForm>
        <S.BottomWrapper>
          <S.FindID>
            <span>아이디</span>/ <span>비밀번호</span>를 잊으셨나요?
          </S.FindID>
          <S.Line />
          <div>구글 로그인 구역</div>
          <S.SignUpLink>회원이 아니라면, </S.SignUpLink>
        </S.BottomWrapper>
      </S.SignInWindow>
    </S.Wrapper>
  );
}
